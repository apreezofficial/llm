"use client";
import React, { useState } from 'react';
import {
    CheckCircle2,
    XCircle,
    Clock,
    Search,
    Filter,
    FileText,
    Eye,
    MoreVertical,
    ShieldCheck,
    AlertCircle
} from 'lucide-react';

export default function AdminVerifications() {
    const [filter, setFilter] = useState('all');

    const pendingRequests = [
        {
            id: 'V-1001',
            user: 'Dr. Sarah Mitchell',
            type: 'Tutor',
            documents: ['Certification.pdf', 'ID_Front.jpg'],
            status: 'Pending',
            date: '2 hours ago',
            avatar: 'https://i.pravatar.cc/100?u=sarah'
        },
        {
            id: 'V-1002',
            user: 'Institution: Pine Academy',
            type: 'School',
            documents: ['Business_License.pdf'],
            status: 'Pending',
            date: '5 hours ago',
            avatar: 'https://i.pravatar.cc/100?u=pine'
        },
        {
            id: 'V-1003',
            user: 'James Wilson',
            type: 'Tutor',
            documents: ['Degree_Certificate.pdf'],
            status: 'Reviewing',
            date: 'Yesterday',
            avatar: 'https://i.pravatar.cc/100?u=james'
        },
        {
            id: 'V-1004',
            user: 'Master Class Ltd.',
            type: 'Organization',
            documents: ['Tax_ID.pdf', 'Compliance.pdf'],
            status: 'Pending',
            date: 'Mar 10, 2024',
            avatar: 'https://i.pravatar.cc/100?u=master'
        }
    ];

    return (
        <div>
            <div className="flex justify-between align-center" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 800 }}>Verification Requests</h1>
                    <p style={{ color: '#64748B' }}>Review and approve user identities and institutional credentials.</p>
                </div>
                <div style={{ background: '#EEF2FF', padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ShieldCheck size={20} color="#0066FF" />
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#0066FF' }}>14 Pending Approvals</span>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
                {[
                    { label: 'Avg. Response Time', value: '4.2 Hours', icon: <Clock size={20} />, color: '#0066FF' },
                    { label: 'Auto-Rejected (AI)', value: '124', icon: <AlertCircle size={20} />, color: '#EF4444' },
                    { label: 'Verified This Month', value: '892', icon: <CheckCircle2 size={20} />, color: '#10B981' }
                ].map((stat, i) => (
                    <div key={i} className="card" style={{ padding: '24px', background: 'white', display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ background: `${stat.color}15`, color: stat.color, padding: '12px', borderRadius: '12px' }}>{stat.icon}</div>
                        <div>
                            <div style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>{stat.label}</div>
                            <div style={{ fontSize: '24px', fontWeight: 800 }}>{stat.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Table Container */}
            <div className="card" style={{ background: 'white', padding: '0', overflow: 'hidden' }}>
                <div style={{ padding: '24px', borderBottom: '1px solid #F1F5F9' }} className="flex justify-between align-center flex-mobile-column gap-16">
                    <div className="flex align-center gap-12" style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                        <input
                            type="text"
                            placeholder="Search requests by name or ID..."
                            style={{
                                width: '100%',
                                padding: '12px 12px 12px 42px',
                                background: '#F8FAFC',
                                border: '1px solid #E2E8F0',
                                borderRadius: '10px',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <div className="flex gap-12 w-full justify-end">
                        <select
                            style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid #E2E8F0', fontSize: '14px', outline: 'none' }}
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="all">All Types</option>
                            <option value="tutor">Tutors Only</option>
                            <option value="inst">Institutions</option>
                        </select>
                        <button className="btn btn-outline" style={{ padding: '10px 20px' }}><Filter size={18} /> Filter</button>
                    </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                        <thead>
                            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>User / Identity</th>
                                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Entity Type</th>
                                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Documents</th>
                                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Status</th>
                                <th style={{ textAlign: 'right', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingRequests.map((req, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid #F1F5F9', transition: 'background 0.2s' }} className="hover-row">
                                    <td style={{ padding: '20px 24px' }}>
                                        <div className="flex align-center gap-16">
                                            <img src={req.avatar} style={{ width: '42px', height: '42px', borderRadius: '12px', objectFit: 'cover' }} />
                                            <div>
                                                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B' }}>{req.user}</div>
                                                <div style={{ fontSize: '12px', color: '#94A3B8' }}>ID: {req.id} • Submitted {req.date}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '20px 24px' }}>
                                        <span style={{
                                            fontSize: '12px',
                                            fontWeight: 700,
                                            background: '#F1F5F9',
                                            padding: '4px 10px',
                                            borderRadius: '6px',
                                            color: '#64748B'
                                        }}>{req.type}</span>
                                    </td>
                                    <td style={{ padding: '20px 24px' }}>
                                        <div className="flex gap-8">
                                            {req.documents.map((doc, idx) => (
                                                <div key={idx} style={{
                                                    background: '#F8FAFC',
                                                    border: '1px solid #E2E8F0',
                                                    padding: '6px 8px',
                                                    borderRadius: '6px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    cursor: 'pointer'
                                                }}>
                                                    <FileText size={14} color="#64748B" />
                                                    <span style={{ fontSize: '11px', fontWeight: 600 }}>Doc {idx + 1}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                    <td style={{ padding: '20px 24px' }}>
                                        <div className="flex align-center gap-6">
                                            <div style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                background: req.status === 'Pending' ? '#F59E0B' : '#0066FF'
                                            }}></div>
                                            <span style={{ fontSize: '13px', fontWeight: 700, color: req.status === 'Pending' ? '#92400E' : '#0066FF' }}>{req.status}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                                        <div className="flex justify-end gap-12">
                                            <button className="btn btn-primary" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '12px' }}>
                                                <Eye size={14} /> Review
                                            </button>
                                            <div style={{ background: '#FEE2E2', padding: '8px', borderRadius: '8px', cursor: 'pointer', color: '#EF4444' }}>
                                                <XCircle size={18} />
                                            </div>
                                            <div style={{ background: '#DCFCE7', padding: '8px', borderRadius: '8px', cursor: 'pointer', color: '#10B981' }}>
                                                <CheckCircle2 size={18} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <style jsx>{`
                .hover-row:hover {
                    background: #F8FAFC;
                }
            `}</style>
        </div>
    );
}
