"use client";
import AppLayout from "@/components/AppLayout";
import { Book, FileText, Download, Bookmark, Search, Star } from "lucide-react";

export default function Library() {
    const resources = [
        { title: 'React Performance Guide', type: 'PDF', pages: 42, rating: 4.8, img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80' },
        { title: 'UI Color Theory', type: 'E-Book', pages: 128, rating: 4.9, img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80' },
        { title: 'Cybersecurity Checklist', type: 'Document', pages: 12, rating: 4.7, img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80' },
        { title: 'Database Design 101', type: 'PDF', pages: 85, rating: 4.6, img: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=400&q=80' },
    ];

    return (
        <AppLayout>
            <div className="flex align-center justify-between" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Resource Library</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Downloadable guides, e-books, and reference materials.</p>
                </div>
                <div style={{ position: 'relative', width: '300px' }}>
                    <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input type="text" placeholder="Search resources..." style={{ width: '100%', padding: '10px 16px 10px 48px', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none' }} />
                </div>
            </div>

            <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                {resources.map((res, i) => (
                    <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        <div style={{ position: 'relative' }}>
                            <img src={res.img} alt="" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                                <button style={{ width: '32px', height: '32px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow)' }}>
                                    <Bookmark size={16} />
                                </button>
                            </div>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <span className="badge-pill" style={{ background: 'var(--bg-soft)', fontSize: '10px', marginBottom: '12px' }}>{res.type}</span>
                            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>{res.title}</h3>
                            <div className="flex align-center justify-between" style={{ color: 'var(--text-muted)', fontSize: '12px', marginBottom: '20px' }}>
                                <span>{res.pages} Pages</span>
                                <span className="flex align-center gap-4"><Star size={12} fill="#F59E0B" style={{ color: '#F59E0B' }} /> {res.rating}</span>
                            </div>
                            <button className="btn btn-primary" style={{ width: '100%', padding: '8px', fontSize: '13px' }}>
                                <Download size={14} /> Download
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
