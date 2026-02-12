"use client";
import Link from 'next/link';
import { Layout } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="container flex align-center justify-between" style={{ padding: '20px 24px' }}>
            <Link href="/" className="flex align-center gap-8" style={{ gap: '8px' }}>
                <div style={{ background: '#0066FF', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Layout size={18} color="white" />
                </div>
                <span style={{ fontWeight: 700, fontSize: '20px', color: '#0F172A' }}>EduFlow</span>
            </Link>

            <div className="flex align-center" style={{ gap: '32px' }}>
                <Link href="#features" className="btn-ghost" style={{ fontSize: '14px', fontWeight: 500 }}>Features</Link>
                <Link href="#solutions" className="btn-ghost" style={{ fontSize: '14px', fontWeight: 500 }}>Solutions</Link>
                <Link href="#pricing" className="btn-ghost" style={{ fontSize: '14px', fontWeight: 500 }}>Pricing</Link>
                <Link href="#resources" className="btn-ghost" style={{ fontSize: '14px', fontWeight: 500 }}>Resources</Link>
            </div>

            <div className="flex align-center" style={{ gap: '16px' }}>
                <button className="btn-ghost" style={{ fontSize: '14px', fontWeight: 600 }}>Login</button>
                <button className="btn btn-primary" style={{ padding: '8px 20px', borderRadius: '6px' }}>Sign Up</button>
            </div>
        </nav>
    );
}
