"use client";
import AppLayout from "@/components/AppLayout";
import { FileText, Clock, AlertCircle, CheckCircle2, ChevronRight } from "lucide-react";

export default function Assignments() {
    const assignments = [
        { id: 1, title: 'Responsive Design Project', course: 'UI/UX Design Masterclass', dueDate: 'Tomorrow, 11:59 PM', status: 'Pending', priority: 'High', points: 100 },
        { id: 2, title: 'API Integration Labs', course: 'Advanced React Architecture', dueDate: 'Mar 15, 2026', status: 'Submitted', priority: 'Medium', points: 50 },
        { id: 3, title: 'Final Research Paper', course: 'Cybersecurity Essentials', dueDate: 'Mar 20, 2026', status: 'In Progress', priority: 'Critical', points: 200 },
    ];

    return (
        <AppLayout>
            <div className="flex align-center justify-between" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Assignments</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Manage your tasks and project deadlines.</p>
                </div>
                <div className="flex gap-12">
                    <div style={{ display: 'flex', background: 'white', padding: '4px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                        <button className="badge-pill" style={{ background: 'var(--accent-blue)', color: 'var(--primary)', border: 'none' }}>Active</button>
                        <button className="badge-pill" style={{ background: 'transparent', color: 'var(--text-muted)', border: 'none' }}>Completed</button>
                    </div>
                </div>
            </div>

            <div className="flex column gap-20">
                {assignments.map((assignment) => (
                    <div key={assignment.id} className="card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <div style={{ padding: '16px', background: assignment.status === 'Submitted' ? '#DCFCE7' : '#FEF3C7', color: assignment.status === 'Submitted' ? '#16A34A' : '#D97706', borderRadius: '16px' }}>
                            <FileText size={28} />
                        </div>

                        <div style={{ flex: 1 }}>
                            <div className="flex align-center gap-12" style={{ marginBottom: '4px' }}>
                                <h3 style={{ fontSize: '18px' }}>{assignment.title}</h3>
                                <span className="badge-pill" style={{
                                    fontSize: '11px',
                                    background: assignment.priority === 'Critical' ? '#FEE2E2' : (assignment.priority === 'High' ? '#FFEDD5' : '#E0F2FE'),
                                    color: assignment.priority === 'Critical' ? '#EF4444' : (assignment.priority === 'High' ? '#F59E0B' : '#0EA5E9')
                                }}>
                                    {assignment.priority} Priority
                                </span>
                            </div>
                            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{assignment.course} • {assignment.points} Points</p>
                        </div>

                        <div style={{ textAlign: 'right', minWidth: '180px' }}>
                            <div className="flex align-center justify-end gap-8" style={{ marginBottom: '8px', color: assignment.status === 'Submitted' ? '#16A34A' : 'var(--text-muted)', fontSize: '14px', fontWeight: 600 }}>
                                {assignment.status === 'Submitted' ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                                {assignment.status === 'Submitted' ? 'Submitted' : assignment.dueDate}
                            </div>
                            <button className="btn btn-outline" style={{ padding: '6px 16px', fontSize: '13px' }}>
                                {assignment.status === 'Submitted' ? 'View Submission' : 'Start Task'} <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
