import { Box, Container, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: 'complydoc',
        href: 'https://github.com/complydoc/complydoc',
        description: 'An open-source tool that checks documents before they reach an LLM. It measures what processing them will cost, how reliably text can be read off each page, which personal and financial identifiers they contain, and whether anything hidden in a file is addressed to a model. It runs entirely on your machine, from the command line, a notebook, a test suite or CI, and works with LangChain, LlamaIndex, Unstructured, Docling and more.',
        stack: ['Python', 'Document Intelligence', 'LLM Security', 'Open Source', 'CI'],
    },
    {
        title: 'modus-laboratories',
        href: 'https://github.com/modus-laboratories',
        description: 'Modus Labs is a living startup I am building with college colleagues. It works as a living lab for product development, AI/ML experimentation, and applied projects.',
        stack: ['Product Development', 'AI/ML', 'Rapid Prototyping'],
    },
    {
        title: 'me-agent',
        href: 'https://github.com/duartecaldascardoso/me-agent',
        description: 'A RAG pipeline with user-focused documentation that handles full ingestion, retrieval, and agentic interaction with the user, serving as a practical baseline for building custom RAG systems.',
        stack: ['Python', 'RAG', 'LLM Agents', 'Vector Search'],
    },
    {
        title: 'article-explainer',
        href: 'https://github.com/duartecaldascardoso/article-explainer',
        description: 'Featured twice by LangChain on LinkedIn. This project uses a Swarm architecture with multiple agents to explain scientific articles.',
        stack: ['LangChain', 'Multi-Agent Systems', 'Python', 'NLP'],
    },
    {
        title: 'Eunomia',
        href: 'https://github.com/duartecaldascardoso/Eunomia',
        description: 'A project under Modus Labs, currently in active stealth development with a planned 2026 release. Eunomia is a productivity suite combining automatic metrics collection, machine learning data analysis, agentic calendar planning, and a social network for shared or competitive goals with friends.',
        stack: ['PyTorch', 'Scikit-learn', 'Django', 'React', 'ML', 'LangChain', 'LangGraph', 'AG-UI'],
    },
];

export default function ProjectsPage() {
    return (
        <Container maxW="4xl">
            <VStack align="stretch" gap={8}>
                <VStack align="start" gap={3}>
                    <HStack gap={2} fontSize="sm" color="gray.600">
                        <Link asChild _hover={{ textDecoration: 'underline' }}>
                            <RouterLink to="/">Home</RouterLink>
                        </Link>
                        <Text>»</Text>
                        <Text>Projects</Text>
                    </HStack>
                    <Heading size="2xl">Projects</Heading>
                    <Text color="gray.700" lineHeight="1.7" maxW="3xl">
                        These are some of my most recent and important projects. I love to learn by building, testing ideas in practice, and iterating through real-world implementation.
                    </Text>
                </VStack>

                {projects.map((project) => (
                    <Box key={project.title} pb={5} borderBottom="1px solid" borderColor="gray.200">
                        <Link href={project.href} target="_blank" rel="noopener noreferrer" color="#2563eb" _hover={{ textDecoration: 'underline' }}>
                            <HStack gap={2}>
                                <FaGithub />
                                <Text fontWeight="semibold" fontSize="xl">{project.title}</Text>
                            </HStack>
                        </Link>
                        <Text mt={2} color="gray.700" lineHeight="1.7">{project.description}</Text>
                        <HStack gap={2} mt={3} flexWrap="wrap">
                            {project.stack.map((technology) => (
                                <Box
                                    key={`${project.title}-${technology}`}
                                    px={2}
                                    py={1}
                                    borderRadius="md"
                                    bg="gray.100"
                                    border="1px solid"
                                    borderColor="gray.200"
                                >
                                    <Text fontSize="xs" color="gray.700">{technology}</Text>
                                </Box>
                            ))}
                        </HStack>
                    </Box>
                ))}
            </VStack>
        </Container>
    );
}
