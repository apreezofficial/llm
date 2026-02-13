"use client";
import Link from 'next/link';

const LayoutIcon = ({ size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" />
    </svg>
);

export default function Navbar() {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border)',
            zIndex: 1000
        }}>
            <nav className="container flex align-center justify-between" style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" className="flex align-center gap-8" style={{ gap: '8px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LayoutIcon size={18} color="white" />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '20px', color: '#0F172A' }}>EduFlow</span>
                </Link>

                <div className="flex align-center" style={{ gap: '32px', display: 'flex' }}>
                    <Link href="/features" className="btn-ghost" style={{ fontSize: '14px', fontWeight: 500 }}>Features</Link>
                    <Link href="/solutions" className="btn-ghost" style={{ fontSize: '14px', fontWeight: 500 }}>Solutions</Link>
                    <Link href="/pricing" className="btn-ghost" style={{ fontSize: '14px', fontWeight: 500 }}>Pricing</Link>
                    <Link href="/resources" className="btn-ghost" style={{ fontSize: '14px', fontWeight: 500 }}>Resources</Link>
                </div>

                <div className="flex align-center" style={{ gap: '16px', display: 'flex' }}>
                    <button className="btn-ghost" style={{ fontSize: '14px', fontWeight: 600 }}>Login</button>
                    <button className="btn btn-primary" style={{ padding: '8px 20px', borderRadius: '6px' }}>Sign Up</button>
                </div>
            </nav>
        </header>
    );
}
