"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
    Check,
    X,
    Zap,
    Trophy,
    Award,
    ArrowLeft,
    ShieldCheck,
    Sparkles,
    ZapIcon,
    CheckCircle2,
    ChevronRight,
    CreditCard
} from 'lucide-react';

const UpgradePage = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

    const plans = [
        {
            name: 'Basic Learner',
            price: billingCycle === 'yearly' ? '$0' : '$0',
            period: 'forever',
            description: 'Essential tools for casual learners starting their journey.',
            features: [
                'Access to all free courses',
                '5 AI Tutor queries per day',
                'Community forum access',
                'Public profile',
                'Mobile app access'
            ],
            buttonText: 'Current Plan',
            current: true,
            color: '#64748B',
            icon: <Zap size={24} color="#64748B" />
        },
        {
            name: 'Pro Student',
            price: billingCycle === 'yearly' ? '$12' : '$15',
            period: '/ month',
            description: 'Best for dedicated students who want to excel and earn certificates.',
            features: [
                'Everything in Basic',
                'Unlimited AI Tutor access',
                'Verified Certificate downloads',
                'Priority support response',
                'Ad-free learning experience',
                'Offline mode for mobile'
            ],
            buttonText: 'Upgrade to Pro',
            recommended: true,
            current: false,
            color: '#0066FF',
            icon: <Trophy size={24} color="#0066FF" />
        },
        {
            name: 'Academic Premium',
            price: billingCycle === 'yearly' ? '$29' : '$35',
            period: '/ month',
            description: 'For power users, researchers, and professional certification seekers.',
            features: [
                'Everything in Pro',
                '1-on-1 Human Tutoring (2hrs/mo)',
                'Advanced Learning Analytics',
                'Early access to new courses',
                'Course creation beta access',
                'Team collaboration tools'
            ],
            buttonText: 'Get Premium',
            current: false,
            color: '#8B5CF6',
            icon: <Award size={24} color="#8B5CF6" />
        }
    ];

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            {/* Header / Nav */}
            <div style={{ padding: '24px 0', borderBottom: '1px solid #E2E8F0', background: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
                        <ArrowLeft size={18} /> Back to Dashboard
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ background: '#0066FF', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ShieldCheck size={16} color="white" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: '18px', color: '#1E293B' }}>EduTrack<span style={{ color: '#0066FF' }}>Pro</span></span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div style={{ padding: '80px 0 40px', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#EFF6FF', padding: '8px 16px', borderRadius: '99px', marginBottom: '24px' }}>
                        <Sparkles size={16} color="#0066FF" />
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#0066FF', textTransform: 'uppercase', letterSpacing: '1px' }}>Premium Education</span>
                    </div>
                    <h1 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '24px', letterSpacing: '-1.5px', color: '#0F172A' }}>
                        Unlock Your Full <span style={{ color: '#0066FF' }}>Potential.</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.6, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                        Join over 50,000+ students who have accelerated their learning with our premium features and expert tools.
                    </p>

                    {/* Toggle */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '60px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: billingCycle === 'monthly' ? '#1E293B' : '#94A3B8' }}>Monthly</span>
                        <div
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                            style={{ width: '56px', height: '30px', background: '#E2E8F0', borderRadius: '20px', padding: '3px', cursor: 'pointer', position: 'relative', transition: 'background 0.3s' }}
                        >
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: 'white',
                                borderRadius: '50%',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                position: 'absolute',
                                left: billingCycle === 'monthly' ? '3px' : '29px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}></div>
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: billingCycle === 'yearly' ? '#1E293B' : '#94A3B8' }}>Yearly</span>
                        <div style={{ background: '#DCFCE7', color: '#15803D', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 800 }}>SAVE 20%</div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div style={{ padding: '0 0 100px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    {/* Horizontal scroll container for mobile */}
                    <div style={{
                        display: 'flex',
                        gap: '24px',
                        overflowX: 'auto',
                        padding: '20px 4px 40px',
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch'
                    }} className="pricing-grid">
                        {plans.map((plan, idx) => (
                            <div key={idx} style={{
                                flex: '1',
                                minWidth: '320px', // Ensures cards are readable on mobile
                                scrollSnapAlign: 'start',
                                background: 'white',
                                borderRadius: '32px',
                                padding: '48px 40px',
                                border: plan.recommended ? `3px solid ${plan.color}` : '1px solid #E2E8F0',
                                boxShadow: plan.recommended ? '0 25px 50px -12px rgba(0, 102, 255, 0.15)' : '0 4px 20px rgba(0,0,0,0.02)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease'
                            }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                {plan.recommended && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-16px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: plan.color,
                                        color: 'white',
                                        padding: '6px 20px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        boxShadow: '0 4px 10px rgba(0, 102, 255, 0.3)'
                                    }}>
                                        Most Popular
                                    </div>
                                )}

                                <div style={{
                                    background: `${plan.color}10`,
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '32px'
                                }}>
                                    {plan.icon}
                                </div>

                                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px', color: '#1E293B' }}>{plan.name}</h3>
                                <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                    <span style={{ fontSize: '48px', fontWeight: 900, color: '#0F172A' }}>{plan.price}</span>
                                    {plan.price !== '$0' && <span style={{ fontSize: '18px', color: '#64748B', fontWeight: 600 }}>{plan.period}</span>}
                                </div>
                                <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '32px', lineHeight: 1.6 }}>{plan.description}</p>

                                <div style={{ height: '1px', background: '#F1F5F9', marginBottom: '32px' }}></div>

                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', flex: 1 }}>
                                    {plan.features.map((feature, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px', fontSize: '15px', color: '#334155', fontWeight: 500 }}>
                                            <div style={{ flexShrink: 0, marginTop: '2px' }}>
                                                <Check size={18} color={plan.color} strokeWidth={3} />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button style={{
                                    width: '100%',
                                    padding: '18px',
                                    borderRadius: '16px',
                                    border: 'none',
                                    background: plan.current ? '#F1F5F9' : plan.color,
                                    color: plan.current ? '#94A3B8' : 'white',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    cursor: plan.current ? 'default' : 'pointer',
                                    boxShadow: plan.current ? 'none' : `0 10px 15px -3px ${plan.color}40`,
                                    transition: 'all 0.2s'
                                }}>
                                    {plan.buttonText}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Comparison Section */}
            <div style={{ background: 'white', padding: '100px 0', borderTop: '1px solid #E2E8F0' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 800, textAlign: 'center', marginBottom: '60px' }}>Frequently Asked Questions</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                        <div>
                            <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '12px' }}>Can I cancel my subscription?</h4>
                            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>Yes, you can cancel your subscription at any time from your account settings. You will retain access until the end of your billing period.</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '12px' }}>Is there a student discount?</h4>
                            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>Our pricing is already optimized for students, but we offer special rates for educational institutions and bulk licenses.</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '12px' }}>How does AI Tutor query limit work?</h4>
                            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>Basic users get 5 queries/day. Pro and Premium users enjoy unlimited access to our AI Tutoring engine for all subjects.</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '12px' }}>What payment methods do you accept?</h4>
                            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>We accept all major credit cards, PayPal, and Apple Pay through our secure payment partner, Stripe.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <div style={{ padding: '100px 0', textAlign: 'center' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ background: '#F0F9FF', padding: '40px', borderRadius: '32px', border: '1px solid #BAE6FD' }}>
                        <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px' }}>Still have questions?</h3>
                        <p style={{ fontSize: '16px', color: '#64748B', marginBottom: '32px' }}>Our support team is here to help you choose the right plan for your goals.</p>
                        <button style={{ background: 'white', color: '#0066FF', border: '1px solid #0066FF', padding: '12px 32px', borderRadius: '12px', fontWeight: 700, fontSize: '15px' }}>Contact Support</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (min-width: 1024px) {
                    .pricing-grid {
                        overflow-x: visible !important;
                    }
                }
                .pricing-grid::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default UpgradePage;
