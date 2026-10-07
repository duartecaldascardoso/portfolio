const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const links = {
    github: 'https://github.com/duartecaldascardoso',
    linkedin: 'https://www.linkedin.com/in/duartecardoso/',
    email: 'mailto:caldasdcardoso@gmail.com',
    cv: asset('config/DuarteCardoso.pdf'),
    certifications: 'https://www.linkedin.com/in/duartecardoso/details/certifications/',
};

export const profileImage = asset('images/profile.jpg');

export type Project = {
    name: string;
    year: string;
    summary: string;
    description: string;
    stack: string[];
    href: string;
    website?: string;
    icon?: string;
    image?: string;
    featured?: boolean;
};

export const projectId = (name: string) => name.replace(/\s+/g, '-').toLowerCase();

export const projects: Project[] = [
    {
        name: 'complydoc',
        year: '2026',
        summary: 'Checks documents before they reach an LLM.',
        description:
            'An open-source tool that inspects documents, and the output of document loaders, before they are sent to an LLM. It measures what processing them will cost, how reliably text can be read off each page, which personal and financial identifiers they contain, and whether anything hidden in a file is addressed to a model. It runs entirely on your machine, from the command line, a notebook, a test suite or CI, and works with LangChain, LlamaIndex, Unstructured, Docling and more.',
        stack: ['Python', 'Document intelligence', 'LLM security'],
        href: 'https://github.com/complydoc/complydoc',
        website: 'https://complydoc.github.io/complydoc/',
        icon: asset('config/projects/complydoc.svg'),
        image: asset('images/complydoc-report.jpg'),
        featured: true,
    },
    {
        name: 'snappy diff',
        year: '2026',
        summary: 'An insanely fast side-by-side diff viewer.',
        description:
            'A side-by-side diff viewer for git branches, uncommitted changes and patch files, served from a small Rust binary with an embedded React UI. Run it in any repository, pipe a diff into it, or drop a patch onto the page, then search files with / and jump between them with j and k.',
        stack: ['Rust', 'React', 'TypeScript'],
        href: 'https://github.com/duartecaldascardoso/snappy-diff',
        image: asset('images/snappy-diff.jpg'),
        featured: true,
    },
    {
        name: 'Eunomia',
        year: '2026',
        summary: 'A productivity suite, in stealth under Modus Labs.',
        description:
            'A productivity suite combining automatic metrics collection, machine learning data analysis, agentic calendar planning, and a social network for shared or competitive goals with friends. Built under Modus Labs and currently in stealth development.',
        stack: ['PyTorch', 'scikit-learn', 'Django', 'React', 'LangGraph', 'AG-UI'],
        href: 'https://github.com/duartecaldascardoso/Eunomia',
        icon: asset('config/projects/Eunomia.png'),
        featured: true,
    },
    {
        name: 'article-explainer',
        year: '2025',
        summary: 'A swarm of agents that explains scientific articles.',
        description:
            'Uses LangGraph’s Swarm architecture to hand each question about an article to a specialised agent, answering with analogies, code samples and summaries. Supports hosted and local models. Featured as an example project by LangChain.',
        stack: ['LangGraph', 'Multi-agent', 'Python', 'Streamlit'],
        href: 'https://github.com/duartecaldascardoso/article-explainer',
        featured: true,
    },
    {
        name: 'me-agent',
        year: '2025',
        summary: 'A documented baseline for building your own RAG system.',
        description:
            'A RAG pipeline with user-focused documentation covering ingestion, retrieval and agentic interaction, meant as a practical starting point for custom RAG systems.',
        stack: ['Python', 'RAG', 'Vector search'],
        href: 'https://github.com/duartecaldascardoso/me-agent',
    },
    {
        name: 'Modus Labs',
        year: '2025',
        summary: 'A small lab for products and AI experiments.',
        description:
            'A startup I am building with college colleagues, working as a living lab for product development, AI and ML experimentation, and applied projects.',
        stack: ['Product', 'AI/ML', 'Prototyping'],
        href: 'https://github.com/modus-laboratories',
    },
];

export type Paper = { title: string; venue: string; date: string; note?: string; href: string };

export const papers: Paper[] = [
    {
        title: 'Simplifying Complex Insurance Product Management with AI',
        venue: 'SEI 2025',
        date: 'Nov 2025',
        note: 'Best Paper Award',
        href: 'https://sei.dei.isep.ipp.pt/wp-content/uploads/2026/01/SEI25-LdA.pdf',
    },
    {
        title: 'Automated Extraction of Insurance Product Characteristics',
        venue: 'SEI 2025',
        date: 'Nov 2025',
        href: 'https://sei.dei.isep.ipp.pt/wp-content/uploads/2026/01/SEI25-LdA.pdf',
    },
];

