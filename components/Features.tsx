"use client";

const VideoIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
);

const MapIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" x2="9" y1="3" y2="18" /><line x1="15" x2="15" y1="6" y2="21" />
    </svg>
);

const AwardIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
);

const features = [
    {
        icon: <VideoIcon />,
        title: "Virtual Classrooms",
        desc: "Integrated HD video, interactive whiteboards, and breakout rooms designed specifically for education."
    },
    {
        icon: <MapIcon />,
        title: "Grade-Specific Paths",
        desc: "Curated learning journeys tailored from Elementary to Higher Ed, ensuring age-appropriate engagement."
    },
    {
        icon: <AwardIcon />,
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

            <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', display: 'grid' }}>
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
