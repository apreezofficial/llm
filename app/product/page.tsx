"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Video, BarChart3, Users, Award, Zap } from 'lucide-react';
import Link from 'next/link';

const highlights = [
    { icon: <Video size={28} />, title: "Virtual Classrooms", desc: "HD video, whiteboards, breakout rooms and recording — all inside your browser." },
    { icon: <BarChart3 size={28} />, title: "Progress Analytics", desc: "Live dashboards that surface every student's trajectory, not just their final grade." },
    { icon: <BookOpen size={28} />, title: "Course Builder", desc: "Drag-and-drop curriculum builder with SCORM import, multimedia, and AI-auto-tagging." },
    { icon: <Users size={28} />, title: "Collaboration Tools", desc: "Group projects, peer reviews, real-time co-authoring, and a social learning feed." },
    { icon: <Award size={28} />, title: "Certification Engine", desc: "Branded, verifiable certificates with blockchain anchoring and LinkedIn export." },
    { icon: <Zap size={28} />, title: "AI Study Companion", desc: "A personalised tutor available 24/7 that explains, quizzes, and adapts to each learner." }
];

export default function ProductPage() {
    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            {/* Hero */}
            <section style={{ padding: '160px 0 100px', background: '#046B63', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
                <div className="container animate-slide-up" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
                        <div style={{ background: '#FF7D00', color: 'white', padding: '8px 20px', borderRadius: '30px', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', display: 'inline-block', marginBottom: '32px', fontFamily: 'var(--font-heading)' }}>The Full Suite</div>
                        <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: '28px', lineHeight: 1.1 }}>
                            One product for your<br /> <span style={{ color: '#FF7D00' }}>entire institution.</span>
                        </h1>
                        <p style={{ fontSize: '20px', opacity: 0.8, maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.7 }}>
                            LMSZONE consolidates every learning tool your institution needs into a single, beautiful platform — from the first lecture to the final certificate.
                        </p>
                        <div className="flex justify-center" style={{ gap: '16px', flexWrap: 'wrap' }}>
                            <Link href="/auth" className="btn btn-primary" style={{ padding: '16px 40px', borderRadius: '30px', fontWeight: 800 }}>Start Free Trial</Link>
                            <Link href="/pricing" className="btn" style={{ padding: '16px 40px', borderRadius: '30px', fontWeight: 700, border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>View Pricing</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section style={{ padding: '120px 0', background: '#F8FAFC' }}>
                <div className="container">
                    <div className="text-center animate-slide-up" style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--secondary)' }}>
                            Everything included. <span style={{ color: '#FF7D00' }}>No extras.</span>
                        </h2>
                    </div>
                    <div className="grid grid-3" style={{ gap: '28px' }}>
                        {highlights.map((h, i) => (
                            <div key={i} className={`card animate-slide-up delay-${Math.min(i + 1, 5)}`} style={{ padding: '40px 32px', background: 'white', border: '1px solid var(--border)', borderRadius: '24px' }}>
                                <div style={{ color: '#FF7D00', marginBottom: '24px' }}>{h.icon}</div>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>{h.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7 }}>{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
