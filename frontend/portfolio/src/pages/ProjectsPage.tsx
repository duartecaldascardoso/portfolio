import { Box, Flex, HStack, Image, Link, Stack, Text } from '@chakra-ui/react';
import { PageHeader } from '../components/site/Section';
import { projectId, projects } from '../data/site';
import { useTitle } from '../lib/useTitle';

export default function ProjectsPage() {
    useTitle('Projects');

    return (
        <>
            <PageHeader title="Projects">
                <Text color="fg.muted" lineHeight="1.7">
                    Things I have built outside of client work. Most of them are open source, so try them and tell me what breaks.
                </Text>
            </PageHeader>

            <Stack gap={14}>
                {projects.map((project) => (
                    <Box as="section" key={project.name} id={projectId(project.name)} scrollMarginTop="24px">
                        <Flex align="center" gap={3}>
                            {project.icon && (
                                <Image src={project.icon} alt="" boxSize="22px" borderRadius="sm" objectFit="cover" />
                            )}
                            <Text as="h2" fontSize="lg" fontWeight="semibold" letterSpacing="-0.01em">
                                {project.name}
                            </Text>
                            <Text fontSize="sm" color="fg.muted" ml="auto">
                                {project.year}
                            </Text>
                        </Flex>

                        <Text mt={3} color="fg.muted" lineHeight="1.7">
                            {project.description}
                        </Text>

                        {project.image && (
                            <Image
                                src={project.image}
                                alt={`${project.name} screenshot`}
                                mt={5}
                                w="full"
                                borderRadius="md"
                                borderWidth="1px"
                                borderColor="border"
                                loading="lazy"
                            />
                        )}

                        <Flex mt={4} gap={4} wrap="wrap" align="center" fontSize="sm">
                            <Text color="fg.subtle">{project.stack.join(' · ')}</Text>
                            <HStack gap={4} ml={{ sm: 'auto' }}>
                                {project.website && (
                                    <Link href={project.website} target="_blank" rel="noopener noreferrer" color="fg" _hover={{ color: 'fg.muted' }}>
                                        Website ↗
                                    </Link>
                                )}
                                <Link href={project.href} target="_blank" rel="noopener noreferrer" color="fg" _hover={{ color: 'fg.muted' }}>
                                    GitHub ↗
                                </Link>
                            </HStack>
                        </Flex>
                    </Box>
                ))}
            </Stack>
        </>
    );
}
