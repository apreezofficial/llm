"use client";
import Image from 'next/image';
import Wave from './Wave';
import { PlayCircle, TrendingUp } from 'lucide-react';

export default function Hero() {
    return (
        <section style={{
            background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
            position: 'relative',
            overflow: 'hidden',
            padding: '40px 0 0'
        }}>
            <div className="container section grid grid-2" style={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div className="animate-fade">
                    <div className="badge-pill badge-blue" style={{ marginBottom: '24px' }}>
                        <span style={{ fontSize: '10px' }}>●</span> Trusted by 500+ Schools Worldwide
                    </div>
                    <h1 className="hero-title">
                        Empowering the <span style={{ color: 'var(--primary)' }}>Next Generation</span> of Learners.
                    </h1>
                    <p className="section-subtitle" style={{ margin: '0 0 40px', fontSize: '18px' }}>
                        A unified platform for K-12 and Higher Ed virtual excellence. Real-time collaboration, grade-specific pathways, and AI-driven insights.
                    </p>
                    <div className="flex" style={{ gap: '16px', flexWrap: 'wrap' }}>
                        <button className="btn btn-primary" style={{ padding: '16px 32px', borderRadius: '8px' }}>Start Learning Free</button>
                        <button className="btn btn-outline" style={{ padding: '16px 32px', borderRadius: '8px' }}>
                            Watch Demo <PlayCircle size={20} />
                        </button>
                    </div>
                </div>

                <div className="animate-fade relative" style={{ perspective: '1000px' }}>
                    <div style={{
                        borderRadius: '32px',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-xl)',
                        position: 'relative',
                        height: '450px',
                        transform: 'rotateY(-5deg) rotateX(2deg)',
                        border: '8px solid white'
                    }}>
                        <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                            alt="Students collaborating"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>

                    {/* Floating Card - Mobile Hide for cleaner mobile UI if needed, or just adjust */}
                    <div className="mobile-hide" style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '-40px',
                        background: 'white',
                        padding: '20px 24px',
                        borderRadius: '20px',
                        boxShadow: 'var(--shadow-xl)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        zIndex: 2,
                        border: '1px solid var(--border)'
                    }}>
                        <div style={{ background: '#DCFCE7', padding: '10px', borderRadius: '12px', color: '#16A34A' }}>
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500 }}>Quiz Participation</div>
                            <div style={{ fontWeight: 700, fontSize: '18px' }}>+42% Engagement</div>
                        </div>
                    </div>
                </div>
            </div>
            <Wave />
        </section>
    );
}

