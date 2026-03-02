"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
    const posts = [
        {
            title: "How AI is Personalizing K-12 Education in 2024",
            excerpt: "Learn how modern LMS platforms are leveraging machine learning to identify individual student learning gaps.",
            category: "Innovation",
            author: "Dr. Sarah Mitchell",
            date: "Mar 12, 2024",
            img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "5 Strategies for Increasing Student Engagement Online",
            excerpt: "Practical tips for teachers to maintain high participation rates in virtual classrooms.",
            category: "Teaching Tips",
            author: "James Wilson",
            date: "Mar 10, 2024",
            img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "The Future of Hybrid Learning Models",
            excerpt: "Why the blend of physical and digital environments is here to stay in higher education.",
            category: "EdTech Trends",
            author: "Elena Rodriguez",
            date: "Mar 05, 2024",
            img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div style={{ background: '#FFFFFF' }}>
            <Navbar />

            {/* Header */}
            <header style={{ padding: '120px 0 60px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                <div className="container">
                    <div className="flex justify-between align-center flex-mobile-column" style={{ gap: '32px' }}>
                        <div style={{ maxWidth: '600px' }}>
                            <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-1.5px' }}>Insights & Resources</h1>
                            <p style={{ fontSize: '18px', color: '#64748B' }}>Discover the latest trends in educational technology, teaching strategies, and platform updates.</p>
                        </div>
                        <div style={{ width: '100%', maxWidth: '400px', position: 'relative' }}>
                            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                style={{ width: '100%', padding: '16px 16px 16px 48px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '15px' }}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Post */}
            <section className="section">
                <div className="container">
                    <div className="card" style={{ padding: '0', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0' }} className="grid-2">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" alt="Featured" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ padding: '60px' }}>
                            <div style={{ color: '#0066FF', fontWeight: 700, textTransform: 'uppercase', fontSize: '12px', marginBottom: '16px', letterSpacing: '1px' }}>Featured Article</div>
                            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Scaling Educational Impact: A Global Case Study</h2>
                            <p style={{ fontSize: '16px', color: '#64748B', marginBottom: '32px', lineHeight: 1.6 }}>
                                We explored how 20 nations integrated EduTrack Pro into their national curriculum to solve rural education gaps. The results were astounding.
                            </p>
                            <div className="flex align-center gap-16" style={{ marginBottom: '32px' }}>
                                <img src="https://i.pravatar.cc/100?u=admin" style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '15px' }}>Marcus Thorne</div>
                                    <div style={{ fontSize: '13px', color: '#64748B' }}>Chief Product Officer</div>
                                </div>
                            </div>
                            <button className="btn btn-primary">Read Case Study <ArrowRight size={18} /></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="grid grid-3">
                        {posts.map((post, i) => (
                            <div key={i} className="card" style={{ padding: '0', overflow: 'hidden', background: 'white', border: '1px solid #E2E8F0' }}>
                                <img src={post.img} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '24px' }}>
                                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#0066FF', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.category}</span>
                                    <h3 style={{ fontSize: '20px', margin: '12px 0', lineHeight: 1.4 }}>{post.title}</h3>
                                    <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '24px', lineHeight: 1.5 }}>{post.excerpt}</p>
                                    <div className="flex align-center justify-between" style={{ paddingTop: '20px', borderTop: '1px solid #F1F5F9' }}>
                                        <div className="flex align-center gap-8" style={{ fontSize: '13px', color: '#64748B', fontWeight: 500 }}>
                                            <Calendar size={14} /> {post.date}
                                        </div>
                                        <div style={{ fontWeight: 700, fontSize: '13px', color: '#1E293B' }}>Read More</div>
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
