"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";
import Image from 'next/image';

export default function SolutionsPage() {
    return (
        <main>
            <Navbar />

            <section style={{
                background: '#046B63',
                padding: '180px 0 120px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                color: 'white'
            }}>
                <div className="container animate-slide-up">
                    <h1 style={{
                        fontSize: 'clamp(48px, 6vw, 84px)',
                        fontWeight: 950,
                        color: 'white',
                        fontFamily: 'var(--font-heading)',
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        marginBottom: '32px'
                    }}>
                        Custom Solutions for <br />Every Institution
                    </h1>
                    <p style={{
                        fontSize: '22px',
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        fontWeight: 500,
                        lineHeight: 1.6
                    }}>
                        From K-12 to Higher Ed and Corporate Training, we tailor our ecosystem to your specific needs.
                    </p>
                </div>
            </section>

            <section className="container" style={{ padding: '100px 0' }}>
                {[
                    { title: "K-12 Education", desc: "Keep young learners engaged with gamified paths, achievement badges, and safe digital environments.", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", reverse: false },
                    { title: "Higher Education", desc: "Scale large lectures with breakout rooms, advanced collaboration tools, and research integration.", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800", reverse: true },
                    { title: "Corporate Learning", desc: "Onboard employees and maintain skills with specialized training modules and progress tracking.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", reverse: false }
                ].map((sol, i) => (
                    <div key={i} className="grid grid-2" style={{
                        alignItems: 'center',
                        padding: '120px 0',
                        gap: '100px'
                    }}>
                        <div style={{ order: sol.reverse ? 2 : 1 }} className="animate-slide-up">
                            <h2 style={{ fontSize: '52px', fontWeight: 950, marginBottom: '32px', fontFamily: 'var(--font-heading)', color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{sol.title}</h2>
                            <p style={{ fontSize: '20px', color: '#64748B', lineHeight: '1.7', marginBottom: '48px', fontWeight: 500 }}>{sol.desc}</p>
                            <button style={{ padding: '16px 40px', borderRadius: '16px', fontWeight: 950, fontSize: '15px', background: '#0F172A', color: 'white', border: 'none' }}>Learn More →</button>
                        </div>
                        <div style={{
                            order: sol.reverse ? 1 : 2,
                            borderRadius: '48px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)',
                            position: 'relative',
                            height: '560px'
                        }} className="animate-scale-in">
                            <Image src={sol.img} alt={sol.title} fill style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
            <style jsx>{`
                @media (max-width: 768px) {
                    .grid-2 > div {
                        order: unset !important;
                    }
                }
            `}</style>
        </main>
    );
}

