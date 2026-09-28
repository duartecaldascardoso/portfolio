
import {
    Container,
    Stack,
    SimpleGrid,
    Heading,
    Text,
    HStack,
    Link,
    Image,
    Icon,
    VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useColorModeValue } from './color-mode';
import { LuBookOpenText, LuFolderGit2, LuGraduationCap, LuTrophy, LuUserRound } from 'react-icons/lu';

const quickLinks = [
    { label: 'About Me', to: '/about', icon: LuUserRound },
    { label: 'Publications', to: '/publications', icon: LuBookOpenText },
    { label: 'Courses & Books', to: '/courses', icon: LuGraduationCap },
    { label: 'Projects', to: '/projects', icon: LuFolderGit2 },
];

const highlights = [
    {
        title: 'complydoc',
        meta: 'Open-source project · Check documents for cost, security and extraction issues before they reach an LLM',
        image: `${import.meta.env.BASE_URL}config/projects/complydoc.svg`,
        imageAlt: 'complydoc logo',
        imageFit: 'cover' as const,
        href: 'https://github.com/complydoc/complydoc',
        external: true,
    },
    {
        title: 'Machine Learning Model Development',
        meta: 'Course · Databricks on ML model development lifecycle practices · MLOps',
        image: 'https://cdn.simpleicons.org/databricks',
        imageAlt: 'Databricks logo',
        imageFit: 'contain' as const,
        href: 'https://www.linkedin.com/in/duartecardoso/details/certifications/',
        external: true,
    },
    {
        title: 'Claude with Amazon Bedrock',
        meta: 'Course · Anthropic & AWS on Agentic AI topics',
        image: 'https://cdn.simpleicons.org/anthropic',
        imageAlt: 'Anthropic logo',
        imageFit: 'contain' as const,
        href: 'https://www.linkedin.com/in/duartecardoso/details/certifications/',
        external: true,
    },
    {
        title: 'AI Engineering',
        meta: 'Book · Chip Huyen on production-oriented AI application design and operation',
        image: 'https://covers.openlibrary.org/b/isbn/9781098166304-L.jpg',
        imageAlt: 'AI Engineering book cover',
        imageFit: 'cover' as const,
        to: '/courses' as const,
    },
    {
        title: 'Simplifying Complex Insurance Product Management with AI',
        meta: 'Publication · SEI 2025 · Distinguished with Best Paper Award',
        image: `${import.meta.env.BASE_URL}config/projects/insuranceThesis.png`,
        imageAlt: 'Insurance publication thumbnail',
        imageFit: 'cover' as const,
        href: 'https://sei.dei.isep.ipp.pt/wp-content/uploads/2026/01/SEI25-LdA.pdf',
        external: true,
    },
    {
        title: 'Eunomia',
        meta: 'Project · Modus Labs · Stealth Development',
        image: `${import.meta.env.BASE_URL}config/projects/Eunomia.png`,
        imageAlt: 'Eunomia project image',
        imageFit: 'cover' as const,
        href: 'https://github.com/duartecaldascardoso/Eunomia',
        external: true,
    },
] as const;

