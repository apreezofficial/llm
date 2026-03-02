"use client";
import React from 'react';
import {
    Monitor,
    ArrowRight,
    PlayCircle,
    CheckCircle2,
    Bot,
    Sparkles,
    LineChart,
    Zap,
    Trophy,
    ShieldCheck,
    Globe,
    Smartphone,
    CreditCard,
    Code,
    Star
} from 'lucide-react';

const LearnFlowPlatform = () => {
    return (
        <div style={{ background: 'white', color: '#0F172A', fontFamily: 'Inter, sans-serif' }}>
            <style jsx global>{`
                @media (max-width: 1024px) {
                    .hero-title { font-size: 48px !important; }
                    .features-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
                    .secondary-grid { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 768px) {
                    .hero-title { font-size: 32px !important; }
                    .nav-links { display: none !important; }
                    .hero-btns { flex-direction: column !important; width: 100% !important; }
                    .hero-btns button { width: 100% !important; }
                    .stats-grid { grid-template-columns: 1fr !important; }
                    .secondary-grid { grid-template-columns: 1fr !important; }
                    .cta-card { padding: 40px 20px !important; }
                    .footer-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>

            {/* Navbar */}
            <nav style={{ padding: '24px 0', borderBottom: '1px solid #F1F5F9' }}>
                <div className="container flex align-center justify-between">
                    <div className="flex align-center gap-8">
                        <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Monitor size={18} color="white" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: '20px' }}>LearnFlow</span>
                    </div>
                    <div className="flex gap-40 nav-links">
                        {['Platform', 'Features', 'Pricing', 'Resources'].map(item => (
                            <span key={item} style={{ fontSize: '14px', fontWeight: 600, color: '#64748B', cursor: 'pointer' }}>{item}</span>
                        ))}
                    </div>
                    <div className="flex align-center gap-24">
                        <span className="mobile-hide" style={{ fontSize: '14px', fontWeight: 700 }}>Login</span>
                        <button className="btn btn-primary" style={{ padding: '12px 24px' }}>Get Started</button>
                    </div>
                </div>
            </nav>

            {/* Hero Header */}
            <div className="section" style={{ textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ background: '#EFF6FF', color: '#0066FF', padding: '6px 16px', borderRadius: '99px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', width: 'fit-content', margin: '0 auto 32px' }}>
                        NEW PLATFORM SOLUTIONS
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '64px', fontWeight: 900, marginBottom: '32px', letterSpacing: '-2px', lineHeight: 1.1 }}>
                        Empower Your Learning <br />
                        Journey with <span style={{ color: '#0066FF' }}>Next-Gen Tools</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.6, marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
                        A unified platform designed for modern education. Standardized for learners. Scale your online academy with tools that drive engagement and results.
                    </p>
                    <div className="flex hero-btns" style={{ justifyContent: 'center', gap: '16px' }}>
                        <button className="btn btn-primary" style={{ padding: '18px 32px', borderRadius: '12px', fontSize: '16px' }}>
                            Start Building Free <ArrowRight size={20} />
                        </button>
                        <button className="btn btn-outline" style={{ padding: '18px 32px', borderRadius: '12px', fontSize: '16px' }}>
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Feature Section 1: Virtual Classrooms */}
            <div className="section">
                <div className="container grid features-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                    <div>
                        <div style={{ background: '#EFF6FF', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <Monitor size={20} color="#0066FF" />
                        </div>
                        <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>Interactive Virtual Classrooms Built for Participation</h2>
                        <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6, marginBottom: '32px' }}>
                            Say goodbye to static video calls. Our classroom environment features synchronized whiteboards, breakout rooms, and live polling to keep every student engaged.
                        </p>
                        <div className="flex column gap-16" style={{ marginBottom: '32px' }}>
                            {['High-fidelity Crystal Clear Audio', 'Real-time Collaborative Whiteboards', 'Automated Attendance Tracking'].map((item, i) => (
                                <div key={i} className="flex align-center gap-12" style={{ fontSize: '14px', fontWeight: 600 }}>
                                    <CheckCircle2 size={18} color="#0066FF" /> {item}
                                </div>
                            ))}
                        </div>
                        <span style={{ color: '#0066FF', fontWeight: 800, fontSize: '14px', cursor: 'pointer', borderBottom: '2px solid #0066FF', paddingBottom: '2px' }}>Learn more about virtual classrooms →</span>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" alt="Class" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.1)' }} />
                    </div>
                </div>
            </div>

            {/* Feature Section 2: AI Assistant */}
            <div className="section" style={{ background: '#F8FAFC' }}>
                <div className="container grid features-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" alt="AI" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.1)' }} />
                    </div>
                    <div>
                        <div style={{ background: '#EFF6FF', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <Bot size={20} color="#0066FF" />
                        </div>
                        <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>Your Personal 24/7 AI Learning Assistant</h2>
                        <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6, marginBottom: '32px' }}>
                            Personalize instruction at scale. Our AI analyzes student progress to offer tailored study summaries, answer instant questions, and suggest areas for improvement.
                        </p>
                        <div className="flex column gap-16" style={{ marginBottom: '32px' }}>
                            {['Instant Feedback on Assignments', 'Automated Lecture Grading Summaries', 'AI-generated Practice Quizzes'].map((item, i) => (
                                <div key={i} className="flex align-center gap-12" style={{ fontSize: '14px', fontWeight: 600 }}>
                                    <Sparkles size={18} color="#0066FF" /> {item}
                                </div>
                            ))}
                        </div>
                        <span style={{ color: '#0066FF', fontWeight: 800, fontSize: '14px', cursor: 'pointer', borderBottom: '2px solid #0066FF', paddingBottom: '2px' }}>Discover AI Features →</span>
                    </div>
                </div>
            </div>

            {/* Gamification Section (Dark) */}
            <div className="section" style={{ background: '#0F172A', color: 'white' }}>
                <div className="container grid features-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                        {[
                            { title: 'Top 1% Rank', sub: 'Global Leaderboard', icon: <Trophy size={32} color="#FACC15" /> },
                            { title: '14 Day Streak', sub: 'Weekly Goal', icon: <Zap size={32} color="#0066FF" /> },
                            { title: 'Quiz Master', sub: '12 Perfect Scores', icon: <Sparkles size={32} color="#22C55E" /> },
                            { title: 'Course Cert', sub: 'Foundations Done', icon: <CheckCircle2 size={32} color="#A855F7" /> },
                        ].map((card, i) => (
                            <div key={i} className="card" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div className="flex justify-center" style={{ marginBottom: '16px' }}>{card.icon}</div>
                                <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '4px' }}>{card.title}</div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{card.sub}</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div style={{ background: 'rgba(255,255,255,0.1)', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <Trophy size={20} color="white" />
                        </div>
                        <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px', color: 'white' }}>Gamified Experience that Motivates</h2>
                        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '32px' }}>
                            Turn learning into an adventure. Our gamification engine uses points, badges, and milestones to keep students excited and coming back for more.
                        </p>
                        <div className="flex column gap-16" style={{ marginBottom: '40px' }}>
                            {['Customizable Milestone Badges', 'Social Competitive Study Groups', 'Digital Certificates of Excellence'].map((item, i) => (
                                <div key={i} className="flex align-center gap-12" style={{ fontSize: '14px', fontWeight: 600 }}>
                                    <Star size={18} color="#FACC15" fill="#FACC15" /> {item}
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-primary" style={{ padding: '14px 28px' }}>Explore Gamification</button>
                    </div>
                </div>
            </div>

            {/* Secondary Features Grid */}
            <div className="section" style={{ borderBottom: '1px solid #F1F5F9' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '64px' }}>Everything Else You Need</h2>
                    <div className="grid secondary-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
                        {[
                            { title: 'Mobile Learning', desc: 'Dedicated iOS and Android apps for learning anything, anytime, anywhere.', icon: <Smartphone size={24} color="#0066FF" /> },
                            { title: 'Secure Payments', desc: 'Integrated with Stripe and PayPal support for global course sales and subscriptions.', icon: <CreditCard size={24} color="#0066FF" /> },
                            { title: 'Custom Branding', desc: 'Make it your own with your logo, colors, and custom domain to match your brand.', icon: <ShieldCheck size={24} color="#0066FF" /> },
                            { title: 'Powerful API', desc: 'Integrate with the tools you already use through our robust REST API.', icon: <Code size={24} color="#0066FF" /> },
                        ].map((f, i) => (
                            <div key={i} style={{ textAlign: 'left', padding: '32px', background: '#F8FAFC', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
                                <div style={{ background: 'white', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>{f.icon}</div>
                                <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px' }}>{f.title}</h3>
                                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.5 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Brand CTA */}
            <div className="section">
                <div className="container">
                    <div className="cta-card" style={{ background: 'linear-gradient(135deg, #0066FF 0%, #3B82F6 100%)', borderRadius: '48px', padding: '100px', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
                        <h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '24px', color: 'white' }}>Ready to Transform Your <br /> Education Strategy?</h2>
                        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                            Join 10,000+ educators who are already using LearnFlow to power their online courses.
                        </p>
                        <div className="flex hero-btns" style={{ justifyContent: 'center', gap: '20px' }}>
                            <button className="btn" style={{ background: 'white', color: '#0066FF', borderRadius: '12px', padding: '18px 40px' }}>Start Your Free Trial</button>
                            <button className="btn" style={{ background: 'transparent', color: 'white', border: '1px solid white', borderRadius: '12px', padding: '18px 40px' }}>Talk to Sales</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ background: 'white', borderTop: '1px solid #F1F5F9', padding: '80px 0 40px' }}>
                <div className="container grid footer-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                    <div>
                        <div className="flex align-center gap-8" style={{ marginBottom: '20px' }}>
                            <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Monitor size={18} color="white" />
                            </div>
                            <span style={{ fontWeight: 800, fontSize: '20px' }}>LearnFlow</span>
                        </div>
                        <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.6, marginBottom: '32px' }}>
                            Building the future of digital education platform, one success at a time.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, marginBottom: '24px' }}>Product</h4>
                        <div className="flex column gap-16" style={{ color: '#64748B', fontSize: '14px' }}>
                            <span>Features</span>
                            <span>Integrations</span>
                            <span>Enterprise</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, marginBottom: '24px' }}>Support</h4>
                        <div className="flex column gap-16" style={{ color: '#64748B', fontSize: '14px' }}>
                            <span>Help Center</span>
                            <span>Academy</span>
                            <span>Contact</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, marginBottom: '24px' }}>Company</h4>
                        <div className="flex column gap-16" style={{ color: '#64748B', fontSize: '14px' }}>
                            <span>About Us</span>
                            <span>Careers</span>
                            <span>Legal</span>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', fontSize: '12px', color: '#94A3B8' }}>
                    <span>© 2024 LearnFlow. All rights reserved.</span>
                    <div className="flex gap-32">
                        <span>Privacy</span>
                        <span>Terms</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LearnFlowPlatform;
