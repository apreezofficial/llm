"use client";
import Link from 'next/link';
import {
    Layout,
    Award,
    Download,
    Share2,
    Calendar as CalendarIcon,
    CheckCircle2,
    ShieldCheck,
    Bot
} from 'lucide-react';
import AIBotWidget from '@/components/AIBotWidget';

export default function CertificatesPage() {
    const certificates = [
        {
            title: "Advanced Biology: Cellular Respiration",
            date: "May 15, 2024",
            grade: "98%",
            id: "CERT-2024-8842",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&auto=format&fit=crop"
        },
        {
            title: "intro to Python Programming",
            date: "April 22, 2024",
            grade: "100%",
            id: "CERT-2024-3321",
            image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?q=80&w=400&auto=format&fit=crop"
        },
        {
            title: "World History: The Renaissance",
            date: "March 10, 2024",
            grade: "95%",
            id: "CERT-2024-1190",
            image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=400&auto=format&fit=crop"
        }
    ];

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
            {/* Minimal Navbar */}
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
                        <Link href="/schedule" style={{ fontWeight: 600, color: '#64748B', fontSize: '14px' }}>Schedule</Link>
                    </div>
                </div>
            </nav>

            <main className="container section">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '36px', fontWeight: 800, color: '#1E293B', marginBottom: '16px', letterSpacing: '-1px' }}>Your Certificates</h1>
                    <p style={{ color: '#64748B', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
                        Verify, download, and share your hard-earned credentials.
                    </p>
                </div>

                <div className="grid grid-3" style={{ gap: '32px' }}>
                    {certificates.map((cert, idx) => (
                        <div key={idx} className="card" style={{ padding: 0, overflow: 'hidden', transition: 'transform 0.2s', position: 'relative' }}>
                            <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                                <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}></div>
                                <div style={{ position: 'absolute', bottom: '16px', left: '20px', color: 'white' }}>
                                    <div style={{ fontSize: '12px', opacity: 0.9, fontWeight: 600 }}>Issued on {cert.date}</div>
                                </div>
                            </div>

                            <div style={{ padding: '24px' }}>
                                <div className="flex align-center gap-8" style={{ marginBottom: '12px' }}>
                                    <Award size={20} color="#EAB308" />
                                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Verified Credential</span>
                                </div>
                                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1E293B', marginBottom: '8px', lineHeight: 1.4 }}>{cert.title}</h3>
                                <div style={{ fontSize: '14px', color: '#64748B', marginBottom: '24px' }}>Grade Achieved: <span style={{ color: '#22C55E', fontWeight: 700 }}>{cert.grade}</span></div>

                                <div className="flex gap-12">
                                    <button style={{ flex: 1, padding: '12px', background: '#F1F5F9', color: '#1E293B', borderRadius: '10px', fontSize: '13px', fontWeight: 700, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                        <Download size={16} /> PDF
                                    </button>
                                    <button style={{ flex: 1, padding: '12px', background: '#0066FF', color: 'white', borderRadius: '10px', fontSize: '13px', fontWeight: 700, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                        <Share2 size={16} /> Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <AIBotWidget />
        </div>
    );
}
