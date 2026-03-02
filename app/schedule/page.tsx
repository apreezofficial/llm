"use client";
import AppLayout from "@/components/AppLayout";
import { ChevronLeft, ChevronRight, Video, Users, Clock } from "lucide-react";

export default function Schedule() {
    const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    const events = [
        { day: 'Mon', time: '10:00', title: 'React Hooks Deep Dive', type: 'Live Class', color: '#3B82F6' },
        { day: 'Wed', time: '14:00', title: 'UX Design Review', type: 'Workshop', color: '#8B5CF6' },
        { day: 'Fri', time: '11:00', title: 'Q&A with Instructor', type: 'Office Hours', color: '#10B981' },
    ];

    return (
        <AppLayout>
            <div className="flex align-center justify-between" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Learning Schedule</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Stay on track with your live classes and study sessions.</p>
                </div>
                <div className="flex align-center gap-16">
                    <div className="flex align-center gap-8" style={{ background: 'white', padding: '8px 16px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                        <button style={{ color: 'var(--text-muted)' }}><ChevronLeft size={20} /></button>
                        <span style={{ fontWeight: 700 }}>March 2026</span>
                        <button style={{ color: 'var(--text-muted)' }}><ChevronRight size={20} /></button>
                    </div>
                    <button className="btn btn-primary">Add Session</button>
                </div>
            </div>

            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(5, 1fr)', background: 'var(--bg-soft)', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ padding: '20px' }}></div>
                    {days.map(day => (
                        <div key={day} style={{ padding: '20px', textAlign: 'center', fontWeight: 700, borderLeft: '1px solid var(--border)' }}>{day}</div>
                    ))}
                </div>

                <div style={{ position: 'relative' }}>
                    {hours.map(hour => (
                        <div key={hour} style={{ display: 'grid', gridTemplateColumns: '100px repeat(5, 1fr)', height: '100px', borderBottom: '1px solid var(--border)' }}>
                            <div style={{ padding: '12px', textAlign: 'right', fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>{hour}</div>
                            {days.map(day => {
                                const event = events.find(e => e.day === day && e.time === hour);
                                return (
                                    <div key={day} style={{ borderLeft: '1px solid var(--border)', padding: '8px', position: 'relative' }}>
                                        {event && (
                                            <div style={{
                                                background: `${event.color}15`,
                                                borderLeft: `4px solid ${event.color}`,
                                                borderRadius: '8px',
                                                padding: '12px',
                                                height: '100%'
                                            }}>
                                                <p style={{ fontSize: '12px', fontWeight: 700, color: event.color, marginBottom: '4px' }}>{event.type}</p>
                                                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--secondary)', lineHeight: 1.3 }}>{event.title}</p>
                                                <div className="flex align-center gap-4" style={{ marginTop: '8px', color: 'var(--text-muted)', fontSize: '11px' }}>
                                                    <Video size={12} /> Live Zoom
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
