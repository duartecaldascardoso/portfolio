import { Box, Flex, HStack, Image, Link, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuFileText, LuMail } from 'react-icons/lu';
import { PostList } from '../components/site/PostList';
import { Section } from '../components/site/Section';
import { links, profileImage, projectId, projects } from '../data/site';
import { posts } from '../lib/blog';
import { useTitle } from '../lib/useTitle';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

const Strong = ({ children }: { children: string }) => (
    <Text as="span" color="fg" fontWeight="medium">{children}</Text>
);

export default function HomePage() {
    useTitle();
    const featured = projects.filter((project) => project.featured);

    return (
        <Stack gap={{ base: 14, md: 16 }}>
            <Stack gap={6}>
                <Flex align="center" gap={4}>
                    <Image src={profileImage} alt="Duarte Cardoso" boxSize="56px" borderRadius="full" objectFit="cover" />
                    <Box>
                        <Text as="h1" fontSize="xl" fontWeight="semibold" letterSpacing="-0.01em">
                            Duarte Cardoso
                        </Text>
                        <Text color="fg.muted">AI Engineer at DareData · Porto</Text>
                    </Box>
                </Flex>

                <Stack gap={4} color="fg.muted" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                    <Text>
                        I build agentic and document-intelligence solutions for the insurance and financial
                        sectors at <Strong>DareData</Strong>. I studied Software Engineering at FEUP and started out as
                        a software engineer before moving into AI in 2024.
                    </Text>
                    <Text>
                        Before that I spent three and a half years at <Strong>msg insur:it</Strong>, going from intern to the
                        AI team, where I built the company’s document intelligence tool and Configure:it, a multi-agent
                        module that turns product documents into insurance configurations.
                    </Text>
                    <Text>
                        I am an open-source advocate and the creator of{' '}
                        <Link href="https://github.com/complydoc/complydoc" {...external} color="fg" textDecoration="underline" textDecorationColor="border.emphasized" _hover={{ textDecorationColor: 'fg' }}>
                            complydoc
                        </Link>
                        . I write about making LLMs practical, measurable and affordable.
                    </Text>
                </Stack>

                <HStack gap={5} fontSize="sm" wrap="wrap">
                    {[
                        { label: 'GitHub', href: links.github, icon: FaGithub },
                        { label: 'LinkedIn', href: links.linkedin, icon: FaLinkedin },
                        { label: 'Email', href: links.email, icon: LuMail },
                        { label: 'CV', href: links.cv, icon: LuFileText },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            {...external}
                            color="fg"
                            display="inline-flex"
                            alignItems="center"
                            gap={1.5}
                            _hover={{ color: 'fg.muted' }}
                        >
                            <item.icon size={15} aria-hidden />
                            {item.label} ↗
                        </Link>
                    ))}
                </HStack>
            </Stack>

            {posts.length > 0 && (
                <Section title="Writing" more={{ label: 'All posts', to: '/blog' }}>
                    <PostList posts={posts.slice(0, 5)} />
                </Section>
            )}

            <Section title="Projects" more={{ label: 'All projects', to: '/projects' }}>
                <Stack gap={4}>
                    {featured.map((project) => (
                        <Link
                            key={project.name}
                            asChild
                            display="block"
                            color="fg"
                            _hover={{ textDecoration: 'none', '& .project-name': { textDecoration: 'underline' } }}
                        >
                            <RouterLink to={`/projects#${projectId(project.name)}`}>
                                <Flex gap={{ base: 1, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                                    <Text className="project-name" fontWeight="medium" w={{ sm: '148px' }} flexShrink={0}>
                                        {project.name}
                                    </Text>
                                    <Text color="fg.muted">{project.summary}</Text>
                                </Flex>
                            </RouterLink>
                        </Link>
                    ))}
                </Stack>
            </Section>
        </Stack>
    );
}
