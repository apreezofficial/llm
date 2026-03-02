"use client";
import React from 'react';
import { Search, Filter, MoreHorizontal, UserPlus, Mail } from 'lucide-react';

export default function AdminUsers() {
    const users = [
        { name: 'Sarah Drasner', email: 'sarah@example.com', role: 'Student', status: 'Active', joinDate: '24 Jan 2024' },
        { name: 'Gary Simon', email: 'gary@uiux.com', role: 'Instructor', status: 'Active', joinDate: '12 Feb 2024' },
        { name: 'Alex Thompson', email: 'alex@edu.com', role: 'Student', status: 'Inactive', joinDate: '01 Mar 2024' },
        { name: 'Elena Gilbert', email: 'elena@vamp.com', role: 'Admin', status: 'Active', joinDate: '15 Jan 2024' },
        { name: 'Marcus Aurelius', email: 'marcus@ruler.com', role: 'Instructor', status: 'Active', joinDate: '20 Feb 2024' }
    ];

    return (
        <div>
            <div className="flex justify-between align-center" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 800 }}>User Management</h1>
                    <p style={{ color: '#64748B' }}>Monitor and manage all system participants in one place.</p>
                </div>
                <button className="btn btn-primary"><UserPlus size={18} /> Add New User</button>
            </div>

            <div className="card" style={{ background: 'white', padding: '0', overflow: 'hidden' }}>
                <div style={{ padding: '24px', borderBottom: '1px solid #F1F5F9' }} className="flex justify-between align-center">
                    <div className="flex align-center gap-12" style={{ position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                        <input
                            type="text"
                            placeholder="Search users..."
                            style={{ padding: '10px 10px 10px 40px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', width: '300px', fontSize: '14px' }}
                        />
                    </div>
                    <div className="flex gap-12">
                        <button className="btn btn-outline" style={{ padding: '10px 20px' }}><Filter size={18} /> Filter</button>
                        <button className="btn btn-outline" style={{ padding: '10px 20px' }}>Export CSV</button>
                    </div>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '12px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Name</th>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '12px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Role</th>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '12px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Status</th>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '12px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Join Date</th>
                            <th style={{ textAlign: 'right', padding: '16px 24px' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                <td style={{ padding: '20px 24px' }}>
                                    <div className="flex align-center gap-12">
                                        <div style={{ background: '#E0F2FE', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#0066FF' }}>
                                            {u.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '14px', fontWeight: 700 }}>{u.name}</div>
                                            <div style={{ fontSize: '13px', color: '#64748B' }}>{u.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: '20px 24px' }}>
                                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#1E293B' }}>{u.role}</span>
                                </td>
                                <td style={{ padding: '20px 24px' }}>
                                    <div className="flex align-center gap-4">
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: u.status === 'Active' ? '#10B981' : '#EF4444' }}></div>
                                        <span style={{ fontSize: '13px', fontWeight: 600 }}>{u.status}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '20px 24px', fontSize: '14px', color: '#64748B' }}>{u.joinDate}</td>
                                <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                                    <div className="flex justify-end gap-16">
                                        <Mail size={18} color="#94A3B8" style={{ cursor: 'pointer' }} />
                                        <MoreHorizontal size={18} color="#94A3B8" style={{ cursor: 'pointer' }} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
