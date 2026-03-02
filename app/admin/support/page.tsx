"use client";
import React from 'react';
import { LifeBuoy, MessageSquare, Clock, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function AdminSupport() {
    return (
        <div>
            <div className="flex justify-between align-center" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 800 }}>Support Center</h1>
                    <p style={{ color: '#64748B' }}>Manage student inquiries and technical assistance requests.</p>
                </div>
                <div className="flex gap-12">
                    <button className="btn btn-outline">Ticket History</button>
                    <button className="btn btn-primary">Create Announcement</button>
                </div>
            </div>

            <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
                {[
                    { label: 'Open Tickets', count: '14', icon: <MessageSquare size={20} />, color: '#0066FF' },
                    { label: 'Unassigned', count: '5', icon: <ShieldAlert size={20} />, color: '#EF4444' },
                    { label: 'Resolved Today', count: '28', icon: <CheckCircle2 size={20} />, color: '#10B981' }
                ].map((stat, i) => (
                    <div key={i} className="card" style={{ padding: '24px', background: 'white', display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ background: `${stat.color}15`, color: stat.color, padding: '12px', borderRadius: '12px' }}>{stat.icon}</div>
                        <div>
                            <div style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>{stat.label}</div>
                            <div style={{ fontSize: '24px', fontWeight: 800 }}>{stat.count}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card" style={{ background: 'white', padding: '0', overflow: 'hidden' }}>
                <div style={{ padding: '24px', borderBottom: '1px solid #F1F5F9' }}>
                    <h3 style={{ fontSize: '18px' }}>Active Tickets</h3>
                </div>
                {[
                    { user: 'Sarah Jenkins', subject: 'Cannot access React Course', priority: 'High', time: '12 mins ago' },
                    { user: 'Marcus Wright', subject: 'Payment failed for Pro bundle', priority: 'Urgent', time: '1h ago' },
                    { user: 'Elena Gilbert', subject: 'Requesting certificate reprint', priority: 'Low', time: '3h ago' }
                ].map((t, i) => (
                    <div key={i} style={{ padding: '20px 24px', borderBottom: '1px solid #F1F5F9', cursor: 'pointer' }} className="flex justify-between align-center">
                        <div className="flex align-center gap-16">
                            <div style={{ background: '#F8FAFC', padding: '10px', borderRadius: '10px' }}>
                                <MessageSquare size={18} color="#64748B" />
                            </div>
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 700 }}>{t.subject}</div>
                                <div style={{ fontSize: '12px', color: '#94A3B8' }}>Submitted by {t.user} • {t.time}</div>
                            </div>
                        </div>
                        <div style={{
                            padding: '4px 12px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontWeight: 800,
                            background: t.priority === 'Urgent' ? '#FEE2E2' : t.priority === 'High' ? '#FFEDD5' : '#F1F5F9',
                            color: t.priority === 'Urgent' ? '#EF4444' : t.priority === 'High' ? '#F59E0B' : '#64748B'
                        }}>
                            {t.priority}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
