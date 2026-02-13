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
            <div className="text-center" style={{ marginBottom: '60px' }}>
                <span className="section-tag">The Platform</span>
                <h2 className="section-title">Built for Virtual Excellence</h2>
            </div>

            <div className="grid grid-3">
                {features.map((f, i) => (
                    <div key={i} className="card">
                        <div style={{
                            width: '56px',
                            height: '56px',
                            background: 'var(--accent-blue)',
                            borderRadius: '16px',
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

