import { Box, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { useColorModeValue } from './color-mode';
import { FaBook, FaCalendarAlt, FaExternalLinkAlt, FaFileAlt, FaGithub, FaGraduationCap, FaMedium } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { Link as RouterLink } from 'react-router-dom';

type PublicationItem = {
    title: string;
    source: string;
    date: string;
    description: string;
    href?: string;
    icon: IconType;
};

type LearningItem = {
    title: string;
    provider: string;
    date?: string;
};

type ProjectItem = {
    title: string;
    href: string;
    description: string;
};

const publications: PublicationItem[] = [
    {
        title: 'The Underrated Role of Small Language Models in Agentic AI',
        source: 'Medium',
        date: 'Nov 9, 2025',
        description:
            'I recently stumbled upon a thought-evoking research paper from NVIDIA that challenged how I view AI agents. The premise was simple: we are probably using models that are way too big for what most AI agents actually need to do.',
        href: 'https://medium.com/@caldasdcardoso/the-underrated-role-of-small-language-models-in-agentic-ai-66236a32c576',
        icon: FaMedium,
    },
    {
        title: 'Inside the LangChain x Manus Webinar on Context Engineering',
        source: 'Medium',
        date: 'Oct 14, 2025',
        description:
            'On October 14th, LangChain hosted a webinar exploring one of the most critical emerging topics in AI systems: Context Engineering. Led by Lance Martin and featuring Yichao "Peak" from Manus, the session unpacked how context management is reshaping the design of agentic systems.',
        href: 'https://medium.com/@caldasdcardoso/inside-the-langchain-x-manus-webinar-on-context-engineering-69166ee404db',
        icon: FaMedium,
    },
    {
        title: 'Swarm Architecture Agents in LangGraph',
        source: 'Medium',
        date: 'Sep 10, 2025',
        description:
            'LangGraph provides several ways to handle multi agent interactions. Knowing these can be beneficial when handling different kinds of use cases which may be more prone towards user interaction or complex research tasks for example.',
        href: 'https://medium.com/@caldasdcardoso/swarm-architecture-agents-in-langgraph-b8b1b53c61b3',
        icon: FaMedium,
    },
    {
        title: 'Automated Extraction of Insurance Product Characteristics',
        source: 'SEI 2025',
        date: 'Nov 2025',
        description: 'Co-authored scientific paper published in SEI 2025.',
        icon: FaFileAlt,
    },
    {
        title: 'Simplifying Complex Insurance Product Management with AI',
        source: 'SEI 2025',
        date: 'Nov 2025',
        description: 'Co-authored scientific paper published in SEI 2025.',
        icon: FaFileAlt,
    },
];

const courses: LearningItem[] = [
    { title: 'Natural Language Processing (NLP) in Python', provider: 'DataCamp', date: 'Aug 2026' },
    { title: 'Natural Language Processing with spaCy', provider: 'DataCamp', date: 'Aug 2026' },
    { title: 'Claude with Amazon Bedrock', provider: 'Anthropic', date: 'Mar 2026' },
    { title: 'LangSmith Essentials', provider: 'LangChain', date: 'Feb 2026' },
    { title: 'Machine Learning Model Development', provider: 'Databricks', date: 'Feb 2026' },
    { title: 'Introduction to Model Context Protocol', provider: 'Anthropic', date: 'Feb 2026' },
    { title: 'Model Context Protocol: Advanced Topics', provider: 'Anthropic', date: 'Feb 2026' },
];

const books: LearningItem[] = [
    { title: 'Designing Data-Intensive Applications', provider: 'Martin Kleppmann' },
    { title: 'AI Engineering', provider: 'Chip Huyen' },
    { title: 'Architecture Patterns with Python', provider: 'Harry J.W. Percival and Bob Gregory' },
];

const projects: ProjectItem[] = [
    {
        title: 'complydoc',
        href: 'https://github.com/complydoc/complydoc',
        description: 'Open-source tool that checks documents for cost, security and extraction issues before they reach an LLM.',
    },
    {
        title: 'modus-laboratories',
        href: 'https://github.com/modus-laboratories',
        description: 'Organization with experiments and practical implementations around modern AI engineering.',
    },
    {
        title: 'me-agent',
        href: 'https://github.com/duartecaldascardoso/me-agent',
        description: 'Personal agent-oriented project exploring assistant workflows and automation patterns.',
    },
    {
        title: 'article-explainer',
        href: 'https://github.com/duartecaldascardoso/article-explainer',
        description: 'Tooling focused on breaking down and explaining article content in a concise way.',
    },
    {
        title: 'Eunomia',
        href: 'https://github.com/duartecaldascardoso/Eunomia',
        description: 'Project repository for AI/software experimentation and structured implementation patterns.',
    },
];

export const ResourcesSection = () => {
    const headingColor = useColorModeValue('brand.solid', 'brand.solid');
    const textColor = useColorModeValue('brand.fg', 'brand.fg');
    const borderColor = useColorModeValue('brand.muted', 'brand.muted');
    const linkColor = useColorModeValue('#2563eb', '#2563eb');

    return (
        <VStack align="stretch" gap={10}>
            <VStack align="start" gap={3}>
                <HStack gap={2} fontSize="sm" color={textColor}>
                    <Link asChild _hover={{ textDecoration: 'underline' }}>
                        <RouterLink to="/">Home</RouterLink>
                    </Link>
                    <Text>»</Text>
                    <Text>Resources</Text>
                </HStack>
                <Heading size="2xl" color={headingColor}>
                    Resources
                </Heading>
                <Text color={textColor} maxW="3xl">
                    Publications, courses, books, and selected projects in one place.
                </Text>
            </VStack>

            <VStack align="stretch" gap={7}>
                <Heading size="lg" color={headingColor}>Publications</Heading>
                {publications.map((item) => (
                    <Box key={item.title} pb={6} borderBottom="1px solid" borderColor={borderColor}>
                        <HStack align="center" gap={2} mb={2} color={textColor} fontSize="sm" wrap="wrap">
                            <item.icon />
                            <Text>{item.source}</Text>
                            <FaCalendarAlt />
                            <Text>{item.date}</Text>
                        </HStack>

                        {item.href ? (
                            <Link
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                color={linkColor}
                                fontSize="2xl"
                                fontWeight="semibold"
                                lineHeight="1.2"
                                _hover={{ textDecoration: 'underline' }}
                            >
                                {item.title} <FaExternalLinkAlt style={{ display: 'inline', marginLeft: 6, fontSize: 12 }} />
                            </Link>
                        ) : (
                            <Text color={headingColor} fontSize="2xl" fontWeight="semibold" lineHeight="1.2">
                                {item.title}
                            </Text>
                        )}

                        <Text mt={3} color={textColor} lineHeight="1.7">
                            {item.description}
                        </Text>
                    </Box>
                ))}
            </VStack>

            <VStack id="courses-books" align="stretch" gap={6}>
                <Heading size="lg" color={headingColor}>Courses</Heading>
                {courses.map((course) => (
                    <Box key={course.title} pb={4} borderBottom="1px solid" borderColor={borderColor}>
                        <HStack gap={2} color={textColor} mb={1}>
                            <FaGraduationCap />
                            <Text fontWeight="semibold" color={headingColor}>{course.title}</Text>
                        </HStack>
                        <Text color={textColor} fontSize="sm">
                            {course.provider}{course.date ? ` · ${course.date}` : ''}
                        </Text>
                    </Box>
                ))}
            </VStack>

            <VStack align="stretch" gap={6}>
                <Heading size="lg" color={headingColor}>Books</Heading>
                {books.map((book) => (
                    <Box key={book.title} pb={4} borderBottom="1px solid" borderColor={borderColor}>
                        <HStack gap={2} color={textColor} mb={1}>
                            <FaBook />
                            <Text fontWeight="semibold" color={headingColor}>{book.title}</Text>
                        </HStack>
                        <Text color={textColor} fontSize="sm">{book.provider}</Text>
                    </Box>
                ))}
            </VStack>

            <VStack align="stretch" gap={6}>
                <Heading size="lg" color={headingColor}>Projects</Heading>
                {projects.map((project) => (
                    <Box key={project.title} pb={5} borderBottom="1px solid" borderColor={borderColor}>
                        <Link
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            color={linkColor}
                            fontWeight="semibold"
                            fontSize="xl"
                            _hover={{ textDecoration: 'underline' }}
                        >
                            <HStack gap={2} align="center">
                                <FaGithub />
                                <Text>{project.title}</Text>
                            </HStack>
                        </Link>
                        <Text mt={2} color={textColor} lineHeight="1.7">
                            {project.description}
                        </Text>
                    </Box>
                ))}
            </VStack>
        </VStack>
    );
};
