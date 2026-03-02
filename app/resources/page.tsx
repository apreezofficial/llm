"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Video, FileText, Download, ExternalLink } from 'lucide-react';

const resources = [
    { icon: <BookOpen size={28} />, type: "Guide", title: "The Ultimate LMS Buyer's Guide", desc: "What every institution should evaluate before choosing a learning management system.", tag: "Free PDF" },
    { icon: <Video size={28} />, type: "Webinar", title: "Designing for Engagement in Virtual Classrooms", desc: "A 45-minute masterclass with Dr. Sarah Jenkins on holding attention in digital-first environments.", tag: "On-Demand" },
    { icon: <FileText size={28} />, type: "Case Study", title: "How Kings College Increased Pass Rates by 31%", desc: "A detailed breakdown of how one institution leveraged AI analytics to transform learner outcomes.", tag: "Case Study" },
    { icon: <Download size={28} />, type: "Template", title: "Institutional Onboarding Checklist", desc: "A step-by-step checklist to help new administrators get their school live in under 72 hours.", tag: "Free Download" },
    { icon: <FileText size={28} />, type: "Whitepaper", title: "Security in Modern LMS Platforms", desc: "A technical deep-dive into SOC2, FERPA, and GDPR compliance for educational institutions.", tag: "Whitepaper" },
    { icon: <Video size={28} />, type: "Tutorial", title: "Building Your First Course in 30 Minutes", desc: "A hands-on video walkthrough of LMSZONE's course builder — from blank canvas to live lesson.", tag: "Video" }
];

export default function ResourcesPage() {
    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            <section style={{ padding: '160px 0 80px', background: '#F8FAFC', textAlign: 'center' }}>
                <div className="container animate-slide-up" style={{ maxWidth: '800px' }}>
                    <div style={{ background: '#ECFDF5', color: '#005B52', padding: '8px 20px', borderRadius: '30px', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', display: 'inline-block', marginBottom: '28px', fontFamily: 'var(--font-heading)' }}>Resource Library</div>
                    <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--secondary)', marginBottom: '24px' }}>
                        Learn smarter with our <span style={{ color: '#FF7D00' }}>free resources.</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                        Guides, webinars, templates, and case studies curated for educators, administrators, and learners.
                    </p>
                </div>
            </section>

            <section style={{ padding: '80px 0 120px' }}>
                <div className="container">
                    <div className="grid grid-3" style={{ gap: '28px' }}>
                        {resources.map((r, i) => (
                            <div key={i} className={`card animate-slide-up delay-${Math.min(i + 1, 5)}`} style={{ padding: '40px 32px', background: 'white', border: '1px solid var(--border)', borderRadius: '24px', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                                    <div style={{ color: '#FF7D00' }}>{r.icon}</div>
                                    <span style={{ background: '#FFF7ED', color: '#FF7D00', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>{r.tag}</span>
                                </div>
                                <div style={{ fontSize: '12px', color: '#005B52', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>{r.type}</div>
                                <h3 style={{ fontSize: '19px', fontWeight: 800, marginBottom: '14px', lineHeight: 1.4, flex: 1 }}>{r.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, marginBottom: '28px' }}>{r.desc}</p>
                                <button className="btn btn-outline" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                    Access Resource <ExternalLink size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
