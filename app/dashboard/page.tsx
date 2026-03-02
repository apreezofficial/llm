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
            <style jsx>{`
                .main-title {
                    font-size: 56px;
                    font-weight: 950;
                    font-family: var(--font-heading);
                    color: #0F172A;
                    letter-spacing: -0.04em;
                    margin-bottom: 12px;
                    line-height: 1;
                }

                .subtitle {
                    font-size: 18px;
                    color: #64748B;
                    font-weight: 600;
                    max-width: 600px;
                }

                .stats-row {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 32px;
                    margin-bottom: 60px;
                }

                .stat-card {
                    background: white;
                    padding: 32px;
                    border-radius: var(--radius-lg);
                    border: 1px solid #E2E8F0;
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    box-shadow: var(--shadow-md);
                }

                .stat-icon-wrapper {
                    width: 64px;
                    height: 64px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    box-shadow: var(--shadow-sm);
                }

                .stat-label {
                    font-size: 12px;
                    font-weight: 950;
                    color: #94A3B8;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 4px;
                }

                .stat-value {
                    font-size: 32px;
                    font-weight: 950;
                    color: #0F172A;
                    font-family: var(--font-heading);
                    letter-spacing: -0.02em;
                }

                .dashboard-main-grid {
                    display: grid;
                    grid-template-columns: 2.2fr 1fr;
                    gap: 40px;
                }

                .section-title {
                    font-size: 28px;
                    font-weight: 950;
                    font-family: var(--font-heading);
                    color: #0F172A;
                    margin-bottom: 32px;
                    letter-spacing: -0.02em;
                }

                .course-card {
                    padding: 32px;
                    border-radius: var(--radius-lg);
                    display: flex;
                    align-items: center;
                    gap: 32px;
                    background: white;
                    border: 1px solid #E2E8F0;
                    box-shadow: var(--shadow-md);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .course-card:hover {
                    box-shadow: var(--shadow-lg);
                    transform: translateY(-8px);
                    border-color: var(--primary);
                }

                .course-card-img {
                    width: 120px;
                    height: 120px;
                    border-radius: 28px;
                    object-fit: cover;
                    box-shadow: var(--shadow-md);
                }

                .progress-bar-container {
                    width: 100%;
                    height: 10px;
                    background: #F1F5F9;
                    border-radius: 5px;
                    overflow: hidden;
                    margin-top: 20px;
                }

                .progress-bar-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #FF7D00 0%, #FFB444 100%);
                    border-radius: 5px;
                }

                .table-container {
                    padding: 24px;
                    background: white;
                    border-radius: var(--radius-lg);
                    border: 1px solid #E2E8F0;
                    box-shadow: var(--shadow-md);
                    overflow: hidden;
                }

                .ai-widget {
                    padding: 40px;
                    border-radius: var(--radius-lg);
                    background: #0F172A;
                    color: white;
                    position: relative;
                    overflow: hidden;
                    box-shadow: var(--shadow-lg);
                }

                .ai-icon-box {
                    width: 64px;
                    height: 64px;
                    background: rgba(255,255,255,0.05);
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 32px;
                    border: 1px solid rgba(255,255,255,0.1);
                }

                @media (max-width: 1400px) {
                    .stats-row { grid-template-columns: repeat(2, 1fr); }
                    .main-title { font-size: 48px; }
                }

                @media (max-width: 1024px) {
                    .dashboard-main-grid { grid-template-columns: 1fr; }
                    .course-card { flex-direction: column; text-align: center; }
                    .course-card-img { width: 100%; height: 200px; }
                }

                @media (max-width: 640px) {
                    .stats-row { grid-template-columns: 1fr; }
                    .main-title { font-size: 36px; }
                    .stat-card { padding: 24px; gap: 16px; }
                }
            `}</style>

            {/* Page Header */}
            <div className="animate-slide-up" style={{ marginBottom: '60px' }}>
                <h1 className="main-title">
                    Welcome back, <span style={{ color: '#FF7D00' }}>Alex!</span> 👋
                </h1>
                <p className="subtitle">
                    You've completed <span style={{ color: '#005B52', fontWeight: 950 }}>75%</span> of your weekly learning quota. Excellence is a habit!
                </p>
            </div>

            {/* Stats Grid */}
            <div className="stats-row">
                {stats.map((stat, i) => (
                    <div key={i} className={`stat-card animate-scale-in delay-${i + 1}`}>
                        <div className="stat-icon-wrapper" style={{ background: stat.bg, color: stat.color }}>
                            <stat.icon size={28} />
                        </div>
                        <div>
                            <p className="stat-label">{stat.label}</p>
                            <p className="stat-value">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dashboard-main-grid">
                {/* Primary Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>

                    {/* Active Courses Section */}
                    <section className="animate-slide-up delay-2">
                        <div className="flex align-center justify-between" style={{ marginBottom: '40px' }}>
                            <h3 className="section-title">Active Progress</h3>
                            <Link href="/courses" className="hover-scale" style={{ color: '#FF7D00', fontSize: '14px', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Full Catalog →
                            </Link>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {currentCourses.map((course, i) => (
                                <div key={i} className="course-card hover-scale">
                                    <img src={course.img} alt="" className="course-card-img" />
                                    <div style={{ flex: 1 }}>
                                        <div className="flex align-center justify-between" style={{ marginBottom: '8px' }}>
                                            <h4 style={{ fontSize: '20px', fontWeight: 950, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>{course.title}</h4>
                                            <span style={{ fontSize: '15px', fontWeight: 950, color: '#FF7D00' }}>{course.progress}%</span>
                                        </div>
                                        <p style={{ fontSize: '15px', color: '#64748B', fontWeight: 700 }}>{course.instructor}</p>
                                        <div className="progress-bar-container">
                                            <div className="progress-bar-fill" style={{ width: `${course.progress}%` }}></div>
                                        </div>
                                    </div>
                                    <button className="hover-scale" style={{ padding: '16px 32px', borderRadius: '16px', background: '#0F172A', color: 'white', fontWeight: 950, fontSize: '14px', border: 'none' }}>Resume</button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Academic Performance Section */}
                    <section className="animate-slide-up delay-3">
                        <h3 className="section-title">Performance Baseline</h3>
                        <div className="table-container">
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
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
