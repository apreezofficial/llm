"use client";
import { useState } from 'react';
import {
    Layout,
    Calendar as CalendarIcon,
    ChevronLeft,
    ChevronRight,
    Clock,
    Video,
    MapPin,
    MoreHorizontal,
    Plus,
    Filter
} from 'lucide-react';
import Link from 'next/link';
import AIBotWidget from '@/components/AIBotWidget';

export default function SchedulePage() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(18); // Default to a day with events
    const [view, setView] = useState<'Month' | 'Week'>('Month');

    // Mock Data
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const events = [
        { day: 15, title: "Advanced Biology Lab", time: "10:00 AM - 11:30 AM", type: "Class", color: "#3B82F6", location: "Virtual Room A" },
        { day: 18, title: "History Project Submission", time: "11:59 PM", type: "Deadline", color: "#EF4444", location: "Canvas Portal" },
        { day: 18, title: "Calculus Tutorial", time: "02:00 PM - 03:00 PM", type: "Class", color: "#3B82F6", location: "Virtual Room B" },
        { day: 22, title: "Physics Quiz", time: "09:00 AM", type: "Exam", color: "#EAB308", location: "Main Hall / Online" },
        { day: 8, title: "Study Group", time: "04:00 PM", type: "Study", color: "#10B981", location: "Library" },
        { day: 28, title: "Career Fair", time: "12:00 PM", type: "Event", color: "#8B5CF6", location: "Campus Center" }
    ];

    const getEventsForDay = (day: number) => events.filter(e => e.day === day);

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px', fontFamily: '"Inter", sans-serif' }}>
            {/* Navbar */}
            <nav style={{ background: 'white', borderBottom: '1px solid #E2E8F0', padding: '16px 0', position: 'sticky', top: 0, zIndex: 100 }}>
                <div className="container flex align-center justify-between">
                    <Link href="/dashboard" className="flex align-center gap-8">
                        <div style={{ background: '#0066FF', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                {/* Header Section */}
                <div className="flex justify-between align-center" style={{ marginBottom: '32px' }}>
                    <div>
                        <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#1E293B', letterSpacing: '-1px' }}>Schedule</h1>
                        <p style={{ color: '#64748B', fontSize: '16px' }}>Manage your classes, deadlines, and events.</p>
                    </div>
                    <div className="flex gap-12">
                        <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Filter size={18} /> Filter
                        </button>
                        <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Plus size={18} /> Add Event
                        </button>
                    </div>
                </div>

                <div className="grid grid-3" style={{ gridTemplateColumns: '2.5fr 1fr', gap: '32px', alignItems: 'start' }}>

                    {/* Modern Calendar Card */}
                    <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #F1F5F9' }}>
                        {/* Calendar Header */}
                        <div className="flex justify-between align-center" style={{ marginBottom: '32px' }}>
                            <div className="flex align-center gap-16">
                                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#1E293B' }}>May 2024</h2>
                                <div className="flex gap-4">
                                    <button style={{ padding: '8px', borderRadius: '8px', border: '1px solid #E2E8F0', background: 'white', cursor: 'pointer', color: '#64748B' }}>
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button style={{ padding: '8px', borderRadius: '8px', border: '1px solid #E2E8F0', background: 'white', cursor: 'pointer', color: '#64748B' }}>
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>

                            <div style={{ background: '#F1F5F9', padding: '4px', borderRadius: '10px', display: 'flex' }}>
                                <button
                                    onClick={() => setView('Month')}
                                    style={{
                                        padding: '6px 16px',
                                        borderRadius: '8px',
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        border: 'none',
                                        cursor: 'pointer',
                                        background: view === 'Month' ? 'white' : 'transparent',
                                        color: view === 'Month' ? '#1E293B' : '#64748B',
                                        boxShadow: view === 'Month' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    Month
                                </button>
                                <button
                                    onClick={() => setView('Week')}
                                    style={{
                                        padding: '6px 16px',
                                        borderRadius: '8px',
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        border: 'none',
                                        cursor: 'pointer',
                                        background: view === 'Week' ? 'white' : 'transparent',
                                        color: view === 'Week' ? '#1E293B' : '#64748B',
                                        boxShadow: view === 'Week' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    Week
                                </button>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '16px', textAlign: 'center' }}>
                            {weekDays.map(d => (
                                <div key={d} style={{ fontSize: '13px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', paddingBottom: '16px' }}>{d}</div>
                            ))}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '12px' }}>
                            {/* Empty offset days (just for visual balance in this mock) */}
                            <div style={{ aspectRatio: '1/1' }}></div>
                            <div style={{ aspectRatio: '1/1' }}></div>
                            <div style={{ aspectRatio: '1/1' }}></div>

                            {days.map(day => {
                                const dayEvents = getEventsForDay(day);
                                const isToday = day === 8; // Mock "Today"
                                const isSelected = day === selectedDate;

                                return (
                                    <div
                                        key={day}
                                        onClick={() => setSelectedDate(day)}
                                        style={{
                                            aspectRatio: '1/1',
                                            borderRadius: '16px',
                                            background: isSelected ? '#0F172A' : 'transparent',
                                            border: isToday ? '1px solid #0066FF' : '1px solid transparent',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            transition: 'all 0.2s',
                                            color: isSelected ? 'white' : '#334155',
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isSelected) e.currentTarget.style.background = '#F8FAFC';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isSelected) e.currentTarget.style.background = 'transparent';
                                        }}
                                    >
                                        <span style={{ fontSize: '16px', fontWeight: isSelected || isToday ? 700 : 500 }}>{day}</span>
                                        {/* Event Dots */}
                                        <div style={{ display: 'flex', gap: '3px', position: 'absolute', bottom: '12px' }}>
                                            {dayEvents.slice(0, 3).map((e, i) => (
                                                <div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: e.color }}></div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Timeline / Agenda View */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{ background: 'white', borderRadius: '24px', padding: '32px', height: '100%', border: '1px solid #F1F5F9', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                            <div className="flex justify-between align-center" style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B' }}>
                                    {selectedDate === 18 ? 'Today' : `May ${selectedDate}`}
                                </h3>
                                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8' }}><MoreHorizontal size={20} /></button>
                            </div>

                            {/* Events List */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {getEventsForDay(selectedDate).length === 0 ? (
                                    <div style={{ textAlign: 'center', padding: '60px 0', color: '#94A3B8' }}>
                                        <div style={{ background: '#F8FAFC', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                                            <CalendarIcon size={24} color="#CBD5E1" />
                                        </div>
                                        <div style={{ fontWeight: 600 }}>No events scheduled</div>
                                        <div style={{ fontSize: '13px' }}>Enjoy your free time!</div>
                                    </div>
                                ) : (
                                    getEventsForDay(selectedDate).map((e, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '16px', position: 'relative' }}>
                                            {/* Timeline Line */}
                                            {i !== getEventsForDay(selectedDate).length - 1 && (
                                                <div style={{ position: 'absolute', left: '26px', top: '50px', bottom: '-30px', width: '2px', background: '#F1F5F9' }}></div>
                                            )}

                                            {/* Time Column */}
                                            <div style={{ minWidth: '50px', paddingTop: '4px' }}>
                                                <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B' }}>{e.time.split(' ')[0]}</span>
                                                <div style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 600 }}>{e.time.split(' ')[1]}</div>
                                            </div>

                                            {/* Event Card */}
                                            <div
                                                style={{
                                                    flex: 1,
                                                    background: 'white',
                                                    border: '1px solid #E2E8F0',
                                                    borderRadius: '16px',
                                                    padding: '16px',
                                                    borderLeft: `4px solid ${e.color}`,
                                                    transition: 'transform 0.2s',
                                                    cursor: 'pointer'
                                                }}
                                                onMouseEnter={(el) => el.currentTarget.style.transform = 'translateY(-2px)'}
                                                onMouseLeave={(el) => el.currentTarget.style.transform = 'translateY(0)'}
                                            >
                                                <div className="flex justify-between align-start" style={{ marginBottom: '8px' }}>
                                                    <span style={{
                                                        fontSize: '10px',
                                                        fontWeight: 800,
                                                        color: e.color,
                                                        background: `${e.color}15`,
                                                        padding: '4px 8px',
                                                        borderRadius: '6px',
                                                        textTransform: 'uppercase'
                                                    }}>
                                                        {e.type}
                                                    </span>
                                                </div>
                                                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>{e.title}</h4>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '12px', fontWeight: 500 }}>
                                                    <MapPin size={14} /> {e.location}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Add Task Button */}
                            <button style={{
                                marginTop: '32px',
                                width: '100%',
                                padding: '14px',
                                border: '2px dashed #E2E8F0',
                                borderRadius: '12px',
                                background: 'transparent',
                                color: '#64748B',
                                fontSize: '14px',
                                fontWeight: 700,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                transition: 'all 0.2s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#0066FF';
                                    e.currentTarget.style.color = '#0066FF';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#E2E8F0';
                                    e.currentTarget.style.color = '#64748B';
                                }}>
                                <Plus size={18} /> Add Task or Event
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <AIBotWidget />
        </div>
    );
}

