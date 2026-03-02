"use client";
import React, { useState } from 'react';
import {
    CheckCircle2,
    ArrowRight,
    ChevronDown,
    Plus,
    Globe,
    Facebook,
    Twitter,
    Linkedin,
    User,
    Users,
    Building2,
    Mail,
    Instagram,
    Monitor
} from 'lucide-react';

const LearnStreamPricing = () => {
    const [billing, setBilling] = useState('monthly');

    const plans = [
        { title: 'Tutor Starter', price: '0', icon: <User size={24} color="#0066FF" />, features: ['Up to 10 Active Students', 'Basic Course Builder', 'Community Forum Access', 'No Custom Domain'], button: 'Get Started Free', recommended: false },
        { title: 'Education Pro', price: '49', icon: <Users size={24} color="#0066FF" />, features: ['Unlimited Student Enrollment', 'AI-Powered Assessment Tools', 'Parent-Teacher Portal', 'SCORM/LTI Compliance', 'Custom Branding & Domain'], button: 'Choose Pro Plan', recommended: true },
        { title: 'Institution', price: 'Contact', icon: <Building2 size={24} color="#0066FF" />, features: ['SSO & Advanced Security', 'API & Webhooks Integrations', 'Dedicated Success Manager', 'Bulk User Provisioning'], button: 'Request Demo', recommended: false },
    ];

    const faqs = [
        { q: 'Is there a discount for K-12 public schools?', a: 'Yes, we offer special pricing for non-profit educational institutions. Contact our sales team for details.' },
        { q: 'How secure is student data on your platform?', a: 'We are SOC2 compliant and follow strict GDPR guidelines to ensure all student data is encrypted and secure.' },
        { q: 'Can we integrate with our existing SIS/ERP?', a: 'Our Institution plan includes full API access and pre-built connectors for major SIS platforms.' },
    ];

    return (
        <div style={{ background: '#F8FAFC', color: '#1E293B', fontFamily: 'Inter, sans-serif' }}>
            {/* Navbar */}
            <nav style={{ padding: '24px 0', background: 'white', borderBottom: '1px solid #F1F5F9', position: 'sticky', top: 0, zIndex: 100 }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Monitor size={18} color="white" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: '20px' }}>LearnStream</span>
                    </div>
                    <div style={{ display: 'flex', gap: '40px' }}>
                        {['Platform', 'K-12 Solutions', 'Pricing', 'Resources'].map(item => (
                            <span key={item} style={{ fontSize: '14px', fontWeight: 600, color: item === 'Pricing' ? '#0066FF' : '#64748B', cursor: 'pointer' }}>{item}</span>
                        ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 700 }}>Login</span>
                        <button style={{ background: '#0066FF', color: 'white', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 700, fontSize: '14px' }}>Start Free Trial</button>
                    </div>
                </div>
            </nav>

            {/* Hero Header */}
            <div style={{ padding: '100px 0 60px', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#EFF6FF', padding: '6px 14px', borderRadius: '99px', width: 'fit-content', margin: '0 auto 32px' }}>
                        <div style={{ width: '6px', height: '6px', background: '#0066FF', borderRadius: '50%' }}></div>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#0066FF', textTransform: 'uppercase', letterSpacing: '1px' }}>TRANSPARENT PRICING</span>
                    </div>
                    <h1 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '24px', letterSpacing: '-1.5px' }}>
                        Plans for every stage of <br />
                        <span style={{ color: '#0066FF' }}>educational growth.</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.6, marginBottom: '48px' }}>
                        Standardized solutions designed for individual tutors, K-12 districts, and <br /> special limited academies institutions.
                    </p>

                    {/* Toggle */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '80px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: billing === 'monthly' ? '#1E293B' : '#94A3B8' }}>Monthly Billing</span>
                        <div
                            onClick={() => setBilling(billing === 'monthly' ? 'annual' : 'monthly')}
                            style={{ width: '56px', height: '32px', background: '#E2E8F0', borderRadius: '20px', padding: '4px', cursor: 'pointer', position: 'relative' }}
                        >
                            <div style={{ width: '24px', height: '24px', background: 'white', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'absolute', left: billing === 'monthly' ? '4px' : '28px', transition: 'all 0.2s ease' }}></div>
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: billing === 'annual' ? '#1E293B' : '#94A3B8' }}>Annual Billing</span>
                        <span style={{ background: '#FFF7ED', color: '#C2410C', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 800 }}>SAVE 20%</span>
                    </div>
                </div>
            </div>

            {/* Pricing Cards */}
            <div style={{ padding: '0 0 120px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', alignItems: 'start' }}>
                    {plans.map((plan, i) => (
                        <div key={i} style={{
                            background: 'white',
                            borderRadius: '32px',
                            padding: '48px',
                            border: plan.recommended ? '2px solid #0066FF' : '1px solid #E2E8F0',
                            boxShadow: plan.recommended ? '0 30px 60px -15px rgba(0,102,255,0.1)' : '0 4px 20px rgba(0,0,0,0.02)',
                            position: 'relative'
                        }}>
                            {plan.recommended && (
                                <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', background: '#F59E0B', color: 'white', padding: '6px 20px', borderRadius: '12px', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    RECOMMENDED
                                </div>
                            )}
                            <div style={{ background: '#EFF6FF', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                                {plan.icon}
                            </div>
                            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px' }}>{plan.title}</h3>
                            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.5, marginBottom: '32px' }}>Essential tools for independent educators and private tutors.</p>

                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '40px' }}>
                                <span style={{ fontSize: '48px', fontWeight: 900 }}>{plan.price === 'Contact' ? 'Contact' : `$${plan.price}`}</span>
                                {plan.price !== 'Contact' && <span style={{ fontSize: '16px', fontWeight: 600, color: '#64748B' }}>/mo</span>}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <CheckCircle2 size={18} color="#0066FF" />
                                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button style={{
                                width: '100%',
                                padding: '16px',
                                borderRadius: '14px',
                                border: plan.recommended ? 'none' : '1px solid #E2E8F0',
                                background: plan.recommended ? '#0066FF' : 'white',
                                color: plan.recommended ? 'white' : '#1E293B',
                                fontWeight: 700,
                                fontSize: '15px'
                            }}>
                                {plan.button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Section */}
            <div style={{ padding: '100px 0', borderTop: '1px solid #E2E8F0' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '16px' }}>Common Questions</h2>
                    <p style={{ fontSize: '16px', color: '#64748B', marginBottom: '64px' }}>Detailed information for administrators and educators.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {faqs.map((faq, i) => (
                            <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '24px 32px', border: '1px solid #E2E8F0', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '16px', fontWeight: 700 }}>{faq.q}</span>
                                <Plus size={20} color="#94A3B8" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Brand CTA */}
            <div style={{ padding: '120px 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ background: 'linear-gradient(135deg, #0066FF 0%, #3B82F6 100%)', borderRadius: '48px', padding: '100px', textAlign: 'center', color: 'white' }}>
                        <h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '24px', color: 'white' }}>Empower your institution <br /> with LearnStream today.</h2>
                        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                            Join the standardized movement in education. Modernizing LMS for over 2,000+ districts worldwide.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <button style={{ background: 'white', color: '#0066FF', border: 'none', borderRadius: '12px', padding: '18px 40px', fontWeight: 700, fontSize: '16px' }}>Get Started Now</button>
                            <button style={{ background: 'white', color: '#3B82F6', border: '1px solid white', borderRadius: '12px', padding: '18px 40px', fontWeight: 700, fontSize: '16px' }}>Schedule Architecture Call</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ background: 'white', borderTop: '1px solid #F1F5F9', padding: '100px 0 40px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '80px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                            <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Monitor size={18} color="white" />
                            </div>
                            <span style={{ fontWeight: 800, fontSize: '20px' }}>LearnStream</span>
                        </div>
                        <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.6, marginBottom: '32px', maxWidth: '300px' }}>
                            Standardizing the digital learning experience for modern education globally. Trusted by schools and universities since 2012.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <Globe size={18} color="#94A3B8" />
                            <Instagram size={18} color="#94A3B8" />
                            <Linkedin size={18} color="#94A3B8" />
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#1E293B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '32px' }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#64748B', fontSize: '14px' }}>
                            <span>Features</span>
                            <span>Integrations</span>
                            <span>Enterprise</span>
                            <span>Solutions</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#1E293B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '32px' }}>Support</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#64748B', fontSize: '14px' }}>
                            <span>Help Center</span>
                            <span>API Docs</span>
                            <span>Status</span>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '1200px', margin: '100px auto 0', padding: '0 24px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '40px', fontSize: '12px', color: '#94A3B8' }}>
                    <span>© 2024 LEARNSTREAM LMS. STANDARDIZED ACADEMIC IDENTITY.</span>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LearnStreamPricing;
