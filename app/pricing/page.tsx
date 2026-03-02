"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: "Basic",
            tagline: "For individual tutors",
            price: isAnnual ? "0" : "0",
            freq: "/mo",
            button: "Get Started",
            variant: "outline",
            features: [
                "Up to 20 students",
                "Basic video conferencing",
                "Standard quiz builder",
                "Email support",
                "Mobile app access"
            ]
        },
        {
            name: "Professional",
            tagline: "For growing schools",
            price: isAnnual ? "149" : "189",
            freq: "/mo",
            button: "Try For Free",
            variant: "primary",
            featured: true,
            features: [
                "Up to 500 students",
                "HD Virtual classrooms",
                "AI Grading assistant",
                "Advanced analytics",
                "Priority 24/7 support",
                "Custom branding",
                "Payment gateway integration"
            ]
        },
        {
            name: "Enterprise",
            tagline: "For large institutions",
            price: "Custom",
            freq: "",
            button: "Contact Sales",
            variant: "outline",
            features: [
                "Unlimited students",
                "White labeling",
                "Dedicate success manager",
                "Single Sign-On (SSO)",
                "Custom API integrations",
                "On-premise deployment options",
                "SLA guarantees"
            ]
        }
    ];

    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            {/* Header */}
            <section style={{
                padding: '160px 0 80px',
                background: '#F8FAFC',
                textAlign: 'center'
            }}>
                <div className="container animate-slide-up">
                    <span style={{
                        color: 'var(--primary)',
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        fontWeight: 900,
                        letterSpacing: '2px',
                        display: 'block',
                        marginBottom: '16px',
                        fontFamily: 'var(--font-orbitron)'
                    }}>
                        Pricing Plans
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(36px, 5vw, 56px)',
                        fontWeight: 900,
                        fontFamily: 'var(--font-orbitron)',
                        color: 'var(--secondary)',
                        marginBottom: '24px',
                        lineHeight: 1.1
                    }}>
                        Simple, Transparent <span style={{ color: '#FF7D00' }}>Pricing</span>.
                    </h1>
                    <p className="animate-fade delay-2" style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
                        Choose the plan that fits your institutional goals. No hidden fees, no complicated contracts.
                    </p>

                    {/* Switch */}
                    <div className="flex align-center justify-center gap-16" style={{ marginBottom: '60px' }}>
                        <span style={{ fontSize: '15px', fontWeight: 600, color: !isAnnual ? 'var(--secondary)' : 'var(--text-muted)' }}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            style={{
                                width: '60px',
                                height: '32px',
                                background: 'white',
                                border: '1px solid var(--border)',
                                borderRadius: '20px',
                                position: 'relative',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '4px',
                                left: isAnnual ? '32px' : '4px',
                                width: '22px',
                                height: '22px',
                                background: 'var(--primary)',
                                borderRadius: '50%',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}></div>
                        </button>
                        <span style={{ fontSize: '15px', fontWeight: 600, color: isAnnual ? 'var(--secondary)' : 'var(--text-muted)' }}>
                            Yearly
                            <span style={{ marginLeft: '8px', background: '#DCFCE7', color: '#16A34A', fontSize: '11px', padding: '2px 8px', borderRadius: '10px' }}>Save 20%</span>
                        </span>
                    </div>
                </div>
            </section>

            {/* Plans Grid */}
            <section style={{ padding: '0 0 100px', marginTop: '-40px' }}>
                <div className="container">
                    <div className="grid grid-3" style={{ gap: '32px' }}>
                        {plans.map((p, i) => (
                            <div key={i} className={`card animate-zoom-slide delay-${(i % 3) + 1}`} style={{
                                padding: '48px',
                                background: 'white',
                                border: p.featured ? '2px solid var(--primary)' : '1px solid var(--border)',
                                transform: p.featured ? 'translateY(-10px)' : 'none',
                                zIndex: p.featured ? 2 : 1,
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '32px',
                                boxShadow: p.featured ? '0 25px 50px -12px rgba(255,125,0,0.15)' : '0 10px 30px rgba(0,0,0,0.03)',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}>
                                {p.featured && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-16px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'var(--secondary)',
                                        color: 'white',
                                        fontSize: '12px',
                                        fontWeight: 800,
                                        padding: '4px 16px',
                                        borderRadius: '20px',
                                        textTransform: 'uppercase'
                                    }}>
                                        Most Popular
                                    </div>
                                )}
                                <div style={{ marginBottom: '32px' }}>
                                    <h3 style={{ fontSize: '24px', marginBottom: '8px', fontFamily: 'var(--font-orbitron)', fontWeight: 800 }}>{p.name}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: 500 }}>{p.tagline}</p>
                                </div>
                                <div style={{ marginBottom: '40px' }}>
                                    <div className="flex align-end gap-4">
                                        <span style={{ fontSize: '52px', fontWeight: 900, lineHeight: 1, color: 'var(--secondary)', fontFamily: 'var(--font-orbitron)' }}>
                                            {p.price !== "Custom" ? `$${p.price}` : p.price}
                                        </span>
                                        {p.price !== "Custom" && <span style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 700 }}>{p.freq}</span>}
                                    </div>
                                </div>

                                <button className={`btn ${p.variant === 'primary' ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', padding: '16px', marginBottom: '40px' }}>
                                    {p.button}
                                </button>

                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '20px', color: 'var(--secondary)', letterSpacing: '1px' }}>What&apos;s Included</div>
                                    <div className="flex column gap-16">
                                        {p.features.map((f, idx) => (
                                            <div key={idx} className="flex align-center gap-12" style={{ fontSize: '14px', color: '#475569' }}>
                                                <div style={{ background: '#F1F5F9', borderRadius: '50%', padding: '2px', color: 'var(--primary)' }}>
                                                    <Check size={14} />
                                                </div>
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '100px 0', background: '#F8FAFC' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="text-center animate-slide-up" style={{ fontSize: '36px', marginBottom: '60px', fontFamily: 'var(--font-orbitron)', fontWeight: 800 }}>Frequently Asked Questions</h2>
                    <div className="flex column gap-16">
                        {[
                            { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade or downgrade your plan at any time through your dashboard. Changes will be reflected in your next billing cycle." },
                            { q: "Is there a discount for non-profits?", a: "Absolutely. We offer a 30% discount for registered non-profit educational institutions. Contact our sales team to verify your status." },
                            { q: "How long is the free trial?", a: "The Professional plan comes with a 14-day free trial. No credit card is required to get started." }
                        ].map((faq, i) => (
                            <div key={i} className={`card animate-slide-up delay-${i + 1}`} style={{ padding: '24px', background: 'white', border: '1px solid var(--border)', borderRadius: '16px', transition: 'all 0.3s ease' }}>
                                <div className="flex justify-between align-center" style={{ cursor: 'pointer' }}>
                                    <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--secondary)' }}>{faq.q}</h4>
                                    <div style={{ color: 'var(--primary)', background: '#FFF7ED', borderRadius: '50%', padding: '4px' }}>
                                        <HelpCircle size={18} />
                                    </div>
                                </div>
                                <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
