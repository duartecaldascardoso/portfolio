import { Link, Stack, Text } from '@chakra-ui/react';
import { PageHeader, Section } from '../components/site/Section';
import { PostList } from '../components/site/PostList';
import { papers } from '../data/site';
import { posts } from '../lib/blog';
import { useTitle } from '../lib/useTitle';

export default function BlogPage() {
    useTitle('Blog');

    const years = [...new Set(posts.map((post) => post.date.slice(0, 4)))];

    return (
        <Stack gap={14}>
            <PageHeader title="Blog">
                <Text color="fg.muted" lineHeight="1.7">
                    Notes on LLMs, agents and document extraction, mostly from things I have built or broken at work.
                </Text>
            </PageHeader>

            {years.map((year) => (
                <Section key={year} title={year}>
                    <PostList posts={posts.filter((post) => post.date.startsWith(year))} withSummary />
                </Section>
            ))}

            <Section title="Papers">
                <Stack gap={5}>
                    {papers.map((paper) => (
                        <Link
                            key={paper.title}
                            href={paper.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            display="block"
                            color="fg"
                            _hover={{ textDecoration: 'none', '& .paper-title': { textDecoration: 'underline' } }}
                        >
                            <Text className="paper-title" fontWeight="medium" lineHeight="1.5">
                                {paper.title} ↗
                            </Text>
                            <Text fontSize="sm" color="fg.muted" mt={1}>
                                {[paper.venue, paper.date, paper.note].filter(Boolean).join(' · ')}
                            </Text>
                        </Link>
                    ))}
                </Stack>
            </Section>
        </Stack>
    );
}
