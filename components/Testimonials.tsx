"use client";
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
    {
        stars: 5,
        quote: "EduFlow made remote learning feel like being in the actual classroom. I love the achievement badges!",
        name: "Leo Martinez",
        role: "K-12 Student, Sophomore",
        avatar: "https://i.pravatar.cc/150?u=leo"
    },
    {
        stars: 5,
        quote: "As a university student, the career-mapped pathways helped me choose the right electives for my future job.",
        name: "Sarah Jenkins",
        role: "University Senior",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        stars: 5,
        quote: "Teaching via EduFlow has doubled my student engagement levels. The whiteboard tools are exceptional.",
        name: "Dr. Robert Chen",
        role: "Computer Science Dept.",
        avatar: "https://i.pravatar.cc/150?u=robert"
    }
];

export default function Testimonials() {
    return (
        <section className="container section">
            <div className="text-center" style={{ marginBottom: '60px' }}>
                <h2 className="section-title">What Our Students Say</h2>
                <p className="section-subtitle">Real feedback from real users transforming their learning experience.</p>
            </div>

            <div className="grid grid-3">
                {testimonials.map((t, i) => (
                    <div key={i} className="card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <div className="flex" style={{ gap: '4px', marginBottom: '16px' }}>
                                {[...Array(t.stars)].map((_, idx) => (
                                    <Star key={idx} size={16} fill="#FFB800" color="#FFB800" />
                                ))}
                            </div>
                            <p style={{ fontStyle: 'italic', color: 'var(--text-main)', marginBottom: '24px', fontSize: '15px', lineHeight: '1.6' }}>
                                &quot;{t.quote}&quot;
                            </p>
                        </div>
                        <div className="flex align-center" style={{ gap: '12px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', position: 'relative', border: '2px solid white', boxShadow: 'var(--shadow)' }}>
                                <Image src={t.avatar} alt={t.name} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--secondary)' }}>{t.name}</div>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

