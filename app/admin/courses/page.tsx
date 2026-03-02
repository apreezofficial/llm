"use client";
import React from 'react';
import { BookOpen, Plus, Search, Star, Users, Clock } from 'lucide-react';

export default function AdminCourses() {
    const courses = [
        { title: 'Advanced React Architecture', category: 'Development', students: 1240, rating: 4.9, status: 'Published', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=100&q=80' },
        { title: 'UI/UX Design Masterclass', category: 'Design', students: 850, rating: 4.8, status: 'Published', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=100&q=80' },
        { title: 'Python for Data Science', category: 'Data Science', students: 2100, rating: 4.7, status: 'Draft', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=100&q=80' },
        { title: 'Marketing Essentials', category: 'Business', students: 560, rating: 4.5, status: 'Published', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=100&q=80' }
    ];

    return (
        <div>
            <div className="flex justify-between align-center" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 800 }}>Course Inventory</h1>
                    <p style={{ color: '#64748B' }}>Curate, review, and manage your educational content catalog.</p>
                </div>
                <button className="btn btn-primary"><Plus size={18} /> Create New Course</button>
            </div>

            <div className="grid grid-4" style={{ gap: '24px' }}>
                {courses.map((course, i) => (
                    <div key={i} className="card" style={{ padding: '0', overflow: 'hidden', background: 'white' }}>
                        <div style={{ position: 'relative', height: '140px' }}>
                            <img src={course.img} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', top: '12px', right: '12px', background: course.status === 'Published' ? '#DCFCE7' : '#F1F5F9', color: course.status === 'Published' ? '#16A34A' : '#64748B', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 800 }}>
                                {course.status}
                            </div>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '11px', fontWeight: 800, color: '#0066FF', textTransform: 'uppercase', marginBottom: '8px' }}>{course.category}</div>
                            <h3 style={{ fontSize: '16px', marginBottom: '16px', lineHeight: 1.4 }}>{course.title}</h3>
                            <div className="flex justify-between align-center" style={{ paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                                <div className="flex align-center gap-4" style={{ fontSize: '13px', color: '#64748B' }}>
                                    <Users size={14} /> {course.students}
                                </div>
                                <div className="flex align-center gap-4" style={{ fontSize: '13px', color: '#F59E0B', fontWeight: 700 }}>
                                    <Star size={14} fill="#F59E0B" /> {course.rating}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
