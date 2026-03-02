"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Hero() {
    return (
        <section style={{
            background: '#046B63',
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            paddingTop: '90px'
        }}>
            {/* Grid Pattern */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '40px 40px', pointerEvents: 'none'
            }}></div>

            {/* Side Social Bar — desktop only */}
            <div className="mobile-hide" style={{
                position: 'absolute', left: '12px', top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex', flexDirection: 'column', gap: '60px', zIndex: 10
            }}>
                {[
                    { icon: <Facebook size={15} /> },
                    { icon: <Linkedin size={15} /> },
                    { icon: <Twitter size={15} /> }
                ].map((p, i) => (
                    <div key={i} style={{ color: 'rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'color 0.2s' }}>
                        {p.icon}
                    </div>
                ))}
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                {/* 2-col on desktop, 1-col on mobile via CSS classes */}
                <div className="hero-grid">
                    {/* ── Left: Text ── */}
                    <div className="animate-slide-up hero-text">
                        <div style={{
                            background: '#FF7D00',
                            padding: '5px 14px',
                            borderRadius: '30px',
                            fontSize: '10px',
                            fontWeight: 900,
                            display: 'inline-block',
                            marginBottom: '24px',
                            boxShadow: '0 4px 12px rgba(255,125,0,0.3)',
                            fontFamily: 'var(--font-heading)',
                            color: 'white',
                            textTransform: 'uppercase',
                            letterSpacing: '1.5px',
                            whiteSpace: 'nowrap'
                        }}>
                            The Most Advanced Learning Ecosystem
                        </div>

                        <h1 className="animate-slide-up delay-1" style={{
                            fontSize: 'clamp(38px, 5vw, 72px)',
                            lineHeight: 1.05,
                            fontWeight: 900,
                            marginBottom: '20px',
                            color: 'white',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            Master New <span style={{ color: '#FF7D00' }}>Skills</span><br />
                            Expand Your <span style={{ color: '#FF7D00' }}>World</span>.
                        </h1>

                        <p className="animate-slide-up delay-2" style={{
                            fontSize: 'clamp(15px, 1.8vw, 18px)',
                            color: 'rgba(255,255,255,0.8)',
                            maxWidth: '480px',
                            lineHeight: 1.7,
                            marginBottom: '36px'
                        }}>
                            Empowering institutions and individuals with world-class virtual classroom tools, AI-powered analytics, and enterprise-grade security.
                        </p>

                        <div className="animate-slide-up delay-3 flex" style={{ gap: '14px', flexWrap: 'wrap' }}>
                            <Link href="/auth" className="btn btn-primary" style={{
                                padding: '14px 32px', borderRadius: '30px',
                                fontWeight: 800, fontSize: '15px'
                            }}>
                                Start Learning Now
                            </Link>
                            <Link href="/features" className="btn" style={{
                                padding: '14px 32px', borderRadius: '30px',
                                fontWeight: 700, fontSize: '15px',
                                color: 'white', border: '1px solid rgba(255,255,255,0.3)'
                            }}>
                                Explore Features
                            </Link>
                        </div>

                        {/* Mobile enrollment pill */}
                        <div className="desktop-hide animate-slide-up delay-4" style={{ marginTop: '32px' }}>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
                                borderRadius: '40px', padding: '10px 20px',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}>
                                <div style={{ display: 'flex' }}>
                                    {[1, 2, 3].map(i => (
                                        <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1px solid white', marginLeft: i > 1 ? '-5px' : '0' }} alt="User" />
                                    ))}
                                </div>
                                <span style={{ fontSize: '12px', fontWeight: 700, color: 'white' }}>280k+ learners enrolled</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Right: Image ── desktop only */}
                    <div className="animate-scale-in delay-2 mobile-hide hero-image-col">
                        <div style={{ position: 'relative', width: '100%', height: '560px' }}>
                            <Image
                                src="https://demo.blockskit.com/education-pro-2/wp-content/uploads/sites/75/2024/02/banner-image2.png"
                                alt="Student"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
                                priority
                            />

                            {/* Widget: Completion Rate */}
                            <div className="animate-scale-in delay-4" style={{
                                position: 'absolute', top: '60px', right: '-10px',
                                background: 'white', borderRadius: '20px', padding: '18px',
                                color: '#005B52', boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                                zIndex: 5, textAlign: 'center', width: '155px'
                            }}>
                                <div style={{ position: 'relative', width: '72px', height: '72px', margin: '0 auto 8px' }}>
                                    <svg width="72" height="72" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" stroke="#F1F1F1" strokeWidth="10" fill="none" />
                                        <circle cx="50" cy="50" r="40" stroke="#FF7D00" strokeWidth="10" fill="none" strokeDasharray="180 251.2" strokeLinecap="round" />
                                    </svg>
                                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '14px', color: '#005B52' }}>87.6%</div>
                                </div>
                                <div style={{ fontSize: '11px', fontWeight: 600, color: '#666', lineHeight: 1.3 }}>Completion rate</div>
                            </div>

                            {/* Widget: Enrollments */}
                            <div className="animate-scale-in delay-5" style={{
                                position: 'absolute', bottom: '80px', left: '10px',
                                background: 'white', borderRadius: '20px', padding: '14px 18px',
                                display: 'flex', flexDirection: 'column', gap: '8px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.15)', zIndex: 5
                            }}>
                                <div style={{ fontSize: '13px', fontWeight: 700, color: '#333' }}>280k+ Learners</div>
                                <div style={{ display: 'flex' }}>
                                    {[1, 2, 3, 4].map(i => (
                                        <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} style={{ width: '26px', height: '26px', borderRadius: '50%', border: '2px solid white', marginLeft: i > 1 ? '-7px' : '0' }} alt="User" />
                                    ))}
                                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#FF7D00', border: '2px solid white', marginLeft: '-7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'white', fontWeight: 700 }}>+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    align-items: center;
                    min-height: calc(100vh - 90px);
                    padding: 60px 0;
                }
                .hero-text {
                    padding-bottom: 0;
                }
                @media (max-width: 900px) {
                    .hero-grid {
                        grid-template-columns: 1fr;
                        text-align: center;
                        padding: 48px 0 60px;
                        min-height: auto;
                    }
                    .hero-image-col {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
}
