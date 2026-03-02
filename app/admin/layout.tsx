"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    BookOpen,
    BarChart3,
    CreditCard,
    LifeBuoy,
    Library,
    ClipboardList,
    Settings,
    Sparkles,
    Bell,
    Search,
    Menu,
    X,
    LogOut,
    ChevronRight,
    ShieldCheck
} from 'lucide-react';

const menuItems = [
    { label: 'Overview', icon: LayoutDashboard, href: '/admin' },
    { label: 'Users', icon: Users, href: '/admin/users' },
    { label: 'Verifications', icon: ShieldCheck, href: '/admin/verifications' },
    { label: 'Courses', icon: BookOpen, href: '/admin/courses' },
    { label: 'Analytics', icon: BarChart3, href: '/admin/analytics' },
    { label: 'Financials', icon: CreditCard, href: '/admin/financials' },
    { label: 'Support', icon: LifeBuoy, href: '/admin/support' },
    { label: 'Library', icon: Library, href: '/admin/library' },
    { label: 'Audit Logs', icon: ClipboardList, href: '/admin/logs' },
    { label: 'AI Insights', icon: Sparkles, href: '/admin/ai-insights' },
    { label: 'Settings', icon: Settings, href: '/admin/settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFC' }}>
            <style jsx global>{`
                @media (max-width: 1024px) {
                    .admin-sidebar { width: 0 !important; overflow: hidden; pointer-events: none; }
                    .admin-main { margin-left: 0 !important; }
                    .sidebar-active .admin-sidebar { width: 280px !important; pointer-events: auto; }
                    .sidebar-active .admin-sidebar-overlay { display: block !important; }
                    .mobile-hide { display: none !important; }
                }
            `}</style>

            {/* Sidebar Overlay for Mobile */}
            <div
                className="admin-sidebar-overlay"
                onClick={() => setIsSidebarOpen(false)}
                style={{
                    display: 'none',
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 95,
                    backdropFilter: 'blur(4px)'
                }}
            ></div>

            <div className={isSidebarOpen ? 'sidebar-active' : ''} style={{ display: 'flex', width: '100%' }}>
                {/* Sidebar */}
                <aside className="admin-sidebar" style={{
                    width: isSidebarOpen ? '280px' : '80px',
                    background: '#0F172A',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'fixed',
                    height: '100vh',
                    zIndex: 100
                }}>
                    {/* Logo Area */}
                    <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Sparkles size={18} color="white" />
                        </div>
                        {(isSidebarOpen || typeof window !== 'undefined' && window.innerWidth < 1024) && <span style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '-0.5px' }}>EduTrack <span style={{ color: '#0066FF' }}>Admin</span></span>}
                    </div>

                    {/* Navigation */}
                    <nav style={{ flex: 1, padding: '24px 12px', overflowY: 'auto' }}>
                        <div className="flex column gap-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => { if (typeof window !== 'undefined' && window.innerWidth < 1024) setIsSidebarOpen(false); }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '12px',
                                        borderRadius: '12px',
                                        color: pathname === item.href ? 'white' : 'rgba(255,255,255,0.6)',
                                        background: pathname === item.href ? 'rgba(255,255,255,0.1)' : 'transparent',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                        fontWeight: pathname === item.href ? 600 : 500
                                    }}
                                >
                                    <item.icon size={20} />
                                    {isSidebarOpen && <span style={{ fontSize: '14px' }}>{item.label}</span>}
                                    {isSidebarOpen && pathname === item.href && <div style={{ marginLeft: 'auto', width: '6px', height: '6px', borderRadius: '50%', background: '#0066FF' }}></div>}
                                </Link>
                            ))}
                        </div>
                    </nav>

                    {/* Footer Sidebar */}
                    <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="flex align-center gap-12" style={{ cursor: 'pointer', opacity: 0.7 }}>
                            <LogOut size={20} />
                            {isSidebarOpen && <span style={{ fontSize: '14px', fontWeight: 600 }}>Sign Out</span>}
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="admin-main" style={{
                    flex: 1,
                    marginLeft: isSidebarOpen ? '280px' : '80px',
                    transition: 'all 0.3s ease',
                    minWidth: 0
                }}>
                    {/* Header */}
                    <header style={{
                        height: '72px',
                        background: 'white',
                        borderBottom: '1px solid #E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 32px',
                        position: 'sticky',
                        top: 0,
                        zIndex: 90
                    }}>
                        <div className="flex align-center gap-16">
                            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ color: '#64748B', background: 'none', border: 'none', cursor: 'pointer' }}>
                                <Menu size={24} />
                            </button>
                            <div style={{ position: 'relative' }} className="mobile-hide">
                                <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                                <input
                                    type="text"
                                    placeholder="Search everything..."
                                    style={{
                                        padding: '10px 10px 10px 40px',
                                        background: '#F1F5F9',
                                        border: 'none',
                                        borderRadius: '10px',
                                        width: '300px',
                                        fontSize: '14px',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                        </div>

                        <div className="flex align-center gap-24">
                            <div className="mobile-hide" style={{ position: 'relative', cursor: 'pointer' }}>
                                <Bell size={22} color="#64748B" />
                                <div style={{ position: 'absolute', top: '0', right: '0', background: '#EF4444', border: '2px solid white', width: '10px', height: '10px', borderRadius: '50%' }}></div>
                            </div>
                            <div className="flex align-center gap-12" style={{ cursor: 'pointer' }}>
                                <div className="mobile-hide text-right">
                                    <div style={{ fontSize: '14px', fontWeight: 700 }}>Admin Master</div>
                                    <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Super Admin</div>
                                </div>
                                <img
                                    src="https://i.pravatar.cc/100?u=admin-master"
                                    style={{ width: '40px', height: '40px', borderRadius: '12px', objectFit: 'cover' }}
                                    alt="Admin"
                                />
                            </div>
                        </div>
                    </header>

                    {/* Body */}
                    <div style={{ padding: '24px' }}>
                        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
