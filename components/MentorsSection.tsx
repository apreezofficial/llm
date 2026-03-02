"use client";
import React from 'react';

export default function MentorsSection() {
    return (
        <section style={{ padding: '120px 0', background: 'white' }}>
            <div className="container animate-slide-up">
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <div className="animate-slide-up" style={{
                        background: '#FFF7ED',
                        padding: '8px 20px',
                        borderRadius: '30px',
                        fontSize: '12px',
                        fontWeight: 900,
                        display: 'inline-block',
                        marginBottom: '32px',
                        color: '#FF7D00',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        Global Experts
                    </div>

                    <h2 className="animate-slide-up delay-1" style={{
                        fontSize: 'clamp(32px, 5vw, 56px)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: '32px',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--secondary)'
                    }}>
                        Bridge the gap between <span style={{ color: '#FF7D00' }}>Theory</span> and <span style={{ color: '#005B52' }}>Practice</span>.
                    </h2>

                    <p className="animate-slide-up delay-2" style={{
                        fontSize: '20px',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                        marginBottom: '64px',
                        maxWidth: '750px',
                        margin: '0 auto 64px'
                    }}>
                        LMSZONE brings you the world&apos;s most successful practitioners. Learn the frameworks, mental models, and technical skills used by innovators at the top of their fields.
                    </p>

                    <div className="animate-slide-up delay-3 grid grid-3" style={{ gap: '24px' }}>
                        {[
                            { name: "Dr. Sarah Jenkins", role: "AI Research Lead at Google", img: "https://i.pravatar.cc/150?u=1" },
                            { name: "Marcus Thorne", role: "Senior Design Architect", img: "https://i.pravatar.cc/150?u=2" },
                            { name: "Elena Rossi", role: "Full-stack Developer", img: "https://i.pravatar.cc/150?u=3" }
                        ].map((m, i) => (
                            <div key={i} className="card" style={{ padding: '32px', textAlign: 'center', background: '#F8FAFC', border: '1px solid var(--border)' }}>
                                <img src={m.img} style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '20px', border: '4px solid white', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} alt={m.name} />
                                <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '4px' }}>{m.name}</h4>
                                <div style={{ fontSize: '13px', color: '#FF7D00', fontWeight: 700 }}>{m.role}</div>
                            </div>
                        ))}
                    </div>

                    <div className="animate-slide-up delay-4" style={{ marginTop: '64px' }}>
                        <button className="btn btn-primary" style={{ padding: '14px 40px', borderRadius: '30px' }}>Apply to Mentor</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
