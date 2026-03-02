"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';

export default function CompanyPage() {
    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            {/* Hero */}
            <section style={{ padding: '160px 0 100px', background: '#046B63', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
                <div className="container animate-slide-up" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
                    <div style={{ background: '#FF7D00', color: 'white', padding: '8px 20px', borderRadius: '30px', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', display: 'inline-block', marginBottom: '32px', fontFamily: 'var(--font-heading)' }}>Who We Are</div>
                    <h1 style={{ fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: '28px', lineHeight: 1.1 }}>
                        We are builders of the <span style={{ color: '#FF7D00' }}>future of learning</span>.
                    </h1>
                    <p style={{ fontSize: '20px', opacity: 0.8, lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
                        LMSZONE was founded with one idea: education is the greatest lever for human progress, and it deserves the best technology on the planet.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section style={{ background: '#0F172A', padding: '60px 0' }}>
                <div className="container">
                    <div className="grid grid-4" style={{ gap: '32px', textAlign: 'center' }}>
                        {[
                            { val: '2021', label: 'Year Founded' },
                            { val: '42', label: 'Team Members' },
                            { val: '14', label: 'Countries Served' },
                            { val: '$12M', label: 'Series A Raised' }
                        ].map((s, i) => (
                            <div key={i} className={`animate-slide-up delay-${i + 1}`}>
                                <div style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 900, color: '#FF7D00', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>{s.val}</div>
                                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section style={{ padding: '120px 0' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
                        <div className="animate-slide-up">
                            <div style={{ background: '#FFF7ED', color: '#FF7D00', padding: '8px 20px', borderRadius: '30px', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', display: 'inline-block', marginBottom: '28px', fontFamily: 'var(--font-heading)' }}>Our Mission</div>
                            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--secondary)', marginBottom: '24px' }}>
                                Democratize world-class education for every learner on earth.
                            </h2>
                            <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
                                We believe that where you&apos;re born shouldn&apos;t determine the quality of education you receive. Our platform is engineered to bring the resources of elite institutions to a student in Lagos, Jakarta, or São Paulo.
                            </p>
                            <div className="grid grid-2" style={{ gap: '24px' }}>
                                {[
                                    { icon: <Users size={20} />, t: "Student-First", d: "Every decision starts with learner outcomes." },
                                    { icon: <Globe size={20} />, t: "Globally Inclusive", d: "40+ languages, offline mode, low-bandwidth optimized." },
                                    { icon: <Award size={20} />, t: "Excellence-Driven", d: "We set the bar high — for ourselves first." },
                                    { icon: <TrendingUp size={20} />, t: "Continuously Evolving", d: "We deploy improvements weekly, not quarterly." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-16 align-center">
                                        <div style={{ color: '#FF7D00', flexShrink: 0 }}>{item.icon}</div>
                                        <div>
                                            <div style={{ fontWeight: 800, fontSize: '14px', marginBottom: '4px' }}>{item.t}</div>
                                            <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{item.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="animate-scale-in delay-2" style={{ position: 'relative' }}>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                                alt="Our team"
                                style={{ width: '100%', borderRadius: '32px', boxShadow: '0 24px 60px rgba(0,0,0,0.1)' }}
                            />
                            <div style={{
                                position: 'absolute', bottom: '-24px', left: '24px',
                                background: '#005B52', color: 'white', padding: '24px 32px',
                                borderRadius: '20px', boxShadow: '0 12px 32px rgba(0,0,0,0.15)'
                            }}>
                                <div style={{ fontSize: '32px', fontWeight: 900, fontFamily: 'var(--font-heading)' }}>A+</div>
                                <div style={{ fontSize: '13px', opacity: 0.8, fontWeight: 600 }}>Team culture rating on Glassdoor</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section style={{ padding: '80px 0 120px', background: '#F8FAFC' }}>
                <div className="container animate-slide-up" style={{ textAlign: 'center', maxWidth: '700px' }}>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--secondary)', marginBottom: '20px' }}>
                        Want to be part of the story?
                    </h2>
                    <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.7 }}>
                        We&apos;re hiring curious, passionate people who want to change how the world learns.
                    </p>
                    <Link href="/careers" className="btn btn-primary" style={{ padding: '16px 44px', borderRadius: '30px', fontWeight: 800, fontSize: '16px' }}>
                        See Open Roles
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
