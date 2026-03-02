"use client";
import React from 'react';
import {
    CheckCircle2,
    ArrowRight,
    Globe,
    Users,
    BookOpen,
    ShieldCheck,
    PlayCircle,
    Mail,
    Instagram,
    Twitter,
    Linkedin,
    Monitor
} from 'lucide-react';

const LandingPage = () => {
    return (
        <div style={{ background: 'white', color: '#1E293B', fontFamily: 'Inter, sans-serif' }}>
            {/* Navbar */}
            <nav style={{ padding: '20px 0', borderBottom: '1px solid #F1F5F9', position: 'sticky', top: 0, background: 'white', zIndex: 100 }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ background: '#0066FF', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <BookOpen size={16} color="white" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: '20px' }}>Eduflow<span style={{ color: '#0066FF' }}> LMS</span></span>
                    </div>

                    <div style={{ display: 'flex', gap: '32px' }}>
                        {['Solutions', 'Platform', 'Pricing', 'Resources'].map(item => (
                            <span key={item} style={{ fontSize: '14px', fontWeight: 600, color: '#64748B', cursor: 'pointer' }}>{item}</span>
                        ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>Log In</span>
                        <button style={{ background: '#0066FF', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', fontWeight: 700, fontSize: '14px' }}>Get Started</button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div style={{ padding: '100px 0', textAlign: 'center', background: 'white' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
                    <h1 style={{ fontSize: '64px', fontWeight: 900, marginBottom: '24px', letterSpacing: '-2px' }}>
                        Tailored Learning for <span style={{ color: '#0066FF', borderBottom: '4px solid #0066FF' }}>Every Environment</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.6, marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
                        Empowering educators and learners with a specialized LMS platform designed to solve the unique challenges of K-12 schools, Universities, and Global Corporations.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', background: '#F8FAFC', padding: '8px', borderRadius: '16px', width: 'fit-content', margin: '0 auto' }}>
                        <button style={{ background: '#0066FF', color: 'white', border: 'none', borderRadius: '10px', padding: '12px 24px', fontWeight: 700, fontSize: '15px' }}>K-12 Education</button>
                        <button style={{ background: 'white', color: '#64748B', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '12px 24px', fontWeight: 700, fontSize: '15px' }}>Higher Education</button>
                        <button style={{ background: 'white', color: '#64748B', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '12px 24px', fontWeight: 700, fontSize: '15px' }}>Corporate Training</button>
                    </div>
                </div>
            </div>

            {/* K-12 Section */}
            <div style={{ padding: '80px 0', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '16px' }}>Bridging the Gaps in K-12</h2>
                    <p style={{ color: '#64748B', fontSize: '16px', marginBottom: '60px' }}>We solve the hurdles that prevent students from reaching their full potential.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
                        {[
                            { title: 'Bridging the Digital Divide', desc: 'Offline mode and lightweight accessibility ensuring students without stable home internet never fall behind.', icon: <Globe size={24} color="#0066FF" /> },
                            { title: 'Parent-Teacher Synergy', desc: 'Unified dashboards that keep parents updated on student progress, attendance, and behavioral growth.', icon: <Users size={24} color="#0066FF" /> },
                            { title: 'Formative Assessment', desc: 'Gamified tracking and instant feedback loops that help teachers pivot instruction in real-time.', icon: <CheckCircle2 size={24} color="#0066FF" /> },
                        ].map((card, i) => (
                            <div key={i} style={{ background: 'white', padding: '40px', borderRadius: '24px', textAlign: 'left', border: '1px solid transparent', transition: 'all 0.3s ease' }}>
                                <div style={{ background: '#EFF6FF', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                    {card.icon}
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>{card.title}</h3>
                                <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6 }}>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Detail */}
            <div style={{ padding: '120px 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ background: '#2D3748', height: '400px', borderRadius: '32px', display: 'flex', alignItems: 'flex-end', padding: '40px', overflow: 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                            <div style={{ position: 'relative', background: 'white', padding: '16px 24px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
                                <div style={{ display: 'flex' }}>
                                    {[1, 2, 3].map(i => (
                                        <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid white', marginLeft: i === 1 ? 0 : '-10px' }} />
                                    ))}
                                </div>
                                <span style={{ fontSize: '13px', fontWeight: 700 }}>Trusted by 2,000+ Schools</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '24px', lineHeight: 1.2 }}>Classroom Management Reimagined</h2>
                        <p style={{ color: '#64748B', fontSize: '16px', lineHeight: 1.6, marginBottom: '40px' }}>
                            Simplify the daily workflow of teaching. From automated grading to personalized learning paths, Eduflow gives teachers back 10+ hours a week.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                            {[
                                'Integrated Google Classroom & Microsoft Teams sync',
                                'Automated attendance and participation tracking',
                                'Diverse content library mapped to national standards'
                            ].map((text, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ background: '#0066FF', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <CheckCircle2 size={12} color="white" />
                                    </div>
                                    <span style={{ fontSize: '15px', fontWeight: 600 }}>{text}</span>
                                </div>
                            ))}
                        </div>
                        <button style={{ background: '#0066FF', color: 'white', border: 'none', borderRadius: '12px', padding: '16px 32px', fontWeight: 700, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            View K-12 Features <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Global Brands */}
            <div style={{ padding: '60px 0', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#0066FF', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '40px' }}>EMPOWERING INSTITUTIONS GLOBALLY</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', alignItems: 'center', opacity: 0.6, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}><BookOpen /> Stamford Ed</span>
                        <span style={{ fontSize: '20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}><Star /> Pearson</span>
                        <span style={{ fontSize: '20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}><Monitor /> Metropolitan K12</span>
                        <span style={{ fontSize: '20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}><Globe /> Global Academy</span>
                    </div>
                </div>
            </div>

            {/* Higher Ed Section */}
            <div style={{ padding: '120px 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '24px' }}>Higher Education & Research</h2>
                        <p style={{ color: '#64748B', fontSize: '16px', lineHeight: 1.6, marginBottom: '40px' }}>
                            Accelerate academic success with tools built for complex research, accreditation readiness, and campus-wide collaboration.
                        </p>
                        <div style={{ display: 'flex', gap: '24px', marginBottom: '40px' }}>
                            <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '16px', flex: 1, border: '1px solid #F1F5F9' }}>
                                <div style={{ fontSize: '24px', fontWeight: 900, color: '#0066FF', marginBottom: '4px' }}>96%</div>
                                <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748B' }}>Student Retention Rate</div>
                            </div>
                            <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '16px', flex: 1, border: '1px solid #F1F5F9' }}>
                                <div style={{ fontSize: '24px', fontWeight: 900, color: '#059669', marginBottom: '4px' }}>Zero-Trust</div>
                                <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748B' }}>Academic Security</div>
                            </div>
                        </div>
                        <span style={{ color: '#0066FF', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>Explore Higher Ed Solutions <ArrowRight size={18} /></span>
                    </div>
                    <div style={{ background: '#10B98120', borderRadius: '32px', overflow: 'hidden', height: '400px' }}>
                        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div style={{ padding: '100px 0 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ background: '#0066FF', borderRadius: '32px', padding: '80px', textAlign: 'center', color: 'white', boxShadow: '0 20px 40px -10px rgba(0,102,255,0.4)' }}>
                        <h2 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '24px', color: 'white' }}>Ready to transform your learning environment?</h2>
                        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>Join 15,000+ institutions already using Eduflow to bridge the gap between teaching and technology.</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <button style={{ background: 'white', color: '#0066FF', border: 'none', borderRadius: '12px', padding: '16px 32px', fontWeight: 700, fontSize: '16px' }}>Book a Free Demo</button>
                            <button style={{ background: 'transparent', color: 'white', border: '2px solid white', borderRadius: '12px', padding: '16px 32px', fontWeight: 700, fontSize: '16px' }}>View Case Studies</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ background: '#0F172A', color: 'white', padding: '100px 0 40px', marginTop: '-40px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 40px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                            <div style={{ background: '#0066FF', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <BookOpen size={16} color="white" />
                            </div>
                            <span style={{ fontWeight: 800, fontSize: '20px' }}>Eduflow</span>
                        </div>
                        <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: 1.6, marginBottom: '32px' }}>
                            The next generation of educational infrastructure. Built for scale, security, and the future of learning.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <Globe size={20} color="#94A3B8" />
                            <Twitter size={20} color="#94A3B8" />
                            <Linkedin size={20} color="#94A3B8" />
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'white', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>Solutions</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#94A3B8', fontSize: '14px' }}>
                            <span>K-12 Education</span>
                            <span>Higher Education</span>
                            <span>Corporate Training</span>
                            <span>Government</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'white', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#94A3B8', fontSize: '14px' }}>
                            <span>About Us</span>
                            <span>Careers</span>
                            <span>Press Room</span>
                            <span>Contact</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'white', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#94A3B8', fontSize: '14px' }}>
                            <span>Questions about implementation?</span>
                            <span style={{ color: '#0066FF', fontWeight: 700 }}>hello@eduflow.com</span>
                            <span>1-800-EDU-FLOW</span>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 0', borderTop: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', color: '#64748B' }}>© 2024 Eduflow LMS SaaS. All rights reserved.</span>
                    <div style={{ display: 'flex', gap: '24px', fontSize: '13px', color: '#64748B' }}>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookies</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
