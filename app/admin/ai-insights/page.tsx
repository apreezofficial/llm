"use client";
import React from 'react';
import { Sparkles, Brain, Zap, Target, ArrowRight, Lightbulb } from 'lucide-react';

export default function AdminAIInsights() {
    return (
        <div>
            <div className="flex justify-between align-center" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 800 }}>AI Insights</h1>
                    <p style={{ color: '#64748B' }}>Predictive modeling and intelligent recommendations for institutional growth.</p>
                </div>
                <button className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #0066FF 0%, #8B5CF6 100%)', border: 'none' }}>
                    <Zap size={18} /> Run Deep Analysis
                </button>
            </div>

            <div className="grid grid-2" style={{ gap: '32px', marginBottom: '40px' }}>
                <div className="card" style={{ padding: '32px', background: 'white', border: '1px solid transparent', borderImage: 'linear-gradient(135deg, #0066FF 0%, #8B5CF6 100%) 1' }}>
                    <div className="flex align-center gap-12" style={{ marginBottom: '24px' }}>
                        <div style={{ background: '#EEF2FF', padding: '12px', borderRadius: '12px' }}>
                            <Brain size={24} color="#0066FF" />
                        </div>
                        <h3 style={{ fontSize: '20px' }}>Student Attrition Warning</h3>
                    </div>
                    <p style={{ color: '#64748B', marginBottom: '24px', lineHeight: 1.6 }}>
                        AI models have identified 12 students in the &quot;Advanced Physics&quot; course who are at high risk of dropping out based on sudden engagement dips.
                    </p>
                    <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Review Risk Profiles <ArrowRight size={18} /></button>
                </div>

                <div className="card" style={{ padding: '32px', background: 'white' }}>
                    <div className="flex align-center gap-12" style={{ marginBottom: '24px' }}>
                        <div style={{ background: '#F5F3FF', padding: '12px', borderRadius: '12px' }}>
                            <Target size={24} color="#8B5CF6" />
                        </div>
                        <h3 style={{ fontSize: '20px' }}>Course Optimization</h3>
                    </div>
                    <p style={{ color: '#64748B', marginBottom: '24px', lineHeight: 1.6 }}>
                        Module 3 in &quot;Data Science Essentials&quot; has a 40% higher failure rate than average. Recommended action: Simplify quiz difficulty or add tutorial video.
                    </p>
                    <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Optimize Content <ArrowRight size={18} /></button>
                </div>
            </div>

            <div className="card" style={{ padding: '32px', background: '#F8FAFC' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '24px' }} className="flex align-center gap-8">
                    <Lightbulb size={20} color="#F59E0B" /> Smart Suggestions
                </h3>
                <div className="flex column gap-16">
                    {[
                        'Expand marketing to Southeast Asia (predicted 15% increase in enrollment).',
                        'Introduce a "Python for Finance" micro-degree based on search trends.',
                        'Automate certificate issuance for the "Summer BootCamp" series.'
                    ].map((s, i) => (
                        <div key={i} className="flex align-center gap-12" style={{ padding: '16px', background: 'white', borderRadius: '12px', fontSize: '14px', border: '1px solid #E2E8F0' }}>
                            <Sparkles size={16} color="#0066FF" />
                            {s}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
