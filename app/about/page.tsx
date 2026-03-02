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
            <section style={{
                padding: '160px 0 100px',
                background: '#046B63',
                color: 'white',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    pointerEvents: 'none'
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="text-center animate-slide-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{
                            background: '#FF7D00',
                            color: 'white',
                            padding: '6px 16px',
                            borderRadius: '30px',
                            fontSize: '11px',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            marginBottom: '24px',
                            display: 'inline-block',
                            fontFamily: 'var(--font-orbitron)',
                            boxShadow: '0 4px 12px rgba(255,125,0,0.3)'
                        }}>
                            Our Mission
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(36px, 5vw, 64px)',
                            fontWeight: 900,
                            marginBottom: '24px',
                            fontFamily: 'var(--font-orbitron)',
                            lineHeight: 1.1
                        }}>
                            Redefining the <span style={{ color: '#FF7D00' }}>Future of Learning</span>
                        </h1>
                        <p className="animate-fade delay-2" style={{ fontSize: '20px', opacity: 0.8, lineHeight: 1.6 }}>
                            We&apos;re on a mission to democratize elite education through AI-driven personalization and seamless virtual classroom experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Sections */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
                        <div className="animate-slide-left">
                            <h2 style={{ fontSize: '40px', marginBottom: '24px', fontFamily: 'var(--font-orbitron)', fontWeight: 800 }}>Innovation at the Core</h2>
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
                                        <div style={{ background: '#FFF7ED', padding: '10px', borderRadius: '12px', height: 'fit-content' }}>
                                            <CheckCircle2 size={20} color="#FF7D00" />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>{item.title}</h4>
                                            <p style={{ fontSize: '14px', color: '#64748B' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="animate-slide-right delay-2" style={{ position: 'relative' }}>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                                alt="Team collaborating"
                                style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            />
                            <div className="animate-bounce-in delay-4" style={{ position: 'absolute', bottom: '-24px', right: '-24px', background: '#005B52', color: 'white', padding: '32px', borderRadius: '24px', maxWidth: '240px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                                <div style={{ fontSize: '40px', fontWeight: 900, fontFamily: 'var(--font-orbitron)' }}>98%</div>
                                <div style={{ fontSize: '13px', fontWeight: 600, opacity: 0.9 }}>Student Satisfaction Rate across 15 countries.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <div className="text-center animate-slide-up" style={{ marginBottom: '64px' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: 800, fontFamily: 'var(--font-orbitron)', color: 'var(--secondary)' }}>Our Core Values</h2>
                    </div>
                    <div className="grid grid-3" style={{ gap: '32px' }}>
                        {[
                            { icon: <Target size={32} />, title: 'Student First', desc: 'Every feature we build starts with the student experience.' },
                            { icon: <Shield size={32} />, title: 'Privacy Focused', desc: 'We never monetize student data. Period.' },
                            { icon: <Users size={32} />, title: 'Radical Inclusivity', desc: 'Tools designed for every type of learner and ability.' },
                            { icon: <Award size={32} />, title: 'Academic Excellence', desc: 'Rigorous tools for high-achieving institutions.' },
                            { icon: <CheckCircle2 size={32} />, title: 'Continuous Growth', desc: 'We iterate as fast as the world changes.' },
                            { icon: <Award size={32} />, title: 'Global Community', desc: 'Connecting students across borders and cultures.' }
                        ].map((item, i) => (
                            <div key={i} className={`card animate-scale-in delay-${(i % 3) + 1}`} style={{ padding: '32px', background: 'white', borderRadius: '24px', border: '1px solid var(--border)', transition: 'all 0.3s ease' }}>
                                <div style={{ color: '#FF7D00', marginBottom: '20px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '20px', marginBottom: '12px', fontFamily: 'var(--font-orbitron)', fontWeight: 700 }}>{item.title}</h3>
                                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
