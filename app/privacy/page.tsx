"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, CheckCircle, Database, Server } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="privacy-page-wrapper" style={{ minHeight: '100vh', background: '#F8FAFC' }}>
            <Navbar />

            <main style={{ paddingTop: '160px', paddingBottom: '120px' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px' }}>

                    {/* Header Section */}
                    <div className="animate-slide-up" style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <div style={{ display: 'inline-flex', padding: '8px 20px', background: '#FFF7ED', borderRadius: '30px', color: '#FF7D00', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>
                            Digital Security
                        </div>
                        <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', marginBottom: '24px', fontFamily: 'var(--font-heading)', fontWeight: 950, lineHeight: 1.1, letterSpacing: '-2px', color: '#0F172A' }}>
                            Privacy <span style={{ color: '#FF7D00' }}>Protocol</span>
                        </h1>
                        <p style={{ color: '#64748B', fontSize: '18px', fontWeight: 500 }}>
                            Last updated: March 02, 2026. How we protect your data.
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
                                <div style={{ background: '#FFF7ED', color: '#FF7D00', padding: '10px', borderRadius: '12px' }}><Eye size={24} /></div>
                                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>1. What we collect</h2>
                            </div>
                            <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
                        </div>

                        <div style={{ marginBottom: '48px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ background: '#F1F5F9', color: '#0F172A', padding: '10px', borderRadius: '12px' }}><Lock size={24} /></div>
                                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>2. How we use your data</h2>
                            </div>
                            <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including: to provide and facilitate delivery of services to the user, to respond to user inquiries/offer support, and to send administrative information.</p>
                        </div>

                        <div style={{ marginBottom: '48px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ background: '#E6F0EF', color: '#005B52', padding: '10px', borderRadius: '12px' }}><Server size={24} /></div>
                                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>3. Data Storage</h2>
                            </div>
                            <p>We take the security of your data seriously. We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. All data is encrypted and stored in secure facilities in accordance with ISO 27001 standards.</p>
                        </div>

                        <div style={{ marginBottom: '48px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ background: '#FFF1F2', color: '#E11D48', padding: '10px', borderRadius: '12px' }}><Database size={24} /></div>
                                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>4. Cookies and Tracking</h2>
                            </div>
                            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
                        </div>

                    </div>

                    <div style={{ marginTop: '60px', textAlign: 'center' }}>
                        <p style={{ color: '#94A3B8', fontSize: '14px', fontWeight: 600 }}>
                            Want to manage your cookies? <span style={{ color: '#FF7D00', fontWeight: 800, cursor: 'pointer' }} onClick={() => window.dispatchEvent(new CustomEvent('lmszone-open-cookie-settings'))}>Adjust Preferences</span>
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
