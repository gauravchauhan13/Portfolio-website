import React, { useState, useEffect } from 'react';
import { FaCode } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`navbar navbar-expand-lg navbar-dark fixed-top transition-all ${
        scrolled ? 'bg-dark shadow-lg' : 'bg-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(88, 166, 255, 0.2)' : 'none',
        transition: 'all 0.3s ease',
        zIndex: 1000
      }}
    >
      <div className="container">
        <button
          className="navbar-brand fw-bold btn btn-link text-decoration-none p-0"
          onClick={() => scrollToSection('hero')}
          style={{ 
            background: 'none',
            border: 'none',
            color: 'inherit',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = theme.primary;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'inherit';
          }}
        >
          <FaCode className="me-2" style={{ color: theme.primary }} />
          Gaurav Chauhan
        </button>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{ boxShadow: 'none' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {navItems.map((item) => (
              <li className="nav-item mx-1" key={item.id}>
                <button
                  className={`nav-link btn btn-link text-decoration-none px-3 py-2 rounded-pill ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: activeSection === item.id 
                      ? `rgba(${theme.glowColor}, 0.2)` 
                      : 'transparent',
                    color: activeSection === item.id ? theme.primary : 'inherit',
                    border: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.backgroundColor = `rgba(${theme.glowColor}, 0.1)`;
                      e.target.style.color = theme.primary;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'inherit';
                    }
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
