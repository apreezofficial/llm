"use client";
import React from 'react';
import { Settings, Shield, Bell, Globe, Mail, Save } from 'lucide-react';

export default function AdminSettings() {
    return (
        <div>
            <div className="flex justify-between align-center" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 800 }}>Platform Settings</h1>
                    <p style={{ color: '#64748B' }}>Configure global system behavior, branding, and security protocols.</p>
                </div>
                <button className="btn btn-primary"><Save size={18} /> Save All Changes</button>
            </div>

            <div className="grid grid-2" style={{ gap: '40px' }}>
                {/* General Settings */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <div className="card" style={{ padding: '32px', background: 'white' }}>
                        <h3 style={{ fontSize: '18px', marginBottom: '24px' }} className="flex align-center gap-8">
                            <Globe size={20} color="#0066FF" /> General Configuration
                        </h3>
                        <div className="flex column gap-20">
                            <div className="input-group">
                                <label className="input-label" style={{ marginBottom: '8px' }}>Store Name</label>
                                <input type="text" defaultValue="EduTrack Pro Institutional" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #E2E8F0', outline: 'none' }} />
                            </div>
                            <div className="input-group">
                                <label className="input-label" style={{ marginBottom: '8px' }}>Support Email</label>
                                <input type="email" defaultValue="admin@edutrack.pro" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #E2E8F0', outline: 'none' }} />
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ padding: '32px', background: 'white' }}>
                        <h3 style={{ fontSize: '18px', marginBottom: '24px' }} className="flex align-center gap-8">
                            <Bell size={20} color="#F59E0B" /> Notification Prefs
                        </h3>
                        <div className="flex column gap-16">
                            {[
                                { label: 'New User Registration', desc: 'Email admin on every new signup' },
                                { label: 'System Updates', desc: 'Receive alerts for maintenance windows' },
                                { label: 'Revenue Milestones', desc: 'Get daily summary of financial performance' }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between align-center">
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: 700 }}>{item.label}</div>
                                        <div style={{ fontSize: '12px', color: '#64748B' }}>{item.desc}</div>
                                    </div>
                                    <div style={{ width: '40px', height: '22px', background: i === 0 ? '#0066FF' : '#E2E8F0', borderRadius: '20px', position: 'relative', cursor: 'pointer' }}>
                                        <div style={{ position: 'absolute', top: '2px', right: i === 0 ? '2px' : 'auto', left: i === 0 ? 'auto' : '2px', width: '18px', height: '18px', background: 'white', borderRadius: '50%' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Security Settings */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <div className="card" style={{ padding: '32px', background: 'white' }}>
                        <h3 style={{ fontSize: '18px', marginBottom: '24px' }} className="flex align-center gap-8">
                            <Shield size={20} color="#EF4444" /> Security & Access
                        </h3>
                        <div className="flex column gap-20">
                            <div className="flex justify-between align-center">
                                <div>
                                    <div style={{ fontSize: '14px', fontWeight: 700 }}>2FA for Admins</div>
                                    <div style={{ fontSize: '12px', color: '#64748B' }}>Enforce Two-Factor Auth for all admin accounts</div>
                                </div>
                                <div style={{ width: '40px', height: '22px', background: '#0066FF', borderRadius: '20px', position: 'relative', cursor: 'pointer' }}>
                                    <div style={{ position: 'absolute', top: '2px', right: '2px', width: '18px', height: '18px', background: 'white', borderRadius: '50%' }}></div>
                                </div>
                            </div>
                            <div className="input-group">
                                <label className="input-label" style={{ marginBottom: '8px' }}>IP Whitelist (Optional)</label>
                                <textarea placeholder="e.g. 192.168.1.1, 10.0.0.1" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #E2E8F0', outline: 'none', height: '80px', fontSize: '13px' }}></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ padding: '32px', background: '#F8FAFC', border: '1px dashed #E2E8F0' }}>
                        <h3 style={{ fontSize: '16px', color: '#EF4444', marginBottom: '12px' }}>Danger Zone</h3>
                        <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px' }}>Irreversible actions like wiping course data or deleting the entire platform instance.</p>
                        <button style={{ background: '#EF444415', color: '#EF4444', border: '1px solid #EF4444', padding: '10px 20px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, width: '100%' }}>Reset System Data</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
