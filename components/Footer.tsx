"use client";
import Link from 'next/link';
import { Layout, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Wave from './Wave';

const LayoutIcon = ({ size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" />
    </svg>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ position: 'relative', overflow: 'hidden', background: '#F8FAFC', borderTop: '1px solid var(--border)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, transform: 'rotate(180deg)', opacity: 0.3 }}>
                <Wave />
            </div>
            <div className="container" style={{ padding: '100px 24px 40px', position: 'relative', zIndex: 1 }}>
                <div className="grid grid-4" style={{ gap: '48px', marginBottom: '80px' }}>
                    <div className="footer-brand" style={{ gridColumn: 'span 2' }}>
                        <Link href="/" className="flex align-center gap-8" style={{ marginBottom: '24px' }}>
                            <div style={{ background: '#FF7D00', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <LayoutIcon size={18} color="white" />
                            </div>
                            <span style={{
                                fontWeight: 950,
                                fontSize: '24px',
                                letterSpacing: '-1px',
                                fontFamily: 'var(--font-orbitron)',
                                display: 'flex',
                                alignItems: 'baseline'
                            }}>
                                <span style={{ color: '#0F172A', opacity: 0.9 }}>LMS</span>
                                <span style={{ color: '#FF7D00' }}>ZONE</span>
                                <span style={{ color: '#FF7D00', marginLeft: '2px' }}>.</span>
                            </span>
                        </Link>
                        <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '24px', maxWidth: '300px', lineHeight: '1.6' }}>
                            The world&apos;s leading LMS designed for student success and teacher efficiency in the digital age.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '16px', marginBottom: '24px', fontWeight: 700, color: 'var(--secondary)' }}>Product</h4>
                        <div className="flex column" style={{ gap: '12px' }}>
                            <Link href="/features" className="text-muted hover-link">Features</Link>
                            <Link href="/pricing" className="text-muted hover-link">Pricing</Link>
                            <Link href="/security" className="text-muted hover-link">Security</Link>
                            <Link href="/mobile-app" className="text-muted hover-link">Mobile App</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '16px', marginBottom: '24px', fontWeight: 700, color: 'var(--secondary)' }}>Company</h4>
                        <div className="flex column" style={{ gap: '12px' }}>
                            <Link href="/about" className="text-muted hover-link">About Us</Link>
                            <Link href="/careers" className="text-muted hover-link">Careers</Link>
                            <Link href="/blog" className="text-muted hover-link">Blog</Link>
                            <Link href="/contact" className="text-muted hover-link">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '16px', marginBottom: '24px', fontWeight: 700, color: 'var(--secondary)' }}>Resources</h4>
                        <div className="flex column" style={{ gap: '12px' }}>
                            <Link href="/help-center" className="text-muted hover-link">Help Center</Link>
                            <Link href="/community" className="text-muted hover-link">Community</Link>
                            <Link href="/privacy" className="text-muted hover-link">Privacy</Link>
                            <Link href="/terms" className="text-muted hover-link">Terms</Link>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between align-center" style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '40px',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    flexWrap: 'wrap',
                    gap: '24px'
                }}>
                    <div>© {currentYear} LMSZONE. All rights reserved.</div>
                    <div className="flex" style={{ gap: '24px' }}>
                        <Link href="/privacy" className="hover-link">Privacy Policy</Link>
                        <button
                            onClick={() => window.dispatchEvent(new Event('lmszone-open-cookie-settings'))}
                            className="hover-link"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit', color: 'inherit', padding: 0, fontFamily: 'inherit' }}
                        >
                            Cookie Settings
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .hover-link {
                    transition: color 0.2s ease;
                }
                .hover-link:hover {
                    color: var(--primary);
                }
                @media (max-width: 768px) {
                    .footer-brand { grid-column: span 1 !important; }
                }
            `}</style>
        </footer>
    );
}

