"use client";
import Link from 'next/link';

const LayoutIcon = ({ size = 20, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" />
    </svg>
);

const FacebookIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const TwitterIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
);

const InstagramIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="16" x="4" y="4" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="container" style={{ padding: '80px 24px 40px' }}>
            <div className="grid" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '60px', marginBottom: '80px', display: 'grid' }}>
                <div>
                    <Link href="/" className="flex align-center gap-8" style={{ gap: '8px', marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
                        <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <LayoutIcon size={18} color="white" />
                        </div>
                        <span style={{ fontWeight: 700, fontSize: '20px', color: '#0F172A' }}>EduFlow</span>
                    </Link>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px', maxWidth: '240px' }}>
                        The world&apos;s leading LMS designed for student success and teacher efficiency in the digital age.
                    </p>
                    <div className="flex" style={{ gap: '16px', display: 'flex' }}>
                        <div style={{ cursor: 'pointer', color: 'var(--text-muted)' }}><FacebookIcon /></div>
                        <div style={{ cursor: 'pointer', color: 'var(--text-muted)' }}><TwitterIcon /></div>
                        <div style={{ cursor: 'pointer', color: 'var(--text-muted)' }}><LinkedinIcon /></div>
                        <div style={{ cursor: 'pointer', color: 'var(--text-muted)' }}><InstagramIcon /></div>
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '24px' }}>Product</h4>
                    <div className="flex" style={{ flexDirection: 'column', gap: '12px', display: 'flex' }}>
                        <Link href="#" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Features</Link>
                        <Link href="#" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Pricing</Link>
                        <Link href="#" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Security</Link>
                        <Link href="#" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Mobile App</Link>
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '24px' }}>Company</h4>
                    <div className="flex" style={{ flexDirection: 'column', gap: '12px', display: 'flex' }}>
                        <Link href="#" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>About Us</Link>
                        <Link href="#" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Careers</Link>
                        <Link href="#" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Blog</Link>
                        <Link href="#" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Contact</Link>
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '24px' }}>Resources</h4>
                    <div className="flex" style={{ flexDirection: 'column', gap: '12px', display: 'flex' }}>
                        <Link href="#" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Help Center</Link>
                        <Link href="#" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Community</Link>
                        <Link href="#" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Privacy</Link>
                        <Link href="#" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Terms</Link>
                    </div>
                </div>
            </div>

            <div className="flex justify-between align-center" style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', fontSize: '14px', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>© {currentYear} EduFlow LMS. All rights reserved.</div>
                <div className="flex" style={{ gap: '24px', display: 'flex' }}>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Cookie Settings</Link>
                </div>
            </div>
        </footer>
    );
}
