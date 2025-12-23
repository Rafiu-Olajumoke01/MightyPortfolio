import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaTasks, FaBrain, FaUserAlt, FaRocket, FaTools, FaBars, FaTimes } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiCss3, SiGit } from 'react-icons/si';
import './sidebar.css';

function Sidebar() {
  const location = useLocation();
  const [hoveredStack, setHoveredStack] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { path: '/home', icon: FaHome, label: 'Home', badge: null },
    { path: '/mindset', icon: FaBrain, label: 'Mindset', badge: 'unique' },
    { path: '/kanban', icon: FaTasks, label: 'Kanban', badge: 'live' },
    { path: '/arsenal', icon: FaTools, label: 'Arsenal', badge: null },
    { path: '/journey', icon: FaUserAlt, label: 'Journey', badge: null }
  ];

  const techStack = [
    { name: 'React', icon: SiReact, color: '#61DAFB', level: 95 },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 90 },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 85 },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 80 },
    { name: 'CSS', icon: SiCss3, color: '#1572B6', level: 92 },
    { name: 'Git', icon: SiGit, color: '#F05032', level: 88 }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
    

      {/* Sidebar */}
      <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
        {/* Profile Section */}
        <div className="sidebar-profile">
          <div className="profile-avatar">RO</div>
          <h3 className="profile-name">Rafiu Olajumoke</h3>
          <p className="profile-role">Fullstack Developer</p>
          <div className="profile-status">
            <span className="status-dot"></span>
            <span>Available for work</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">
          <h4 className="nav-title">Navigation</h4>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link 
                key={item.path}
                to={item.path} 
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={closeSidebar}
              >
                <Icon className="nav-icon" />
                <span className="nav-label">{item.label}</span>
                {item.badge && (
                  <span className={`nav-badge ${item.badge}`}>
                    {item.badge === 'unique' ? '✨' : '🟢'}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Tech Stack Section */}
        <div className="sidebar-stack">
          <h4 className="stack-title">Tech Arsenal</h4>
          <div className="stack-list">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              const isHovered = hoveredStack === index;
              
              return (
                <div 
                  key={tech.name}
                  className="stack-item"
                  onMouseEnter={() => setHoveredStack(index)}
                  onMouseLeave={() => setHoveredStack(null)}
                >
                  <div className="stack-info">
                    <Icon className="stack-icon" style={{ color: tech.color }} />
                    <span className="stack-name">{tech.name}</span>
                  </div>
                  {isHovered && (
                    <div className="stack-level">
                      <div className="level-bar">
                        <div 
                          className="level-fill" 
                          style={{ width: `${tech.level}%`, backgroundColor: tech.color }}
                        ></div>
                      </div>
                      <span className="level-text">{tech.level}%</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="sidebar-footer">
          <div className="footer-stat">
            <span className="stat-number">24</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="footer-stat">
            <span className="stat-number">1.2K</span>
            <span className="stat-label">Commits</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;