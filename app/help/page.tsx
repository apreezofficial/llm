"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Book, Play, LifeBuoy, ChevronRight, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { showSuccess } from "@/utils/swal";

export default function HelpCenter() {
    const faqs = [
        { q: 'How do I access certificates?', a: 'Certificates can be found in your "Achievement Vault" within the dashboard once a course is 100% complete.' },
        { q: 'What is the "Pro Learner" plan?', a: 'The Pro plan includes exclusive access to live workshops, AI-driven study paths, and 24/7 technical mentorship.' },
        { q: 'Do courses have a lifetime access?', a: 'Yes, once you enroll in or purchase a course, you have permanent access to all existing materials and future updates.' },
        { q: 'How do I request a refund?', a: 'Refund requests must be submitted through our support portal within 14 days of enrollment, provided less than 20% of the content has been consumed.' },
    ];

    return (
        <div className="help-page-wrapper" style={{ minHeight: '100vh', background: '#F8FAFC' }}>
            <Navbar />

            <main style={{ paddingTop: '160px', paddingBottom: '120px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

                    {/* Hero Section */}
                    <div className="animate-slide-up" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 100px' }}>
                        <div style={{ display: 'inline-flex', padding: '8px 20px', background: '#FFF7ED', borderRadius: '30px', color: '#FF7D00', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>
                            Support Ecosystem
                        </div>
                        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', marginBottom: '32px', fontFamily: 'var(--font-heading)', fontWeight: 950, lineHeight: 1, letterSpacing: '-2px', color: '#0F172A' }}>
                            How can we <span style={{ color: '#FF7D00' }}>accelerate</span> your learning?
                        </h1>

                        <div style={{ position: 'relative', marginTop: '48px' }}>
                            <Search size={22} style={{ position: 'absolute', left: '26px', top: '50%', transform: 'translateY(-50%)', color: '#FF7D00', opacity: 0.8 }} />
                            <input
                                type="text"
                                placeholder="Search our knowledge base for answers..."
                                style={{
                                    width: '100%',
                                    padding: '28px 32px 28px 72px',
                                    borderRadius: '28px',
                                    border: '1px solid rgba(255, 125, 0, 0.1)',
                                    background: 'white',
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    boxShadow: '0 30px 60px -12px rgba(0,0,0,0.06)',
                                    outline: 'none',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                                }}
                                className="focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    {/* Resources Grid */}
                    <div className="grid grid-3" style={{ marginBottom: '120px', gap: '32px' }}>
                        {[
                            { icon: <Book size={32} color="#FF7D00" />, title: "Learning Guides", desc: "Detailed step-by-step documentation for every module.", bg: '#FFF7ED' },
                            { icon: <Play size={32} color="#005B52" />, title: "Visual Tutorials", desc: "High-definition video walkthroughs of the platform.", bg: '#E6F0EF' },
                            { icon: <LifeBuoy size={32} color="#0F172A" />, title: "Technical Support", desc: "For integration, performance and account issues.", bg: '#F1F5F9' }
                        ].map((item, i) => (
                            <div key={i} className="glass-card hover-scale" style={{
                                padding: '48px 40px',
                                borderRadius: '32px',
                                background: 'white',
                                border: '1px solid #E2E8F0',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                                textAlign: 'center',
                                transition: 'all 0.3s'
                            }}>
                                <div style={{
                                    width: '80px', height: '80px', background: item.bg,
                                    borderRadius: '24px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', margin: '0 auto 28px'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '20px', marginBottom: '16px', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>{item.title}</h3>
                                <p style={{ color: '#64748B', fontSize: '15px', marginBottom: '32px', lineHeight: 1.6 }}>{item.desc}</p>
                                <button style={{
                                    width: '100%', padding: '14px', borderRadius: '16px',
                                    fontWeight: 800, border: '1px solid #E2E8F0', background: 'transparent',
                                    color: '#0F172A', transition: 'all 0.3s'
                                }} onMouseEnter={(e) => e.currentTarget.style.background = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                                    Open Portal
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Area */}
                    <div style={{ maxWidth: '900px', margin: '0 auto 120px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-heading)', fontWeight: 900, marginBottom: '16px' }}>Common Inquiries</h2>
                            <p style={{ color: '#64748B', fontSize: '16px' }}>Quick answers to the most frequent technical questions.</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {faqs.map((faq, i) => (
                                <div key={i} style={{
                                    padding: '28px 32px', borderRadius: '24px',
                                    background: 'white', border: '1px solid #E2E8F0',
                                    transition: 'all 0.3s'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                                        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>{faq.q}</h3>
                                        <div style={{ width: '32px', height: '32px', background: '#F8FAFC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF7D00' }}>
                                            <ChevronRight size={18} />
                                        </div>
                                    </div>
                                    <p style={{ marginTop: '16px', color: '#64748B', lineHeight: 1.7, fontSize: '15px', fontWeight: 500 }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Banner */}
                    <div className="glass-card animate-slide-up" style={{
                        background: '#0F172A',
                        color: 'white',
                        padding: '80px 60px',
                        borderRadius: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '40px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative background circle */}
                        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'rgba(255, 125, 0, 0.1)', borderRadius: '50%', filter: 'blur(60px)' }}></div>

                        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                            <h2 style={{ fontSize: '42px', fontWeight: 900, marginBottom: '20px', fontFamily: 'var(--font-heading)', letterSpacing: '-1px', color: 'white' }}>
                                Can't find a <span style={{ color: '#FF7D00' }}>solution</span>?
                            </h2>
                            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', lineHeight: 1.6 }}>
                                Speak with our global support squad in real-time or schedule a call with an expert.
                            </p>
                        </div>

                        <div className="flex gap-20" style={{ position: 'relative', zIndex: 1 }}>
                            <button
                                onClick={() => showSuccess('Support Squad', 'Initiating live chat session with a technical mentor...')}
                                className="hover-scale"
                                style={{
                                    padding: '18px 40px', background: '#FF7D00', color: 'white',
                                    border: 'none', borderRadius: '20px', fontWeight: 900, fontSize: '15px',
                                    fontFamily: 'var(--font-heading)', letterSpacing: '1px',
                                    boxShadow: '0 20px 40px rgba(255,125,0,0.3)'
                                }}
                            >
                                Start Live Chat
                            </button>
                            <Link href="/auth" className="hover-scale" style={{
                                padding: '18px 40px', background: 'white', color: '#0F172A',
                                borderRadius: '20px', fontWeight: 900, fontSize: '15px',
                                display: 'flex', alignItems: 'center', gap: '10px'
                            }}>
                                Support Ticket <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <style jsx>{`
                @media (max-width: 768px) {
                    main { padding-top: 120px !important; }
                    .container { padding: 0 24px !important; }
                    .grid-3 { grid-template-columns: 1fr !important; }
                    h1 { font-size: 38px !important; }
                    .glass-card { padding: 40px 30px !important; }
                    h2 { font-size: 28px !important; }
                }
            `}</style>
        </div>
    );
}
