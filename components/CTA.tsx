"use client";

const BookOpenIcon = ({ size = 24, style = {} }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
);

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
                <BookOpenIcon size={400} style={{
                    position: 'absolute',
                    right: '-100px',
                    top: '-50px',
                    opacity: 0.1,
                    transform: 'rotate(-20deg)',
                    pointerEvents: 'none'
                }} />

                <h2 style={{ color: 'white', fontSize: '48px', marginBottom: '16px', position: 'relative' }}>
                    Ready to Transform Your Classroom?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px', position: 'relative' }}>
                    Join thousands of educators and students already building the future of learning on EduFlow.
                </p>

                <div className="flex justify-center" style={{ gap: '16px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
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
