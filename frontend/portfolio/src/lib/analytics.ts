import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// GoatCounter (https://www.goatcounter.com): free, no cookies, no consent banner needed.
// Set VITE_GOATCOUNTER_CODE to the site code (the "duarte" in duarte.goatcounter.com)
// to turn it on; without it nothing is loaded.
const code = import.meta.env.VITE_GOATCOUNTER_CODE as string | undefined;

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
            window.goatcounter?.count?.({ path: pathname, title: document.title });
        });
    }, [pathname]);
}
