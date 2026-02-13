"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";
import { CheckCircle2, Video, Map, Award, BarChart3 } from 'lucide-react';

export default function FeaturesPage() {
    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
                padding: '160px 0 100px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container animate-fade">
                    <span className="section-tag">Capabilities</span>
                    <h1 className="hero-title" style={{ fontWeight: 800 }}>Powerful Features for <br /><span style={{ color: 'var(--primary)' }}>Deep Learning</span></h1>
                    <p className="section-subtitle">
                        Everything you need to deliver world-class education in a digital-first environment.
                    </p>
                    <div className="flex justify-center" style={{ gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}>
                        <button className="btn btn-primary" style={{ padding: '16px 32px' }}>Explore All Tools</button>
                        <button className="btn btn-outline" style={{ padding: '16px 32px' }}>View Case Studies</button>
                    </div>
                </div>
                <Wave />
            </section>

            {/* Detailed Features Grid */}
            <section className="container section">
                <div className="grid grid-2">
                    {[
                        { title: "Virtual Classroom 2.0", desc: "Interactive whiteboards, real-time polling, and automated attendance tracking.", icon: <Video size={24} /> },
                        { title: "AI Learning Assistant", desc: "Automated grading and personalized study recommendations for every student.", icon: <Map size={24} /> },
                        { title: "Gamified Progress", desc: "Unlockable achievements and peer leaderboards to boost engagement.", icon: <Award size={24} /> },
                        { title: "Advanced Analytics", desc: "Deep insights into student performance with predictive risk modeling.", icon: <BarChart3 size={24} /> }
                    ].map((feature, i) => (
                        <div key={i} className="card">
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
                                <li className="flex align-center" style={{ gap: '8px', fontSize: '14px', marginBottom: '8px', color: 'var(--text-main)' }}>
                                    <CheckCircle2 size={16} color="var(--primary)" /> Industry Leading Security
                                </li>
                                <li className="flex align-center" style={{ gap: '8px', fontSize: '14px', marginBottom: '8px', color: 'var(--text-main)' }}>
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

