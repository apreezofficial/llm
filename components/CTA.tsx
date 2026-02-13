"use client";
import { BookOpen } from 'lucide-react';

export default function CTA() {
    return (
        <section className="container" style={{ padding: '0 0 80px' }}>
            <div className="animate-fade" style={{
                background: 'var(--primary)',
                borderRadius: '32px',
                padding: '80px 24px',
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Decorative Icon */}
                <div className="mobile-hide" style={{
                    position: 'absolute',
                    right: '-60px',
                    top: '-60px',
                    opacity: 0.1,
                    transform: 'rotate(-20deg)',
                    pointerEvents: 'none',
                    color: 'white'
                }}>
                    <BookOpen size={300} />
                </div>

                <h2 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px', position: 'relative', lineHeight: 1.2 }}>
                    Ready to Transform Your Classroom?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px', position: 'relative' }}>
                    Join thousands of educators and students already building the future of learning on EduFlow.
                </p>

                <div className="flex justify-center" style={{ gap: '16px', position: 'relative', flexWrap: 'wrap' }}>
                    <button className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '16px 32px' }}>
                        Get Started for Free
                    </button>
                    <button className="btn" style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white', padding: '16px 32px' }}>
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
}

