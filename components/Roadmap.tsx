"use client";

const PlayIcon = ({ size = 24, fill = "none" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
);

const LockIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const steps = [
    {
        num: "1",
        title: "Initial Assessment",
        desc: "Identify strengths and learning gaps instantly."
    },
    {
        num: "2",
        title: "Curated Curriculum",
        desc: "AI-driven lesson plans that adapt to student pace."
    },
    {
        num: "3",
        title: "Certification",
        desc: "Recognized badges and materials for every milestone."
    }
];

export default function Roadmap() {
    return (
        <section className="container section grid" style={{ gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center', display: 'grid' }}>
            <div>
                <h2 className="section-title" style={{ fontSize: '40px' }}>A Roadmap to Success</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '16px' }}>
                    We don&apos;t just host classes; we build careers. Our platform automatically maps curriculum to future goals, helping students understand the &quot;why&quot; behind their learning.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {steps.map((step, i) => (
                        <div key={i} className="flex" style={{ gap: '20px', display: 'flex' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'var(--accent-blue)',
                                color: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                flexShrink: 0
                            }}>
                                {step.num}
                            </div>
                            <div>
                                <h4 style={{ fontSize: '18px', marginBottom: '4px' }}>{step.title}</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{
                background: 'white',
                borderRadius: '32px',
                padding: '40px',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border)'
            }}>
                <div className="flex justify-between align-center" style={{ marginBottom: '32px', display: 'flex' }}>
                    <div>
                        <h4 style={{ fontSize: '20px' }}>Learning Journey</h4>
                        <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Grade 10 - Advanced Physics</span>
                    </div>
                    <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '14px' }}>65% Complete</span>
                </div>

                <div style={{
                    background: 'var(--bg-soft)',
                    height: '200px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '24px',
                    position: 'relative'
                }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: '0 0 20px rgba(0, 102, 255, 0.4)'
                    }}>
                        <PlayIcon fill="white" size={24} />
                    </div>
                    <div style={{ width: '80px', height: '2px', background: 'var(--border)' }}></div>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border)'
                    }}>
                        <LockIcon size={20} />
                    </div>
                </div>

                <div style={{ marginTop: '32px' }}>
                    <div style={{ height: '8px', width: '100%', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: '65%', background: 'var(--primary)' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