export const HeroSection = () => {
    const headingColor = useColorModeValue('brand.solid', 'brand.solid');
    const subtextColor = useColorModeValue('brand.fg', 'brand.fg');
    const borderColor = useColorModeValue('brand.muted', 'brand.muted');

    return (
        <Container maxW="4xl" py={{ base: 6, md: 10 }}>
            <VStack align="stretch" gap={6}>
                <Stack direction={{ base: 'column-reverse', md: 'row' }} gap={6} align="start">
                    <VStack align="start" gap={3} flex={1}>
                        <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} lineHeight="2" color={headingColor}>
                            Hello, I am Duarte
                        </Heading>

                        <Text color={subtextColor} fontSize="lg" lineHeight="1.7">
                            I am an AI Engineer at <Text as="span" fontWeight="bold">DareData</Text>, based in <Text as="span" fontWeight="bold">Porto</Text>, where I build agentic and document-intelligence solutions for the insurance and financial sectors. I studied Software Engineering at FEUP and started out as a software engineer before moving into AI, where I have been working since mid-2024.
                        </Text>

                        <Text color={subtextColor} fontSize="lg" lineHeight="1.7">
                            Before DareData I spent three and a half years at <Text as="span" fontWeight="bold">MSG Life Iberia</Text>, going from intern to the AI team. There I built the company’s official Document Intelligence tool on an Agentic RAG architecture and Configure:it, a multi-agent module for <Text as="span" fontWeight="bold">Product Machine</Text> that turns product documents into insurance configurations. My Master’s thesis, <Text as="span" fontWeight="bold">Product Validation Accelerator Engine</Text> (19/20), combines LLMs with combinatorial testing to turn a plain-language request into a complete test suite.
                        </Text>

                        <Text color={subtextColor} fontSize="lg" lineHeight="1.7">
                            I am an open-source advocate and the creator of{' '}
                            <Link href="https://github.com/complydoc/complydoc" target="_blank" rel="noopener noreferrer" fontWeight="bold" textDecoration="underline">complydoc</Link>, a tool that checks documents before they reach an LLM. I also write about making LLMs practical, measurable and affordable in regulated industries.
                        </Text>

                        <HStack gap={4} fontSize="sm" color={subtextColor} wrap="wrap" pt={1}>
                            <Link href="https://github.com/duartecaldascardoso" target="_blank" rel="noopener noreferrer">GitHub</Link>
                            <Link href="mailto:caldasdcardoso@gmail.com">Email</Link>
                            <Link href="https://www.linkedin.com/in/duartecardoso/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                            <Link href={`${import.meta.env.BASE_URL}config/DuarteCardoso.pdf`} target="_blank" rel="noopener noreferrer">CV</Link>
                        </HStack>
                    </VStack>

                    <Image
                        src={`${import.meta.env.BASE_URL}config/profile.jpg`}
                        alt="Duarte Cardoso"
                        borderRadius="full"
                        objectFit="cover"
                        objectPosition="center 65%"
                        h={{ base: '280px', md: '320px' }}
                        w={{ base: '280px', md: '320px' }}
                        border="1px solid"
                        borderColor={borderColor}
                        mx={{ base: 'auto', md: 0 }}
                        alignSelf={{ base: 'center', md: 'flex-start' }}
                        mt={{ base: 0, md: 0 }}
                        transform={{ base: 'none', md: 'translate(70px, 150px)' }}
                    />
                </Stack>

                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
                    {quickLinks.map((item) => (
                        <Link
                            key={item.label}
                            asChild
                            border="1px solid"
                            borderColor={borderColor}
                            borderRadius="md"
                            px={4}
                            py={3}
                            flex={1}
                            _hover={{ textDecoration: 'none', borderColor: headingColor }}
                        >
                            <RouterLink to={item.to}>
                                <HStack justify="center" gap={2} color={headingColor}>
                                    <Icon as={item.icon} />
                                    <Text fontWeight="semibold" fontSize="sm">{item.label}</Text>
                                </HStack>
                            </RouterLink>
                        </Link>
                    ))}
                </SimpleGrid>

                <VStack align="stretch" gap={4} pt={2}>
                    <HStack gap={2} color={headingColor}>
                        <Heading as="h2" size="lg">
                            Highlights
                        </Heading>
                    </HStack>

                    <VStack align="stretch" gap={0} border="1px solid" borderColor={borderColor} borderRadius="md" overflow="hidden">
                        {highlights.map((item) => {
                            const isWinningPaper = item.title === 'Simplifying Complex Insurance Product Management with AI';

                            const content = (
                                <HStack align="start" gap={3}>
                                    {isWinningPaper ? (
                                        <HStack
                                            w="44px"
                                            h="44px"
                                            borderRadius="sm"
                                            border="1px solid"
                                            borderColor={borderColor}
                                            justify="center"
                                            align="center"
                                            flexShrink={0}
                                        >
                                            <Icon as={LuTrophy} boxSize={5} color={headingColor} />
                                        </HStack>
                                    ) : (
                                        <Image
                                            src={item.image}
                                            alt={item.imageAlt}
                                            w="44px"
                                            h="44px"
                                            objectFit={item.imageFit}
                                            borderRadius="sm"
                                            border="1px solid"
                                            borderColor={borderColor}
                                            p={item.imageFit === 'contain' ? 1 : 0}
                                            flexShrink={0}
                                        />
                                    )}
                                    <VStack align="start" gap={0}>
                                        <Text fontWeight="semibold" color={headingColor}>
                                            {item.title}
                                        </Text>
                                        <Text fontSize="sm" color={subtextColor}>
                                            {item.meta}
                                        </Text>
                                    </VStack>
                                </HStack>
                            );

                            if ('href' in item) {
                                return (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        px={4}
                                        py={3}
                                        borderBottom="1px solid"
                                        borderColor={borderColor}
                                        _last={{ borderBottom: 'none' }}
                                        _hover={{ textDecoration: 'none', bg: 'bg.subtle' }}
                                    >
                                        {content}
                                    </Link>
                                );
                            }

                            return (
                                <Link
                                    key={item.title}
                                    asChild
                                    px={4}
                                    py={3}
                                    borderBottom="1px solid"
                                    borderColor={borderColor}
                                    _last={{ borderBottom: 'none' }}
                                    _hover={{ textDecoration: 'none', bg: 'bg.subtle' }}
                                >
                                    <RouterLink to={item.to}>
                                        {content}
                                    </RouterLink>
                                </Link>
                            );
                        })}
                    </VStack>
                </VStack>
            </VStack>
        </Container>
    );
};
