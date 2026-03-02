"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, MessageSquare, Globe, Heart } from 'lucide-react';

export default function CommunityPage() {
    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            <section style={{ padding: '160px 0 100px', background: '#F8FAFC', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--secondary)', marginBottom: '24px' }}>
                        Where Education Meets <span style={{ color: '#FF7D00' }}>Connection</span>.
                    </h1>
                    <p style={{ fontSize: '18px', color: 'var(--text-muted)' }}>Join a global network of educators, students, and innovators building the future together.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '40px' }}>
                        <div className="card" style={{ padding: '60px', background: 'white', border: '1px solid var(--border)', borderRadius: '32px' }}>
                            <div style={{ background: '#F0F9FF', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0066FF', marginBottom: '32px' }}>
                                <MessageSquare size={32} />
                            </div>
                            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Discussion Forums</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>Participate in deep-dives on pedagogical strategies, technical implementations, and learning science.</p>
                            <button className="btn btn-primary">Browse Topics</button>
                        </div>
                        <div className="card" style={{ padding: '60px', background: 'white', border: '1px solid var(--border)', borderRadius: '32px' }}>
                            <div style={{ background: '#FFF7ED', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF7D00', marginBottom: '32px' }}>
                                <Users size={32} />
                            </div>
                            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Ambassador Program</h2>
                            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Ambassador Program</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>Join our elite circle of education leaders who represent LMSZONE at conferences and events worldwide.</p>
                            <button className="btn btn-outline">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
