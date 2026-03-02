"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    BookOpen,
    Users,
    MessageSquare,
    Calendar,
    BarChart3,
    Award,
    Settings,
    HelpCircle,
    Bell,
    CreditCard,
    Library,
    FileText,
    Trophy,
    Bot,
    LogOut,
    CheckSquare
} from 'lucide-react';

const studentLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Assignments', href: '/assignments', icon: CheckSquare },
    { name: 'Quizzes', href: '/quizzes', icon: FileText },
    { name: 'Schedule', href: '/schedule', icon: Calendar },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'AI Tutor', href: '/ai-companion', icon: Bot },
    { name: 'Support', href: '/help', icon: HelpCircle },
    { name: 'Settings', href: '/settings', icon: Settings },
];

const tutorLinks = [
    { name: 'Tutor Dashboard', href: '/tutor/dashboard', icon: LayoutDashboard },
    { name: 'Course Manager', href: '/tutor/courses', icon: Library },
    { name: 'Student Roster', href: '/tutor/students', icon: Users },
    { name: 'Gradebook', href: '/tutor/grades', icon: Award },
    { name: 'Curriculum', href: '/tutor/curriculum', icon: BookOpen },
    { name: 'Schedule', href: '/tutor/schedule', icon: Calendar },
    { name: 'Analytics', href: '/tutor/analytics', icon: BarChart3 },
    { name: 'Payouts', href: '/tutor/payouts', icon: CreditCard },
    { name: 'Support', href: '/help', icon: HelpCircle },
    { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const isTutor = pathname.startsWith('/tutor');
    const activeLinks = isTutor ? tutorLinks : studentLinks;

    return (
        <aside style={{
            width: '280px',
            height: '100%',
            position: 'relative',
            background: 'white',
            borderRight: '1px solid #E2E8F0',
            padding: '40px 24px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '10px 0 50px rgba(0,0,0,0.02)'
        }}>
            {/* Brand Logo */}
            <div style={{ marginBottom: '48px', paddingLeft: '12px' }}>
                <Link href="/" className="flex align-center gap-12 hover-scale">
                    <div style={{
                        background: 'linear-gradient(135deg, #FF7D00 0%, #FFB444 100%)',
                        width: '36px',
                        height: '36px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 16px rgba(255,125,0,0.2)'
                    }}>
                        <BookOpen size={20} color="white" strokeWidth={2.5} />
                    </div>
                    <span style={{
                        fontWeight: 950,
                        fontSize: '22px',
                        color: '#0F172A',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '-1px'
                    }}>
                        LMS<span style={{ color: '#FF7D00' }}>ZONE</span>
                    </span>
                </Link>
            </div>

            {/* Navigation Sections */}
            <nav style={{ flex: 1, overflowY: 'auto', paddingRight: '4px' }} className="custom-scrollbar">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <p style={{ fontSize: '11px', fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px', paddingLeft: '16px' }}>
                        {isTutor ? 'Instructor Portal' : 'Student Portal'}
                    </p>

                    {activeLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex align-center gap-16 hover-scale"
                                style={{
                                    padding: '14px 18px',
                                    borderRadius: '16px',
                                    fontSize: '14px',
                                    fontWeight: isActive ? 800 : 600,
                                    color: isActive ? 'white' : '#64748B',
                                    background: isActive ? '#0F172A' : 'transparent',
                                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                    boxShadow: isActive ? '0 10px 20px rgba(15,23,42,0.15)' : 'none'
                                }}
                            >
                                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} style={{ color: isActive ? '#FF7D00' : 'inherit' }} />
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
                <button className="flex align-center gap-16 w-full hover-scale" style={{
                    padding: '16px 20px',
                    borderRadius: '16px',
                    fontSize: '14px',
                    fontWeight: 800,
                    color: '#EF4444',
                    background: '#FEF2F2',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                }}>
                    <LogOut size={20} strokeWidth={2.5} />
                    Secure Logout
                </button>
            </div>
        </aside>
    );
}
