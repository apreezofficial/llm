"use client";

const PlayCircleIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" />
    </svg>
);

const TrendingUpIcon = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
);

export default function Hero() {
    return (
        <section className="container section grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', display: 'grid' }}>
            <div className="animate-fade">
                <div className="badge-pill badge-blue" style={{ marginBottom: '24px' }}>
                    <span style={{ fontSize: '10px' }}>●</span> Trusted by 500+ Schools Worldwide
                </div>
                <h1 style={{ fontSize: '64px', lineHeight: '1.1', marginBottom: '24px' }}>
                    Empowering the <span style={{ color: 'var(--primary)' }}>Next Generation</span> of Learners.
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '500px' }}>
                    A unified platform for K-12 and Higher Ed virtual excellence. Real-time collaboration, grade-specific pathways, and AI-driven insights.
                </p>
                <div className="flex" style={{ gap: '16px', display: 'flex' }}>
                    <button className="btn btn-primary" style={{ padding: '16px 32px', borderRadius: '8px' }}>Start Learning Free</button>
                    <button className="btn btn-outline" style={{ padding: '16px 32px', borderRadius: '8px', display: 'flex', gap: '8px' }}>
                        Watch Demo <PlayCircleIcon />
                    </button>
                </div>
            </div>

            <div className="animate-fade" style={{ position: 'relative' }}>
                <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                        alt="Students collaborating"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>

                {/* Floating Card */}
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '-40px',
                    background: 'white',
                    padding: '16px 24px',
                    borderRadius: '16px',
                    boxShadow: 'var(--shadow-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <div style={{ background: '#DCFCE7', padding: '8px', borderRadius: '12px' }}>
                        <TrendingUpIcon size={24} color="#22C55E" />
                    </div>
                    <div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Quiz Participation</div>
                        <div style={{ fontWeight: 700, fontSize: '18px' }}>+42% Higher Engagement</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
