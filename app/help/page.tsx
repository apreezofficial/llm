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
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
                <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>How can we help you?</h1>
                <div style={{ position: 'relative' }}>
                    <Search size={22} style={{ position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                        type="text"
                        placeholder="Search for articles, guides, and tutorials..."
                        style={{ width: '100%', padding: '24px 32px 24px 64px', borderRadius: '24px', border: '1px solid var(--border)', background: 'white', fontSize: '18px', boxShadow: 'var(--shadow-xl)', outline: 'none' }}
                    />
                </div>
            </div>

            <div className="grid-3" style={{ marginBottom: '60px' }}>
                <div className="card text-center" style={{ padding: '40px' }}>
                    <div style={{ width: '64px', height: '64px', background: 'var(--accent-blue)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                        <Book size={32} color="var(--primary)" />
                    </div>
                    <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Knowledge Base</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>Browse detailed articles and documentation for all features.</p>
                    <button className="btn btn-outline" style={{ width: '100%' }}>Browse Articles</button>
                </div>

                <div className="card text-center" style={{ padding: '40px' }}>
                    <div style={{ width: '64px', height: '64px', background: '#DCFCE7', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                        <Play size={32} color="#16A34A" />
                    </div>
                    <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Video Tutorials</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>Watch step-by-step videos on how to get the most out of EduTrackPro.</p>
                    <button className="btn btn-outline" style={{ width: '100%' }}>Watch Now</button>
                </div>

                <div className="card text-center" style={{ padding: '40px' }}>
                    <div style={{ width: '64px', height: '64px', background: '#FEE2E2', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                        <LifeBuoy size={32} color="#EF4444" />
                    </div>
                    <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Community Support</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>Get help from our vibrant community of learners and experts.</p>
                    <button className="btn btn-outline" style={{ width: '100%' }}>Go to Forum</button>
                </div>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '28px', marginBottom: '32px', textAlign: 'center' }}>Frequently Asked Questions</h2>
                <div className="flex column gap-16">
                    {faqs.map((faq, i) => (
                        <div key={i} className="card" style={{ padding: '24px 32px' }}>
                            <div className="flex align-center justify-between" style={{ cursor: 'pointer' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>{faq.q}</h3>
                                <ChevronRight size={20} color="var(--text-muted)" />
                            </div>
                            <p style={{ marginTop: '16px', color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '15px' }}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card" style={{ marginTop: '80px', background: 'var(--secondary)', color: 'white', padding: '60px', display: 'flex', alignItems: 'center', justifyContent: 'between' }}>
                <div style={{ flex: 1 }}>
                    <h2 style={{ color: 'white', fontSize: '32px', marginBottom: '12px' }}>Still need help?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px' }}>Our support team is available 24/7 to assist you with any questions.</p>
                </div>
                <div className="flex gap-20">
                    <button className="btn btn-primary" style={{ padding: '16px 32px' }}>Contact Support</button>
                    <button className="btn btn-outline" style={{ padding: '16px 32px', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>Live Chat</button>
                </div>
            </div>
        </AppLayout>
    );
}
