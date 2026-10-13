import { workWithMe, workWithMeMailto } from './workWithMe.ts';

const escapeHtml = (value: string) =>
    value.replace(/[&<>"']/g, (char) => {
        switch (char) {
            case '&':
                return '&amp;';
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            default:
                return '&#39;';
        }
    });

// The CTA is in the document the server sends. A class on <html> hides it once
// JavaScript runs, so the React page is what visitors see.
export const workWithMeFallbackHtml = `<article id="work-with-me-fallback">
    <h1>${escapeHtml(workWithMe.title)}</h1>
    <p>${escapeHtml(workWithMe.body)}</p>
    <p><a href="${escapeHtml(workWithMeMailto)}">${escapeHtml(workWithMe.ctaLabel)}</a></p>
  </article>`;

export const workWithMeFallbackCss = `html.js #work-with-me-fallback { display: none; }
    html:not(.js) body { margin: 0; background: #fff; }
    #work-with-me-fallback {
      box-sizing: border-box;
      max-width: 42rem;
      margin: 0 auto;
      padding: 4rem 1.5rem 5rem;
      font-family: Inter, system-ui, sans-serif;
      font-size: 1.125rem;
      line-height: 1.7;
      color: #52525b;
    }
    #work-with-me-fallback h1 {
      color: #18181b;
      font-size: 1.875rem;
      font-weight: 600;
      letter-spacing: -0.02em;
      line-height: 1.25;
      margin: 0 0 0.75rem;
    }
    #work-with-me-fallback p { margin: 0 0 1rem; }
    #work-with-me-fallback a { color: #18181b; }
    @media (prefers-color-scheme: dark) {
      html:not(.js) body { background: #09090b; }
      #work-with-me-fallback { color: #a1a1aa; }
      #work-with-me-fallback h1,
      #work-with-me-fallback a { color: #fafafa; }
    }`;
