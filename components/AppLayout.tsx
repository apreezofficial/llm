"use client";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { Bell, Search, User } from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-soft)' }}>
            <Sidebar />
            <main style={{ flex: 1, marginLeft: '280px', padding: '40px' }}>
                {/* App Header */}
                <header className="flex align-center justify-between" style={{ marginBottom: '40px' }}>
                    <div style={{ position: 'relative', width: '400px' }}>
                        <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Search courses, lessons, assignments..."
                            style={{
                                width: '100%',
                                padding: '12px 16px 12px 48px',
                                borderRadius: '14px',
                                border: '1px solid var(--border)',
                                background: 'white',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div className="flex align-center gap-24">
                        <button style={{ position: 'relative', color: 'var(--text-muted)' }}>
                            <Bell size={22} />
                            <span style={{
                                position: 'absolute',
                                top: '-2px',
                                right: '-2px',
                                width: '8px',
                                height: '8px',
                                background: '#EF4444',
                                borderRadius: '50%',
                                border: '2px solid white'
                            }}></span>
                        </button>

                        <div className="flex align-center gap-12" style={{ padding: '6px 12px', background: 'white', borderRadius: '12px', border: '1px solid var(--border)' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                <User size={20} />
                            </div>
                            <div className="mobile-hide">
                                <p style={{ fontSize: '14px', fontWeight: 600 }}>Alex Rivers</p>
                                <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Pro Learner</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="animate-fade">
                    {children}
                </div>
            </main>
        </div>
    );
}
