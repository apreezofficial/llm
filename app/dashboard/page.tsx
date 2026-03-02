"use client";
import AppLayout from "@/components/AppLayout";
import { Play, Clock, BookOpen, Star, ArrowRight } from "lucide-react";
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

            <div className="grid-2" style={{ gridTemplateColumns: '2fr 1fr' }}>
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

                {/* Upcoming Classes */}
                <div>
                    <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>Upcoming Live Classes</h3>
                    <div className="card" style={{ padding: '24px' }}>
                        <div className="flex column gap-20">
                            {[1, 2].map((_, i) => (
                                <div key={i} className="flex gap-16" style={{ paddingBottom: i === 0 ? '20px' : 0, borderBottom: i === 0 ? '1px solid var(--border)' : 'none' }}>
                                    <div style={{ padding: '8px 12px', background: 'var(--accent-blue)', borderRadius: '10px', textAlign: 'center', minWidth: '60px' }}>
                                        <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>Mar</p>
                                        <p style={{ fontSize: '20px', fontWeight: 800 }}>{i === 0 ? '04' : '05'}</p>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '2px' }}>{i === 0 ? 'Advanced React Hooks' : 'Next.js 15 Deep Dive'}</p>
                                        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>10:30 AM • 1.5 Hours</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-outline" style={{ width: '100%', marginTop: '24px' }}>View Calendar</button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
