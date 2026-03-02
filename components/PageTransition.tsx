"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;
        // Remove then re-add the class to re-trigger animation on route change
        el.classList.remove('page-wrapper');
        void el.offsetWidth; // force reflow
        el.classList.add('page-wrapper');
    }, [pathname]);

    return (
        <div ref={wrapperRef} className="page-wrapper">
            {children}
        </div>
    );
}
