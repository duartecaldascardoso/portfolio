import { Link } from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import { FaLinkedin, FaMedium } from 'react-icons/fa';
import type { Post } from '../../lib/blog';

const sources: Record<string, { icon: IconType; color: string }> = {
    LinkedIn: { icon: FaLinkedin, color: '#0A66C2' },
    Medium: { icon: FaMedium, color: 'var(--chakra-colors-fg)' },
};

// The logo of the site a post was first published on, linking to the original.
export const SourceLink = ({ post, size = 16 }: { post: Post; size?: number }) => {
    const source = post.originalSource ? sources[post.originalSource] : undefined;
    if (!source || !post.originalUrl) return null;
    const Icon = source.icon;

    return (
        <Link
            href={post.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open “${post.title}” on ${post.originalSource}`}
            title={`Open on ${post.originalSource}`}
            color="fg.subtle"
            display="inline-flex"
            flexShrink={0}
            _hover={{ color: source.color }}
        >
            <Icon size={size} />
        </Link>
    );
};
