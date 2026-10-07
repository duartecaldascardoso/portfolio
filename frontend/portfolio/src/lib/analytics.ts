import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// GoatCounter (https://www.goatcounter.com): free, no cookies, no consent banner needed.
// Stats are at https://caldasdcardoso.goatcounter.com. Page views are counted on each
// route change, and never during local development.
const code = (import.meta.env.VITE_GOATCOUNTER_CODE as string | undefined) || 'caldasdcardoso';

type GoatCounter = { count: (vars: { path: string; title?: string }) => void };
declare global {
    interface Window {
        goatcounter?: GoatCounter & { no_onload?: boolean };
    }
}

let loading: Promise<void> | null = null;

function loadScript() {
    if (!code) return Promise.resolve();
    if (loading) return loading;

    loading = new Promise((resolve) => {
        window.goatcounter = { ...window.goatcounter, no_onload: true } as Window['goatcounter'];
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://gc.zgo.at/count.js';
        script.dataset.goatcounter = `https://${code}.goatcounter.com/count`;
        script.onload = () => resolve();
        script.onerror = () => resolve();
        document.head.appendChild(script);
    });
    return loading;
}

export function usePageViews() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (!code || import.meta.env.DEV) return;
        loadScript().then(() => {
            // Include the base path, so links in the GoatCounter dashboard open the right page.
            const path = `${import.meta.env.BASE_URL.replace(/\/$/, '')}${pathname}`;
            window.goatcounter?.count?.({ path, title: document.title });
        });
    }, [pathname]);
}
