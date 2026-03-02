"use client";
import React from 'react';
import Link from 'next/link';
import {
    Bell,
    ChevronDown,
    CheckCircle2,
    Zap,
    Trophy,
    Clock,
    BookOpen,
    ArrowUpRight,
    Circle,
    Lock,
    Lightbulb,
    Download,
    Calendar,
    Layout,
    Video
} from 'lucide-react';

const EduTrackProDashboard = () => {
    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            {/* Navbar */}
            <nav style={{ background: 'white', borderBottom: '1px solid #E2E8F0', padding: '16px 0', position: 'sticky', top: 0, zIndex: 100 }}>
                <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Layout size={18} color="white" />
                            </div>
                            <span style={{ fontWeight: 800, fontSize: '20px' }}>EduTrack<span style={{ color: '#0066FF' }}>Pro</span></span>
                        </div>
                        <div style={{ display: 'flex', gap: '32px' }}>
                            {['Dashboard', 'Courses', 'Resources', 'Support'].map((item, i) => (
                                <span key={item} style={{ fontSize: '14px', fontWeight: 600, color: i === 0 ? '#0066FF' : '#64748B', cursor: 'pointer' }}>{item}</span>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                        <Bell size={20} color="#64748B" />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '14px', fontWeight: 700 }}>Alex Thompson</div>
                                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Grade 10 • Senior High</div>
                            </div>
                            <img src="https://i.pravatar.cc/100?u=alex" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px', alignItems: 'start' }}>

                    {/* Left Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <div>
                            <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '8px', letterSpacing: '-1px' }}>Welcome back, Alex!</h1>
                            <p style={{ fontSize: '16px', color: '#64748B', fontWeight: 500 }}>You&apos;re making incredible progress this semester.</p>
                        </div>

                        {/* Notification Banner */}
                        <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ background: '#0066FF', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CheckCircle2 size={24} color="white" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1E40AF' }}>Session Completed!</div>
                                    <div style={{ fontSize: '13px', color: '#3B82F6', fontWeight: 600 }}>You are eligible to upgrade your level status.</div>
                                </div>
                            </div>
                            <Link
                                href="/upgrade"
                                style={{ background: '#60A5FA', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', display: 'inline-block' }}
                            >
                                Upgrade Now
                            </Link>
                        </div>

                        {/* Progress Card */}
                        <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '32px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '48px' }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
                                    <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Grade 11 Progress</h3>
                                    <span style={{ fontSize: '18px', fontWeight: 800, color: '#0066FF' }}>85%</span>
                                </div>
                                <div style={{ height: '12px', background: '#F1F5F9', borderRadius: '6px', overflow: 'hidden', marginBottom: '16px' }}>
                                    <div style={{ width: '85%', height: '100%', background: '#0066FF', borderRadius: '6px' }}></div>
                                </div>
                                <p style={{ fontSize: '13px', color: '#64748B', fontWeight: 500 }}>Only 12 more credits to reach the next milestone!</p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '40px' }}>
                                    <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                                        <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, marginBottom: '8px' }}>Weekly Streak</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Zap size={20} color="#F97316" fill="#F97316" />
                                            <span style={{ fontSize: '20px', fontWeight: 800 }}>12 Days</span>
                                        </div>
                                    </div>
                                    <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                                        <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, marginBottom: '8px' }}>Total Points</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Trophy size={20} color="#EAB308" fill="#EAB308" />
                                            <span style={{ fontSize: '20px', fontWeight: 800 }}>2,450 XP</span>
                                        </div>
                                    </div>
                                    <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                                        <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, marginBottom: '8px' }}>Classes Done</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <CheckCircle2 size={20} color="#22C55E" />
                                            <span style={{ fontSize: '20px', fontWeight: 800 }}>48 / 60</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: '#F8FAFC', borderRadius: '20px', padding: '24px', border: '1px solid #F1F5F9' }}>
                                <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>NEXT SESSION STARTS IN</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                    <Clock size={24} color="#0066FF" />
                                    <span style={{ fontSize: '32px', fontWeight: 900 }}>00 : 14 : 22</span>
                                </div>
                                <p style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>Advanced Algebra with Prof. Sarah</p>
                            </div>
                        </div>

                        {/* Achievement Badges */}
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: 800 }}>Achievement Badges</h3>
                                <span style={{ fontSize: '14px', fontWeight: 700, color: '#0066FF', cursor: 'pointer' }}>View All</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                                {[
                                    { name: 'Early Bird', date: 'Unlocked May 12', icon: <Sparkles size={24} color="#60A5FA" />, locked: false },
                                    { name: 'Perfect Quiz', date: 'Unlocked Apr 28', icon: <Trophy size={24} color="#FACC15" />, locked: false },
                                    { name: 'Course Finisher', date: 'Unlocked Apr 15', icon: <CheckCircle2 size={24} color="#4ADE80" />, locked: false },
                                    { name: 'Master Mind', date: 'Reach 100%', icon: <Lock size={24} color="#94A3B8" />, locked: true },
                                ].map((badge, i) => (
                                    <div key={i} style={{ background: 'white', padding: '24px', borderRadius: '20px', border: badge.locked ? '1px dashed #E2E8F0' : '1px solid #E2E8F0', textAlign: 'center' }}>
                                        <div style={{ background: '#F8FAFC', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', opacity: badge.locked ? 0.3 : 1 }}>
                                            {badge.icon}
                                        </div>
                                        <div style={{ fontSize: '15px', fontWeight: 800, marginBottom: '4px' }}>{badge.name}</div>
                                        <div style={{ fontSize: '10px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>{badge.date}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Grades */}
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: 800 }}>Recent Grades</h3>
                                <span style={{ fontSize: '14px', fontWeight: 700, color: '#0066FF', cursor: 'pointer' }}>Full Transcript</span>
                            </div>
                            <div style={{ background: 'white', borderRadius: '24px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Subject</th>
                                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Assignment</th>
                                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Date</th>
                                            <th style={{ textAlign: 'right', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { subject: 'Biology', assignment: 'Cell Structure Quiz', date: 'May 18, 2024', grade: 'A-', color: '#60A5FA' },
                                            { subject: 'History', assignment: 'Renaissance Essay', date: 'May 15, 2024', grade: '92%', color: '#A855F7' },
                                            { subject: 'Calculus', assignment: 'Limits & Continuity', date: 'May 12, 2024', grade: 'B+', color: '#F97316' },
                                        ].map((row, i) => (
                                            <tr key={i} style={{ borderBottom: i === 2 ? 'none' : '1px solid #F1F5F9' }}>
                                                <td style={{ padding: '20px 24px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                        <div style={{ background: `${row.color}15`, width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <BookOpen size={14} color={row.color} />
                                                        </div>
                                                        <span style={{ fontSize: '15px', fontWeight: 700 }}>{row.subject}</span>
                                                    </div>
                                                </td>
                                                <td style={{ padding: '20px 24px', fontSize: '14px', color: '#64748B', fontWeight: 500 }}>{row.assignment}</td>
                                                <td style={{ padding: '20px 24px', fontSize: '14px', color: '#64748B', fontWeight: 500 }}>{row.date}</td>
                                                <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                                                    <span style={{
                                                        background: row.grade.includes('A') || parseFloat(row.grade) > 90 ? '#F0FDF4' : '#F1F5F9',
                                                        color: row.grade.includes('A') || parseFloat(row.grade) > 90 ? '#22C55E' : '#1E293B',
                                                        padding: '6px 14px',
                                                        borderRadius: '20px',
                                                        fontSize: '13px',
                                                        fontWeight: 800,
                                                        border: row.grade.includes('A') || parseFloat(row.grade) > 90 ? '1px solid #BBF7D0' : 'none'
                                                    }}>
                                                        {row.grade}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                        {/* Quick Actions */}
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '20px' }}>Quick Actions</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div style={{ background: '#0066FF', padding: '16px 24px', borderRadius: '16px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, cursor: 'pointer' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <Video size={20} /> Enter Virtual Class
                                    </div>
                                    <ArrowUpRight size={18} />
                                </div>
                                <div style={{ background: 'white', border: '1px solid #E2E8F0', padding: '16px 24px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, color: '#1E293B', cursor: 'pointer' }}>
                                    <Download size={20} color="#0066FF" /> Download Certificate
                                </div>
                                <div style={{ background: 'white', border: '1px solid #E2E8F0', padding: '16px 24px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, color: '#1E293B', cursor: 'pointer' }}>
                                    <Calendar size={20} color="#0066FF" /> View Schedule
                                </div>
                            </div>
                        </div>

                        {/* Learning Path */}
                        <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '24px' }}>Learning Path</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                <div style={{ position: 'relative', display: 'flex', gap: '16px', paddingBottom: '32px' }}>
                                    <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '0', width: '2px', background: '#E2E8F0' }}></div>
                                    <CheckCircle2 size={24} color="#22C55E" style={{ relative: true, zIndex: 1, background: 'white' }} />
                                    <div>
                                        <div style={{ fontSize: '10px', fontWeight: 800, color: '#22C55E', textTransform: 'uppercase', marginBottom: '4px' }}>COMPLETED</div>
                                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#1E293B' }}>Foundations of Logic</div>
                                    </div>
                                </div>
                                <div style={{ position: 'relative', display: 'flex', gap: '16px', paddingBottom: '32px' }}>
                                    <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '0', width: '2px', background: '#E2E8F0' }}></div>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#0066FF', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, position: 'relative' }}>
                                        <div style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%' }}></div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '10px', fontWeight: 800, color: '#0066FF', textTransform: 'uppercase', marginBottom: '4px' }}>CURRENT LEVEL</div>
                                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#1E293B' }}>Intermediate Algebra II</div>
                                        <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500, marginTop: '4px' }}>4 assignments remaining</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Lock size={12} color="#94A3B8" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '4px' }}>NEXT MILESTONE</div>
                                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#94A3B8' }}>Intro to Calculus</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Study Tip */}
                        <div style={{ background: '#0066FF', borderRadius: '24px', padding: '24px', color: 'white' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <Lightbulb size={24} />
                                <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>STUDY TIP</span>
                            </div>
                            <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 500, marginBottom: '24px' }}>
                                &quot;Taking short breaks every 45 minutes can improve your focus and retention by up to 20%.&quot;
                            </p>
                            <div style={{ fontSize: '13px', fontWeight: 800, textDecoration: 'underline', color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>Read more techniques</div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer style={{ background: 'white', borderTop: '1px solid #F1F5F9', padding: '60px 0' }}>
                <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
                    <p style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 500, marginBottom: '16px' }}>© 2024 EduTrack Pro LMS. All rights reserved.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', fontSize: '13px', fontWeight: 700, color: '#64748B' }}>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Accessibility</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EduTrackProDashboard;
