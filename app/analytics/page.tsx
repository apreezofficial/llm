"use client";
import AppLayout from "@/components/AppLayout";
import { TrendingUp, Clock, Target, Zap, BarChart3, PieChart } from "lucide-react";

export default function Analytics() {
    return (
        <AppLayout>
            <div style={{ marginBottom: '40px' }}>
                <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Learning Analytics</h1>
                <p style={{ color: 'var(--text-muted)' }}>Detailed insights into your academic performance and habits.</p>
            </div>

            <div className="grid-3" style={{ marginBottom: '32px' }}>
                <div className="card" style={{ padding: '32px' }}>
                    <div className="flex align-center justify-between" style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '18px' }}>Study Consistency</h3>
                        <span style={{ color: '#10B981', fontWeight: 700, fontSize: '14px', background: '#DCFCE7', padding: '4px 12px', borderRadius: '20px' }}>+12%</span>
                    </div>
                    {/* Mock Chart Visualization */}
                    <div className="flex align-end gap-12" style={{ height: '150px', marginBottom: '20px' }}>
                        {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                            <div key={i} style={{ flex: 1, background: i === 3 ? 'var(--primary)' : 'var(--accent-blue)', height: `${h}%`, borderRadius: '6px' }}></div>
                        ))}
                    </div>
                    <div className="flex justify-between" style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </div>

                <div className="card" style={{ padding: '32px' }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '24px' }}>Skill Distribution</h3>
                    <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 24px' }}>
                        <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E0F2FE" strokeWidth="3" />
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="75, 100" />
                        </svg>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                            <p style={{ fontSize: '24px', fontWeight: 800 }}>75%</p>
                            <p style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>Mastered</p>
                        </div>
                    </div>
                    <div className="flex column gap-10">
                        <div className="flex align-center justify-between" style={{ fontSize: '13px' }}>
                            <span className="flex align-center gap-8"><div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)' }}></div> Frontend</span>
                            <span style={{ fontWeight: 600 }}>45%</span>
                        </div>
                        <div className="flex align-center justify-between" style={{ fontSize: '13px' }}>
                            <span className="flex align-center gap-8"><div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#8B5CF6' }}></div> Backend</span>
                            <span style={{ fontWeight: 600 }}>30%</span>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ padding: '32px' }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '24px' }}>Study Targets</h3>
                    <div className="flex column gap-24">
                        {[
                            { label: 'Courses Completed', current: 12, target: 15, color: 'var(--primary)' },
                            { label: 'Quizzes Passed', current: 42, target: 50, color: '#10B981' },
                            { label: 'Weekly Hours', current: 18, target: 20, color: '#F59E0B' },
                        ].map((target, i) => (
                            <div key={i}>
                                <div className="flex align-center justify-between" style={{ marginBottom: '8px', fontSize: '13px', fontWeight: 600 }}>
                                    <span>{target.label}</span>
                                    <span>{target.current}/{target.target}</span>
                                </div>
                                <div style={{ width: '100%', height: '8px', background: 'var(--bg-soft)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{ width: `${(target.current / target.target) * 100}%`, height: '100%', background: target.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="card" style={{ padding: '32px' }}>
                <div className="flex align-center justify-between" style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '20px' }}>Engagement History</h3>
                    <button className="btn btn-outline">Download Report</button>
                </div>
                <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '32px', paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
                    {[30, 45, 25, 60, 85, 40, 55, 70, 95, 50, 65, 80].map((h, i) => (
                        <div key={i} style={{ flex: 1, position: 'relative' }}>
                            <div style={{
                                height: `${h}%`,
                                background: 'linear-gradient(to top, var(--accent-blue), var(--primary))',
                                borderRadius: '8px 8px 0 0',
                                opacity: 0.8
                            }}></div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between" style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '16px' }}>
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => <span key={m}>{m}</span>)}
                </div>
            </div>
        </AppLayout>
    );
}
