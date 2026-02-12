"use client";
import { Video, Map, Award } from 'lucide-react';

const features = [
    {
        icon: <Video size={24} />,
        title: "Virtual Classrooms",
        desc: "Integrated HD video, interactive whiteboards, and breakout rooms designed specifically for education."
    },
    {
        icon: <Map size={24} />,
        title: "Grade-Specific Paths",
        desc: "Curated learning journeys tailored from Elementary to Higher Ed, ensuring age-appropriate engagement."
    },
    {
        icon: <Award size={24} />,
        title: "Achievement Badges",
        desc: "Motivate students through gamified rewards, milestone tracking, and competitive peer leaderboards."
    }
];

export default function Features() {
    return (
        <section id="features" className="container section">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span className="section-tag">The Platform</span>
                <h2 className="section-title">Built for Virtual Excellence</h2>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                {features.map((f, i) => (
                    <div key={i} style={{
                        padding: '40px',
                        background: 'var(--bg-soft)',
                        borderRadius: '24px',
                        transition: 'transform 0.2s ease',
                        cursor: 'pointer'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            background: 'var(--accent-blue)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary)',
                            marginBottom: '24px'
                        }}>
                            {f.icon}
                        </div>
                        <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{f.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6' }}>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
