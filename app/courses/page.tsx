"use client";
import AppLayout from "@/components/AppLayout";
import { Search, Filter, Star, Clock, Users, Play } from "lucide-react";

export default function Courses() {
    const courses = [
        { id: 1, title: 'Full-Stack Web Development', category: 'Development', rating: 4.8, students: '12k', lessons: 48, duration: '24h', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80', price: '$89' },
        { id: 2, title: 'Machine Learning Fundamentals', category: 'Data Science', rating: 4.9, students: '8k', lessons: 32, duration: '18h', img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=400&q=80', price: '$99' },
        { id: 3, title: 'Digital Marketing Mastery', category: 'Marketing', rating: 4.7, students: '15k', lessons: 56, duration: '30h', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80', price: '$79' },
        { id: 4, title: 'iOS App Development with Swift', category: 'Mobile', rating: 4.6, students: '5k', lessons: 42, duration: '20h', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80', price: '$95' },
        { id: 5, title: 'Cybersecurity Essentials', category: 'IT & Software', rating: 4.9, students: '10k', lessons: 38, duration: '15h', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80', price: '$109' },
        { id: 6, title: 'Business Strategy & Leadership', category: 'Business', rating: 4.8, students: '20k', lessons: 24, duration: '12h', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80', price: '$129' },
    ];

    const categories = ['All', 'Development', 'Design', 'Marketing', 'Business', 'Data Science', 'Mobile'];

    return (
        <AppLayout>
            <div className="flex align-center justify-between" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Course Catalog</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Explore over 500+ premium courses to boost your career.</p>
                </div>
                <div className="flex gap-12">
                    <button className="btn btn-outline gap-8"><Filter size={18} /> Filters</button>
                    <button className="btn btn-primary">My Enrollments</button>
                </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-12" style={{ marginBottom: '40px', overflowX: 'auto', paddingBottom: '8px' }}>
                {categories.map((cat, i) => (
                    <button key={i} className={`badge-pill ${i === 0 ? 'badge-blue' : ''}`} style={{
                        border: i === 0 ? 'none' : '1px solid var(--border)',
                        background: i === 0 ? 'var(--accent-blue)' : 'white',
                        color: i === 0 ? 'var(--primary)' : 'var(--text-muted)',
                        padding: '10px 20px',
                        cursor: 'pointer'
                    }}>
                        {cat}
                    </button>
                ))}
            </div>

            {/* Courses Grid */}
            <div className="grid-3">
                {courses.map((course) => (
                    <div key={course.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        <div style={{ position: 'relative' }}>
                            <img src={course.img} alt={course.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                                <span className="badge-pill badge-blue" style={{ background: 'rgba(255,255,255,0.9)', color: 'var(--primary)' }}>{course.category}</span>
                            </div>
                        </div>
                        <div style={{ padding: '24px' }}>
                            <div className="flex align-center justify-between" style={{ marginBottom: '12px' }}>
                                <div className="flex align-center gap-4" style={{ color: '#F59E0B' }}>
                                    <Star size={16} fill="#F59E0B" />
                                    <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--secondary)' }}>{course.rating}</span>
                                </div>
                                <div className="flex align-center gap-4" style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                                    <Users size={16} />
                                    {course.students} students
                                </div>
                            </div>
                            <h3 style={{ fontSize: '18px', marginBottom: '16px', lineHeight: 1.4 }}>{course.title}</h3>
                            <div className="flex align-center gap-16" style={{ marginBottom: '24px', color: 'var(--text-muted)', fontSize: '13px' }}>
                                <div className="flex align-center gap-6"><Play size={14} /> {course.lessons} Lessons</div>
                                <div className="flex align-center gap-6"><Clock size={14} /> {course.duration}</div>
                            </div>
                            <div className="flex align-center justify-between" style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                                <span style={{ fontSize: '20px', fontWeight: 800 }}>{course.price}</span>
                                <button className="btn btn-primary" style={{ padding: '8px 16px', borderRadius: '8px' }}>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
