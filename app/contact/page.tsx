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
                        <div>
                            <h1 style={{ fontSize: '56px', fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: '24px' }}>Let&apos;s Start a <span style={{ color: '#FF7D00' }}>Conversation</span>.</h1>
                            <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '40px' }}>Have questions about our institutional plans or need technical support? We&apos;re here to help.</p>

                            <div className="flex column gap-32">
                                <div className="flex align-center gap-20">
                                    <div style={{ background: 'rgba(255,125,0,0.2)', padding: '12px', borderRadius: '12px', color: '#FF7D00' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '14px', opacity: 0.7 }}>Email us at</div>
                                        <div style={{ fontSize: '18px', fontWeight: 700 }}>hello@lmszone.com</div>
                                    </div>
                                </div>
                                <div className="flex align-center gap-20">
                                    <div style={{ background: 'rgba(255,125,0,0.2)', padding: '12px', borderRadius: '12px', color: '#FF7D00' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '14px', opacity: 0.7 }}>Call us at</div>
                                        <div style={{ fontSize: '18px', fontWeight: 700 }}>+1 (234) 567-890</div>
                                    </div>
                                </div>
                                <div className="flex align-center gap-20">
                                    <div style={{ background: 'rgba(255,125,0,0.2)', padding: '12px', borderRadius: '12px', color: '#FF7D00' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '14px', opacity: 0.7 }}>Visit our office</div>
                                        <div style={{ fontSize: '18px', fontWeight: 700 }}>123 Innovation Way, Tech Hub 3.0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ padding: '60px', background: 'white', borderRadius: '32px' }}>
                            <form className="flex column gap-24">
                                <div className="grid grid-2" style={{ gap: '16px' }}>
                                    <div className="flex column gap-8">
                                        <label style={{ fontSize: '14px', fontWeight: 700, color: 'var(--secondary)' }}>First Name</label>
                                        <input type="text" placeholder="John" style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border)', outline: 'none' }} />
                                    </div>
                                    <div className="flex column gap-8">
                                        <label style={{ fontSize: '14px', fontWeight: 700, color: 'var(--secondary)' }}>Last Name</label>
                                        <input type="text" placeholder="Doe" style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border)', outline: 'none' }} />
                                    </div>
                                </div>
                                <div className="flex column gap-8">
                                    <label style={{ fontSize: '14px', fontWeight: 700, color: 'var(--secondary)' }}>Work Email</label>
                                    <input type="email" placeholder="john@university.edu" style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border)', outline: 'none' }} />
                                </div>
                                <div className="flex column gap-8">
                                    <label style={{ fontSize: '14px', fontWeight: 700, color: 'var(--secondary)' }}>Message</label>
                                    <textarea placeholder="Tell us about your needs..." style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border)', outline: 'none', height: '120px', resize: 'none' }}></textarea>
                                </div>
                                <button className="btn btn-primary" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                    Send Message <Send size={18} />
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
