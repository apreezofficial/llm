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
                <div className="container">
                    <div style={{ opacity: 0.8, color: '#38BDF8', fontWeight: 800, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', marginBottom: '24px' }}>Trust & Safety</div>
                    <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: '24px' }}>
                        Your Data, <span style={{ color: '#38BDF8' }}>Fortified</span>.
                    </h1>
                    <p style={{ fontSize: '18px', opacity: 0.7, maxWidth: '700px', margin: '0 auto' }}>
                        At LMSZONE, security isn&apos;t a feature—it&apos;s our foundation. We employ multi-layered defense strategies to protect student privacy and institutional integrity.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-3" style={{ gap: '40px' }}>
                        {[
                            { icon: <Lock />, title: "End-to-End Encryption", desc: "All data transiting our network is encrypted using TLS 1.3, while data at rest is protected via AES-256." },
                            { icon: <Shield />, title: "SOC2 Compliance", desc: "We undergo annual independent audits to ensure our controls meet the highest industry standards for security." },
                            { icon: <FileCheck />, title: "GDPR & FERPA Ready", desc: "Built-in tools to help institutions remain compliant with international and regional privacy laws." },
                            { icon: <Server />, title: "Redundant Infrastructure", desc: "Distributed datacenter architecture ensures 99.99% uptime and zero-loss disaster recovery." },
                            { icon: <Eye />, title: "Real-time Monitoring", desc: "AI-driven threat detection systems monitor for unauthorized access attempts 24/7." },
                            { icon: <Globe />, title: "Data Sovereignty", desc: "Choose where your data resides with our regional cloud hosting options across 15+ global zones." }
                        ].map((s, i) => (
                            <div key={i} className="card" style={{ padding: '40px', background: 'white', border: '1px solid var(--border)' }}>
                                <div style={{ color: 'var(--primary)', marginBottom: '24px' }}>{s.icon}</div>
                                <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--secondary)' }}>{s.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0', background: '#F8FAFC' }}>
                <div className="container">
                    <div className="card" style={{ padding: '80px 40px', textAlign: 'center', background: 'white', border: '1px solid var(--border)', borderRadius: '48px' }}>
                        <h2 style={{ fontSize: '36px', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>Security is a Shared Responsibility</h2>
                        <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 40px' }}>
                            We provide the platform, the protection, and the tools. You provide the inspiration. Together, we build a safe space for the next generation of learners.
                        </p>
                        <button className="btn btn-primary" style={{ padding: '16px 40px' }}>Download Security Whitepaper</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
