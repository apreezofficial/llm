"use client";
import React from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    MessageSquare,
    Calendar,
    BarChart3,
    ClipboardList,
    MoreHorizontal,
    Play,
    Users,
    ArrowUpRight,
    MapPin,
    Clock,
    CheckCircle2,
    GraduationCap,
    Layout
} from 'lucide-react';

const InstructorDashboard = () => {
    const queries = [
        { name: 'Marcus Thorne', time: '2m ago', msg: '"Could you explain the derivation of the quadratic formula again?"', img: 'https://i.pravatar.cc/100?u=marcus' },
        { name: 'Elena Rodriguez', time: '15m ago', msg: '"I\'m having trouble accessing the Calculus quiz resources."', img: 'https://i.pravatar.cc/100?u=elena' },
        { name: 'Jordan Smith', time: '1h ago', msg: '"Will today\'s lecture on integration be recorded?"', img: 'https://i.pravatar.cc/100?u=jordan' }
    ];

    const assignments = [
        { subject: 'Math 101', name: 'Intro to Linear Algebra', submissions: 34, total: 40, due: 'Tomorrow, 11:59 PM', status: 'Grade Now', color: '#0066FF' },
        { subject: 'Physics 2', name: 'Quantum Principles Essay', submissions: 18, total: 40, due: 'Overdue (2 Days)', status: 'Review', color: '#F97316' },
        { subject: 'Geometry', name: 'Pythagorean Theorems II', submissions: 40, total: 40, due: 'Completed', status: 'Post Grades', color: '#A855F7' }
    ];

    return (
        <div style={{ background: '#F0F4F8', minHeight: '100vh', fontFamily: 'Inter, sans-serif', color: '#1E293B' }}>
            {/* Top Navbar */}
            <nav style={{ background: 'white', padding: '12px 40px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <GraduationCap size={18} color="white" />
                    </div>
                    <span style={{ fontWeight: 900, fontSize: '20px', color: '#0F172A', letterSpacing: '-0.5px' }}>EduStream<span style={{ color: '#0066FF' }}>Pro</span></span>
                </div>

                <div style={{ position: 'relative', width: '400px' }}>
                    <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                        type="text"
                        placeholder="Search students, classes..."
                        style={{ width: '100%', background: '#F1F5F9', border: 'none', borderRadius: '12px', padding: '12px 16px 12px 48px', fontSize: '14px', outline: 'none' }}
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                    <div style={{ position: 'relative' }}>
                        <Bell size={22} color="#64748B" />
                        <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', background: '#EF4444', borderRadius: '50%', border: '2px solid white' }}></div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>Dr. Sarah Jenkins</div>
                            <div style={{ fontSize: '11px', fontWeight: 600, color: '#64748B' }}>Senior Mathematics Tutor</div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                    </div>
                </div>
            </nav>

            <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px', display: 'grid', gridTemplateColumns: '300px 1fr', gap: '32px' }}>

                {/* Left Sidebar Sections */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {/* Recent Queries */}
                    <div style={{ background: 'white', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <MessageSquare size={18} color="#0066FF" />
                                <h3 style={{ fontSize: '16px', fontWeight: 800 }}>Recent Queries</h3>
                            </div>
                            <span style={{ fontSize: '11px', fontWeight: 800, background: '#EFF6FF', color: '#0066FF', padding: '4px 10px', borderRadius: '8px' }}>3 New</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {queries.map((q, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '12px' }}>
                                    <img src={q.img} style={{ width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0 }} />
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                            <span style={{ fontSize: '13px', fontWeight: 800 }}>{q.name}</span>
                                            <span style={{ fontSize: '11px', color: '#94A3B8' }}>{q.time}</span>
                                        </div>
                                        <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.4, margin: 0, fontStyle: 'italic' }}>{q.msg}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button style={{ width: '100%', border: '1px dashed #BFDBFE', background: 'transparent', color: '#0066FF', padding: '12px', borderRadius: '12px', fontSize: '12px', fontWeight: 700, marginTop: '24px', cursor: 'pointer' }}>View All Inbox</button>
                    </div>

                    {/* Grade Overview */}
                    <div style={{ background: 'white', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                            <BarChart3 size={18} color="#0066FF" />
                            <h3 style={{ fontSize: '16px', fontWeight: 800 }}>Grade Overview</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {[
                                { class: 'Class 10-A (Honors)', avg: '88% Avg', val: 88, color: '#0066FF' },
                                { class: 'Class 11-B', avg: '74% Avg', val: 74, color: '#94A3B8' },
                                { class: 'Higher Algebra 3', avg: '92% Avg', val: 92, color: '#22C55E' }
                            ].map((c, idx) => (
                                <div key={idx}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '12px', fontWeight: 700 }}>{c.class}</span>
                                        <span style={{ fontSize: '12px', fontWeight: 800, color: c.color }}>{c.avg}</span>
                                    </div>
                                    <div style={{ width: '100%', height: '6px', background: '#F1F5F9', borderRadius: '3px' }}>
                                        <div style={{ width: `${c.val}%`, height: '100%', background: c.color, borderRadius: '3px' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ background: '#F0F9FF', borderRadius: '16px', padding: '20px', marginTop: '32px', textAlign: 'center', border: '1px solid #BAE6FD' }}>
                            <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Top Performing Topic</div>
                            <div style={{ fontSize: '16px', fontWeight: 900, color: '#0F172A' }}>Linear Equations</div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                    {/* Hero Class Banner */}
                    <div style={{
                        background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                        borderRadius: '32px',
                        padding: '48px',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.3)'
                    }}>
                        <div>
                            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '6px 16px', borderRadius: '99px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', width: 'fit-content', marginBottom: '24px' }}>
                                Up next in 15 minutes
                            </div>
                            <h1 style={{ fontSize: '42px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-1px' }}>Advanced Calculus: Integration Theory</h1>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', opacity: 0.9 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 600 }}>
                                    <Users size={18} /> 42 Students Enrolled
                                </div>
                                <div style={{ width: '4px', height: '4px', background: 'white', borderRadius: '50%' }}></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 600 }}>
                                    <MapPin size={18} /> Period 4, Hall B
                                </div>
                            </div>
                        </div>
                        <button style={{
                            background: 'white',
                            color: '#2563EB',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '24px 32px',
                            fontWeight: 800,
                            fontSize: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                            cursor: 'pointer'
                        }}>
                            <div style={{ background: '#2563EB', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Play size={20} color="white" fill="white" />
                            </div>
                            Start Live Class
                        </button>
                    </div>

                    {/* Middle Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                        {/* Today's Schedule */}
                        <div style={{ background: 'white', borderRadius: '24px', padding: '32px', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <Calendar size={20} color="#0066FF" />
                                    <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Today&apos;s Schedule</h3>
                                </div>
                                <span style={{ fontSize: '14px', fontWeight: 700, color: '#0066FF', cursor: 'pointer' }}>View Calendar</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    { time: '10:00 AM', name: 'Advanced Calculus', sub: 'Live Integration Theory', status: 'Starting Soon' },
                                    { time: '01:30 PM', name: 'Applied Physics', sub: 'Mechanics Workshop', status: null },
                                    { time: '04:00 PM', name: 'Office Hours', sub: '1-on-1 Mentorship', status: null }
                                ].map((s, idx) => (
                                    <div key={idx} style={{
                                        padding: '20px 24px',
                                        borderRadius: '16px',
                                        background: s.status ? '#F0F9FF' : '#F8FAFC',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '24px',
                                        border: s.status ? '1px solid #BAE6FD' : '1px solid #F1F5F9'
                                    }}>
                                        <div style={{ textAlign: 'center', minWidth: '70px' }}>
                                            <div style={{ fontSize: '14px', fontWeight: 800 }}>{s.time.split(' ')[0]}</div>
                                            <div style={{ fontSize: '10px', fontWeight: 700, color: '#94A3B8' }}>{s.time.split(' ')[1]}</div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <span style={{ fontSize: '15px', fontWeight: 800 }}>{s.name}</span>
                                                {s.status && <span style={{ fontSize: '10px', fontWeight: 800, background: '#DCFCE7', color: '#15803D', padding: '4px 10px', borderRadius: '6px' }}>{s.status}</span>}
                                            </div>
                                            <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500 }}>{s.sub}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Attendance Trends */}
                        <div style={{ background: 'white', borderRadius: '24px', padding: '32px', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <BarChart3 size={20} color="#0066FF" />
                                    <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Attendance Trends</h3>
                                </div>
                                <div style={{ background: '#F8FAFC', padding: '8px 16px', borderRadius: '10px', fontSize: '12px', fontWeight: 700, color: '#64748B', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                    Last 7 Days <ChevronDown size={14} />
                                </div>
                            </div>

                            {/* Simple Chart Visualization */}
                            <div style={{ height: '140px', display: 'flex', alignItems: 'flex-end', gap: '20px', paddingBottom: '20px', borderBottom: '1px solid #F1F5F9', marginBottom: '24px', justifyContent: 'center' }}>
                                {[70, 85, 95, 80, 75].map((h, i) => (
                                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ width: '40px', height: `${h}%`, background: h > 90 ? '#0066FF' : '#E2E8F0', borderRadius: '8px' }}></div>
                                        <span style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>{['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][i]}</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 700, marginBottom: '4px' }}>Average Presence</div>
                                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A' }}>92.4%</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 700, marginBottom: '4px' }}>Late Arrivals</div>
                                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A' }}>12</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pending Assignments Table */}
                    <div style={{ background: 'white', borderRadius: '32px', padding: '40px', border: '1px solid #E2E8F0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <ClipboardList size={22} color="#0066FF" />
                                <h3 style={{ fontSize: '20px', fontWeight: 900 }}>Pending Assignments</h3>
                            </div>
                            <span style={{ fontSize: '12px', fontWeight: 800, background: '#FFF7ED', color: '#C2410C', padding: '6px 14px', borderRadius: '10px' }}>15 Urgent Tasks</span>
                        </div>

                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #F1F5F9' }}>
                                    <th style={{ textAlign: 'left', paddingBottom: '20px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Subject</th>
                                    <th style={{ textAlign: 'left', paddingBottom: '20px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Assignment Name</th>
                                    <th style={{ textAlign: 'left', paddingBottom: '20px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', width: '200px' }}>Submissions</th>
                                    <th style={{ textAlign: 'left', paddingBottom: '20px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Due Date</th>
                                    <th style={{ textAlign: 'right', paddingBottom: '20px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assignments.map((a, i) => (
                                    <tr key={i} style={{ borderBottom: i === assignments.length - 1 ? 'none' : '1px solid #F8FAFC' }}>
                                        <td style={{ padding: '24px 0' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{ width: '8px', height: '8px', background: a.color, borderRadius: '50%' }}></div>
                                                <span style={{ fontSize: '14px', fontWeight: 800 }}>{a.subject}</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '24px 0', fontSize: '14px', fontWeight: 700, color: '#1E293B' }}>{a.name}</td>
                                        <td style={{ padding: '24px 0' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <div style={{ flex: 1, height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                                                    <div style={{ width: `${(a.submissions / a.total) * 100}%`, height: '100%', background: a.color, borderRadius: '3px' }}></div>
                                                </div>
                                                <span style={{ fontSize: '12px', fontWeight: 700, minWidth: '40px' }}>{a.submissions}/{a.total}</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '24px 0', fontSize: '13px', fontWeight: 700, color: a.due.includes('Overdue') ? '#EF4444' : '#64748B' }}>{a.due}</td>
                                        <td style={{ padding: '24px 0', textAlign: 'right' }}>
                                            <button style={{
                                                background: a.status === 'Post Grades' ? '#0066FF' : a.status === 'Review' ? '#EFF6FF' : '#F0F9FF',
                                                color: a.status === 'Post Grades' ? 'white' : a.status === 'Review' ? '#60A5FA' : '#0066FF',
                                                border: 'none',
                                                padding: '10px 20px',
                                                borderRadius: '10px',
                                                fontWeight: 800,
                                                fontSize: '12px',
                                                cursor: 'pointer'
                                            }}>
                                                {a.status}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorDashboard;
