"use client";
import AppLayout from "@/components/AppLayout";
import { HelpCircle, Timer, FileCheck, PlayCircle } from "lucide-react";

export default function Quizzes() {
    const quizzes = [
        { id: 1, title: 'React Hooks Deep Dive', course: 'Advanced React Architecture', questions: 20, timeLimit: '30 mins', difficulty: 'Intermediate', status: 'Available' },
        { id: 2, title: 'Network Security Basics', course: 'Cybersecurity Essentials', questions: 15, timeLimit: '20 mins', difficulty: 'Beginner', status: 'Completed', score: '93%' },
        { id: 3, title: 'Next.js API Routes', course: 'Advanced React Architecture', questions: 10, timeLimit: '15 mins', difficulty: 'Advanced', status: 'Available' },
    ];

    return (
        <AppLayout>
            <div style={{ marginBottom: '40px' }}>
                <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Quizzes & Assessments</h1>
                <p style={{ color: 'var(--text-muted)' }}>Test your knowledge and earn course credits.</p>
            </div>

            <div className="grid-3">
                {quizzes.map((quiz) => (
                    <div key={quiz.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="flex align-center justify-between" style={{ marginBottom: '20px' }}>
                            <div style={{ padding: '12px', background: 'var(--accent-blue)', color: 'var(--primary)', borderRadius: '12px' }}>
                                <HelpCircle size={24} />
                            </div>
                            <span className="badge-pill" style={{
                                background: quiz.status === 'Completed' ? '#DCFCE7' : 'var(--bg-soft)',
                                color: quiz.status === 'Completed' ? '#16A34A' : 'var(--text-muted)'
                            }}>
                                {quiz.status}
                            </span>
                        </div>

                        <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{quiz.title}</h3>
                        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>{quiz.course}</p>

                        <div className="flex column gap-12" style={{ marginBottom: '32px' }}>
                            <div className="flex align-center justify-between" style={{ fontSize: '14px' }}>
                                <span className="flex align-center gap-8 color-muted"><FileCheck size={16} /> Questions</span>
                                <span style={{ fontWeight: 600 }}>{quiz.questions}</span>
                            </div>
                            <div className="flex align-center justify-between" style={{ fontSize: '14px' }}>
                                <span className="flex align-center gap-8 color-muted"><Timer size={16} /> Time Limit</span>
                                <span style={{ fontWeight: 600 }}>{quiz.timeLimit}</span>
                            </div>
                            <div className="flex align-center justify-between" style={{ fontSize: '14px' }}>
                                <span className="flex align-center gap-8 color-muted"><PlayCircle size={16} /> Difficulty</span>
                                <span style={{ fontWeight: 600 }}>{quiz.difficulty}</span>
                            </div>
                        </div>

                        {quiz.status === 'Completed' ? (
                            <div style={{ marginTop: 'auto', textAlign: 'center', padding: '16px', background: '#F8FAFC', borderRadius: '12px' }}>
                                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Your Score</p>
                                <p style={{ fontSize: '24px', fontWeight: 800, color: '#16A34A' }}>{quiz.score}</p>
                            </div>
                        ) : (
                            <button className="btn btn-primary" style={{ marginTop: 'auto', width: '100%' }}>Start Quiz</button>
                        )}
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
