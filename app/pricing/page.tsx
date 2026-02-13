"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";

export default function PricingPage() {
    return (
        <main style={{ paddingTop: '72px' }}>
            <Navbar />

            <section style={{
                background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)',
                padding: '120px 0 160px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container animate-fade">
                    <h1 style={{ fontSize: '64px', marginBottom: '24px', fontWeight: 800 }}>Simple, Transparent <br /><span style={{ color: 'var(--primary)' }}>Pricing</span></h1>
                    <p style={{ fontSize: '20px', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Choose the plan that fits your institution. No hidden fees.
                    </p>
                </div>
                <Wave />
            </section>

            <section className="container section">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    {[
                        { plan: "Starter", price: "Free", desc: "Perfect for individual tutors", features: ["Up to 10 Students", "Baisc LMS Tools", "Community Support"] },
                        { plan: "Pro", price: "$49", desc: "Best for growing schools", features: ["Unlimited Students", "AI Grading Assistant", "Priority Support", "Custom Branding"], popular: true },
                        { plan: "Enterprise", price: "Custom", desc: "For large scale institutions", features: ["Dedicated Account Manager", "SSO & Advanced Security", "Bulk Student Import", "24/7 Phone Support"] }
                    ].map((item, i) => (
                        <div key={i} style={{
                            padding: '48px 40px',
                            borderRadius: '32px',
                            background: item.popular ? 'var(--secondary)' : 'white',
                            color: item.popular ? 'white' : 'var(--text-main)',
                            border: '1px solid var(--border)',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: item.popular ? '0 20px 40px rgba(0,0,0,0.1)' : 'none',
                            transform: item.popular ? 'scale(1.05)' : 'none',
                            zIndex: item.popular ? 1 : 0
                        }}>
                            {item.popular && (
                                <span style={{
                                    position: 'absolute',
                                    top: '24px',
                                    right: '24px',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    padding: '4px 12px',
                                    borderRadius: '999px',
                                    fontSize: '12px',
                                    fontWeight: 700
                                }}>Most Popular</span>
                            )}
                            <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{item.plan}</h3>
                            <div style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px' }}>{item.price}<span style={{ fontSize: '16px', fontWeight: 500 }}>{item.price !== "Custom" && item.price !== "Free" ? "/mo" : ""}</span></div>
                            <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '32px' }}>{item.desc}</p>

                            <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', marginBottom: '32px' }} />

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px', flex: 1 }}>
                                {item.features.map((f, idx) => (
                                    <li key={idx} style={{ marginBottom: '12px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ width: '16px', height: '16px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn ${item.popular ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', padding: '16px' }}>Get Started</button>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
