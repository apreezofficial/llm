"use client";
import AppLayout from "@/components/AppLayout";
import { TrendingUp, Clock, Target, Zap, BarChart3, PieChart } from "lucide-react";

export default function Analytics() {
    return (
        <AppLayout>
            {/* Header Area */}
            <div className="animate-slide-up" style={{ marginBottom: '48px' }}>
                <h1 style={{
                    fontSize: 'clamp(28px, 4vw, 36px)',
                    fontWeight: 950,
                    fontFamily: 'var(--font-heading)',
                    color: '#0F172A',
                    letterSpacing: '-1.5px',
                    marginBottom: '8px'
                }}>
                    Learning <span style={{ color: '#FF7D00' }}>Analytics</span>
                </h1>
                <p style={{ color: '#64748B', fontSize: '16px', fontWeight: 500 }}>
                    Detailed insights into your intellectual progression and habit metrics.
                </p>
            </div>

            <div className="grid-3" style={{ marginBottom: '40px' }}>
                {/* Study Consistency Chart */}
                <div className="glass-card animate-scale-in delay-1" style={{ padding: '32px', borderRadius: '28px' }}>
                    <div className="flex align-center justify-between" style={{ marginBottom: '32px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Study Flux</h3>
                        <span style={{ color: '#005B52', fontWeight: 900, fontSize: '12px', background: '#E6F0EF', padding: '6px 14px', borderRadius: '30px' }}>+12.4%</span>
                    </div>

                    <div className="flex align-end gap-12" style={{ height: '180px', marginBottom: '24px' }}>
                        {[40, 70, 45, 95, 65, 85, 55].map((h, i) => (
                            <div key={i} className="hover-scale" style={{
                                flex: 1,
                                background: i === 3 ? 'linear-gradient(180deg, #FF7D00 0%, #FFB444 100%)' : '#F1F5F9',
                                height: `${h}%`,
                                borderRadius: '8px',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                boxShadow: i === 3 ? '0 10px 20px rgba(255,125,0,0.2)' : 'none'
                            }}></div>
                        ))}
                    </div>
                    <div className="flex justify-between" style={{ color: '#94A3B8', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                        <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>
                </div>

                {/* Skill Mastery (Circle) */}
                <div className="glass-card animate-scale-in delay-2" style={{ padding: '32px', borderRadius: '28px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '32px' }}>Skill Domain</h3>
                    <div style={{ position: 'relative', width: '180px', height: '180px', margin: '0 auto 32px' }}>
                        <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F1F5F9" strokeWidth="3" />
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#0F172A" strokeWidth="3.5" strokeDasharray="78, 100" strokeLinecap="round" />
                        </svg>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                            <p style={{ fontSize: '32px', fontWeight: 950, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>78%</p>
                            <p style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>Mastery</p>
                        </div>
                    </div>
                    <div className="flex column gap-12">
                        <div className="flex align-center justify-between" style={{ fontSize: '14px', fontWeight: 600 }}>
                            <span className="flex align-center gap-12"><div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0F172A' }}></div> Architect</span>
                            <span style={{ fontWeight: 800 }}>45.2%</span>
                        </div>
                        <div className="flex align-center justify-between" style={{ fontSize: '14px', fontWeight: 600 }}>
                            <span className="flex align-center gap-12"><div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF7D00' }}></div> Logic</span>
                            <span style={{ fontWeight: 800 }}>30.8%</span>
                        </div>
                    </div>
                </div>

                {/* Performance Goals */}
                <div className="glass-card animate-scale-in delay-3" style={{ padding: '32px', borderRadius: '28px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '32px' }}>Milestone Progress</h3>
                    <div className="flex column gap-32">
                        {[
                            { label: 'Courses Validated', current: 12, target: 15, color: '#005B52', bg: '#E6F0EF' },
                            { label: 'Quizzes Cleared', current: 38, target: 50, color: '#FF7D00', bg: '#FFF7ED' },
                            { label: 'Learning Velocity', current: 18, target: 20, color: '#0F172A', bg: '#F1F5F9' },
                        ].map((target, i) => (
                            <div key={i}>
                                <div className="flex align-center justify-between" style={{ marginBottom: '12px', fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>
                                    <span style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>{target.label}</span>
                                    <span>{target.current} / {target.target}</span>
                                </div>
                                <div style={{ width: '100%', height: '10px', background: target.bg, borderRadius: '6px', overflow: 'hidden' }}>
                                    <div style={{
                                        width: `${(target.current / target.target) * 100}%`,
                                        height: '100%',
                                        background: target.color,
                                        borderRadius: '6px',
                                        transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Engagement Heatmap / Bar Chart */}
            <div className="glass-card animate-slide-up delay-4" style={{ padding: '40px', borderRadius: '32px' }}>
                <div className="flex align-center justify-between" style={{ marginBottom: '40px' }}>
                    <div>
                        <h3 style={{ fontSize: '22px', fontWeight: 900, fontFamily: 'var(--font-heading)', color: '#0F172A', marginBottom: '6px' }}>Engagement Dynamics</h3>
                        <p style={{ fontSize: '14px', color: '#64748B', fontWeight: 500 }}>Global interaction frequency over the last 12 months.</p>
                    </div>
                    <button className="hover-scale" style={{
                        padding: '12px 24px',
                        borderRadius: '16px',
                        background: '#0F172A',
                        color: 'white',
                        fontWeight: 800,
                        fontSize: '13px',
                        border: 'none',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>Download Full Report</button>
                </div>

                <div style={{ height: '320px', display: 'flex', alignItems: 'flex-end', gap: '16px', paddingBottom: '24px', position: 'relative' }}>
                    {/* Horizontal grid lines */}
                    {[0, 25, 50, 75, 100].map(val => (
                        <div key={val} style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: `${val + 7}%`,
                            height: '1px',
                            background: '#F1F5F9',
                            zIndex: 0
                        }}></div>
                    ))}

                    {[30, 45, 25, 70, 95, 50, 45, 80, 100, 60, 75, 90].map((h, i) => (
                        <div key={i} className="hover-scale" style={{
                            flex: 1,
                            position: 'relative',
                            zIndex: 1,
                            height: `${h}%`,
                            background: i === 8 ? '#FF7D00' : 'rgba(15, 23, 42, 0.05)',
                            borderRadius: '10px 10px 4px 4px',
                            transition: 'all 0.5s ease',
                            cursor: 'pointer'
                        }}>
                            {i === 8 && <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', background: '#0F172A', color: 'white', padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 800 }}>PEAK</div>}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between" style={{ color: '#94A3B8', fontSize: '11px', fontWeight: 900, marginTop: '20px', padding: '0 8px' }}>
                    {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'].map(m => <span key={m}>{m}</span>)}
                </div>
            </div>
        </AppLayout>
    );
}

