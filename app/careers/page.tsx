"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, MapPin, Clock, Coffee, Heart, Zap, ArrowRight } from 'lucide-react';

export default function CareersPage() {
    const jobs = [
        { title: "Senior AI Engineer", team: "Engineering", location: "Remote / London", type: "Full-time" },
        { title: "Product Designer (LMS)", team: "Design", location: "Remote / NY", type: "Full-time" },
        { title: "Customer Success Lead", team: "Operations", location: "Lagos / Remote", type: "Full-time" },
        { title: "Curriculum Specialist", team: "Education", location: "Remote", type: "Contract" }
    ];

    return (
        <div style={{ background: '#FFFFFF' }}>
            <Navbar />

            {/* Hero */}
            <section style={{ padding: '140px 0 100px', background: 'var(--secondary)', color: 'white' }}>
                <div className="container">
                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h1 style={{ fontSize: '64px', fontWeight: 800, marginBottom: '24px', letterSpacing: '-2px', color: 'white' }}>
                            Help us build the <br /><span style={{ color: '#0066FF' }}>Classroom of Tomorrow</span>
                        </h1>
                        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '40px' }}>
                            We're a team of educators, engineers, and designers passionate about making elite education accessible to everyone.
                        </p>
                        <button className="btn btn-primary" style={{ padding: '16px 40px' }}>View Open Roles</button>
                    </div>
                </div>
            </section>

            {/* Perks */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '64px' }}>
                        <h2 style={{ fontSize: '36px' }}>Why EDUTrack Pro?</h2>
                    </div>
                    <div className="grid grid-3">
                        {[
                            { icon: <Zap size={32} />, title: "Hyper Growth", desc: "We're expanding rapidly. You'll have ownership and impact from day one." },
                            { icon: <Heart size={32} />, title: "Mission Driven", desc: "Work on products that literally change lives and career trajectories." },
                            { icon: <Coffee size={32} />, title: "Remote First", desc: "Work from anywhere in the world. We believe in results, not desks." }
                        ].map((perk, i) => (
                            <div key={i} style={{ padding: '40px', textAlign: 'center' }}>
                                <div style={{ color: '#0066FF', display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>{perk.icon}</div>
                                <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>{perk.title}</h3>
                                <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6 }}>{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jobs */}
            <section className="section" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div className="flex justify-between align-center" style={{ marginBottom: '40px' }}>
                            <h2 style={{ fontSize: '32px' }}>Open Positions</h2>
                            <div style={{ color: '#64748B', fontSize: '15px' }}>{jobs.length} roles available</div>
                        </div>

                        <div className="flex column gap-16">
                            {jobs.map((job, i) => (
                                <div key={i} className="card" style={{ padding: '24px 32px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="flex-mobile-column">
                                    <div className="flex column gap-8">
                                        <h3 style={{ fontSize: '20px' }}>{job.title}</h3>
                                        <div className="flex gap-24" style={{ color: '#64748B', fontSize: '14px', fontWeight: 500 }}>
                                            <span className="flex align-center gap-4"><Briefcase size={14} /> {job.team}</span>
                                            <span className="flex align-center gap-4"><MapPin size={14} /> {job.location}</span>
                                            <span className="flex align-center gap-4"><Clock size={14} /> {job.type}</span>
                                        </div>
                                    </div>
                                    <button className="btn btn-outline" style={{ padding: '10px 24px' }}>Apply Now <ArrowRight size={16} /></button>
                                </div>
                            ))}
                        </div>

                        <div className="text-center" style={{ marginTop: '60px' }}>
                            <p style={{ color: '#64748B', fontSize: '15px', marginBottom: '16px' }}>Don't see a role that fits?</p>
                            <button className="btn btn-ghost" style={{ fontWeight: 700, color: '#0066FF' }}>Send an Open Application</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
