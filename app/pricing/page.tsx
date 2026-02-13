"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";
import { Check } from 'lucide-react';

export default function PricingPage() {
    return (
        <main>
            <Navbar />

            <section style={{
                background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)',
                padding: '160px 0 100px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container animate-fade">
                    <h1 className="hero-title" style={{ fontWeight: 800 }}>Simple, Transparent <br /><span style={{ color: 'var(--primary)' }}>Pricing</span></h1>
                    <p className="section-subtitle">
                        Choose the plan that fits your institution. No hidden fees.
                    </p>
                </div>
                <Wave />
            </section>

            <section className="container section">
                <div className="grid grid-3" style={{ alignItems: 'stretch' }}>
                    {[
                        { plan: "Starter", price: "Free", desc: "Perfect for individual tutors", features: ["Up to 10 Students", "Basic LMS Tools", "Community Support"] },
                        { plan: "Pro", price: "$49", desc: "Best for growing schools", features: ["Unlimited Students", "AI Grading Assistant", "Priority Support", "Custom Branding"], popular: true },
                        { plan: "Enterprise", price: "Custom", desc: "For large scale institutions", features: ["Dedicated Account Manager", "SSO & Advanced Security", "Bulk Student Import", "24/7 Phone Support"] }
                    ].map((item, i) => (
                        <div key={i} className="card" style={{
                            padding: '48px 32px',
                            background: item.popular ? 'var(--secondary)' : 'white',
                            color: item.popular ? 'white' : 'var(--text-main)',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: item.popular ? 'var(--shadow-xl)' : 'var(--shadow)',
                            transform: item.popular ? 'scale(1.05)' : 'none',
                            zIndex: item.popular ? 2 : 1,
                            border: item.popular ? 'none' : '1px solid var(--border)'
                        }}>
                            {item.popular && (
                                <span style={{
                                    position: 'absolute',
                                    top: '24px',
                                    right: '24px',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    padding: '6px 16px',
                                    borderRadius: '999px',
                                    fontSize: '12px',
                                    fontWeight: 700
                                }}>MOST POPULAR</span>
                            )}
                            <h3 style={{ fontSize: '20px', marginBottom: '8px', color: item.popular ? 'white' : 'var(--secondary)' }}>{item.plan}</h3>
                            <div style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px' }}>
                                {item.price}
                                {item.price !== "Custom" && item.price !== "Free" && <span style={{ fontSize: '16px', fontWeight: 500, opacity: 0.7 }}>/mo</span>}
                            </div>
                            <p style={{ fontSize: '15px', opacity: 0.8, marginBottom: '32px', lineHeight: 1.6 }}>{item.desc}</p>

                            <hr style={{ border: 'none', borderTop: item.popular ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--border)', marginBottom: '32px' }} />

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px', flex: 1 }}>
                                {item.features.map((f, idx) => (
                                    <li key={idx} style={{ marginBottom: '16px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{
                                            width: '20px',
                                            height: '20px',
                                            background: item.popular ? 'rgba(255,255,255,0.2)' : 'var(--accent-blue)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            color: item.popular ? 'white' : 'var(--primary)'
                                        }}>
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                        <span style={{ opacity: 0.9 }}>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn ${item.popular ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', padding: '16px' }}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
            <style jsx>{`
                @media (max-width: 1024px) {
                    .grid-3 > div {
                        transform: none !important;
                    }
                }
            `}</style>
        </main>
    );
}


