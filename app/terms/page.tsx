"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <div style={{ background: 'white' }}>
            <Navbar />

            <section style={{ padding: '160px 0 100px', background: '#F8FAFC' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: '48px', fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: '40px' }}>Terms of Service</h1>
                    <div className="flex column gap-32" style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
                        <p>Last updated: June 1, 2024</p>
                        <section>
                            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>1. Acceptance of Terms</h2>
                            <p>By accessing or using our services, you agree to be bound by these terms. If you do not agree to these terms, do not use our services.</p>
                        </section>
                        <section>
                            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>2. Use of Services</h2>
                            <p>You must follow any policies made available to you within the services. Don&apos;t misuse our services.</p>
                        </section>
                        <section>
                            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>3. Institutional Responsibility</h2>
                            <p>Institutions are responsible for the activities of their authorized users and for ensuring compliance with these terms.</p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
