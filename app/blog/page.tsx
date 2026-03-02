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
                    <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto 80px' }}>
                        <h1 style={{ fontSize: '56px', fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: '24px' }}>Insights & <span style={{ color: '#FF7D00' }}>Edu-Tech</span></h1>
                        <p style={{ fontSize: '18px', color: 'var(--text-muted)' }}>The latest trends in virtual learning, institutional management, and academic innovation.</p>
                    </div>

                    {/* Featured Post */}
                    <div className="card" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1.2fr 1fr', marginBottom: '80px' }}>
                        <img src={posts[0].img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Featured" />
                        <div style={{ padding: '60px' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', marginBottom: '16px', display: 'block' }}>{posts[0].cat}</span>
                            <h2 style={{ fontSize: '32px', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>{posts[0].title}</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.7 }}>{posts[0].excerpt}</p>
                            <div className="flex align-center gap-16" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                                <span className="flex align-center gap-8"><User size={16} /> {posts[0].author}</span>
                                <span className="flex align-center gap-8"><Calendar size={16} /> {posts[0].date}</span>
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-3" style={{ gap: '32px' }}>
                        {posts.slice(1).concat(posts).map((post, i) => (
                            <div key={i} className="card" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                                <img src={post.img} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="Post" />
                                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '11px', textTransform: 'uppercase', marginBottom: '12px', display: 'block' }}>{post.cat}</span>
                                    <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>{post.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>{post.excerpt}</p>
                                    <div className="flex align-center justify-between" style={{ fontSize: '12px', color: 'var(--text-muted)', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                                        <span>{post.date}</span>
                                        <button style={{ color: 'var(--primary)', fontWeight: 700 }}>Read More</button>
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
