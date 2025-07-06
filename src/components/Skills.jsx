import React, { useState, useEffect, useRef } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
  FaPython, FaJava, FaGitAlt, FaGithub, FaBootstrap,
  FaNodeJs, FaDatabase
} from 'react-icons/fa';
import { SiCplusplus, SiMongodb, SiExpress, SiVite } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skillCategories = {
  "Frontend": [
    { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={40} color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={40} color="#7952B3" /> },
    { name: 'Vite', icon: <SiVite size={40} color="#646CFF" /> },
  ],
  "Backend": [
    { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" /> },
    { name: 'Express', icon: <SiExpress size={40} color="#ffffff" /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
    { name: 'Python', icon: <FaPython size={40} color="#306998" /> },
  ],
  "Languages": [
    { name: 'Java', icon: <FaJava size={40} color="#007396" /> },
    { name: 'C/C++', icon: <SiCplusplus size={40} color="#00599C" /> },
  ],
  "Tools": [
    { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" /> },
    { name: 'GitHub', icon: <FaGithub size={40} color="#ffffff" /> },
    { name: 'VS Code', icon: <VscCode size={40} color="#007ACC" /> },
  ]
};

const FloatingParticle = ({ symbol, delay, duration, startX, startY }) => (
  <div
    className="floating-particle position-absolute"
    style={{
      left: `${startX}%`,
      top: `${startY}%`,
      fontSize: '1.5rem',
      color: 'rgba(88, 166, 255, 0.3)',
      animation: `float ${duration}s infinite ease-in-out`,
      animationDelay: `${delay}s`,
      pointerEvents: 'none',
      fontFamily: 'monospace',
      fontWeight: 'bold'
    }}
  >
    {symbol}
  </div>
);

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const skillsRef = useRef(null);
  
  const categories = Object.keys(skillCategories);
  const currentCategoryIndex = categories.indexOf(activeCategory);

  // Floating particles data
  const particles = [
    { symbol: '{}', delay: 0, duration: 6, startX: 10, startY: 20 },
    { symbol: '</>', delay: 1, duration: 8, startX: 85, startY: 30 },
    { symbol: '#', delay: 2, duration: 7, startX: 15, startY: 70 },
    { symbol: '()', delay: 3, duration: 9, startX: 90, startY: 60 },
    { symbol: '[]', delay: 4, duration: 5, startX: 25, startY: 15 },
    { symbol: '=>', delay: 5, duration: 7, startX: 75, startY: 80 },
    { symbol: '&&', delay: 6, duration: 6, startX: 5, startY: 50 },
    { symbol: '||', delay: 7, duration: 8, startX: 95, startY: 25 },
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (skillsRef.current && skillsRef.current.contains(event.target)) {
        switch (event.key) {
          case 'ArrowLeft':
            event.preventDefault();
            const prevIndex = currentCategoryIndex > 0 ? currentCategoryIndex - 1 : categories.length - 1;
            handleCategoryChange(categories[prevIndex]);
            break;
          case 'ArrowRight':
            event.preventDefault();
            const nextIndex = currentCategoryIndex < categories.length - 1 ? currentCategoryIndex + 1 : 0;
            handleCategoryChange(categories[nextIndex]);
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [activeCategory, categories, currentCategoryIndex]);

  // Smooth category transition
  const handleCategoryChange = (newCategory) => {
    if (newCategory === activeCategory) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveCategory(newCategory);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  return (
    <section 
      ref={skillsRef}
      className="py-5 bg-dark text-light position-relative overflow-hidden" 
      id="skills"
      tabIndex="0"
      style={{ outline: 'none' }}
    >
      {/* Background Elements */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 1, opacity: 0.05 }}>
        <div 
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(88, 166, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Floating Particles */}
        {particles.map((particle, index) => (
          <FloatingParticle key={index} {...particle} />
        ))}
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }} data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3 skills-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            <span 
              className="d-inline-block me-3 gradient-text"
              style={{
                background: 'linear-gradient(135deg, #58a6ff, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Technical
            </span>
            Skills
          </h2>
          <p className="text-secondary fs-5 mx-auto skills-description" style={{ 
            maxWidth: '600px',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            padding: '0 1rem'
          }}>
            A comprehensive overview of my technical expertise across different domains
          </p>
          <p className="text-muted small mt-2" style={{ opacity: 0.7 }}>
            Use ← → arrow keys to navigate between categories
          </p>
        </div>
        
        {/* Enhanced Category Navigation */}
        <div className="d-flex justify-content-center mb-5">
          <div 
            className="category-tabs-container p-2 position-relative"
            style={{ 
              background: 'linear-gradient(135deg, rgba(33, 38, 45, 0.8), rgba(33, 38, 45, 0.6))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(88, 166, 255, 0.2)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              borderRadius: '25px',
              width: '100%',
              maxWidth: '600px'
            }}
          >
            <div className="d-flex justify-content-center gap-1 flex-wrap">
              {Object.keys(skillCategories).map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={`category-tab btn rounded-pill fw-semibold position-relative overflow-hidden ${
                    activeCategory === category ? 'active' : ''
                  }`}
                  onClick={() => handleCategoryChange(category)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCategoryChange(category);
                    }
                  }}
                  tabIndex={0}
                  aria-label={`View ${category} skills`}
                  role="tab"
                  aria-selected={activeCategory === category}
                  style={{ 
                    background: activeCategory === category 
                      ? 'linear-gradient(135deg, #58a6ff, #1f6feb)' 
                      : 'transparent',
                    color: activeCategory === category ? 'white' : '#8b949e',
                    border: activeCategory === category 
                      ? 'none' 
                      : '1px solid rgba(139, 148, 158, 0.3)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: activeCategory === category ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: activeCategory === category 
                      ? '0 8px 25px rgba(88, 166, 255, 0.4)' 
                      : 'none',
                    flex: '1',
                    minWidth: '90px',
                    padding: '12px 16px',
                    fontSize: '0.9rem'
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== category) {
                      e.target.style.color = '#c9d1d9';
                      e.target.style.borderColor = 'rgba(88, 166, 255, 0.5)';
                      e.target.style.backgroundColor = 'rgba(88, 166, 255, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== category) {
                      e.target.style.color = '#8b949e';
                      e.target.style.borderColor = 'rgba(139, 148, 158, 0.3)';
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <span className="position-relative z-index-2">
                    {category}
                  </span>
                  
                  {/* Button glow effect */}
                  {activeCategory === category && (
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-pill"
                      style={{
                        background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                        animation: 'shimmer 2s infinite'
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="skills-grid-container">
          <div 
            className="row justify-content-center g-4"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            {skillCategories[activeCategory].map((skill, index) => (
              <div 
                key={`${activeCategory}-${index}`} 
                className="col-lg-3 col-md-4 col-sm-6"
                style={{
                  animationDelay: isTransitioning ? '0s' : `${index * 0.1}s`
                }}
              >
                <div 
                  className="skill-card position-relative text-center p-4 rounded-4 h-100 overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(33, 38, 45, 0.9), rgba(48, 54, 61, 0.7))',
                    border: '1px solid rgba(88, 166, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    animationDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.borderColor = '#58a6ff';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(88, 166, 255, 0.3)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(88, 166, 255, 0.1), rgba(124, 58, 237, 0.1))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(88, 166, 255, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(33, 38, 45, 0.9), rgba(48, 54, 61, 0.7))';
                  }}
                >
                  {/* Card background glow */}
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.icon.props.color}10 0%, transparent 70%)`,
                      opacity: 0.5
                    }}
                  />
                  
                  {/* Skill Icon */}
                  <div 
                    className="skill-icon mb-4 position-relative"
                    style={{ 
                      filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div 
                      className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle p-3"
                      style={{
                        background: `linear-gradient(135deg, ${skill.icon.props.color}20, ${skill.icon.props.color}10)`,
                        border: `2px solid ${skill.icon.props.color}40`,
                        width: '80px',
                        height: '80px'
                      }}
                    >
                      {React.cloneElement(skill.icon, { size: 36 })}
                    </div>
                  </div>
                  
                  {/* Skill Name */}
                  <h6 className="fw-bold text-white mb-3" style={{ fontSize: '1.1rem' }}>
                    {skill.name}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-20px) rotate(5deg); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-10px) rotate(-3deg); 
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-25px) rotate(8deg); 
            opacity: 0.7;
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        .skill-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .skill-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }
        
        .floating-particle {
          user-select: none;
          z-index: 0;
        }
        
        /* Focus styles for accessibility */
        .category-tab:focus {
          outline: 2px solid #58a6ff;
          outline-offset: 2px;
        }
        
        /* Smooth transitions for category changes */
        .skills-grid-container {
          min-height: 400px;
        }
        
        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .category-tabs-container {
            padding: 8px !important;
            margin: 0 16px !important;
            border-radius: 20px !important;
          }
          
          .category-tab {
            min-width: 80px !important;
            padding: 10px 12px !important;
            font-size: 0.85rem !important;
            flex: 1 !important;
          }
          
          .skill-card {
            padding: 1.5rem !important;
          }
          
          .icon-wrapper {
            width: 60px !important;
            height: 60px !important;
          }
        }
        
        @media (max-width: 576px) {
          .category-tabs-container {
            padding: 6px !important;
            margin: 0 12px !important;
            border-radius: 18px !important;
          }
          
          .category-tab {
            min-width: 70px !important;
            padding: 8px 10px !important;
            font-size: 0.8rem !important;
            flex: 1 !important;
            margin: 0 !important;
          }
          
          .d-flex.justify-content-center.gap-1.flex-wrap {
            gap: 4px !important;
          }
          
          .skill-card {
            padding: 1.25rem !important;
          }
          
          .icon-wrapper {
            width: 55px !important;
            height: 55px !important;
          }
        }
        
        @media (max-width: 400px) {
          .category-tabs-container {
            padding: 4px !important;
            margin: 0 8px !important;
            border-radius: 16px !important;
          }
          
          .category-tab {
            min-width: 60px !important;
            padding: 6px 8px !important;
            font-size: 0.75rem !important;
            flex: 1 !important;
          }
          
          .d-flex.justify-content-center.gap-1.flex-wrap {
            gap: 2px !important;
          }
          
          .skills-title {
            margin-bottom: 1rem !important;
          }
          
          .skills-description {
            font-size: 0.9rem !important;
            padding: 0 0.5rem !important;
          }
          
          .gradient-text {
            margin-right: 0.5rem !important;
          }
        }
        
        /* Touch devices optimization */
        @media (hover: none) and (pointer: coarse) {
          .category-tab {
            min-height: 44px !important; /* Touch target size */
          }
          
          .skill-card {
            transition: none !important;
          }
          
          .skill-card:hover {
            transform: none !important;
          }
        }
        
        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
