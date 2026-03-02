"use client";

const stats = [
    { val: "280k+", label: "Active Learners" },
    { val: "1,400+", label: "Partner Institutions" },
    { val: "40+", label: "Languages Supported" },
    { val: "99.9%", label: "Platform Uptime" }
];

export default function StatsBanner() {
    return (
        <section style={{ background: '#0F172A', padding: '56px 0' }}>
            <div className="container">
                <div className="grid grid-4" style={{ gap: '40px' }}>
                    {stats.map((s, i) => (
                        <div key={i} className={`animate-slide-up delay-${i + 1}`} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 900, color: '#FF7D00', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>{s.val}</div>
                            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
