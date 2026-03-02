"use client";
import AppLayout from "@/components/AppLayout";
import { CreditCard, Check, ShieldCheck, History, Download } from "lucide-react";

export default function Billing() {
    const plans = [
        { name: 'Basic', price: 'Free', features: ['Access to 50+ free courses', 'Community forum access', 'Public profile'], isCurrent: false },
        { name: 'Pro', price: '$19', features: ['All Basic features', 'Access to 500+ premium courses', 'Offline viewing', 'Course certificates'], isCurrent: true },
        { name: 'Business', price: '$49', features: ['All Pro features', 'Team management', 'Advanced analytics', 'Custom learning paths'], isCurrent: false },
    ];

    const history = [
        { date: 'Feb 15, 2026', amount: '$19.00', status: 'Success', method: '•••• 4242' },
        { date: 'Jan 15, 2026', amount: '$19.00', status: 'Success', method: '•••• 4242' },
    ];

    return (
        <AppLayout>
            <div style={{ marginBottom: '40px' }}>
                <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Billing & Subscription</h1>
                <p style={{ color: 'var(--text-muted)' }}>Manage your payment methods and subscription plans.</p>
            </div>

            <div className="grid-3" style={{ marginBottom: '48px' }}>
                {plans.map((plan, i) => (
                    <div key={i} className="card" style={{
                        border: plan.isCurrent ? '2px solid var(--primary)' : '1px solid transparent',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div className="flex align-center justify-between" style={{ marginBottom: '20px' }}>
                            <h3 style={{ fontSize: '20px' }}>{plan.name}</h3>
                            {plan.isCurrent && <span className="badge-pill badge-blue">Current Plan</span>}
                        </div>
                        <div style={{ marginBottom: '32px' }}>
                            <span style={{ fontSize: '40px', fontWeight: 800 }}>{plan.price}</span>
                            <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>/month</span>
                        </div>
                        <div className="flex column gap-16" style={{ marginBottom: '40px' }}>
                            {plan.features.map((feature, j) => (
                                <div key={j} className="flex align-center gap-12" style={{ fontSize: '14px' }}>
                                    <Check size={18} color="var(--primary)" /> {feature}
                                </div>
                            ))}
                        </div>
                        <button className={`btn ${plan.isCurrent ? 'btn-outline' : 'btn-primary'}`} style={{ width: '100%', marginTop: 'auto' }}>
                            {plan.isCurrent ? 'Manage Plan' : 'Upgrade Now'}
                        </button>
                    </div>
                ))}
            </div>

            <div className="card" style={{ padding: '40px' }}>
                <div className="flex align-center gap-12" style={{ marginBottom: '32px' }}>
                    <History size={24} color="var(--primary)" />
                    <h3 style={{ fontSize: '20px' }}>Payment History</h3>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--border)' }}>
                            <th style={{ textAlign: 'left', padding: '16px', color: 'var(--text-muted)', fontSize: '13px' }}>Date</th>
                            <th style={{ textAlign: 'left', padding: '16px', color: 'var(--text-muted)', fontSize: '13px' }}>Amount</th>
                            <th style={{ textAlign: 'left', padding: '16px', color: 'var(--text-muted)', fontSize: '13px' }}>Status</th>
                            <th style={{ textAlign: 'left', padding: '16px', color: 'var(--text-muted)', fontSize: '13px' }}>Method</th>
                            <th style={{ textAlign: 'right', padding: '16px', color: 'var(--text-muted)', fontSize: '13px' }}>Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item, i) => (
                            <tr key={i} style={{ borderBottom: i === history.length - 1 ? 'none' : '1px solid var(--border)' }}>
                                <td style={{ padding: '20px 16px', fontWeight: 600 }}>{item.date}</td>
                                <td style={{ padding: '20px 16px', fontWeight: 700 }}>{item.amount}</td>
                                <td style={{ padding: '20px 16px' }}>
                                    <span className="badge-pill" style={{ background: '#DCFCE7', color: '#16A34A', fontSize: '11px' }}>{item.status}</span>
                                </td>
                                <td style={{ padding: '20px 16px', color: 'var(--text-muted)', fontSize: '14px' }}>{item.method}</td>
                                <td style={{ padding: '20px 16px', textAlign: 'right' }}>
                                    <button style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '14px' }} className="flex align-center justify-end gap-6 w-full">
                                        <Download size={16} /> PDF
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
