"use client";
import React from 'react';
import Link from 'next/link';
import {
    Layout,
    Monitor,
    Sparkles,
    Award,
    Globe,
    LineChart,
    FileText,
    Zap,
    CreditCard,
    Grid,
    Users,
    Video
} from 'lucide-react';

const DemoGallery = () => {
    const demos = [
        // Set 1
        { title: 'Admin Management Console', path: '/demo/admin', icon: <Monitor size={32} />, color: '#0066FF', desc: 'Full-featured admin dashboard with stats, user management, and system health.' },
        { title: 'EduAI Tutor Chat', path: '/demo/ai-tutor', icon: <Sparkles size={32} />, color: '#3B82F6', desc: 'AI-powered tutoring interface with rich chat components and interactive diagrams.' },
        { title: 'AcademiaOS Achievements', path: '/demo/achievements', icon: <Award size={32} />, color: '#4F46E5', desc: 'Certification and achievement showcase with professional credential verification.' },
        { title: 'Eduflow LMS Landing', path: '/demo/landing', icon: <Globe size={32} />, color: '#0066FF', desc: 'Modern, high-conversion landing page for educational software platforms.' },
        { title: 'EduStream Student Dashboard', path: '/demo/student-dashboard', icon: <LineChart size={32} />, color: '#10B981', desc: 'Student progress tracker with GPA stats, roadmap, and promotion checklists.' },

        // Set 2
        { title: 'Lumina LMS Resources', path: '/demo/lumina-resources', icon: <FileText size={32} />, color: '#4F46E5', desc: 'Premium resources hub with detailed guides, webinars, and newsletter signup.' },
        { title: 'Eduflow V2 Landing', path: '/demo/eduflow-v2', icon: <Zap size={32} />, color: '#0066FF', desc: 'Enhanced landing page variant focusing on K-12 and Higher Ed virtual excellence.' },
        { title: 'LearnStream Pricing', path: '/demo/learnstream-pricing', icon: <CreditCard size={32} />, color: '#0066FF', desc: 'Transparent tiered pricing plans for tutors, schools, and institutions.' },
        { title: 'LearnFlow Platform', path: '/demo/learnflow-platform', icon: <Grid size={32} />, color: '#3B82F6', desc: 'Powerful platform features showcase with virtual classrooms and AI assistants.' },
        { title: 'EduTrackPro Dashboard', path: '/demo/edutrackpro-dashboard', icon: <Layout size={32} />, color: '#0066FF', desc: 'Clean, professional student dashboard with grades, badges, and learning paths.' },

        // Set 3
        { title: 'EduStream Instructor Dashboard', path: '/demo/edustream-instructor', icon: <Users size={32} />, color: '#0066FF', desc: 'High-fidelity instructor console with global stats, schedule tracking, and grading.' },
        { title: 'Virtual Classroom Interface', path: '/demo/virtual-classroom', icon: <Video size={32} />, color: '#0066FF', desc: 'Immersive live learning environment with PiP video, live chat, and material trays.' },
    ];

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh', padding: '80px 24px', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-1.5px' }}>UI Implementation Gallery</h1>
                <p style={{ fontSize: '18px', color: '#64748B', marginBottom: '60px' }}>Exactly as seen in the provided designs. 12 High-fidelity screens implemented.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                    {demos.map((demo, i) => (
                        <Link key={i} href={demo.path} style={{ textDecoration: 'none' }}>
                            <div style={{
                                background: 'white',
                                padding: '40px',
                                borderRadius: '24px',
                                border: '1px solid #E2E8F0',
                                textAlign: 'left',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 0.1)';
                                    e.currentTarget.style.borderColor = demo.color;
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#E2E8F0';
                                }}
                            >
                                <div style={{ color: demo.color, marginBottom: '24px' }}>{demo.icon}</div>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: '#1E293B' }}>{demo.title}</h3>
                                <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, flex: 1 }}>{demo.desc}</p>
                                <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: demo.color, fontWeight: 700, fontSize: '14px' }}>
                                    View Implementation →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DemoGallery;
