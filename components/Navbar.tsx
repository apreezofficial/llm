"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Rocket } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentLang, setCurrentLang] = useState('Eng');

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
            background: scrolled || isOpen ? 'rgba(15, 23, 42, 0.9)' : 'transparent',
            backdropFilter: scrolled || isOpen ? 'blur(20px)' : 'none',
            zIndex: 10000,
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        }}>
            <nav className="container flex align-center justify-between" style={{ height: scrolled ? '80px' : '100px', transition: 'height 0.4s ease' }}>
                <Link href="/" className="flex align-center gap-12">
                    <div style={{ background: 'linear-gradient(135deg, #FF7D00 0%, #FFB444 100%)', width: '36px', height: '36px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(255,125,0,0.3)' }}>
                        <Rocket size={18} color="white" />
                    </div>
                    <span style={{
                        fontWeight: 950,
                        fontSize: '24px',
                        letterSpacing: '-1.5px',
                        fontFamily: 'var(--font-heading)',
                        color: 'white'
                    }}>
                        LMS<span style={{ color: '#FF7D00' }}>ZONE</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="flex align-center mobile-hide" style={{ gap: '32px' }}>
                    <div className="flex align-center gap-24">
                        {['Features', 'Pricing', 'Community', 'About'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="nav-link"
                                style={{
                                    color: 'rgba(255,255,255,0.8)',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    fontFamily: 'var(--font-heading)',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)', margin: '0 8px' }}></div>

                    <div className="flex align-center gap-20">
                        <Link href="/auth" style={{
                            background: '#FF7D00',
                            color: 'white',
                            padding: '12px 28px',
                            borderRadius: '16px',
                            fontWeight: 900,
                            fontSize: '14px',
                            fontFamily: 'var(--font-heading)',
                            boxShadow: '0 10px 20px rgba(255,125,0,0.2)'
                        }} className="hover-scale">
                            Join Portal
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="desktop-hide"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ color: 'white', padding: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="desktop-hide animate-slide-up" style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(15, 23, 42, 0.95)',
                    backdropFilter: 'blur(30px)',
                    padding: '32px 24px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px'
                }}>
                    {['Features', 'Pricing', 'Community', 'About'].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            style={{
                                color: 'white',
                                fontSize: '18px',
                                fontWeight: 800,
                                fontFamily: 'var(--font-heading)'
                            }}
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link href="/auth" style={{
                        background: '#FF7D00',
                        color: 'white',
                        padding: '16px',
                        borderRadius: '18px',
                        textAlign: 'center',
                        fontWeight: 950,
                        fontSize: '16px',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        Get Started
                    </Link>
                </div>
            )}

            <style jsx>{`
                .nav-link:hover { color: #FF7D00 !important; }
            `}</style>
        </header>
    );
}
