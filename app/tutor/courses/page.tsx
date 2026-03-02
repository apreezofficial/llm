"use client";
import AppLayout from "@/components/AppLayout";
import {
    Plus,
    MoreVertical,
    BookOpen,
    Users,
    BarChart2,
    Settings,
    Eye,
    Edit3,
    Trash2,
    CheckCircle2,
    Clock,
    Filter,
    Search
} from "lucide-react";
import Link from "next/link";

export default function CourseManager() {
    const courses = [
        {
            id: 1,
            title: 'Advanced React Architecture',
            status: 'Published',
            students: 1240,
            rating: 4.9,
            lastUpdated: '2 days ago',
            progress: 100
        },
        {
            id: 2,
            title: 'UI/UX Masterclass 2026',
            status: 'Published',
            students: 856,
            rating: 4.8,
            lastUpdated: '5 days ago',
            progress: 100
        },
        {
            id: 3,
            title: 'Fullstack Next.js 15',
            status: 'Draft',
            students: 0,
            rating: 0,
            lastUpdated: '1 hour ago',
            progress: 45
        },
        {
            id: 4,
            title: 'Digital Marketing Excellence',
            status: 'Under Review',
            students: 0,
            rating: 0,
            lastUpdated: '3 hours ago',
            progress: 90
        }
    ];

    return (
        <AppLayout>
            <div className="manager-container">
                {/* Header Section */}
                <div className="flex justify-between align-center animate-slide-up" style={{ marginBottom: '60px' }}>
                    <div>
                        <h1 style={{ fontSize: '56px', fontWeight: 950, color: '#0F172A', fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '12px' }}>
                            Course Manager
                        </h1>
                        <p style={{ color: '#64748B', fontWeight: 600, fontSize: '18px' }}>Organize, edit, and monitor your curriculum content.</p>
                    </div>
                    <Link href="/tutor/courses/new" className="create-btn hover-scale">
                        <Plus size={24} />
                        Create New Course
                    </Link>
                </div>

                {/* Filters & Search */}
                <div className="filters-bar animate-fade delay-1" style={{ padding: '24px', borderRadius: '40px', marginBottom: '48px' }}>
                    <div className="search-box">
                        <Search size={24} className="search-icon" style={{ left: '32px' }} />
                        <input type="text" placeholder="Search your courses..." style={{ padding: '20px 24px 20px 72px', borderRadius: '24px', fontSize: '16px', fontWeight: 600 }} />
                    </div>
                    <div className="filter-actions" style={{ gap: '20px' }}>
                        <button className="filter-btn" style={{ padding: '16px 32px', borderRadius: '20px', fontSize: '14px', fontWeight: 950 }}><Filter size={20} /> Filters</button>
                        <select className="sort-select" style={{ padding: '16px 32px', borderRadius: '20px', fontSize: '14px', fontWeight: 950 }}>
                            <option>Newest First</option>
                            <option>Highest Rated</option>
                            <option>Most Students</option>
                        </select>
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="courses-list animate-slide-up delay-2" style={{ gap: '32px' }}>
                    {courses.map((course) => (
                        <div key={course.id} className="course-manager-card hover-scale">
                            <div className="course-info-primary">
                                <div className="course-icon-preview" style={{ width: '80px', height: '80px', borderRadius: '24px' }}>
                                    <BookOpen size={32} color="white" />
                                </div>
                                <div className="course-title-meta">
                                    <h3 style={{ fontSize: '24px', fontWeight: 950, marginBottom: '8px' }}>{course.title}</h3>
                                    <div className="meta-tags">
                                        <span className={`status-badge ${course.status.toLowerCase().replace(' ', '-')}`} style={{ padding: '6px 16px', borderRadius: '30px', fontSize: '11px', fontWeight: 950 }}>
                                            {course.status}
                                        </span>
                                        <span className="update-time" style={{ fontSize: '13px', fontWeight: 700 }}><Clock size={14} /> {course.lastUpdated}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="course-metrics-row" style={{ gap: '12px' }}>
                                <div className="metric-item" style={{ fontSize: '15px' }}>
                                    <Users size={20} color="#FF7D00" />
                                    <span><strong style={{ fontSize: '18px' }}>{course.students}</strong> Students</span>
                                </div>
                                <div className="metric-item" style={{ fontSize: '15px' }}>
                                    <BarChart2 size={20} color="#005B52" />
                                    <span><strong style={{ fontSize: '18px' }}>{course.rating}</strong> Rating</span>
                                </div>
                            </div>

                            <div className="course-progress-section" style={{ gap: '16px' }}>
                                <div className="progress-labels">
                                    <span style={{ fontSize: '14px', fontWeight: 950 }}>Content Completion</span>
                                    <span style={{ fontSize: '14px', fontWeight: 950 }}>{course.progress}%</span>
                                </div>
                                <div className="progress-track" style={{ height: '10px' }}>
                                    <div className="progress-fill" style={{ width: `${course.progress}%`, background: course.progress === 100 ? '#005B52' : '#FF7D00' }}></div>
                                </div>
                            </div>

                            <div className="course-actions" style={{ gap: '16px' }}>
                                <button className="action-button secondary" style={{ padding: '16px 24px', borderRadius: '18px', fontSize: '13px', fontWeight: 950 }}><Eye size={18} /> Preview</button>
                                <button className="action-button secondary" style={{ padding: '16px 24px', borderRadius: '18px', fontSize: '13px', fontWeight: 950 }}><Edit3 size={18} /> Edit</button>
                                <button className="action-button danger" style={{ padding: '16px', borderRadius: '18px' }}><Trash2 size={20} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .manager-container { width: 100%; }

                .create-btn {
                    padding: 20px 40px;
                    background: #FF7D00;
                    color: white;
                    border-radius: 20px;
                    font-weight: 950;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-family: var(--font-heading);
                    box-shadow: 0 20px 40px rgba(255,125,0,0.25);
                }

                .filters-bar {
                    display: flex;
                    justify-content: space-between;
                    background: white;
                    padding: 12px;
                    border-radius: 20px;
                    border: 1px solid #E2E8F0;
                    margin-bottom: 32px;
                    gap: 20px;
                    box-shadow: var(--shadow-sm);
                }

                .search-box {
                    position: relative;
                    flex: 1;
                }

                .search-icon {
                    position: absolute;
                    left: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #94A3B8;
                }

                .search-box input {
                    width: 100%;
                    padding: 12px 16px 12px 48px;
                    border: none;
                    background: #F8FAFC;
                    border-radius: 12px;
                    font-size: 14px;
                    outline: none;
                }

                .filter-actions {
                    display: flex;
                    gap: 12px;
                }

                .filter-btn, .sort-select {
                    padding: 10px 16px;
                    border-radius: 12px;
                    border: 1px solid #E2E8F0;
                    background: white;
                    font-size: 13px;
                    font-weight: 700;
                    color: #64748B;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .courses-list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .course-manager-card {
                    background: white;
                    padding: 48px;
                    border-radius: 40px;
                    border: 1px solid #E2E8F0;
                    display: grid;
                    grid-template-columns: 2.2fr 1fr 1.5fr 1.5fr;
                    align-items: center;
                    gap: 60px;
                    box-shadow: var(--shadow-md);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .course-info-primary {
                    display: flex;
                    align-items: center;
                    gap: 32px;
                }

                .course-icon-preview {
                    width: 56px;
                    height: 56px;
                    background: #0F172A;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: var(--shadow-md);
                }

                .course-title-meta h3 {
                    font-size: 18px;
                    font-weight: 900;
                    color: #0F172A;
                    margin: 0 0 6px 0;
                    font-family: var(--font-heading);
                    letter-spacing: -0.02em;
                }

                .meta-tags {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .status-badge {
                    padding: 4px 10px;
                    border-radius: 6px;
                    font-size: 10px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .status-badge.published { background: #E6F4EA; color: #1E7E34; }
                .status-badge.draft { background: #F1F5F9; color: #64748B; }
                .status-badge.under-review { background: #FFF7ED; color: #FF7D00; }

                .update-time {
                    font-size: 11px;
                    color: #94A3B8;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-weight: 600;
                }

                .course-metrics-row {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .metric-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: #64748B;
                    font-size: 13px;
                    font-weight: 600;
                }

                .metric-item strong { color: #0F172A; font-weight: 800; }

                .course-progress-section {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .progress-labels {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    font-weight: 800;
                    color: #64748B;
                }

                .progress-track {
                    height: 6px;
                    background: #F1F5F9;
                    border-radius: 5px;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    border-radius: 5px;
                }

                .course-actions {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    justify-content: flex-end;
                }

                .action-button {
                    padding: 10px 16px;
                    border-radius: 12px;
                    font-size: 12px;
                    font-weight: 800;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.2s;
                    font-family: var(--font-heading);
                }

                .action-button.secondary {
                    background: #F8FAFC;
                    border: 1px solid #E2E8F0;
                    color: #0F172A;
                }

                .action-button.danger {
                    background: #FEF2F2;
                    color: #EF4444;
                    padding: 10px;
                }

                @media (max-width: 1500px) {
                    .course-manager-card {
                        grid-template-columns: 1.5fr 1fr;
                        gap: 40px;
                    }
                    .course-progress-section, .course-actions { grid-column: span 1; }
                }

                @media (max-width: 900px) {
                    .course-manager-card { grid-template-columns: 1fr; padding: 32px; }
                    .filter-actions { display: none; }
                }
            `}</style>
        </AppLayout>
    );
}
