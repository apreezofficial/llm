"use client";
import React from 'react';
import {
    Plus,
    MessageSquare,
    Paperclip,
    Image as ImageIcon,
    Send,
    BookOpen,
    User,
    Bot,
    MoreVertical,
    ChevronDown,
    Sparkles
} from 'lucide-react';

const AITutorPage = () => {
    const sessions = [
        { title: 'Photosynthesis Deep Dive', time: '24 mins ago', subject: 'Biology', active: true },
        { title: 'Calculus: Chain Rule', time: 'Yesterday', subject: 'Mathematics' },
        { title: 'Ancient Rome Politics', time: 'Oct 12', subject: 'History' },
        { title: 'Chemistry Lab Prep', time: 'Oct 10', subject: 'Science' },
    ];

    return (
        <div style={{ display: 'flex', height: '100vh', background: '#F8FAFC', color: '#1E293B', fontFamily: 'Inter, sans-serif' }}>
            {/* Sidebar */}
            <aside style={{ width: '280px', background: '#F1F5F9', borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
                    <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Bot size={18} color="white" />
                    </div>
                    <span style={{ fontWeight: 800, fontSize: '20px' }}>EduAI</span>
                </div>

                <button style={{ background: '#0066FF', color: 'white', border: 'none', borderRadius: '12px', padding: '16px', fontWeight: 700, fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '40px', boxShadow: '0 4px 12px rgba(0, 102, 255, 0.2)' }}>
                    <Plus size={20} /> New Session
                </button>

                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Previous Learning Sessions</div>
                    {sessions.map((s, idx) => (
                        <div key={idx} style={{
                            background: s.active ? 'white' : 'transparent',
                            padding: '16px',
                            borderRadius: '16px',
                            marginBottom: '12px',
                            border: s.active ? '1px solid #E2E8F0' : '1px solid transparent',
                            cursor: 'pointer',
                            boxShadow: s.active ? '0 4px 6px -1px rgb(0 0 0 / 0.05)' : 'none'
                        }}>
                            <div style={{ fontSize: '14px', fontWeight: 700, color: s.active ? '#0066FF' : '#1E293B', marginBottom: '4px' }}>{s.title}</div>
                            <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>{s.time} • {s.subject}</div>
                        </div>
                    ))}
                </div>

                <div style={{ background: 'white', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                        <div style={{ fontSize: '14px', fontWeight: 700 }}>Marcus Chen</div>
                        <div style={{ fontSize: '11px', color: '#64748B' }}>Grade 11 Student</div>
                    </div>
                </div>
            </aside>

            {/* Main Chat Area */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                {/* Header */}
                <header style={{ padding: '0 32px', height: '64px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '8px', height: '8px', background: '#22C55E', borderRadius: '50%' }}></div>
                            <span style={{ fontSize: '12px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>AI Tutor Online</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <BookOpen size={16} color="#64748B" />
                            <span style={{ fontSize: '14px', fontWeight: 700 }}>Biology 101: Plant Biology</span>
                        </div>
                    </div>
                    <MoreVertical size={20} color="#94A3B8" style={{ cursor: 'pointer' }} />
                </header>

                {/* Chat Messages */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '40px 100px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {/* AI Message 1 */}
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ background: '#0066FF', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Sparkles size={18} color="white" />
                            </div>
                            <div style={{ background: 'white', padding: '24px', borderRadius: '0 24px 24px 24px', border: '1px solid #E2E8F0', maxWidth: '600px', fontSize: '15px', lineHeight: 1.6 }}>
                                Hello Marcus! Ready to dive into today&apos;s lesson? I&apos;ve summarized your last lecture on <strong>Photosynthesis</strong>. Would you like to review the Calvin Cycle or should we look at the diagrams from your textbook?
                            </div>
                        </div>

                        {/* User Message */}
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end' }}>
                            <div style={{ background: '#3B82F6', padding: '24px', borderRadius: '24px 0 24px 24px', color: 'white', maxWidth: '600px', fontSize: '15px', lineHeight: 1.6 }}>
                                Can you explain how light-dependent reactions work? Also, check my formula for this.
                            </div>
                            <div style={{ background: '#F1F5F9', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <User size={18} color="#64748B" />
                            </div>
                        </div>

                        {/* AI Message 2 (Detailed) */}
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ background: '#0066FF', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Sparkles size={18} color="white" />
                            </div>
                            <div style={{ background: 'white', padding: '32px', borderRadius: '0 24px 24px 24px', border: '1px solid #E2E8F0', maxWidth: '800px', position: 'relative' }}>
                                <div style={{ fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                                    Of course! Light-dependent reactions happen in the <strong>thylakoid membranes</strong> of chloroplasts. They convert solar energy into chemical energy (ATP and NADPH).
                                </div>

                                <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '16px', border: '1px solid #F1F5F9', fontFamily: 'monospace', fontSize: '14px', textAlign: 'center', marginBottom: '24px', color: '#1E293B' }}>
                                    2H₂O + 2NADP⁺ + 3ADP + 3Pi + light energy → 2NADPH + 2H⁺ + 3ATP + O₂
                                </div>

                                <div style={{ fontSize: '15px', lineHeight: 1.6, marginBottom: '16px' }}>Here&apos;s a simplified diagram of the process:</div>

                                <div style={{ background: '#F8FAFC', border: '1px solid #F1F5F9', borderRadius: '16px', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }}>
                                    <ImageIcon size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
                                    <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Interactive Diagram: Electron Transport Chain</div>
                                </div>

                                {/* Homework Asset Tooltip */}
                                <div style={{ position: 'absolute', right: '-40px', bottom: '100px', background: 'white', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1)', width: '220px' }}>
                                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>Recent Homework Assets</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=100&auto=format&fit=crop" style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} />
                                            <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '12px', height: '12px', background: '#22C55E', borderRadius: '50%', border: '2px solid white' }}></div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '12px', fontWeight: 700 }}>Problem_Set_4.jpg</div>
                                            <div style={{ fontSize: '10px', color: '#22C55E', fontWeight: 800 }}>ANALYZED</div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ fontSize: '15px', lineHeight: 1.6, marginTop: '24px' }}>
                                    The oxygen (O₂) is released as a byproduct, which is why plants are so essential for our atmosphere!
                                </div>
                            </div>
                        </div>

                        {/* Suggested Next Steps */}
                        <div style={{ display: 'flex', gap: '12px', paddingLeft: '56px' }}>
                            <div style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', width: '100%', marginBottom: '12px' }}>Suggested Next Steps</div>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <button style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '99px', padding: '10px 20px', fontSize: '13px', fontWeight: 600 }}>Explain the Calvin Cycle</button>
                                <button style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '99px', padding: '10px 20px', fontSize: '13px', fontWeight: 600 }}>Summarize my last lecture</button>
                                <button style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '99px', padding: '10px 20px', fontSize: '13px', fontWeight: 600 }}>Generate a quick quiz</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Bar */}
                <div style={{ padding: '24px 100px 48px', background: 'linear-gradient(to top, white 60%, transparent)' }}>
                    <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 4px 20px -2px rgb(0 0 0 / 0.05)' }}>
                        <button style={{ color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: 600 }}>
                            <Paperclip size={20} /> <span style={{ textDecoration: 'underline' }}>attach_file</span>
                        </button>
                        <button style={{ color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: 600 }}>
                            <ImageIcon size={20} /> <span style={{ textDecoration: 'underline' }}>add_a_photo</span>
                        </button>
                        <input
                            type="text"
                            placeholder="Ask AI about your homework, upload a photo of a problem..."
                            style={{ flex: 1, border: 'none', padding: '12px', fontSize: '14px', outline: 'none' }}
                        />
                        <button style={{ background: '#0066FF', color: 'white', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Send size={18} />
                        </button>
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginTop: '16px', letterSpacing: '1px' }}>
                        EduAI can help with complex formulas, diagrams, and step-by-step tutoring.
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AITutorPage;
