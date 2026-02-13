"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";
import { CheckCircle2 } from 'lucide-react';

const icons = {
    Video: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
        </svg>
    ),
    Map: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" x2="9" y1="3" y2="18" /><line x1="15" x2="15" y1="6" y2="21" />
        </svg>
    ),
    Award: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
    )
};

export default function FeaturesPage() {
    return (
        <main style={{ paddingTop: '72px' }}>
            <Navbar />

            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
                padding: '120px 0 160px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container animate-fade">
                    <span className="section-tag" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>Capabilities</span>
                    <h1 style={{ fontSize: '64px', marginBottom: '24px', fontWeight: 800 }}>Powerful Features for <br /><span style={{ color: 'var(--primary)' }}>Deep Learning</span></h1>
                    <p style={{ fontSize: '20px', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 40px' }}>
                        Everything you need to deliver world-class education in a digital-first environment.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <button className="btn btn-primary" style={{ padding: '16px 32px' }}>Explore All Tools</button>
                        <button className="btn btn-outline" style={{ padding: '16px 32px' }}>View Case Studies</button>
                    </div>
                </div>
                <Wave />
            </section>

            {/* Detailed Features Grid */}
            <section className="container section">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
                    {[
                        { title: "Virtual Classroom 2.0", desc: "Interactive whiteboards, real-time polling, and automated attendance tracking.", icon: <icons.Video /> },
                        { title: "AI Learning Assistant", desc: "Automated grading and personalized study recommendations for every student.", icon: <icons.Map /> },
                        { title: "Gamified Progress", desc: "Unlockable achievements and peer leaderboards to boost engagement.", icon: <icons.Award /> },
                        { title: "Advanced Analytics", desc: "Deep insights into student performance with predictive risk modeling.", icon: <icons.Award /> }
                    ].map((feature, i) => (
                        <div key={i} style={{
                            padding: '48px',
                            borderRadius: '32px',
                            background: 'var(--bg-soft)',
                            border: '1px solid var(--border)',
                            transition: 'all 0.3s ease'
                        }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                background: 'white',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                marginBottom: '24px',
                                boxShadow: 'var(--shadow)'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>{feature.desc}</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li className="flex align-center" style={{ gap: '8px', fontSize: '14px', marginBottom: '8px', color: 'var(--text-main)', display: 'flex' }}>
                                    <CheckCircle2 size={16} color="var(--primary)" /> Industry Leading Security
                                </li>
                                <li className="flex align-center" style={{ gap: '8px', fontSize: '14px', marginBottom: '8px', color: 'var(--text-main)', display: 'flex' }}>
                                    <CheckCircle2 size={16} color="var(--primary)" /> Real-time Syncing
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
