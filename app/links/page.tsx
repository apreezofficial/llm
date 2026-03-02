"use client";
import React from 'react';
import Link from 'next/link';
import {
    Home,
    Layout,
    Shield,
    Zap,
    Settings,
    Book,
    Users,
    Box,
    ArrowRight,
    ExternalLink,
    Monitor,
    Sparkles,
    Award,
    Globe,
    LineChart,
    FileText,
    CreditCard,
    Grid,
    Video,
    MessageSquare,
    Calendar,
    Search,
    Lock
} from 'lucide-react';

const LinksPage = () => {
    const groups = [
        {
            name: 'Core Platform',
            icon: <Globe size={24} />,
            color: '#FF7D00',
            links: [
                { title: 'Home Page', path: '/', desc: 'Primary landing page with platform overview and CTAs.' },
                { title: 'Features Overview', path: '/features', desc: 'Detailed technical capabilities and tool list.' },
                { title: 'Our Mission / About', path: '/about', desc: 'The story and vision behind the LMS ecosystem.' },
                { title: 'Institutional Solutions', path: '/solutions', desc: 'Custom implementations for schools and business.' },
                { title: 'Authentication Gate', path: '/auth', desc: 'Secure portal for all user types and roles.' },
            ]
        },
        {
            name: 'Learner Experience',
            icon: <Book size={24} />,
            color: '#3B82F6',
            links: [
                { title: 'Student Dashboard', path: '/dashboard', desc: 'Personalized roadmap, progress tracking, and AI help.' },
                { title: 'Learning Catalog', path: '/courses', desc: 'Full list of available modules and workshops.' },
                { title: 'Pricing & Tiers', path: '/pricing', desc: 'Subscription model for individuals and groups.' },
            ]
        },
        {
            name: 'Instructor Ecosystem',
            icon: <Monitor size={24} />,
            color: '#005B52',
            links: [
                { title: 'Tutor Dashboard', path: '/tutor/dashboard', desc: 'Top-level analytics and shortcut control for mentors.' },
                { title: 'Course Manager', path: '/tutor/courses', desc: 'Full curriculum management and content builder.' },
                { title: 'Student Roster', path: '/tutor/students', desc: 'Detailed enrollment tracking and profile management.' },
                { title: 'Advanced Gradebook', path: '/tutor/grades', desc: 'Global performance oversight and grade distribution.' },
            ]
        },
        {
            name: 'Legal & Support',
            icon: <Shield size={24} />,
            color: '#0F172A',
            links: [
                { title: 'Help & Success Center', path: '/help', desc: 'Knowledge base, FAQs, and live support portal.' },
                { title: 'Privacy Policy', path: '/privacy', desc: 'Our standards for data protection and user privacy.' },
                { title: 'Terms of Service', path: '/terms', desc: 'The official agreement for platform usage.' },
            ]
        }
    ];

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh', padding: '100px 40px', fontFamily: 'Satoshi, sans-serif' }}>
            <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
                <header style={{ marginBottom: '100px', textAlign: 'center' }}>
                    <div className="animate-scale-in" style={{
                        background: '#FF7D00',
                        width: '80px',
                        height: '80px',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 32px',
                        boxShadow: '0 20px 40px rgba(255,125,0,0.2)'
                    }}>
                        <Grid size={36} color="white" />
                    </div>
                    <h1 style={{ fontSize: '56px', fontWeight: 950, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.04em', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                        Platform <span style={{ color: '#FF7D00' }}>Directory</span>
                    </h1>
                    <p style={{ fontSize: '20px', color: '#64748B', maxWidth: '700px', margin: '0 auto', fontWeight: 500 }}>
                        Comprehensive sitemap for navigating the end-to-end educational experience.
                    </p>
                </header>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
                    {groups.map((group, i) => (
                        <section key={i} className="animate-slide-up">
                            <div className="flex align-center gap-16" style={{ marginBottom: '48px', borderBottom: '2px solid #E2E8F0', paddingBottom: '24px' }}>
                                <div style={{ color: group.color }}>{group.icon}</div>
                                <h2 style={{ fontSize: '32px', fontWeight: 950, color: '#0F172A', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>{group.name}</h2>
                                <span style={{ marginLeft: 'auto', background: 'white', padding: '8px 20px', borderRadius: '30px', fontSize: '13px', fontWeight: 950, color: '#64748B', border: '1px solid #E2E8F0' }}>
                                    {group.links.length} Active Screens
                                </span>
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                                gap: '32px'
                            }}>
                                {group.links.map((link, j) => (
                                    <Link key={j} href={link.path} style={{ textDecoration: 'none' }}>
                                        <div style={{
                                            padding: '40px',
                                            background: 'white',
                                            border: '1px solid #E2E8F0',
                                            borderRadius: '40px',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                            boxShadow: 'var(--shadow-md)'
                                        }}
                                            className="hover-scale"
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.borderColor = group.color;
                                                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.borderColor = '#E2E8F0';
                                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                                <h3 style={{ fontSize: '22px', fontWeight: 950, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>{link.title}</h3>
                                                <div style={{ color: '#CBD5E1' }}><ExternalLink size={20} /></div>
                                            </div>
                                            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, flex: 1, marginBottom: '32px', fontWeight: 500 }}>
                                                {link.desc}
                                            </p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: group.color, fontSize: '14px', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                Navigate <ArrowRight size={18} />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <footer style={{ marginTop: '120px', textAlign: 'center', padding: '60px 0', borderTop: '1px solid #E2E8F0', color: '#64748B', fontSize: '15px', fontWeight: 600 }}>
                    &copy; 2026 LMS Platform Ecosystem. Designed for Excellence.
                </footer>
            </div>
        </div>
    );
};

export default LinksPage;
