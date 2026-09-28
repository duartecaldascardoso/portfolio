import { Box, Container, Heading, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaBook, FaExternalLinkAlt, FaGraduationCap } from 'react-icons/fa';

const courses = [
    {
        title: 'Natural Language Processing (NLP) in Python',
        provider: 'DataCamp',
        providerLogo: 'https://cdn.simpleicons.org/datacamp',
        date: 'Aug 2026',
        description: 'Classical NLP techniques in Python, from text preprocessing and tokenization to feature extraction and text classification.',
        href: 'https://www.linkedin.com/in/duartecardoso/details/certifications/',
    },
    {
        title: 'Natural Language Processing with spaCy',
        provider: 'DataCamp',
        providerLogo: 'https://cdn.simpleicons.org/datacamp',
        date: 'Aug 2026',
        description: 'Building NLP pipelines with spaCy, covering linguistic features, named entity recognition, rule-based matching and custom pipeline components.',
        href: 'https://www.linkedin.com/in/duartecardoso/details/certifications/',
    },
    {
        title: 'Claude with Amazon Bedrock',
        provider: 'Anthropic',
        providerLogo: 'https://cdn.simpleicons.org/anthropic',
        date: 'Mar 2026',
        description: 'Hands-on training on deploying Claude-based workflows using Amazon Bedrock for production-oriented AI systems.',
        href: 'https://www.linkedin.com/in/duartecardoso/details/certifications/',
    },
    {
        title: 'LangSmith Essentials',
        provider: 'LangChain',
        providerLogo: 'https://cdn.simpleicons.org/langchain',
        date: 'Feb 2026',
        description: 'Core practices for tracing, evaluating, and improving LLM applications with observability and testing workflows.',
        href: 'https://www.linkedin.com/in/duartecardoso/details/certifications/',
    },
    {
        title: 'Machine Learning Model Development',
        provider: 'Databricks',
        providerLogo: 'https://cdn.simpleicons.org/databricks',
        date: 'Feb 2026',
        description: 'Model development lifecycle fundamentals with emphasis on reliable training, iteration, and delivery in data platforms.',
        href: 'https://www.linkedin.com/in/duartecardoso/details/certifications/',
    },
    {
        title: 'Introduction to Model Context Protocol',
        provider: 'Anthropic',
        providerLogo: 'https://cdn.simpleicons.org/anthropic',
        date: 'Feb 2026',
        description: 'Foundational concepts for interoperable context exchange between AI systems and tools through MCP.',
        href: 'https://www.linkedin.com/in/duartecardoso/details/certifications/',
    },
    {
        title: 'Model Context Protocol: Advanced Topics',
        provider: 'Anthropic',
        providerLogo: 'https://cdn.simpleicons.org/anthropic',
        date: 'Feb 2026',
        description: 'Advanced MCP patterns focused on tool orchestration, context management, and integration architecture.',
        href: 'https://www.linkedin.com/in/duartecardoso/details/certifications/',
    },
];

const books = [
    {
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        cover: 'https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg',
        description: 'A practical foundation for building reliable, scalable, and maintainable data systems.',
        href: 'https://dataintensive.net/',
    },
    {
        title: 'AI Engineering',
        author: 'Chip Huyen',
        cover: 'https://covers.openlibrary.org/b/isbn/9781098166304-L.jpg',
        description: 'Production-oriented guidance for designing and operating modern AI applications end-to-end.',
        href: 'https://www.oreilly.com/library/view/ai-engineering/9781098166298/',
    },
    {
        title: 'Architecture Patterns with Python',
        author: 'Harry J.W. Percival and Bob Gregory',
        cover: 'https://covers.openlibrary.org/b/isbn/9781492052203-L.jpg',
        description: 'Clear architecture and domain modeling patterns for building maintainable Python systems.',
        href: 'https://www.cosmicpython.com/',
    },
];

export default function CoursesPage() {
    return (
        <Container maxW="4xl">
            <VStack align="stretch" gap={8}>
                <VStack align="start" gap={3}>
                    <HStack gap={2} fontSize="sm" color="gray.600">
                        <Link asChild _hover={{ textDecoration: 'underline' }}>
                            <RouterLink to="/">Home</RouterLink>
                        </Link>
                        <Text>»</Text>
                        <Text>Courses & Books</Text>
                    </HStack>
                    <Heading size="2xl">Courses & Books</Heading>
                    <Text color="gray.700" lineHeight="1.7" maxW="3xl">
                        I am deeply interested in continuous learning and hands-on practice. These are courses I have completed and books I have read that added clear value to my professional growth and that I apply in my daily work.
                    </Text>
                </VStack>

                <VStack align="start" gap={1}>
                    <Heading size="lg">Courses</Heading>
                    <Text color="gray.600" fontSize="sm">Completed certifications and technical courses.</Text>
                </VStack>
                {courses.map((course) => (
                    <Box key={course.title} pb={4} borderBottom="1px solid" borderColor="gray.200">
                        <HStack gap={2} mb={1}>
                            <FaGraduationCap />
                            <Text fontWeight="semibold">{course.title}</Text>
                        </HStack>
                        <HStack gap={2} mt={1}>
                            <Image src={course.providerLogo} alt={`${course.provider} logo`} boxSize="16px" />
                            <Text fontSize="sm" color="gray.600">{course.provider} · {course.date}</Text>
                        </HStack>
                        <Text mt={2} color="gray.700" lineHeight="1.7">{course.description}</Text>
                        <Link href={course.href} target="_blank" rel="noopener noreferrer" color="blue.600" mt={2} display="inline-flex" alignItems="center" gap={2}>
                            View certificate <FaExternalLinkAlt size={12} />
                        </Link>
                    </Box>
                ))}

                <VStack align="start" gap={1} pt={2}>
                    <Heading size="lg">Books</Heading>
                    <Text color="gray.600" fontSize="sm">Books I have read and regularly use as references in practice.</Text>
                </VStack>
                {books.map((book) => (
                    <Box key={book.title} pb={4} borderBottom="1px solid" borderColor="gray.200">
                        <HStack align="start" gap={4}>
                            <Image
                                src={book.cover}
                                alt={`${book.title} cover`}
                                w="70px"
                                h="100px"
                                objectFit="cover"
                                borderRadius="md"
                                border="1px solid"
                                borderColor="gray.200"
                            />
                            <VStack align="start" gap={1}>
                                <HStack gap={2} mb={1}>
                                    <FaBook />
                                    <Text fontWeight="semibold">{book.title}</Text>
                                </HStack>
                                <Text fontSize="sm" color="gray.600">{book.author}</Text>
                                <Text mt={2} color="gray.700" lineHeight="1.7">{book.description}</Text>
                                <Link href={book.href} target="_blank" rel="noopener noreferrer" color="blue.600" mt={2} display="inline-flex" alignItems="center" gap={2}>
                                    View book <FaExternalLinkAlt size={12} />
                                </Link>
                            </VStack>
                        </HStack>
                    </Box>
                ))}
            </VStack>
        </Container>
    );
}
