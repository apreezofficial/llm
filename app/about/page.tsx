"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, Award, Shield, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
    return (
        <div style={{ background: '#FFFFFF' }}>
            <Navbar />

            {/* Hero Section */}
            <section style={{ padding: '120px 0 80px', background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}>
                <div className="container">
                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="badge-pill badge-blue" style={{ marginBottom: '24px' }}>Our Mission</div>
                        <h1 style={{ fontSize: '56px', fontWeight: 800, marginBottom: '24px', letterSpacing: '-2px' }}>
                            Redefining the <span style={{ color: '#0066FF' }}>Future of Learning</span>
                        </h1>
                        <p style={{ fontSize: '20px', color: '#64748B', lineHeight: 1.6 }}>
                            We're on a mission to democratize elite education through AI-driven personalization and seamless virtual classroom experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Sections */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '40px', marginBottom: '24px' }}>Innovation at the Core</h2>
                            <p style={{ fontSize: '18px', color: '#64748B', marginBottom: '32px', lineHeight: 1.7 }}>
                                Founded in 2024, EduTrack Pro was born out of a simple observation: traditional leaning management systems were fragmented and uninspiring. We built a platform that bridges the gap between administrators, educators, and students.
                            </p>
                            <div className="flex column gap-16">
                                {[
                                    { title: 'AI-Native Foundation', desc: 'Predictive analytics that catch learning gaps before they happen.' },
                                    { title: 'Global Accessibility', desc: 'Optimized for low-bandwidth regions without sacrificing quality.' },
                                    { title: 'Enterprise Security', desc: 'Institutional level data protection for every student.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-16">
                                        <div style={{ background: '#EEF2FF', padding: '10px', borderRadius: '12px', height: 'fit-content' }}>
                                            <CheckCircle2 size={20} color="#0066FF" />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>{item.title}</h4>
                                            <p style={{ fontSize: '14px', color: '#64748B' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                                alt="Team collaborating"
                                style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            />
                            <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', background: '#0066FF', color: 'white', padding: '32px', borderRadius: '24px', maxWidth: '240px' }}>
                                <div style={{ fontSize: '40px', fontWeight: 800 }}>98%</div>
                                <div style={{ fontSize: '14px', fontWeight: 600 }}>Student Satisfaction Rate across 15 countries.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '64px' }}>
                        <h2 style={{ fontSize: '36px' }}>Our Core Values</h2>
                    </div>
                    <div className="grid grid-3">
                        {[
                            { icon: <Target size={32} />, title: 'Student First', desc: 'Every feature we build starts with the student experience.' },
                            { icon: <Shield size={32} />, title: 'Privacy Focused', desc: 'We never monetize student data. Period.' },
                            { icon: <Users size={32} />, title: 'Radical Inclusivity', desc: 'Tools designed for every type of learner and ability.' },
                            { icon: <Award size={32} />, title: 'Academic Excellence', desc: 'Rigorous tools for high-achieving institutions.' },
                            { icon: <CheckCircle2 size={32} />, title: 'Continuous Growth', desc: 'We iterate as fast as the world changes.' },
                            { icon: <Award size={32} />, title: 'Global Community', desc: 'Connecting students across borders and cultures.' }
                        ].map((item, i) => (
                            <div key={i} className="card" style={{ padding: '32px', background: 'white' }}>
                                <div style={{ color: '#0066FF', marginBottom: '20px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{item.title}</h3>
                                <p style={{ fontSize: '15px', color: '#64748B' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
