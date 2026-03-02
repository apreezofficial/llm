"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            <section style={{ padding: '160px 0 100px', background: '#046B63', color: 'white' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
                        <div className="animate-slide-left">
                            <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, fontFamily: 'var(--font-orbitron)', marginBottom: '24px', lineHeight: 1.1 }}>Let&apos;s Start a <span style={{ color: '#FF7D00' }}>Conversation</span>.</h1>
                            <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '40px', lineHeight: 1.6 }}>Have questions about our institutional plans or need technical support? We&apos;re here to help.</p>

                            <div className="flex column gap-32">
                                {[
                                    { icon: <Mail size={24} />, label: "Email us at", val: "hello@lmszone.com" },
                                    { icon: <Phone size={24} />, label: "Call us at", val: "+1 (234) 567-890" },
                                    { icon: <MapPin size={24} />, label: "Visit our office", val: "123 Innovation Way, Tech Hub 3.0" }
                                ].map((item, i) => (
                                    <div key={i} className={`flex align-center gap-20 animate-slide-up delay-${i + 2}`}>
                                        <div style={{ background: 'rgba(255,125,0,0.15)', padding: '14px', borderRadius: '14px', color: '#FF7D00', boxShadow: '0 4px 12px rgba(255,125,0,0.2)' }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '13px', opacity: 0.6, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
                                            <div style={{ fontSize: '18px', fontWeight: 800 }}>{item.val}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card animate-slide-right delay-3" style={{ padding: '60px', background: 'white', borderRadius: '32px', boxShadow: '0 32px 80px rgba(0,0,0,0.08)' }}>
                            <form className="flex column gap-24">
                                <div className="grid grid-2" style={{ gap: '20px' }}>
                                    <div className="flex column gap-8">
                                        <label style={{ fontSize: '13px', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-orbitron)' }}>First Name</label>
                                        <input type="text" placeholder="John" style={{ padding: '14px 18px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '15px' }} />
                                    </div>
                                    <div className="flex column gap-8">
                                        <label style={{ fontSize: '13px', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-orbitron)' }}>Last Name</label>
                                        <input type="text" placeholder="Doe" style={{ padding: '14px 18px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '15px' }} />
                                    </div>
                                </div>
                                <div className="flex column gap-8">
                                    <label style={{ fontSize: '13px', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-orbitron)' }}>Work Email</label>
                                    <input type="email" placeholder="john@university.edu" style={{ padding: '14px 18px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '15px' }} />
                                </div>
                                <div className="flex column gap-8">
                                    <label style={{ fontSize: '13px', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-orbitron)' }}>Message</label>
                                    <textarea placeholder="Tell us about your needs..." style={{ padding: '14px 18px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', height: '140px', resize: 'none', fontSize: '15px' }}></textarea>
                                </div>
                                <button className="btn btn-primary animate-bounce-in delay-5" style={{ padding: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '16px', fontWeight: 800, borderRadius: '14px', marginTop: '12px' }}>
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
