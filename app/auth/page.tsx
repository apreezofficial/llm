"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    User,
    GraduationCap,
    ShieldCheck,
    Mail,
    Lock,
    Eye,
    Globe,
    Info,
    ArrowRight,
    ChevronDown,
    BookOpen,
    ClipboardCheck,
    Settings,
    CheckCircle2
} from 'lucide-react';
import { showSuccess, showError } from '@/utils/swal';

const LayoutIcon = ({ size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" />
    </svg>
);

export default function AuthPage() {
    const router = useRouter();
    const [authType, setAuthType] = useState<'signup' | 'login'>('signup');
    const [userType, setUserType] = useState<'student' | 'tutor' | 'admin'>('student');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (authType === 'login') {
            // Updated login logic for demo
            if (email === 'ap@example.com' && password === 'aaaaaa01') {
                showSuccess('Access Granted', `Initializing ${userType} dashboard...`);
                const target = userType === 'tutor' ? '/tutor/dashboard' : '/dashboard';
                setTimeout(() => router.push(target), 1500);
            } else if (email === 'tutor@lms.com') {
                // Shortcut for tutor demo
                showSuccess('Tutor Access', 'Loading instructor portal...');
                setTimeout(() => router.push('/tutor/dashboard'), 1500);
            } else {
                showError('Auth Failed', 'The credentials provided do not match our secure records.');
                setError('Invalid credentials.');
            }
        } else {
            // Mock signup
            showSuccess('Account Initialized', 'Welcome to the LMSZONE ecosystem!');
            setTimeout(() => setAuthType('login'), 2000);
        }
    };

    const renderDynamicFields = () => {
        if (authType === 'login') return null;

        switch (userType) {
            case 'student':
                return (
                    <div className="grid grid-2 animate-slide-up delay-1" style={{ gap: '20px', marginBottom: '20px' }}>
                        <div className="input-group">
                            <label className="input-label">Grade / Level</label>
                            <div className="input-wrapper">
                                <select className="auth-input auth-input-no-icon" style={{ appearance: 'none' }}>
                                    <option>Grade 9 (Freshman)</option>
                                    <option>Grade 10 (Sophomore)</option>
                                    <option>Grade 11 (Junior)</option>
                                    <option>Grade 12 (Senior)</option>
                                </select>
                                <ChevronDown size={16} style={{ position: 'absolute', right: '14px', color: '#94A3B8' }} />
                            </div>
                        </div>
                        <div className="input-group">
                            <label className="input-label">School ID</label>
                            <div className="input-wrapper">
                                <input type="text" placeholder="e.g. EDU-12345" className="auth-input auth-input-no-icon" />
                            </div>
                        </div>
                    </div>
                );
            case 'tutor':
                return (
                    <div className="grid grid-2 animate-slide-up delay-1" style={{ gap: '20px', marginBottom: '20px' }}>
                        <div className="input-group">
                            <label className="input-label">Expertise / Subject</label>
                            <div className="input-wrapper">
                                <span className="input-icon"><BookOpen size={18} /></span>
                                <input type="text" placeholder="e.g. Mathematics" className="auth-input" />
                            </div>
                        </div>
                        <div className="input-group">
                            <label className="input-label">Certification ID</label>
                            <div className="input-wrapper">
                                <span className="input-icon"><ClipboardCheck size={18} /></span>
                                <input type="text" placeholder="TRCN-123456" className="auth-input" />
                            </div>
                        </div>
                    </div>
                );
            case 'admin':
                return (
                    <div className="grid grid-2 animate-slide-up delay-1" style={{ gap: '20px', marginBottom: '20px' }}>
                        <div className="input-group">
                            <label className="input-label">Administrative Role</label>
                            <div className="input-wrapper">
                                <select className="auth-input auth-input-no-icon" style={{ appearance: 'none' }}>
                                    <option>Principal / Head</option>
                                    <option>IT Administrator</option>
                                    <option>Registrar</option>
                                    <option>Bursar</option>
                                </select>
                                <ChevronDown size={16} style={{ position: 'absolute', right: '14px', color: '#94A3B8' }} />
                            </div>
                        </div>
                        <div className="input-group">
                            <label className="input-label">Admin Access Key</label>
                            <div className="input-wrapper">
                                <span className="input-icon"><Lock size={18} /></span>
                                <input type="password" placeholder="••••••••" className="auth-input" />
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="auth-page" style={{
            background: 'radial-gradient(circle at top right, #FFF7ED 0%, #F8FAFC 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorative Elements */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'rgba(255, 125, 0, 0.03)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '500px', height: '500px', background: 'rgba(0, 91, 82, 0.03)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }}></div>

            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div className="flex justify-between align-center animate-slide-up" style={{ padding: '40px 0 60px' }}>
                    <Link href="/" className="flex align-center gap-8 group">
                        <div className="hover-scale" style={{ background: '#FF7D00', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(255,125,0,0.3)' }}>
                            <LayoutIcon size={24} color="white" />
                        </div>
                        <span style={{
                            fontWeight: 950,
                            fontSize: '24px',
                            letterSpacing: '-1px',
                            fontFamily: 'var(--font-heading)',
                            display: 'flex',
                            alignItems: 'baseline'
                        }}>
                            <span style={{ color: '#0F172A' }}>LMS</span>
                            <span style={{ color: '#FF7D00' }}>ZONE</span>
                            <span style={{ color: '#FF7D00', marginLeft: '2px' }}>.</span>
                        </span>
                    </Link>

                    <div className="flex align-center mobile-hide" style={{ gap: '32px' }}>
                        <Link href="/help" className="nav-link" style={{ fontSize: '12px' }}>Help Center</Link>
                        <div style={{ height: '16px', width: '1px', background: '#E2E8F0' }}></div>
                        <div className="flex align-center gap-8" style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', cursor: 'pointer', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>
                            <Globe size={16} color="#FF7D00" />
                            ENG
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="auth-card glass-card animate-scale-in" style={{
                        width: '100%',
                        maxWidth: '600px',
                        borderRadius: '32px',
                        background: 'rgba(255, 255, 255, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.6)',
                        boxShadow: '0 50px 100px -20px rgba(0,0,0,0.12)'
                    }}>
                        {/* Tabs */}
                        <div className="auth-tabs" style={{ background: 'rgba(15, 23, 42, 0.03)', borderRadius: '32px 32px 0 0' }}>
                            <div
                                className={`auth-tab ${authType === 'signup' ? 'active' : ''}`}
                                onClick={() => { setAuthType('signup'); setError(''); }}
                                style={{
                                    padding: '20px',
                                    fontSize: '14px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    fontFamily: 'var(--font-heading)',
                                    color: authType === 'signup' ? '#FF7D00' : '#64748B'
                                }}
                            >
                                Get Started
                            </div>
                            <div
                                className={`auth-tab ${authType === 'login' ? 'active' : ''}`}
                                onClick={() => { setAuthType('login'); setError(''); }}
                                style={{
                                    padding: '20px',
                                    fontSize: '14px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    fontFamily: 'var(--font-heading)',
                                    color: authType === 'login' ? '#FF7D00' : '#64748B'
                                }}
                            >
                                Member Login
                            </div>
                        </div>

                        <div className="auth-card-padding" style={{ padding: '50px 60px' }}>
                            <div className="text-center animate-slide-up delay-1" style={{ marginBottom: '40px' }}>
                                <div style={{ display: 'inline-flex', padding: '8px 16px', background: '#FFF7ED', borderRadius: '30px', color: '#FF7D00', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>
                                    Secure Access
                                </div>
                                <h2 className="auth-title" style={{ fontSize: '32px', color: '#0F172A', marginBottom: '8px', fontWeight: 900, fontFamily: 'var(--font-heading)', letterSpacing: '-1px' }}>
                                    {authType === 'signup' ? 'Create Account' : 'Welcome Back'}
                                </h2>
                                <p style={{ color: '#64748B', fontSize: '15px', fontWeight: 500 }}>
                                    Join the next generation of digital learning.
                                </p>
                            </div>

                            {/* User Type Switcher - Only for Signup */}
                            {authType === 'signup' && (
                                <div className="user-type-container animate-slide-up delay-2" style={{ marginBottom: '32px', position: 'relative' }}>
                                    {/* Desktop Version: Horizontal Tabs */}
                                    <div className="user-type-desktop">
                                        <div className="user-type-group">
                                            <button className={`user-type-btn ${userType === 'student' ? 'active' : ''}`} onClick={() => setUserType('student')}>
                                                <GraduationCap size={18} /> Student
                                            </button>
                                            <button className={`user-type-btn ${userType === 'tutor' ? 'active' : ''}`} onClick={() => setUserType('tutor')}>
                                                <User size={18} /> Tutor
                                            </button>
                                            <button className={`user-type-btn ${userType === 'admin' ? 'active' : ''}`} onClick={() => setUserType('admin')}>
                                                <ShieldCheck size={18} /> Admin
                                            </button>
                                        </div>
                                    </div>

                                    {/* Mobile Version: Custom Premium Dropdown */}
                                    <div className="user-type-mobile">
                                        <label className="input-label" style={{ marginBottom: '12px', display: 'block' }}>I AM A...</label>
                                        <div className="input-wrapper" style={{ cursor: 'pointer' }}>
                                            <select
                                                value={userType}
                                                onChange={(e) => setUserType(e.target.value as any)}
                                                style={{
                                                    appearance: 'none',
                                                    width: '100%',
                                                    padding: '18px 24px',
                                                    borderRadius: '16px',
                                                    border: '1px solid #E2E8F0',
                                                    background: 'white',
                                                    fontSize: '15px',
                                                    fontWeight: 800,
                                                    color: '#0F172A',
                                                    outline: 'none',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                <option value="student">Student</option>
                                                <option value="tutor">Tutor</option>
                                                <option value="admin">Administrator</option>
                                            </select>
                                            <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <div style={{ color: '#FF7D00' }}>
                                                    {userType === 'student' && <GraduationCap size={20} />}
                                                    {userType === 'tutor' && <User size={20} />}
                                                    {userType === 'admin' && <ShieldCheck size={20} />}
                                                </div>
                                                <ChevronDown size={18} color="#94A3B8" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="animate-bounce-in" style={{ padding: '16px', background: '#FEF2F2', color: '#DC2626', borderRadius: '16px', fontSize: '14px', marginBottom: '24px', textAlign: 'center', fontWeight: 700, border: '1px solid rgba(220, 38, 38, 0.1)' }}>
                                    {error}
                                </div>
                            )}

                            <form className="animate-fade delay-3" key={`${authType}-${userType}`} onSubmit={handleLogin}>
                                {renderDynamicFields()}

                                <div className="input-group">
                                    <label className="input-label">{authType === 'signup' ? 'FULL NAME' : 'EMAIL ADDRESS'}</label>
                                    <div className="input-wrapper">
                                        <span className="input-icon" style={{ color: '#FF7D00' }}>
                                            {authType === 'signup' ? <User size={18} /> : <Mail size={18} />}
                                        </span>
                                        <input
                                            type={authType === 'signup' ? 'text' : 'email'}
                                            placeholder={authType === 'signup' ? 'John Wick' : 'ap@example.com'}
                                            className="auth-input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                {authType === 'signup' && (
                                    <div className="input-group animate-slide-up">
                                        <label className="input-label">INSTITUTIONAL EMAIL</label>
                                        <div className="input-wrapper">
                                            <span className="input-icon" style={{ color: '#FF7D00' }}><Mail size={18} /></span>
                                            <input type="email" placeholder="wick@continental.edu" className="auth-input" />
                                        </div>
                                    </div>
                                )}

                                <div className="input-group" style={{ marginBottom: authType === 'signup' ? '24px' : '40px' }}>
                                    <label className="input-label">PASSWORD</label>
                                    <div className="input-wrapper">
                                        <span className="input-icon" style={{ color: '#FF7D00' }}><Lock size={18} /></span>
                                        <input
                                            type="password"
                                            placeholder="••••••••••••"
                                            className="auth-input"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <Eye size={18} style={{ position: 'absolute', right: '16px', color: '#94A3B8', cursor: 'pointer' }} />
                                    </div>
                                </div>

                                {authType === 'signup' && (
                                    <div className="flex gap-12" style={{ marginBottom: '40px' }}>
                                        <input type="checkbox" id="terms" style={{ width: '20px', height: '20px', accentColor: '#FF7D00', cursor: 'pointer', flexShrink: 0, marginTop: '2px' }} />
                                        <label htmlFor="terms" style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.6, fontWeight: 500 }}>
                                            I agree to the <Link href="#" style={{ color: '#FF7D00', fontWeight: 800 }}>Terms of Service</Link> and <Link href="#" style={{ color: '#FF7D00', fontWeight: 800 }}>Privacy Policy</Link>.
                                        </label>
                                    </div>
                                )}

                                <button type="submit" className="btn btn-primary hover-scale" style={{
                                    width: '100%',
                                    padding: '20px',
                                    borderRadius: '16px',
                                    fontSize: '15px',
                                    fontWeight: 900,
                                    background: '#FF7D00',
                                    fontFamily: 'var(--font-heading)',
                                    letterSpacing: '1px',
                                    boxShadow: '0 12px 30px rgba(255,125,0,0.25)'
                                }}>
                                    {authType === 'signup' ? `INITIALIZE ACCOUNT` : 'ACCESS DASHBOARD'}
                                    <ArrowRight size={18} style={{ marginLeft: '10px' }} />
                                </button>

                                <div style={{ margin: '40px 0', position: 'relative', textAlign: 'center' }}>
                                    <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0' }} />
                                    <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '0 20px', fontSize: '11px', fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'var(--font-heading)' }}>
                                        OR USE SSO
                                    </span>
                                </div>

                                <div className="flex social-btns" style={{ gap: '20px' }}>
                                    <button
                                        className="social-btn hover-scale"
                                        type="button"
                                        onClick={() => showSuccess('SSO Bridge', 'Redirecting to Google Classroom secure portal...')}
                                        style={{
                                            flex: 1,
                                            padding: '16px',
                                            borderRadius: '16px',
                                            fontSize: '13px',
                                            fontWeight: 800,
                                            border: '1px solid #E2E8F0'
                                        }}
                                    >
                                        <img src="https://www.gstatic.com/classroom/logo_square_48.svg" alt="Google" style={{ width: '20px' }} />
                                        Classroom
                                    </button>
                                    <button
                                        className="social-btn hover-scale"
                                        type="button"
                                        onClick={() => showSuccess('SSO Bridge', 'Connecting to Microsoft Office 365 services...')}
                                        style={{
                                            flex: 1,
                                            padding: '16px',
                                            borderRadius: '16px',
                                            fontSize: '13px',
                                            fontWeight: 800,
                                            border: '1px solid #E2E8F0'
                                        }}
                                    >
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" style={{ width: '20px' }} />
                                        Office 365
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="animate-slide-up delay-4" style={{ marginTop: '60px', paddingBottom: '60px', textAlign: 'center' }}>
                    <div className="flex justify-center flex-wrap" style={{ gap: '40px' }}>
                        <Link href="/help" className="flex align-center gap-8 group" style={{ fontSize: '13px', fontWeight: 700, color: '#64748B' }}>
                            <div className="group-hover:text-primary transition-colors"><Info size={18} /></div>
                            Need technical help?
                        </Link>
                        <Link href="/solutions" className="flex align-center gap-8 mobile-hide" style={{ fontSize: '13px', fontWeight: 700, color: '#64748B' }}>
                            <CheckCircle2 size={18} color="#005B52" />
                            LMSZONE for Enterprise
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .nav-link {
                    font-family: var(--font-heading);
                    font-weight: 800;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    color: #64748B;
                    transition: all 0.3s;
                }
                .nav-link:hover {
                    color: #FF7D00;
                }
                .user-type-mobile { display: none; }
                .user-type-desktop { display: block; }

                @media (max-width: 768px) {
                    .user-type-desktop { display: none; }
                    .user-type-mobile { display: block; }
                    .auth-card-padding { padding: 40px 24px !important; }
                    .user-type-group { flex-direction: column !important; }
                    .social-btns { flex-direction: column !important; gap: 12px !important; }
                    .auth-title { font-size: 26px !important; }
                    .container { padding: 0 20px !important; }
                }
            `}</style>
        </div>
    );
}
