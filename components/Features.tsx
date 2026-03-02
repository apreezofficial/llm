"use client";
import { Video, BarChart3, Shield, Users, Zap, Globe } from 'lucide-react';

const features = [
    {
        icon: <Video size={28} />,
        title: "Live Virtual Classrooms",
        desc: "HD video sessions with interactive whiteboards, breakout rooms, and real-time co-annotation — purpose-built for education.",
        color: "#005B52",
        bg: "#ECFDF5"
    },
    {
        icon: <BarChart3 size={28} />,
        title: "AI-Powered Analytics",
        desc: "Predictive dashboards that surface learning gaps before they become exam-day surprises. Act on data, not guesswork.",
        color: "#FF7D00",
        bg: "#FFF7ED"
    },
    {
        icon: <Shield size={28} />,
        title: "Enterprise Security",
        desc: "SOC2 compliant, GDPR and FERPA ready. Your institution's data is encrypted, audited, and always under your control.",
        color: "#005B52",
        bg: "#ECFDF5"
    },
    {
        icon: <Users size={28} />,
        title: "Community Learning",
        desc: "Peer-to-peer study groups, moderated forums, and expert mentorship circles that extend learning beyond class hours.",
        color: "#FF7D00",
        bg: "#FFF7ED"
    },
    {
        icon: <Zap size={28} />,
        title: "Adaptive Assessments",
        desc: "AI-generated quizzes that adjust in real time to student performance, ensuring every test is both fair and challenging.",
        color: "#005B52",
        bg: "#ECFDF5"
    },
    {
        icon: <Globe size={28} />,
        title: "Global Accessibility",
        desc: "Localised in 40+ languages with offline mode support. Great learning has no bandwidth or geographic limits.",
        color: "#FF7D00",
        bg: "#FFF7ED"
    }
];

export default function Features() {
    return (
        <section id="features" style={{ padding: '120px 0', background: '#F8FAFC' }}>
            <div className="container">
                <div className="text-center animate-slide-up" style={{ marginBottom: '80px' }}>
                    <div style={{
                        background: '#ECFDF5',
                        color: '#005B52',
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
                        The Platform
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(32px, 5vw, 52px)',
                        fontWeight: 900,
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--secondary)',
                        marginBottom: '20px'
                    }}>
                        Everything your institution needs.<br />
                        <span style={{ color: '#FF7D00' }}>In one place.</span>
                    </h2>
                    <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        A complete virtual learning infrastructure — no integrations, no plugins, no compromises.
                    </p>
                </div>

                <div className="grid grid-3" style={{ gap: '24px' }}>
                    {features.map((f, i) => (
                        <div key={i} className={`card animate-slide-up delay-${Math.min(i + 1, 5)}`} style={{
                            padding: '40px 32px',
                            background: 'white',
                            border: '1px solid var(--border)',
                            borderRadius: '24px',
                            transition: 'all 0.3s ease'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: f.bg,
                                borderRadius: '18px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: f.color,
                                marginBottom: '28px'
                            }}>
                                {f.icon}
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: '#0F172A' }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7' }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
