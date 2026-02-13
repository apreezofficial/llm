"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LayoutIcon = ({ size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" />
    </svg>
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            background: scrolled || isOpen ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
            zIndex: 1000,
            transition: 'all 0.3s ease'
        }}>
            <nav className="container flex align-center justify-between" style={{ padding: '16px 0', height: '72px' }}>
                <Link href="/" className="flex align-center gap-8">
                    <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LayoutIcon size={18} color="white" />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '20px', color: '#0F172A' }}>EduTrack<span style={{ color: '#0066FF' }}>Pro</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="flex align-center mobile-hide" style={{ gap: '32px' }}>
                    <Link href="/features" className="btn-ghost" style={{ fontSize: '14px', fontWeight: 500 }}>Features</Link>
                    <Link href="/solutions" className="btn-ghost" style={{ fontSize: '14px', fontWeight: 500 }}>Solutions</Link>
                    <Link href="/pricing" className="btn-ghost" style={{ fontSize: '14px', fontWeight: 500 }}>Pricing</Link>
                    <Link href="/resources" className="btn-ghost" style={{ fontSize: '14px', fontWeight: 500 }}>Resources</Link>
                </div>

                <div className="flex align-center mobile-hide" style={{ gap: '12px' }}>
                    <Link href="/auth" className="btn-ghost" style={{ fontSize: '14px', fontWeight: 600 }}>Login</Link>
                    <Link href="/auth" className="btn btn-primary" style={{ padding: '8px 20px', borderRadius: '6px' }}>Sign Up</Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="desktop-hide"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ color: 'var(--secondary)' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="desktop-hide animate-fade" style={{
                    position: 'absolute',
                    top: '72px',
                    left: 0,
                    right: 0,
                    background: 'white',
                    padding: '24px',
                    borderBottom: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}>
                    <Link href="/features" className="btn-ghost" style={{ justifyContent: 'flex-start' }} onClick={() => setIsOpen(false)}>Features</Link>
                    <Link href="/solutions" className="btn-ghost" style={{ justifyContent: 'flex-start' }} onClick={() => setIsOpen(false)}>Solutions</Link>
                    <Link href="/pricing" className="btn-ghost" style={{ justifyContent: 'flex-start' }} onClick={() => setIsOpen(false)}>Pricing</Link>
                    <Link href="/resources" className="btn-ghost" style={{ justifyContent: 'flex-start' }} onClick={() => setIsOpen(false)}>Resources</Link>
                    <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />
                    <button className="btn btn-outline" style={{ width: '100%' }}>Login</button>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Sign Up</button>
                </div>
            )}
        </header>
    );
}

