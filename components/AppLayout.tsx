"use client";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { Bell, Search, User, Menu, X, Rocket } from "lucide-react";

import { usePathname } from "next/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    // Config for pages that should NOT have a sidebar
    const noSidebarPaths = ['/help', '/terms', '/privacy', '/auth'];
    const showSidebar = !noSidebarPaths.some(p => pathname.startsWith(p));

    // Prevent scrolling when mobile sidebar is open
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isSidebarOpen]);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFC', position: 'relative' }}>
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && showSidebar && (
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
            {showSidebar && (
                <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
                    {/* Mobile Close Button */}
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="close-sidebar-btn desktop-hide"
                    >
                        <X size={24} />
                    </button>
                    <Sidebar />
                </div>
            )}

            <main className="main-content">
                {/* Fixed Top Glass Header */}
                <header className="fixed-header">
                    <div className="header-left">
                        {showSidebar && (
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="mobile-menu-btn"
                            >
                                <Menu size={24} />
                            </button>
                        )}

                        <div className="search-wrapper mobile-hide">
                            <Search size={18} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search courses, docs, labs..."
                                className="search-input"
                            />
                        </div>

                        {!showSidebar && (
                            <Link href="/" className="logo-mobile">
                                <Rocket size={24} color="#FF7D00" />
                                <span style={{ fontWeight: 950, fontSize: '22px', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>LMS ZONE</span>
                            </Link>
                        )}

                        {showSidebar && (
                            <div className="logo-mobile desktop-hide">
                                <Rocket size={18} color="#FF7D00" />
                                <span style={{ fontWeight: 950, fontSize: '18px', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>LMS</span>
                            </div>
                        )}
                    </div>

                    <div className="header-right">
                        <button className="icon-btn mobile-hide">
                            <Bell size={20} />
                            <span className="notification-dot"></span>
                        </button>

                        <div className="user-profile">
                            <div className="user-text mobile-hide">
                                <p className="user-name">Alex Rivers</p>
                                <p className="user-role">{pathname.startsWith('/tutor') ? 'Premium Instructor' : 'Stellar Scholar'}</p>
                            </div>
                            <div className="user-avatar-hex">
                                <User size={20} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content Container */}
                <div className="page-container">
                    <div className="content-inner animate-fade">
                        {children}
                    </div>
                </div>
            </main>

            <style jsx>{`
                .sidebar-container {
                    position: fixed;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    height: 100dvh;
                    z-index: 1000;
                    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    width: 300px;
                    border-right: 1px solid rgba(0,0,0,0.05);
                }

                .main-content {
                    flex: 1;
                    margin-left: ${showSidebar ? '300px' : '0'};
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    background: var(--bg-soft);
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .fixed-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    background: rgba(248, 250, 252, 0.8);
                    backdrop-filter: blur(24px) saturate(180%);
                    padding: 24px 60px;
                    border-bottom: 1px solid rgba(0,0,0,0.04);
                }

                .header-left, .header-right {
                    display: flex;
                    align-items: center;
                    gap: 32px;
                }

                .search-wrapper {
                    position: relative;
                    width: 400px;
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
                    padding: 16px 20px 16px 56px;
                    border-radius: 18px;
                    border: 1px solid #E2E8F0;
                    background: white;
                    font-size: 15px;
                    font-weight: 600;
                    outline: none;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: var(--shadow-sm);
                }

                .search-input:focus {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 4px rgba(255,125,0,0.1);
                    width: 420px;
                }

                .logo-mobile {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .icon-btn {
                    position: relative;
                    width: 48px;
                    height: 48px;
                    border-radius: 16px;
                    background: white;
                    border: 1px solid #E2E8F0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #0F172A;
                    transition: all 0.2s;
                    box-shadow: var(--shadow-sm);
                }

                .icon-btn:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                    transform: translateY(-2px);
                }

                .notification-dot {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    width: 10px;
                    height: 10px;
                    background: #FF7D00;
                    border-radius: 50%;
                    border: 2px solid white;
                }

                .user-profile {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 8px 8px 8px 20px;
                    background: white;
                    border-radius: 20px;
                    border: 1px solid #E2E8F0;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: var(--shadow-sm);
                }

                .user-profile:hover {
                    border-color: var(--primary);
                    transform: translateY(-2px);
                }

                .user-name {
                    font-size: 15px;
                    font-weight: 950;
                    color: #0F172A;
                    font-family: var(--font-heading);
                    margin: 0;
                    letter-spacing: -0.02em;
                }

                .user-role {
                    font-size: 12px;
                    color: #64748B;
                    font-weight: 700;
                    margin: 0;
                }

                .user-avatar-hex {
                    width: 40px;
                    height: 40px;
                    border-radius: 12px;
                    background: linear-gradient(135deg, #FF7D00 0%, #FFB444 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }

                .page-container {
                    padding: 60px;
                    flex: 1;
                    display: flex;
                    justify-content: center;
                }

                .content-inner {
                    width: 100%;
                    max-width: 1440px;
                }

                .mobile-menu-btn {
                    display: none;
                    color: #0F172A;
                    padding: 10px;
                    background: white;
                    border-radius: 14px;
                    box-shadow: var(--shadow-md);
                    border: 1px solid #E2E8F0;
                }

                .close-sidebar-btn {
                    position: absolute;
                    top: 24px;
                    right: -60px;
                    width: 48px;
                    height: 48px;
                    background: white;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #0F172A;
                    box-shadow: var(--shadow-xl);
                    border: none;
                    z-index: 1001;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .close-sidebar-btn:active {
                    transform: scale(0.9);
                }

                @media (max-width: 1024px) {
                    .sidebar-container {
                        transform: translateX(-100%);
                    }
                    .sidebar-container.open {
                        transform: translateX(0);
                    }
                    .main-content {
                        margin-left: 0 !important;
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                    .fixed-header {
                        padding: 16px 24px;
                    }
                    .page-container {
                        padding: 32px 24px;
                    }
                }

                @media (max-width: 640px) {
                    .mobile-hide { display: none; }
                    .desktop-hide { display: flex !important; }
                    .close-sidebar-btn {
                        right: 20px;
                        top: 20px;
                        background: #F1F5F9;
                    }
                }
            `}</style>
        </div>
    );
}


