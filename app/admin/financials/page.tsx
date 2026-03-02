"use client";
import React from 'react';
import { CreditCard, DollarSign, Download, ArrowUpRight, TrendingUp, History } from 'lucide-react';

export default function AdminFinancials() {
    const transactions = [
        { id: 'TX-9021', user: 'Sarah Jenkins', amount: '$120.00', status: 'Success', date: 'Mar 12, 11:20 AM' },
        { id: 'TX-9020', user: 'Marcus Wright', amount: '$45.00', status: 'Success', date: 'Mar 12, 09:15 AM' },
        { id: 'TX-9019', user: 'Elena Gilbert', amount: '$299.00', status: 'Pending', date: 'Mar 11, 04:30 PM' },
        { id: 'TX-9018', user: 'Gary Simon', amount: '$75.00', status: 'Success', date: 'Mar 11, 01:20 PM' }
    ];

    return (
        <div>
            <div className="flex justify-between align-center" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 800 }}>Financial Overview</h1>
                    <p style={{ color: '#64748B' }}>Track subscription revenue, payouts, and transaction history.</p>
                </div>
                <button className="btn btn-outline"><Download size={18} /> Download Statements</button>
            </div>

            <div className="grid grid-3" style={{ marginBottom: '40px' }}>
                <div className="card" style={{ padding: '32px', background: 'white' }}>
                    <div className="flex justify-between align-center" style={{ marginBottom: '16px' }}>
                        <h4 style={{ color: '#64748B', fontSize: '14px' }}>Total ARR</h4>
                        <TrendingUp size={20} color="#10B981" />
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 800 }}>$1.2M</div>
                    <div style={{ color: '#10B981', fontSize: '13px', fontWeight: 700, marginTop: '12px' }}>+22% year-over-year</div>
                </div>
                <div className="card" style={{ padding: '32px', background: '#0F172A', color: 'white' }}>
                    <div className="flex justify-between align-center" style={{ marginBottom: '16px' }}>
                        <h4 style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Available for Payout</h4>
                        <CreditCard size={20} color="#0066FF" />
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'white' }}>$42,800</div>
                    <button style={{ marginTop: '16px', color: '#0066FF', background: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 800 }}>Withdraw Funds</button>
                </div>
                <div className="card" style={{ padding: '32px', background: 'white' }}>
                    <div className="flex justify-between align-center" style={{ marginBottom: '16px' }}>
                        <h4 style={{ color: '#64748B', fontSize: '14px' }}>Active Subscriptions</h4>
                        <div style={{ background: '#F1F5F9', padding: '6px', borderRadius: '6px' }}><History size={16} /></div>
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 800 }}>842</div>
                    <div style={{ color: '#64748B', fontSize: '13px', fontWeight: 700, marginTop: '12px' }}>Churn Rate: 1.2%</div>
                </div>
            </div>

            <div className="card" style={{ background: 'white', padding: '0', overflow: 'hidden' }}>
                <div style={{ padding: '24px', borderBottom: '1px solid #F1F5F9' }}>
                    <h3 style={{ fontSize: '18px' }}>Recent Transactions</h3>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>TX ID</th>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Customer</th>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Amount</th>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Status</th>
                            <th style={{ textAlign: 'right', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((tx, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: 700 }}>{tx.id}</td>
                                <td style={{ padding: '16px 24px', fontSize: '14px' }}>{tx.user}</td>
                                <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 700, color: '#1E293B' }}>{tx.amount}</td>
                                <td style={{ padding: '16px 24px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        borderRadius: '20px',
                                        fontSize: '11px',
                                        fontWeight: 800,
                                        background: tx.status === 'Success' ? '#DCFCE7' : '#FEF3C7',
                                        color: tx.status === 'Success' ? '#16A34A' : '#92400E'
                                    }}>
                                        {tx.status}
                                    </span>
                                </td>
                                <td style={{ padding: '16px 24px', textAlign: 'right', fontSize: '13px', color: '#64748B' }}>{tx.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
