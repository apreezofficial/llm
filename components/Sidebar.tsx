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

const sidebarLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Assignments', href: '/assignments', icon: CheckSquare },
    { name: 'Quizzes', href: '/quizzes', icon: FileText },
    { name: 'Schedule', href: '/schedule', icon: Calendar },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Community', href: '/community', icon: MessageSquare },
    { name: 'Instructors', href: '/instructors', icon: Users },
    { name: 'Library', href: '/library', icon: Library },
    { name: 'Certificates', href: '/certificates', icon: Award },
    { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
    { name: 'AI Tutor', href: '/ai-companion', icon: Bot },
    { name: 'Notifications', href: '/notifications', icon: Bell },
    { name: 'Billing', href: '/billing', icon: CreditCard },
    { name: 'Support', href: '/help', icon: HelpCircle },
    { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="mobile-hide" style={{
            width: '280px',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            background: 'white',
            borderRight: '1px solid var(--border)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 100
        }}>
            <div style={{ marginBottom: '32px' }}>
                <Link href="/" className="flex align-center gap-8">
                    <div style={{ background: 'var(--primary)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <BookOpen size={18} color="white" />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '20px', color: '#0F172A' }}>EduTrack<span style={{ color: 'var(--primary)' }}>Pro</span></span>
                </Link>
            </div>

            <nav style={{ flex: 1, overflowY: 'auto', paddingRight: '4px' }} className="custom-scrollbar">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {sidebarLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex align-center gap-12`}
                                style={{
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    fontSize: '14px',
                                    fontWeight: isActive ? 600 : 500,
                                    color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                                    background: isActive ? 'var(--accent-blue)' : 'transparent',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <Icon size={20} />
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                <button className="flex align-center gap-12 w-full" style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#EF4444',
                    width: '100%'
                }}>
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
}
