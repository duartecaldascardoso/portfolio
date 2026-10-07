import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
    globalCss: {
        'html, body': {
            bg: 'bg',
            color: 'fg',
        },
        '::selection': { bg: 'yellow.200', color: 'gray.900' },
        a: { textUnderlineOffset: '3px' },
    },
    theme: {
        tokens: {
            fonts: {
                heading: { value: "'Inter', system-ui, sans-serif" },
                body: { value: "'Inter', system-ui, sans-serif" },
                serif: { value: "'Source Serif 4', Georgia, serif" },
                mono: { value: "'JetBrains Mono', ui-monospace, monospace" },
            },
        },
    },
});
