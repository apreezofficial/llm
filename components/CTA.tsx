"use client";
import { BookOpen } from 'lucide-react';

export default function CTA() {
    return (
        <section className="container" style={{ padding: '40px 0 80px' }}>
            <div style={{
                background: 'var(--primary)',
                borderRadius: '32px',
                padding: '80px 40px',
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Decorative Icon */}
                <BookOpen size={400} style={{
                    position: 'absolute',
                    right: '-100px',
                    top: '-50px',
                    opacity: 0.1,
                    transform: 'rotate(-20deg)'
                }} />

                <h2 style={{ color: 'white', fontSize: '48px', marginBottom: '16px', position: 'relative' }}>
                    Ready to Transform Your Classroom?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px', position: 'relative' }}>
                    Join thousands of educators and students already building the future of learning on EduFlow.
                </p>

                <div className="flex justify-center" style={{ gap: '16px', position: 'relative' }}>
                    <button className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '16px 32px', borderRadius: '8px' }}>
                        Get Started for Free
                    </button>
                    <button className="btn" style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white', padding: '16px 32px', borderRadius: '8px' }}>
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
}
