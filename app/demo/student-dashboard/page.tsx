"use client";
import React from 'react';
import {
    Bell,
    ChevronRight,
    Download,
    CheckCircle2,
    Clock,
    BookOpen,
    Award,
    Calendar,
    Lock,
    ChevronDown,
    ArrowUp,
    FileText
} from 'lucide-react';

const StudentDashboard = () => {
    const courses = [
        { name: 'Advanced Calculus', code: 'MATH-402', instructor: 'Dr. Sarah Weaver', progress: 85, grade: 'A', color: '#EF4444' },
        { name: 'Molecular Biology', code: 'BIO-110', instructor: 'Prof. Alan Turing', progress: 92, grade: 'A-', color: '#3B82F6' },
        { name: 'Modern History', code: 'HIST-205', instructor: 'Elena Rodriguez', progress: 60, grade: 'B+', color: '#F59E0B' },
        { name: 'Digital Arts', code: 'ART-101', instructor: 'Marcus Stone', progress: 100, grade: 'A+', color: '#10B981' },
    ];

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh', fontFamily: 'Inter, sans-serif', color: '#1E293B' }}>
            {/* Navbar */}
            <header style={{ background: 'white', borderBottom: '1px solid #E2E8F0', padding: '0 40px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <BookOpen size={18} color="white" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: '20px' }}>EduStream</span>
                    </div>
                    <nav style={{ display: 'flex', gap: '32px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#64748B', cursor: 'pointer' }}>Dashboard</span>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#64748B', cursor: 'pointer' }}>Courses</span>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#0066FF', borderBottom: '2px solid #0066FF', height: '64px', display: 'flex', alignItems: 'center' }}>Grades & Progress</span>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#64748B', cursor: 'pointer' }}>Schedule</span>
                    </nav>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                    <Bell size={20} color="#64748B" />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '13px', fontWeight: 700 }}>Alex Johnson</div>
                            <div style={{ fontSize: '11px', color: '#64748B' }}>Grade 11 Student</div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                    </div>
                </div>
            </header>

            <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px' }}>
                {/* Stats Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '32px' }}>
                    <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', marginBottom: '8px' }}>Cumulative GPA</div>
                            <div style={{ fontSize: '36px', fontWeight: 900, color: '#1E293B' }}>3.85</div>
                            <div style={{ fontSize: '12px', color: '#10B981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <ArrowUp size={14} /> +0.2 from last term
                            </div>
                        </div>
                        <div style={{ background: '#EFF6FF', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Award size={24} color="#0066FF" />
                        </div>
                    </div>
                    <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', marginBottom: '8px' }}>Credits Earned</div>
                            <div style={{ fontSize: '36px', fontWeight: 900, color: '#1E293B' }}>42 / 48</div>
                        </div>
                        <div style={{ background: '#EFF6FF', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Award size={24} color="#0066FF" />
                        </div>
                    </div>
                    <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', marginBottom: '8px' }}>Attendance Rate</div>
                            <div style={{ fontSize: '36px', fontWeight: 900, color: '#1E293B' }}>96.4%</div>
                        </div>
                        <div style={{ background: '#F0FDF4', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Clock size={24} color="#10B981" />
                        </div>
                    </div>
                    <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', marginBottom: '8px' }}>Completed Modules</div>
                            <div style={{ fontSize: '36px', fontWeight: 900, color: '#1E293B' }}>18 / 20</div>
                        </div>
                        <div style={{ background: '#FFF7ED', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FileText size={24} color="#F59E0B" />
                        </div>
                    </div>
                </div>

                {/* Roadmap */}
                <div style={{ background: 'white', padding: '32px', borderRadius: '24px', border: '1px solid #E2E8F0', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '20px', fontWeight: 800 }}>Academic Session Roadmap</h3>
                        <div style={{ background: '#EFF6FF', padding: '6px 12px', borderRadius: '99px', fontSize: '11px', fontWeight: 800, color: '#0066FF', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            ● STAGE 4: FINAL ASSESSMENTS
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', padding: '0 40px' }}>
                        <div style={{ position: 'absolute', top: '15px', left: '80px', right: '80px', height: '2px', background: '#E2E8F0', zIndex: 0 }}></div>
                        <div style={{ position: 'absolute', top: '15px', left: '80px', width: '50%', height: '2px', background: '#0066FF', zIndex: 0 }}></div>

                        {[
                            { label: 'ORIENTATION', date: 'Sept 05', status: 'completed' },
                            { label: 'MID-TERMS', date: 'Oct 24', status: 'completed' },
                            { label: 'FINAL PROJECTS', date: 'Dec 12 (Current)', status: 'active' },
                            { label: 'FINAL EXAMS', date: 'Jan 15', status: 'locked' },
                            { label: 'PROMOTION', date: 'Jan 30', status: 'locked' },
                        ].map((step, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1, width: '120px', textAlign: 'center' }}>
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: step.status === 'completed' || step.status === 'active' ? '#0066FF' : '#F1F5F9',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '16px',
                                    border: step.status === 'active' ? '4px solid #EFF6FF' : 'none'
                                }}>
                                    {step.status === 'completed' ? <CheckCircle2 size={16} color="white" /> : step.status === 'active' ? <Clock size={16} color="white" /> : <Lock size={14} color="#94A3B8" />}
                                </div>
                                <div style={{ fontSize: '10px', fontWeight: 800, color: step.status === 'active' ? '#0066FF' : '#1E293B', marginBottom: '4px' }}>{step.label}</div>
                                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>{step.date}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px', gap: '40px' }}>
                    {/* Main List */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: 800 }}>Course Progress & Grades</h3>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <div style={{ background: '#F1F5F9', padding: '6px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, color: '#64748B' }}>All Terms</div>
                                <div style={{ background: '#0066FF', padding: '6px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, color: 'white' }}>Fall 2023</div>
                            </div>
                        </div>

                        <div style={{ background: 'white', borderRadius: '24px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ textAlign: 'left', borderBottom: '1px solid #E2E8F0' }}>
                                        <th style={{ padding: '20px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>COURSE NAME</th>
                                        <th style={{ padding: '20px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>INSTRUCTOR</th>
                                        <th style={{ padding: '20px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>STATUS</th>
                                        <th style={{ padding: '20px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>GRADE</th>
                                        <th style={{ padding: '20px 24px' }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.map((course, i) => (
                                        <tr key={i} style={{ borderBottom: i === courses.length - 1 ? 'none' : '1px solid #F1F5F9' }}>
                                            <td style={{ padding: '24px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                    <div style={{ background: course.color + '15', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: course.color, fontWeight: 800 }}>
                                                        {course.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div style={{ fontSize: '14px', fontWeight: 800 }}>{course.name}</div>
                                                        <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>{course.code}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ padding: '24px', fontSize: '14px', fontWeight: 600, color: '#64748B' }}>{course.instructor}</td>
                                            <td style={{ padding: '24px' }}>
                                                <div style={{ width: '120px' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                                        <span style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8' }}>{course.progress}% Complete</span>
                                                    </div>
                                                    <div style={{ height: '6px', background: '#F1F5F9', borderRadius: '3px' }}>
                                                        <div style={{ width: `${course.progress}%`, height: '100%', background: '#10B981', borderRadius: '3px' }}></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ padding: '24px' }}>
                                                <div style={{ background: '#F0FDF4', color: '#10B981', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, border: '1px solid #DCFCE7' }}>
                                                    {course.grade}
                                                </div>
                                            </td>
                                            <td style={{ padding: '24px' }}><ChevronRight size={20} color="#94A3B8" /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div style={{ padding: '24px', textAlign: 'center', borderTop: '1px solid #F1F5F9' }}>
                                <span style={{ color: '#0066FF', fontWeight: 800, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                    Download Academic Transcript (PDF)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {/* Promotion Checklist */}
                        <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                Checklist <Award size={18} color="#0066FF" />
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    { label: 'Minimum GPA Met', sub: 'Required: 2.5 • Current: 3.85', checked: true },
                                    { label: 'Attendance Threshold', sub: 'Required: 90% • Current: 96.4%', checked: true },
                                    { label: 'Final Session Credits', sub: '6 credits pending from Final Exams', checked: false },
                                    { label: 'Tuition Clearance', sub: 'Fully paid for 2023 Fall Term', checked: true },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '16px' }}>
                                        <div style={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            background: item.checked ? '#10B981' : 'transparent',
                                            border: item.checked ? 'none' : '2px solid #E2E8F0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            {item.checked && <CheckCircle2 size={12} color="white" />}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '14px', fontWeight: 700 }}>{item.label}</div>
                                            <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>{item.sub}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Next Grade CTA */}
                        <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '32px', textAlign: 'center' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>Ready for Next Grade?</h4>
                            <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5, marginBottom: '24px' }}>
                                Once all your final credits are recorded and your checklist is green, you can request formal promotion to Grade 12.
                            </p>
                            <button style={{ width: '100%', background: '#D1D5DB', color: '#979799', border: 'none', borderRadius: '12px', padding: '14px', fontWeight: 800, fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <ArrowUp size={18} /> Request Promotion
                            </button>
                            <p style={{ fontSize: '11px', color: '#94A3B8', marginTop: '16px' }}>Applications usually take 3-5 business days for approval.</p>
                        </div>

                        {/* Final Exams Schedule */}
                        <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '24px' }}>Final Exams Schedule</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {[
                                    { date: '15', month: 'JAN', title: 'Calculus Final', time: '09:00 AM • Main Hall', color: '#EFF6FF' },
                                    { date: '17', month: 'JAN', title: 'History Paper II', time: '01:30 PM • Room 402', color: '#FFF7ED' },
                                ].map((exam, i) => (
                                    <div key={i} style={{ background: '#F8FAFC', padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                        <div style={{ textAlign: 'center', width: '40px' }}>
                                            <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8' }}>{exam.month}</div>
                                            <div style={{ fontSize: '20px', fontWeight: 900 }}>{exam.date}</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '14px', fontWeight: 700 }}>{exam.title}</div>
                                            <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>{exam.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button style={{ width: '100%', marginTop: '24px', background: 'transparent', border: 'none', color: '#0066FF', fontWeight: 800, fontSize: '13px' }}>View All Dates</button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer style={{ background: 'white', borderTop: '1px solid #E2E8F0', padding: '40px 0' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <BookOpen size={18} color="#94A3B8" />
                        <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 600 }}>EduStream LMS</span>
                    </div>
                    <div style={{ display: 'flex', gap: '32px', fontSize: '13px', color: '#64748B', fontWeight: 700 }}>
                        <span>SUPPORT</span>
                        <span>PRIVACY POLICY</span>
                        <span>GUIDELINES</span>
                        <span>API ACCESS</span>
                    </div>
                    <span style={{ fontSize: '13px', color: '#94A3B8' }}>© 2024 EduStream Academic Systems. All rights reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default StudentDashboard;
