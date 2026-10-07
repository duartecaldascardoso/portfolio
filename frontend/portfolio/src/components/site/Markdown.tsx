import { Box } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

// Typography for blog posts. Headings, links, quotes, lists, tables, code and images
// all come from plain Markdown, so a post never needs any React.
// Code colours, after GitHub's light and dark themes. Fenced blocks are highlighted by
// language (```python), and blocks without one have their language guessed.
const syntax = (light: string, dark: string) => ({ color: light, _dark: { color: dark } });

const highlighting = {
    '& .hljs-comment, & .hljs-quote': { ...syntax('#6e7781', '#8b949e'), fontStyle: 'italic' },
    '& .hljs-keyword, & .hljs-selector-tag, & .hljs-meta .hljs-keyword, & .hljs-template-tag, & .hljs-type': syntax('#cf222e', '#ff7b72'),
    '& .hljs-string, & .hljs-regexp, & .hljs-meta .hljs-string': syntax('#0a3069', '#a5d6ff'),
    '& .hljs-number, & .hljs-literal, & .hljs-variable, & .hljs-template-variable, & .hljs-attr, & .hljs-attribute, & .hljs-selector-attr, & .hljs-selector-class, & .hljs-selector-id':
        syntax('#0550ae', '#79c0ff'),
    '& .hljs-title, & .hljs-title.function_, & .hljs-section': syntax('#8250df', '#d2a8ff'),
    '& .hljs-title.class_, & .hljs-built_in, & .hljs-symbol': syntax('#953800', '#ffa657'),
    '& .hljs-name, & .hljs-tag, & .hljs-selector-pseudo': syntax('#116329', '#7ee787'),
    '& .hljs-params, & .hljs-subst': syntax('#24292f', '#c9d1d9'),
    '& .hljs-meta': syntax('#6e7781', '#8b949e'),
    '& .hljs-addition': { ...syntax('#116329', '#aff5b4'), bg: { base: '#dafbe1', _dark: '#033a16' } },
    '& .hljs-deletion': { ...syntax('#82071e', '#ffdcd7'), bg: { base: '#ffebe9', _dark: '#67060c' } },
};

const prose = {
    ...highlighting,
    fontFamily: 'serif',
    fontSize: { base: '17px', md: '18px' },
    lineHeight: '1.75',
    color: 'fg',
    '& > * + *': { marginTop: '1.25em' },
    '& h2': { fontFamily: 'body', fontSize: '1.3em', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.01em', marginTop: '2.2em' },
    '& h3': { fontFamily: 'body', fontSize: '1.1em', fontWeight: 600, lineHeight: 1.35, marginTop: '1.8em' },
    '& h4': { fontFamily: 'body', fontSize: '1em', fontWeight: 600, marginTop: '1.6em' },
    '& a': { textDecoration: 'underline', textDecorationColor: 'var(--chakra-colors-border-emphasized)' },
    '& a:hover': { textDecorationColor: 'currentColor' },
    '& strong': { fontWeight: 600 },
    '& ul, & ol': { paddingLeft: '1.4em' },
    '& ul': { listStyleType: 'disc' },
    '& ol': { listStyleType: 'decimal' },
    '& li + li': { marginTop: '0.4em' },
    '& li::marker': { color: 'var(--chakra-colors-fg-muted)' },
    '& blockquote': {
        borderLeftWidth: '2px',
        borderColor: 'border.emphasized',
        paddingLeft: '1em',
        color: 'fg.muted',
        fontStyle: 'italic',
    },
    '& hr': { borderColor: 'border', margin: '2.5em 0' },
    '& img': { borderRadius: 'md', margin: '0 auto', maxWidth: '100%', height: 'auto' },
    '& figcaption, & img + em': {
        display: 'block',
        fontFamily: 'body',
        fontSize: 'sm',
        color: 'fg.muted',
        textAlign: 'center',
        marginTop: '0.6em',
        fontStyle: 'normal',
    },
    '& code': {
        fontFamily: 'mono',
        fontSize: '0.82em',
        bg: 'bg.muted',
        borderRadius: 'sm',
        paddingX: '0.3em',
        paddingY: '0.1em',
    },
    '& pre': {
        fontFamily: 'mono',
        fontSize: '14px',
        lineHeight: 1.6,
        bg: 'bg.muted',
        borderWidth: '1px',
        borderColor: 'border',
        borderRadius: 'md',
        padding: '1em 1.2em',
        overflowX: 'auto',
    },
    '& pre code': { bg: 'transparent', padding: 0, fontSize: 'inherit' },
    '& table': { width: '100%', fontFamily: 'body', fontSize: 'sm', borderCollapse: 'collapse', display: 'block', overflowX: 'auto' },
    '& th, & td': { borderBottomWidth: '1px', borderColor: 'border', padding: '0.5em 0.75em', textAlign: 'left' },
    '& th': { fontWeight: 600 },
};

// Images stored in public/ are written as /images/..., which needs the site's base path.
const withBase = (src?: string | Blob) => {
    if (typeof src !== 'string') return undefined;
    return src.startsWith('/') ? `${import.meta.env.BASE_URL.replace(/\/$/, '')}${src}` : src;
};

export const Markdown = ({ children }: { children: string }) => (
    <Box css={prose}>
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[[rehypeHighlight, { detect: true }]]}
            components={{
                a: ({ href, children: label }) => {
                    const external = href?.startsWith('http');
                    return (
                        <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                            {label}
                        </a>
                    );
                },
                img: ({ src, alt }) => <img src={withBase(src)} alt={alt ?? ''} loading="lazy" />,
            }}
        >
            {children}
        </ReactMarkdown>
    </Box>
);
