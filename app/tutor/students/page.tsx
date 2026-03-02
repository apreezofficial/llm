"use client";
import AppLayout from "@/components/AppLayout";
import {
    Users,
    Search,
    Filter,
    Download,
    MoreHorizontal,
    Mail,
    MessageSquare,
    ChevronRight,
    TrendingUp,
    TrendingDown,
    Award
} from "lucide-react";
import Link from "next/link";

export default function StudentRoster() {
    const students = [
        {
            id: 1,
            name: 'Emily Watson',
            email: 'emily.w@example.com',
            course: 'Advanced React Architecture',
            progress: 88,
            performance: 'high',
            trend: 'up',
            avatarColors: ['#FF7D00', '#FFB444']
        },
        {
            id: 2,
            name: 'Michael Chen',
            email: 'm.chen92@example.com',
            course: 'UI/UX Masterclass',
            progress: 45,
            performance: 'avg',
            trend: 'stable',
            avatarColors: ['#005B52', '#00A693']
        },
        {
            id: 3,
            name: 'Sarah Jenkins',
            email: 's.jenkins@example.com',
            course: 'Fullstack Next.js',
            progress: 12,
            performance: 'low',
            trend: 'down',
            avatarColors: ['#0F172A', '#334155']
        },
        {
            id: 4,
            name: 'David Miller',
            email: 'david@millers.io',
            course: 'Advanced React Architecture',
            progress: 95,
            performance: 'high',
            trend: 'up',
            avatarColors: ['#3B82F6', '#60A5FA']
        }
    ];

    return (
        <AppLayout>
            <div className="roster-container">
                {/* Header Area */}
                <div className="flex justify-between align-end animate-slide-up" style={{ marginBottom: '40px' }}>
                    <div>
                        <h1 style={{ fontSize: '36px', fontWeight: 950, color: '#0F172A', fontFamily: 'var(--font-heading)', letterSpacing: '-1.5px', marginBottom: '8px' }}>
                            Student Roster
                        </h1>
                        <p style={{ color: '#64748B', fontWeight: 500 }}>Track student enrollment, progress, and academic performance.</p>
                    </div>
                    <div className="flex gap-16">
                        <button className="secondary-btn hover-scale">
                            <Download size={18} /> Export Data
                        </button>
                    </div>
                </div>

                {/* Search & Actions */}
                <div className="actions-bar animate-fade delay-1">
                    <div className="search-group">
                        <Search size={18} className="search-icon" />
                        <input type="text" placeholder="Search by name, email, or course..." />
                    </div>
                    <div className="flex gap-12">
                        <button className="action-toggle active"><Users size={18} /> Active Students</button>
                        <button className="action-toggle"><Award size={18} /> Top Performers</button>
                    </div>
                </div>

                {/* Student Table */}
                <div className="table-container glass-card animate-slide-up delay-2">
                    <table className="roster-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Enrolled Course</th>
                                <th>Progress Bar</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="roster-row hover-scale">
                                    <td className="student-cell">
                                        <div className="avatar-preview" style={{ background: `linear-gradient(135deg, ${student.avatarColors[0]}, ${student.avatarColors[1]})` }}>
                                            {student.name.charAt(0)}
                                        </div>
                                        <div className="student-info">
                                            <h4>{student.name}</h4>
                                            <p>{student.email}</p>
                                        </div>
                                    </td>
                                    <td className="course-cell">
                                        <div className="course-tag">{student.course}</div>
                                    </td>
                                    <td className="progress-cell">
                                        <div className="progress-value">
                                            <span>{student.progress}%</span>
                                            {student.trend === 'up' && <TrendingUp size={14} color="#1E7E34" />}
                                            {student.trend === 'down' && <TrendingDown size={14} color="#EF4444" />}
                                        </div>
                                        <div className="progress-bar-bg">
                                            <div className="progress-bar-fill" style={{ width: `${student.progress}%`, background: student.progress > 80 ? '#005B52' : student.progress > 40 ? '#FF7D00' : '#EF4444' }}></div>
                                        </div>
                                    </td>
                                    <td className="performance-cell">
                                        <span className={`perf-badge ${student.performance}`}>
                                            {student.performance === 'high' ? 'High Achiever' : student.performance === 'avg' ? 'Average' : 'Needs Support'}
                                        </span>
                                    </td>
                                    <td className="actions-cell">
                                        <div className="flex gap-8">
                                            <button className="icon-action-btn"><MessageSquare size={16} /></button>
                                            <button className="icon-action-btn"><Mail size={16} /></button>
                                            <button className="icon-action-btn more"><MoreHorizontal size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Placeholder */}
                <div className="pagination flex justify-center animate-fade delay-3" style={{ marginTop: '40px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {[1, 2, 3].map(p => (
                            <button key={p} style={{ width: '40px', height: '40px', borderRadius: '12px', background: p === 1 ? '#0F172A' : 'white', color: p === 1 ? 'white' : '#64748B', fontWeight: 800, border: '1px solid #E2E8F0' }}>{p}</button>
                        ))}
                        <button style={{ height: '40px', padding: '0 16px', borderRadius: '12px', background: 'white', color: '#64748B', fontWeight: 800, border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '8px' }}>Next <ChevronRight size={16} /></button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .roster-container { width: 100%; }

                .secondary-btn {
                    padding: 12px 20px;
                    background: white;
                    border: 1px solid #E2E8F0;
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: #0F172A;
                }

                .actions-bar {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 32px;
                    gap: 24px;
                }

                .search-group {
                    position: relative;
                    flex: 1;
                    max-width: 500px;
                }

                .search-icon {
                    position: absolute;
                    left: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #94A3B8;
                }

                .search-group input {
                    width: 100%;
                    padding: 14px 16px 14px 48px;
                    background: white;
                    border: 1px solid #E2E8F0;
                    border-radius: 16px;
                    font-size: 14px;
                    outline: none;
                    transition: all 0.2s;
                }

                .search-group input:focus { border-color: #FF7D00; box-shadow: 0 0 0 4px rgba(255,125,0,0.05); }

                .action-toggle {
                    padding: 12px 20px;
                    border-radius: 14px;
                    font-size: 13px;
                    font-weight: 800;
                    border: 1px solid #E2E8F0;
                    background: white;
                    color: #64748B;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .action-toggle.active {
                    background: #0F172A;
                    color: white;
                    border-color: #0F172A;
                }

                .table-container { 
                    border-radius: 32px;
                    padding: 12px;
                    overflow: hidden;
                }

                .roster-table {
                    width: 100%;
                    border-collapse: collapse;
                    text-align: left;
                }

                .roster-table th {
                    padding: 24px 20px;
                    font-size: 11px;
                    font-weight: 950;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #94A3B8;
                    border-bottom: 1px solid #F1F5F9;
                }

                .roster-row {
                    transition: background 0.2s;
                    border-bottom: 1px solid #F8FAFC;
                }

                .roster-row:last-child { border-bottom: none; }

                .student-cell {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 24px 20px;
                }

                .avatar-preview {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 900;
                    font-size: 18px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }

                .student-info h4 { font-size: 15px; font-weight: 900; color: #0F172A; margin: 0 0 2px 0; }
                .student-info p { font-size: 12px; color: #94A3B8; margin: 0; font-weight: 600; }

                .course-tag {
                    display: inline-block;
                    padding: 6px 12px;
                    background: #F1F5F9;
                    border-radius: 8px;
                    font-size: 12px;
                    font-weight: 800;
                    color: #475569;
                }

                .progress-cell { padding: 24px 20px; width: 200px; }

                .progress-value {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 8px;
                    font-size: 13px;
                    font-weight: 900;
                    color: #0F172A;
                }

                .progress-bar-bg {
                    height: 6px;
                    background: #F1F5F9;
                    border-radius: 3px;
                }

                .progress-bar-fill { height: 100%; border-radius: 3px; }

                .perf-badge {
                    padding: 6px 12px;
                    border-radius: 6px;
                    font-size: 10px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .perf-badge.high { background: #E6F4EA; color: #1E7E34; }
                .perf-badge.avg { background: #FFF7ED; color: #FF7D00; }
                .perf-badge.low { background: #FEF2F2; color: #EF4444; }

                .icon-action-btn {
                    width: 36px;
                    height: 36px;
                    background: #F8FAFC;
                    border: 1px solid #E2E8F0;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #64748B;
                    transition: all 0.2s;
                }

                .icon-action-btn:hover { background: #0F172A; color: white; border-color: #0F172A; }
                .icon-action-btn.more { border: none; background: transparent; }

                @media (max-width: 1024px) {
                    .roster-table th:nth-child(2), .roster-table td:nth-child(2) { display: none; }
                    .progress-cell { width: 150px; }
                }

                @media (max-width: 768px) {
                    .actions-bar { flex-direction: column; }
                    .search-group { max-width: none; }
                    .roster-table th:nth-child(3), .roster-table td:nth-child(3) { display: none; }
                }
            `}</style>
        </AppLayout>
    );
}
