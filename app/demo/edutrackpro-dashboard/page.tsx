"use client";
import React from 'react';
import Link from 'next/link';
import {
    Bell,
    ChevronDown,
    CheckCircle2,
    Zap,
    Trophy,
    Clock,
    BookOpen,
    ArrowUpRight,
    Circle,
    Lock,
    Lightbulb,
    Download,
    Calendar,
    Layout,
    Sparkles,
    Video
} from 'lucide-react';

const EduTrackProDashboard = () => {
    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            <style jsx global>{`
                @media (max-width: 1200px) {
                    .dashboard-grid { grid-template-columns: 1fr !important; }
                    .side-column { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
                }
                @media (max-width: 1024px) {
                    .nav-links-main { display: none !important; }
                    .progress-card { grid-template-columns: 1fr !important; gap: 24px !important; }
                    .mobile-hide { display: none !important; }
                    .stats-mini-grid { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 768px) {
                    .side-column { grid-template-columns: 1fr !important; }
                    .stats-mini-grid { grid-template-columns: 1fr !important; }
                    .header-flex { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
                    .nav-container { padding: 0 20px !important; }
                    .main-container { padding: 20px !important; }
                    .hero-welcome h1 { font-size: 28px !important; }
                    .badges-grid { grid-template-columns: 1fr 1fr !important; }
                }
            `}</style>

            {/* Navbar */}
            <nav style={{ background: 'white', borderBottom: '1px solid #E2E8F0', padding: '16px 0', position: 'sticky', top: 0, zIndex: 100 }}>
                <div className="nav-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Layout size={18} color="white" />
                            </div>
                            <span style={{ fontWeight: 800, fontSize: '20px' }}>EduTrack<span style={{ color: '#0066FF' }}>Pro</span></span>
                        </div>
                        <div className="nav-links-main" style={{ display: 'flex', gap: '32px' }}>
                            {['Dashboard', 'Courses', 'Resources', 'Support'].map((item, i) => (
                                <span key={item} style={{ fontSize: '14px', fontWeight: 600, color: i === 0 ? '#0066FF' : '#64748B', cursor: 'pointer' }}>{item}</span>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                        <Bell className="mobile-hide" size={20} color="#64748B" />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ textAlign: 'right' }} className="mobile-hide">
                                <div style={{ fontSize: '14px', fontWeight: 700 }}>Alex Thompson</div>
                                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Grade 10 • Senior High</div>
                            </div>
                            <img src="https://i.pravatar.cc/100?u=alex" alt="Alex" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="main-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px' }}>
                <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px', alignItems: 'start' }}>

                    {/* Left Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <div className="hero-welcome">
                            <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '8px', letterSpacing: '-1px' }}>Welcome back, Alex!</h1>
                            <p style={{ fontSize: '16px', color: '#64748B', fontWeight: 500 }}>You&apos;re making incredible progress this semester.</p>
                        </div>

                        {/* Notification Banner */}
                        <div className="header-flex" style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ background: '#0066FF', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CheckCircle2 size={24} color="white" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1E40AF' }}>Session Completed!</div>
                                    <div style={{ fontSize: '13px', color: '#3B82F6', fontWeight: 600 }}>You are eligible to upgrade your level status.</div>
                                </div>
                            </div>
                            <Link
                                href="/upgrade"
                                style={{ background: '#60A5FA', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', display: 'inline-block' }}
                            >
                                Upgrade Now
                            </Link>
                        </div>

                        {/* Progress Card */}
                        <div className="progress-card" style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '32px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '48px' }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
                                    <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Grade 11 Progress</h3>
                                    <span style={{ fontSize: '18px', fontWeight: 800, color: '#0066FF' }}>85%</span>
                                </div>
                                <div style={{ height: '12px', background: '#F1F5F9', borderRadius: '6px', overflow: 'hidden', marginBottom: '16px' }}>
                                    <div style={{ width: '85%', height: '100%', background: '#0066FF', borderRadius: '6px' }}></div>
                                </div>
                                <p style={{ fontSize: '13px', color: '#64748B', fontWeight: 500 }}>Only 12 more credits to reach the next milestone!</p>

                                <div className="stats-mini-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '40px' }}>
                                    <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                                        <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, marginBottom: '8px' }}>Weekly Streak</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Zap size={18} color="#0066FF" />
                                            <span style={{ fontWeight: 800 }}>14 Days</span>
                                        </div>
                                    </div>
                                    <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                                        <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, marginBottom: '8px' }}>Global Rank</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Trophy size={18} color="#FACC15" />
                                            <span style={{ fontWeight: 800 }}>#122</span>
                                        </div>
                                    </div>
                                    <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                                        <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, marginBottom: '8px' }}>Hours Logged</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Clock size={18} color="#0066FF" />
                                            <span style={{ fontWeight: 800 }}>42h</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-hide" style={{ background: '#EFF6FF', borderRadius: '20px', padding: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ background: 'white', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', boxShadow: '0 8px 16px -4px rgba(0,102,255,0.1)' }}>
                                    <Sparkles size={32} color="#0066FF" />
                                </div>
                                <h4 style={{ fontWeight: 800, marginBottom: '8px' }}>AI Companion</h4>
                                <p style={{ fontSize: '12px', color: '#3B82F6', fontWeight: 600, lineHeight: 1.5 }}>Alex, you&apos;re doing great in Math. Want to tackle a practice quiz?</p>
                                <button style={{ marginTop: '16px', background: '#0066FF', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '12px', fontWeight: 800 }}>Chat with AI</button>
                            </div>
                        </div>

                        {/* Recent Activity Grid */}
                        <div className="stats-mini-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                            <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '24px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '24px' }}>Recent Courses</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {[
                                        { title: 'Advanced Calculus II', time: 'Last studied 2h ago', progress: 65, color: '#0066FF' },
                                        { title: 'Intro to Philosophy', time: 'Last studied 5h ago', progress: 42, color: '#059669' },
                                        { title: 'Physics Fundamentals', time: 'Last studied yesterday', progress: 91, color: '#A855F7' },
                                    ].map((course, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '12px' }}>
                                            <div style={{ background: `${course.color}20`, width: '10px', height: '10px', borderRadius: '50%', marginTop: '5px', flexShrink: 0 }}></div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                                    <div style={{ fontSize: '14px', fontWeight: 700 }}>{course.title}</div>
                                                    <div style={{ fontSize: '12px', fontWeight: 800 }}>{course.progress}%</div>
                                                </div>
                                                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 500, marginBottom: '8px' }}>{course.time}</div>
                                                <div style={{ height: '4px', background: '#F1F5F9', borderRadius: '2px', overflow: 'hidden' }}>
                                                    <div style={{ width: `${course.progress}%`, height: '100%', background: course.color }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '24px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '24px' }}>Quick Actions</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                    {[
                                        { label: 'Join Classroom', icon: <Video size={18} />, color: '#0066FF' },
                                        { label: 'View Schedule', icon: <Calendar size={18} />, color: '#059669' },
                                        { label: 'Cloud Storage', icon: <Layout size={18} />, color: '#A855F7' },
                                        { label: 'Help Center', icon: <Lightbulb size={18} />, color: '#F59E0B' },
                                    ].map((action, i) => (
                                        <div key={i} style={{ padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '8px', cursor: 'pointer', textAlign: 'center' }}>
                                            <div style={{ color: action.color, display: 'flex', justifyContent: 'center' }}>{action.icon}</div>
                                            <div style={{ fontSize: '12px', fontWeight: 700 }}>{action.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Recent Grades Table (Reduced for Simplicity) */}
                        <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '24px' }}>Achievement Badges</h3>
                            <div className="badges-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                                {[
                                    { name: 'Early Bird', icon: <Sparkles size={20} color="#0066FF" /> },
                                    { name: 'Quiz Master', icon: <Trophy size={20} color="#FACC15" /> },
                                    { name: '10 Day Streak', icon: <Zap size={20} color="#EF4444" /> },
                                    { name: 'Certified', icon: <CheckCircle2 size={20} color="#22C55E" /> },
                                ].map((badge, i) => (
                                    <div key={i} style={{ textAlign: 'center', padding: '16px', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>{badge.icon}</div>
                                        <div style={{ fontSize: '11px', fontWeight: 700 }}>{badge.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="side-column" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {/* Upcoming Events */}
                        <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '24px' }}>Upcoming</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    { title: 'Math Final Exam', date: 'Tomorrow, 09:00 AM', status: 'High Priority', color: '#EF4444' },
                                    { title: 'Physics Workshop', date: 'Thursday, 02:00 PM', status: 'Online', color: '#0066FF' },
                                ].map((event, i) => (
                                    <div key={i} style={{ borderLeft: `3px solid ${event.color}`, paddingLeft: '16px' }}>
                                        <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>{event.title}</div>
                                        <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600, marginBottom: '4px' }}>{event.date}</div>
                                        <div style={{ fontSize: '10px', fontWeight: 800, color: event.color, textTransform: 'uppercase' }}>{event.status}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Learning Path */}
                        <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '24px' }}>Learning Path</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                <div style={{ position: 'relative', display: 'flex', gap: '16px', paddingBottom: '32px' }}>
                                    <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '0', width: '2px', background: '#E2E8F0' }}></div>
                                    <CheckCircle2 size={24} color="#22C55E" style={{ position: 'relative', zIndex: 1, background: 'white' }} />
                                    <div>
                                        <div style={{ fontSize: '10px', fontWeight: 800, color: '#22C55E', textTransform: 'uppercase', marginBottom: '4px' }}>COMPLETED</div>
                                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#1E293B' }}>Foundations of Logic</div>
                                    </div>
                                </div>
                                <div style={{ position: 'relative', display: 'flex', gap: '16px', paddingBottom: '32px' }}>
                                    <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '0', width: '2px', background: '#E2E8F0' }}></div>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#0066FF', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, position: 'relative' }}>
                                        <div style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%' }}></div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '10px', fontWeight: 800, color: '#0066FF', textTransform: 'uppercase', marginBottom: '4px' }}>CURRENT LEVEL</div>
                                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#1E293B' }}>Advanced Algebra I</div>
                                    </div>
                                </div>
                                <div style={{ position: 'relative', display: 'flex', gap: '16px' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, position: 'relative' }}>
                                        <Lock size={12} color="#94A3B8" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '4px' }}>LOCKED</div>
                                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#64748B' }}>Principles of Calculus</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Study Tip */}
                        <div style={{ background: '#0066FF', borderRadius: '24px', padding: '24px', color: 'white' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <Lightbulb size={24} />
                                <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>STUDY TIP</span>
                            </div>
                            <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 500, marginBottom: '24px' }}>
                                &quot;Taking short breaks every 45 minutes can improve your focus and retention by up to 20%.&quot;
                            </p>
                            <div style={{ fontSize: '13px', fontWeight: 800, textDecoration: 'underline', color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>Read more techniques</div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer style={{ background: 'white', borderTop: '1px solid #F1F5F9', padding: '60px 0' }}>
                <div className="nav-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
                    <p style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 500, marginBottom: '16px' }}>© 2024 EduTrack Pro LMS. All rights reserved.</p>
                    <div className="flex justify-center gap-32" style={{ fontSize: '13px', fontWeight: 700, color: '#64748B' }}>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Accessibility</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EduTrackProDashboard;
