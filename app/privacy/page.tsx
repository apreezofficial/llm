"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            <section style={{ padding: '160px 0 100px', background: '#F8FAFC' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: '48px', fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: '40px' }}>Privacy Policy</h1>
                    <div className="flex column gap-32" style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
                        <p>Last updated: June 1, 2024</p>
                        <section>
                            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>1. Information We Collect</h2>
                            <p>We collect information you provide directly to us, such as when you create or modify your account, request support, or otherwise communicate with us.</p>
                        </section>
                        <section>
                            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>2. How We Use Information</h2>
                            <p>We use the information we collect to provide, maintain, and improve our services, such as to provide institutional analytics and student support.</p>
                        </section>
                        <section>
                            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>3. Data Sharing and Disclosure</h2>
                            <p>We do not sell student data. We share information only in limited circumstances as described in this policy.</p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
