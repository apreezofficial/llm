"use client";
import { useState } from 'react';
import {
    Layout,
    Plus,
    MessageSquare,
    MoreVertical,
    Image as ImageIcon,
    Paperclip,
    Send,
    Zap,
    User,
    ChevronLeft,
    Menu,
    Bot,
    MoreHorizontal,
    FileText,
    CheckCircle2,
    BookOpen
} from 'lucide-react';
import Link from 'next/link';

export default function AITutorPage() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div style={{ display: 'flex', height: '100vh', background: '#F8FAFC', color: '#1E293B', overflow: 'hidden' }}>
            {/* Sidebar */}
            <aside
                style={{
                    flexShrink: 0,
                    background: '#F8FAFC',
                    borderRight: '1px solid #E2E8F0',
                    transition: 'all 0.3s ease',
                    width: sidebarOpen ? '300px' : '0',
                    opacity: sidebarOpen ? 1 : 0,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh'
                }}
            >
                <div style={{ padding: '24px' }}>
                    <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', textDecoration: 'none' }}>
                        <div style={{ width: '32px', height: '32px', background: '#0066FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <Bot size={20} fill="white" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: '20px', color: '#0F172A' }}>EduAI</span>
                    </Link>

                    <button style={{
                        width: '100%',
                        background: '#0066FF',
                        color: 'white',
                        fontWeight: 600,
                        padding: '12px 16px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                        marginBottom: '32px'
                    }}>
                        <Plus size={20} /> New Session
                    </button>

                    <div style={{ marginBottom: '8px' }}>
                        <h3 style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px', padding: '0 8px' }}>Previous Learning Sessions</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ background: 'white', border: '1px solid #DBEAFE', padding: '16px', borderRadius: '12px', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#0066FF' }}></div>
                                <h4 style={{ fontWeight: 600, color: '#0066FF', fontSize: '14px', marginBottom: '4px' }}>Photosynthesis Deep Dive</h4>
                                <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500 }}>24 mins ago • Biology</div>
                            </div>

                            {[
                                { title: 'Calculus: Chain Rule', time: 'Yesterday', subject: 'Mathematics' },
                                { title: 'Ancient Rome Politics', time: 'Oct 12', subject: 'History' },
                                { title: 'Chemistry Lab Prep', time: 'Oct 10', subject: 'Science' }
                            ].map((session, idx) => (
                                <div key={idx} style={{ padding: '16px', borderRadius: '12px', cursor: 'pointer', border: '1px solid transparent', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'white'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                                    <h4 style={{ fontWeight: 600, color: '#334155', fontSize: '14px', marginBottom: '4px' }}>{session.title}</h4>
                                    <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 500 }}>{session.time} • {session.subject}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: 'auto', padding: '24px', borderTop: '1px solid #E2E8F0' }}>
                    <div style={{ background: 'white', padding: '12px', borderRadius: '12px', border: '1px solid #F1F5F9', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ position: 'relative' }}>
                            <img
                                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop"
                                alt="User"
                                style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '12px', height: '12px', background: '#22C55E', border: '2px solid white', borderRadius: '50%' }}></div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 800, fontSize: '14px', color: '#0F172A' }}>Marcus Chen</div>
                            <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500 }}>Grade 11 Student</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Chat Area */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', position: 'relative', background: 'white' }}>
                {/* Header */}
                <header style={{ height: '64px', borderBottom: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', background: 'white', flexShrink: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}
                        >
                            {sidebarOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
                        </button>
                        <div style={{ width: '1px', height: '24px', background: '#E2E8F0' }}></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }}></div>
                            <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>AI Tutor Online</span>
                        </div>
                        <div style={{ width: '1px', height: '24px', background: '#E2E8F0' }}></div>
                        <h1 style={{ fontWeight: 800, color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}>
                            <BookOpen size={18} color="#94A3B8" />
                            Biology 101: Plant Biology
                        </h1>
                    </div>
                    <button style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8' }}>
                        <MoreVertical size={20} />
                    </button>
                </header>

                {/* Chat Stream */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '24px', background: '#F8FAFC', display: 'flex', flexDirection: 'column', gap: '32px' }}>

                    {/* AI Message 1 */}
                    <div style={{ display: 'flex', gap: '16px', maxWidth: '896px', margin: '0 auto', width: '100%' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#0066FF', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Zap size={16} color="white" fill="white" />
                        </div>
                        <div style={{ background: 'white', padding: '24px', borderRadius: '16px', borderTopLeftRadius: 0, boxShadow: '0 1px 2px rgba(0,0,0,0.05)', border: '1px solid #F1F5F9', color: '#334155', lineHeight: 1.6, maxWidth: '640px' }}>
                            Hello Marcus! Ready to dive into today's lesson? I've summarized your last lecture on <strong>Photosynthesis</strong>. Would you like to review the Calvin Cycle or should we look at the diagrams from your textbook?
                        </div>
                    </div>

                    {/* User Message */}
                    <div style={{ display: 'flex', gap: '16px', maxWidth: '896px', margin: '0 auto', width: '100%', flexDirection: 'row-reverse' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, border: '1px solid #E2E8F0' }}>
                            <img
                                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop"
                                alt="User"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={{ background: '#0066FF', padding: '24px', borderRadius: '16px', borderTopRightRadius: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', color: 'white', lineHeight: 1.6, maxWidth: '640px' }}>
                            Can you explain how light-dependent reactions work? Also, check my formula for this.
                        </div>
                    </div>

                    {/* AI Message 2 with Content */}
                    <div style={{ display: 'flex', gap: '16px', maxWidth: '896px', margin: '0 auto', width: '100%' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#0066FF', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Zap size={16} color="white" fill="white" />
                        </div>
                        <div style={{ display: 'flex', gap: '32px', width: '100%', maxWidth: '896px' }}>
                            <div style={{ background: 'white', padding: '24px', borderRadius: '16px', borderTopLeftRadius: 0, boxShadow: '0 1px 2px rgba(0,0,0,0.05)', border: '1px solid #F1F5F9', color: '#334155', lineHeight: 1.6, flex: 1 }}>
                                <p style={{ marginBottom: '16px' }}>
                                    Of course! Light-dependent reactions happen in the <strong>thylakoid membranes</strong> of chloroplasts. They convert solar energy into chemical energy (ATP and NADPH).
                                </p>

                                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', fontFamily: 'monospace', fontSize: '13px', color: '#1E293B', marginBottom: '24px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                                    2H₂O + 2NADP⁺ + 3ADP + 3Pᵢ + light energy → 2NADPH + 2H⁺ + 3ATP + O₂
                                </div>

                                <p style={{ marginBottom: '16px', fontSize: '13px', fontWeight: 600, color: '#64748B' }}>Here's a simplified diagram of the process:</p>

                                <div style={{ background: '#F8FAFC', border: '2px dashed #E2E8F0', borderRadius: '12px', aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', marginBottom: '24px', cursor: 'pointer', transition: 'all 0.2s' }}>
                                    <ImageIcon size={48} style={{ marginBottom: '8px', opacity: 0.5 }} />
                                    <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>Interactive Diagram: Electron Transport Chain</span>
                                </div>

                                <p>
                                    The oxygen (O₂) is released as a byproduct, which is why plants are so essential for our atmosphere!
                                </p>
                            </div>

                            {/* Floating Asset Card */}
                            <div style={{ width: '280px', flexShrink: 0, display: sidebarOpen ? 'block' : 'none' }} className="mobile-hide">
                                <div style={{ background: 'white', padding: '16px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #E2E8F0', position: 'sticky', top: '16px' }}>
                                    <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>Recent Homework Assets</h4>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#F8FAFC', padding: '12px', borderRadius: '12px', border: '1px solid #F1F5F9' }}>
                                        <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: '#FFEDD5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                                            <img
                                                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=100&auto=format&fit=crop"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, mixBlendMode: 'multiply' }}
                                                alt="Homework"
                                            />
                                        </div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ fontWeight: 700, fontSize: '13px', color: '#0F172A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Problem_Set_4.jpg</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                                                <span style={{ background: '#DCFCE7', color: '#15803D', fontSize: '10px', fontWeight: 800, padding: '2px 6px', borderRadius: '4px', border: '1px solid #BBF7D0' }}>ANALYZED</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Input Area */}
                <div style={{ padding: '24px', background: '#F8FAFC' }}>
                    <div style={{ maxWidth: '896px', margin: '0 auto', width: '100%' }}>
                        {/* Suggested Actions */}
                        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', overflowX: 'auto', paddingBottom: '4px' }}>
                            {['Explain the Calvin Cycle', 'Summarize my last lecture', 'Generate a quick quiz'].map((action, i) => (
                                <button key={i} style={{ flexShrink: 0, background: 'white', border: '1px solid #E2E8F0', padding: '10px 20px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, color: '#475569', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', transition: 'all 0.2s' }}>
                                    {action}
                                </button>
                            ))}
                        </div>

                        {/* Input Box */}
                        <div style={{ background: 'white', padding: '8px 8px 8px 16px', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderRight: '1px solid #F1F5F9', paddingRight: '16px' }}>
                                <button style={{ padding: '8px', color: '#94A3B8', background: 'none', border: 'none', cursor: 'pointer', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Paperclip size={20} />
                                </button>
                                <button style={{ padding: '8px', color: '#94A3B8', background: 'none', border: 'none', cursor: 'pointer', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <ImageIcon size={20} />
                                </button>
                            </div>

                            <input
                                type="text"
                                placeholder="Ask AI about your homework, upload a photo of a problem..."
                                style={{ flex: 1, padding: '12px 0', background: 'transparent', border: 'none', outline: 'none', fontSize: '15px', color: '#334155' }}
                            />

                            <button style={{ padding: '12px', background: '#0066FF', color: 'white', borderRadius: '12px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Send size={20} fill="white" />
                            </button>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '16px' }}>
                            <span style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                EduAI can help with complex formulas, diagrams, and step-by-step tutoring.
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
