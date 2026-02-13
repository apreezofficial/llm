"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";

export default function SolutionsPage() {
    return (
        <main style={{ paddingTop: '72px' }}>
            <Navbar />

            <section style={{
                background: 'linear-gradient(225deg, #0066FF 0%, #0044AA 100%)',
                padding: '140px 0 180px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                color: 'white'
            }}>
                <div className="container animate-fade">
                    <h1 style={{ fontSize: '64px', marginBottom: '24px', fontWeight: 800, color: 'white' }}>Custom Solutions for <br />Every Institution</h1>
                    <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto' }}>
                        From K-12 to Higher Ed and Corporate Training, we tailor EduFlow to your specific needs.
                    </p>
                </div>
                <div style={{ opacity: 0.2 }}>
                    <Wave />
                </div>
            </section>

            <section className="container section">
                {[
                    { title: "K-12 Education", desc: "Keep young learners engaged with gamified paths, achievement badges, and safe digital environments.", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", reverse: false },
                    { title: "Higher Education", desc: "Scale large lectures with breakout rooms, advanced collaboration tools, and research integration.", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800", reverse: true },
                    { title: "Corporate Learning", desc: "Onboard employees and maintain skills with specialized training modules and progress tracking.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", reverse: false }
                ].map((sol, i) => (
                    <div key={i} className="grid" style={{
                        gridTemplateColumns: '1fr 1fr',
                        gap: '80px',
                        alignItems: 'center',
                        padding: '80px 0',
                        display: 'grid'
                    }}>
                        <div style={{ order: sol.reverse ? 2 : 1 }}>
                            <h2 style={{ fontSize: '40px', marginBottom: '24px' }}>{sol.title}</h2>
                            <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>{sol.desc}</p>
                            <button className="btn btn-outline">Learn More</button>
                        </div>
                        <div style={{
                            order: sol.reverse ? 1 : 2,
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)'
                        }}>
                            <img src={sol.img} alt={sol.title} style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </main>
    );
}
