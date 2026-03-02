"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Smartphone, Download, Shield, Zap, Star, Apple, Play } from 'lucide-react';

export default function MobileAppPage() {
    return (
        <div style={{ background: '#FFFFFF' }}>
            <Navbar />

            {/* Hero */}
            <section style={{ padding: '140px 0 80px', overflow: 'hidden' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '80px' }}>
                        <div>
                            <div className="badge-pill badge-blue" style={{ marginBottom: '24px' }}>Now Available on iOS & Android</div>
                            <h1 style={{ fontSize: '64px', fontWeight: 800, marginBottom: '24px', letterSpacing: '-2px' }}>
                                Your Classroom in <br /><span style={{ color: '#0066FF' }}>Your Pocket</span>
                            </h1>
                            <p style={{ fontSize: '20px', color: '#64748B', lineHeight: 1.6, marginBottom: '40px' }}>
                                Download the EduTrack Pro app to learn on the go. Offline mode, push notifications for assignments, and seamless syncing across all your devices.
                            </p>
                            <div className="flex gap-16 flex-wrap">
                                <button className="btn btn-primary" style={{ padding: '16px 32px', borderRadius: '14px', background: '#0F172A' }}>
                                    <Apple size={24} style={{ marginRight: '12px' }} />
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontSize: '10px', opacity: 0.7 }}>Download on the</div>
                                        <div style={{ fontSize: '16px', fontWeight: 700 }}>App Store</div>
                                    </div>
                                </button>
                                <button className="btn btn-primary" style={{ padding: '16px 32px', borderRadius: '14px', background: '#0F172A' }}>
                                    <Smartphone size={24} style={{ marginRight: '12px' }} />
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontSize: '10px', opacity: 0.7 }}>Get it on</div>
                                        <div style={{ fontSize: '16px', fontWeight: 700 }}>Google Play</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div style={{ position: 'relative', textAlign: 'center' }}>
                            <div style={{
                                background: 'linear-gradient(135deg, #0066FF 0%, #60A5FA 100%)',
                                width: '500px',
                                height: '500px',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                opacity: 0.1,
                                zIndex: 0
                            }}></div>
                            <img
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
                                alt="App Screenshot"
                                style={{
                                    width: '300px',
                                    borderRadius: '40px',
                                    boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '64px' }}>
                        <h2 style={{ fontSize: '36px' }}>Mobile-First Learning Experience</h2>
                    </div>
                    <div className="grid grid-3">
                        {[
                            { icon: <Download size={32} />, title: "Offline Access", desc: "Download entire courses and watch them on the train or in areas with poor internet." },
                            { icon: <Zap size={32} />, title: "Live Notifications", desc: "Get alerted when a grade is posted, an assignment is due, or a teacher sends a message." },
                            { icon: <Shield size={32} />, title: "Secure Sync", desc: "Start a quiz on your laptop and finish it on your phone with zero data loss." }
                        ].map((feature, i) => (
                            <div key={i} className="card" style={{ padding: '40px', background: 'white' }}>
                                <div style={{ color: '#0066FF', marginBottom: '24px' }}>{feature.icon}</div>
                                <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>{feature.title}</h3>
                                <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6 }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="section">
                <div className="container">
                    <div className="card" style={{ padding: '60px', background: 'var(--secondary)', color: 'white', textAlign: 'center' }}>
                        <div className="flex justify-center gap-4" style={{ marginBottom: '24px', color: '#FACC15' }}>
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="#FACC15" size={24} />)}
                        </div>
                        <h2 style={{ fontSize: '32px', marginBottom: '24px', lineHeight: 1.4, color: 'white' }}>
                            &quot;The EduTrack Pro app has completely transformed how I manage my studies. Being able to track everything from my phone is a lifesaver.&quot;
                        </h2>
                        <div style={{ fontWeight: 700, fontSize: '18px' }}>Alex Rivera</div>
                        <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Grade 11 Student</div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
