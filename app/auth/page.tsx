"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    Layout,
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
    ClipboardCheck
} from 'lucide-react';

export default function AuthPage() {
    const router = useRouter();
    const [authType, setAuthType] = useState<'signup' | 'login'>('signup');
    const [userType, setUserType] = useState<'student' | 'tutor' | 'admin'>('student');
    const [language, setLanguage] = useState('English');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (authType === 'login') {
            if (email === 'ap@example.com' && password === 'aaaaaa01') {
                router.push('/dashboard');
            } else {
                setError('Invalid credentials. Hint: ap@example.com / aaaaaa01');
            }
        }
    };

    const renderDynamicFields = () => {
        if (authType === 'login') return null;

        switch (userType) {
            case 'student':
                return (
                    <div className="grid grid-2" style={{ gap: '20px', marginBottom: '20px' }}>
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
                    <div className="grid grid-2" style={{ gap: '20px', marginBottom: '20px' }}>
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
                    <div className="grid grid-2" style={{ gap: '20px', marginBottom: '20px' }}>
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
        <div className="auth-page">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                {/* Header */}
                <div className="flex justify-between align-center" style={{ marginBottom: '60px' }}>
                    <Link href="/" className="flex align-center gap-8">
                        <div style={{ background: '#0066FF', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Layout size={20} color="white" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: '22px', color: '#0F172A', letterSpacing: '-0.5px' }}>EduTrack<span style={{ color: '#0066FF' }}>Pro</span></span>
                    </Link>

                    <div className="flex align-center mobile-hide" style={{ gap: '32px' }}>
                        <Link href="/features" style={{ fontSize: '14px', fontWeight: 600, color: '#64748B' }}>Resources</Link>
                        <a href="mailto:support@edustream.com" style={{ fontSize: '14px', fontWeight: 600, color: '#64748B' }}>Contact Support</a>
                        <div style={{ height: '16px', width: '1px', background: '#E2E8F0' }}></div>
                        <div className="flex align-center gap-8" style={{ fontSize: '14px', fontWeight: 600, color: '#64748B', cursor: 'pointer' }}>
                            <Globe size={16} />
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                style={{ background: 'none', border: 'none', fontWeight: 600, color: '#64748B', cursor: 'pointer', outline: 'none' }}
                            >
                                <option>English</option>
                                <option>French</option>
                                <option>Spanish</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="auth-card animate-fade">
                    {/* Tabs */}
                    <div className="auth-tabs">
                        <div className={`auth-tab ${authType === 'signup' ? 'active' : ''}`} onClick={() => { setAuthType('signup'); setError(''); }}>Sign Up</div>
                        <div className={`auth-tab ${authType === 'login' ? 'active' : ''}`} onClick={() => { setAuthType('login'); setError(''); }}>Login</div>
                    </div>

                    <div style={{ padding: '60px 50px' }}>
                        <div className="text-center" style={{ marginBottom: '40px' }}>
                            <h2 style={{ fontSize: '32px', color: '#1E293B', marginBottom: '12px', fontWeight: 800, letterSpacing: '-1px' }}>
                                {authType === 'signup' ? 'Create your account' : 'Welcome back'}
                            </h2>
                            <p style={{ color: '#64748B', fontSize: '15px' }}>Join thousands of students and educators worldwide.</p>
                        </div>

                        {/* User Type Switcher */}
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

                        {error && (
                            <div style={{ padding: '12px', background: '#FEF2F2', color: '#DC2626', borderRadius: '8px', fontSize: '14px', marginBottom: '24px', textAlign: 'center' }}>
                                {error}
                            </div>
                        )}

                        <form className="animate-fade" key={`${authType}-${userType}`} onSubmit={handleLogin}>
                            {renderDynamicFields()}

                            <div className="input-group">
                                <label className="input-label">{authType === 'signup' ? 'Full Name' : 'Institutional Email'}</label>
                                <div className="input-wrapper">
                                    <span className="input-icon">
                                        {authType === 'signup' ? <User size={18} /> : <Mail size={18} />}
                                    </span>
                                    <input
                                        type={authType === 'signup' ? 'text' : 'email'}
                                        placeholder={authType === 'signup' ? 'Johnathan Doe' : 'ap@example.com'}
                                        className="auth-input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {authType === 'signup' && (
                                <div className="input-group">
                                    <label className="input-label">Institutional Email</label>
                                    <div className="input-wrapper">
                                        <span className="input-icon"><Mail size={18} /></span>
                                        <input type="email" placeholder="john.doe@school.edu" className="auth-input" />
                                    </div>
                                </div>
                            )}

                            <div className="input-group" style={{ marginBottom: authType === 'signup' ? '24px' : '40px' }}>
                                <label className="input-label">Password</label>
                                <div className="input-wrapper">
                                    <span className="input-icon"><Lock size={18} /></span>
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
                                    <input type="checkbox" id="terms" style={{ width: '20px', height: '20px', accentColor: '#0066FF', cursor: 'pointer', marginTop: '2px' }} />
                                    <label htmlFor="terms" style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>
                                        I agree to the <Link href="#" style={{ color: '#0066FF', fontWeight: 700 }}>Terms of Service</Link> and <Link href="#" style={{ color: '#0066FF', fontWeight: 700 }}>Privacy Policy</Link>, including the processing of my educational data.
                                    </label>
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '18px', borderRadius: '14px', fontSize: '16px', fontWeight: 700 }}>
                                {authType === 'signup' ? `Create ${userType.charAt(0).toUpperCase() + userType.slice(1)} Account` : 'Sign In Now'}
                                <ArrowRight size={18} style={{ marginLeft: '10px' }} />
                            </button>

                            <div style={{ margin: '40px 0', position: 'relative', textAlign: 'center' }}>
                                <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0' }} />
                                <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '0 20px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                                    Or {authType === 'signup' ? 'sign up' : 'sign in'} with
                                </span>
                            </div>

                            <div className="flex" style={{ gap: '20px' }}>
                                <button className="social-btn" type="button" style={{ flex: 1 }}>
                                    <img src="https://www.gstatic.com/classroom/logo_square_48.svg" alt="Google Classroom" style={{ width: '22px' }} />
                                    Classroom
                                </button>
                                <button className="social-btn" type="button" style={{ flex: 1 }}>
                                    <img src="https://res.cloudinary.com/dt987/image/upload/v1/logos/ms-office-365.svg" alt="Office 365" style={{ width: '22px' }} onError={(e) => e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'} />
                                    Office 365
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer Links */}
                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                    <div className="flex justify-center" style={{ gap: '32px' }}>
                        <Link href="/features" className="flex align-center gap-8" style={{ fontSize: '14px', fontWeight: 600, color: '#64748B' }}>
                            <Info size={16} /> Need help setting up?
                        </Link>
                        <Link href="/solutions" className="flex align-center gap-8" style={{ fontSize: '14px', fontWeight: 600, color: '#64748B' }}>
                            <ShieldCheck size={16} /> For Institutions
                        </Link>
                        <Link href="#" style={{ fontSize: '14px', fontWeight: 600, color: '#64748B' }}>Accessibility Statement</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
