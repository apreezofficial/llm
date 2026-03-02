"use client";
import { useState } from "react";
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

                {/* Search for Mobile only */}
                <div className="mobile-search-bar desktop-hide">
                    <Search size={18} className="search-icon-mobile" />
                    <input type="text" placeholder="Search..." className="search-input-mobile" />
                </div>

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
                    height: 100vh;
                    z-index: 1000;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    width: 280px;
                }

                .main-content {
                    flex: 1;
                    margin-left: ${showSidebar ? '280px' : '0'};
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    background: #F8FAFC;
                    transition: all 0.4s ease;
                }

                .fixed-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    background: rgba(248, 250, 252, 0.85);
                    backdrop-filter: blur(20px);
                    padding: 20px 40px;
                    border-bottom: 1px solid rgba(0,0,0,0.03);
                }

                .header-left, .header-right {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .search-wrapper {
                    position: relative;
                    width: 320px;
                }

                .search-icon {
                    position: absolute;
                    left: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #94A3B8;
                }

                .search-input {
                    width: 100%;
                    padding: 12px 16px 12px 48px;
                    border-radius: 12px;
                    border: 1px solid #E2E8F0;
                    background: white;
                    font-size: 14px;
                    font-weight: 500;
                    outline: none;
                    transition: border-color 0.2s;
                }

                .search-input:focus {
                    border-color: #FF7D00;
                }

                .logo-mobile {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .icon-btn {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: white;
                    border: 1px solid #E2E8F0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #64748B;
                }

                .notification-dot {
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    width: 8px;
                    height: 8px;
                    background: #FF7D00;
                    border-radius: 50%;
                    border: 2px solid white;
                }

                .user-profile {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 6px 6px 6px 16px;
                    background: white;
                    border-radius: 14px;
                    border: 1px solid #E2E8F0;
                    cursor: pointer;
                }

                .user-name {
                    font-size: 14px;
                    font-weight: 800;
                    color: #0F172A;
                    font-family: var(--font-heading);
                    margin: 0;
                }

                .user-role {
                    font-size: 11px;
                    color: #64748B;
                    font-weight: 600;
                    margin: 0;
                }

                .user-avatar-hex {
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    background: linear-gradient(135deg, #FF7D00 0%, #FFB444 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }

                .mobile-search-bar {
                    padding: 0 20px 16px;
                    position: relative;
                }

                .search-input-mobile {
                    width: 100%;
                    padding: 12px 16px 12px 44px;
                    border-radius: 12px;
                    border: 1px solid #E2E8F0;
                    background: white;
                    font-size: 14px;
                    outline: none;
                }

                .search-icon-mobile {
                    position: absolute;
                    left: 36px;
                    top: 14px;
                    color: #94A3B8;
                }

                .page-container {
                    padding: 40px;
                    flex: 1;
                    display: flex;
                    justify-content: center;
                }

                .content-inner {
                    width: 100%;
                    max-width: 1200px;
                }

                .mobile-menu-btn {
                    display: none;
                    color: #0F172A;
                    padding: 8px;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
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
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                    .fixed-header {
                        padding: 16px 20px;
                    }
                    .page-container {
                        padding: 24px 20px;
                    }
                }

                @media (max-width: 640px) {
                    .mobile-hide { display: none; }
                    .desktop-hide { display: block; }
                }
                @media (min-width: 641px) {
                    .desktop-hide { display: none; }
                }
            `}</style>
        </div>
    );
}


