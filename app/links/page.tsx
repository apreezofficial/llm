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
            name: 'Main Experience',
            icon: <Home size={20} />,
            color: '#0066FF',
            links: [
                { title: 'Home Page', path: '/', desc: 'Primary landing page with full feature overview.' },
                { title: 'Auth Center', path: '/auth', desc: 'Login and registration portal for students and instructors.' },
                { title: 'Student Dashboard', path: '/dashboard', desc: 'Main personalized hub for enrolled learners.' },
                { title: 'Course Catalog', path: '/courses', desc: 'Browse and filter available educational content.' },
                { title: 'Pricing Plans', path: '/pricing', desc: 'Tiered subscription options for various needs.' },
            ]
        },
        {
            name: 'Demo Showcase',
            icon: <Monitor size={20} />,
            color: '#3B82F6',
            links: [
                { title: 'Demo Gallery Index', path: '/demo', desc: 'Overview of all high-fidelity demo implementations.' },
                { title: 'Eduflow Landing (Design 1)', path: '/demo/landing', desc: 'Modern LMS landing page implementation.' },
                { title: 'Eduflow V2 (Design 2)', path: '/demo/eduflow-v2', desc: 'Alternative landing page focusing on K-12.' },
                { title: 'Admin Console Demo', path: '/demo/admin', desc: 'High-fidelity admin management interface.' },
                { title: 'AI Tutor Chat Demo', path: '/demo/ai-tutor', desc: 'Interactive AI-powered tutoring environment.' },
                { title: 'LearnFlow Platform', path: '/demo/learnflow-platform', desc: 'Feature-rich learning platform overview.' },
                { title: 'Student Progress Demo', path: '/demo/student-dashboard', desc: 'Detailed student roadmap and stats.' },
                { title: 'Pricing Page Demo', path: '/demo/learnstream-pricing', desc: 'Institutional pricing tiered layout.' },
            ]
        },
        {
            name: 'Administrative Control',
            icon: <Shield size={20} />,
            color: '#4F46E5',
            links: [
                { title: 'Admin Home', path: '/admin', desc: 'Global system overview and statistics.' },
                { title: 'User Management', path: '/admin/users', desc: 'Manage students, instructors, and staff.' },
                { title: 'Course Control', path: '/admin/courses', desc: 'Content management and course builder.' },
                { title: 'AI Insights', path: '/admin/ai-insights', desc: 'Machine learning analytics and system health.' },
                { title: 'Financial Analytics', path: '/admin/financials', desc: 'Revenue tracking and subscription management.' },
                { title: 'System Logs', path: '/admin/logs', desc: 'Monitoring and security audit history.' },
            ]
        },
        {
            name: 'Learning Features',
            icon: <Zap size={20} />,
            color: '#10B981',
            links: [
                { title: 'AI Companion', path: '/ai-companion', desc: 'Personalized learning assistant sidebar.' },
                { title: 'AI Tutor', path: '/ai-tutor', desc: 'Full-screen chat-based interactive tutor.' },
                { title: 'Assignments', path: '/assignments', desc: 'Project submissions and task tracking.' },
                { title: 'Quizzes', path: '/quizzes', desc: 'Assessment engine with various question types.' },
                { title: 'Certificates', path: '/certificates', desc: 'Achievement verification and PDF exports.' },
                { title: 'Leaderboard', path: '/leaderboard', desc: 'Gamification and peer comparison stats.' },
                { title: 'Resource Library', path: '/library', desc: 'Curated educational documents and media.' },
            ]
        },
        {
            name: 'Platform Utils',
            icon: <Settings size={20} />,
            color: '#64748B',
            links: [
                { title: 'Help & Support', path: '/help', desc: 'Documentation, FAQs, and support ticketing.' },
                { title: 'Settings', path: '/settings', desc: 'Profile management and system preferences.' },
                { title: 'Billing', path: '/billing', desc: 'Invoice history and payment methods.' },
                { title: 'Blog', path: '/blog', desc: 'Company news and educational articles.' },
                { title: 'Careers', path: '/careers', desc: 'Join the team building the future of LMS.' },
                { title: 'Mobile App', path: '/mobile-app', desc: 'Overview of our native mobile experience.' },
            ]
        }
    ];

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh', padding: '60px 20px', fontFamily: 'Inter, sans-serif' }}>
            {/* 
                User Instruction: "use this way to make pages not responsve to be"
                Applying a container that focuses on desktop layout and minimal fluid scaling 
                to maintain design integrity as per standard high-fidelity patterns in the codebase.
            */}
            <style jsx global>{`
                .links-container {
                    width: 1200px;
                    margin: 0 auto;
                }
                @media (max-width: 1240px) {
                    .links-container {
                        width: 95%;
                    }
                }
                .navigation-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
                    gap: 32px;
                }
            `}</style>

            <div className="links-container">
                <header style={{ marginBottom: '60px', textAlign: 'center' }}>
                    <div style={{
                        background: '#0066FF',
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        boxShadow: '0 10px 15px -3px rgba(0, 102, 255, 0.3)'
                    }}>
                        <Layout size={24} color="white" />
                    </div>
                    <h1 style={{ fontSize: '42px', fontWeight: 900, color: '#0F172A', marginBottom: '12px', letterSpacing: '-1.5px' }}>
                        Platform <span style={{ color: '#0066FF' }}>Sitemap</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
                        Quick access to all 50+ implemented screens, dashboards, and administrative interfaces.
                    </p>
                </header>

                <div className="flex column gap-60">
                    {groups.map((group, i) => (
                        <section key={i}>
                            <div className="flex align-center gap-12" style={{ marginBottom: '32px', borderBottom: '2px solid #E2E8F0', paddingBottom: '16px' }}>
                                <div style={{ color: group.color }}>{group.icon}</div>
                                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#1E293B' }}>{group.name}</h2>
                                <span style={{ marginLeft: 'auto', background: '#E2E8F0', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, color: '#64748B' }}>
                                    {group.links.length} Pages
                                </span>
                            </div>

                            <div className="navigation-grid">
                                {group.links.map((link, j) => (
                                    <Link key={j} href={link.path} style={{ textDecoration: 'none' }}>
                                        <div className="card" style={{
                                            padding: '28px',
                                            background: 'white',
                                            border: '1px solid #E2E8F0',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease'
                                        }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.borderColor = group.color;
                                                e.currentTarget.style.transform = 'translateY(-4px)';
                                                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.05)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.borderColor = '#E2E8F0';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1E293B' }}>{link.title}</h3>
                                                <ExternalLink size={16} color="#CBD5E1" />
                                            </div>
                                            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, flex: 1, marginBottom: '24px' }}>
                                                {link.desc}
                                            </p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: group.color, fontSize: '13px', fontWeight: 700 }}>
                                                {link.path} <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <footer style={{ marginTop: '100px', textAlign: 'center', padding: '40px 0', borderTop: '1px solid #E2E8F0', color: '#64748B', fontSize: '14px' }}>
                    &copy; 2024 Prof-Simply LMS Dashboard. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default LinksPage;
