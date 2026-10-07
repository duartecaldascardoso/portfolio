import { Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { PageHeader, Section } from '../components/site/Section';
import { books, courses, links } from '../data/site';
import { useState } from 'react';
import { useTitle } from '../lib/useTitle';
import { siAnthropic, siDatabricks, siDatacamp, siLangchain, type SimpleIcon } from 'simple-icons';

const providerLogos: Record<string, SimpleIcon> = {
    Anthropic: siAnthropic,
    DataCamp: siDatacamp,
    Databricks: siDatabricks,
    LangChain: siLangchain,
};

// Brand colours, except near-black ones, which follow the text colour so they show in dark mode.
const logoColor = (hex: string) => {
    const [r, g, b] = [0, 2, 4].map((offset) => parseInt(hex.slice(offset, offset + 2), 16));
    return 0.299 * r + 0.587 * g + 0.114 * b < 60 ? 'currentColor' : `#${hex}`;
};

const ProviderLogo = ({ provider }: { provider: string }) => {
    const icon = providerLogos[provider];
    if (!icon) return <Box boxSize="18px" flexShrink={0} />;
    return (
        <Box as="span" display="inline-flex" boxSize="18px" flexShrink={0} color="fg" aria-hidden>
            <svg viewBox="0 0 24 24" width="18" height="18" fill={logoColor(icon.hex)}>
                <path d={icon.path} />
            </svg>
        </Box>
    );
};

// Tries Open Library for each edition, then Google Books, and falls back to a plain
// title card. Open Library answers a missing cover with a 1x1 image unless default=false.
const coverSources = (isbns: string[]) => [
    ...isbns.map((isbn) => `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg?default=false`),
    ...isbns.map((isbn) => `https://books.google.com/books/content?vid=ISBN${isbn}&printsec=frontcover&img=1&zoom=1`),
];

const BookCover = ({ isbns, title }: { isbns: string[]; title: string }) => {
    const sources = coverSources(isbns);
    const [index, setIndex] = useState(0);
    const next = () => setIndex((current) => current + 1);
    const frame = { w: '44px', h: '64px', borderRadius: 'sm', borderWidth: '1px', borderColor: 'border', flexShrink: 0 } as const;

    if (index >= sources.length) {
        return (
            <Flex {...frame} bg="bg.muted" align="center" justify="center" p={1}>
                <Text fontSize="7px" lineHeight="1.15" fontWeight="semibold" textAlign="center" color="fg.muted">
                    {title}
                </Text>
            </Flex>
        );
    }
    return (
        <Image
            key={sources[index]}
            src={sources[index]}
            alt=""
            objectFit="cover"
            loading="lazy"
            onError={next}
            onLoad={(event) => event.currentTarget.naturalWidth < 20 && next()}
            {...frame}
        />
    );
};

export default function LearningPage() {
    useTitle('Learning');

    return (
        <>
            <PageHeader title="Learning">
                <Text color="fg.muted" lineHeight="1.7">
                    Courses I have finished and books I keep going back to.
                </Text>
            </PageHeader>

            <Stack gap={14}>
                <Section title="Courses" more={{ label: 'Certificates', to: links.certifications }}>
                    <Stack gap={4}>
                        {courses.map((course) => (
                            <Flex key={course.title} gap={{ base: 1, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                                <Text fontSize="sm" color="fg.muted" w={{ sm: '84px' }} flexShrink={0} pt={{ sm: '2px' }}>
                                    {course.date}
                                </Text>
                                <Flex gap={3} align="flex-start">
                                    <Box pt="3px">
                                        <ProviderLogo provider={course.provider} />
                                    </Box>
                                    <Text>
                                        {course.title} <Text as="span" color="fg.muted">· {course.provider}</Text>
                                    </Text>
                                </Flex>
                            </Flex>
                        ))}
                    </Stack>
                </Section>

                <Section title="Books">
                    <Stack gap={6}>
                        {books.map((book) => (
                            <Link
                                key={book.title}
                                href={book.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                display="flex"
                                gap={4}
                                alignItems="flex-start"
                                color="fg"
                                _hover={{ textDecoration: 'none', '& .book-title': { textDecoration: 'underline' } }}
                            >
                                <BookCover isbns={book.isbns} title={book.title} />
                                <Box>
                                    <Text className="book-title" fontWeight="medium">{book.title}</Text>
                                    <Text fontSize="sm" color="fg.muted">{book.author}</Text>
                                    <Text mt={1} fontSize="sm" color="fg.muted" lineHeight="1.6">{book.note}</Text>
                                </Box>
                            </Link>
                        ))}
                    </Stack>
                </Section>
            </Stack>
        </>
    );
}
