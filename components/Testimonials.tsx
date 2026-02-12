"use client";
import Image from 'next/image';

const StarIcon = ({ size = 16, fill = "currentColor", color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

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
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 className="section-title">What Our Students Say</h2>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', display: 'grid' }}>
                {testimonials.map((t, i) => (
                    <div key={i} style={{
                        padding: '32px',
                        background: 'var(--bg-soft)',
                        borderRadius: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <div className="flex" style={{ gap: '4px', marginBottom: '16px', display: 'flex' }}>
                                {[...Array(t.stars)].map((_, idx) => (
                                    <StarIcon key={idx} size={16} fill="#FFB800" color="#FFB800" />
                                ))}
                            </div>
                            <p style={{ fontStyle: 'italic', color: 'var(--text-main)', marginBottom: '24px', fontSize: '15px', lineHeight: '1.6' }}>
                                &quot;{t.quote}&quot;
                            </p>
                        </div>
                        <div className="flex align-center" style={{ gap: '12px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                                <Image src={t.avatar} alt={t.name} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '14px' }}>{t.name}</div>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
