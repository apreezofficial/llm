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
                <div className="container" style={{ maxWidth: '800px' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', marginBottom: '24px', display: 'block' }}>Join Our Team</span>
                    <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--secondary)', marginBottom: '24px' }}>
                        Build the Future of <span style={{ color: '#FF7D00' }}>Education</span>.
                    </h1>
                    <p style={{ fontSize: '20px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                        We&apos;re looking for passionate individuals who believe that technology can transform how the world learns.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ marginBottom: '48px' }}>
                        <h2 style={{ fontSize: '32px', fontFamily: 'var(--font-heading)' }}>Open Positions</h2>
                    </div>
                    <div className="flex column gap-16">
                        {jobs.map((job, i) => (
                            <div key={i} className="card flex align-center justify-between" style={{ padding: '32px', border: '1px solid var(--border)', transition: 'all 0.3s' }}>
                                <div>
                                    <div style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 700, marginBottom: '8px' }}>{job.dept}</div>
                                    <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>{job.title}</h3>
                                    <div className="flex gap-24" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                                        <span className="flex align-center gap-8"><MapPin size={16} /> {job.loc}</span>
                                        <span className="flex align-center gap-8"><Clock size={16} /> {job.type}</span>
                                    </div>
                                </div>
                                <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    Apply Now <ArrowRight size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0', background: 'var(--secondary)', color: 'white' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '80px' }}>
                        <div>
                            <h2 style={{ color: 'white', fontSize: '36px', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>Perks & Benefits</h2>
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
                        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '32px', padding: '60px', textAlign: 'center' }}>
                            <Briefcase size={64} color="#FF7D00" style={{ marginBottom: '24px' }} />
                            <h3 style={{ color: 'white', fontSize: '24px', marginBottom: '16px' }}>Don&apos;t see a fit?</h3>
                            <p style={{ opacity: 0.7, marginBottom: '32px' }}>We&apos;re always looking for talented people. Send us your resume anyway!</p>
                            <button className="btn btn-primary">General Application</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
