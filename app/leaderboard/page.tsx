"use client";
import AppLayout from "@/components/AppLayout";
import { Trophy, Medal, Star, TrendingUp } from "lucide-react";

export default function Leaderboard() {
    const topLearners = [
        { rank: 1, name: 'Alex Rivers', points: '12,450', courses: 24, badge: 'Grandmaster' },
        { rank: 2, name: 'Jordan Smith', points: '11,200', courses: 21, badge: 'Expert' },
        { rank: 3, name: 'Maria Garcia', points: '10,850', courses: 19, badge: 'Expert' },
        { rank: 4, name: 'Kevin Durant', points: '9,400', courses: 15, badge: 'Professional' },
        { rank: 5, name: 'Sarah Connor', points: '8,900', courses: 14, badge: 'Professional' },
    ];

    return (
        <AppLayout>
            <div style={{ marginBottom: '40px' }}>
                <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Leaderboard</h1>
                <p style={{ color: 'var(--text-muted)' }}>Top learners this month. Compete and earn badges!</p>
            </div>

            <div className="grid-3" style={{ marginBottom: '40px' }}>
                {[2, 1, 3].map((pos) => {
                    const user = topLearners.find(u => u.rank === pos);
                    return (
                        <div key={pos} className="card text-center" style={{
                            padding: pos === 1 ? '60px 32px' : '40px 32px',
                            transform: pos === 1 ? 'scale(1.05)' : 'none',
                            zIndex: pos === 1 ? 1 : 0,
                            border: pos === 1 ? '2px solid var(--primary)' : '1px solid transparent'
                        }}>
                            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
                                <div style={{ width: pos === 1 ? '100px' : '80px', height: pos === 1 ? '100px' : '80px', borderRadius: '50%', background: 'var(--border)', margin: '0 auto' }}></div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: pos === 1 ? '#F59E0B' : (pos === 2 ? '#94A3B8' : '#D97706'),
                                    color: 'white',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 800,
                                    border: '3px solid white'
                                }}>
                                    {pos}
                                </div>
                            </div>
                            <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{user?.name}</h3>
                            <p style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: 600, marginBottom: '16px' }}>{user?.badge}</p>
                            <div className="flex align-center justify-center gap-4" style={{ fontSize: '24px', fontWeight: 800 }}>
                                <Star size={20} fill="#F59E0B" style={{ color: '#F59E0B' }} /> {user?.points}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ background: 'var(--bg-soft)', borderBottom: '1px solid var(--border)' }}>
                        <tr>
                            <th style={{ padding: '20px 32px', textAlign: 'left', fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Rank</th>
                            <th style={{ padding: '20px 32px', textAlign: 'left', fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Learner</th>
                            <th style={{ padding: '20px 32px', textAlign: 'left', fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Badge</th>
                            <th style={{ padding: '20px 32px', textAlign: 'left', fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Courses</th>
                            <th style={{ padding: '20px 32px', textAlign: 'right', fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topLearners.map((user) => (
                            <tr key={user.rank} style={{ borderBottom: '1px solid var(--border)' }}>
                                <td style={{ padding: '24px 32px', fontWeight: 700 }}>#{user.rank}</td>
                                <td style={{ padding: '24px 32px' }}>
                                    <div className="flex align-center gap-12">
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--border)' }}></div>
                                        <span style={{ fontWeight: 600 }}>{user.name}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '24px 32px' }}>
                                    <span className="badge-pill" style={{ background: 'var(--bg-soft)', color: 'var(--secondary)' }}>{user.badge}</span>
                                </td>
                                <td style={{ padding: '24px 32px' }}>{user.courses}</td>
                                <td style={{ padding: '24px 32px', textAlign: 'right', fontWeight: 800, color: 'var(--primary)' }}>{user.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
