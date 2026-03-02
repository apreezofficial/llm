"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bookmark, Calendar, User, Search } from 'lucide-react';

export default function BlogPage() {
    const posts = [
        {
            title: "How AI is Bridging the Global Learning Gap",
            excerpt: "Discover how predictive analytics are helping students in remote regions achieve better outcomes than ever before.",
            author: "Dr. Elena Rossi",
            date: "May 12, 2024",
            img: "https://images.unsplash.com/photo-1501504905953-f87530c3c99a?auto=format&fit=crop&q=80&w=800",
            cat: "Innovation"
        },
        {
            title: "5 Strategies for Engaging Students in Virtual Classrooms",
            excerpt: "Learn how top educators are using gamification and breakout rooms to maintain 90%+ engagement rates.",
            author: "Mark Thompson",
            date: "May 10, 2024",
            img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
            cat: "Teaching Tips"
        },
        {
            title: "The Security of Online Education: What You Need to Know",
            excerpt: "Institutional data protection is more critical than ever. We break down the essentials of SOC2 and GDPR compliance.",
            author: "Sarah Chen",
            date: "May 8, 2024",
            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
            cat: "Security"
        }
    ];

    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            <section style={{ padding: '160px 0 60px' }}>
                <div className="container">
                    <div className="text-center animate-slide-up" style={{ maxWidth: '800px', margin: '0 auto 80px' }}>
                        <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, fontFamily: 'var(--font-orbitron)', marginBottom: '24px', lineHeight: 1.1 }}>Insights & <span style={{ color: '#FF7D00' }}>Edu-Tech</span></h1>
                        <p className="animate-fade delay-2" style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.6 }}>The latest trends in virtual learning, institutional management, and academic innovation.</p>
                    </div>

                    {/* Featured Post */}
                    <div className="card animate-slide-left" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--border)', borderRadius: '32px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', marginBottom: '80px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
                        <img src={posts[0].img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Featured" />
                        <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', marginBottom: '20px', display: 'block', fontFamily: 'var(--font-orbitron)' }}>Featured — {posts[0].cat}</span>
                            <h2 style={{ fontSize: '36px', marginBottom: '24px', fontFamily: 'var(--font-orbitron)', fontWeight: 800, lineHeight: 1.2 }}>{posts[0].title}</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.7, fontSize: '16px' }}>{posts[0].excerpt}</p>
                            <div className="flex align-center gap-24" style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 600 }}>
                                <span className="flex align-center gap-8"><User size={18} color="var(--primary)" /> {posts[0].author}</span>
                                <span className="flex align-center gap-8"><Calendar size={18} color="var(--primary)" /> {posts[0].date}</span>
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-3" style={{ gap: '32px' }}>
                        {posts.map((post, i) => (
                            <div key={i} className={`card animate-scale-in delay-${(i % 3) + 1}`} style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--border)', borderRadius: '24px', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                <img src={post.img} style={{ width: '100%', height: '220px', objectFit: 'cover' }} alt="Post" />
                                <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', display: 'block', fontFamily: 'var(--font-orbitron)' }}>{post.cat}</span>
                                    <h3 style={{ fontSize: '20px', marginBottom: '16px', fontFamily: 'var(--font-orbitron)', fontWeight: 700, lineHeight: 1.4 }}>{post.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>{post.excerpt}</p>
                                    <div className="flex align-center justify-between" style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                                        <span>{post.date}</span>
                                        <button className="flex align-center gap-4" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase' }}>Read Article <Bookmark size={14} /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
