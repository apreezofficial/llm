"use client";
import AppLayout from "@/components/AppLayout";
import {
    Clock,
    Play,
    FileText,
    Download,
    Star,
    ChevronRight,
    Users,
    Award,
    ShieldCheck,
    CheckCircle2
} from "lucide-react";

export default function CourseDetail() {
    const modules = [
        { title: 'Foundations of Modern UI', lessons: 5, duration: '2h 15m' },
        { title: 'Advanced Flexbox & Grid', lessons: 8, duration: '4h 30m' },
        { title: 'Animation and Micro-interactions', lessons: 6, duration: '3h 45m' },
        { title: 'Responsive Design Systems', lessons: 10, duration: '6h 20m' },
    ];

    return (
        <AppLayout>
            <div className="flex gap-40">
                {/* Main Content */}
                <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '40px' }}>
                        <div className="flex align-center gap-12" style={{ marginBottom: '16px' }}>
                            <span className="badge-pill badge-blue">UI/UX Design</span>
                            <div className="flex align-center gap-4" style={{ color: '#F59E0B' }}>
                                <Star size={16} fill="#F59E0B" />
                                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--secondary)' }}>4.9 (2.4k reviews)</span>
                            </div>
                        </div>
                        <h1 style={{ fontSize: '48px', marginBottom: '24px', lineHeight: 1.1 }}>UI/UX Design Masterclass: From Beginner to Pro 2026</h1>
                        <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                            Master the art of creating stunning, user-centric interfaces. This comprehensive course covers
                            everything from color theory to advanced prototyping with industry-standard tools.
                        </p>

                        <div className="flex align-center gap-32">
                            <div className="flex align-center gap-12">
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--border)' }}></div>
                                <div>
                                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Instructor</p>
                                    <p style={{ fontWeight: 700 }}>Gary Simon</p>
                                </div>
                            </div>
                            <div style={{ width: '1px', height: '40px', background: 'var(--border)' }}></div>
                            <div>
                                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Last Updated</p>
                                <p style={{ fontWeight: 700 }}>March 2026</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>Course Content</h2>
                        <div className="flex column gap-16">
                            {modules.map((mod, i) => (
                                <div key={i} className="card" style={{ padding: '24px' }}>
                                    <div className="flex align-center justify-between">
                                        <div className="flex align-center gap-16">
                                            <div style={{ width: '32px', height: '32px', background: 'var(--bg-soft)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px' }}>{i + 1}</div>
                                            <div>
                                                <h3 style={{ fontSize: '18px' }}>{mod.title}</h3>
                                                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{mod.lessons} lessons • {mod.duration}</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={20} color="var(--text-muted)" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>What you'll learn</h2>
                        <div className="grid-2">
                            {[
                                'Build professional design systems from scratch',
                                'Master Figma and Adobe XD for prototyping',
                                'Understand psychological principles of design',
                                'Create responsive layouts for all devices',
                                'Conduct user research and usability testing',
                                'Develop a high-end design portfolio'
                            ].map((item, i) => (
                                <div key={i} className="flex align-center gap-12" style={{ marginBottom: '16px' }}>
                                    <CheckCircle2 size={20} color="#10B981" />
                                    <span style={{ fontSize: '15px' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Card */}
                <div style={{ width: '400px' }}>
                    <div className="card" style={{ padding: 0, overflow: 'hidden', position: 'sticky', top: '120px' }}>
                        <div style={{ position: 'relative' }}>
                            <img src="https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&w=600&q=80" alt="" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.9)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-xl)' }}>
                                    <Play size={24} fill="var(--primary)" color="var(--primary)" style={{ marginLeft: '4px' }} />
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '32px' }}>
                            <div className="flex align-center gap-12" style={{ marginBottom: '24px' }}>
                                <span style={{ fontSize: '32px', fontWeight: 800 }}>$89.99</span>
                                <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '18px' }}>$129.99</span>
                                <span style={{ color: '#EF4444', fontWeight: 700, fontSize: '14px' }}>30% OFF</span>
                            </div>

                            <button className="btn btn-primary" style={{ width: '100%', padding: '16px', borderRadius: '14px', marginBottom: '16px' }}>Enroll Now</button>
                            <button className="btn btn-outline" style={{ width: '100%', padding: '16px', borderRadius: '14px' }}>Add to Library</button>

                            <div className="flex column gap-16" style={{ marginTop: '32px' }}>
                                <p style={{ fontWeight: 700, fontSize: '14px' }}>This course includes:</p>
                                <div className="flex align-center gap-12" style={{ fontSize: '14px', color: 'var(--text-muted)' }}><Clock size={16} /> 24 hours on-demand video</div>
                                <div className="flex align-center gap-12" style={{ fontSize: '14px', color: 'var(--text-muted)' }}><FileText size={16} /> 12 downloadable resources</div>
                                <div className="flex align-center gap-12" style={{ fontSize: '14px', color: 'var(--text-muted)' }}><Users size={16} /> 15 assignments & projects</div>
                                <div className="flex align-center gap-12" style={{ fontSize: '14px', color: 'var(--text-muted)' }}><Award size={16} /> Certificate of completion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
