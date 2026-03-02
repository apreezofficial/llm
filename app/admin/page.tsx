"use client";
import React from 'react';
import {
    Users,
    BookOpen,
    TrendingUp,
    DollarSign,
    ArrowUpRight,
    ArrowDownRight,
    Activity,
    CheckCircle2,
    Clock,
    UserPlus
} from 'lucide-react';

export default function AdminOverview() {
    const stats = [
        { label: 'Total active Users', value: '1,284', trend: '+12%', icon: Users, color: '#0066FF' },
        { label: 'Courses Published', value: '422', trend: '+5%', icon: BookOpen, color: '#10B981' },
        { label: 'Monthly Revenue', value: '$84,200', trend: '+18%', icon: DollarSign, color: '#8B5CF6' },
        { label: 'Completion Rate', value: '76%', trend: '-2%', icon: CheckCircle2, color: '#F59E0B' },
    ];

    return (
        <div>
            <div className="flex justify-between align-center" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 800 }}>Dashboard Overview</h1>
                    <p style={{ color: '#64748B' }}>Welcome back. Here's what's happening with your platform today.</p>
                </div>
                <button className="btn btn-primary">Generate Report</button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-4" style={{ marginBottom: '40px' }}>
                {stats.map((stat, i) => (
                    <div key={i} className="card" style={{ padding: '24px', background: 'white' }}>
                        <div className="flex justify-between align-center" style={{ marginBottom: '20px' }}>
                            <div style={{ background: `${stat.color}15`, color: stat.color, padding: '10px', borderRadius: '12px' }}>
                                <stat.icon size={24} />
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                color: stat.trend.startsWith('+') ? '#10B981' : '#EF4444',
                                fontSize: '13px',
                                fontWeight: 700,
                                background: stat.trend.startsWith('+') ? '#DCFCE7' : '#FEE2E2',
                                padding: '4px 8px',
                                borderRadius: '20px'
                            }}>
                                {stat.trend.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                {stat.trend}
                            </div>
                        </div>
                        <div style={{ fontSize: '14px', color: '#64748B', fontWeight: 500, marginBottom: '8px' }}>{stat.label}</div>
                        <div style={{ fontSize: '28px', fontWeight: 800 }}>{stat.value}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-2" style={{ gap: '32px' }}>
                {/* Recent Activities */}
                <div className="card" style={{ background: 'white', padding: '32px' }}>
                    <div className="flex justify-between align-center" style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '18px' }}>Recent User Activity</h3>
                        <span style={{ fontSize: '13px', color: '#0066FF', fontWeight: 700, cursor: 'pointer' }}>View All</span>
                    </div>
                    <div className="flex column gap-20">
                        {[
                            { user: 'Sarah Jenkins', action: 'enrolled in Advanced React', time: '2 mins ago', icon: <UserPlus size={16} />, color: '#3B82F6' },
                            { user: 'Marcus Wright', action: 'completed Physics Exam', time: '12 mins ago', icon: <CheckCircle2 size={16} />, color: '#10B981' },
                            { user: 'Admin Group', action: 'updated platform settings', time: '1h ago', icon: <Settings size={16} />, color: '#64748B' },
                            { user: 'System', action: 'automated backup completed', time: '3h ago', icon: <Activity size={16} />, color: '#8B5CF6' }
                        ].map((act, i) => (
                            <div key={i} className="flex align-center gap-16">
                                <div style={{ background: `${act.color}15`, color: act.color, padding: '8px', borderRadius: '8px' }}>{act.icon}</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '14px' }}><strong>{act.user}</strong> {act.action}</div>
                                    <div style={{ fontSize: '12px', color: '#94A3B8' }}>{act.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Efficiency */}
                <div className="card" style={{ background: 'white', padding: '32px' }}>
                    <div className="flex justify-between align-center" style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '18px' }}>System Efficiency</h3>
                        <Activity size={20} color="#94A3B8" />
                    </div>
                    <div className="flex column gap-24">
                        {[
                            { label: 'Server Uptime', value: '99.98%', status: 'Healthy' },
                            { label: 'API Latency', value: '142ms', status: 'Optimal' },
                            { label: 'Storage Used', value: '64%', status: 'Warning' }
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="flex justify-between align-center" style={{ marginBottom: '10px' }}>
                                    <span style={{ fontSize: '14px', fontWeight: 600 }}>{item.label}</span>
                                    <span style={{ fontSize: '12px', fontWeight: 800, color: item.status === 'Healthy' ? '#10B981' : item.status === 'Optimal' ? '#0066FF' : '#F59E0B' }}>{item.status}</span>
                                </div>
                                <div style={{ height: '8px', width: '100%', background: '#F1F5F9', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{
                                        height: '100%',
                                        width: item.label === 'Storage Used' ? '64%' : '95%',
                                        background: item.status === 'Healthy' ? '#10B981' : item.status === 'Optimal' ? '#0066FF' : '#F59E0B'
                                    }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Minimal mock icons for activity
const Settings = ({ size }: { size: number }) => (
    <Activity size={size} />
);
