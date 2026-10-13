import { Heading, Link, Stack, Text } from '@chakra-ui/react';
import { LuMail } from 'react-icons/lu';
import { Section } from '../components/site/Section';
import { workWithMe, workWithMeMailto, type TextPart, type WorkPoint } from '../content/workWithMe';
import { useTitle } from '../lib/useTitle';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

function Rich({ parts }: { parts: TextPart[] }) {
    return parts.map((part, index) =>
        typeof part === 'string' ? (
            <span key={index}>{part}</span>
        ) : (
            <Link
                key={index}
                href={part.href}
                {...external}
                color="fg"
                textDecoration="underline"
                textDecorationColor="border.emphasized"
                _hover={{ textDecorationColor: 'fg' }}
            >
                {part.text}
            </Link>
        ),
    );
}

function Points({ points }: { points: WorkPoint[] }) {
    return (
        <Stack gap={4}>
            {points.map((point) => (
                <Text key={point.lead} color="fg.muted" lineHeight="1.7">
                    <Text as="span" color="fg" fontWeight="medium">{point.lead}</Text>
                    {' '}
                    <Rich parts={point.parts} />
                </Text>
            ))}
        </Stack>
    );
}

export default function WorkPage() {
    useTitle('Work with me');

    return (
        <>
            <Stack gap={3} mb={{ base: 10, md: 12 }}>
                <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold" letterSpacing="-0.02em" lineHeight="1.25">
                    {workWithMe.headline}
                </Heading>
                <Text color="fg.muted" lineHeight="1.7">
                    {workWithMe.subheadline}
                </Text>
            </Stack>

            <Stack gap={14}>
                <Section title="Services">
                    <Stack gap={6}>
                        {workWithMe.services.map((service) => (
                            <Stack key={service.title} gap={1}>
                                <Text as="h3" fontWeight="medium">{service.title}</Text>
                                <Text color="fg.muted" lineHeight="1.7">{service.body}</Text>
                            </Stack>
                        ))}
                    </Stack>
                </Section>

                <Section title="How I work">
                    <Points points={workWithMe.howIWork} />
                </Section>

                <Section title="Proof">
                    <Points points={workWithMe.proof} />
                </Section>

                <Stack as="section" gap={3} borderTopWidth="1px" borderColor="border" pt={8}>
                    <Heading as="h2" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold" letterSpacing="-0.02em" lineHeight="1.35">
                        {workWithMe.ctaTitle}
                    </Heading>
                    <Text color="fg.muted" lineHeight="1.7">
                        {workWithMe.ctaBody}
                    </Text>
                    <Link
                        href={workWithMeMailto}
                        display="inline-flex"
                        alignItems="center"
                        gap={1.5}
                        mt={1}
                        w="fit-content"
                        color="fg"
                        fontWeight="medium"
                        textDecoration="underline"
                        textDecorationColor="border.emphasized"
                        _hover={{ textDecorationColor: 'fg' }}
                    >
                        <LuMail size={15} aria-hidden />
                        {workWithMe.ctaLabel}
                    </Link>
                </Stack>
            </Stack>
        </>
    );
}
