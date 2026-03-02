"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, FileCheck, Server, Globe } from 'lucide-react';

export default function SecurityPage() {
    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            <section style={{ padding: '160px 0 100px', background: '#0F172A', color: 'white', textAlign: 'center' }}>
                <div className="container animate-slide-up">
                    <div style={{ opacity: 0.9, color: '#38BDF8', fontWeight: 900, textTransform: 'uppercase', fontSize: '11px', letterSpacing: '3px', marginBottom: '24px', fontFamily: 'var(--font-orbitron)' }}>Trust & Safety</div>
                    <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, fontFamily: 'var(--font-orbitron)', marginBottom: '24px', lineHeight: 1.1 }}>
                        Your Data, <span style={{ color: '#38BDF8' }}>Fortified</span>.
                    </h1>
                    <p className="animate-fade delay-2" style={{ fontSize: '18px', opacity: 0.8, maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                        At LMSZONE, security isn&apos;t a feature—it&apos;s our foundation. We employ multi-layered defense strategies to protect student privacy and institutional integrity.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-3" style={{ gap: '40px' }}>
                        {[
                            { icon: <Lock size={32} />, title: "End-to-End Encryption", desc: "All data transiting our network is encrypted using TLS 1.3, while data at rest is protected via AES-256." },
                            { icon: <Shield size={32} />, title: "SOC2 Compliance", desc: "We undergo annual independent audits to ensure our controls meet the highest industry standards for security." },
                            { icon: <FileCheck size={32} />, title: "GDPR & FERPA Ready", desc: "Built-in tools to help institutions remain compliant with international and regional privacy laws." },
                            { icon: <Server size={32} />, title: "Redundant Infrastructure", desc: "Distributed datacenter architecture ensures 99.99% uptime and zero-loss disaster recovery." },
                            { icon: <Eye size={32} />, title: "Real-time Monitoring", desc: "AI-driven threat detection systems monitor for unauthorized access attempts 24/7." },
                            { icon: <Globe size={32} />, title: "Data Sovereignty", desc: "Choose where your data resides with our regional cloud hosting options across 15+ global zones." }
                        ].map((s, i) => (
                            <div key={i} className={`card animate-scale-in delay-${(i % 3) + 1}`} style={{ padding: '48px 40px', background: 'white', border: '1px solid var(--border)', borderRadius: '24px', transition: 'all 0.3s ease', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                <div style={{ color: '#38BDF8', marginBottom: '24px', background: 'rgba(56,189,248,0.1)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
                                <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--secondary)', fontFamily: 'var(--font-orbitron)', fontWeight: 800 }}>{s.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0', background: '#F8FAFC' }}>
                <div className="container">
                    <div className="card animate-slide-up" style={{ padding: '80px 40px', textAlign: 'center', background: '#0F172A', border: '1px solid rgba(255,125,0,0.2)', borderRadius: '48px', color: 'white', boxShadow: '0 25px 60px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ fontSize: '42px', marginBottom: '24px', fontFamily: 'var(--font-orbitron)', fontWeight: 800 }}>Security is a Shared Responsibility</h2>
                        <p style={{ fontSize: '18px', opacity: 0.7, maxWidth: '800px', margin: '0 auto 40px', lineHeight: 1.7 }}>
                            We provide the platform, the protection, and the tools. You provide the inspiration. Together, we build a safe space for the next generation of learners.
                        </p>
                        <button className="btn btn-primary animate-bounce-in delay-3" style={{ padding: '18px 48px', borderRadius: '40px', fontWeight: 800 }}>Download Security Whitepaper</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
