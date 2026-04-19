"use client";

import { useEffect } from "react";

/**
 * Attaches Mixpanel click tracking to all links that have data-mp-label attribute.
 * Works with server-component links — no need to convert them to client components.
 */
export default function LandingAnalytics() {
    useEffect(() => {
        const mp = (window as any).mixpanel;
        if (!mp) return;

        const handleClick = (e: Event) => {
            const link = e.currentTarget as HTMLAnchorElement;
            mp.track("cta_clicked", {
                label: link.getAttribute("data-mp-label"),
                section: link.getAttribute("data-mp-section"),
                destination: link.href,
            });
        };

        const links = document.querySelectorAll<HTMLAnchorElement>("a[data-mp-label]");
        links.forEach(link => link.addEventListener("click", handleClick));
        return () => links.forEach(link => link.removeEventListener("click", handleClick));
    }, []);

    return null;
}
