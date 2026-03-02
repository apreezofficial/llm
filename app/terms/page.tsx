"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, FileText, Scale, Eye, HelpCircle } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="terms-page-wrapper" style={{ minHeight: '100vh', background: '#F8FAFC' }}>
            <Navbar />

            <main style={{ paddingTop: '160px', paddingBottom: '120px' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px' }}>

                    {/* Header Section */}
                    <div className="animate-slide-up" style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <div style={{ display: 'inline-flex', padding: '8px 20px', background: '#FFF7ED', borderRadius: '30px', color: '#FF7D00', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>
                            Legal Protocol
                        </div>
                        <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', marginBottom: '24px', fontFamily: 'var(--font-heading)', fontWeight: 950, lineHeight: 1.1, letterSpacing: '-2px', color: '#0F172A' }}>
                            Terms of <span style={{ color: '#FF7D00' }}>Service</span>
                        </h1>
                        <p style={{ color: '#64748B', fontSize: '18px', fontWeight: 500 }}>
                            Last updated: March 02, 2026. Please read these terms carefully.
                        </p>
                    </div>

                    <div className="glass-card animate-fade delay-1" style={{
                        background: 'white',
                        padding: '60px',
                        borderRadius: '32px',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                        lineHeight: 1.8,
                        color: '#475569'
                    }}>

                        <div style={{ marginBottom: '48px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ background: '#FFF7ED', color: '#FF7D00', padding: '10px', borderRadius: '12px' }}><Scale size={24} /></div>
                                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>1. Agreement to Terms</h2>
                            </div>
                            <p>By accessing our ecosystem via LMSZONE, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you are expressly prohibited from using the Site and must discontinue use immediately.</p>
                        </div>

                        <div style={{ marginBottom: '48px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ background: '#E6F0EF', color: '#005B52', padding: '10px', borderRadius: '12px' }}><Shield size={24} /></div>
                                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>2. Intellectual Property Rights</h2>
                            </div>
                            <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.</p>
                        </div>

                        <div style={{ marginBottom: '48px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ background: '#F1F5F9', color: '#0F172A', padding: '10px', borderRadius: '12px' }}><Lock size={24} /></div>
                                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>3. User Representations</h2>
                            </div>
                            <p>By using the Site, you represent and warrant that all registration information you submit will be true, accurate, current, and complete; you will maintain the accuracy of such information and promptly update such registration information as necessary.</p>
                        </div>

                        <div style={{ marginBottom: '48px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ background: '#FFF1F2', color: '#E11D48', padding: '10px', borderRadius: '12px' }}><FileText size={24} /></div>
                                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>4. Prohibited Activities</h2>
                            </div>
                            <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                        </div>

                    </div>

                    <div style={{ marginTop: '60px', textAlign: 'center' }}>
                        <p style={{ color: '#94A3B8', fontSize: '14px', fontWeight: 600 }}>
                            Need clarification on our terms? <a href="/help" style={{ color: '#FF7D00', fontWeight: 800 }}>Visit Help Center</a>
                        </p>
                    </div>

                </div>
            </main>

            <Footer />

            <style jsx>{`
                p { margin-bottom: 24px; font-size: 16px; }
                @media (max-width: 768px) {
                    main { padding-top: 120px !important; }
                    .glass-card { padding: 40px 24px !important; }
                    h1 { font-size: 38px !important; }
                    h2 { font-size: 20px !important; }
                }
            `}</style>
        </div>
    );
}
