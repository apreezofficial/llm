"use client";
import React from 'react';
import {
    Users,
    Video,
    CreditCard,
    BarChart3,
    Settings,
    Search,
    Bell,
    Plus,
    Download,
    MoreVertical,
    ChevronDown,
    LayoutDashboard,
    Activity,
    ArrowUpRight,
    Monitor
} from 'lucide-react';

const AdminDashboard = () => {
    const users = [
        { id: 1, name: 'Jane Doe', email: 'jane.doe@eduplatform.com', role: 'Student', status: 'ACTIVE', grade: '11th Grade', lastLogin: '2 hours ago', initial: 'JD', color: '#3B82F6' },
        { id: 2, name: 'Prof. Michael Smith', email: 'm.smith@eduplatform.com', role: 'Tutor', status: 'ACTIVE', grade: 'Mathematics', lastLogin: '10 mins ago', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop' },
        { id: 3, name: 'Alex Rivera', email: 'alex.r@eduplatform.com', role: 'Student', status: 'PENDING', grade: 'Sophomore', lastLogin: 'Yesterday', initial: 'AR', color: '#F59E0B' },
        { id: 4, name: 'Sarah Jenkins', email: 's.jenkins@eduplatform.com', role: 'Admin', status: 'ACTIVE', grade: 'District Admin', lastLogin: 'Just now', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop' },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFC', color: '#1E293B', fontFamily: 'Inter, sans-serif' }}>
            {/* Sidebar */}
            <aside style={{ width: '260px', background: 'white', borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Monitor size={18} color="white" />
                    </div>
                    <span style={{ fontWeight: 800, fontSize: '20px', letterSpacing: '-0.5px' }}>EduAdmin</span>
                </div>

                <nav style={{ flex: 1, padding: '12px' }}>
                    {[
                        { name: 'Dashboard', icon: <LayoutDashboard size={20} />, active: true },
                        { name: 'User Management', icon: <Users size={20} /> },
                        { name: 'Virtual Classes', icon: <Video size={20} /> },
                        { name: 'Subscriptions', icon: <CreditCard size={20} /> },
                        { name: 'Reports', icon: <BarChart3 size={20} /> },
                        { name: 'System Logs', icon: <Activity size={20} /> },
                    ].map((item) => (
                        <div
                            key={item.name}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '12px 16px',
                                borderRadius: '10px',
                                marginBottom: '4px',
                                cursor: 'pointer',
                                background: item.active ? '#EFF6FF' : 'transparent',
                                color: item.active ? '#0066FF' : '#64748B',
                                fontWeight: item.active ? 700 : 500,
                                fontSize: '14px'
                            }}
                        >
                            {item.icon}
                            {item.name}
                        </div>
                    ))}
                </nav>

                <div style={{ padding: '20px', borderTop: '1px solid #E2E8F0' }}>
                    <div style={{ background: '#F1F5F9', borderRadius: '12px', padding: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
                            alt="Marcus Chen"
                            style={{ width: '36px', height: '36px', borderRadius: '8px', objectFit: 'cover' }}
                        />
                        <div>
                            <div style={{ fontSize: '13px', fontWeight: 700 }}>Marcus Chen</div>
                            <div style={{ fontSize: '11px', color: '#64748B' }}>Super Admin</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, overflowY: 'auto' }}>
                {/* Header */}
                <header style={{ background: 'white', padding: '16px 32px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 10 }}>
                    <div>
                        <h1 style={{ fontSize: '20px', fontWeight: 800 }}>Admin Management Console</h1>
                        <p style={{ fontSize: '13px', color: '#64748B' }}>K-12 & Higher Ed LMS Platform</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }}>
                                <Search size={16} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search data, users, logs..."
                                style={{ background: '#F1F5F9', border: 'none', borderRadius: '8px', padding: '10px 12px 10px 40px', width: '280px', fontSize: '13px', outline: 'none' }}
                            />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Bell size={20} color="#64748B" />
                            <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '6px', height: '6px', background: '#EF4444', borderRadius: '50%', border: '2px solid white' }}></div>
                        </div>
                        <button style={{ background: '#0066FF', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 16px', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Plus size={16} /> Add New User
                        </button>
                    </div>
                </header>

                <div style={{ padding: '32px' }}>
                    {/* Stats Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                        {[
                            { label: 'TOTAL STUDENTS', value: '12,450', change: '+12.5% vs last month', icon: <Users size={20} color="#0066FF" />, trend: 'up' },
                            { label: 'ACTIVE TUTORS', value: '420', change: '88% currently online', icon: <Video size={20} color="#0066FF" />, trend: 'online' },
                            { label: 'MONTHLY REVENUE', value: '$45,200', change: 'Steady growth', icon: <CreditCard size={20} color="#0066FF" />, trend: 'steady' },
                        ].map((stat, idx) => (
                            <div key={idx} style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div>
                                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', letterSpacing: '0.5px' }}>{stat.label}</div>
                                    <div style={{ fontSize: '28px', fontWeight: 800, margin: '8px 0' }}>{stat.value}</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 600, color: stat.trend === 'up' ? '#22C55E' : stat.trend === 'online' ? '#22C55E' : '#F59E0B' }}>
                                        {stat.trend === 'up' && <ArrowUpRight size={14} />}
                                        {stat.trend === 'online' && <div style={{ width: '6px', height: '6px', background: '#22C55E', borderRadius: '50%' }}></div>}
                                        {stat.trend === 'steady' && <span>→</span>}
                                        {stat.change}
                                    </div>
                                </div>
                                <div style={{ background: '#EFF6FF', padding: '12px', borderRadius: '12px' }}>{stat.icon}</div>
                            </div>
                        ))}
                    </div>

                    {/* Filters & Actions */}
                    <div style={{ background: 'white', padding: '16px 24px', borderRadius: '16px', border: '1px solid #E2E8F0', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8' }}>ROLE:</span>
                                <div style={{ border: '1px solid #E2E8F0', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    All Roles <ChevronDown size={14} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8' }}>STATUS:</span>
                                <div style={{ border: '1px solid #E2E8F0', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    Any Status <ChevronDown size={14} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8' }}>GRADE:</span>
                                <div style={{ border: '1px solid #E2E8F0', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    All Grades <ChevronDown size={14} />
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button style={{ border: '1px solid #E2E8F0', background: 'white', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Download size={16} /> Export CSV
                            </button>
                            <button style={{ border: '1px solid #E2E8F0', background: 'white', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Settings size={16} /> Subscription Mgmt
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', marginBottom: '32px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #E2E8F0', textAlign: 'left', background: '#F8FAFC' }}>
                                    <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8' }}>USER DETAILS</th>
                                    <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8' }}>ROLE</th>
                                    <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8' }}>STATUS</th>
                                    <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8' }}>GRADE LEVEL</th>
                                    <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8' }}>LAST LOGIN</th>
                                    <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textAlign: 'right' }}>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                        <td style={{ padding: '16px 24px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                {user.img ? (
                                                    <img src={user.img} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                                                ) : (
                                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: user.color + '15', color: user.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800 }}>
                                                        {user.initial}
                                                    </div>
                                                )}
                                                <div>
                                                    <div style={{ fontSize: '14px', fontWeight: 700 }}>{user.name}</div>
                                                    <div style={{ fontSize: '12px', color: '#64748B' }}>{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 600, color: '#64748B' }}>{user.role}</td>
                                        <td style={{ padding: '16px 24px' }}>
                                            <span style={{
                                                padding: '4px 10px',
                                                borderRadius: '6px',
                                                fontSize: '11px',
                                                fontWeight: 800,
                                                background: user.status === 'ACTIVE' ? '#D1FAE5' : '#FEF3C7',
                                                color: user.status === 'ACTIVE' ? '#059669' : '#D97706'
                                            }}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 600, color: '#64748B' }}>{user.grade}</td>
                                        <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 600, color: '#64748B' }}>{user.lastLogin}</td>
                                        <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                                            <MoreVertical size={18} color="#94A3B8" style={{ cursor: 'pointer' }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F8FAFC' }}>
                            <div style={{ fontSize: '13px', color: '#64748B' }}>
                                Showing <span style={{ fontWeight: 700, color: '#1E293B' }}>1</span> to <span style={{ fontWeight: 700, color: '#1E293B' }}>10</span> of <span style={{ fontWeight: 700, color: '#1E293B' }}>1,245</span> entries
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', cursor: 'pointer' }}>{'<'}</div>
                                <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#0066FF', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, cursor: 'pointer' }}>1</div>
                                <div style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', cursor: 'pointer', color: '#64748B' }}>2</div>
                                <div style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', cursor: 'pointer', color: '#64748B' }}>3</div>
                                <div style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', cursor: 'pointer' }}>{'>'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px' }}>
                        <div style={{ background: 'linear-gradient(135deg, #0066FF, #3B82F6)', borderRadius: '24px', padding: '40px', color: 'white', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px', color: 'white' }}>Subscription Management</h2>
                                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', maxWidth: '400px', lineHeight: 1.6, marginBottom: '32px' }}>
                                    Review current tier limits, update billing cycles, and manage premium student features across all districts.
                                </p>
                                <button style={{ background: 'white', color: '#0066FF', border: 'none', borderRadius: '10px', padding: '12px 24px', fontWeight: 700, fontSize: '15px' }}>
                                    Manage Tiers
                                </button>
                            </div>
                            <div style={{ position: 'absolute', bottom: '-40px', right: '-20px', opacity: 0.1 }}>
                                <CreditCard size={240} />
                            </div>
                        </div>

                        <div style={{ background: 'white', borderRadius: '24px', padding: '32px', border: '1px solid #E2E8F0' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '24px' }}>System Logs & Health</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '8px', height: '8px', background: '#22C55E', borderRadius: '50%' }}></div>
                                    <div style={{ fontSize: '14px', fontWeight: 600 }}>Database connection: <span style={{ color: '#64748B' }}>Healthy</span></div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '8px', height: '8px', background: '#22C55E', borderRadius: '50%' }}></div>
                                    <div style={{ fontSize: '14px', fontWeight: 600 }}>Auth Service: <span style={{ color: '#64748B' }}>Operational</span></div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '8px', height: '8px', background: '#F59E0B', borderRadius: '50%' }}></div>
                                    <div style={{ fontSize: '14px', fontWeight: 600 }}>CDN Propagation: <span style={{ color: '#64748B' }}>Slow response in EU-West</span></div>
                                </div>
                            </div>
                            <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '20px' }}>
                                <span style={{ fontSize: '12px', color: '#94A3B8' }}>Last system scan: 4 minutes ago</span>
                                <button style={{ color: '#0066FF', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    Full Log Report →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
