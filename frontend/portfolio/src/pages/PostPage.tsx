import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import { Link as RouterLink, Navigate, useParams } from 'react-router-dom';
import { Markdown } from '../components/site/Markdown';
import { formatDate, getPost, posts } from '../lib/blog';
import { useTitle } from '../lib/useTitle';

export default function PostPage() {
    const { slug = '' } = useParams();
    const post = getPost(slug);
    useTitle(post?.title);

    if (!post) return <Navigate to="/blog" replace />;

    const fromLinkedIn = post.originalSource === 'LinkedIn' && Boolean(post.originalUrl);
    const index = posts.indexOf(post);
    const newer = posts[index - 1];
    const older = posts[index + 1];

    return (
        <Box as="article">
            <Link asChild fontSize="sm" color="fg.muted" _hover={{ color: 'fg' }}>
                <RouterLink to="/blog">← Blog</RouterLink>
            </Link>

            <Stack gap={3} mt={8} mb={10}>
                <Text as="h1" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold" lineHeight="1.25" letterSpacing="-0.02em">
                    {post.title}
                </Text>
                <Flex align="center" justify="space-between" gap={4}>
                    <Text fontSize="sm" color="fg.muted">
                        <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
                    </Text>
                    {fromLinkedIn && (
                        <Link
                            href={post.originalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open this post on LinkedIn"
                            title="Open on LinkedIn"
                            color="fg.muted"
                            _hover={{ color: '#0A66C2' }}
                        >
                            <FaLinkedin size={18} />
                        </Link>
                    )}
                </Flex>
            </Stack>

            <Markdown>{post.body}</Markdown>

            {post.originalUrl && (
                <Text mt={12} fontSize="sm" color="fg.muted">
                    Originally published on{' '}
                    <Link
                        href={post.originalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="fg.muted"
                        textDecoration="underline"
                        display="inline-flex"
                        alignItems="center"
                        gap={1}
                        verticalAlign="bottom"
                        _hover={{ color: fromLinkedIn ? '#0A66C2' : 'fg' }}
                    >
                        {fromLinkedIn && <FaLinkedin />}
                        {post.originalSource ?? 'another site'}
                    </Link>
                    .
                </Text>
            )}

            {(newer || older) && (
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    justify="space-between"
                    gap={6}
                    mt={12}
                    pt={6}
                    borderTopWidth="1px"
                    borderColor="border"
                    fontSize="sm"
                >
                    {older ? (
                        <Link asChild color="fg" maxW={{ sm: '45%' }}>
                            <RouterLink to={`/blog/${older.slug}`}>
                                <Box>
                                    <Text color="fg.muted">Older</Text>
                                    <Text fontWeight="medium">{older.title}</Text>
                                </Box>
                            </RouterLink>
                        </Link>
                    ) : <Box />}
                    {newer && (
                        <Link asChild color="fg" maxW={{ sm: '45%' }} textAlign={{ sm: 'right' }}>
                            <RouterLink to={`/blog/${newer.slug}`}>
                                <Box>
                                    <Text color="fg.muted">Newer</Text>
                                    <Text fontWeight="medium">{newer.title}</Text>
                                </Box>
                            </RouterLink>
                        </Link>
                    )}
                </Stack>
            )}
        </Box>
    );
}
