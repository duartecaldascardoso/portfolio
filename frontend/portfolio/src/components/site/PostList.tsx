import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { formatDate, type Post } from '../../lib/blog';
import { SourceLink } from './SourceLink';

type PostListProps = { posts: Post[]; withSummary?: boolean; withSource?: boolean };

export const PostList = ({ posts, withSummary = false, withSource = false }: PostListProps) => (
    <Stack gap={withSummary ? 7 : 4}>
        {posts.map((post) => (
            <Flex key={post.slug} gap={4} align="flex-start">
                <Link
                    asChild
                    display="block"
                    flex="1"
                    minW={0}
                    color="fg"
                    _hover={{ textDecoration: 'none', '& .post-title': { textDecoration: 'underline' } }}
                >
                    <RouterLink to={`/blog/${post.slug}`}>
                        <Flex gap={{ base: 1, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                            <Text
                                as="time"
                                fontSize="sm"
                                color="fg.muted"
                                flexShrink={0}
                                w={{ sm: '84px' }}
                                pt={{ sm: '1px' }}
                                fontVariantNumeric="tabular-nums"
                            >
                                {formatDate(post.date, 'short')}
                            </Text>
                            <Box>
                                <Text className="post-title" fontWeight="medium" lineHeight="1.5">
                                    {post.title}
                                </Text>
                                {withSummary && post.summary && (
                                    <Text mt={1} fontSize="sm" color="fg.muted" lineHeight="1.6" lineClamp={2}>
                                        {post.summary}
                                    </Text>
                                )}
                            </Box>
                        </Flex>
                    </RouterLink>
                </Link>
                {withSource && (
                    <Box pt={{ base: '2px', sm: '4px' }}>
                        <SourceLink post={post} />
                    </Box>
                )}
            </Flex>
        ))}
    </Stack>
);
