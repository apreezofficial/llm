"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";

export default function ResourcesPage() {
    return (
        <main style={{ paddingTop: '72px' }}>
            <Navbar />

            <section style={{
                background: '#F8FAFC',
                padding: '120px 0 160px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container animate-fade">
                    <h1 style={{ fontSize: '64px', marginBottom: '24px', fontWeight: 800 }}>Knowledge & <br /><span style={{ color: 'var(--primary)' }}>Insights</span></h1>
                    <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', gap: '8px', background: 'white', padding: '8px', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
                        <input type="text" placeholder="Search for documentation, guides..." style={{ flex: 1, border: 'none', padding: '12px 16px', fontSize: '16px', outline: 'none' }} />
                        <button className="btn btn-primary" style={{ padding: '12px 24px' }}>Search</button>
                    </div>
                </div>
                <Wave />
            </section>

            <section className="container section">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', display: 'grid' }}>
                    {[
                        { type: "Guide", title: "Getting Started with EduFlow", desc: "A comprehensive walkthrough for new teachers and administrators.", date: "Feb 12, 2026" },
                        { type: "Whitepaper", title: "The Future of Digital LMS", desc: "Our 2026 report on educational trends and virtual engagement.", date: "Jan 28, 2026" },
                        { type: "Video", title: "Mastering Breakout Rooms", desc: "Tips & tricks for managing student collaboration effectively.", date: "Jan 15, 2026" },
                        { type: "Article", title: "Security Best Practices", desc: "Ensuring student privacy and data protection in your virtual classroom.", date: "Dec 10, 2025" },
                        { type: "Guide", title: "Curating Achievement Badges", desc: "How to design a rewards system that actually motivates students.", date: "Nov 22, 2025" },
                        { type: "Update", title: "New Mobile App Features", desc: "What's new in the latest version of the EduFlow student app.", date: "Nov 5, 2025" }
                    ].map((res, i) => (
                        <div key={i} style={{
                            padding: '32px',
                            borderRadius: '24px',
                            background: 'white',
                            border: '1px solid var(--border)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.borderColor = 'var(--primary)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <span style={{
                                display: 'inline-block',
                                padding: '4px 12px',
                                background: 'var(--accent-blue)',
                                color: 'var(--primary)',
                                fontSize: '12px',
                                fontWeight: 700,
                                borderRadius: '999px',
                                marginBottom: '20px'
                            }}>{res.type}</span>
                            <h3 style={{ fontSize: '20px', marginBottom: '12px', lineHeight: '1.4' }}>{res.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>{res.desc}</p>
                            <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{res.date}</div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
