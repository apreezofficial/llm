"use client";
import { useState } from 'react';
import { X, Check } from 'lucide-react';

interface UpgradeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function UpgradeModal({ isOpen, onClose }: UpgradeModalProps) {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

    if (!isOpen) return null;

    const plans = [
        {
            name: 'Basic',
            price: billingCycle === 'yearly' ? '$0' : '$0',
            period: 'forever',
            description: 'Essential tools for casual learners.',
            features: ['Access to free courses', 'Limited AI Tutor queries', 'Community support'],
            buttonText: 'Current Plan',
            current: true,
            color: '#64748B'
        },
        {
            name: 'Pro',
            price: billingCycle === 'yearly' ? '$12' : '$15',
            period: '/ month',
            description: 'Best for students who want to excel.',
            features: ['Unlimited AI Tutor access', 'Certificate downloads', 'Priority support', 'AD-free experience'],
            buttonText: 'Upgrade to Pro',
            recommended: true,
            current: false,
            color: '#0066FF'
        },
        {
            name: 'Premium',
            price: billingCycle === 'yearly' ? '$29' : '$35',
            period: '/ month',
            description: 'For power users and researchers.',
            features: ['Everything in Pro', '1-on-1 Human Tutoring (1hr/mo)', 'Advanced Analytics', 'Early access to new features'],
            buttonText: 'Get Premium',
            current: false,
            color: '#8B5CF6'
        }
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }} onClick={onClose}>
            <div
                style={{
                    background: 'white',
                    width: '100%',
                    maxWidth: '900px',
                    borderRadius: '24px',
                    padding: '40px',
                    position: 'relative',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    animation: 'scaleIn 0.3s ease-out'
                }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '24px',
                        right: '24px',
                        background: '#F1F5F9',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#64748B'
                    }}
                >
                    <X size={18} />
                </button>

                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0F172A', marginBottom: '12px', letterSpacing: '-1px' }}>
                        Upgrade your learning journey
                    </h2>
                    <p style={{ color: '#64748B', fontSize: '16px', maxWidth: '500px', margin: '0 auto 32px' }}>
                        Unlock the full potential of EduTrackPro with our flexible pricing plans.
                    </p>

                    {/* Simple Toggle */}
                    <div style={{ display: 'inline-flex', background: '#F1F5F9', padding: '4px', borderRadius: '12px' }}>
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            style={{
                                padding: '8px 24px',
                                borderRadius: '10px',
                                border: 'none',
                                background: billingCycle === 'monthly' ? 'white' : 'transparent',
                                color: billingCycle === 'monthly' ? '#0F172A' : '#64748B',
                                fontWeight: 700,
                                fontSize: '14px',
                                boxShadow: billingCycle === 'monthly' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            style={{
                                padding: '8px 24px',
                                borderRadius: '10px',
                                border: 'none',
                                background: billingCycle === 'yearly' ? 'white' : 'transparent',
                                color: billingCycle === 'yearly' ? '#0F172A' : '#64748B',
                                fontWeight: 700,
                                fontSize: '14px',
                                boxShadow: billingCycle === 'yearly' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            Yearly <span style={{ color: '#10B981', fontSize: '10px', marginLeft: '4px' }}>SAVE 20%</span>
                        </button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                    {plans.map((plan, idx) => (
                        <div key={idx} style={{
                            border: plan.recommended ? `2px solid ${plan.color}` : '1px solid #E2E8F0',
                            borderRadius: '20px',
                            padding: '32px',
                            position: 'relative',
                            background: plan.recommended ? '#F8FAFC' : 'white',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {plan.recommended && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: plan.color,
                                    color: 'white',
                                    fontSize: '11px',
                                    fontWeight: 800,
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    Most Popular
                                </div>
                            )}

                            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>{plan.name}</h3>
                            <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                <span style={{ fontSize: '36px', fontWeight: 800, color: '#0F172A' }}>{plan.price}</span>
                                <span style={{ fontSize: '14px', color: '#64748B', fontWeight: 600 }}>{plan.period}</span>
                            </div>
                            <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '24px', lineHeight: 1.5 }}>{plan.description}</p>

                            <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', marginBottom: '24px' }} />

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', flex: 1 }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', fontSize: '14px', color: '#334155' }}>
                                        <Check size={16} color={plan.color} style={{ marginTop: '3px', flexShrink: 0 }} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button style={{
                                width: '100%',
                                padding: '14px',
                                borderRadius: '12px',
                                border: plan.current ? '1px solid #E2E8F0' : 'none',
                                background: plan.current ? 'white' : plan.color,
                                color: plan.current ? '#64748B' : 'white',
                                fontWeight: 700,
                                fontSize: '14px',
                                cursor: plan.current ? 'default' : 'pointer',
                                transition: 'transform 0.2s',
                                boxShadow: plan.current ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}
                                onMouseEnter={(e) => { if (!plan.current) e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                onMouseLeave={(e) => { if (!plan.current) e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                <p style={{ textAlign: 'center', fontSize: '12px', color: '#94A3B8', marginTop: '32px' }}>
                    Secure payment powered by Stripe. Cancel anytime.
                </p>
            </div>
        </div>
    );
}

// Add keyframes for modal animation
const style = document.createElement('style');
style.textContent = `
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;
if (typeof document !== 'undefined') document.head.appendChild(style);
