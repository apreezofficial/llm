"use client";
import Link from 'next/link';

export default function CTA() {
    return (
        <section style={{ padding: '80px 0 100px', background: 'white' }}>
            <div className="container">
                <div className="animate-slide-up" style={{
                    background: 'linear-gradient(135deg, #005B52, #046B63)',
                    borderRadius: '40px',
                    padding: 'clamp(60px, 8vw, 100px) clamp(32px, 6vw, 80px)',
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative circles */}
                    <div style={{
                        position: 'absolute', top: '-80px', right: '-80px',
                        width: '300px', height: '300px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '50%', pointerEvents: 'none'
                    }}></div>
                    <div style={{
                        position: 'absolute', bottom: '-60px', left: '-60px',
                        width: '240px', height: '240px',
                        background: 'rgba(255,125,0,0.1)',
                        borderRadius: '50%', pointerEvents: 'none'
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{
                            background: 'rgba(255,125,0,0.2)',
                            color: '#FF7D00',
                            padding: '8px 20px',
                            borderRadius: '30px',
                            fontSize: '12px',
                            fontWeight: 900,
                            display: 'inline-block',
                            marginBottom: '32px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            Start for Free Today
                        </div>

                        <h2 style={{
                            color: 'white',
                            fontSize: 'clamp(32px, 5vw, 56px)',
                            fontWeight: 900,
                            marginBottom: '24px',
                            lineHeight: 1.1,
                            fontFamily: 'var(--font-heading)'
                        }}>
                            Ready to transform<br />
                            <span style={{ color: '#FF7D00' }}>your classroom?</span>
                        </h2>
                        <p style={{
                            color: 'rgba(255,255,255,0.75)',
                            fontSize: '18px',
                            maxWidth: '580px',
                            margin: '0 auto 48px',
                            lineHeight: 1.7
                        }}>
                            Join over 280,000 students and educators building the future of learning. No credit card. No commitments. Just results.
                        </p>

                        <div className="flex justify-center" style={{ gap: '16px', flexWrap: 'wrap' }}>
                            <Link href="/auth" className="btn" style={{
                                background: '#FF7D00',
                                color: 'white',
                                padding: '18px 44px',
                                borderRadius: '30px',
                                fontWeight: 800,
                                fontSize: '16px',
                                boxShadow: '0 8px 32px rgba(255,125,0,0.35)'
                            }}>
                                Get Started Free
                            </Link>
                            <Link href="/contact" className="btn" style={{
                                border: '1px solid rgba(255,255,255,0.3)',
                                color: 'white',
                                padding: '18px 44px',
                                borderRadius: '30px',
                                fontWeight: 700,
                                fontSize: '16px'
                            }}>
                                Talk to Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
