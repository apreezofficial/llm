"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Smartphone, Download, CheckCircle2, Star } from 'lucide-react';

export default function MobileAppPage() {
    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            <section style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top right, #005B52, #046B63)', color: 'white', overflow: 'hidden' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <span style={{ background: '#FF7D00', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '24px', display: 'inline-block' }}>New Update v2.4</span>
                            <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 900, fontFamily: 'var(--font-heading)', lineHeight: 1.1, marginBottom: '24px' }}>
                                Learning in Your <span style={{ color: '#FF7D00' }}>Pocket</span>.
                            </h1>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '40px', lineHeight: 1.6 }}>
                                Take your classroom anywhere. The LMSZONE mobile app brings the full power of our platform to iOS and Android devices.
                            </p>
                            <div className="flex gap-16" style={{ flexWrap: 'wrap' }}>
                                <button className="btn" style={{ background: 'black', color: 'white', padding: '14px 28px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Apple_logo_black.svg" style={{ width: '20px', filter: 'invert(1)' }} alt="Apple" />
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontSize: '10px', opacity: 0.6 }}>Download on the</div>
                                        <div style={{ fontSize: '16px', fontWeight: 700 }}>App Store</div>
                                    </div>
                                </button>
                                <button className="btn" style={{ background: 'black', color: 'white', padding: '14px 28px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg" style={{ width: '100px' }} alt="Google Play" />
                                </button>
                            </div>
                        </div>
                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="https://demo.blockskit.com/education-pro-2/wp-content/uploads/sites/75/2024/02/banner-image2.png"
                                alt="App View"
                                style={{ width: '110%', transform: 'rotate(5deg)', borderRadius: '40px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-heading)', color: 'var(--secondary)' }}>Why Our App is Different</h2>
                    </div>
                    <div className="grid grid-3" style={{ gap: '40px' }}>
                        {[
                            { title: "Offline Study Mode", desc: "Download lessons, videos, and quizzes to study even when you&apos;re not connected to the internet." },
                            { title: "Smart Notifications", desc: "Receive immediate alerts for upcoming live classes, new assignments, and grade updates." },
                            { title: "Mobile Collaboration", desc: "Participate in breakout rooms and whiteboard sessions directly from your phone or tablet." }
                        ].map((item, i) => (
                            <div key={i} className="card" style={{ padding: '32px', textAlign: 'center' }}>
                                <div style={{ color: 'var(--primary)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
