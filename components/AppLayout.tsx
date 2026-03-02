"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { Bell, Search, User, Menu, X } from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFC', position: 'relative' }}>
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(15, 23, 42, 0.4)',
                        backdropFilter: 'blur(4px)',
                        zIndex: 90,
                        transition: 'opacity 0.3s ease'
                    }}
                />
            )}

            {/* Sidebar with dynamic mobile class */}
            <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
                <Sidebar />
            </div>

            <main className="main-content">
                {/* Fixed Top Glass Header */}
                <header className="fixed-header">
                    <div className="header-left">
                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="mobile-menu-btn"
                        >
                            <Menu size={24} />
                        </button>

                        <div className="search-container animate-slide-up">
                            <Search size={18} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Find resources..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <div className="flex align-center gap-24 animate-slide-up delay-1">
                        <button className="notification-btn hover-scale mobile-hide">
                            <Bell size={22} />
                            <span className="notification-dot"></span>
                        </button>

                        <div className="user-pill hover-scale">
                            <div className="mobile-hide">
                                <p className="user-name">Alex Rivers</p>
                                <p className="user-role">Pro Learner</p>
                            </div>
                            <div className="user-avatar">
                                <User size={22} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content Container */}
                <div className="content-inner animate-fade">
                    {children}
                </div>
            </main>

            <style jsx>{`
                .sidebar-container {
                    position: fixed;
                    left: 0;
                    top: 0;
                    height: 100vh;
                    z-index: 100;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .main-content {
                    flex: 1;
                    padding: 40px 60px;
                    margin-left: 280px;
                    min-width: 0;
                }

                .fixed-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 48px;
                    position: sticky;
                    top: 0;
                    z-index: 80;
                    background: rgba(248, 250, 252, 0.85);
                    backdrop-filter: blur(12px);
                    padding: 16px 0;
                }

                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    flex: 1;
                    max-width: 500px;
                }

                .mobile-menu-btn {
                    display: none;
                    color: #0F172A;
                    padding: 8px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                }

                .search-container {
                    position: relative;
                    width: 100%;
                }

                .search-icon {
                    position: absolute;
                    left: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #94A3B8;
                }

                .search-input {
                    width: 100%;
                    padding: 14px 20px 14px 56px;
                    border-radius: 20px;
                    border: 1px solid #E2E8F0;
                    background: white;
                    font-size: 14px;
                    font-weight: 500;
                    outline: none;
                    transition: all 0.3s ease;
                }

                .search-input:focus {
                    border-color: #FF7D00;
                    box-shadow: 0 0 0 4px rgba(255,125,0,0.05);
                }

                .notification-btn {
                    position: relative;
                    color: #64748B;
                    background: white;
                    width: 44px;
                    height: 44px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #E2E8F0;
                }

                .notification-dot {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 8px;
                    height: 8px;
                    background: #FF7D00;
                    border-radius: 50%;
                    border: 2px solid white;
                }

                .user-pill {
                    padding: 6px 6px 6px 16px;
                    background: white;
                    border-radius: 20px;
                    border: 1px solid #E2E8F0;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .user-name {
                    font-size: 13px;
                    font-weight: 950;
                    color: #0F172A;
                    font-family: var(--font-heading);
                    line-height: 1;
                    margin-bottom: 2px;
                }

                .user-role {
                    font-size: 10px;
                    color: #64748B;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .user-avatar {
                    width: 36px;
                    height: 36px;
                    border-radius: 12px;
                    background: linear-gradient(135deg, #FF7D00 0%, #FFB444 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }

                .content-inner {
                    max-width: 1400px;
                    margin: 0 auto;
                }

                @media (max-width: 1024px) {
                    .sidebar-container {
                        transform: translateX(-100%);
                    }
                    .sidebar-container.open {
                        transform: translateX(0);
                    }
                    .main-content {
                        margin-left: 0;
                        padding: 24px 20px;
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                    .mobile-hide {
                        display: none;
                    }
                    .fixed-header {
                        padding: 10px 0;
                        margin-bottom: 32px;
                    }
                    .search-container {
                        max-width: none;
                    }
                }
            `}</style>
        </div>
    );
}


