"use client";
import { useState, useRef, useEffect } from 'react';
import { Bot, X, MessageSquare, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AIBotWidget() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 20, y: window.innerHeight - 80 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    // Simple drag implementation
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - dragOffset.x,
                y: e.clientY - dragOffset.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragOffset]);

    // Initial position fix
    useEffect(() => {
        setPosition({ x: 40, y: window.innerHeight - 100 });
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                zIndex: 1000,
                cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleMouseDown}
        >
            {/* Chat Bubble */}
            {!isOpen && (
                <div
                    onClick={() => setIsOpen(true)}
                    className="animate-bounce-slow"
                    style={{
                        background: '#0066FF',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 25px rgba(0, 102, 255, 0.4)',
                        color: 'white',
                        transition: 'transform 0.2s'
                    }}
                >
                    <Bot size={32} />
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '16px', height: '16px', background: '#22C55E', borderRadius: '50%', border: '2px solid white' }}></div>
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '350px',
                    background: 'white',
                    borderRadius: '20px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    cursor: 'default',
                    marginBottom: '80px' // Offset to not cover the trigger area if needed, or just replace
                }} onMouseDown={(e) => e.stopPropagation()}>
                    <div style={{ background: '#0066FF', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Bot size={20} />
                            <span style={{ fontWeight: 700 }}>EduBot Assistant</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                            <X size={18} />
                        </button>
                    </div>

                    <div style={{ height: '300px', padding: '16px', background: '#F8FAFC', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#0066FF', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Bot size={16} color="white" />
                            </div>
                            <div style={{ background: 'white', padding: '10px 14px', borderRadius: '12px', borderTopLeftRadius: 0, border: '1px solid #E2E8F0', fontSize: '13px', lineHeight: 1.5, color: '#334155' }}>
                                Hi current user! I'm here to help with your studies. Try asking about your latest Biology homework.
                            </div>
                        </div>
                        <button
                            onClick={() => router.push('/ai-tutor')}
                            style={{ margin: 'auto 0 0', width: '100%', padding: '10px', background: '#EFF6FF', color: '#0066FF', border: '1px border #BFDBFE', borderRadius: '10px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}
                        >
                            Open Full AI Tutor &rarr;
                        </button>
                    </div>

                    <div style={{ padding: '12px', background: 'white', borderTop: '1px solid #E2E8F0', display: 'flex', gap: '8px' }}>
                        <input type="text" placeholder="Ask a quick question..." style={{ flex: 1, border: 'none', outline: 'none', fontSize: '13px' }} />
                        <button style={{ background: '#0066FF', color: 'white', width: '32px', height: '32px', borderRadius: '8px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Send size={14} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
