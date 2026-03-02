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

            <main style={{ paddingTop: '180px', paddingBottom: '140px' }}>
                <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 40px' }}>

                    {/* Hero Section */}
                    <div className="animate-slide-up" style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 120px' }}>
                        <div style={{ display: 'inline-flex', padding: '10px 24px', background: '#FFF7ED', borderRadius: '40px', color: '#FF7D00', fontSize: '12px', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '32px', fontFamily: 'var(--font-heading)' }}>
                            Support Ecosystem
                        </div>
                        <h1 style={{ fontSize: 'clamp(48px, 6vw, 84px)', marginBottom: '40px', fontFamily: 'var(--font-heading)', fontWeight: 950, lineHeight: 1, letterSpacing: '-0.04em', color: '#0F172A' }}>
                            How can we <span style={{ color: '#FF7D00' }}>accelerate</span> your learning?
                        </h1>

                        <div style={{ position: 'relative', marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }}>
                            <Search size={28} style={{ position: 'absolute', left: '32px', top: '50%', transform: 'translateY(-50%)', color: '#FF7D00', opacity: 0.8 }} />
                            <input
                                type="text"
                                placeholder="Search our knowledge base for answers..."
                                style={{
                                    width: '100%',
                                    padding: '36px 40px 36px 84px',
                                    borderRadius: '40px',
                                    border: '1px solid rgba(255, 125, 0, 0.1)',
                                    background: 'white',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    boxShadow: 'var(--shadow-lg)',
                                    outline: 'none',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    fontFamily: 'var(--font-heading)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Resources Grid */}
                    <div className="grid grid-3" style={{ marginBottom: '140px', gap: '32px' }}>
                        {[
                            { icon: <Book size={40} color="#FF7D00" />, title: "Learning Guides", desc: "Detailed step-by-step documentation for every module.", bg: '#FFF7ED' },
                            { icon: <Play size={40} color="#005B52" />, title: "Visual Tutorials", desc: "High-definition video walkthroughs of the platform.", bg: '#E6F0EF' },
                            { icon: <LifeBuoy size={40} color="#0F172A" />, title: "Technical Support", desc: "For integration, performance and account issues.", bg: '#F1F5F9' }
                        ].map((item, i) => (
                            <div key={i} className="hover-scale" style={{
                                padding: '60px 48px',
                                borderRadius: '48px',
                                background: 'white',
                                border: '1px solid #E2E8F0',
                                boxShadow: 'var(--shadow-md)',
                                textAlign: 'center',
                                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}>
                                <div style={{
                                    width: '96px', height: '96px', background: item.bg,
                                    borderRadius: '28px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', margin: '0 auto 32px'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '26px', marginBottom: '16px', fontFamily: 'var(--font-heading)', fontWeight: 950, letterSpacing: '-0.02em' }}>{item.title}</h3>
                                <p style={{ color: '#64748B', fontSize: '16px', marginBottom: '40px', lineHeight: 1.7, fontWeight: 500 }}>{item.desc}</p>
                                <button style={{
                                    width: '100%', padding: '18px', borderRadius: '20px',
                                    fontWeight: 950, border: ' none', background: '#F1F5F9',
                                    color: '#0F172A', transition: 'all 0.3s', fontSize: '15px'
                                }}>
                                    Open Portal
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Area */}
                    <div style={{ maxWidth: '1000px', margin: '0 auto 140px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                            <h2 style={{ fontSize: '52px', fontFamily: 'var(--font-heading)', fontWeight: 950, marginBottom: '20px', letterSpacing: '-0.03em' }}>Common Inquiries</h2>
                            <p style={{ color: '#64748B', fontSize: '18px', fontWeight: 500 }}>Quick answers to the most frequent technical questions.</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {faqs.map((faq, i) => (
                                <div key={i} style={{
                                    padding: '36px 40px', borderRadius: '32px',
                                    background: 'white', border: '1px solid #E2E8F0',
                                    transition: 'all 0.3s',
                                    boxShadow: 'var(--shadow-sm)'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                                        <h3 style={{ fontSize: '22px', fontWeight: 950, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>{faq.q}</h3>
                                        <div style={{ width: '40px', height: '40px', background: '#F8FAFC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF7D00' }}>
                                            <ChevronRight size={24} />
                                        </div>
                                    </div>
                                    <p style={{ marginTop: '20px', color: '#64748B', lineHeight: 1.7, fontSize: '16px', fontWeight: 600 }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Banner */}
                    <div className="animate-slide-up" style={{
                        background: '#0F172A',
                        color: 'white',
                        padding: '100px 80px',
                        borderRadius: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '60px',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-xl)'
                    }}>
                        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '400px', height: '400px', background: 'rgba(255, 125, 0, 0.1)', borderRadius: '50%', filter: 'blur(100px)' }}></div>

                        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                            <h2 style={{ fontSize: '56px', fontWeight: 950, marginBottom: '24px', fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em', color: 'white', lineHeight: 1 }}>
                                Can't find a <span style={{ color: '#FF7D00' }}>solution</span>?
                            </h2>
                            <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', lineHeight: 1.7, fontWeight: 500 }}>
                                Speak with our global support squad in real-time or schedule a call with an expert learner path designer.
                            </p>
                        </div>

                        <div className="flex gap-24" style={{ position: 'relative', zIndex: 1 }}>
                            <button
                                onClick={() => showSuccess('Support Squad', 'Initiating live chat session...')}
                                style={{
                                    padding: '24px 48px', background: '#FF7D00', color: 'white',
                                    border: 'none', borderRadius: '24px', fontWeight: 950, fontSize: '16px',
                                    fontFamily: 'var(--font-heading)', letterSpacing: '1px',
                                    boxShadow: '0 20px 40px rgba(255,125,0,0.3)'
                                }}
                            >
                                Start Live Chat
                            </button>
                            <Link href="/auth" style={{
                                padding: '24px 48px', background: 'white', color: '#0F172A',
                                borderRadius: '24px', fontWeight: 950, fontSize: '16px',
                                display: 'flex', alignItems: 'center', gap: '12px'
                            }}>
                                Support Ticket <ArrowRight size={20} />
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
