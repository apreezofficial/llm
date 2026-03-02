"use client";
import AppLayout from "@/components/AppLayout";
import { Mail, Globe, Linkedin, Star } from "lucide-react";

export default function Instructors() {
    const instructors = [
        { name: 'Dr. Sarah Smith', role: 'Chief of AI Research', courses: 14, students: '45k', rating: 4.9, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
        { name: 'James Wilson', role: 'Full Stack Architect', courses: 8, students: '32k', rating: 4.8, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
        { name: 'Emily Chen', role: 'UX Design Lead', courses: 12, students: '28k', rating: 4.9, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80' },
        { name: 'Michael Brown', role: 'Data Science PhD', courses: 6, students: '18k', rating: 4.7, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
        { name: 'Lisa Rodriguez', role: 'Product Manager', courses: 10, students: '22k', rating: 4.8, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80' },
        { name: 'David Lee', role: 'Cybersecurity Expert', courses: 5, students: '12k', rating: 4.9, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
    ];

    return (
        <AppLayout>
            <div style={{ marginBottom: '40px' }}>
                <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Expert Instructors</h1>
                <p style={{ color: 'var(--text-muted)' }}>Learn from world-class professionals and industry leaders.</p>
            </div>

            <div className="grid-3">
                {instructors.map((inst, i) => (
                    <div key={i} className="card text-center" style={{ padding: '40px 32px' }}>
                        <img src={inst.img} alt="" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
                        <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{inst.name}</h3>
                        <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '14px', marginBottom: '20px' }}>{inst.role}</p>

                        <div className="flex align-center justify-center gap-24" style={{ marginBottom: '24px' }}>
                            <div>
                                <p style={{ fontWeight: 700, fontSize: '18px' }}>{inst.courses}</p>
                                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Courses</p>
                            </div>
                            <div style={{ width: '1px', height: '24px', background: 'var(--border)' }}></div>
                            <div>
                                <p style={{ fontWeight: 700, fontSize: '18px' }}>{inst.students}</p>
                                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Students</p>
                            </div>
                            <div style={{ width: '1px', height: '24px', background: 'var(--border)' }}></div>
                            <div className="flex column align-center">
                                <span className="flex align-center gap-4" style={{ fontWeight: 700, fontSize: '18px' }}>{inst.rating} <Star size={14} fill="#F59E0B" style={{ color: '#F59E0B' }} /></span>
                                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Rating</p>
                            </div>
                        </div>

                        <div className="flex align-center justify-center gap-12">
                            <button className="btn btn-outline" style={{ padding: '8px', borderRadius: '10px' }}><Globe size={18} /></button>
                            <button className="btn btn-outline" style={{ padding: '8px', borderRadius: '10px' }}><Linkedin size={18} /></button>
                            <button className="btn btn-outline" style={{ padding: '8px', borderRadius: '10px' }}><Mail size={18} /></button>
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '24px' }}>View Profile</button>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
