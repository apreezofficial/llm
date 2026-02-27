"use client";
import React from 'react';
import {
    Bell,
    ChevronDown,
    Linkedin,
    Download,
    ExternalLink,
    CheckCircle2,
    Star,
    Globe,
    Mail,
    MoreVertical,
    BookOpen,
    Award,
    Zap
} from 'lucide-react';

const AchievementsPage = () => {
    const recommendedAcademies = [
        { title: 'Enterprise Security Analyst Specialist', provider: 'IBM SECURITY', duration: '40 Hours', rating: '4.9', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=300&auto=format&fit=crop', tag: 'POPULAR' },
        { title: 'Azure Data Engineer Associate', provider: 'MICROSOFT LEARN', duration: '65 Hours', rating: '4.7', img: 'https://images.unsplash.com/photo-1558494949-ef01091591c6?q=80&w=300&auto=format&fit=crop' },
        { title: 'Network Automation & Programmability', provider: 'CISCO ACADEMY', duration: '52 Hours', rating: '4.8', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=300&auto=format&fit=crop' },
        { title: 'Professional Cloud DevOps Engineer', provider: 'GOOGLE CLOUD', duration: '88 Hours', rating: '4.9', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300&auto=format&fit=crop' },
    ];

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh', fontFamily: 'Inter, sans-serif', color: '#1E293B' }}>
            {/* Navbar */}
            <nav style={{ background: 'white', borderBottom: '1px solid #E2E8F0', padding: '12px 0' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ background: '#0066FF', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <BookOpen size={16} color="white" />
                            </div>
                            <span style={{ fontWeight: 800, fontSize: '18px' }}>AcademiaOS</span>
                        </div>
                        <div style={{ display: 'flex', gap: '32px' }}>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: '#64748B', cursor: 'pointer' }}>Dashboard</span>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: '#64748B', cursor: 'pointer' }}>My Academies</span>
                            <span style={{ fontSize: '14px', fontWeight: 700, color: '#0066FF', borderBottom: '2px solid #0066FF', paddingBottom: '24px', marginBottom: '-24px' }}>Achievements</span>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: '#64748B', cursor: 'pointer' }}>Marketplace</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                        <Bell size={20} color="#64748B" />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '13px', fontWeight: 700 }}>Alex Sterling</div>
                                <div style={{ fontSize: '11px', color: '#64748B' }}>Graduate Student</div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div style={{ textAlign: 'center', padding: '60px 0 40px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#EEF2FF', padding: '8px 16px', borderRadius: '99px', marginBottom: '24px' }}>
                    <Award size={16} color="#4F46E5" />
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#4F46E5', textTransform: 'uppercase', letterSpacing: '1px' }}>CERTIFICATION EARNED</span>
                </div>
                <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-1px' }}>Congratulations, Alex!</h1>
                <p style={{ color: '#64748B', fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                    You have successfully completed the <strong>Oracle Cloud Infrastructure Professional</strong> specialization.
                </p>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 340px', gap: '40px' }}>
                {/* Left Column: Certificate */}
                <div>
                    <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '80px', position: 'relative', boxShadow: '0 4px 20px -5px rgb(0 0 0 / 0.05)', textAlign: 'center' }}>
                        {/* Oracle Logo */}
                        <div style={{ position: 'absolute', top: '40px', left: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ background: '#C00', width: '48px', height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '24px' }}>O</div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>PROFESSIONAL PARTNER</div>
                                <div style={{ fontSize: '16px', fontWeight: 800 }}>ORACLE</div>
                            </div>
                        </div>
                        {/* Credential ID */}
                        <div style={{ position: 'absolute', top: '40px', right: '40px', textAlign: 'right' }}>
                            <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>CREDENTIAL ID</div>
                            <div style={{ fontSize: '13px', fontWeight: 700 }}>ORA-2023-8829-XL</div>
                        </div>

                        <div style={{ marginTop: '40px' }}>
                            <div style={{ color: '#0066FF', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '24px' }}>CERTIFICATE OF COMPLETION</div>
                            <div style={{ fontSize: '18px', color: '#64748B', marginBottom: '24px' }}>This is to certify that</div>
                            <div style={{ fontSize: '64px', fontWeight: 800, marginBottom: '24px' }}>Alex Sterling</div>
                            <p style={{ fontSize: '15px', color: '#64748B', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
                                has successfully satisfied all requirements to be recognized as an Oracle Cloud Infrastructure Certified Professional.
                            </p>
                            <div style={{ width: '100px', height: '1px', background: '#0066FF', margin: '40px auto' }}></div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '60px' }}>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px' }}>ISSUED ON OCT 24, 2023</div>
                                <div style={{ height: '1px', width: '200px', background: '#E2E8F0', marginBottom: '12px' }}></div>
                                <div style={{ display: 'flex', gap: '40px' }}>
                                    <div>
                                        <div style={{ fontSize: '10px', fontWeight: 800 }}>SAFRA CATZ</div>
                                        <div style={{ fontSize: '9px', color: '#94A3B8' }}>CEO, Oracle</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '10px', fontWeight: 800 }}>DIRECTOR OF ACADEMY</div>
                                        <div style={{ fontSize: '9px', color: '#94A3B8' }}>AcademiaOS Program</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=AcademiaOS-Alex-Sterling" style={{ width: '60px', height: '60px', borderRadius: '4px' }} alt="QR Code" />
                                <div style={{ fontSize: '9px', fontWeight: 800, marginTop: '8px', color: '#94A3B8' }}>VERIFY CREDENTIAL</div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
                        <button style={{ flex: 1, background: '#4F46E5', color: 'white', border: 'none', borderRadius: '12px', padding: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                            <Linkedin size={20} /> Add to LinkedIn
                        </button>
                        <button style={{ flex: 1, background: 'white', color: '#1E293B', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                            <Download size={20} /> Download PDF
                        </button>
                        <button style={{ flex: 1, background: 'white', color: '#1E293B', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                            <ExternalLink size={20} /> Export Transcript
                        </button>
                    </div>
                </div>

                {/* Right Column: Status & Next Steps */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Status Card */}
                    <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '24px' }}>
                        <div style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>CREDENTIAL STATUS</div>
                        <div style={{ background: '#F0FDF4', padding: '16px', borderRadius: '16px', border: '1px solid #DCFCE7', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ background: '#22C55E', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CheckCircle2 size={16} color="white" />
                            </div>
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 800, color: '#15803D' }}>Active & Verified</div>
                                <div style={{ fontSize: '11px', color: '#15803D', fontWeight: 600 }}>Verified by Oracle Academic Trust</div>
                            </div>
                        </div>

                        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '13px', color: '#64748B' }}>Academic Credits</span>
                                <span style={{ fontSize: '13px', fontWeight: 700 }}>12.0 CEUs</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '13px', color: '#64748B' }}>Mastery Level</span>
                                <span style={{ fontSize: '13px', fontWeight: 700, color: '#0066FF' }}>Advanced Professional</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '13px', color: '#64748B' }}>Program Duration</span>
                                <span style={{ fontSize: '13px', fontWeight: 700 }}>180 Hours</span>
                            </div>
                        </div>

                        <button style={{ width: '100%', marginTop: '24px', background: 'transparent', border: 'none', color: '#0066FF', fontWeight: 700, fontSize: '13px' }}>Manage Credentials</button>
                    </div>

                    {/* Competencies Card */}
                    <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '24px' }}>
                        <div style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>COMPETENCIES MASTERED</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['Cloud Architecture Design', 'Security & Identity Management', 'Virtual Private Networking', 'Database Deployment (Autonomous)'].map((skill, i) => (
                                <div key={i} style={{ display: 'flex', items: 'start', gap: '8px', fontSize: '13px' }}>
                                    <div style={{ width: '6px', height: '6px', background: '#0066FF', borderRadius: '50%', marginTop: '6px' }}></div>
                                    <span style={{ color: '#1E293B', fontWeight: 500 }}>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Step Card */}
                    <div style={{ background: 'linear-gradient(135deg, #4F46E5, #312E81)', borderRadius: '24px', padding: '24px', color: 'white' }}>
                        <div style={{ fontSize: '10px', fontWeight: 800, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>RECOMMENDED NEXT STEP</div>
                        <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px', lineHeight: 1.4, color: 'white' }}>Oracle Cloud Solutions Architect Master</h3>
                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '24px' }}>
                            Leverage your current credits to fast-track towards Master certification. Early access granted.
                        </p>
                        <button style={{ width: '100%', background: 'white', color: '#4F46E5', border: 'none', borderRadius: '12px', padding: '12px', fontWeight: 700, fontSize: '14px' }}>
                            Explore Marketplace
                        </button>
                    </div>
                </div>
            </div>

            {/* Recommended Section */}
            <div style={{ maxWidth: '1400px', margin: '60px auto 100px', padding: '0 40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px' }}>Recommended Academies</h2>
                        <p style={{ fontSize: '14px', color: '#64748B' }}>Based on your recent graduation in Cloud Infrastructure</p>
                    </div>
                    <button style={{ color: '#0066FF', fontWeight: 700, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        View Marketplace →
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                    {recommendedAcademies.map((item, i) => (
                        <div key={i} className="course-card" style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }}>
                            <div style={{ position: 'relative', height: '160px' }}>
                                <img src={item.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                {item.tag && (
                                    <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'white', padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 800 }}>{item.tag}</div>
                                )}
                            </div>
                            <div style={{ padding: '20px' }}>
                                <div style={{ fontSize: '10px', fontWeight: 800, color: '#0066FF', marginBottom: '8px' }}>{item.provider}</div>
                                <h4 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '16px', lineHeight: 1.4 }}>{item.title}</h4>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: '#64748B' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Zap size={14} /> {item.duration}</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Star size={14} fill="#FACC15" color="#FACC15" /> {item.rating}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer style={{ background: '#F8FAFC', padding: '40px 0', borderTop: '1px solid #E2E8F0' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                        <span style={{ fontSize: '13px', color: '#94A3B8' }}>© AcademiaOS 2023</span>
                        <div style={{ display: 'flex', gap: '24px', fontSize: '13px', color: '#64748B', fontWeight: 600 }}>
                            <span>Privacy Policy</span>
                            <span>Credential Verification</span>
                            <span>Partner Program</span>
                            <span>Support</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <Globe size={18} color="#94A3B8" />
                        <Mail size={18} color="#94A3B8" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AchievementsPage;
