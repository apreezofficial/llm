"use client";
import Image from 'next/image';
import Wave from './Wave';
import { PlayCircle, TrendingUp } from 'lucide-react';

export default function Hero() {
    return (
        <section style={{
            background: '#046B63',
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            paddingTop: '90px'
        }}>
            {/* Grid Pattern Background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                pointerEvents: 'none'
            }}></div>

            {/* Side Social Bar */}
            <div className="mobile-hide" style={{
                position: 'absolute',
                left: '40px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                zIndex: 10
            }}>
                {['Facebook', 'Linkedin', 'Twitter'].map((p) => (
                    <div key={p} style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                        fontSize: '14px',
                        fontWeight: 700,
                        color: 'rgba(255,255,255,0.6)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        {p}
                    </div>
                ))}
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="grid grid-2" style={{ alignItems: 'flex-end' }}>
                    <div style={{ paddingBottom: '100px' }}>
                        <div style={{
                            background: '#FF7D00',
                            padding: '6px 16px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: 800,
                            display: 'inline-block',
                            marginBottom: '24px',
                            boxShadow: '0 4px 12px rgba(255,125,0,0.3)'
                        }}>
                            Top Platform
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(48px, 6vw, 76px)',
                            lineHeight: 1.1,
                            fontWeight: 900,
                            marginBottom: '24px',
                            color: 'white'
                        }}>
                            Let&apos;s New Course <br />
                            Best <span style={{ color: '#FF7D00' }}>Platform</span>
                        </h1>
                        <p style={{
                            fontSize: '18px',
                            color: 'rgba(255,255,255,0.8)',
                            maxWidth: '480px',
                            lineHeight: 1.6,
                            marginBottom: '40px'
                        }}>
                            LMS provides a specialized environment tailored to the needs of websites advanced security features.
                        </p>

                        {/* Search Bar */}
                        <div style={{
                            background: 'white',
                            borderRadius: '50px',
                            padding: '6px 6px 6px 30px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: '540px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}>
                            <input
                                type="text"
                                placeholder="etc: Search Your Needs"
                                style={{
                                    flex: 1,
                                    border: 'none',
                                    outline: 'none',
                                    fontSize: '15px',
                                    color: '#333'
                                }}
                            />
                            <div className="mobile-hide" style={{
                                padding: '0 20px',
                                borderLeft: '1px solid #EEE',
                                color: '#666',
                                fontSize: '14px',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                Web Development <ChevronDown size={14} />
                            </div>
                            <button style={{
                                background: '#FF7D00',
                                width: '54px',
                                height: '54px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white'
                            }}>
                                <Search size={22} />
                            </button>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div style={{ position: 'relative', height: '100%' }}>
                        <div style={{
                            position: 'relative',
                            width: '120%',
                            height: '650px',
                            marginLeft: '20px',
                            zIndex: 1
                        }}>
                            <Image
                                src="https://demo.blockskit.com/education-pro-2/wp-content/uploads/sites/75/2024/02/banner-image2.png"
                                alt="Student"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                                priority
                            />
                        </div>

                        {/* Widget: Completion Rate */}
                        <div style={{
                            position: 'absolute',
                            top: '150px',
                            right: '0',
                            background: 'white',
                            borderRadius: '20px',
                            padding: '24px',
                            color: '#005B52',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                            zIndex: 5,
                            textAlign: 'center',
                            width: '180px'
                        }}>
                            <div style={{
                                width: '100px',
                                height: '100px',
                                margin: '0 auto 12px',
                                position: 'relative'
                            }}>
                                <svg width="100" height="100" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" stroke="#F1F1F1" strokeWidth="8" fill="none" />
                                    <circle cx="50" cy="50" r="40" stroke="#FF7D00" strokeWidth="8" fill="none" strokeDasharray="180 251.2" strokeLinecap="round" />
                                </svg>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 900,
                                    fontSize: '18px'
                                }}>
                                    87.6%
                                </div>
                            </div>
                            <div style={{ fontSize: '12px', fontWeight: 600, lineHeight: 1.4, color: '#666' }}>
                                Completion rate of our courses
                            </div>
                        </div>

                        {/* Widget: Enrollments */}
                        <div style={{
                            position: 'absolute',
                            bottom: '120px',
                            left: '50px',
                            background: 'white',
                            borderRadius: '20px',
                            padding: '16px 24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                            zIndex: 5
                        }}>
                            <div style={{ fontSize: '13px', fontWeight: 700, color: '#333' }}>15k+ User Enroll</div>
                            <div className="flex" style={{ marginLeft: '4px' }}>
                                {[1, 2, 3, 4].map(i => (
                                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid white', marginLeft: '-8px' }} alt="User" />
                                ))}
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#E2E2E2', border: '2px solid white', marginLeft: '-8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#666', fontWeight: 700 }}>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Curve Divider */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '180px',
                background: 'white',
                clipPath: 'ellipse(70% 100% at 50% 100%)',
                zIndex: 4
            }}></div>
        </section>
    );
}

const ChevronDown = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
);

const Search = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);

