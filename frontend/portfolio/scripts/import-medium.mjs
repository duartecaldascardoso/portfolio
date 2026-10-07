// One-off import of Medium articles into the blog.
//
//   node scripts/import-medium.mjs [feed-url-or-file]
//
// Reads the Medium RSS feed, converts each article to Markdown in src/content/blog,
// and downloads its images into public/images/blog/<slug>/ so the posts no longer
// depend on Medium. Posts that already exist are left alone, so edits made after the
// import are never overwritten.

import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { XMLParser } from 'fast-xml-parser';
import TurndownService from 'turndown';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const blogDir = path.join(root, 'src/content/blog');
const imagesDir = path.join(root, 'public/images/blog');
const source = process.argv[2] ?? 'https://medium.com/feed/@caldasdcardoso';

const exists = (file) => access(file).then(() => true, () => false);

async function readFeed() {
    if (!source.startsWith('http')) return readFile(source, 'utf8');
    const response = await fetch(source, { headers: { 'User-Agent': 'Mozilla/5.0 (blog import)' } });
    if (!response.ok) throw new Error(`Feed request failed: ${response.status}`);
    return response.text();
}

const slugFromLink = (link) =>
    new URL(link).pathname.split('/').filter(Boolean).pop().replace(/-[0-9a-f]{8,}$/, '');

const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '*',
});

turndown.addRule('figure', {
    filter: 'figure',
    replacement: (_content, node) => {
        const img = node.querySelector?.('img') ?? findTag(node, 'IMG');
        const caption = findTag(node, 'FIGCAPTION');
        if (!img) return '';
        const alt = (caption?.textContent || img.getAttribute('alt') || '').trim();
        const image = `![${alt.replace(/[[\]]/g, '')}](${img.getAttribute('src')})`;
        return `\n\n${image}${caption ? `\n*${caption.textContent.trim()}*` : ''}\n\n`;
    },
});

turndown.addRule('pre', {
    filter: 'pre',
    replacement: (_content, node) => {
        const text = node.textContent.replace(/\n+$/, '');
        return `\n\n\`\`\`\n${text}\n\`\`\`\n\n`;
    },
});

function findTag(node, tag) {
    for (const child of node.childNodes ?? []) {
        if (child.nodeName === tag) return child;
        const found = findTag(child, tag);
        if (found) return found;
    }
    return null;
}

function cleanHtml(html, title) {
    return html
        // Medium's 1x1 tracking pixel
        .replace(/<img[^>]+medium\.com\/_\/stat[^>]*>/g, '')
        // "was originally published in <publication>" footer
        .replace(/<hr>\s*<p><a href="[^"]+">[^<]+<\/a> was originally published in[\s\S]*$/, '')
        // A leading heading that repeats the title
        .replace(/^\s*<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/, (match, text) =>
            text.replace(/<[^>]+>/g, '').trim() === title.trim() ? '' : match,
        )
        .replace(/<br\s*\/?>/g, '\n');
}

// Medium uses h3 and h4 for article headings; shift them so the largest becomes h2.
function normaliseHeadings(markdown) {
    const levels = [...markdown.matchAll(/^(#{1,6}) /gm)].map((match) => match[1].length);
    if (levels.length === 0) return markdown;
    const shift = Math.min(...levels) - 2;
    return markdown.replace(/^(#{1,6}) /gm, (_match, hashes) => `${'#'.repeat(Math.max(2, hashes.length - shift))} `);
}

async function downloadImages(markdown, slug) {
    const urls = [...new Set([...markdown.matchAll(/!\[[^\]]*\]\((https?:[^)\s]+)\)/g)].map((match) => match[1]))];
    if (urls.length === 0) return markdown;

    await mkdir(path.join(imagesDir, slug), { recursive: true });
    let result = markdown;

    for (const [index, url] of urls.entries()) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(String(response.status));
            const type = response.headers.get('content-type') ?? '';
            const extension = type.includes('png') ? 'png' : type.includes('gif') ? 'gif' : type.includes('webp') ? 'webp' : 'jpg';
            const file = `${index + 1}.${extension}`;
            await writeFile(path.join(imagesDir, slug, file), Buffer.from(await response.arrayBuffer()));
            result = result.split(url).join(`/images/blog/${slug}/${file}`);
        } catch (error) {
            console.warn(`  could not download ${url} (${error.message}); keeping the remote link`);
        }
    }
    return result;
}

const yamlValue = (value) => (/[:#"'[\]]/.test(value) ? JSON.stringify(value) : value);

function summarise(markdown) {
    const paragraph = markdown
        .split(/\n{2,}/)
        .map((block) => block.trim())
        .find((block) => block && !/^(#|!\[|```|>|-|\*|\d+\.)/.test(block)) ?? '';
    const text = paragraph.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '').replace(/\s+/g, ' ');
    if (text.length <= 220) return text;
    return `${text.slice(0, 217).replace(/\s+\S*$/, '')}…`;
}

const parser = new XMLParser({ ignoreAttributes: true, cdataPropName: false });
const feed = parser.parse(await readFeed());
const items = [].concat(feed?.rss?.channel?.item ?? []);
console.log(`Found ${items.length} articles in ${source}`);

await mkdir(blogDir, { recursive: true });

for (const item of items) {
    const title = String(item.title).trim();
    const link = String(item.link).split('?')[0];
    const slug = slugFromLink(link);
    const file = path.join(blogDir, `${slug}.md`);

    if (await exists(file)) {
        console.log(`- ${slug}: already imported, skipping`);
        continue;
    }

    const html = cleanHtml(String(item['content:encoded'] ?? item.description ?? ''), title);
    let body = normaliseHeadings(turndown.turndown(html))
        .replace(/^(\s*)([-*]|\d+\.)\s{2,}/gm, '$1$2 ')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
    body = await downloadImages(body, slug);

    const date = new Date(item.pubDate).toISOString().slice(0, 10);
    const tags = [].concat(item.category ?? []).map((tag) => String(tag).replace(/-/g, ' '));

    const frontmatter = [
        '---',
        `title: ${yamlValue(title)}`,
        `date: ${date}`,
        `summary: ${yamlValue(summarise(body))}`,
        `tags: [${tags.join(', ')}]`,
        'originalSource: Medium',
        `originalUrl: ${link}`,
        '---',
    ].join('\n');

    await writeFile(file, `${frontmatter}\n\n${body}\n`);
    console.log(`- ${slug}: imported (${date})`);
}
