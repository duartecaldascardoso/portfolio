import { Flex, Heading, Link, Stack } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type SectionProps = {
    title: string;
    more?: { label: string; to: string };
    children: ReactNode;
};

export const Section = ({ title, more, children }: SectionProps) => (
    <Stack as="section" gap={5}>
        <Flex justify="space-between" align="baseline">
            <Heading as="h2" fontSize="sm" fontWeight="medium" color="fg.muted">
                {title}
            </Heading>
            {more && more.to.startsWith('http') && (
                <Link href={more.to} target="_blank" rel="noopener noreferrer" fontSize="sm" color="fg.muted" _hover={{ color: 'fg' }}>
                    {more.label} ↗
                </Link>
            )}
            {more && !more.to.startsWith('http') && (
                <Link asChild fontSize="sm" color="fg.muted" _hover={{ color: 'fg' }}>
                    <RouterLink to={more.to}>{more.label} →</RouterLink>
                </Link>
            )}
        </Flex>
        {children}
    </Stack>
);

export const PageHeader = ({ title, children }: { title: string; children?: ReactNode }) => (
    <Stack gap={3} mb={{ base: 10, md: 12 }}>
        <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold" letterSpacing="-0.02em">
            {title}
        </Heading>
        {children}
    </Stack>
);
