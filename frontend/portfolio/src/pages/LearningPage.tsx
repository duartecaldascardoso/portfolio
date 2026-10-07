import { Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { PageHeader, Section } from '../components/site/Section';
import { books, courses, links } from '../data/site';
import { useTitle } from '../lib/useTitle';

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
                                <Text>
                                    {course.title} <Text as="span" color="fg.muted">· {course.provider}</Text>
                                </Text>
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
                                <Image
                                    src={book.cover}
                                    alt=""
                                    w="44px"
                                    h="64px"
                                    objectFit="cover"
                                    borderRadius="sm"
                                    borderWidth="1px"
                                    borderColor="border"
                                    flexShrink={0}
                                    loading="lazy"
                                />
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