export type Course = { title: string; provider: string; date: string };

export const courses: Course[] = [
    { title: 'Natural Language Processing (NLP) in Python', provider: 'DataCamp', date: 'Aug 2026' },
    { title: 'Natural Language Processing with spaCy', provider: 'DataCamp', date: 'Aug 2026' },
    { title: 'Claude with Amazon Bedrock', provider: 'Anthropic', date: 'Mar 2026' },
    { title: 'LangSmith Essentials', provider: 'LangChain', date: 'Feb 2026' },
    { title: 'Machine Learning Model Development', provider: 'Databricks', date: 'Feb 2026' },
    { title: 'Introduction to Model Context Protocol', provider: 'Anthropic', date: 'Feb 2026' },
    { title: 'Model Context Protocol: Advanced Topics', provider: 'Anthropic', date: 'Feb 2026' },
];

export type Book = { title: string; author: string; cover: string; note: string; href: string };

export const books: Book[] = [
    {
        title: 'AI Engineering',
        author: 'Chip Huyen',
        cover: 'https://covers.openlibrary.org/b/isbn/9781098166304-M.jpg',
        note: 'Production-oriented guidance for designing and operating AI applications end to end.',
        href: 'https://www.oreilly.com/library/view/ai-engineering/9781098166298/',
    },
    {
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        cover: 'https://covers.openlibrary.org/b/isbn/9781449373320-M.jpg',
        note: 'A practical foundation for building reliable, scalable and maintainable data systems.',
        href: 'https://dataintensive.net/',
    },
    {
        title: 'Architecture Patterns with Python',
        author: 'Harry J.W. Percival and Bob Gregory',
        cover: 'https://covers.openlibrary.org/b/isbn/9781492052203-M.jpg',
        note: 'Clear architecture and domain modelling patterns for maintainable Python systems.',
        href: 'https://www.cosmicpython.com/',
    },
];

export type TimelineEntry = { title: string; place: string; period: string; details: string[] };

export const work: TimelineEntry[] = [
    {
        title: 'AI Engineer',
        place: 'DareData',
        period: 'Jul 2026 – now',
        details: ['Agentic and document-intelligence solutions for clients in the financial sector.'],
    },
    {
        title: 'AI Engineer',
        place: 'msg insur:it Iberia',
        period: 'Aug 2024 – Jul 2026',
        details: [
            'Built the company’s official Document Intelligence tool on an Agentic RAG architecture.',
            'Designed Configure:it, a multi-agent Product Machine module that turns product documents into configurations.',
        ],
    },
    {
        title: 'Software Engineer',
        place: 'msg insur:it Iberia',
        period: 'Jun 2023 – Aug 2024',
        details: ['Full-stack work on an enterprise insurance platform for a North American client, in Java, Backbone and PostgreSQL.'],
    },
    {
        title: 'Intern',
        place: 'msg insur:it Iberia',
        period: 'Feb 2023 – Jun 2023',
        details: ['An end-to-end quote-and-buy insurance proof of concept on Camunda, plus an open-source Camunda contribution.'],
    },
];

export const education: TimelineEntry[] = [
    {
        title: 'MSc in Software Engineering',
        place: 'FEUP',
        period: 'Sep 2024 – Jul 2026',
        details: ['Thesis: Product Validation Accelerator Engine (19/20). Final grade 18/20.'],
    },
    {
        title: 'BSc in Software Engineering',
        place: 'ISEP',
        period: 'Sep 2020 – Sep 2023',
        details: ['Vice-president of the Informatics Student Group, and player in the volleyball team.'],
    },
];

export type Hobby = { title: string; detail: string; period: string; image: string };

export const outsideWork: Hobby[] = [
    {
        title: 'Bass in Mantra Rota',
        detail: 'Playing and writing songs with the band.',
        period: '2023 – now',
        image: asset('images/bass.jpg'),
    },
    {
        title: 'Chess',
        detail: 'Player at Academia de Xadrez de Gaia, and coach at Focus Chess in 2022–23.',
        period: '2022 – now',
        image: asset('images/chess.jpg'),
    },
    {
        title: 'Classical guitar',
        detail: 'Studied to 5th grade at Academia de Música Vilar do Paraíso, and won first place at the Guitarrismos national contest.',
        period: '2009 – 2016',
        image: asset('images/guitar.jpg'),
    },
    {
        title: 'Volleyball',
        detail: 'Porto regional team and the national beach volleyball team.',
        period: '2008 – 2019',
        image: asset('images/volleyball.jpg'),
    },
];
