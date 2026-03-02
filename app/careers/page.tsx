"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function CareersPage() {
    const jobs = [
        { title: "Senior AI Engineer", dept: "Engineering", type: "Full-time", loc: "Remote / London" },
        { title: "Product Designer", dept: "Design", type: "Full-time", loc: "Remote / New York" },
        { title: "Customer Success Manager", dept: "Operations", type: "Full-time", loc: "Lagos / Remote" },
        { title: "Sales Executive", dept: "Sales", type: "Commission", loc: "Global" }
    ];

    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            <section style={{ padding: '160px 0 100px', background: '#F8FAFC', textAlign: 'center' }}>
                <div className="container animate-slide-up" style={{ maxWidth: '800px' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px', marginBottom: '24px', display: 'block', fontFamily: 'var(--font-orbitron)' }}>Join Our Team</span>
                    <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, fontFamily: 'var(--font-orbitron)', color: 'var(--secondary)', marginBottom: '24px', lineHeight: 1.1 }}>
                        Build the Future of <span style={{ color: '#FF7D00' }}>Education</span>.
                    </h1>
                    <p className="animate-fade delay-2" style={{ fontSize: '20px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                        We&apos;re looking for passionate individuals who believe that technology can transform how the world learns.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="animate-slide-up" style={{ marginBottom: '48px' }}>
                        <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-orbitron)', fontWeight: 800 }}>Open Positions</h2>
                    </div>
                    <div className="flex column gap-16">
                        {jobs.map((job, i) => (
                            <div key={i} className={`card flex align-center justify-between animate-slide-up delay-${(i % 4) + 1}`} style={{ padding: '32px 40px', border: '1px solid var(--border)', borderRadius: '24px', transition: 'all 0.3s ease', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                <div>
                                    <div style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', fontFamily: 'var(--font-orbitron)' }}>{job.dept}</div>
                                    <h3 style={{ fontSize: '24px', marginBottom: '16px', fontWeight: 800 }}>{job.title}</h3>
                                    <div className="flex gap-24" style={{ color: 'var(--text-muted)', fontSize: '15px', fontWeight: 500 }}>
                                        <span className="flex align-center gap-8"><MapPin size={18} color="var(--primary)" /> {job.loc}</span>
                                        <span className="flex align-center gap-8"><Clock size={18} color="var(--primary)" /> {job.type}</span>
                                    </div>
                                </div>
                                <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '30px', fontWeight: 800, fontSize: '14px' }}>
                                    Apply Now <ArrowRight size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0', background: 'var(--secondary)', color: 'white' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '80px' }}>
                        <div className="animate-slide-left">
                            <h2 style={{ color: 'white', fontSize: '42px', marginBottom: '32px', fontFamily: 'var(--font-orbitron)', fontWeight: 800 }}>Perks & Benefits</h2>
                            <div className="grid grid-2" style={{ gap: '32px' }}>
                                {[
                                    { t: "Fully Remote", d: "Work from anywhere in the world." },
                                    { t: "Learning Budget", d: "Annual stipend for your own education." },
                                    { t: "Health Care", d: "Comprehensive global coverage." },
                                    { t: "Equity", d: "Own a piece of the company you build." }
                                ].map((p, i) => (
                                    <div key={i}>
                                        <h4 style={{ color: '#FF7D00', marginBottom: '8px' }}>{p.t}</h4>
                                        <p style={{ opacity: 0.7, fontSize: '14px' }}>{p.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="animate-rotate-in delay-3" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '40px', padding: '60px', textAlign: 'center', border: '1px solid rgba(255,125,0,0.2)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
                            <div style={{ background: 'rgba(255,125,0,0.1)', width: '96px', height: '96px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
                                <Briefcase size={40} color="#FF7D00" />
                            </div>
                            <h3 style={{ color: 'white', fontSize: '28px', marginBottom: '16px', fontFamily: 'var(--font-orbitron)', fontWeight: 800 }}>Don&apos;t see a fit?</h3>
                            <p style={{ opacity: 0.7, marginBottom: '40px', fontSize: '16px', lineHeight: 1.6 }}>We&apos;re always looking for talented people. Send us your resume anyway!</p>
                            <button className="btn btn-primary" style={{ padding: '16px 40px', borderRadius: '30px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>General Application</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
