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
            background: scrolled || isOpen ? '#005B52' : 'transparent',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
        }}>
            <nav className="container flex align-center justify-between" style={{ height: '90px' }}>
                <Link href="/" className="flex align-center gap-8">
                    <div style={{ background: '#FF7D00', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LayoutIcon size={20} color="white" />
                    </div>
                    <span style={{ fontWeight: 800, fontSize: '24px', color: 'white', letterSpacing: '-1px' }}>LMS<span style={{ color: '#FF7D00' }}>ZONE</span>.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="flex align-center mobile-hide" style={{ gap: '24px' }}>
                    <nav className="flex align-center gap-24">
                        <Link href="/" className="nav-link">Courses <ChevronDown size={14} /></Link>
                        <Link href="/pricing" className="nav-link">Courses Bundle</Link>
                        <Link href="/about" className="nav-link">Instructors <ChevronDown size={14} /></Link>
                        <Link href="/blog" className="nav-link">Page <ChevronDown size={14} /></Link>
                        <Link href="/support" className="nav-link">Forums</Link>
                    </nav>

                    <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)', margin: '0 10px' }}></div>

                    <div className="flex align-center gap-20">
                        <div className="flex align-center gap-4" style={{ color: 'white', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                            🇺🇸 Eng <ChevronDown size={14} />
                        </div>
                        <div style={{ position: 'relative', color: 'white', cursor: 'pointer' }}>
                            <ShoppingBag size={22} />
                            <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#FF7D00', color: 'white', fontSize: '10px', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #005B52' }}>2</span>
                        </div>
                        <Link href="/auth" className="btn" style={{ background: 'white', color: '#005B52', padding: '10px 24px', borderRadius: '30px', fontWeight: 700 }}>Join for Free</Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="desktop-hide"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ color: 'white' }}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            <style jsx>{`
                .nav-link {
                    color: white;
                    font-size: 15px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    transition: opacity 0.2s;
                }
                .nav-link:hover {
                    opacity: 0.8;
                }
            `}</style>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="desktop-hide animate-fade" style={{
                    position: 'absolute',
                    top: '90px',
                    left: 0,
                    right: 0,
                    background: '#005B52',
                    padding: '32px 24px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <Link href="/features" className="nav-link" onClick={() => setIsOpen(false)}>Features</Link>
                    <Link href="/solutions" className="nav-link" onClick={() => setIsOpen(false)}>Solutions</Link>
                    <Link href="/pricing" className="nav-link" onClick={() => setIsOpen(false)}>Pricing</Link>
                    <Link href="/resources" className="nav-link" onClick={() => setIsOpen(false)}>Resources</Link>
                    <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)' }} />
                    <button className="btn btn-primary" style={{ background: '#FF7D00', width: '100%', borderRadius: '30px' }}>Join for Free</button>
                </div>
            )}
        </header>
    );
}

const ChevronDown = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
);

const ShoppingBag = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
);

