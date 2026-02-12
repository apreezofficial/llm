"use client";
import Link from 'next/link';
import { Layout, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="container" style={{ padding: '80px 24px 40px' }}>
            <div className="grid" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '60px', marginBottom: '80px' }}>
                <div>
                    <Link href="/" className="flex align-center gap-8" style={{ gap: '8px', marginBottom: '24px' }}>
                        <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Layout size={18} color="white" />
                        </div>
                        <span style={{ fontWeight: 700, fontSize: '20px', color: '#0F172A' }}>EduFlow</span>
                    </Link>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px', maxWidth: '240px' }}>
                        The world's leading LMS designed for student success and teacher efficiency in the digital age.
                    </p>
                    <div className="flex" style={{ gap: '16px' }}>
                        <Facebook size={20} className="btn-ghost" style={{ cursor: 'pointer' }} />
                        <Twitter size={20} className="btn-ghost" style={{ cursor: 'pointer' }} />
                        <Linkedin size={20} className="btn-ghost" style={{ cursor: 'pointer' }} />
                        <Instagram size={20} className="btn-ghost" style={{ cursor: 'pointer' }} />
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '24px' }}>Product</h4>
                    <div className="flex" style={{ flexDirection: 'column', gap: '12px' }}>
                        <Link href="#" className="btn-ghost" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Features</Link>
                        <Link href="#" className="btn-ghost" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Pricing</Link>
                        <Link href="#" className="btn-ghost" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Security</Link>
                        <Link href="#" className="btn-ghost" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Mobile App</Link>
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '24px' }}>Company</h4>
                    <div className="flex" style={{ flexDirection: 'column', gap: '12px' }}>
                        <Link href="#" className="btn-ghost" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>About Us</Link>
                        <Link href="#" className="btn-ghost" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Careers</Link>
                        <Link href="#" className="btn-ghost" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Blog</Link>
                        <Link href="#" className="btn-ghost" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Contact</Link>
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '24px' }}>Resources</h4>
                    <div className="flex" style={{ flexDirection: 'column', gap: '12px' }}>
                        <Link href="#" className="btn-ghost" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Help Center</Link>
                        <Link href="#" className="btn-ghost" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Community</Link>
                        <Link href="#" className="btn-ghost" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Privacy</Link>
                        <Link href="#" className="btn-ghost" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Terms</Link>
                    </div>
                </div>
            </div>

            <div className="flex justify-between align-center" style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', fontSize: '14px', color: 'var(--text-muted)' }}>
                <div>© {currentYear} EduFlow LMS. All rights reserved.</div>
                <div className="flex" style={{ gap: '24px' }}>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Cookie Settings</Link>
                </div>
            </div>
        </footer>
    );
}
