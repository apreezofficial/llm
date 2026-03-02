"use client";
import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, ChevronRight, Settings, Check, Info } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [prefs, setPrefs] = useState({
        necessary: true,
        analytics: true,
        marketing: false,
        personalization: true
    });

    useEffect(() => {
        const consent = localStorage.getItem('lmszone-cookie-consent');
        let timer: any;

        if (!consent) {
            timer = setTimeout(() => setIsVisible(true), 1200);
        }

        const handleManualOpen = () => {
            setIsVisible(true);
            setShowSettings(true);
            if (timer) clearTimeout(timer);
        };

        window.addEventListener('lmszone-open-cookie-settings', handleManualOpen);
        return () => {
            if (timer) clearTimeout(timer);
            window.removeEventListener('lmszone-open-cookie-settings', handleManualOpen);
        };
    }, []);

    const save = (value: string) => {
        localStorage.setItem('lmszone-cookie-consent', value);
        setIsVisible(false);
        setShowSettings(false);
    };

    const handleAcceptAll = () => {
        setPrefs({ necessary: true, analytics: true, marketing: true, personalization: true });
        save('accepted-all');
    };

    const handleDeclineAll = () => {
        setPrefs({ necessary: true, analytics: false, marketing: false, personalization: false });
        save('declined');
    };

    const handleSavePrefs = () => {
        save(JSON.stringify(prefs));
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Backdrop Blur Overlay */}
            {(showSettings || isVisible) && (
                <div
                    onClick={() => { if (showSettings) setShowSettings(false); }}
                    style={{
                        position: 'fixed', inset: 0,
                        background: showSettings ? 'rgba(15, 23, 42, 0.4)' : 'transparent',
                        backdropFilter: showSettings ? 'blur(12px)' : 'none',
                        zIndex: 9999,
                        transition: 'all 0.4s ease',
                        pointerEvents: showSettings ? 'auto' : 'none'
                    }}
                />
            )}

            <div style={{
                position: 'fixed',
                bottom: '32px',
                right: showSettings ? '50%' : '32px',
                transform: showSettings ? 'translateX(50%)' : 'none',
                width: 'calc(100% - 64px)',
                maxWidth: showSettings ? '720px' : '420px',
                zIndex: 10000,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                opacity: 1
            }}>
                <div className="glass-card" style={{
                    background: 'rgba(255, 255, 255, 0.98)',
                    borderRadius: '28px',
                    boxShadow: '0 40px 100px -20px rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,255,255,1)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }}>

                    {!showSettings ? (
                        /* Minimalist Corner Banner */
                        <div style={{ padding: '32px' }}>
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '28px' }}>
                                <div style={{
                                    width: '56px', height: '56px', borderRadius: '18px',
                                    background: 'linear-gradient(135deg, #FF7D00 0%, #FFB444 100%)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white', flexShrink: 0, boxShadow: '0 8px 24px rgba(255,125,0,0.25)'
                                }}>
                                    <ShieldCheck size={28} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', marginBottom: '6px', fontFamily: 'var(--font-orbitron)', letterSpacing: '-0.5px' }}>Privacy Control</h4>
                                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.6, fontWeight: 500 }}>
                                        We use cookies to make your experience on <span style={{ color: '#FF7D00', fontWeight: 700 }}>LMSZONE</span> smoother and more personalized.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '12px' }}>
                                <button
                                    onClick={handleAcceptAll}
                                    style={{
                                        flex: 2, background: '#0F172A', color: 'white', padding: '14px',
                                        borderRadius: '16px', fontWeight: 800, fontSize: '14px',
                                        transition: 'all 0.3s', boxShadow: '0 4px 12px rgba(15,23,42,0.1)'
                                    }}
                                    className="hover-scale"
                                >
                                    Accept All
                                </button>
                                <button
                                    onClick={() => setShowSettings(true)}
                                    style={{
                                        width: '52px', height: '52px', background: '#F1F5F9', color: '#475569',
                                        borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'all 0.2s'
                                    }}
                                    className="hover-scale"
                                    title="Customize Settings"
                                >
                                    <Settings size={20} />
                                </button>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    style={{
                                        width: '52px', height: '52px', background: '#F1F5F9', color: '#475569',
                                        borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}
                                    className="hover-scale"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Expanded Deluxe Settings Panel */
                        <div style={{ display: 'flex', height: '540px' }}>
                            {/* Sidebar */}
                            <div style={{ width: '240px', background: '#F8FAFC', padding: '40px 24px', borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ marginBottom: '32px' }}>
                                    <h4 style={{ fontSize: '12px', color: '#FF7D00', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px', fontFamily: 'var(--font-orbitron)' }}>Preferences</h4>
                                    <p style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600 }}>Configure your trackable data points.</p>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {['Overview', 'Consent', 'Inquiry', 'Data Rights'].map((tab, i) => (
                                        <div key={tab} style={{
                                            padding: '12px 16px', borderRadius: '12px', fontSize: '13px', fontWeight: 700,
                                            color: i === 1 ? '#0F172A' : '#64748B',
                                            background: i === 1 ? 'white' : 'transparent',
                                            boxShadow: i === 1 ? '0 4px 12px rgba(0,0,0,0.05)' : 'none',
                                            cursor: 'pointer'
                                        }}>
                                            {tab}
                                        </div>
                                    ))}
                                </div>
                                <div style={{ marginTop: 'auto', background: '#FFF7ED', padding: '16px', borderRadius: '16px', border: '1px solid #FFEDD5' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C2410C', fontWeight: 800, fontSize: '11px', marginBottom: '4px' }}>
                                        <Info size={14} /> SECURITY FIRST
                                    </div>
                                    <p style={{ fontSize: '10px', color: '#9A3412', lineHeight: 1.5, fontWeight: 600 }}>Your data is encrypted using AES-256 standards.</p>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div style={{ flex: 1, padding: '40px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                <div style={{ marginBottom: '32px' }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-orbitron)', letterSpacing: '-0.5px', marginBottom: '8px' }}>Cookie Preferences</h3>
                                    <p style={{ fontSize: '14px', color: '#64748B', fontWeight: 500 }}>Select the level of data tracking you are comfortable with.</p>
                                </div>

                                <div style={{ flex: 1, overflowY: 'auto', paddingRight: '8px', marginBottom: '32px' }}>
                                    {[
                                        { key: 'necessary', label: 'Critical Operations', desc: 'Secure login, fraud prevention, and core checkout systems.', locked: true },
                                        { key: 'analytics', label: 'Performance Analytics', desc: 'Anonymized usage stats to help us improve the interface.', locked: false },
                                        { key: 'marketing', label: 'Smart Marketing', desc: 'Personalized course recommendations and special offers.', locked: false },
                                        { key: 'personalization', label: 'User Experience', desc: 'Remembering your language and dark mode preferences.', locked: false }
                                    ].map((item) => (
                                        <div key={item.key} style={{
                                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                            padding: '20px', borderRadius: '20px', background: '#F8FAFC',
                                            marginBottom: '12px', border: '1px solid #E2E8F0', transition: 'all 0.2s'
                                        }}>
                                            <div style={{ flex: 1, paddingRight: '20px' }}>
                                                <div style={{ fontWeight: 800, fontSize: '14px', color: '#0F172A', marginBottom: '4px' }}>{item.label}</div>
                                                <div style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.5, fontWeight: 500 }}>{item.desc}</div>
                                            </div>

                                            <div
                                                onClick={() => {
                                                    if (!item.locked) {
                                                        setPrefs(p => ({ ...p, [item.key]: !p[item.key as keyof typeof p] }));
                                                    }
                                                }}
                                                style={{
                                                    width: '52px', height: '28px', borderRadius: '14px', flexShrink: 0,
                                                    background: prefs[item.key as keyof typeof prefs] ? '#FF7D00' : '#CBD5E1',
                                                    position: 'relative',
                                                    cursor: item.locked ? 'not-allowed' : 'pointer',
                                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    opacity: item.locked ? 0.6 : 1
                                                }}
                                            >
                                                <div style={{
                                                    position: 'absolute', top: '4px',
                                                    left: prefs[item.key as keyof typeof prefs] ? '28px' : '4px',
                                                    width: '20px', height: '20px', borderRadius: '50%',
                                                    background: 'white', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF7D00'
                                                }}>
                                                    {prefs[item.key as keyof typeof prefs] && <Check size={12} strokeWidth={4} />}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <button
                                        onClick={handleSavePrefs}
                                        style={{
                                            flex: 1, background: '#FF7D00', color: 'white', padding: '16px',
                                            borderRadius: '16px', fontWeight: 900, fontSize: '15px',
                                            boxShadow: '0 8px 24px rgba(255,125,0,0.25)', transition: 'all 0.3s'
                                        }}
                                        className="hover-scale"
                                    >
                                        Apply My Choices
                                    </button>
                                    <button
                                        onClick={handleAcceptAll}
                                        style={{
                                            padding: '16px 28px', background: '#0F172A', color: 'white',
                                            borderRadius: '16px', fontWeight: 800, fontSize: '14px'
                                        }}
                                        className="hover-scale"
                                    >
                                        Trust Everything
                                    </button>
                                </div>

                                {/* Close button for settings */}
                                <button
                                    onClick={() => setShowSettings(false)}
                                    style={{ position: 'absolute', top: '32px', right: '32px', color: '#94A3B8' }}
                                    className="hover-scale"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .glass-card {
                    @supports (backdrop-filter: blur(20px)) {
                        background: rgba(255, 255, 255, 0.9);
                        backdrop-filter: blur(20px);
                    }
                }
            `}</style>
        </>
    );
}
