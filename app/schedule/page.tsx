"use client";
import { useState } from 'react';
import {
    Layout,
    Calendar as CalendarIcon,
    ChevronLeft,
    ChevronRight,
    Clock,
    Video
} from 'lucide-react';
import Link from 'next/link';
import AIBotWidget from '@/components/AIBotWidget';

export default function SchedulePage() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date().getDate());

    const days = Array.from({ length: 30 }, (_, i) => i + 1); // Mock 30 days
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const events = [
        {
            day: 15,
            title: "Advanced Biology Lab",
            time: "10:00 AM - 11:30 AM",
            type: "Virtual Class",
            color: "#3B82F6"
        },
        {
            day: 18,
            title: "History Project Submission",
            time: "11:59 PM",
            type: "Deadline",
            color: "#EF4444"
        },
        {
            day: 18,
            title: "Calculus Tutorial",
            time: "02:00 PM - 03:00 PM",
            type: "Virtual Class",
            color: "#3B82F6"
        },
        {
            day: 22,
            title: "Physics Quiz",
            time: "09:00 AM",
            type: "Exam",
            color: "#EAB308"
        }
    ];

    const getEventsForDay = (day: number) => events.filter(e => e.day === day);

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
            {/* Navbar */}
            <nav style={{ background: 'white', borderBottom: '1px solid #E2E8F0', padding: '16px 0', position: 'sticky', top: 0, zIndex: 100 }}>
                <div className="container flex align-center justify-between">
                    <Link href="/dashboard" className="flex align-center gap-8">
                        <div style={{ background: '#000000', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Layout size={20} color="white" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: '22px', color: '#0F172A', letterSpacing: '-0.5px' }}>EduTrack<span style={{ color: '#0066FF' }}>Pro</span></span>
                    </Link>
                    <div className="flex align-center gap-24">
                        <Link href="/dashboard" style={{ fontWeight: 600, color: '#64748B', fontSize: '14px' }}>Dashboard</Link>
                        <Link href="/certificates" style={{ fontWeight: 600, color: '#64748B', fontSize: '14px' }}>Certificates</Link>
                    </div>
                </div>
            </nav>

            <main className="container section">
                <div className="grid grid-2" style={{ gridTemplateColumns: '2fr 1fr', gap: '32px' }}>

                    {/* Calendar View */}
                    <div className="card" style={{ padding: '32px' }}>
                        <div className="flex align-center justify-between" style={{ marginBottom: '32px' }}>
                            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#1E293B' }}>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                            <div className="flex gap-8">
                                <button style={{ padding: '8px', border: '1px solid #E2E8F0', borderRadius: '8px', background: 'white', cursor: 'pointer' }}><ChevronLeft size={20} /></button>
                                <button style={{ padding: '8px', border: '1px solid #E2E8F0', borderRadius: '8px', background: 'white', cursor: 'pointer' }}><ChevronRight size={20} /></button>
                            </div>
                        </div>

                        {/* Weekday Header */}
                        <div className="grid grid-7" style={{ marginBottom: '16px', textAlign: 'center' }}>
                            {weekDays.map(d => (
                                <div key={d} style={{ fontSize: '13px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>{d}</div>
                            ))}
                        </div>

                        {/* Days Grid */}
                        <div className="grid grid-7" style={{ gap: '8px' }}>
                            {/* Empty cells for offset if needed, simplified here */}
                            {days.map(day => {
                                const dayEvents = getEventsForDay(day);
                                const isToday = day === new Date().getDate();
                                const isSelected = day === selectedDate;

                                return (
                                    <div
                                        key={day}
                                        onClick={() => setSelectedDate(day)}
                                        style={{
                                            aspectRatio: '1/1',
                                            borderRadius: '12px',
                                            background: isSelected ? '#0066FF' : 'white',
                                            border: isSelected ? 'none' : isToday ? '2px solid #0066FF' : '1px solid #F1F5F9',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            transition: 'all 0.2s',
                                            color: isSelected ? 'white' : '#1E293B',
                                            boxShadow: isSelected ? '0 4px 12px rgba(0, 102, 255, 0.3)' : 'none'
                                        }}
                                    >
                                        <span style={{ fontSize: '16px', fontWeight: 700 }}>{day}</span>
                                        {dayEvents.length > 0 && (
                                            <div style={{ display: 'flex', gap: '2px', marginTop: '4px' }}>
                                                {dayEvents.map((e, i) => (
                                                    <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: isSelected ? 'white' : e.color }}></div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Side Panel: Selected Day Details */}
                    <div>
                        <div className="card" style={{ padding: '32px', height: '100%' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B', marginBottom: '8px' }}>
                                Details for May {selectedDate}
                            </h3>
                            <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '32px' }}>You have {getEventsForDay(selectedDate).length} events scheduled.</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {getEventsForDay(selectedDate).length === 0 ? (
                                    <div style={{ textAlign: 'center', padding: '40px 0', color: '#94A3B8' }}>
                                        <CalendarIcon size={40} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
                                        <div style={{ fontWeight: 600 }}>No events scheduled</div>
                                    </div>
                                ) : (
                                    getEventsForDay(selectedDate).map((e, i) => (
                                        <div key={i} style={{ background: '#F8FAFC', padding: '20px', borderRadius: '14px', borderLeft: `4px solid ${e.color}` }}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                                <div style={{ fontSize: '11px', fontWeight: 800, color: e.color, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{e.type}</div>
                                                <div style={{ background: 'white', padding: '4px 8px', borderRadius: '6px', border: '1px solid #E2E8F0', fontSize: '10px', fontWeight: 700 }}>HIGH PRIORITY</div>
                                            </div>
                                            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>{e.title}</h4>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '13px', fontWeight: 500 }}>
                                                <Clock size={16} /> {e.time}
                                            </div>
                                            {e.type === 'Virtual Class' && (
                                                <button style={{ marginTop: '16px', width: '100%', padding: '10px', background: 'white', border: '1px solid #E2E8F0', borderRadius: '8px', color: '#0066FF', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                                    <Video size={16} /> Join Class
                                                </button>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <AIBotWidget />
        </div>
    );
}
