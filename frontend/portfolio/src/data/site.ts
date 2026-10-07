const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const links = {
    github: 'https://github.com/duartecaldascardoso',
    linkedin: 'https://www.linkedin.com/in/duartecardoso/',
    email: 'mailto:caldasdcardoso@gmail.com',
    cv: asset('Duarte_Cardoso_CV.pdf'),
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
    package?: string;
    icon?: string;
    image?: string;
    imageDark?: string;
    featured?: boolean;
};

export const projectId = (name: string) => name.replace(/\s+/g, '-').toLowerCase();

export const projects: Project[] = [
    {
        name: 'complydoc',
        year: '2026',
        summary: 'Checks documents before they reach an LLM.',
        description:
            'Open-source observability for document ingestion pipelines, published on PyPI. It traces every loading, splitting and embedding step with timing, token counts and cost, and puts each loader’s reading side by side with the source page, a diff for extracted documents, so you can see lost headings, broken tables or dropped lines and pick the loader that fits your documents. complydoc check adds YAML policies and a GitHub Action that gate ingestion in CI, flagging personal and financial identifiers, hidden text and prompt-injection passages, masked until reviewed. It runs fully locally, with outbound network blocked by default, and works with LangChain, LlamaIndex, Unstructured, Docling, LlamaParse and Azure Document Intelligence.',
        stack: ['Python', 'CLI', 'GitHub Actions', 'LangChain', 'LlamaIndex', 'Docling'],
        href: 'https://github.com/complydoc/complydoc',
        website: 'https://complydoc.github.io/complydoc/',
        package: 'https://pypi.org/project/complydoc/',
        icon: asset('config/projects/complydoc.svg'),
        image: asset('images/complydoc-traces-light.webp'),
        imageDark: asset('images/complydoc-traces-dark.webp'),
        featured: true,
    },
    {
        name: 'snappy-diff',
        year: '2026',
        summary: 'An insanely fast side-by-side diff viewer.',
        description:
            'A fast side-by-side diff viewer for git branches, uncommitted changes and patch files, served from a small Rust binary with an embedded React UI. Run it in any repository, pipe a diff into it, or drop a patch onto the page, then search files with / and jump between them with j and k. One-line installers cover macOS, Linux and Windows.',
        stack: ['Rust', 'React', 'TypeScript'],
        href: 'https://github.com/duartecaldascardoso/snappy-diff',
        image: asset('images/snappy-diff.jpg'),
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
        summary: 'An end-to-end agentic RAG system.',
        description:
            'An end-to-end agentic RAG system for personal documents: PDF, DOCX and Markdown are ingested into a vector store, retrieved, and answered by an agent with that context, served through a streaming FastAPI endpoint and a CLI.',
        stack: ['Python', 'LangChain', 'FastAPI', 'uv'],
        href: 'https://github.com/duartecaldascardoso/me-agent',
        featured: true,
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

// cover: an image in public/ to use; otherwise isbns are the editions to look a cover up for.
export type Book = { title: string; author: string; cover?: string; isbns: string[]; note: string; href: string };

export const books: Book[] = [
    {
        title: 'A Philosophy of Software Design',
        author: 'John Ousterhout',
        cover: asset('images/books/a-philosophy-of-software-design.jpg'),
        isbns: ['9781732102217', '9781732102200'],
        note: 'How to fight complexity with deep modules, information hiding and interfaces that are simple to use.',
        href: 'https://web.stanford.edu/~ouster/cgi-bin/book.php',
    },
    {
        title: 'AI Engineering',
        author: 'Chip Huyen',
        isbns: ['9781098166304'],
        note: 'Production-oriented guidance for designing and operating AI applications end to end.',
        href: 'https://www.oreilly.com/library/view/ai-engineering/9781098166298/',
    },
    {
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        isbns: ['9781449373320'],
        note: 'A practical foundation for building reliable, scalable and maintainable data systems.',
        href: 'https://dataintensive.net/',
    },
    {
        title: 'Architecture Patterns with Python',
        author: 'Harry J.W. Percival and Bob Gregory',
        isbns: ['9781492052203'],
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
        details: [
            'AI consultant for Euronext, designing, developing and deploying cloud-native AI solutions on AWS and Azure that automate operational workflows.',
            'Main developer of FreeFloat, a Dataiku-integrated browser agent (Strands, AWS) automating free float review across 614 companies, targeting about 120 person-days saved a year across four review cycles.',
        ],
    },
    {
        title: 'AI Engineer',
        place: 'msg insur:it Iberia',
        period: 'Aug 2024 – Jul 2026',
        details: [
            'Built the company’s official Document Intelligence tool on an Agentic RAG architecture, serving about 90 users company-wide since launch.',
            'Designed and developed Configure:it, a multi-agent Product Machine module that turns documents into product configurations and answers natural language questions about them.',
            'Built my Master’s thesis in-house: the Product Validation Accelerator Engine combines LLM agents with combinatorial testing to turn a plain-language request into a complete test suite, cutting insurance product validation from about six months of manual client work to a handful of automated requests.',
            'Supported a colleague’s thesis on LLM-based extraction of insurance product characteristics, leading to two co-authored papers.',
        ],
    },
    {
        title: 'Software Engineer',
        place: 'msg insur:it Iberia',
        period: 'Jun 2023 – Aug 2024',
        details: ['Full-stack engineer on an enterprise insurance web application for a North American client, in Java Spring, Backbone.js and PostgreSQL, contributing to a go-live with a single bug reported across the whole production setup.'],
    },
    {
        title: 'Intern',
        place: 'msg insur:it Iberia',
        period: 'Feb 2023 – Jun 2023',
        details: ['Built an end-to-end insurance product proof of concept, with workflows in Camunda (BPMN/DMN) integrated with Java services.'],
    },
];

export const education: TimelineEntry[] = [
    {
        title: 'MSc in Software Engineering',
        place: 'FEUP',
        period: 'Sep 2024 – Jul 2026',
        details: ['Final grade 18/20. Thesis, Product Validation Accelerator Engine, defended with 19/20.'],
    },
    {
        title: 'BSc in Informatics and Computing Engineering',
        place: 'ISEP',
        period: 'Sep 2020 – Sep 2023',
        details: ['Final grade 14/20. Vice-president of NEI, the student association, leading a team of close to 40, and player in the volleyball team.'],
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
