"use client";
import AppLayout from "@/components/AppLayout";
import { Play, Clock, BookOpen, Star, ArrowRight, CheckCircle2, Zap, Bot, ArrowUpRight, Download, Calendar, Circle, Lock, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
    const stats = [
        { label: 'Courses in Progress', value: '4', icon: BookOpen, color: '#FF7D00', bg: '#FFF7ED' },
        { label: 'Completed Lessons', value: '28', icon: Play, color: '#005B52', bg: '#E6F0EF' },
        { label: 'Learning Hours', value: '12.5h', icon: Clock, color: '#3B82F6', bg: '#EFF6FF' },
        { label: 'Achievement Points', value: '1,250', icon: Star, color: '#F59E0B', bg: '#FFFBEB' },
    ];

    const currentCourses = [
        { title: 'Advanced React Architecture', progress: 65, instructor: 'Sarah Drasner', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=100&q=80' },
        { title: 'UI/UX Design Masterclass', progress: 32, instructor: 'Gary Simon', img: 'https://images.unsplash.com/photo-1541462608141-ad60397d427d?auto=format&fit=crop&w=100&q=80' },
    ];

    const grades = [
        { subject: 'Mathematics', assignment: 'Algebra II Midterm', date: 'Mar 01', grade: '92%', status: 'Excellent', color: '#FF7D00' },
        { subject: 'Physics', assignment: 'Kinematics Quiz', date: 'Feb 28', grade: '88%', status: 'Great', color: '#005B52' },
        { subject: 'Chemistry', assignment: 'Stoichiometry Lab', date: 'Feb 25', grade: 'A-', status: 'Excellent', color: '#0F172A' },
    ];

    return (
        <AppLayout>
            <style jsx global>{`
                .dashboard-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 32px;
                }
                @media (max-width: 1200px) {
                    .dashboard-grid { grid-template-columns: 1fr; }
                    .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 640px) {
                    .stats-row { grid-template-columns: 1fr !important; }
                    .course-card { flex-direction: column; align-items: flex-start !important; }
                    .course-img { width: 100% !important; height: 160px !important; }
                    .course-actions { width: 100% !important; flex-direction: row !important; align-items: center !important; justify-content: space-between !important; margin-top: 16px; }
                }
            `}</style>

            {/* Welcome Header */}
            <div className="animate-slide-up" style={{ marginBottom: '40px' }}>
                <h1 style={{
                    fontSize: 'clamp(28px, 4vw, 36px)',
                    fontWeight: 950,
                    fontFamily: 'var(--font-heading)',
                    color: '#0F172A',
                    letterSpacing: '-1.5px',
                    marginBottom: '8px'
                }}>
                    Welcome back, <span style={{ color: '#FF7D00' }}>Alex!</span> 👋
                </h1>
                <p style={{ color: '#64748B', fontSize: '16px', fontWeight: 500 }}>
                    You've completed <span style={{ color: '#005B52', fontWeight: 800 }}>75%</span> of your weekly learning quota. Excellence is a habit!
                </p>
            </div>

            {/* Smart Stats Row */}
            <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
                {stats.map((stat, i) => (
                    <div key={i} className={`glass-card animate-scale-in delay-${i + 1}`} style={{ padding: '24px', borderRadius: '24px', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                        <div className="flex align-center gap-16">
                            <div style={{ width: '52px', height: '52px', background: stat.bg, color: stat.color, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 20px ${stat.color}15` }}>
                                <stat.icon size={24} />
                            </div>
                            <div>
                                <p style={{ fontSize: '12px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>{stat.label}</p>
                                <p style={{ fontSize: '24px', fontWeight: 950, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>{stat.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dashboard-grid">
                {/* Main Content Area */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                    {/* Active Courses */}
                    <section className="animate-slide-up delay-2">
                        <div className="flex align-center justify-between" style={{ marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 900, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>Active Courses</h3>
                            <Link href="/courses" className="flex align-center gap-8 hover-scale" style={{ color: '#FF7D00', fontSize: '14px', fontWeight: 800 }}>
                                Browse All <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="flex column gap-16">
                            {currentCourses.map((course, i) => (
                                <div key={i} className="glass-card course-card hover-scale" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '24px', borderRadius: '24px' }}>
                                    <img src={course.img} alt="" className="course-img" style={{ width: '100px', height: '100px', borderRadius: '20px', objectFit: 'cover', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px', color: '#0F172A' }}>{course.title}</h4>
                                        <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '16px', fontWeight: 500 }}>Lead: <span style={{ fontWeight: 700, color: '#0F172A' }}>{course.instructor}</span></p>

                                        <div style={{ position: 'relative' }}>
                                            <div className="flex align-center justify-between" style={{ marginBottom: '8px' }}>
                                                <span style={{ fontSize: '12px', fontWeight: 800, color: '#94A3B8' }}>PROGRESS</span>
                                                <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF7D00' }}>{course.progress}%</span>
                                            </div>
                                            <div style={{ width: '100%', height: '8px', background: '#F1F5F9', borderRadius: '10px', overflow: 'hidden' }}>
                                                <div style={{ width: `${course.progress}%`, height: '100%', background: 'linear-gradient(90deg, #FF7D00 0%, #FFB444 100%)', borderRadius: '10px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-actions" style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '120px' }}>
                                        <button className="hover-scale" style={{ width: '100%', padding: '12px', borderRadius: '14px', background: '#0F172A', color: 'white', fontWeight: 800, fontSize: '13px' }}>Resume</button>
                                        <button className="hover-scale" style={{ width: '100%', padding: '12px', borderRadius: '14px', background: 'transparent', border: '1px solid #E2E8F0', color: '#64748B', fontWeight: 800, fontSize: '13px' }}>Details</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Performance Metrics */}
                    <section className="animate-slide-up delay-3">
                        <div className="flex align-center justify-between" style={{ marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 900, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>Performance Metrics</h3>
                            <button className="hover-scale" style={{ fontSize: '13px', fontWeight: 800, color: '#005B52', background: '#E6F0EF', padding: '6px 16px', borderRadius: '30px' }}>Export Transcript</button>
                        </div>
                        <div className="glass-card" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ background: 'rgba(15, 23, 42, 0.02)', borderBottom: '1px solid #F1F5F9' }}>
                                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Subject</th>
                                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Assessment</th>
                                            <th style={{ textAlign: 'center', padding: '16px 24px', fontSize: '11px', fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Grade</th>
                                            <th style={{ textAlign: 'right', padding: '16px 24px', fontSize: '11px', fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {grades.map((g, i) => (
                                            <tr key={i} style={{ borderBottom: '1px solid #F8FAFC' }}>
                                                <td style={{ padding: '20px 24px' }}>
                                                    <div className="flex align-center gap-12">
                                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: g.color }}></div>
                                                        <span style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>{g.subject}</span>
                                                    </div>
                                                </td>
                                                <td style={{ padding: '20px 24px', fontSize: '14px', fontWeight: 600, color: '#64748B' }}>{g.assignment}</td>
                                                <td style={{ padding: '20px 24px', textAlign: 'center' }}>
                                                    <span style={{ fontSize: '16px', fontWeight: 950, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>{g.grade}</span>
                                                </td>
                                                <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                                                    <span style={{ padding: '6px 12px', background: g.status === 'Excellent' ? '#E6F0EF' : '#FFF7ED', color: g.status === 'Excellent' ? '#005B52' : '#FF7D00', borderRadius: '12px', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase' }}>
                                                        {g.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar Widgets */}
                <div className="side-column" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                    {/* Premium AI Widget */}
                    <div className="glass-card animate-scale-in delay-4" style={{ padding: '32px', borderRadius: '28px', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '150px', height: '150px', background: 'rgba(255, 125, 0, 0.2)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div className="flex align-center gap-12" style={{ marginBottom: '20px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px' }}><Zap size={24} color="#FF7D00" /></div>
                                <h3 style={{ fontSize: '20px', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'white' }}>Smart Assistant</h3>
                            </div>
                            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '28px' }}>
                                Accelerated learning path detected. Our AI suggests focusing on <span style={{ color: '#FF7D00', fontWeight: 700 }}>Next.js Rendering Patterns</span> today.
                            </p>
                            <button className="hover-scale" style={{ width: '100%', padding: '14px', borderRadius: '16px', background: '#FF7D00', color: 'white', fontWeight: 900, border: 'none', fontSize: '14px', boxShadow: '0 10px 25px rgba(255,125,0,0.3)' }}>Launch AI Classroom</button>
                        </div>
                    </div>

                    {/* Learning Path */}
                    <div className="glass-card animate-slide-up delay-5" style={{ padding: '32px', borderRadius: '28px' }}>
                        <h3 style={{ fontSize: '20px', fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: '28px' }}>Mastery Track</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                            <div className="flex gap-20" style={{ position: 'relative', paddingBottom: '32px' }}>
                                <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '0', width: '2px', background: '#E2E8F0' }}></div>
                                <div style={{ background: '#005B52', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                                    <CheckCircle2 size={16} color="white" />
                                </div>
                                <div>
                                    <p style={{ fontSize: '11px', fontWeight: 900, color: '#005B52', textTransform: 'uppercase', marginBottom: '4px' }}>Validated</p>
                                    <p style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>Logic Foundations</p>
                                </div>
                            </div>
                            <div className="flex gap-20" style={{ position: 'relative', paddingBottom: '32px' }}>
                                <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '0', width: '2px', background: '#E2E8F0' }}></div>
                                <div style={{ border: '2px solid #FF7D00', width: '24px', height: '24px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF7D00' }}></div>
                                </div>
                                <div>
                                    <p style={{ fontSize: '11px', fontWeight: 900, color: '#FF7D00', textTransform: 'uppercase', marginBottom: '4px' }}>Current Goal</p>
                                    <p style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>Intermediate Algebra II</p>
                                    <p style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>4 units until milestone</p>
                                </div>
                            </div>
                            <div className="flex gap-20" style={{ position: 'relative' }}>
                                <div style={{ background: '#F1F5F9', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                                    <Lock size={12} color="#94A3B8" />
                                </div>
                                <div>
                                    <p style={{ fontSize: '11px', fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '4px' }}>Next Milestone</p>
                                    <p style={{ fontSize: '15px', fontWeight: 800, color: '#94A3B8' }}>Intro to Calculus</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Support Tip */}
                    <div className="glass-card animate-slide-up delay-6" style={{ padding: '24px', borderRadius: '24px', background: '#FFF7ED', border: '1px solid #FFEDD5' }}>
                        <div className="flex align-center gap-12" style={{ marginBottom: '12px' }}>
                            <Lightbulb size={20} color="#FF7D00" />
                            <span style={{ fontSize: '12px', fontWeight: 900, color: '#FF7D00', textTransform: 'uppercase', letterSpacing: '1px' }}>Efficiency Tip</span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#9A3412', lineHeight: 1.6, fontWeight: 500 }}>
                            &quot;Micro-learning for 15 mins a day is 5x more effective than one 2-hour session per week.&quot;
                        </p>
                    </div>

                </div>
            </div>
        </AppLayout>
    );
}
