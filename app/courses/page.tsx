"use client";
import AppLayout from "@/components/AppLayout";
import { Search, Filter, Star, Clock, Users, Play } from "lucide-react";

export default function Courses() {
    const courses = [
        { id: 1, title: 'Full-Stack Web Architect', category: 'Development', rating: 4.8, students: '12k', lessons: 48, duration: '24h', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80', price: '$89' },
        { id: 2, title: 'Neural Network Systems', category: 'Data Science', rating: 4.9, students: '8k', lessons: 32, duration: '18h', img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80', price: '$99' },
        { id: 3, title: 'Digital Growth Hacking', category: 'Marketing', rating: 4.7, students: '15k', lessons: 56, duration: '30h', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', price: '$79' },
        { id: 4, title: 'SwiftUI Advanced Labs', category: 'Mobile', rating: 4.6, students: '5k', lessons: 42, duration: '20h', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80', price: '$95' },
        { id: 5, title: 'Security Infrastructure', category: 'IT & Software', rating: 4.9, students: '10k', lessons: 38, duration: '15h', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80', price: '$109' },
        { id: 6, title: 'Quantum Leadership Strategy', category: 'Business', rating: 4.8, students: '20k', lessons: 24, duration: '12h', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80', price: '$129' },
    ];

    const categories = ['All Collections', 'Development', 'Design', 'Marketing', 'Business', 'Data Science', 'Mobile'];

    return (
        <AppLayout>
            <div className="flex align-center justify-between" style={{ marginBottom: '48px' }}>
                <div className="animate-slide-up">
                    <h1 style={{
                        fontSize: 'clamp(28px, 4vw, 36px)',
                        fontWeight: 950,
                        fontFamily: 'var(--font-heading)',
                        color: '#0F172A',
                        letterSpacing: '-1.5px',
                        marginBottom: '8px'
                    }}>
                        Course <span style={{ color: '#FF7D00' }}>Catalog</span>
                    </h1>
                    <p style={{ color: '#64748B', fontSize: '16px', fontWeight: 500 }}>Unleash your potential with our elite collection of curated knowledge.</p>
                </div>
                <div className="flex gap-16 animate-slide-up delay-1">
                    <button className="hover-scale" style={{
                        padding: '12px 24px',
                        borderRadius: '16px',
                        background: 'white',
                        border: '1px solid #E2E8F0',
                        color: '#0F172A',
                        fontWeight: 800,
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}><Filter size={18} /> Advanced Filters</button>
                    <button className="hover-scale" style={{
                        padding: '12px 24px',
                        borderRadius: '16px',
                        background: '#0F172A',
                        border: 'none',
                        color: 'white',
                        fontWeight: 800,
                        fontSize: '14px'
                    }}>My Subscriptions</button>
                </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-12 animate-slide-up delay-2" style={{ marginBottom: '48px', overflowX: 'auto', paddingBottom: '12px', maskImage: 'linear-gradient(to right, black 80%, transparent 100%)' }}>
                {categories.map((cat, i) => (
                    <button key={i} className="hover-scale" style={{
                        padding: '12px 24px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: 800,
                        whiteSpace: 'nowrap',
                        background: i === 0 ? '#0F172A' : 'white',
                        color: i === 0 ? 'white' : '#64748B',
                        border: i === 0 ? 'none' : '1px solid #E2E8F0',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: i === 0 ? '0 10px 20px rgba(15,23,42,0.15)' : 'none'
                    }}>
                        {cat}
                    </button>
                ))}
            </div>

            {/* Courses Grid */}
            <div className="grid-3">
                {courses.map((course, idx) => (
                    <div key={course.id} className={`glass-card animate-scale-in delay-${(idx % 3) + 1}`} style={{
                        padding: 0,
                        overflow: 'hidden',
                        borderRadius: '28px',
                        border: '1px solid #F1F5F9'
                    }}>
                        <div style={{ position: 'relative', overflow: 'hidden' }}>
                            <img
                                src={course.img}
                                alt={course.title}
                                className="img-hover"
                                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                                <span style={{
                                    background: 'rgba(255,255,255,0.9)',
                                    backdropFilter: 'blur(10px)',
                                    color: '#0F172A',
                                    padding: '8px 16px',
                                    borderRadius: '14px',
                                    fontSize: '11px',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>{course.category}</span>
                            </div>
                            <div style={{
                                position: 'absolute',
                                bottom: '16px',
                                right: '16px',
                                background: 'white',
                                padding: '8px 12px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}>
                                <Star size={14} fill="#FF7D00" color="#FF7D00" />
                                <span style={{ fontSize: '13px', fontWeight: 900, color: '#0F172A' }}>{course.rating}</span>
                            </div>
                        </div>
                        <div style={{ padding: '32px' }}>
                            <h3 style={{
                                fontSize: '20px',
                                marginBottom: '16px',
                                fontWeight: 900,
                                lineHeight: 1.3,
                                fontFamily: 'var(--font-heading)',
                                color: '#0F172A'
                            }}>{course.title}</h3>

                            <div className="flex align-center gap-16" style={{ marginBottom: '32px', color: '#64748B', fontSize: '13px', fontWeight: 600 }}>
                                <div className="flex align-center gap-8"><Play size={16} color="#FF7D00" /> {course.lessons} Units</div>
                                <div className="flex align-center gap-8"><Clock size={16} color="#FF7D00" /> {course.duration}</div>
                            </div>

                            <div className="flex align-center justify-between" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '24px' }}>
                                <div>
                                    <p style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Access Price</p>
                                    <span style={{ fontSize: '24px', fontWeight: 950, color: '#0F172A' }}>{course.price}</span>
                                </div>
                                <button className="hover-scale" style={{
                                    padding: '14px 28px',
                                    borderRadius: '18px',
                                    background: '#FF7D00',
                                    color: 'white',
                                    fontWeight: 900,
                                    fontSize: '14px',
                                    border: 'none',
                                    boxShadow: '0 8px 16px rgba(255,125,0,0.2)'
                                }}>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}

