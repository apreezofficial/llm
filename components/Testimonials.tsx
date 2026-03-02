"use client";
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        stars: 5,
        quote: "LMSZONE completely transformed how I study. The AI adapts to my pace so well that I finished a 6-month course in 8 weeks — without feeling overwhelmed.",
        name: "Leo Martinez",
        role: "Computer Science Student",
        institution: "University of Lagos",
        avatar: "https://i.pravatar.cc/150?u=leo"
    },
    {
        stars: 5,
        quote: "As a department head, the analytics dashboard is invaluable. I can see exactly where each student is struggling and intervene before it becomes a crisis.",
        name: "Dr. Sarah Jenkins",
        role: "Dept. Head, Physics",
        institution: "Kings College London",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        stars: 5,
        quote: "I've used four different LMS platforms in my career. LMSZONE is the first one my students never complained about. The UX is simply on another level.",
        name: "Marcus Thorne",
        role: "Lead Instructor",
        institution: "Codecademy for Institutions",
        avatar: "https://i.pravatar.cc/150?u=robert"
    }
];

export default function Testimonials() {
    return (
        <section style={{ padding: '120px 0', background: '#0F172A', color: 'white', overflow: 'hidden' }}>
            <div className="container">
                <div className="text-center animate-slide-up" style={{ marginBottom: '80px' }}>
                    <div style={{
                        background: 'rgba(255,125,0,0.15)',
                        color: '#FF7D00',
                        padding: '8px 20px',
                        borderRadius: '30px',
                        fontSize: '12px',
                        fontWeight: 900,
                        display: 'inline-block',
                        marginBottom: '24px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        Social Proof
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        fontWeight: 900,
                        fontFamily: 'var(--font-heading)',
                        color: 'white',
                        marginBottom: '16px'
                    }}>
                        Thousands of success stories.<br />
                        <span style={{ color: '#FF7D00' }}>This is just the beginning.</span>
                    </h2>
                </div>

                <div className="grid grid-3" style={{ gap: '24px' }}>
                    {testimonials.map((t, i) => (
                        <div key={i} className={`animate-slide-up delay-${i + 1}`} style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '24px',
                            padding: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            transition: 'all 0.3s ease'
                        }}>
                            <div style={{ color: '#FF7D00', opacity: 0.5 }}>
                                <Quote size={32} />
                            </div>
                            <div className="flex" style={{ gap: '4px' }}>
                                {[...Array(t.stars)].map((_, idx) => (
                                    <Star key={idx} size={16} fill="#FF7D00" color="#FF7D00" />
                                ))}
                            </div>
                            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', flex: 1 }}>
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="flex align-center" style={{ gap: '16px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #FF7D00' }}
                                />
                                <div>
                                    <div style={{ fontWeight: 800, fontSize: '15px', color: 'white' }}>{t.name}</div>
                                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{t.role} · {t.institution}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
