"use client";
import { CheckCircle2 } from 'lucide-react';

const steps = [
    {
        num: "01",
        title: "Baseline Assessment",
        desc: "Every learner starts with an AI-scored diagnostic that maps their current knowledge with precision — no guesswork, no wasted time."
    },
    {
        num: "02",
        title: "Personalised Curriculum",
        desc: "Our engine auto-generates a custom learning path that adapts weekly to pace, performance, and your learner's unique ambitions."
    },
    {
        num: "03",
        title: "Live Mentorship",
        desc: "Real sessions with world-class practitioners who review real work, give real feedback, and compress years of learning into months."
    },
    {
        num: "04",
        title: "Verified Certification",
        desc: "Earn credentials that hiring managers and institutions actually recognise. Our certificates are backed by real assessors, not just algorithms."
    }
];

export default function Roadmap() {
    return (
        <section style={{ padding: '120px 0', background: 'white' }}>
            <div className="container">
                <div className="grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
                    {/* Left: Steps */}
                    <div className="animate-slide-up">
                        <div style={{
                            background: '#FFF7ED',
                            color: '#FF7D00',
                            padding: '8px 20px',
                            borderRadius: '30px',
                            fontSize: '12px',
                            fontWeight: 900,
                            display: 'inline-block',
                            marginBottom: '28px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            How It Works
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(32px, 4vw, 48px)',
                            fontWeight: 900,
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--secondary)',
                            marginBottom: '20px',
                            lineHeight: 1.1
                        }}>
                            Your roadmap from<br />
                            <span style={{ color: '#FF7D00' }}>beginner to expert.</span>
                        </h2>
                        <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '56px', lineHeight: 1.7 }}>
                            We don&apos;t just host classes — we build careers. Every step is structured to accelerate real-world outcomes.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                            {steps.map((step, i) => (
                                <div key={i} className={`flex gap-24 animate-slide-up delay-${i + 1}`}>
                                    <div style={{
                                        minWidth: '52px',
                                        height: '52px',
                                        borderRadius: '16px',
                                        background: '#ECFDF5',
                                        color: '#005B52',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 900,
                                        fontSize: '13px',
                                        letterSpacing: '1px',
                                        fontFamily: 'var(--font-heading)'
                                    }}>
                                        {step.num}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: '#0F172A' }}>{step.title}</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6 }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Stats Card */}
                    <div className="animate-scale-in delay-2">
                        <div style={{
                            background: '#005B52',
                            borderRadius: '32px',
                            padding: '56px',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '-40px',
                                width: '160px',
                                height: '160px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '50%'
                            }}></div>
                            <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '40px', fontFamily: 'var(--font-heading)' }}>
                                Proven Results
                            </h3>
                            {[
                                { val: '94%', label: 'Course completion rate' },
                                { val: '3.2×', label: 'Faster skill acquisition' },
                                { val: '280k+', label: 'Certificates issued globally' },
                                { val: '98%', label: 'Employer acceptance rate' }
                            ].map((s, i) => (
                                <div key={i} style={{
                                    padding: '24px 0',
                                    borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span style={{ opacity: 0.7, fontSize: '15px' }}>{s.label}</span>
                                    <span style={{ fontSize: '28px', fontWeight: 900, color: '#FF7D00', fontFamily: 'var(--font-heading)' }}>{s.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
