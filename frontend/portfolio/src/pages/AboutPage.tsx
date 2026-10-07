import { Box, Flex, Image, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { PageHeader, Section } from '../components/site/Section';
import { education, links, outsideWork, work, type TimelineEntry } from '../data/site';
import { useTitle } from '../lib/useTitle';

const Timeline = ({ entries }: { entries: TimelineEntry[] }) => (
    <Stack gap={6}>
        {entries.map((entry) => (
            <Flex key={`${entry.title}-${entry.period}`} gap={{ base: 1, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                <Text fontSize="sm" color="fg.muted" w={{ sm: "156px" }} flexShrink={0} pt={{ sm: "2px" }} whiteSpace={{ sm: "nowrap" }} fontVariantNumeric="tabular-nums">
                    {entry.period}
                </Text>
                <Box>
                    <Text fontWeight="medium">
                        {entry.title} <Text as="span" color="fg.muted" fontWeight="normal">· {entry.place}</Text>
                    </Text>
                    {entry.details.map((detail) => (
                        <Text key={detail} mt={1} color="fg.muted" lineHeight="1.65">
                            {detail}
                        </Text>
                    ))}
                </Box>
            </Flex>
        ))}
    </Stack>
);

export default function AboutPage() {
    useTitle('About');

    return (
        <>
            <PageHeader title="About">
                <Text color="fg.muted" lineHeight="1.7">
                    AI Engineer based in Porto. This is the longer version: where I have worked, what I studied and
                    what keeps me busy outside of it. There is also my{' '}
                    <Link href={links.cv} target="_blank" rel="noopener noreferrer" color="fg" textDecoration="underline">
                        CV
                    </Link>
                    .
                </Text>
            </PageHeader>

            <Stack gap={14}>
                <Section title="Work">
                    <Timeline entries={work} />
                </Section>

                <Section title="Education">
                    <Timeline entries={education} />
                </Section>

                <Section title="Outside work">
                    <SimpleGrid columns={{ base: 1, sm: 2 }} gap={8}>
                        {outsideWork.map((hobby) => (
                            <Box key={hobby.title}>
                                <Image
                                    src={hobby.image}
                                    alt={hobby.title}
                                    w="full"
                                    aspectRatio={4 / 3}
                                    objectFit="cover"
                                    objectPosition={hobby.imagePosition}
                                    borderRadius="md"
                                    loading="lazy"
                                />
                                <Flex mt={3} justify="space-between" align="baseline" gap={3}>
                                    <Text fontWeight="medium">{hobby.title}</Text>
                                    <Text fontSize="sm" color="fg.muted" flexShrink={0}>{hobby.period}</Text>
                                </Flex>
                                <Text mt={1} fontSize="sm" color="fg.muted" lineHeight="1.6">
                                    {hobby.detail}
                                </Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Section>
            </Stack>
        </>
    );
}
