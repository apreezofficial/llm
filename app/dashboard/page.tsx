"use client";
import AppLayout from "@/components/AppLayout";
import { Play, Clock, BookOpen, Star, ArrowRight, CheckCircle2, Zap, Bot, ArrowUpRight, Download, Calendar, Circle, Lock, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
    const stats = [
        { label: 'Courses in Progress', value: '4', icon: BookOpen, color: '#3B82F6' },
        { label: 'Completed Lessons', value: '28', icon: Play, color: '#10B981' },
        { label: 'Learning Hours', value: '12.5h', icon: Clock, color: '#8B5CF6' },
        { label: 'Achievement Points', value: '1,250', icon: Star, color: '#F59E0B' },
    ];

    const currentCourses = [
        { title: 'Advanced React Architecture', progress: 65, instructor: 'Sarah Drasner', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=100&q=80' },
        { title: 'UI/UX Design Masterclass', progress: 32, instructor: 'Gary Simon', img: 'https://images.unsplash.com/photo-1541462608141-ad60397d427d?auto=format&fit=crop&w=100&q=80' },
    ];

    const grades = [
        { subject: 'Mathematics', assignment: 'Algebra II Midterm', date: 'Mar 01', grade: '92%', color: '#22C55E' },
        { subject: 'Physics', assignment: 'Kinematics Quiz', date: 'Feb 28', grade: '88%', color: '#F59E0B' },
        { subject: 'Chemistry', assignment: 'Stoichiometry Lab', date: 'Feb 25', grade: 'A-', color: '#0066FF' },
    ];

    return (
        <AppLayout>
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Welcome back, Alex! 👋</h1>
                <p style={{ color: 'var(--text-muted)' }}>You've completed 75% of your weekly goal. Keep it up!</p>
            </div>

            {/* Stats Grid */}
            <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
                {stats.map((stat, i) => (
                    <div key={i} className="card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ padding: '12px', background: `${stat.color}15`, color: stat.color, borderRadius: '12px' }}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>{stat.label}</p>
                            <p style={{ fontSize: '24px', fontWeight: 700 }}>{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {/* Continue Learning */}
                    <div>
                        <div className="flex align-center justify-between" style={{ marginBottom: '20px' }}>
                            <h3 style={{ fontSize: '20px' }}>Continue Learning</h3>
                            <Link href="/courses" className="flex align-center gap-4" style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: 600 }}>
                                View All <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="flex column gap-16">
                            {currentCourses.map((course, i) => (
                                <div key={i} className="card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <img src={course.img} alt="" style={{ width: '80px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>{course.title}</h4>
                                        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>{course.instructor}</p>
                                        <div style={{ width: '100%', height: '6px', background: 'var(--border)', borderRadius: '3px', position: 'relative' }}>
                                            <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', background: 'var(--primary)', borderRadius: '3px', width: `${course.progress}%` }}></div>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <p style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px' }}>{course.progress}%</p>
                                        <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '12px' }}>Continue</button>
                                    </div>
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
        </AppLayout>
    );
}
