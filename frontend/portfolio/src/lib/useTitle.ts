import { useEffect } from 'react';

export function useTitle(title?: string) {
    useEffect(() => {
        document.title = title ? `${title} · Duarte Cardoso` : 'Duarte Cardoso';
    }, [title]);
}
