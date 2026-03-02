"use client";
import React from 'react';
import { Library, FileText, Download, Trash2, FolderPlus, Globe } from 'lucide-react';

export default function AdminLibrary() {
    const resources = [
        { name: 'Semester_Syllabus_2024.pdf', size: '2.4 MB', type: 'PDF', date: 'Mar 10' },
        { name: 'Advanced_Algebra_Guide.docx', size: '1.1 MB', type: 'Document', date: 'Mar 08' },
        { name: 'Lab_Safety_Protocol.zip', size: '15.2 MB', type: 'Archive', date: 'Mar 01' },
        { name: 'Asset_Pack_Physics.rar', size: '42.0 MB', type: 'Archive', date: 'Feb 25' }
    ];

    return (
        <div>
            <div className="flex justify-between align-center" style={{ marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 800 }}>Resource Library</h1>
                    <p style={{ color: '#64748B' }}>Centralized storage for all institutional assets and course materials.</p>
                </div>
                <div className="flex gap-12">
                    <button className="btn btn-outline"><FolderPlus size={18} /> New Folder</button>
                    <button className="btn btn-primary">Upload Asset</button>
                </div>
            </div>

            <div className="grid grid-4" style={{ gap: '24px', marginBottom: '40px' }}>
                {['Documents', 'Images', 'Videos', 'Certificates'].map((label, i) => (
                    <div key={i} className="card" style={{ padding: '24px', background: 'white', textAlign: 'center' }}>
                        <div style={{ background: '#F8FAFC', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                            <Library size={20} color="#0066FF" />
                        </div>
                        <div style={{ fontSize: '15px', fontWeight: 700 }}>{label}</div>
                        <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>{i * 12 + 8} Files</div>
                    </div>
                ))}
            </div>

            <div className="card" style={{ background: 'white', padding: '0', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>File Name</th>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Size</th>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Type</th>
                            <th style={{ textAlign: 'right', padding: '16px 24px', fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Uploaded</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resources.map((file, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                <td style={{ padding: '16px 24px' }}>
                                    <div className="flex align-center gap-12">
                                        <FileText size={18} color="#64748B" />
                                        <span style={{ fontSize: '14px', fontWeight: 600 }}>{file.name}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '16px 24px', fontSize: '13px', color: '#64748B' }}>{file.size}</td>
                                <td style={{ padding: '16px 24px' }}>
                                    <span style={{ padding: '4px 8px', borderRadius: '4px', background: '#F1F5F9', fontSize: '11px', fontWeight: 800 }}>{file.type}</span>
                                </td>
                                <td style={{ padding: '16px 24px', textAlign: 'right', fontSize: '13px', color: '#64748B' }}>{file.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
