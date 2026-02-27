"use client";
import React from 'react';
import {
    Search,
    ArrowRight,
    Download,
    PlayCircle,
    BookOpen,
    FileText,
    CheckCircle2,
    Globe,
    Mail,
    Instagram,
    Twitter,
    Linkedin,
    Monitor
} from 'lucide-react';

const LuminaResources = () => {
    const categories = ['All Resources', 'Webinars', 'Whitepapers', 'Case Studies', 'Blog Posts'];

    const resources = [
        { type: 'WEBINAR', title: 'Designing Engagement: How to Keep Remote Learners Focused', desc: 'Discover the neurological basis of attention and how to apply these principles to your digital curriculum.', duration: '45 mins', action: 'Watch Video', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop' },
        { type: 'WHITEPAPER', title: 'The State of Corporate e-Learning: 2024 Market Trends', desc: 'An in-depth analysis of AI integration and personalization in modern learning management...', duration: '18 Pages', action: 'Download PDF', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=400&auto=format&fit=crop' },
        { type: 'BLOG POST', title: '5 Strategies for Onboarding Hybrid Employees Effectively', desc: 'Transitioning to hybrid work requires a new approach to training. Here are our top tips for success.', duration: '6 min read', action: 'Read Article', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop' },
        { type: 'CASE STUDY', title: 'How GlobalTech Reduced Training Costs by 45% Using Lumina', desc: 'By consolidating multiple platforms, GlobalTech streamlined their L&D ecosystem and boosted...', tag: 'Enterprise', action: 'Read Success Story', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400&auto=format&fit=crop' },
    ];

    return (
        <div style={{ background: '#F9FAFB', color: '#111827', fontFamily: 'Inter, sans-serif' }}>
            {/* Navbar */}
            <nav style={{ padding: '20px 0', background: 'white', borderBottom: '1px solid #F1F5F9', position: 'sticky', top: 0, zIndex: 100 }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ background: '#4F46E5', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Monitor size={16} color="white" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: '18px' }}>Lumina<span style={{ color: '#4F46E5' }}>LMS</span></span>
                    </div>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        {['Platform', 'Solutions', 'Resources', 'Pricing'].map(item => (
                            <span key={item} style={{ fontSize: '14px', fontWeight: 600, color: item === 'Resources' ? '#4F46E5' : '#64748B', cursor: 'pointer' }}>{item}</span>
                        ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 700 }}>Log In</span>
                        <button style={{ background: '#4F46E5', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', fontWeight: 700, fontSize: '14px' }}>Get Started</button>
                    </div>
                </div>
            </nav>

            {/* Hero Guide */}
            <div style={{ padding: '60px 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', border: '1px solid #E5E7EB', display: 'grid', gridTemplateColumns: '1.2fr 1fr', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                        <div style={{ padding: '60px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#EEF2FF', padding: '6px 14px', borderRadius: '99px', width: 'fit-content', marginBottom: '32px' }}>
                                <div style={{ width: '6px', height: '6px', background: '#4F46E5', borderRadius: '50%' }}></div>
                                <span style={{ fontSize: '11px', fontWeight: 800, color: '#4F46E5', textTransform: 'uppercase', letterSpacing: '1px' }}>FEATURED GUIDE</span>
                            </div>
                            <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1 }}>
                                The Ultimate Guide to <br />
                                <span style={{ color: '#4F46E5', textDecoration: 'underline' }}>LMS Implementation</span> in 2024
                            </h1>
                            <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.6, marginBottom: '40px', maxWidth: '480px' }}>
                                Learn how to scale your corporate training program with our comprehensive framework designed for high-growth enterprises.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <button style={{ background: '#4F46E5', color: 'white', border: 'none', borderRadius: '12px', padding: '16px 28px', fontWeight: 700, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    Download Now <Download size={20} />
                                </button>
                                <div style={{ fontSize: '13px', color: '#9CA3AF', fontWeight: 500 }}>24-page PDF • 1.2 MB</div>
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div style={{ padding: '20px 0', borderBottom: '1px solid #E5E7EB' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        {categories.map((cat, i) => (
                            <button key={i} style={{
                                background: i === 0 ? '#4F46E5' : 'white',
                                color: i === 0 ? 'white' : '#6B7280',
                                padding: '10px 20px',
                                borderRadius: '12px',
                                border: i === 0 ? 'none' : '1px solid #E5E7EB',
                                fontSize: '14px',
                                fontWeight: 600
                            }}>
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            style={{ padding: '12px 16px 12px 48px', borderRadius: '14px', border: '1px solid #E5E7EB', width: '300px', fontSize: '14px', outline: 'none' }}
                        />
                    </div>
                </div>
            </div>

            {/* Resource Grid */}
            <div style={{ padding: '60px 0 100px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                        {resources.slice(0, 3).map((res, i) => (
                            <div key={i} style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', border: '1px solid #E5E7EB' }}>
                                <img src={res.img} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '32px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
                                        <span style={{ fontSize: '10px', fontWeight: 800, color: '#4F46E5', background: '#EEF2FF', padding: '4px 8px', borderRadius: '6px' }}>{res.type}</span>
                                        <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 500 }}>{res.duration}</span>
                                    </div>
                                    <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>{res.title}</h3>
                                    <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: '24px' }}>{res.desc}</p>
                                    <span style={{ color: '#4F46E5', fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                        {res.action} <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Newsletter Card */}
                        <div style={{ gridColumn: 'span 2', background: '#4F46E5', borderRadius: '24px', padding: '60px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', color: 'white' }}>Stay ahead of the curve in L&D</h2>
                                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', maxWidth: '400px', lineHeight: 1.6, marginBottom: '32px' }}>
                                    Get monthly insights, exclusive whitepapers, and webinar invites delivered to your inbox.
                                </p>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <input type="email" placeholder="Email address" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '14px 20px', borderRadius: '12px', color: 'white', outline: 'none', width: '300px' }} />
                                    <button style={{ background: 'white', color: '#4F46E5', border: 'none', borderRadius: '12px', padding: '14px 28px', fontWeight: 700, fontSize: '15px' }}>Subscribe Now</button>
                                </div>
                                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '16px' }}>No spam. Unsubscribe anytime.</div>
                            </div>
                            <div style={{ position: 'absolute', right: '-40px', bottom: '-40px', opacity: 0.1 }}>
                                <Mail size={320} />
                            </div>
                        </div>

                        {/* Case Study Card */}
                        <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', border: '1px solid #E5E7EB' }}>
                            <div style={{ position: 'relative' }}>
                                <img src={resources[3].img} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'white', padding: '6px 12px', borderRadius: '8px', fontSize: '10px', fontWeight: 800 }}>CLIENT SUCCESS</div>
                            </div>
                            <div style={{ padding: '32px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
                                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#C2410C', background: '#FFF7ED', padding: '4px 8px', borderRadius: '6px' }}>{resources[3].type}</span>
                                    <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 500 }}>{resources[3].tag}</span>
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>{resources[3].title}</h3>
                                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: '24px' }}>{resources[3].desc}</p>
                                <span style={{ color: '#4F46E5', fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                    {resources[3].action} <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>

                        {/* Final Item */}
                        <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', border: '1px solid #E5E7EB' }}>
                            <div style={{ position: 'relative' }}>
                                <img src="https://images.unsplash.com/photo-1551288049-bbbda5366a71?q=80&w=400&auto=format&fit=crop" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '16px', right: '16px', background: '#4F46E5', color: 'white', padding: '4px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: 800 }}>COMING SOON</div>
                            </div>
                            <div style={{ padding: '32px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
                                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#4F46E5', background: '#EEF2FF', padding: '4px 8px', borderRadius: '6px' }}>WEBINAR</span>
                                    <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 500 }}>Oct 24, 2024</span>
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>AI-Driven Content Creation for Instructional Designers</h3>
                                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: '24px' }}>A practical workshop on using Generative AI to speed up course production without losing quality.</p>
                                <span style={{ color: '#4F46E5', fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                    Save My Spot <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <button style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '14px', padding: '16px 40px', fontWeight: 700 }}>Load More Resources</button>
                        <div style={{ marginTop: '20px', fontSize: '13px', color: '#9CA3AF' }}>Showing 6 of 42 resources</div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ background: 'white', borderTop: '1px solid #E5E7EB', padding: '80px 0 40px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                            <div style={{ background: '#4F46E5', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Monitor size={16} color="white" />
                            </div>
                            <span style={{ fontWeight: 800, fontSize: '18px' }}>Lumina<span style={{ color: '#4F46E5' }}>LMS</span></span>
                        </div>
                        <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.6, marginBottom: '32px', maxWidth: '300px' }}>
                            Empowering organizations to build a culture of continuous learning and professional growth through innovative technology.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <Globe size={18} color="#9CA3AF" />
                            <Instagram size={18} color="#9CA3AF" />
                            <Linkedin size={18} color="#9CA3AF" />
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, marginBottom: '24px', color: '#374151' }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#6B7280', fontSize: '14px' }}>
                            <span>Features</span>
                            <span>Integrations</span>
                            <span>Security</span>
                            <span>API</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, marginBottom: '24px', color: '#374151' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#6B7280', fontSize: '14px' }}>
                            <span>About Us</span>
                            <span>Careers</span>
                            <span>Contact</span>
                            <span>Partners</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 800, marginBottom: '24px', color: '#374151' }}>Support</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#6B7280', fontSize: '14px' }}>
                            <span>Help Center</span>
                            <span>Community</span>
                            <span>Status</span>
                            <span>Legal</span>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '1200px', margin: '80px auto 0', padding: '0 24px', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#9CA3AF' }}>
                    <span>© 2024 Lumina LMS SaaS. All rights reserved.</span>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookie Settings</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LuminaResources;
