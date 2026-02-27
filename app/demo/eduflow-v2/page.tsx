"use client";
import React from 'react';
import {
    CheckCircle2,
    ArrowRight,
    PlayCircle,
    Users,
    BookOpen,
    Star,
    Globe,
    Monitor,
    Trophy,
    Zap,
    Lock
} from 'lucide-react';

const EduflowV2 = () => {
    return (
        <div style={{ background: 'white', color: '#1E293B', fontFamily: 'Inter, sans-serif' }}>
            {/* Navbar */}
            <nav style={{ padding: '20px 0', borderBottom: '1px solid #F1F5F9', position: 'sticky', top: 0, background: 'white', zIndex: 100 }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ background: '#0066FF', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <BookOpen size={16} color="white" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: '20px' }}>Eduflow</span>
                    </div>

                    <div style={{ display: 'flex', gap: '40px' }}>
                        {['Features', 'Solutions', 'Pricing', 'Resources'].map(item => (
                            <span key={item} style={{ fontSize: '14px', fontWeight: 600, color: '#64748B', cursor: 'pointer' }}>{item}</span>
                        ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>Login</span>
                        <button style={{ background: '#0066FF', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 24px', fontWeight: 700, fontSize: '14px' }}>Sign Up</button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0066FF', marginBottom: '32px' }}>
                            <CheckCircle2 size={16} />
                            <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Trusted by 12.0m Schools Worldwide</span>
                        </div>
                        <h1 style={{ fontSize: '72px', fontWeight: 900, marginBottom: '32px', letterSpacing: '-2.5px', lineHeight: 0.9 }}>
                            Empowering the <span style={{ color: '#0066FF' }}>Next Generation</span> of Learners.
                        </h1>
                        <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.6, marginBottom: '48px', maxWidth: '540px' }}>
                            A unified platform for K-12 and Higher Ed virtual excellence. Real-time collaboration, grade-specific pathways, and AI-driven insights.
                        </p>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <button style={{ background: '#0066FF', color: 'white', border: 'none', borderRadius: '12px', padding: '18px 32px', fontWeight: 700, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                Start Learning Free <ArrowRight size={20} />
                            </button>
                            <button style={{ background: 'white', color: '#1E293B', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '18px 32px', fontWeight: 700, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                Watch Demo <PlayCircle size={20} />
                            </button>
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.1)' }} />
                        {/* Float Card */}
                        <div style={{ position: 'absolute', bottom: '40px', left: '-40px', background: 'white', padding: '24px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #F1F5F9' }}>
                            <div style={{ background: '#F0FDF4', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Zap size={24} color="#22C55E" />
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8' }}>Quick Performance</div>
                                <div style={{ fontSize: '20px', fontWeight: 800 }}>+42% Higher Engagement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Grid Section */}
            <div style={{ padding: '100px 0', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#0066FF', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>THE PLATFORM</div>
                    <h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '64px' }}>Built for Virtual Excellence</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                        {[
                            { title: 'Virtual Classrooms', desc: 'Integrated HD video, interactive whiteboards, and breakout rooms designed specifically for education.', icon: <Monitor size={24} color="#0066FF" /> },
                            { title: 'Grade-Specific Paths', desc: 'Curated learning journeys tailored from Elementary to Higher Ed, ensuring age-appropriate engagement.', icon: <CheckCircle2 size={24} color="#0066FF" /> },
                            { title: 'Achievement Badges', desc: 'Motivate students through gamified rewards, milestone tracking, and competitive peer leaderboards.', icon: <Trophy size={24} color="#0066FF" /> },
                        ].map((feature, i) => (
                            <div key={i} style={{ background: 'white', padding: '48px', borderRadius: '32px', textAlign: 'left', border: '1px solid transparent', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                                <div style={{ background: '#EFF6FF', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>{feature.title}</h3>
                                <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6 }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Roadmap Section */}
            <div style={{ padding: '120px 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '24px' }}>A Roadmap to Success</h2>
                        <p style={{ color: '#64748B', fontSize: '16px', lineHeight: 1.6, marginBottom: '40px' }}>
                            We don&apos;t just host classes; we build careers. Our platform automatically maps curriculum to future goals, helping students understand the &quot;why&quot; behind their learning.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            {[
                                { step: '1', title: 'Initial Assessment', desc: 'Identify strengths and learning gaps instantly.' },
                                { step: '2', title: 'Curated Curriculum', desc: 'AI-driven lesson plans that adapt to student pace.' },
                                { step: '3', title: 'Certification', desc: 'Recognized badges and credentials for every milestone.' },
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ background: '#EFF6FF', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '14px', fontWeight: 800, color: '#0066FF' }}>
                                        {item.step}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '4px' }}>{item.title}</div>
                                        <div style={{ fontSize: '14px', color: '#64748B' }}>{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ background: 'white', borderRadius: '40px', padding: '48px', border: '1px solid #E2E8F0', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', alignItems: 'center' }}>
                            <div>
                                <div style={{ fontSize: '18px', fontWeight: 800 }}>Learning Journey</div>
                                <div style={{ fontSize: '12px', color: '#94A3B8' }}>Grade 10 - Advanced Physics</div>
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 800, color: '#0066FF' }}>65% Complete</div>
                        </div>
                        {/* Visual Roadmap */}
                        <div style={{ position: 'relative', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '4px', background: '#F1F5F9' }}></div>
                            <div style={{ position: 'absolute', top: '50%', left: '0', width: '65%', height: '4px', background: '#0066FF' }}></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'relative' }}>
                                <div style={{ width: '48px', height: '48px', background: '#0066FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(0,102,255,0.4)' }}>
                                    <Star size={20} color="white" />
                                </div>
                                <div style={{ width: '48px', height: '48px', background: '#F1F5F9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Lock size={20} color="#94A3B8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div style={{ padding: '100px 0', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
                    <h2 style={{ fontSize: '40px', fontWeight: 900, textAlign: 'center', marginBottom: '64px' }}>What Our Students Say</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                        {[
                            { name: 'Leo Martinez', role: 'K-12 School Sophomore', text: 'Eduflow made remote learning feel like being in the actual classroom. I love the achievements badges!', img: 'https://i.pravatar.cc/100?u=leo' },
                            { name: 'Sarah Jenkins', role: 'University Senior', text: 'As a university student, the career-mapped pathways helped me choose the right electives for my future job.', img: 'https://i.pravatar.cc/100?u=sarah' },
                            { name: 'Dr. Robert Chen', role: 'Computer Science Dept.', text: 'Teaching via Eduflow has doubled my student engagement levels. The whiteboard tools are exceptional!', img: 'https://i.pravatar.cc/100?u=robert' },
                        ].map((t, i) => (
                            <div key={i} style={{ background: 'white', padding: '40px', borderRadius: '32px', border: '1px solid #E2E8F0' }}>
                                <div style={{ display: 'flex', gap: '4px', color: '#FACC15', marginBottom: '24px' }}>
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="#FACC15" />)}
                                </div>
                                <p style={{ color: '#1E293B', fontSize: '15px', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '32px' }}>&quot;{t.text}&quot;</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <img src={t.img} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: 800 }}>{t.name}</div>
                                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div style={{ padding: '120px 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
                    <div style={{ background: '#0066FF', borderRadius: '48px', padding: '80px', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
                        <h2 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '24px', color: 'white' }}>Ready to Transform Your Classroom?</h2>
                        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>Join thousands of educators and students already building the future of learning on Eduflow.</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <button style={{ background: 'white', color: '#0066FF', border: 'none', borderRadius: '12px', padding: '18px 40px', fontWeight: 700, fontSize: '16px' }}>Get Started for Free</button>
                            <button style={{ background: 'transparent', color: 'white', border: '2px solid white', borderRadius: '12px', padding: '18px 40px', fontWeight: 700, fontSize: '16px' }}>Contact Sales</button>
                        </div>
                        <div style={{ position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1 }}>
                            <BookOpen size={240} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ background: 'white', borderTop: '1px solid #F1F5F9', padding: '100px 0 40px' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '80px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                            <div style={{ background: '#0066FF', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <BookOpen size={16} color="white" />
                            </div>
                            <span style={{ fontWeight: 800, fontSize: '20px' }}>Eduflow</span>
                        </div>
                        <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.6, marginBottom: '32px', maxWidth: '300px' }}>
                            The world&apos;s leading LMS designed for student success and teacher efficiency in the digital age.
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
                            <span>Pricing</span>
                            <span>Security</span>
                            <span>Mobile App</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#1E293B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '32px' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#64748B', fontSize: '14px' }}>
                            <span>About Us</span>
                            <span>Careers</span>
                            <span>Blog</span>
                            <span>Contact</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#1E293B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '32px' }}>Resources</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#64748B', fontSize: '14px' }}>
                            <span>Help Center</span>
                            <span>Community</span>
                            <span>Privacy</span>
                            <span>Terms</span>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '1280px', margin: '100px auto 0', padding: '0 32px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '40px', fontSize: '12px', color: '#94A3B8' }}>
                    <span>© 2024 Eduflow LMS. All rights reserved.</span>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        <span>Privacy Policy</span>
                        <span>Cookie Settings</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EduflowV2;
