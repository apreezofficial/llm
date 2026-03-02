"use client";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { Bell, Search, User } from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFC' }}>
            <Sidebar />

            <main style={{
                flex: 1,
                marginLeft: '280px',
                padding: '40px 60px',
                position: 'relative'
            }}>
                {/* Fixed Top Glass Header */}
                <header className="flex align-center justify-between" style={{
                    marginBottom: '48px',
                    position: 'sticky',
                    top: '0',
                    zIndex: 10,
                    background: 'rgba(248, 250, 252, 0.8)',
                    backdropFilter: 'blur(8px)',
                    padding: '12px 0'
                }}>
                    <div className="animate-slide-up" style={{ position: 'relative', width: '450px' }}>
                        <Search size={18} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                        <input
                            type="text"
                            placeholder="Find courses, labs, or colleagues..."
                            style={{
                                width: '100%',
                                padding: '16px 20px 16px 56px',
                                borderRadius: '20px',
                                border: '1px solid #E2E8F0',
                                background: 'white',
                                fontSize: '15px',
                                fontWeight: 500,
                                outline: 'none',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                            }}
                        />
                    </div>

                    <div className="flex align-center gap-32 animate-slide-up delay-1">
                        <button className="hover-scale" style={{
                            position: 'relative',
                            color: '#64748B',
                            background: 'white',
                            width: '48px',
                            height: '48px',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #E2E8F0'
                        }}>
                            <Bell size={22} />
                            <span style={{
                                position: 'absolute',
                                top: '12px',
                                right: '12px',
                                width: '10px',
                                height: '10px',
                                background: '#FF7D00',
                                borderRadius: '50%',
                                border: '2px solid white'
                            }}></span>
                        </button>

                        <div className="flex align-center gap-16 hover-scale" style={{
                            padding: '8px 8px 8px 20px',
                            background: 'white',
                            borderRadius: '20px',
                            border: '1px solid #E2E8F0',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                        }}>
                            <div className="mobile-hide">
                                <p style={{ fontSize: '14px', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>Alex Rivers</p>
                                <p style={{ fontSize: '11px', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pro Learner</p>
                            </div>
                            <div style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '14px',
                                background: 'linear-gradient(135deg, #FF7D00 0%, #FFB444 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                boxShadow: '0 8px 16px rgba(255,125,0,0.2)'
                            }}>
                                <User size={22} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content Container */}
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    {children}
                </div>
            </main>

            <style jsx>{`
                @media (max-width: 1024px) {
                    main { marginLeft: 0 !important; padding: 32px 24px !important; }
                    header { width: 100% !important; margin-bottom: 32px !important; }
                    .mobile-hide { display: none; }
                }
            `}</style>
        </div>
    );
}

