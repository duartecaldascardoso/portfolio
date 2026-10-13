import { workWithMe, workWithMeMailto, type TextPart, type WorkPoint, type WorkService } from './workWithMe.ts';

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

const renderParts = (parts: TextPart[]) =>
    parts
        .map((part) =>
            typeof part === 'string'
                ? escapeHtml(part)
                : `<a href="${escapeHtml(part.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(part.text)}</a>`,
        )
        .join('');

const renderPoints = (points: WorkPoint[]) =>
    points
        .map(
            (point) =>
                `      <p><strong>${escapeHtml(point.lead)}</strong> ${renderParts(point.parts)}</p>`,
        )
        .join('\n');

const renderServices = (services: WorkService[]) =>
    services
        .map(
            (service) =>
                `      <h3>${escapeHtml(service.title)}</h3>\n      <p>${escapeHtml(service.body)}</p>`,
        )
        .join('\n');

// Static copy of the Work with me page. It sits in the document the server sends.
// A class on <html> hides it once JavaScript runs, so the React page is what visitors see.
export const workWithMeFallbackHtml = `<article id="work-with-me-fallback">
    <h1>${escapeHtml(workWithMe.headline)}</h1>
    <p class="lede">${escapeHtml(workWithMe.subheadline)}</p>
    <section>
      <h2>Services</h2>
${renderServices(workWithMe.services)}
    </section>
    <section>
      <h2>How I work</h2>
${renderPoints(workWithMe.howIWork)}
    </section>
    <section>
      <h2>Proof</h2>
${renderPoints(workWithMe.proof)}
    </section>
    <section class="cta">
      <h2>${escapeHtml(workWithMe.ctaTitle)}</h2>
      <p>${escapeHtml(workWithMe.ctaBody)}</p>
      <p><a href="${escapeHtml(workWithMeMailto)}">${escapeHtml(workWithMe.ctaLabel)}</a></p>
    </section>
  </article>`;

export const workWithMeFallbackCss = `html.js #work-with-me-fallback { display: none; }
    html:not(.js) body { margin: 0; background: #fff; }
    #work-with-me-fallback {
      box-sizing: border-box;
      max-width: 42rem;
      margin: 0 auto;
      padding: 4rem 1.5rem 5rem;
      font-family: Inter, system-ui, sans-serif;
      font-size: 1rem;
      line-height: 1.7;
      color: #52525b;
    }
    #work-with-me-fallback h1,
    #work-with-me-fallback h3,
    #work-with-me-fallback strong,
    #work-with-me-fallback a { color: #18181b; }
    #work-with-me-fallback h1 {
      font-size: 1.875rem;
      font-weight: 600;
      letter-spacing: -0.02em;
      line-height: 1.25;
      margin: 0 0 0.75rem;
    }
    #work-with-me-fallback .lede { margin: 0 0 2.5rem; }
    #work-with-me-fallback h2 {
      font-size: 0.875rem;
      font-weight: 500;
      color: #71717a;
      margin: 2.75rem 0 1rem;
    }
    #work-with-me-fallback h3 { font-size: 1rem; font-weight: 500; margin: 1.25rem 0 0.25rem; }
    #work-with-me-fallback p { margin: 0 0 1rem; }
    #work-with-me-fallback .cta { border-top: 1px solid #e4e4e7; margin-top: 2.75rem; padding-top: 2rem; }
    #work-with-me-fallback .cta h2 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #18181b;
      letter-spacing: -0.02em;
      line-height: 1.35;
      margin: 0 0 0.75rem;
    }
    @media (prefers-color-scheme: dark) {
      html:not(.js) body { background: #09090b; }
      #work-with-me-fallback { color: #a1a1aa; }
      #work-with-me-fallback h1,
      #work-with-me-fallback h3,
      #work-with-me-fallback strong,
      #work-with-me-fallback a,
      #work-with-me-fallback .cta h2 { color: #fafafa; }
      #work-with-me-fallback h2 { color: #a1a1aa; }
      #work-with-me-fallback .cta { border-top-color: #27272a; }
    }`;
