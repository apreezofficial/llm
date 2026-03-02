"use client";
import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, ChevronRight } from 'lucide-react';

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
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
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
        <div style={{
            position: 'fixed', bottom: '24px', left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 48px)',
            maxWidth: showSettings ? '680px' : '620px',
            zIndex: 10000,
            animation: 'slideUp 0.4s ease forwards'
        }}>
            <div style={{
                background: 'white',
                borderRadius: '24px',
                boxShadow: '0 24px 80px rgba(0,0,0,0.12)',
                border: '1px solid #E5E7EB',
                overflow: 'hidden'
            }}>
                {/* Close */}
                <button
                    onClick={() => setIsVisible(false)}
                    style={{
                        position: 'absolute', top: '16px', right: '16px',
                        color: '#9CA3AF', background: '#F3F4F6',
                        borderRadius: '50%', width: '32px', height: '32px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 1
                    }}
                    aria-label="Close"
                >
                    <X size={16} />
                </button>

                {/* Main Banner */}
                {!showSettings ? (
                    <div style={{ padding: '28px 32px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                            <div style={{
                                background: '#FFF7ED', width: '48px', height: '48px', borderRadius: '14px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#FF7D00', flexShrink: 0
                            }}>
                                <ShieldCheck size={24} />
                            </div>
                            <div style={{ paddingRight: '32px' }}>
                                <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '6px', color: '#0F172A' }}>We value your privacy</h4>
                                <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6 }}>
                                    We use cookies to personalize content, run analytics, and improve your experience. You control what we collect.
                                </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                            <button
                                onClick={handleAcceptAll}
                                style={{
                                    background: '#FF7D00', color: 'white', padding: '10px 24px',
                                    borderRadius: '30px', fontWeight: 800, fontSize: '13px',
                                    boxShadow: '0 4px 12px rgba(255,125,0,0.25)', whiteSpace: 'nowrap'
                                }}
                            >
                                Accept All
                            </button>
                            <button
                                onClick={handleDeclineAll}
                                style={{
                                    background: '#F3F4F6', color: '#374151', padding: '10px 20px',
                                    borderRadius: '30px', fontWeight: 700, fontSize: '13px', whiteSpace: 'nowrap'
                                }}
                            >
                                Decline
                            </button>
                            <button
                                onClick={() => setShowSettings(true)}
                                style={{
                                    color: '#005B52', fontWeight: 700, fontSize: '13px',
                                    display: 'flex', alignItems: 'center', gap: '4px',
                                    marginLeft: 'auto', whiteSpace: 'nowrap'
                                }}
                            >
                                Cookie Settings <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Settings Panel */
                    <div style={{ padding: '28px 32px' }}>
                        <button onClick={() => setShowSettings(false)} style={{ color: '#6B7280', fontSize: '13px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                            ← Back
                        </button>
                        <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', marginBottom: '24px', paddingRight: '32px' }}>Cookie Preferences</h4>

                        {[
                            { key: 'necessary', label: 'Strictly Necessary', desc: 'Required for the site to function. Cannot be disabled.', locked: true },
                            { key: 'analytics', label: 'Analytics & Performance', desc: 'Help us understand how visitors interact with our platform.', locked: false },
                            { key: 'marketing', label: 'Marketing & Advertising', desc: 'Used to deliver relevant ads and track campaign performance.', locked: false },
                            { key: 'personalization', label: 'Personalization', desc: 'Allows us to remember your preferences and tailor your experience.', locked: false }
                        ].map((item) => (
                            <div key={item.key} style={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                padding: '16px 0',
                                borderBottom: '1px solid #F3F4F6'
                            }}>
                                <div style={{ flex: 1, marginRight: '24px' }}>
                                    <div style={{ fontWeight: 700, fontSize: '14px', color: '#0F172A', marginBottom: '4px' }}>{item.label}</div>
                                    <div style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.5 }}>{item.desc}</div>
                                </div>
                                {/* Toggle */}
                                <div
                                    onClick={() => {
                                        if (!item.locked) {
                                            setPrefs(p => ({ ...p, [item.key]: !p[item.key as keyof typeof p] }));
                                        }
                                    }}
                                    style={{
                                        width: '44px', height: '24px', borderRadius: '12px', flexShrink: 0,
                                        background: prefs[item.key as keyof typeof prefs] ? '#FF7D00' : '#E5E7EB',
                                        position: 'relative',
                                        cursor: item.locked ? 'not-allowed' : 'pointer',
                                        transition: 'background 0.2s ease',
                                        opacity: item.locked ? 0.6 : 1
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute', top: '2px',
                                        left: prefs[item.key as keyof typeof prefs] ? '22px' : '2px',
                                        width: '20px', height: '20px', borderRadius: '50%',
                                        background: 'white',
                                        boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                                        transition: 'left 0.2s ease'
                                    }}></div>
                                </div>
                            </div>
                        ))}

                        <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
                            <button
                                onClick={handleSavePrefs}
                                style={{
                                    background: '#FF7D00', color: 'white', padding: '12px 28px',
                                    borderRadius: '30px', fontWeight: 800, fontSize: '14px', flex: 1
                                }}
                            >
                                Save My Preferences
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                style={{
                                    background: '#F3F4F6', color: '#374151', padding: '12px 24px',
                                    borderRadius: '30px', fontWeight: 700, fontSize: '14px'
                                }}
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
