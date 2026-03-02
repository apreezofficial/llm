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
    const [langOpen, setLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('Eng');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const languages = [
        { code: 'Eng', name: 'English' },
        { code: 'Yor', name: 'Yoruba' },
        { code: 'Igb', name: 'Igbo' },
        { code: 'Hau', name: 'Hausa' }
    ];

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
                    <span style={{ fontWeight: 800, fontSize: '24px', color: 'white', letterSpacing: '-1px', fontFamily: 'var(--font-heading)' }}>LMS<span style={{ color: '#FF7D00' }}>ZONE</span>.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="flex align-center mobile-hide" style={{ gap: '24px' }}>
                    <nav className="flex align-center gap-24">
                        <Link href="/features" className="nav-link">Features</Link>
                        <Link href="/pricing" className="nav-link">Pricing</Link>
                        <Link href="/mobile-app" className="nav-link">Mobile App</Link>
                        <Link href="/blog" className="nav-link">Blog</Link>
                        <Link href="/about" className="nav-link">About Us</Link>
                    </nav>

                    <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)', margin: '0 10px' }}></div>

                    <div className="flex align-center gap-20">
                        {/* Language Dropdown */}
                        <div style={{ position: 'relative' }}>
                            <div
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex align-center gap-4"
                                style={{ color: 'white', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
                            >
                                {currentLang} <ChevronDown size={14} />
                            </div>

                            {langOpen && (
                                <div style={{
                                    position: 'absolute',
                                    top: '40px',
                                    right: 0,
                                    background: 'white',
                                    borderRadius: '12px',
                                    padding: '8px',
                                    width: '120px',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '2px',
                                    zIndex: 100
                                }}>
                                    {languages.map((l) => (
                                        <div
                                            key={l.code}
                                            onClick={() => {
                                                setCurrentLang(l.code);
                                                setLangOpen(false);
                                            }}
                                            style={{
                                                padding: '10px 12px',
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                color: currentLang === l.code ? '#FF7D00' : '#005B52',
                                                cursor: 'pointer',
                                                borderRadius: '8px',
                                                background: currentLang === l.code ? '#FFF7ED' : 'transparent',
                                                transition: 'all 0.2s'
                                            }}
                                            className="lang-option"
                                        >
                                            {l.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div style={{ position: 'relative', color: 'white', cursor: 'pointer' }}>
                            <ShoppingBag size={22} />
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
                .lang-option:hover {
                    background: #F8FAFC !important;
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

