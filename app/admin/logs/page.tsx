"use client";
import React from 'react';
import { ClipboardList, Shield, User, Globe, AlertCircle } from 'lucide-react';

export default function AdminLogs() {
    const logs = [
        { user: 'Admin Group', action: 'Modified course pricing', target: 'Python for Data Science', ip: '192.168.1.1', time: '10 mins ago' },
        { user: 'Sarah Drasner', action: 'Password reset requested', target: 'sarah@example.com', ip: '45.12.33.2', time: '1h ago' },
        { user: 'System', action: 'Failed login attempt', target: 'Unknown User', ip: '101.44.2.12', time: '3h ago', warning: true },
        { user: 'Elena Gilbert', action: 'Assigned new role', target: 'Marcus Wright (Tutor)', ip: '88.19.2.1', time: '5h ago' }
    ];

    return (
        <div>
            <div className="flex justify-between align-center" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 800 }}>Audit Logs</h1>
                    <p style={{ color: '#64748B' }}>Traceable history of all administrative and system-level actions.</p>
                </div>
                <button className="btn btn-outline"><Shield size={18} /> Security Settings</button>
            </div>

            <div className="card" style={{ background: 'white', padding: '0', overflow: 'hidden' }}>
                <div style={{ padding: '24px', borderBottom: '1px solid #F1F5F9' }} className="flex justify-between align-center">
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#64748B' }}>Real-time event stream</span>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', animation: 'pulse 2s infinite' }}></div>
                        <span style={{ fontSize: '12px', fontWeight: 800, color: '#10B981', textTransform: 'uppercase' }}>Live</span>
                    </div>
                </div>

                <div className="flex column">
                    {logs.map((log, i) => (
                        <div key={i} style={{ padding: '20px 24px', borderBottom: '1px solid #F1F5F9', background: log.warning ? '#FFFBEB' : 'transparent' }}>
                            <div className="flex justify-between align-center" style={{ marginBottom: '8px' }}>
                                <div className="flex align-center gap-12">
                                    <div style={{ background: log.warning ? '#FEF3C7' : '#F1F5F9', padding: '8px', borderRadius: '8px' }}>
                                        {log.warning ? <AlertCircle size={16} color="#F59E0B" /> : <User size={16} color="#64748B" />}
                                    </div>
                                    <span style={{ fontSize: '14px' }}><strong>{log.user}</strong> {log.action}</span>
                                </div>
                                <span style={{ fontSize: '12px', color: '#94A3B8' }}>{log.time}</span>
                            </div>
                            <div className="flex gap-24" style={{ marginLeft: '48px', fontSize: '12px', color: '#64748B' }}>
                                <span>Target: <strong style={{ color: '#1E293B' }}>{log.target}</strong></span>
                                <span>IP Address: <code>{log.ip}</code></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes pulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.4; }
                    100% { opacity: 1; }
                }
            `}</style>
        </div>
    );
}
