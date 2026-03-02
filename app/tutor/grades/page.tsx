"use client";
import AppLayout from "@/components/AppLayout";
import {
    Award,
    Search,
    Filter,
    FileText,
    MoreVertical,
    Download,
    Save,
    CheckCircle2,
    AlertCircle,
    BarChart3,
    ArrowUpRight
} from "lucide-react";
import { useState } from "react";

export default function Gradebook() {
    const [grades, setGrades] = useState([
        { id: 1, student: 'Emily Watson', subject: 'Advanced React', assessment: 'Redux Pattern Quiz', score: 95, status: 'Graded', date: 'Oct 12' },
        { id: 2, student: 'Michael Chen', subject: 'UI/UX Design', assessment: 'Typography Lab', score: 82, status: 'Graded', date: 'Oct 11' },
        { id: 3, student: 'Sarah Jenkins', subject: 'Next.js 15', assessment: 'Server Components Prep', score: 0, status: 'Pending', date: 'Oct 10' },
        { id: 4, student: 'David Miller', subject: 'Advanced React', assessment: 'Performance Optimization', score: 98, status: 'Graded', date: 'Oct 09' },
        { id: 5, student: 'Jessica Lee', subject: 'Next.js 15', assessment: 'API Routes Exercise', score: 88, status: 'Graded', date: 'Oct 08' },
    ]);

    return (
        <AppLayout>
            <div className="gradebook-container">
                {/* Header Section */}
                <div className="flex justify-between align-end animate-slide-up" style={{ marginBottom: '40px' }}>
                    <div>
                        <div className="flex align-center gap-8" style={{ marginBottom: '12px' }}>
                            <Award size={20} color="#FF7D00" />
                            <span style={{ fontSize: '11px', fontWeight: 900, color: '#FF7D00', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Assessment Hub</span>
                        </div>
                        <h1 style={{ fontSize: '36px', fontWeight: 950, color: '#0F172A', fontFamily: 'var(--font-heading)', letterSpacing: '-1.5px', marginBottom: '8px' }}>
                            Gradebook
                        </h1>
                        <p style={{ color: '#64748B', fontWeight: 500 }}>Review and validate student submissions across all active curricula.</p>
                    </div>
                    <div className="flex gap-16">
                        <button className="primary-btn hover-scale">
                            <Save size={18} /> Sync Grades
                        </button>
                    </div>
                </div>

                {/* Performance Summary Cards */}
                <div className="summary-cards animate-fade delay-1">
                    <div className="summary-card glass-card">
                        <div className="card-top">
                            <h4 className="card-label">Average Score</h4>
                            <div className="trend-indicator up">+2.4%</div>
                        </div>
                        <p className="card-value">88.4<span className="unit">%</span></p>
                        <BarChart3 size={32} color="#FF7D00" className="card-bg-icon" />
                    </div>
                    <div className="summary-card glass-card">
                        <div className="card-top">
                            <h4 className="card-label">Pass Rate</h4>
                        </div>
                        <p className="card-value">94.2<span className="unit">%</span></p>
                        <CheckCircle2 size={32} color="#005B52" className="card-bg-icon" />
                    </div>
                    <div className="summary-card glass-card">
                        <div className="card-top">
                            <h4 className="card-label">Pending Reviews</h4>
                        </div>
                        <p className="card-value">14<span className="unit">items</span></p>
                        <AlertCircle size={32} color="#64748B" className="card-bg-icon" />
                    </div>
                </div>

                {/* Toolbar */}
                <div className="toolbar animate-slide-up delay-2">
                    <div className="search-group">
                        <Search size={18} className="search-icon" />
                        <input type="text" placeholder="Filter by student or assessment..." />
                    </div>
                    <div className="filter-group">
                        <button className="filter-pill active">All Assessments</button>
                        <button className="filter-pill">Quizzes</button>
                        <button className="filter-pill">Labs</button>
                        <button className="action-btn"><Download size={18} /></button>
                    </div>
                </div>

                {/* Grades Table */}
                <div className="table-wrapper glass-card animate-slide-up delay-3">
                    <table className="gradebook-table">
                        <thead>
                            <tr>
                                <th>Student & Assessment</th>
                                <th>Subject Domain</th>
                                <th>Score</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {grades.map((grade) => (
                                <tr key={grade.id} className="grade-row">
                                    <td className="info-cell">
                                        <div className="flex align-center gap-16">
                                            <div className="type-icon"><FileText size={18} /></div>
                                            <div>
                                                <p className="student-name">{grade.student}</p>
                                                <p className="assessment-name">{grade.assessment}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="subject-tag">{grade.subject}</span></td>
                                    <td><strong className="score-text" style={{ color: grade.score >= 90 ? '#005B52' : grade.score > 0 ? '#FF7D00' : '#94A3B8' }}>{grade.score > 0 ? `${grade.score}%` : '--'}</strong></td>
                                    <td>
                                        <div className={`status-pill ${grade.status.toLowerCase()}`}>
                                            <div className="dot"></div>
                                            {grade.status}
                                        </div>
                                    </td>
                                    <td className="date-cell">{grade.date}</td>
                                    <td><button className="more-btn"><MoreVertical size={20} /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <style jsx>{`
                .gradebook-container { width: 100%; }

                .primary-btn {
                    padding: 14px 28px;
                    background: #FF7D00;
                    color: white;
                    border: none;
                    border-radius: 16px;
                    font-weight: 800;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-family: var(--font-heading);
                    box-shadow: 0 10px 25px rgba(255,125,0,0.2);
                }

                .summary-cards {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    margin-bottom: 40px;
                }

                .summary-card {
                    padding: 32px;
                    border-radius: 28px;
                    position: relative;
                    overflow: hidden;
                    background: white;
                }

                .card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; }
                .card-label { font-size: 12px; font-weight: 950; text-transform: uppercase; letter-spacing: 1px; color: #94A3B8; }
                .trend-indicator { padding: 4px 10px; border-radius: 30px; font-size: 11px; font-weight: 800; }
                .trend-indicator.up { background: #E6F4EA; color: #1E7E34; }
                
                .card-value { font-size: 42px; font-weight: 950; color: #0F172A; font-family: var(--font-heading); letter-spacing: -1px; }
                .card-value .unit { font-size: 16px; color: #94A3B8; margin-left: 4px; font-weight: 700; }
                
                .card-bg-icon { position: absolute; bottom: 20px; right: 20px; opacity: 0.1; transform: scale(3) rotate(-10deg); pointer-events: none; }

                .toolbar {
                    display: flex;
                    justify-content: space-between;
                    background: white;
                    padding: 12px;
                    border-radius: 20px;
                    border: 1px solid #E2E8F0;
                    margin-bottom: 32px;
                    gap: 20px;
                }

                .search-group { position: relative; flex: 1; max-width: 400px; }
                .search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #94A3B8; }
                .search-group input { width: 100%; padding: 12px 16px 12px 48px; border-radius: 12px; border: none; background: #F8FAFC; font-size: 14px; outline: none; }

                .filter-group { display: flex; gap: 8px; }
                .filter-pill { padding: 0 16px; border-radius: 10px; border: 1px solid transparent; background: transparent; color: #64748B; font-size: 13px; font-weight: 800; }
                .filter-pill.active { background: #F1F5F9; color: #0F172A; border-color: #E2E8F0; }
                .action-btn { width: 42px; height: 42px; border-radius: 10px; background: white; border: 1px solid #E2E8F0; display: flex; align-items: center; justify-content: center; color: #64748B; }

                .table-wrapper { border-radius: 32px; padding: 12px; overflow: hidden; }
                .gradebook-table { width: 100%; border-collapse: collapse; text-align: left; }
                .gradebook-table th { padding: 24px 20px; font-size: 11px; font-weight: 950; text-transform: uppercase; letter-spacing: 1.2px; color: #94A3B8; border-bottom: 1px solid #F1F5F9; }
                
                .grade-row { border-bottom: 1px solid #F8FAFC; transition: background 0.2s; }
                .grade-row:hover { background: #F8FAFC; }
                .grade-row:last-child { border-bottom: none; }

                .info-cell { padding: 24px 20px; }
                .type-icon { width: 44px; height: 44px; background: #F1F5F9; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #64748B; }
                .student-name { font-size: 15px; font-weight: 900; color: #0F172A; margin: 0 0 2px 0; }
                .assessment-name { font-size: 12px; color: #94A3B8; font-weight: 600; margin: 0; }

                .subject-tag { padding: 6px 12px; background: #E6F0EF; color: #005B52; border-radius: 8px; font-size: 11px; font-weight: 900; }
                .score-text { font-size: 18px; font-family: var(--font-heading); }

                .status-pill { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 30px; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px; }
                .status-pill .dot { width: 6px; height: 6px; border-radius: 50%; }
                .status-pill.graded { background: #E6F4EA; color: #1E7E34; }
                .status-pill.graded .dot { background: #1E7E34; }
                .status-pill.pending { background: #F1F5F9; color: #64748B; }
                .status-pill.pending .dot { background: #94A3B8; }

                .date-cell { font-size: 13px; color: #64748B; font-weight: 600; }
                .more-btn { padding: 8px; color: #94A3B8; background: none; border: none; }

                @media (max-width: 1024px) {
                    .summary-cards { grid-template-columns: 1fr; }
                    .gradebook-table th:nth-child(2), .gradebook-table td:nth-child(2) { display: none; }
                }

                @media (max-width: 640px) {
                    .toolbar { flex-direction: column; height: auto; padding: 16px; }
                    .search-group { max-width: none; }
                    .gradebook-table th:nth-child(4), .gradebook-table td:nth-child(4) { display: none; }
                    .gradebook-table th:nth-child(5), .gradebook-table td:nth-child(5) { display: none; }
                }
            `}</style>
        </AppLayout>
    );
}
