"use client";
import AppLayout from "@/components/AppLayout";
import { Award, Share2, Download, ExternalLink, ShieldCheck } from "lucide-react";

export default function Certificates() {
    const certs = [
        { id: 1, title: 'Professional React Developer', issued: 'Jan 2026', id_num: 'CERT-9921-X', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80' },
        { id: 2, title: 'UI/UX Design Specialist', issued: 'Dec 2025', id_num: 'CERT-4452-B', img: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=400&q=80' },
        { id: 3, title: 'Cybersecurity Fundamentals', issued: 'Oct 2025', id_num: 'CERT-1120-Z', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80' },
    ];

    return (
        <AppLayout>
            <div className="flex align-center justify-between" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>My Certificates</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Verified credentials of your achieved expertise.</p>
                </div>
                <button className="btn btn-primary gap-8"><Award size={18} /> View Achievements</button>
            </div>

            <div className="grid-3">
                {certs.map((cert) => (
                    <div key={cert.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        <div style={{ position: 'relative' }}>
                            <img src={cert.img} alt="" style={{ width: '100%', height: '180px', objectFit: 'cover', opacity: 0.8 }} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <div style={{ width: '60px', height: '60px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}>
                                    <ShieldCheck size={32} color="var(--primary)" />
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '24px' }}>
                            <h3 style={{ fontSize: '18px', marginBottom: '8px', lineHeight: 1.3 }}>{cert.title}</h3>
                            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>Issued: {cert.issued} • ID: {cert.id_num}</p>

                            <div className="flex gap-12">
                                <button className="btn btn-primary" style={{ flex: 1, padding: '8px', fontSize: '13px' }}>
                                    <Download size={14} /> Download
                                </button>
                                <button className="btn btn-outline" style={{ padding: '8px', borderRadius: '10px' }}>
                                    <Share2 size={16} />
                                </button>
                                <button className="btn btn-outline" style={{ padding: '8px', borderRadius: '10px' }}>
                                    <ExternalLink size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card" style={{ marginTop: '40px', padding: '40px', border: '2px dashed var(--border)', background: 'transparent', textAlign: 'center' }}>
                <Award size={48} style={{ color: 'var(--border)', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '20px', color: 'var(--text-muted)' }}>More certificates are within your reach!</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Complete your in-progress courses to unlock more professional credentials.</p>
                <button className="btn btn-primary">Continue Learning</button>
            </div>
        </AppLayout>
    );
}
