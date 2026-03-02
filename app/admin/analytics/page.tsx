"use client";
import React from 'react';
import { BarChart3, TrendingUp, Users, Clock, Globe, ArrowUpRight } from 'lucide-react';

export default function AdminAnalytics() {
    return (
        <div>
            <div className="flex justify-between align-center" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 800 }}>Platform Analytics</h1>
                    <p style={{ color: '#64748B' }}>Deep dive into user behavior and system performance metrics.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <select style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid #E2E8F0', outline: 'none' }}>
                        <option>Last 30 Days</option>
                        <option>Last 6 Months</option>
                        <option>Year to Date</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-3" style={{ marginBottom: '40px' }}>
                <div className="card" style={{ padding: '32px', background: 'white' }}>
                    <div className="flex justify-between align-center" style={{ marginBottom: '16px' }}>
                        <h4 style={{ color: '#64748B', fontSize: '14px' }}>Avg. Session Duration</h4>
                        <Clock size={20} color="#0066FF" />
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 800 }}>24m 12s</div>
                    <div style={{ color: '#10B981', fontSize: '13px', fontWeight: 700, marginTop: '12px' }}>+14.2% from last month</div>
                </div>
                <div className="card" style={{ padding: '32px', background: 'white' }}>
                    <div className="flex justify-between align-center" style={{ marginBottom: '16px' }}>
                        <h4 style={{ color: '#64748B', fontSize: '14px' }}>Global Reach</h4>
                        <Globe size={20} color="#8B5CF6" />
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 800 }}>42 Countries</div>
                    <div style={{ color: '#10B981', fontSize: '13px', fontWeight: 700, marginTop: '12px' }}>New: Vietnam, Brazil</div>
                </div>
                <div className="card" style={{ padding: '32px', background: 'white' }}>
                    <div className="flex justify-between align-center" style={{ marginBottom: '16px' }}>
                        <h4 style={{ color: '#64748B', fontSize: '14px' }}>Active Learners (%)</h4>
                        <Users size={20} color="#F59E0B" />
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 800 }}>82.4%</div>
                    <div style={{ color: '#10B981', fontSize: '13px', fontWeight: 700, marginTop: '12px' }}>Retention stable</div>
                </div>
            </div>

            {/* Placeholder for Charts */}
            <div className="card" style={{ background: 'white', padding: '40px', textAlign: 'center', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ background: '#F8FAFC', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <BarChart3 size={32} color="#0066FF" />
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Engagement Pipeline</h3>
                <p style={{ color: '#64748B', maxWidth: '400px' }}>Interactive data visualization with real-time streaming is being processed. Select a segment to see details.</p>
                <div style={{ marginTop: '32px', width: '100%', maxWidth: '600px', height: '150px', display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
                    {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                        <div key={i} style={{ flex: 1, background: i === 7 ? '#0066FF' : '#E2E8F0', height: `${h}%`, borderRadius: '6px 6px 0 0' }}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
