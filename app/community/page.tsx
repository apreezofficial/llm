"use client";
import AppLayout from "@/components/AppLayout";
import { MessageCircle, Heart, Share2, Send, Plus } from "lucide-react";

export default function Community() {
    const posts = [
        { id: 1, user: 'Elena Gilbert', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80', time: '2h ago', content: 'Just finished the Advanced React Architecture course! The section on micro-frontends was mind-blowing. Highly recommend it to everyone! 🚀', likes: 24, comments: 8 },
        { id: 2, user: 'Marcus Wright', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80', time: '5h ago', content: 'Does anyone have experience with Server Components in Next.js 15? I am having some issues with client-side state management. Any tips?', likes: 12, comments: 15 },
    ];

    return (
        <AppLayout>
            <div className="flex align-center justify-between" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Community Feed</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Connect, share, and learn with fellow students.</p>
                </div>
                <button className="btn btn-primary gap-8"><Plus size={18} /> New Post</button>
            </div>

            <div className="grid-2" style={{ gridTemplateColumns: '2fr 1fr' }}>
                <div className="flex column gap-24">
                    {posts.map((post) => (
                        <div key={post.id} className="card" style={{ padding: '32px' }}>
                            <div className="flex align-center justify-between" style={{ marginBottom: '20px' }}>
                                <div className="flex align-center gap-12">
                                    <img src={post.avatar} alt="" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                                    <div>
                                        <p style={{ fontWeight: 700 }}>{post.user}</p>
                                        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{post.time}</p>
                                    </div>
                                </div>
                                <button style={{ color: 'var(--text-muted)' }}>•••</button>
                            </div>
                            <p style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>{post.content}</p>
                            <div className="flex align-center gap-24" style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                                <button className="flex align-center gap-6" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                                    <Heart size={18} /> {post.likes}
                                </button>
                                <button className="flex align-center gap-6" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                                    <MessageCircle size={18} /> {post.comments}
                                </button>
                                <button className="flex align-center gap-6" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                                    <Share2 size={18} /> Share
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex column gap-24">
                    <div className="card" style={{ padding: '24px' }}>
                        <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Trending Topics</h3>
                        <div className="flex column gap-12">
                            {['#React19', '#NextJSFoundation', '#WebDev2026', '#AIinLearning', '#UXDesign'].map((tag, i) => (
                                <div key={i} className="flex align-center justify-between">
                                    <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{tag}</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{Math.floor(Math.random() * 1000)} posts</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card" style={{ padding: '24px' }}>
                        <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Suggested Peers</h3>
                        <div className="flex column gap-16">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex align-center justify-between">
                                    <div className="flex align-center gap-12">
                                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--border)' }}></div>
                                        <p style={{ fontWeight: 600, fontSize: '14px' }}>User {i + 1}</p>
                                    </div>
                                    <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: '12px' }}>Follow</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
