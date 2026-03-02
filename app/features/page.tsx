"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
    Video,
    Users,
    Zap,
    Shield,
    Globe,
    BarChart3,
    MessageSquare,
    Layers,
    CheckCircle2
} from 'lucide-react';

export default function FeaturesPage() {
    const features = [
        {
            icon: <Video size={32} />,
            title: "Virtual Classrooms",
            desc: "HD video conferencing with integrated whiteboards, breakout rooms, and real-time document collaboration.",
            benefits: ["Up to 1000 participants", "Auto-recording & cloud storage", "Interactive MCQ polls"]
        },
        {
            icon: <Zap size={32} />,
            title: "AI-Powered Learning",
            desc: "Predictive analytics identify at-risk students and automatically suggest personalized remedial pathways.",
            benefits: ["Sentiment analysis of discussions", "Smart grading assistant", "Automated lesson planning"]
        },
        {
            icon: <Layers size={32} />,
            title: "Curriculum Management",
            desc: "Drag-and-drop course builder with support for SCORM, LTI, and multi-modal content types (PDF, Video, Quiz).",
            benefits: ["Version control", "Prerequisite mapping", "Global asset library"]
        },
        {
            icon: <Shield size={32} />,
            title: "Institutional Security",
            desc: "Enterprise-grade data protection with SOC2 compliance, SSO integration, and role-based access control.",
            benefits: ["GDPR & FERPA ready", "Granular user permissions", "Audit logs & activity tracking"]
        },
        {
            icon: <BarChart3 size={32} />,
            title: "Advanced Analytics",
            desc: "Visual dashboard for administrators to track institutional performance, student ROI, and teacher efficiency.",
            benefits: ["Customizable reports", "Retention forecasting", "Live participation metrics"]
        },
        {
            icon: <Globe size={32} />,
            title: "Global Reach",
            desc: "Multi-language support and low-bandwidth optimization for students in every corner of the globe.",
            benefits: ["Offline mode support", "24/7 global CDN", "Content localization"]
        }
    ];

    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            {/* Hero Section */}
            <section style={{
                background: '#046B63',
                padding: '160px 0 100px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    pointerEvents: 'none'
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span style={{
                            background: '#FF7D00',
                            padding: '6px 16px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            display: 'inline-block',
                            marginBottom: '24px',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            Capabilities
                        </span>
                        <h1 style={{
                            fontSize: 'clamp(40px, 5vw, 64px)',
                            fontWeight: 900,
                            marginBottom: '24px',
                            fontFamily: 'var(--font-heading)',
                            lineHeight: 1.1
                        }}>
                            The Tools of <span style={{ color: '#FF7D00' }}>Tomorrow</span>
                        </h1>
                        <p style={{ fontSize: '20px', opacity: 0.8, lineHeight: 1.6 }}>
                            Every feature is designed with a singular focus: to make teaching more efficient and learning more engaging.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-3" style={{ gap: '32px' }}>
                        {features.map((f, i) => (
                            <div key={i} className="card animate-fade" style={{
                                padding: '40px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '24px',
                                border: '1px solid var(--border)',
                                background: 'white'
                            }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    background: '#F0F9FF',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#0066FF'
                                }}>
                                    {f.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '24px', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--secondary)' }}>{f.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>{f.desc}</p>
                                    <div className="flex column gap-12">
                                        {f.benefits.map((b, idx) => (
                                            <div key={idx} className="flex align-center gap-8" style={{ fontSize: '14px', color: 'var(--text-main)', fontWeight: 500 }}>
                                                <CheckCircle2 size={16} color="#10B981" />
                                                {b}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detail Section */}
            <section style={{ padding: '100px 0', background: '#F8FAFC' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '80px' }}>
                        <div className="animate-fade">
                            <h2 style={{ fontSize: '42px', marginBottom: '24px', fontFamily: 'var(--font-heading)', color: 'var(--secondary)' }}>Built for Administrators, Loved by Teachers.</h2>
                            <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
                                We understand that the best technology is invisible. Our platform integrates seamlessly into existing workflows, allowing educators to focus on what they do best: inspire students.
                            </p>
                            <div className="flex column gap-24">
                                <div className="flex gap-20">
                                    <div style={{ background: 'white', padding: '12px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                                        <Users size={24} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '18px', marginBottom: '4px' }}>Member Management</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Easy bulk imports and active directory syncing for thousands of students.</p>
                                    </div>
                                </div>
                                <div className="flex gap-20">
                                    <div style={{ background: 'white', padding: '12px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                                        <MessageSquare size={24} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '18px', marginBottom: '4px' }}>Collaborative Forums</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Threaded discussions with rich media support and peer-to-peer tutoring tools.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="animate-fade" style={{ position: 'relative' }}>
                            <div style={{
                                background: 'white',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-xl)',
                                border: '8px solid white'
                            }}>
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200"
                                    alt="LMS Interface"
                                    style={{ width: '100%', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
