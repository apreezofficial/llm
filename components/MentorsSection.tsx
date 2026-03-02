"use client";
import React from 'react';

export default function MentorsSection() {
    return (
        <section className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
            <div style={{
                background: '#FF7D00',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 800,
                display: 'inline-block',
                marginBottom: '24px',
                color: 'white'
            }}>
                About Lmszone
            </div>

            <h2 style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 800,
                lineHeight: 1.3,
                maxWidth: '900px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12px'
            }}>
                A Learning Platform
                <img src="https://i.pravatar.cc/100?u=mentor1" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '3px solid #EEE' }} alt="Mentor" />
                Based on <br />
                Practical Knowledge With Best & World <br />
                Class
                <img src="https://i.pravatar.cc/100?u=mentor2" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '3px solid #EEE' }} alt="Mentor" />
                Mentors.
            </h2>
        </section>
    );
}
