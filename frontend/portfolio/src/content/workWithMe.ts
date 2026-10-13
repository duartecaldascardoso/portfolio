// Copy for the Work with me page. The same words are rendered by the React page and
// written into the document HTML (see workWithMeHtml.ts) so the text is in the
// response, not only in the client render.
// The address matches links.email in data/site.ts.

export const workWithMePath = '/work-with-me';

export const workWithMeEmail = 'caldasdcardoso@gmail.com';

export const workWithMeMailto = `mailto:${workWithMeEmail}`;

export type TextPart = string | { text: string; href: string };

export type WorkPoint = {
    lead: string;
    parts: TextPart[];
};

export type WorkService = {
    title: string;
    body: string;
};

const text = (value: string): TextPart[] => [value];

export const workWithMe = {
    headline: 'AI agents and document systems that hold up in production.',
    subheadline:
        "I'm Duarte Cardoso, an AI Engineer at DareData in Porto. I help EU companies, especially regulated ones, build AI agents and document extraction they can trust.",
    services: [
        {
            title: 'AI agents',
            body: 'Single-agent and multi-agent systems, including browser agents, built for one specific job. Each one ships with evaluation, guardrails and documentation.',
        },
        {
            title: 'Document intelligence & extraction',
            body: 'Unstructured documents turned into structured, validated data. I test loaders and methods on your own files, and I add checks for personal data and prompt injection before anything reaches the model.',
        },
        {
            title: 'Production AI deployment',
            body: 'Moving a working prototype into something your team can run: observability, failure handling, CI quality gates and a clear handover. I also offer a short readiness review if you want a second opinion first.',
        },
    ] satisfies WorkService[],
    howIWork: [
        {
            lead: 'Part-time and focused.',
            parts: text('I take on a small number of projects at about 1–2 days a week, so each one gets real attention.'),
        },
        {
            lead: 'Start small.',
            parts: text('A short scoping call, then a written proposal with scope, timeline and cost before any work begins.'),
        },
        {
            lead: 'Measured.',
            parts: text('We agree up front what "working" means and test against it.'),
        },
        {
            lead: 'Built for regulated settings.',
            parts: text('Traceability, data protection and clear documentation are part of the default.'),
        },
        {
            lead: 'You own it.',
            parts: text('Clean code, documentation and a handover, so your team can run it without me.'),
        },
        {
            lead: 'Working languages:',
            parts: text('English, Portuguese, Spanish.'),
        },
    ] satisfies WorkPoint[],
    proof: [
        {
            lead: 'msg insur:it:',
            parts: text('an agentic document tool used by about 90 people.'),
        },
        {
            lead: 'Configure:it:',
            parts: text('a multi-agent module.'),
        },
        {
            lead: 'Euronext, FreeFloat:',
            parts: text('a browser agent covering 614 companies that saves about 120 person-days a year.'),
        },
        {
            lead: '3.5+ years',
            parts: text('building production AI agents for insurance and finance clients.'),
        },
        {
            lead: 'Open source:',
            parts: [
                { text: 'complydoc', href: 'https://complydoc.github.io/complydoc/' },
                ' (PyPI, MIT, sole maintainer), which analyses documents before AI pipelines: ingestion observability, document-loader comparison, and CI gates for personal data and prompt injection. Also eunomia, another open-source project of mine, and article-explainer (190 GitHub stars, featured by LangChain).',
            ],
        },
        {
            lead: 'Education:',
            parts: text('M.Sc. Software Engineering, FEUP (18/20, thesis 19/20). SEI 2025 Best Paper.'),
        },
    ] satisfies WorkPoint[],
    ctaTitle: 'Have a workflow or a pile of documents that AI should handle?',
    ctaBody:
        "Send me a short note about the problem, your timeline and your constraints. I'll reply with whether I can help and a suggested next step.",
    ctaLabel: 'Talk to me directly',
};
