"use client";
import AppLayout from "@/components/AppLayout";
import { Search, HelpCircle, MessageSquare, Book, Play, LifeBuoy, ChevronRight } from "lucide-react";

export default function HelpCenter() {
    const faqs = [
        { q: 'How do I download certificates?', a: 'Go to the Certificates page and click the download button next to your achievement.' },
        { q: 'Can I change my subscription plan?', a: 'Yes, you can upgrade or downgrade anytime from the Billing settings.' },
        { q: 'What happens if I miss a live class?', a: 'All live classes are recorded and available in the "Past Lessons" section of the course player.' },
        { q: 'How do I contact my instructor?', a: 'You can use the Messages module to send a direct message to any of your course instructors.' },
    ];

    return (
        <AppLayout>
            <div className="animate-slide-up" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
                <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '32px', fontFamily: 'var(--font-orbitron)', fontWeight: 900, lineHeight: 1.1 }}>How can we <span style={{ color: 'var(--primary)' }}>help you?</span></h1>
                <div style={{ position: 'relative' }}>
                    <Search size={22} style={{ position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)', opacity: 0.6 }} />
                    <input
                        type="text"
                        placeholder="Search for articles, guides, and tutorials..."
                        style={{ width: '100%', padding: '26px 32px 26px 64px', borderRadius: '24px', border: '1px solid var(--border)', background: 'white', fontSize: '18px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)', outline: 'none', transition: 'all 0.3s' }}
                    />
                </div>
            </div>

            <div className="grid grid-3" style={{ marginBottom: '80px', gap: '32px' }}>
                {[
                    { icon: <Book size={32} color="var(--primary)" />, title: "Knowledge Base", desc: "Browse detailed articles and documentation for all features.", bg: 'var(--accent-blue)' },
                    { icon: <Play size={32} color="#16A34A" />, title: "Video Tutorials", desc: "Watch step-by-step videos on how to get the most out of EduTrackPro.", bg: '#DCFCE7' },
                    { icon: <LifeBuoy size={32} color="#EF4444" />, title: "Community Support", desc: "Get help from our vibrant community of learners and experts.", bg: '#FEE2E2' }
                ].map((item, i) => (
                    <div key={i} className={`card text-center animate-scale-in delay-${(i % 3) + 1}`} style={{ padding: '48px 40px', borderRadius: '32px', display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', transition: 'all 0.3s ease', cursor: 'pointer', background: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                        <div style={{ width: '80px', height: '80px', background: item.bg, borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
                            {item.icon}
                        </div>
                        <h3 style={{ fontSize: '20px', marginBottom: '16px', fontFamily: 'var(--font-orbitron)', fontWeight: 800 }}>{item.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '32px', lineHeight: 1.6, flex: 1 }}>{item.desc}</p>
                        <button className="btn btn-outline" style={{ width: '100%', borderRadius: '30px', fontWeight: 800 }}>Browse Now</button>
                    </div>
                ))}
            </div>

            <div className="animate-slide-up delay-4" style={{ maxWidth: '900px', margin: '0 auto 100px' }}>
                <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center', fontFamily: 'var(--font-orbitron)', fontWeight: 800 }}>Frequently Asked Questions</h2>
                <div className="flex column gap-16">
                    {faqs.map((faq, i) => (
                        <div key={i} className="card" style={{ padding: '24px 32px', borderRadius: '20px', border: '1px solid var(--border)', transition: 'all 0.3s ease' }}>
                            <div className="flex align-center justify-between" style={{ cursor: 'pointer' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--secondary)' }}>{faq.q}</h3>
                                <div style={{ color: 'var(--primary)', background: '#F1F5F9', borderRadius: '50%', padding: '4px' }}>
                                    <ChevronRight size={20} />
                                </div>
                            </div>
                            <p className="animate-fade" style={{ marginTop: '16px', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '15px' }}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card animate-bounce-in delay-6" style={{ marginTop: '80px', background: 'var(--secondary)', color: 'white', padding: '60px', display: 'flex', alignItems: 'center', justifyContent: 'between', borderRadius: '48px', border: '1px solid rgba(255,125,0,0.2)', boxShadow: '0 25px 60px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                    <h2 style={{ color: 'white', fontSize: '36px', marginBottom: '16px', fontFamily: 'var(--font-orbitron)', fontWeight: 800 }}>Still need help?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.6 }}>Our support team is available 24/7 to assist you with any questions.</p>
                </div>
                <div className="flex gap-20">
                    <button className="btn btn-primary" style={{ padding: '16px 36px', borderRadius: '30px', fontWeight: 800 }}>Contact Support</button>
                    <button className="btn btn-outline" style={{ padding: '16px 36px', borderColor: 'rgba(255,255,255,0.3)', color: 'white', borderRadius: '30px', fontWeight: 800 }}>Live Chat</button>
                </div>
            </div>
        </AppLayout>
    );
}
