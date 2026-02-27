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
    Code
} from 'lucide-react';

const LearnFlowPlatform = () => {
    return (
        <div style={{ background: 'white', color: '#0F172A', fontFamily: 'Inter, sans-serif' }}>
            {/* Navbar */}
            <nav style={{ padding: '24px 0', borderBottom: '1px solid #F1F5F9' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Monitor size={18} color="white" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: '20px' }}>LearnFlow</span>
                    </div>
                    <div style={{ display: 'flex', gap: '40px' }}>
                        {['Platform', 'Features', 'Pricing', 'Resources'].map(item => (
                            <span key={item} style={{ fontSize: '14px', fontWeight: 600, color: '#64748B', cursor: 'pointer' }}>{item}</span>
                        ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 700 }}>Login</span>
                        <button style={{ background: '#0066FF', color: 'white', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 700, fontSize: '14px' }}>Get Started</button>
                    </div>
                </div>
            </nav>

            {/* Hero Header */}
            <div style={{ padding: '100px 0', textAlign: 'center' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ background: '#EFF6FF', color: '#0066FF', padding: '6px 16px', borderRadius: '99px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', width: 'fit-content', margin: '0 auto 32px' }}>
                        NEW PLATFORM SOLUTIONS
                    </div>
                    <h1 style={{ fontSize: '64px', fontWeight: 900, marginBottom: '32px', letterSpacing: '-2px', lineHeight: 1.1 }}>
                        Empower Your Learning <br />
                        Journey with <span style={{ color: '#0066FF' }}>Next-Gen Tools</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.6, marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
                        A unified platform designed for modern education. Standardized for learners. Scale your online academy with tools that drive engagement and results.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                        <button style={{ background: '#0066FF', color: 'white', border: 'none', borderRadius: '12px', padding: '18px 32px', fontWeight: 700, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            Start Building Free <ArrowRight size={20} />
                        </button>
                        <button style={{ background: 'white', color: '#1F2937', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '18px 32px', fontWeight: 700, fontSize: '16px' }}>
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Feature Section 1: Virtual Classrooms */}
            <div style={{ padding: '80px 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                    <div>
                        <div style={{ background: '#EFF6FF', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <Monitor size={20} color="#0066FF" />
                        </div>
                        <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>Interactive Virtual Classrooms Built for Participation</h2>
                        <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6, marginBottom: '32px' }}>
                            Say goodbye to static video calls. Our classroom environment features synchronized whiteboards, breakout rooms, and live polling to keep every student engaged.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                            {['High-fidelity Crystal Clear Audio', 'Real-time Collaborative Whiteboards', 'Automated Attendance Tracking'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 600 }}>
                                    <CheckCircle2 size={18} color="#0066FF" /> {item}
                                </div>
                            ))}
                        </div>
                        <span style={{ color: '#0066FF', fontWeight: 800, fontSize: '14px', cursor: 'pointer', borderBottom: '2px solid #0066FF', paddingBottom: '2px' }}>Learn more about virtual classrooms →</span>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.1)' }} />
                    </div>
                </div>
            </div>

            {/* Feature Section 2: AI Assistant */}
            <div style={{ padding: '80px 0', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.1)' }} />
                        <div style={{ position: 'absolute', top: '40px', right: '-40px', background: '#0066FF', padding: '24px', borderRadius: '20px', color: 'white', width: '200px' }}>
                            <div style={{ fontSize: '24px', fontWeight: 900, marginBottom: '4px' }}>88%</div>
                            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>Faster Grading</div>
                        </div>
                    </div>
                    <div>
                        <div style={{ background: '#EFF6FF', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <Bot size={20} color="#0066FF" />
                        </div>
                        <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>Your Personal 24/7 AI Learning Assistant</h2>
                        <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6, marginBottom: '32px' }}>
                            Personalize instruction at scale. Our AI analyzes student progress to offer tailored study summaries, answer instant questions, and suggest areas for improvement.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                            {['Instant Feedback on Assignments', 'Automated Lecture Grading Summaries', 'AI-generated Practice Quizzes'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 600 }}>
                                    <Sparkles size={18} color="#0066FF" /> {item}
                                </div>
                            ))}
                        </div>
                        <span style={{ color: '#0066FF', fontWeight: 800, fontSize: '14px', cursor: 'pointer', borderBottom: '2px solid #0066FF', paddingBottom: '2px' }}>Discover AI Features →</span>
                    </div>
                </div>
            </div>

            {/* Feature Section 3: Analytics */}
            <div style={{ padding: '80px 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                    <div>
                        <div style={{ background: '#EFF6FF', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <LineChart size={20} color="#0066FF" />
                        </div>
                        <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>Advanced Progress Tracking & Analytics</h2>
                        <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6, marginBottom: '32px' }}>
                            Data-driven insights to help students and instructors thrive. Monitor completion rates, engagement metrics, and academic performance in one unified dashboard.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
                            <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                                <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>AVG SCORE</div>
                                <div style={{ fontSize: '24px', fontWeight: 900 }}>84%</div>
                            </div>
                            <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                                <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>ENROLLMENTS</div>
                                <div style={{ fontSize: '24px', fontWeight: 900 }}>12.4K</div>
                            </div>
                        </div>
                        <span style={{ color: '#0066FF', fontWeight: 800, fontSize: '14px', cursor: 'pointer', borderBottom: '2px solid #0066FF', paddingBottom: '2px' }}>View Analytics Demo →</span>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.1)' }} />
                    </div>
                </div>
            </div>

            {/* Gamification Section (Dark) */}
            <div style={{ background: '#0F172A', padding: '100px 0', color: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                        {[
                            { title: 'Top 1% Rank', sub: 'Global Leaderboard', icon: <Trophy size={32} color="#FACC15" /> },
                            { title: '14 Day Streak', sub: 'Weekly Goal', icon: <Zap size={32} color="#0066FF" /> },
                            { title: 'Quiz Master', sub: '12 Perfect Scores', icon: <Sparkles size={32} color="#22C55E" /> },
                            { title: 'Course Cert', sub: 'Foundations Done', icon: <CheckCircle2 size={32} color="#A855F7" /> },
                        ].map((card, i) => (
                            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>{card.icon}</div>
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
                            Turn learning into an adventure. Our gamification engine uses points, badges, and milestones to keep students excited and coming back for more, every single day!
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                            {['Customizable Milestone Badges', 'Social Competitive Study Groups', 'Digital Certificates of Excellence'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 600 }}>
                                    <Star size={18} color="#FACC15" fill="#FACC15" /> {item}
                                </div>
                            ))}
                        </div>
                        <button style={{ background: '#0066FF', color: 'white', border: 'none', borderRadius: '12px', padding: '14px 28px', fontWeight: 700, fontSize: '15px' }}>Explore Gamification</button>
                    </div>
                </div>
            </div>

            {/* Secondary Features Grid */}
            <div style={{ padding: '100px 0', borderBottom: '1px solid #F1F5F9' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '64px' }}>Everything Else You Need</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
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
            <div style={{ padding: '120px 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ background: 'linear-gradient(135deg, #0066FF 0%, #3B82F6 100%)', borderRadius: '48px', padding: '100px', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
                        <h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '24px', color: 'white' }}>Ready to Transform Your <br /> Education Strategy?</h2>
                        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                            Join 10,000+ educators who are already using LearnFlow to power their online courses.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <button style={{ background: 'white', color: '#0066FF', border: 'none', borderRadius: '12px', padding: '18px 40px', fontWeight: 700, fontSize: '16px' }}>Start Your Free Trial</button>
                            <button style={{ background: 'transparent', color: 'white', border: '1px solid white', borderRadius: '12px', padding: '18px 40px', fontWeight: 700, fontSize: '16px' }}>Talk to Sales</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ background: 'white', borderTop: '1px solid #F1F5F9', padding: '80px 0 40px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '40px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                            <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Monitor size={18} color="white" />
                            </div>
                            <span style={{ fontWeight: 800, fontSize: '20px' }}>LearnFlow</span>
                        </div>
                        <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.6, marginBottom: '32px', maxWidth: '240px' }}>
                            Building the future of digital education platform, one Student success at a time. Trusted by educators globally.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, marginBottom: '24px' }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#64748B', fontSize: '14px' }}>
                            <span>Features</span>
                            <span>Integrations</span>
                            <span>Enterprise</span>
                            <span>Updates</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, marginBottom: '24px' }}>Support</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#64748B', fontSize: '14px' }}>
                            <span>Help Center</span>
                            <span>Academy</span>
                            <span>Community</span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, marginBottom: '24px' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#64748B', fontSize: '14px' }}>
                            <span>About Us</span>
                            <span>Careers</span>
                            <span>Blog</span>
                            <span>Legal</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, marginBottom: '24px' }}>Social</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#64748B', fontSize: '14px' }}>
                            <span>Twitter</span>
                            <span>LinkedIn</span>
                            <span>YouTube</span>
                            <span>Github</span>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '1200px', margin: '80px auto 0', padding: '0 24px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '40px', fontSize: '12px', color: '#94A3B8' }}>
                    <span>© 2024 LearnFlow. All rights reserved.</span>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookie Policy</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LearnFlowPlatform;
