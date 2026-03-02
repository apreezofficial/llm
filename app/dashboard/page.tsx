"use client";
import AppLayout from "@/components/AppLayout";
import { Play, Clock, BookOpen, Star, ArrowRight, CheckCircle2, Zap, Bot, ArrowUpRight, Download, Calendar, Circle, Lock, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
    const stats = [
        { label: 'Active Progress', value: '4', icon: BookOpen, color: '#FF7D00', bg: '#FFF7ED' },
        { label: 'Completed Units', value: '28', icon: Play, color: '#005B52', bg: '#E6F0EF' },
        { label: 'Study Velocity', value: '12.5h', icon: Clock, color: '#3B82F6', bg: '#EFF6FF' },
        { label: 'Intellect Score', value: '1,250', icon: Star, color: '#F59E0B', bg: '#FFFBEB' },
    ];

    const currentCourses = [
        { title: 'Advanced React Architecture', progress: 65, instructor: 'Sarah Drasner', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=300&q=80' },
        { title: 'UI/UX Design Masterclass', progress: 32, instructor: 'Gary Simon', img: 'https://images.unsplash.com/photo-1541462608141-ad60397d427d?auto=format&fit=crop&w=300&q=80' },
    ];

    const grades = [
        { subject: 'Mathematics', assignment: 'Algebra II Midterm', date: 'Mar 01', grade: '92%', status: 'Excellent', color: '#FF7D00', bg: '#FFF7ED' },
        { subject: 'Physics', assignment: 'Kinematics Quiz', date: 'Feb 28', grade: '88%', status: 'Great', color: '#005B52', bg: '#E6F0EF' },
        { subject: 'Chemistry', assignment: 'Stoichiometry Lab', date: 'Feb 25', grade: 'A-', status: 'Excellent', color: '#0F172A', bg: '#F1F5F9' },
    ];

    return (
        <AppLayout>
            {/* Page Header */}
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

            {/* Stats Grid */}
            <div className="stats-row" style={{ marginBottom: '40px' }}>
                {stats.map((stat, i) => (
                    <div key={i} className={`glass-card animate-scale-in delay-${i + 1}`} style={{
                        padding: '24px',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                    }}>
                        <div style={{
                            width: '52px',
                            height: '52px',
                            background: stat.bg,
                            color: stat.color,
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p style={{ fontSize: '11px', fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{stat.label}</p>
                            <p style={{ fontSize: '24px', fontWeight: 950, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dashboard-main-grid">
                {/* Primary Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                    {/* Active Courses Section */}
                    <section className="animate-slide-up delay-2">
                        <div className="flex align-center justify-between" style={{ marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 900, fontFamily: 'var(--font-heading)', color: '#0F172A' }}>Active Progress</h3>
                            <Link href="/courses" className="hover-scale" style={{ color: '#FF7D00', fontSize: '14px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                Full Catalog <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {currentCourses.map((course, i) => (
                                <div key={i} className="glass-card course-card hover-scale" style={{ padding: '24px', borderRadius: '28px' }}>
                                    <img src={course.img} alt="" className="course-card-img" />
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div className="flex align-center justify-between" style={{ marginBottom: '8px' }}>
                                            <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-heading)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{course.title}</h4>
                                            <span style={{ fontSize: '13px', fontWeight: 900, color: '#FF7D00' }}>{course.progress}%</span>
                                        </div>
                                        <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '16px', fontWeight: 500 }}>{course.instructor}</p>
                                        <div style={{ width: '100%', height: '8px', background: '#F1F5F9', borderRadius: '4px', overflow: 'hidden' }}>
                                            <div style={{ width: `${course.progress}%`, height: '100%', background: 'linear-gradient(90deg, #FF7D00 0%, #FFB444 100%)', borderRadius: '4px' }}></div>
                                        </div>
                                    </div>
                                    <div className="course-card-actions">
                                        <button className="hover-scale" style={{ padding: '10px 20px', borderRadius: '14px', background: '#0F172A', color: 'white', fontWeight: 800, fontSize: '13px' }}>Resume</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Academic Performance Section */}
                    <section className="animate-slide-up delay-3">
                        <h3 style={{ fontSize: '22px', fontWeight: 900, fontFamily: 'var(--font-heading)', color: '#0F172A', marginBottom: '24px' }}>Performance Baseline</h3>
                        <div className="glass-card" style={{ borderRadius: '28px', padding: '16px', overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                                        <th style={{ padding: '16px', fontSize: '12px', fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Subject</th>
                                        <th style={{ padding: '16px', fontSize: '12px', fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Assessment</th>
                                        <th style={{ padding: '16px', fontSize: '12px', fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Grade</th>
                                        <th style={{ padding: '16px', fontSize: '12px', fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Metric</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {grades.map((item, i) => (
                                        <tr key={i} style={{ borderBottom: i === grades.length - 1 ? 'none' : '1px solid #F1F5F9' }}>
                                            <td style={{ padding: '20px 16px', fontWeight: 800, color: '#0F172A', fontSize: '14px' }}>{item.subject}</td>
                                            <td style={{ padding: '20px 16px', color: '#64748B', fontSize: '14px', fontWeight: 500 }}>{item.assignment}</td>
                                            <td style={{ padding: '20px 16px', fontWeight: 950, color: item.color, fontSize: '16px', fontFamily: 'var(--font-heading)' }}>{item.grade}</td>
                                            <td style={{ padding: '20px 16px' }}>
                                                <span style={{ padding: '6px 12px', borderRadius: '30px', background: item.bg, color: item.color, fontSize: '11px', fontWeight: 900, textTransform: 'uppercase' }}>{item.status}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>

                {/* Sidebar Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {/* Smart Assistant Widget */}
                    <div className="glass-card animate-scale-in delay-4" style={{
                        padding: '32px',
                        borderRadius: '32px',
                        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(15,23,42,0.2)'
                    }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px' }}><Bot size={24} color="#FF7D00" /></div>
                                <h4 style={{ fontSize: '18px', fontWeight: 900, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>Nexus AI</h4>
                            </div>
                            <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '24px', fontWeight: 500 }}>
                                &quot;Based on your last session, I recommend focusing on <span style={{ color: 'white', fontWeight: 800 }}>Component Lifecycle</span> today.&quot;
                            </p>
                            <button className="hover-scale" style={{ width: '100%', padding: '14px', borderRadius: '16px', background: '#FF7D00', color: 'white', fontWeight: 900, fontSize: '14px', border: 'none' }}>
                                Launch Session
                            </button>
                        </div>
                        {/* Decorative background element */}
                        <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '150px', height: '150px', background: '#FF7D00', opacity: 0.1, filter: 'blur(50px)', borderRadius: '50%' }}></div>
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
