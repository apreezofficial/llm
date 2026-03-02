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
                <div className="flex justify-between align-end animate-slide-up" style={{ marginBottom: '40px' }}>
                    <div>
                        <h1 style={{ fontSize: '36px', fontWeight: 950, color: '#0F172A', fontFamily: 'var(--font-heading)', letterSpacing: '-1.5px', marginBottom: '8px' }}>
                            Course Manager
                        </h1>
                        <p style={{ color: '#64748B', fontWeight: 500 }}>Organize, edit, and monitor your curriculum content.</p>
                    </div>
                    <Link href="/tutor/courses/new" className="create-btn hover-scale">
                        <Plus size={20} />
                        Create New Course
                    </Link>
                </div>

                {/* Filters & Search */}
                <div className="filters-bar animate-fade delay-1">
                    <div className="search-box">
                        <Search size={18} className="search-icon" />
                        <input type="text" placeholder="Search your courses..." />
                    </div>
                    <div className="filter-actions">
                        <button className="filter-btn"><Filter size={18} /> Filters</button>
                        <select className="sort-select">
                            <option>Newest First</option>
                            <option>Highest Rated</option>
                            <option>Most Students</option>
                        </select>
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="courses-list animate-slide-up delay-2">
                    {courses.map((course) => (
                        <div key={course.id} className="course-manager-card hover-scale">
                            <div className="course-info-primary">
                                <div className="course-icon-preview">
                                    <BookOpen size={24} color="white" />
                                </div>
                                <div className="course-title-meta">
                                    <h3>{course.title}</h3>
                                    <div className="meta-tags">
                                        <span className={`status-badge ${course.status.toLowerCase().replace(' ', '-')}`}>
                                            {course.status}
                                        </span>
                                        <span className="update-time"><Clock size={12} /> {course.lastUpdated}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="course-metrics-row">
                                <div className="metric-item">
                                    <Users size={16} />
                                    <span><strong>{course.students}</strong> Students</span>
                                </div>
                                <div className="metric-item">
                                    <BarChart2 size={16} />
                                    <span><strong>{course.rating}</strong> Rating</span>
                                </div>
                            </div>

                            <div className="course-progress-section">
                                <div className="progress-labels">
                                    <span>Content Completion</span>
                                    <span>{course.progress}%</span>
                                </div>
                                <div className="progress-track">
                                    <div className="progress-fill" style={{ width: `${course.progress}%`, background: course.progress === 100 ? '#005B52' : '#FF7D00' }}></div>
                                </div>
                            </div>

                            <div className="course-actions">
                                <button className="action-button secondary"><Eye size={18} /> Preview</button>
                                <button className="action-button secondary"><Edit3 size={18} /> Edit Content</button>
                                <button className="action-button danger"><Trash2 size={18} /></button>
                                <button className="more-btn"><MoreVertical size={20} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .manager-container { width: 100%; }

                .create-btn {
                    padding: 14px 24px;
                    background: #FF7D00;
                    color: white;
                    border-radius: 14px;
                    font-weight: 800;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-family: var(--font-heading);
                    box-shadow: 0 10px 20px rgba(255,125,0,0.15);
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
                    padding: 32px;
                    border-radius: 28px;
                    border: 1px solid #E2E8F0;
                    display: grid;
                    grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
                    align-items: center;
                    gap: 40px;
                }

                .course-info-primary {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .course-icon-preview {
                    width: 56px;
                    height: 56px;
                    background: #0F172A;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .course-title-meta h3 {
                    font-size: 18px;
                    font-weight: 900;
                    color: #0F172A;
                    margin: 0 0 6px 0;
                    font-family: var(--font-heading);
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
                    border-radius: 3px;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    border-radius: 3px;
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

                .more-btn {
                    padding: 8px;
                    color: #94A3B8;
                }

                @media (max-width: 1400px) {
                    .course-manager-card {
                        grid-template-columns: 1fr 1fr;
                        gap: 24px;
                    }
                    .course-actions { grid-column: span 2; justify-content: flex-start; }
                }

                @media (max-width: 900px) {
                    .course-manager-card { grid-template-columns: 1fr; }
                    .course-actions { grid-column: span 1; }
                    .filter-actions { display: none; }
                }
            `}</style>
        </AppLayout>
    );
}
