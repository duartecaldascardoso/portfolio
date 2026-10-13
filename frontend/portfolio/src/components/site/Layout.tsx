import { Box, Container, Flex, HStack, IconButton, Link, Text } from '@chakra-ui/react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LuMoon, LuSun } from 'react-icons/lu';
import { useColorMode } from '../ui/color-mode';
import ScrollToTop from '../utils/ScrollToTop';
import { usePageViews } from '../../lib/analytics';
import { links } from '../../data/site';
import { workWithMeId } from '../../content/workWithMe';

const nav: { label: string; to: string; hash?: string }[] = [
    { label: 'Blog', to: '/blog' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Learning', to: '/learning' },
    { label: 'Work with me', to: '/', hash: workWithMeId },
];

export const Layout = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { hash } = useLocation();
    usePageViews();

    return (
        <Flex direction="column" minH="100vh">
            <ScrollToTop />

            <Container as="header" maxW="2xl" px={{ base: 5, md: 6 }} pt={{ base: 6, md: 10 }}>
                <Flex align="center" justify="space-between" wrap="wrap" columnGap={4} rowGap={3}>
                    <Link asChild fontWeight="semibold" color="fg" _hover={{ textDecoration: 'none', color: 'fg.muted' }}>
                        <NavLink to="/">Duarte Cardoso</NavLink>
                    </Link>
                    <HStack
                        as="nav"
                        w={{ base: 'full', sm: 'auto' }}
                        gap={{ base: 4, md: 6 }}
                        rowGap={2}
                        fontSize="sm"
                        wrap="wrap"
                        justify="flex-start"
                    >
                        {nav.map((item) => (
                            <Link
                                key={item.label}
                                asChild
                                color="fg.muted"
                                whiteSpace="nowrap"
                                _hover={{ color: 'fg', textDecoration: 'none' }}
                                css={{ '&.active': { color: 'var(--chakra-colors-fg)' } }}
                            >
                                <NavLink
                                    to={item.hash ? { pathname: item.to, hash: item.hash } : item.to}
                                    end={Boolean(item.hash)}
                                    className={item.hash ? () => (hash === `#${item.hash}` ? 'active' : '') : undefined}
                                >
                                    {item.label}
                                </NavLink>
                            </Link>
                        ))}
                        <IconButton
                            aria-label="Toggle dark mode"
                            variant="ghost"
                            size="xs"
                            color="fg.muted"
                            onClick={toggleColorMode}
                        >
                            {colorMode === 'dark' ? <LuSun /> : <LuMoon />}
                        </IconButton>
                    </HStack>
                </Flex>
            </Container>

            <Box as="main" flex="1" py={{ base: 12, md: 16 }}>
                <Container maxW="2xl" px={{ base: 5, md: 6 }}>
                    <Outlet />
                </Container>
            </Box>

            <Container as="footer" maxW="2xl" px={{ base: 5, md: 6 }} pb={10}>
                <Flex
                    borderTopWidth="1px"
                    borderColor="border"
                    pt={6}
                    justify="space-between"
                    wrap="wrap"
                    gap={3}
                    fontSize="sm"
                    color="fg.muted"
                >
                    <Text>© {new Date().getFullYear()} Duarte Cardoso</Text>
                    <HStack gap={5}>
                        <Link href={links.github} target="_blank" rel="noopener noreferrer" color="fg.muted" _hover={{ color: 'fg' }}>GitHub</Link>
                        <Link href={links.linkedin} target="_blank" rel="noopener noreferrer" color="fg.muted" _hover={{ color: 'fg' }}>LinkedIn</Link>
                        <Link href={links.email} color="fg.muted" _hover={{ color: 'fg' }}>Email</Link>
                    </HStack>
                </Flex>
            </Container>
        </Flex>
    );
};
