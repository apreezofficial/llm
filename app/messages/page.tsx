"use client";
import AppLayout from "@/components/AppLayout";
import { Search, Send, Phone, Video, Info, MoreVertical, Plus } from "lucide-react";

export default function Messages() {
    const contacts = [
        { name: 'Dr. Sarah Smith', lastMsg: 'I have reviewed your proposal...', time: '10:30 AM', active: true, online: true },
        { name: 'UI/UX Community', lastMsg: 'Alex: Check out this new design tool!', time: 'Yesterday', active: false, online: false },
        { name: 'Support Center', lastMsg: 'Your ticket #124 has been resolved.', time: 'Mar 01', active: false, online: true },
        { name: 'James Wilson', lastMsg: 'The recording is now available.', time: 'Mar 01', active: false, online: false },
    ];

    return (
        <AppLayout>
            <div className="card" style={{ padding: 0, height: 'calc(100vh - 200px)', display: 'flex', overflow: 'hidden' }}>
                {/* Contacts Sidebar */}
                <div style={{ width: '350px', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '24px', borderBottom: '1px solid var(--border)' }}>
                        <div className="flex align-center justify-between" style={{ marginBottom: '20px' }}>
                            <h2 style={{ fontSize: '24px' }}>Messages</h2>
                            <button style={{ width: '36px', height: '36px', background: 'var(--primary)', color: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Plus size={20} />
                            </button>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input type="text" placeholder="Search conversations..." style={{ width: '100%', padding: '10px 12px 10px 40px', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-soft)', fontSize: '14px', outline: 'none' }} />
                        </div>
                    </div>
                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        {contacts.map((contact, i) => (
                            <div key={i} style={{
                                padding: '16px 24px',
                                borderBottom: '1px solid var(--border)',
                                background: contact.active ? 'var(--accent-blue)' : 'transparent',
                                cursor: 'pointer'
                            }}>
                                <div className="flex gap-16">
                                    <div style={{ position: 'relative' }}>
                                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--border)' }}></div>
                                        {contact.online && <div style={{ position: 'absolute', bottom: '2px', right: '2px', width: '12px', height: '12px', background: '#10B981', border: '2px solid white', borderRadius: '50%' }}></div>}
                                    </div>
                                    <div style={{ flex: 1, overflow: 'hidden' }}>
                                        <div className="flex align-center justify-between" style={{ marginBottom: '4px' }}>
                                            <p style={{ fontWeight: 700, fontSize: '15px' }}>{contact.name}</p>
                                            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{contact.time}</span>
                                        </div>
                                        <p style={{ fontSize: '13px', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{contact.lastMsg}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '16px 32px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'between' }}>
                        <div className="flex align-center gap-16" style={{ flex: 1 }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--border)' }}></div>
                            <div>
                                <p style={{ fontWeight: 700 }}>Dr. Sarah Smith</p>
                                <p style={{ fontSize: '12px', color: '#10B981' }}>Online</p>
                            </div>
                        </div>
                        <div className="flex align-center gap-20" style={{ color: 'var(--text-muted)' }}>
                            <button><Phone size={20} /></button>
                            <button><Video size={20} /></button>
                            <button><Info size={20} /></button>
                        </div>
                    </div>

                    <div style={{ flex: 1, padding: '32px', overflowY: 'auto', background: 'var(--bg-soft)' }}>
                        <div className="flex column gap-24">
                            <div style={{ alignSelf: 'flex-start', maxWidth: '60%' }}>
                                <div style={{ padding: '16px', background: 'white', borderRadius: '0 16px 16px 16px', boxShadow: 'var(--shadow)' }}>
                                    <p style={{ fontSize: '14px', lineHeight: 1.5 }}>Hello Alex! I've reviewed your proposal for the final project. It looks very promising.</p>
                                </div>
                                <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', marginLeft: '4px' }}>10:15 AM</span>
                            </div>

                            <div style={{ alignSelf: 'flex-end', maxWidth: '60%' }}>
                                <div style={{ padding: '16px', background: 'var(--primary)', color: 'white', borderRadius: '16px 16px 0 16px', boxShadow: 'var(--shadow-lg)' }}>
                                    <p style={{ fontSize: '14px', lineHeight: 1.5 }}>Thank you, Dr. Smith! I was wondering if I should focus more on the security implementation or the user interface first?</p>
                                </div>
                                <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', textAlign: 'right', display: 'block', marginRight: '4px' }}>10:28 AM</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '24px 32px', background: 'white', borderTop: '1px solid var(--border)' }}>
                        <div className="flex align-center gap-16">
                            <input type="text" placeholder="Type your message..." style={{ flex: 1, padding: '14px 20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-soft)', outline: 'none' }} />
                            <button style={{ width: '48px', height: '48px', background: 'var(--primary)', color: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
