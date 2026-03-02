"use client";
import AppLayout from "@/components/AppLayout";
import { User, Lock, Bell, Eye, Shield, Globe, Camera } from "lucide-react";

export default function Settings() {
    const sections = [
        { name: 'Profile Information', icon: User, active: true },
        { name: 'Password & Security', icon: Lock, active: false },
        { name: 'Notifications', icon: Bell, active: false },
        { name: 'Privacy Settings', icon: Eye, active: false },
        { name: 'Connected Accounts', icon: Globe, active: false },
    ];

    return (
        <AppLayout>
            <div style={{ marginBottom: '40px' }}>
                <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Settings</h1>
                <p style={{ color: 'var(--text-muted)' }}>Manage your account preferences and security.</p>
            </div>

            <div className="grid-2" style={{ gridTemplateColumns: '1fr 2fr' }}>
                <div className="card" style={{ padding: '16px' }}>
                    <div className="flex column gap-8">
                        {sections.map((section, i) => (
                            <button key={i} className="flex align-center gap-12" style={{
                                padding: '14px 16px',
                                borderRadius: '12px',
                                background: section.active ? 'var(--accent-blue)' : 'transparent',
                                color: section.active ? 'var(--primary)' : 'var(--text-muted)',
                                fontWeight: section.active ? 600 : 500,
                                textAlign: 'left'
                            }}>
                                <section.icon size={20} />
                                {section.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="card" style={{ padding: '40px' }}>
                    <h3 style={{ fontSize: '20px', marginBottom: '32px' }}>Profile Information</h3>

                    <div className="flex align-center gap-24" style={{ marginBottom: '40px' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--border)' }}></div>
                            <button style={{ position: 'absolute', bottom: '0', right: '0', width: '32px', height: '32px', background: 'var(--primary)', color: 'white', borderRadius: '50%', border: '3px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Camera size={16} />
                            </button>
                        </div>
                        <div>
                            <p style={{ fontWeight: 700, fontSize: '18px', marginBottom: '4px' }}>Alex Rivers</p>
                            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>alex.rivers@example.com</p>
                            <button className="btn btn-outline" style={{ padding: '6px 16px', fontSize: '13px' }}>Change Photo</button>
                        </div>
                    </div>

                    <div className="grid-2" style={{ gap: '24px', marginBottom: '32px' }}>
                        <div>
                            <label className="input-label">Full Name</label>
                            <input type="text" defaultValue="Alex Rivers" className="auth-input auth-input-no-icon" />
                        </div>
                        <div>
                            <label className="input-label">Username</label>
                            <input type="text" defaultValue="arivers2026" className="auth-input auth-input-no-icon" />
                        </div>
                        <div>
                            <label className="input-label">Email Address</label>
                            <input type="email" defaultValue="alex.rivers@example.com" className="auth-input auth-input-no-icon" />
                        </div>
                        <div>
                            <label className="input-label">Phone Number</label>
                            <input type="text" defaultValue="+1 (555) 000-0000" className="auth-input auth-input-no-icon" />
                        </div>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <label className="input-label">Bio</label>
                        <textarea className="auth-input auth-input-no-icon" style={{ height: '120px', resize: 'none' }} defaultValue="Enthusiastic learner focusing on Full-Stack Development and AI integration."></textarea>
                    </div>

                    <div className="flex justify-end gap-16">
                        <button className="btn btn-outline">Cancel</button>
                        <button className="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
