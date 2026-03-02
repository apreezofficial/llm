"use client";
import AppLayout from "@/components/AppLayout";
import { Bot, Sparkles, Send, Mic, Image as ImageIcon, BrainCircuit, Lightbulb, Zap } from "lucide-react";

export default function AICompanion() {
    return (
        <AppLayout>
            <div className="flex gap-40" style={{ height: 'calc(100vh - 180px)' }}>
                {/* Main AI Chat */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '32px' }}>
                        <h1 style={{ fontSize: '32px', marginBottom: '8px' }} className="flex align-center gap-12">
                            EduTrack AI <Sparkles size={28} color="#8B5CF6" fill="#8B5CF6" />
                        </h1>
                        <p style={{ color: 'var(--text-muted)' }}>Your personal 24/7 tutor, mentor, and learning companion.</p>
                    </div>

                    <div className="card" style={{ flex: 1, background: 'white', display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
                        <div style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
                            <div className="flex column gap-32">
                                <div className="flex gap-20">
                                    <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #8B5CF6, #D946EF)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                        <Bot size={24} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ fontWeight: 700, marginBottom: '8px' }}>EduTrack AI</p>
                                        <div style={{ background: 'var(--bg-soft)', padding: '20px', borderRadius: '0 20px 20px 20px', fontSize: '15px', lineHeight: 1.6 }}>
                                            Hello Alex! I see you're currently working on the "Advanced React Architecture" course.
                                            Would you like me to explain the concept of **Server Actions** or help you with your current assignment?
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-20" style={{ flexDirection: 'row-reverse' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                        A
                                    </div>
                                    <div style={{ flex: 1, textAlign: 'right' }}>
                                        <p style={{ fontWeight: 700, marginBottom: '8px' }}>Alex Rivers</p>
                                        <div style={{ background: 'var(--primary)', color: 'white', padding: '20px', borderRadius: '20px 0 20px 20px', fontSize: '15px', lineHeight: 1.6, display: 'inline-block', textAlign: 'left' }}>
                                            Can you explain how Server Actions differ from traditional API routes in Next.js?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '32px', borderTop: '1px solid var(--border)' }}>
                            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                                <button className="badge-pill" style={{ border: '1px solid var(--border)', background: 'white', color: 'var(--text-muted)' }}>Explain concept</button>
                                <button className="badge-pill" style={{ border: '1px solid var(--border)', background: 'white', color: 'var(--text-muted)' }}>Debug code</button>
                                <button className="badge-pill" style={{ border: '1px solid var(--border)', background: 'white', color: 'var(--text-muted)' }}>Summarize lesson</button>
                            </div>
                            <div className="flex align-center gap-16">
                                <div style={{ flex: 1, position: 'relative' }}>
                                    <input type="text" placeholder="Ask anything about your courses..." style={{ width: '100%', padding: '16px 60px 16px 20px', borderRadius: '16px', border: '1px solid var(--border)', outline: 'none', background: 'var(--bg-soft)', fontSize: '15px' }} />
                                    <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '8px', color: 'var(--text-muted)' }}>
                                        <button><Mic size={20} /></button>
                                        <button><ImageIcon size={20} /></button>
                                    </div>
                                </div>
                                <button style={{ width: '56px', height: '56px', background: 'var(--primary)', color: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Send size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Tools Sidebar */}
                <div style={{ width: '350px' }}>
                    <div className="card" style={{ padding: '32px', height: '100%' }}>
                        <h3 style={{ fontSize: '20px', marginBottom: '32px' }}>Smart Assistant Tools</h3>
                        <div className="flex column gap-24">
                            <div className="flex gap-16">
                                <div style={{ padding: '12px', background: '#DCFCE7', color: '#16A34A', borderRadius: '12px' }}><BrainCircuit size={24} /></div>
                                <div>
                                    <p style={{ fontWeight: 700, fontSize: '15px' }}>Concept Map</p>
                                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Generate a visual map of topics.</p>
                                </div>
                            </div>
                            <div className="flex gap-16">
                                <div style={{ padding: '12px', background: '#FEF9C3', color: '#CA8A04', borderRadius: '12px' }}><Lightbulb size={24} /></div>
                                <div>
                                    <p style={{ fontWeight: 700, fontSize: '15px' }}>Quiz Generator</p>
                                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Create practice tests instantly.</p>
                                </div>
                            </div>
                            <div className="flex gap-16">
                                <div style={{ padding: '12px', background: '#F3E8FF', color: '#9333EA', borderRadius: '12px' }}><Zap size={24} /></div>
                                <div>
                                    <p style={{ fontWeight: 700, fontSize: '15px' }}>Express Review</p>
                                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>5-minute course summaries.</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '60px' }}>
                            <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Recent Help</h4>
                            <div className="flex column gap-12">
                                {['React State Management', 'Tailwind Grid Layouts', 'Next.js Routing', 'SQL Joins Explained'].map((item, i) => (
                                    <div key={i} className="flex align-center justify-between" style={{ fontSize: '13px', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border)', cursor: 'pointer' }}>
                                        <span>{item}</span>
                                        <Sparkles size={12} color="var(--primary)" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
