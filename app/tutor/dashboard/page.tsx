"use client";
import AppLayout from "@/components/AppLayout";
import {
    Users,
    BookOpen,
    TrendingUp,
    DollarSign,
    Star,
    Clock,
    MessageSquare,
    Play,
    Plus,
    BarChart,
    ChevronRight,
    Search
} from "lucide-react";
import Link from "next/link";

export default function TutorDashboard() {
    const stats = [
        { label: 'Total Students', value: '1,284', icon: <Users size={24} />, delta: '+12%', color: '#FF7D00' },
        { label: 'Active Courses', value: '8', icon: <BookOpen size={24} />, delta: 'Stable', color: '#005B52' },
        { label: 'Monthly Revenue', value: '$12,450', icon: <DollarSign size={24} />, delta: '+8%', color: '#0F172A' },
        { label: 'Instructor Rating', value: '4.9', icon: <Star size={24} />, delta: 'Top 1%', color: '#FFB444' },
    ];

    const topCourses = [
        { id: 1, title: 'Advanced React Architecture', students: 450, rating: 4.9, earnings: '$4,500', trend: 'up' },
        { id: 2, title: 'UI/UX Masterclass 2026', students: 320, rating: 4.8, earnings: '$3,200', trend: 'up' },
        { id: 3, title: 'Fullstack Next.js 15', students: 280, rating: 4.7, earnings: '$2,800', trend: 'down' },
    ];

    return (
        <AppLayout>
            <div className="dashboard-container">
                {/* Welcome Heading */}
                <div className="welcome-banner animate-slide-up">
                    <div className="welcome-content">
                        <div className="badge">Instructor Portal</div>
                        <h1 className="main-title">Welcome back, <span className="text-primary">Alex Rivers</span></h1>
                        <p className="subtitle">Your student engagement is up by 15% this week. Keep up the momentum!</p>
                    </div>
                    <Link href="/tutor/courses/new" className="create-btn hover-scale">
                        <Plus size={20} />
                        Publish New Course
                    </Link>
                </div>

                {/* Metrics Row */}
                <div className="metrics-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className={`stat-card animate-scale-in delay-${i + 1}`}>
                            <div className="stat-icon-wrapper" style={{ background: `${stat.color}10`, color: stat.color }}>
                                {stat.icon}
                            </div>
                            <div className="stat-info">
                                <h3 className="stat-value">{stat.value}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                            <div className={`stat-delta ${stat.delta.includes('+') ? 'up' : 'stable'}`}>
                                {stat.delta}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dashboard Main Content */}
                <div className="dashboard-main-layout">
                    {/* Left Column: Course Performance */}
                    <div className="performance-column glass-card animate-slide-up delay-2">
                        <div className="section-header">
                            <h2 className="section-title">Course Performance</h2>
                            <button className="view-all">Detailed Analytics <ChevronRight size={16} /></button>
                        </div>

                        <div className="course-performance-list">
                            {topCourses.map((course) => (
                                <div key={course.id} className="course-row hover-scale">
                                    <div className="course-preview">
                                        <div className="course-color-box"></div>
                                        <div className="course-meta">
                                            <h4>{course.title}</h4>
                                            <p>{course.students} Active Students</p>
                                        </div>
                                    </div>
                                    <div className="course-stats">
                                        <div className="mini-stat">
                                            <span>Rating</span>
                                            <strong>{course.rating} ★</strong>
                                        </div>
                                        <div className="mini-stat">
                                            <span>Revenue</span>
                                            <strong>{course.earnings}</strong>
                                        </div>
                                    </div>
                                    <button className="manage-btn">Manage</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Widgets */}
                    <div className="widgets-column">
                        {/* Interactive Message Widget */}
                        <div className="widget-card premium-widget animate-slide-up delay-3">
                            <div className="widget-icon primary">
                                <MessageSquare size={20} />
                            </div>
                            <div className="widget-content">
                                <h3>Student Queries</h3>
                                <p>You have 12 unread questions in your courses.</p>
                                <button className="accent-btn">Review All</button>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="widget-card glass-card animate-slide-up delay-4">
                            <h3>Quick Actions</h3>
                            <div className="action-grid">
                                <Link href="#" className="action-item">
                                    <BarChart size={18} />
                                    <span>Reports</span>
                                </Link>
                                <Link href="#" className="action-item">
                                    <Clock size={18} />
                                    <span>Schedule</span>
                                </Link>
                                <Link href="#" className="action-item">
                                    <Play size={18} />
                                    <span>Go Live</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .dashboard-container {
                    width: 100%;
                }

                .welcome-banner {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 60px;
                    gap: 32px;
                    padding: 40px;
                    background: white;
                    border-radius: 40px;
                    border: 1px solid #E2E8F0;
                    box-shadow: var(--shadow-md);
                    position: relative;
                    overflow: hidden;
                }

                .welcome-banner::after {
                    content: '';
                    position: absolute;
                    top: -50px;
                    right: -50px;
                    width: 200px;
                    height: 200px;
                    background: radial-gradient(circle, rgba(255,125,0,0.05) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .badge {
                    display: inline-block;
                    padding: 8px 16px;
                    background: #FFF7ED;
                    color: #FF7D00;
                    border-radius: 12px;
                    font-size: 12px;
                    font-weight: 950;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 20px;
                }

                .main-title {
                    font-size: 56px;
                    font-weight: 950;
                    font-family: var(--font-heading);
                    letter-spacing: -0.04em;
                    color: #0F172A;
                    margin: 0 0 12px 0;
                    line-height: 1;
                }

                .text-primary { color: #FF7D00; }

                .subtitle {
                    font-size: 18px;
                    color: #64748B;
                    font-weight: 600;
                    max-width: 600px;
                }

                .create-btn {
                    padding: 20px 40px;
                    background: #0F172A;
                    color: white;
                    border-radius: 20px;
                    font-weight: 900;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-family: var(--font-heading);
                    font-size: 16px;
                    box-shadow: var(--shadow-lg);
                }

                .metrics-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 32px;
                    margin-bottom: 60px;
                }

                .stat-card {
                    background: white;
                    padding: 32px;
                    border-radius: 40px;
                    border: 1px solid #E2E8F0;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                    box-shadow: var(--shadow-md);
                }

                .stat-icon-wrapper {
                    width: 64px;
                    height: 64px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 24px;
                    box-shadow: var(--shadow-sm);
                }

                .stat-value {
                    font-size: 36px;
                    font-weight: 950;
                    color: #0F172A;
                    font-family: var(--font-heading);
                    margin: 0 0 4px 0;
                    letter-spacing: -0.02em;
                }

                .stat-label {
                    font-size: 15px;
                    color: #64748B;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .stat-delta {
                    position: absolute;
                    top: 32px;
                    right: 32px;
                    font-size: 13px;
                    font-weight: 950;
                    padding: 6px 14px;
                    border-radius: 30px;
                }

                .stat-delta.up { background: #E6F4EA; color: #1E7E34; }
                .stat-delta.stable { background: #F1F5F9; color: #64748B; }

                .dashboard-main-layout {
                    display: grid;
                    grid-template-columns: 2.2fr 1fr;
                    gap: 40px;
                }

                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 40px;
                }

                .section-title {
                    font-size: 28px;
                    font-weight: 950;
                    font-family: var(--font-heading);
                    color: #0F172A;
                    margin: 0;
                    letter-spacing: -0.02em;
                }

                .view-all {
                    background: none;
                    border: none;
                    color: #FF7D00;
                    font-weight: 950;
                    font-size: 14px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .course-performance-list {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .course-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 24px;
                    background: white;
                    border-radius: 32px;
                    border: 1px solid #E2E8F0;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: var(--shadow-sm);
                }

                .course-row:hover {
                    box-shadow: var(--shadow-md);
                    border-color: var(--primary);
                }

                .course-preview {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .course-color-box {
                    width: 64px;
                    height: 64px;
                    background: linear-gradient(135deg, #FF7D00 0%, #FFB444 100%);
                    border-radius: 18px;
                    box-shadow: var(--shadow-sm);
                }

                .course-meta h4 {
                    font-size: 18px;
                    font-weight: 950;
                    color: #0F172A;
                    margin: 0 0 4px 0;
                    font-family: var(--font-heading);
                }

                .course-meta p {
                    font-size: 14px;
                    color: #64748B;
                    font-weight: 700;
                    margin: 0;
                }

                .course-stats {
                    display: flex;
                    gap: 48px;
                }

                .mini-stat {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .mini-stat span { font-size: 12px; color: #94A3B8; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
                .mini-stat strong { font-size: 18px; color: #0F172A; font-weight: 950; font-family: var(--font-heading); }

                .manage-btn {
                    padding: 12px 24px;
                    background: #F8FAFC;
                    border: 1px solid #E2E8F0;
                    border-radius: 14px;
                    font-size: 14px;
                    font-weight: 900;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .manage-btn:hover { background: #0F172A; color: white; border-color: #0F172A; }

                .widgets-column {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }

                .widget-card {
                    padding: 40px;
                    border-radius: 40px;
                }

                .premium-widget {
                    background: #0F172A;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    min-height: 280px;
                    box-shadow: var(--shadow-lg);
                }

                .widget-icon.primary {
                    width: 56px;
                    height: 56px;
                    background: #FF7D00;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 24px;
                }

                .widget-content h3 { font-size: 24px; font-weight: 950; margin: 0 0 12px 0; font-family: var(--font-heading); }
                .widget-content p { font-size: 15px; color: rgba(255,255,255,0.7); margin-bottom: 32px; line-height: 1.6; }

                .accent-btn {
                    padding: 16px 32px;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.2);
                    color: white;
                    border-radius: 16px;
                    font-size: 14px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .action-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    margin-top: 32px;
                }

                .action-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    padding: 24px;
                    background: #F8FAFC;
                    border-radius: 24px;
                    border: 1px solid #E2E8F0;
                    color: #0F172A;
                    font-weight: 900;
                    font-size: 13px;
                    transition: all 0.3s;
                }

                .action-item:hover { background: white; border-color: #FF7D00; transform: translateY(-4px); }

                @media (max-width: 1400px) {
                    .metrics-grid { grid-template-columns: repeat(2, 1fr); }
                    .main-title { font-size: 48px; }
                }

                @media (max-width: 1024px) {
                    .dashboard-main-layout { grid-template-columns: 1fr; }
                    .welcome-banner { flex-direction: column; align-items: flex-start; padding: 32px; }
                    .create-btn { width: 100%; justify-content: center; }
                    .course-stats { display: none; }
                }

                @media (max-width: 640px) {
                    .metrics-grid { grid-template-columns: 1fr; }
                    .main-title { font-size: 36px; }
                    .stat-card { padding: 24px; }
                    .welcome-banner { margin-bottom: 40px; }
                }
            `}</style>
        </AppLayout>
    );
}
