"use client";
import { useState } from 'react';
import Link from 'next/link';
import {
    Layout,
    Bell,
    Search,
    ChevronDown,
    CheckCircle2,
    BarChart3,
    Clock,
    Zap,
    Trophy,
    GraduationCap,
    BookOpen,
    Video,
    Download,
    Calendar,
    Lightbulb,
    ArrowUpRight,
    Circle,
    Lock,
    Bot
} from 'lucide-react';
import AIBotWidget from '@/components/AIBotWidget';

export default function Dashboard() {
    const [progress] = useState(85);

    const badges = [
        { name: 'Early Bird', icon: <Zap size={24} color="#3B82F6" />, date: 'Unlocked May 12' },
        { name: 'Perfect Quiz', icon: <Trophy size={24} color="#EAB308" />, date: 'Unlocked Apr 28' },
        { name: 'Course Finisher', icon: <CheckCircle2 size={24} color="#22C55E" />, date: 'Unlocked Apr 15' },
        { name: 'Master Mind', icon: <Lock size={24} color="#94A3B8" />, date: 'Reach 100%', locked: true },
    ];

    const grades = [
        { subject: 'Biology', assignment: 'Cell Structure Quiz', date: 'May 18, 2024', grade: 'A-', color: '#3B82F6' },
        { subject: 'History', assignment: 'Renaissance Essay', date: 'May 15, 2024', grade: '92%', color: '#A855F7' },
        { subject: 'Calculus', assignment: 'Limits & Continuity', date: 'May 12, 2024', grade: 'B+', color: '#F97316' },
    ];

    return (
        <div className="dashboard-page" style={{ background: '#F8FAFC', minHeight: '100vh' }}>
            {/* Top Navbar */}
            <nav style={{ background: 'white', borderBottom: '1px solid #E2E8F0', padding: '12px 0', position: 'sticky', top: 0, zIndex: 100 }}>
                <div className="container flex align-center justify-between">
                    <div className="flex align-center gap-16">
                        <Link href="/" className="flex align-center gap-8">
                            <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Layout size={18} color="white" />
                            </div>
                            <span style={{ fontWeight: 800, fontSize: '20px', color: '#0F172A' }}>EduTrack<span style={{ color: '#0066FF' }}>Pro</span></span>
                        </Link>

                        <div className="flex align-center mobile-hide" style={{ gap: '24px', marginLeft: '40px' }}>
                            <Link href="#" style={{ fontWeight: 700, color: '#0066FF', fontSize: '14px' }}>Dashboard</Link>
                            <Link href="/ai-tutor" style={{ fontWeight: 600, color: '#64748B', fontSize: '14px' }}>AI Tutor</Link>
                            <Link href="/certificates" style={{ fontWeight: 600, color: '#64748B', fontSize: '14px' }}>Certificates</Link>
                            <Link href="/schedule" style={{ fontWeight: 600, color: '#64748B', fontSize: '14px' }}>Schedule</Link>
                            <Link href="#" style={{ fontWeight: 600, color: '#64748B', fontSize: '14px' }}>Resources</Link>
                            <Link href="#" style={{ fontWeight: 600, color: '#64748B', fontSize: '14px' }}>Support</Link>
                        </div>
                    </div>

                    <div className="flex align-center gap-24">
                        <div className="flex align-center mobile-hide" style={{ position: 'relative' }}>
                            <Bell size={20} color="#64748B" />
                            <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', background: '#EF4444', borderRadius: '50%', border: '2px solid white' }}></div>
                        </div>

                        <div className="flex align-center gap-12" style={{ padding: '6px 12px', background: '#F1F5F9', borderRadius: '12px', cursor: 'pointer' }}>
                            <div className="text-right mobile-hide">
                                <div style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B' }}>Alex Thompson</div>
                                <div style={{ fontSize: '11px', fontWeight: 600, color: '#64748B' }}>Grade 10 • Senior High</div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop"
                                alt="User"
                                style={{ width: '36px', height: '36px', borderRadius: '10px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </nav>

            <main className="container section">
                <div className="grid grid-3" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'start', gap: '32px' }}>

                    {/* Left Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <div>
                            <h1 style={{ fontSize: '32px', color: '#0F172A', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.5px' }}>Welcome back, Alex!</h1>
                            <p style={{ color: '#64748B', fontSize: '16px', fontWeight: 500 }}>You&apos;re making incredible progress this semester.</p>
                        </div>

                        {/* Top Banner Alert */}
                        <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'between' }}>
                            <div className="flex align-center gap-16">
                                <div style={{ background: '#3B82F6', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CheckCircle2 size={24} color="white" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1E40AF' }}>Session Completed!</div>
                                    <div style={{ fontSize: '13px', fontWeight: 500, color: '#3B82F6' }}>You are eligible to upgrade your level status.</div>
                                </div>
                            </div>
                            <button className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '13px', borderRadius: '10px', marginLeft: 'auto' }}>Upgrade Now</button>
                        </div>

                        {/* Grade Progress Card */}
                        <div className="card" style={{ padding: '32px', border: '1px solid #E2E8F0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                            <div className="grid grid-2" style={{ gridTemplateColumns: '1.5fr 1fr', gap: '40px' }}>
                                <div>
                                    <div className="flex align-center justify-between" style={{ marginBottom: '16px' }}>
                                        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1E293B' }}>Grade 11 Progress</h3>
                                        <span style={{ fontSize: '18px', fontWeight: 800, color: '#0066FF' }}>{progress}%</span>
                                    </div>
                                    <div style={{ height: '12px', background: '#F1F5F9', borderRadius: '6px', overflow: 'hidden' }}>
                                        <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #0066FF, #3B82F6)', borderRadius: '6px' }}></div>
                                    </div>
                                    <p style={{ fontSize: '13px', color: '#64748B', marginTop: '16px', fontWeight: 500 }}>Only 12 more credits to reach the next milestone!</p>
                                </div>

                                <div style={{ background: '#F8FAFC', borderRadius: '14px', padding: '20px', border: '1px solid #F1F5F9' }}>
                                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Next Session Starts In</div>
                                    <div className="flex align-center gap-12">
                                        <Clock size={20} color="#0066FF" />
                                        <div style={{ fontSize: '24px', fontWeight: 800, color: '#1E293B' }}>00 : 14 : 22</div>
                                    </div>
                                    <div style={{ fontSize: '11px', color: '#64748B', marginTop: '8px' }}>Advanced Algebra with Prof. Sarah</div>
                                </div>
                            </div>

                            <div className="grid grid-3" style={{ marginTop: '32px', gap: '16px' }}>
                                <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '14px', border: '1px solid #F1F5F9' }}>
                                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', marginBottom: '8px' }}>Weekly Streak</div>
                                    <div className="flex align-center gap-8">
                                        <Zap size={20} color="#F97316" />
                                        <span style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B' }}>12 Days</span>
                                    </div>
                                </div>
                                <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '14px', border: '1px solid #F1F5F9' }}>
                                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', marginBottom: '8px' }}>Total Points</div>
                                    <div className="flex align-center gap-8">
                                        <Trophy size={20} color="#EAB308" />
                                        <span style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B' }}>2,450 XP</span>
                                    </div>
                                </div>
                                <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '14px', border: '1px solid #F1F5F9' }}>
                                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', marginBottom: '8px' }}>Classes Done</div>
                                    <div className="flex align-center gap-8">
                                        <CheckCircle2 size={20} color="#22C55E" />
                                        <span style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B' }}>48 / 60</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Achievement Badges */}
                        <div>
                            <div className="flex align-center justify-between" style={{ marginBottom: '20px' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B' }}>Achievement Badges</h3>
                                <Link href="#" style={{ fontSize: '13px', fontWeight: 700, color: '#0066FF' }}>View All</Link>
                            </div>
                            <div className="flex" style={{ gap: '20px', overflowX: 'auto', paddingBottom: '12px' }}>
                                {badges.map((b, idx) => (
                                    <div key={idx} className="card text-center" style={{ minWidth: '160px', padding: '24px', opacity: b.locked ? 0.6 : 1, borderStyle: b.locked ? 'dashed' : 'solid' }}>
                                        <div style={{
                                            width: '56px',
                                            height: '56px',
                                            background: b.locked ? '#F1F5F9' : '#F1F5F9',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 16px'
                                        }}>
                                            {b.icon}
                                        </div>
                                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#1E293B', marginBottom: '4px' }}>{b.name}</div>
                                        <div style={{ fontSize: '11px', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase' }}>{b.date}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Grades */}
                        <div>
                            <div className="flex align-center justify-between" style={{ marginBottom: '20px' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B' }}>Recent Grades</h3>
                                <Link href="#" style={{ fontSize: '13px', fontWeight: 700, color: '#0066FF' }}>Full Transcript</Link>
                            </div>
                            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Subject</th>
                                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Assignment</th>
                                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Date</th>
                                            <th style={{ textAlign: 'right', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {grades.map((g, idx) => (
                                            <tr key={idx} style={{ borderBottom: idx === grades.length - 1 ? 'none' : '1px solid #F1F5F9' }}>
                                                <td style={{ padding: '20px 24px' }}>
                                                    <div className="flex align-center gap-12">
                                                        <div style={{ background: `${g.color}15`, width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            {idx === 0 ? <CheckCircle2 size={14} color={g.color} /> : idx === 1 ? <BookOpen size={14} color={g.color} /> : <Zap size={14} color={g.color} />}
                                                        </div>
                                                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#1E293B' }}>{g.subject}</span>
                                                    </div>
                                                </td>
                                                <td style={{ padding: '20px 24px', fontSize: '14px', fontWeight: 600, color: '#64748B' }}>{g.assignment}</td>
                                                <td style={{ padding: '20px 24px', fontSize: '14px', fontWeight: 600, color: '#64748B' }}>{g.date}</td>
                                                <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                                                    <span style={{
                                                        background: '#F1F5F9',
                                                        padding: '4px 12px',
                                                        borderRadius: '20px',
                                                        fontSize: '13px',
                                                        fontWeight: 800,
                                                        color: '#1E293B',
                                                        border: g.grade.includes('A') || parseFloat(g.grade) > 90 ? '1px solid #BBF7D0' : 'none',
                                                        backgroundColor: g.grade.includes('A') || parseFloat(g.grade) > 90 ? '#F0FDF4' : '#F1F5F9'
                                                    }}>
                                                        {g.grade}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                        {/* Quick Actions */}
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1E293B', marginBottom: '20px' }}>Quick Actions</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <Link href="/ai-tutor" style={{
                                    background: '#0066FF',
                                    color: 'white',
                                    padding: '16px 20px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    border: 'none',
                                    fontWeight: 700,
                                    fontSize: '15px',
                                    textDecoration: 'none'
                                }}>
                                    <div className="flex align-center gap-12">
                                        <Bot size={20} /> Launch AI Tutor
                                    </div>
                                    <ArrowUpRight size={18} />
                                </Link>
                                <Link href="/certificates" className="card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, fontSize: '14px', color: '#1E293B', textDecoration: 'none' }}>
                                    <Download size={20} color="#0066FF" /> Download Certificate
                                </Link>
                                <Link href="/schedule" className="card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, fontSize: '14px', color: '#1E293B', textDecoration: 'none' }}>
                                    <Calendar size={20} color="#0066FF" /> View Schedule
                                </Link>
                            </div>
                        </div>

                        {/* Learning Path */}
                        <div className="card" style={{ padding: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1E293B', marginBottom: '24px' }}>Learning Path</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                <div className="flex gap-16" style={{ position: 'relative', paddingBottom: '32px' }}>
                                    <div style={{ position: 'absolute', left: '10px', top: '24px', bottom: '0', width: '2px', background: '#E2E8F0' }}></div>
                                    <CheckCircle2 size={22} color="#22C55E" style={{ flexShrink: 0, position: 'relative', background: 'white' }} />
                                    <div>
                                        <div style={{ fontSize: '10px', fontWeight: 800, color: '#22C55E', textTransform: 'uppercase', marginBottom: '4px' }}>Completed</div>
                                        <div style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B' }}>Foundations of Logic</div>
                                    </div>
                                </div>
                                <div className="flex gap-16" style={{ position: 'relative', paddingBottom: '32px' }}>
                                    <div style={{ position: 'absolute', left: '10px', top: '24px', bottom: '0', width: '2px', background: '#E2E8F0' }}></div>
                                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0066FF', flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Circle size={8} color="white" fill="white" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '10px', fontWeight: 800, color: '#0066FF', textTransform: 'uppercase', marginBottom: '4px' }}>Current Level</div>
                                        <div style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B' }}>Intermediate Algebra II</div>
                                        <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>4 assignments remaining</div>
                                    </div>
                                </div>
                                <div className="flex gap-16" style={{ position: 'relative' }}>
                                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#F1F5F9', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Lock size={12} color="#94A3B8" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '4px' }}>Next Milestone</div>
                                        <div style={{ fontSize: '15px', fontWeight: 800, color: '#94A3B8' }}>Intro to Calculus</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Study Tip */}
                        <div style={{ background: '#2563EB', borderRadius: '16px', padding: '24px', color: 'white' }}>
                            <div className="flex align-center gap-12" style={{ marginBottom: '16px' }}>
                                <Lightbulb size={24} />
                                <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Study Tip</span>
                            </div>
                            <p style={{ fontSize: '15px', lineHeight: 1.6, marginBottom: '20px', fontWeight: 500 }}>
                                &quot;Taking short breaks every 45 minutes can improve your focus and retention by up to 20%.&quot;
                            </p>
                            <Link href="#" style={{ fontSize: '13px', fontWeight: 800, textDecoration: 'underline', color: 'rgba(255,255,255,0.8)' }}>Read more techniques</Link>
                        </div>
                    </div>
                </div>
            </main>

            <footer style={{ background: 'white', borderTop: '1px solid #E2E8F0', padding: '40px 0', marginTop: '60px' }}>
                <div className="container text-center">
                    <p style={{ color: '#94A3B8', fontSize: '13px', marginBottom: '16px' }}>
                        © 2024 EduTrack Pro LMS. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-24" style={{ fontSize: '13px', fontWeight: 700, color: '#64748B' }}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                        <Link href="#">Accessibility</Link>
                    </div>
                </div>
            </footer>

            <AIBotWidget />
        </div>
    );
}
