"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, BookOpen, Settings, HelpCircle, MessageSquare } from 'lucide-react';

export default function HelpCenterPage() {
    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            <section style={{ padding: '160px 0 100px', background: '#F8FAFC', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: '48px', fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: '32px' }}>How can we <span style={{ color: '#FF7D00' }}>help</span>?</h1>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
                        <Search size={20} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Search for articles, guides..."
                            style={{
                                width: '100%',
                                padding: '20px 20px 20px 56px',
                                borderRadius: '50px',
                                border: '1px solid var(--border)',
                                outline: 'none',
                                fontSize: '16px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                            }}
                        />
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-3" style={{ gap: '32px' }}>
                        {[
                            { icon: <BookOpen />, title: "Getting Started", desc: "Learn the basics of setting up your institutional profile and first course." },
                            { icon: <Settings />, title: "Account Settings", desc: "Manage permissions, billing, integrations, and institutional branding." },
                            { icon: <HelpCircle />, title: "Troubleshooting", desc: "Quick fixes for common video and participation issues." }
                        ].map((cat, i) => (
                            <div key={i} className="card" style={{ padding: '40px', background: 'white', border: '1px solid var(--border)', borderRadius: '24px' }}>
                                <div style={{ color: 'var(--primary)', marginBottom: '20px' }}>{cat.icon}</div>
                                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{cat.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6 }}>{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
