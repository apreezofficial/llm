"use client";
import React, { useState } from 'react';
import {
    Video,
    FileText,
    HelpCircle,
    Edit3,
    Settings,
    Mic,
    Monitor,
    Hand,
    Send,
    Download,
    ExternalLink,
    Users,
    Moon,
    ChevronDown,
    Paperclip,
    MoreVertical,
    CheckCircle2,
    X,
    MessageSquare,
    Clock,
    GraduationCap
} from 'lucide-react';

const VirtualClassroom = () => {
    const [activeTab, setActiveTab] = useState('CHAT');

    const messages = [
        { user: 'Dr. Sarah Jenkins', time: '10:05 AM', text: 'Good morning everyone! Today we will cover the fundamental theorem of calculus part 2.', role: 'instructor' },
        { user: 'Marcus Chen', time: '10:08 AM', text: 'Will these slides be available after the lecture?', role: 'student' },
        { user: 'Dr. Sarah Jenkins', time: '10:09 AM', text: 'Yes Marcus, they are already in the "Materials" tray at the bottom of your screen.', role: 'instructor' }
    ];

    return (
        <div style={{ background: '#F8FAFC', height: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif' }}>

            {/* Top Bar */}
            <header style={{ background: 'white', padding: '12px 24px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <GraduationCap size={18} color="white" />
                        </div>
                    </div>
                    <div style={{ height: '24px', width: '1px', background: '#E2E8F0' }}></div>
                    <div>
                        <h1 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>Advanced Calculus: Integration Theory</h1>
                        <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Instructor: Dr. Sarah Jenkins • Week 4 • Room 402</div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <div style={{ background: '#FEF2F2', border: '1px solid #FEE2E2', padding: '6px 12px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '8px', height: '8px', background: '#EF4444', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
                        <span style={{ fontSize: '12px', fontWeight: 800, color: '#EF4444' }}>LIVE 42:15</span>
                    </div>
                    <div style={{ cursor: 'pointer' }}><Moon size={20} color="#64748B" /></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid #E2E8F0', paddingLeft: '24px' }}>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '13px', fontWeight: 800 }}>Alex Thompson</div>
                            <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Student ID: #88219</div>
                        </div>
                        <img src="https://i.pravatar.cc/100?u=alex" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
                    </div>
                </div>
            </header>

            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

                {/* Left Mini Sidebar */}
                <div style={{ width: '72px', background: 'white', borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 0', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <div style={{ background: '#0066FF', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 102, 255, 0.3)' }}>
                            <Video size={20} color="white" />
                        </div>
                        <FileText size={20} color="#64748B" style={{ cursor: 'pointer' }} />
                        <HelpCircle size={20} color="#64748B" style={{ cursor: 'pointer' }} />
                        <Edit3 size={20} color="#64748B" style={{ cursor: 'pointer' }} />
                    </div>
                    <Settings size={20} color="#64748B" style={{ cursor: 'pointer' }} />
                </div>

                {/* Main Content (Presentation + Bottom Tray) */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#F1F5F9', padding: '24px', overflow: 'hidden' }}>

                    {/* Video / Presentation Area */}
                    <div style={{ flex: 1, background: 'white', borderRadius: '24px', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Mock Presentation Slide */}
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                            <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1200&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                            {/* Overlay Info */}
                            <div style={{ position: 'absolute', top: '24px', left: '24px', background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)', color: 'white', padding: '8px 16px', borderRadius: '10px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Mic size={14} color="#60A5FA" /> Presenting: Integration by Parts.pdf
                            </div>

                            {/* PiP View (Instructor) */}
                            <div style={{ position: 'absolute', top: '24px', right: '24px', width: '240px', height: '140px', borderRadius: '16px', border: '3px solid #0066FF', boxShadow: '0 8px 24px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.5)', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', color: 'white', fontWeight: 600 }}>
                                    Dr. Jenkins (You)
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Material Trays */}
                    <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                        <div style={{ background: 'white', borderRadius: '20px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #E2E8F0' }}>
                            <div style={{ background: '#EFF6FF', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FileText size={24} color="#0066FF" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '13px', fontWeight: 800 }}>Lecture Slides: Week 4</div>
                                <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600 }}>PDF • 12.4 MB</div>
                            </div>
                            <button style={{ background: '#0066FF15', color: '#0066FF', border: 'none', borderRadius: '8px', padding: '8px 12px', fontSize: '11px', fontWeight: 800, cursor: 'pointer' }}>DOWNLOAD</button>
                        </div>

                        <div style={{ background: 'white', borderRadius: '20px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #E2E8F0' }}>
                            <div style={{ background: '#F0FDF4', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Edit3 size={24} color="#22C55E" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '13px', fontWeight: 800 }}>Practice Exercises</div>
                                <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600 }}>DOCX • 2.1 MB</div>
                            </div>
                            <button style={{ background: '#22C55E15', color: '#22C55E', border: 'none', borderRadius: '8px', padding: '8px 12px', fontSize: '11px', fontWeight: 800, cursor: 'pointer' }}>OPEN</button>
                        </div>

                        <div style={{ background: 'white', borderRadius: '20px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {[1, 2, 3, 4].map((i) => (
                                    <img key={i} src={`https://i.pravatar.cc/100?u=student${i}`} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid white', marginLeft: i === 1 ? 0 : -8 }} />
                                ))}
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F1F5F9', border: '2px solid white', marginLeft: -8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 800, color: '#64748B' }}>+24</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '13px', fontWeight: 800 }}>28 Students Present</div>
                                <div style={{ fontSize: '11px', color: '#22C55E', fontWeight: 700 }}>92% Engagement Rate</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar (Tabs / Chat) */}
                <div style={{ width: '360px', background: 'white', borderLeft: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
                    {/* Tabs */}
                    <div style={{ display: 'flex', borderBottom: '1px solid #F1F5F9' }}>
                        {['CHAT', 'QUEUE (3)', 'PEOPLE'].map((tab) => (
                            <div
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    flex: 1,
                                    padding: '16px 0',
                                    textAlign: 'center',
                                    fontSize: '11px',
                                    fontWeight: 800,
                                    color: activeTab === tab ? '#0066FF' : '#94A3B8',
                                    borderBottom: activeTab === tab ? '2px solid #0066FF' : 'none',
                                    cursor: 'pointer',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>

                    {/* Chat Area */}
                    <div style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {messages.map((m, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '12px', fontWeight: 800, color: m.role === 'instructor' ? '#0066FF' : '#1E293B' }}>{m.user}</span>
                                    <span style={{ fontSize: '10px', color: '#94A3B8' }}>{m.time}</span>
                                </div>
                                <div style={{
                                    background: m.role === 'instructor' ? '#F0F7FF' : '#F8FAFC',
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    fontSize: '13px',
                                    lineHeight: 1.5,
                                    border: m.role === 'instructor' ? '1px solid #DBEAFE' : '1px solid #F1F5F9',
                                    color: '#334155'
                                }}>
                                    {m.text}
                                </div>
                            </div>
                        ))}

                        <div style={{ marginTop: 'auto' }}>
                            <div style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Raised Hands</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {[
                                    { name: 'Elena Rodriguez', time: '4M AGO' },
                                    { name: 'Sarah Kohl', time: '2M AGO' }
                                ].map((h, i) => (
                                    <div key={i} style={{ background: 'white', border: '1px solid #F1F5F9', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <img src={`https://i.pravatar.cc/100?u=h${i}`} style={{ width: '28px', height: '28px', borderRadius: '50%' }} />
                                            <span style={{ fontSize: '12px', fontWeight: 700 }}>{h.name}</span>
                                        </div>
                                        <span style={{ fontSize: '10px', fontWeight: 800, color: '#F97316' }}>{h.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Message Input */}
                    <div style={{ padding: '24px', borderTop: '1px solid #F1F5F9' }}>
                        <div style={{ position: 'relative', marginBottom: '16px' }}>
                            <textarea
                                placeholder="Type your question..."
                                style={{ width: '100%', border: 'none', background: '#F1F5F9', borderRadius: '12px', padding: '12px 48px 12px 16px', fontSize: '14px', outline: 'none', height: '48px', resize: 'none' }}
                            ></textarea>
                            <Send size={18} color="#0066FF" style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748B' }}>
                                <Paperclip size={18} style={{ cursor: 'pointer' }} />
                                <span style={{ fontSize: '12px', fontWeight: 700 }}>Attach</span>
                            </div>
                            <button style={{
                                background: '#E0F2FE',
                                color: '#0369A1',
                                border: 'none',
                                padding: '8px 16px',
                                borderRadius: '99px',
                                fontSize: '11px',
                                fontWeight: 800,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                cursor: 'pointer'
                            }}>
                                <Hand size={14} /> Raise Hand
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.2); }
                    100% { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </div>
    );
};

export default VirtualClassroom;
