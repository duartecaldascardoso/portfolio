// Blog posts are Markdown files in src/content/blog. The file name (without .md)
// is the post's URL slug, and the block between the leading `---` lines holds its metadata.

export type Post = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    originalUrl?: string;
    originalSource?: string;
    draft: boolean;
    body: string;
    readingMinutes: number;
};

const files = import.meta.glob('../content/blog/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>;

function unquote(value: string) {
    if (value.startsWith('"') && value.endsWith('"')) {
        try {
            return JSON.parse(value) as string;
        } catch {
            return value.slice(1, -1);
        }
    }
    if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1).replace(/''/g, "'");
    return value;
}

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!match) return { data: {}, body: raw };

    const data: Record<string, string> = {};
    for (const line of match[1].split(/\r?\n/)) {
        const separator = line.indexOf(':');
        if (separator === -1) continue;
        const key = line.slice(0, separator).trim();
        const value = unquote(line.slice(separator + 1).trim());
        if (key) data[key] = value;
    }
    return { data, body: match[2] };
}

function toPost(path: string, raw: string): Post {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    const { data, body } = parseFrontmatter(raw);
    const words = body.split(/\s+/).filter(Boolean).length;

    return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        summary: data.summary ?? '',
        tags: data.tags ? data.tags.replace(/^\[|\]$/g, '').split(',').map((tag) => tag.trim()).filter(Boolean) : [],
        originalUrl: data.originalUrl || undefined,
        originalSource: data.originalSource || undefined,
        draft: data.draft === 'true',
        body,
        readingMinutes: Math.max(1, Math.round(words / 220)),
    };
}

export const posts: Post[] = Object.entries(files)
    .map(([path, raw]) => toPost(path, raw))
    .filter((post) => import.meta.env.DEV || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);

export function formatDate(date: string, style: 'long' | 'short' = 'long') {
    if (!date) return '';
    return new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', {
        day: style === 'long' ? 'numeric' : undefined,
        month: 'short',
        year: 'numeric',
    });
}
