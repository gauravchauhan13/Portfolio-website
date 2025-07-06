import React, { createContext, useContext, useState, useEffect } from 'react';

// Persona definitions for smart theme detection
export const personas = {
  recruiter: {
    name: 'Recruiter/HR',
    description: 'Clean, professional appearance',
    preferredThemes: ['cleanWhite', 'githubLight', 'corporate'],
    keywords: ['hr', 'recruiter', 'hiring', 'talent', 'recruitment'],
    defaultTheme: 'corporate'
  },
  developer: {
    name: 'Developer',
    description: 'Code-focused, technical themes',
    preferredThemes: ['vscode', 'github', 'matrix', 'terminal'],
    keywords: ['dev', 'developer', 'engineer', 'programmer', 'coding'],
    defaultTheme: 'vscode'
  },
  designer: {
    name: 'Designer',
    description: 'Creative, visually appealing themes',
    preferredThemes: ['aurora', 'ocean', 'sunset', 'creative'],
    keywords: ['design', 'designer', 'ui', 'ux', 'creative'],
    defaultTheme: 'aurora'
  },
  student: {
    name: 'Student',
    description: 'Friendly, approachable themes',
    preferredThemes: ['softPastels', 'warmBeige', 'friendly', 'academic'],
    keywords: ['student', 'university', 'college', 'learning', 'education'],
    defaultTheme: 'friendly'
  },
  techLead: {
    name: 'Tech Lead/CTO',
    description: 'Sophisticated, executive themes',
    preferredThemes: ['cyberpunk', 'forest', 'executive', 'premium'],
    keywords: ['cto', 'lead', 'manager', 'director', 'executive'],
    defaultTheme: 'executive'
  },
  fintech: {
    name: 'Fintech Professional',
    description: 'Professional blues, trustworthy',
    preferredThemes: ['ocean', 'github', 'fintech', 'corporate'],
    keywords: ['fintech', 'finance', 'banking', 'investment', 'trading'],
    defaultTheme: 'fintech'
  },
  gaming: {
    name: 'Gaming Industry',
    description: 'Dark, vibrant, energetic',
    preferredThemes: ['cyberpunk', 'matrix', 'gaming', 'neon'],
    keywords: ['gaming', 'game', 'esports', 'entertainment'],
    defaultTheme: 'gaming'
  },
  healthcare: {
    name: 'Healthcare Professional',
    description: 'Calming, trustworthy themes',
    preferredThemes: ['softPastels', 'cleanWhite', 'medical', 'calm'],
    keywords: ['health', 'medical', 'healthcare', 'doctor', 'nurse'],
    defaultTheme: 'medical'
  },
  startup: {
    name: 'Startup Professional',
    description: 'Dynamic, innovative themes',
    preferredThemes: ['sunset', 'aurora', 'startup', 'dynamic'],
    keywords: ['startup', 'entrepreneur', 'innovation', 'venture'],
    defaultTheme: 'startup'
  }
};

// Theme definitions (shared across components)
export const themes = {
  // � Professional/Corporate Themes
  corporate: {
    name: 'Corporate Blue',
    primary: '#0052cc',
    secondary: '#0033aa',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.8))',
    text: '#1a1a1a',
    textSecondary: '#666666',
    border: 'rgba(0, 82, 204, 0.2)',
    particleColor: 'rgba(0, 82, 204, 0.3)',
    glowColor: '0, 82, 204',
    icon: '🏢',
    category: 'professional',
    personas: ['recruiter', 'fintech']
  },
  
  executive: {
    name: 'Executive Black',
    primary: '#d4af37',
    secondary: '#b8860b',
    background: 'linear-gradient(135deg, rgba(18, 18, 18, 0.95), rgba(25, 25, 25, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(25, 25, 25, 0.9), rgba(35, 35, 35, 0.8))',
    text: '#f5f5f5',
    textSecondary: '#d4af37',
    border: 'rgba(212, 175, 55, 0.3)',
    particleColor: 'rgba(212, 175, 55, 0.4)',
    glowColor: '212, 175, 55',
    icon: '👑',
    category: 'professional',
    personas: ['techLead']
  },

  // 💻 Developer Themes
  vscode: {
    name: 'VS Code Dark',
    primary: '#007acc',
    secondary: '#0066cc',
    background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.95), rgba(37, 37, 38, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(37, 37, 38, 0.9), rgba(45, 45, 45, 0.8))',
    text: '#cccccc',
    textSecondary: '#969696',
    border: 'rgba(0, 122, 204, 0.3)',
    particleColor: 'rgba(0, 122, 204, 0.4)',
    glowColor: '0, 122, 204',
    icon: '💻',
    category: 'developer',
    personas: ['developer']
  },
  
  github: {
    name: 'GitHub Dark',
    primary: '#58a6ff',
    secondary: '#1f6feb',
    background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.95), rgba(22, 27, 34, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(22, 27, 34, 0.9), rgba(33, 38, 45, 0.8))',
    text: '#f0f6fc',
    textSecondary: '#8b949e',
    border: 'rgba(88, 166, 255, 0.3)',
    particleColor: 'rgba(88, 166, 255, 0.4)',
    glowColor: '88, 166, 255',
    icon: '🌙',
    category: 'developer',
    personas: ['developer', 'fintech']
  },
  
  matrix: {
    name: 'Matrix Terminal',
    primary: '#00ff41',
    secondary: '#00cc33',
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(0, 20, 0, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(0, 20, 0, 0.8), rgba(0, 40, 0, 0.6))',
    text: '#00ff41',
    textSecondary: '#00cc33',
    border: 'rgba(0, 255, 65, 0.3)',
    particleColor: 'rgba(0, 255, 65, 0.5)',
    glowColor: '0, 255, 65',
    icon: '🔋',
    category: 'developer',
    personas: ['developer', 'gaming']
  },
  
  terminal: {
    name: 'Terminal Pro',
    primary: '#ff6600',
    secondary: '#cc5500',
    background: 'linear-gradient(135deg, rgba(40, 44, 52, 0.95), rgba(33, 37, 43, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(33, 37, 43, 0.9), rgba(40, 44, 52, 0.8))',
    text: '#abb2bf',
    textSecondary: '#5c6370',
    border: 'rgba(255, 102, 0, 0.3)',
    particleColor: 'rgba(255, 102, 0, 0.4)',
    glowColor: '255, 102, 0',
    icon: '⚡',
    category: 'developer',
    personas: ['developer']
  },

  // 🎨 Creative/Designer Themes
  aurora: {
    name: 'Aurora Borealis',
    primary: '#8a2be2',
    secondary: '#00ff7f',
    background: 'linear-gradient(135deg, rgba(25, 25, 112, 0.9), rgba(72, 61, 139, 0.8))',
    cardBg: 'linear-gradient(135deg, rgba(72, 61, 139, 0.7), rgba(138, 43, 226, 0.6))',
    text: '#e6e6fa',
    textSecondary: '#dda0dd',
    border: 'rgba(138, 43, 226, 0.4)',
    particleColor: 'rgba(0, 255, 127, 0.5)',
    glowColor: '138, 43, 226',
    icon: '🌌',
    category: 'creative',
    personas: ['designer', 'startup']
  },
  
  ocean: {
    name: 'Ocean Depths',
    primary: '#00b4d8',
    secondary: '#0077b6',
    background: 'linear-gradient(135deg, rgba(0, 48, 73, 0.95), rgba(0, 77, 109, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(0, 77, 109, 0.8), rgba(0, 105, 146, 0.7))',
    text: '#90e0ef',
    textSecondary: '#00b4d8',
    border: 'rgba(0, 180, 216, 0.3)',
    particleColor: 'rgba(144, 224, 239, 0.4)',
    glowColor: '0, 180, 216',
    icon: '🌊',
    category: 'creative',
    personas: ['designer', 'fintech']
  },
  
  sunset: {
    name: 'Sunset Coding',
    primary: '#ff6b35',
    secondary: '#f7931e',
    background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.9), rgba(205, 92, 92, 0.8))',
    cardBg: 'linear-gradient(135deg, rgba(205, 92, 92, 0.7), rgba(233, 116, 81, 0.6))',
    text: '#fff8dc',
    textSecondary: '#ffd700',
    border: 'rgba(255, 107, 53, 0.4)',
    particleColor: 'rgba(255, 215, 0, 0.5)',
    glowColor: '255, 107, 53',
    icon: '🌅',
    category: 'creative',
    personas: ['designer', 'startup']
  },
  
  creative: {
    name: 'Creative Studio',
    primary: '#ff1493',
    secondary: '#9932cc',
    background: 'linear-gradient(135deg, rgba(75, 0, 130, 0.9), rgba(138, 43, 226, 0.8))',
    cardBg: 'linear-gradient(135deg, rgba(138, 43, 226, 0.7), rgba(147, 112, 219, 0.6))',
    text: '#f8f8ff',
    textSecondary: '#dda0dd',
    border: 'rgba(255, 20, 147, 0.4)',
    particleColor: 'rgba(255, 20, 147, 0.5)',
    glowColor: '255, 20, 147',
    icon: '🎨',
    category: 'creative',
    personas: ['designer']
  },

  // 🎓 Student/Academic Themes
  friendly: {
    name: 'Friendly Campus',
    primary: '#4caf50',
    secondary: '#2e7d32',
    background: 'linear-gradient(135deg, rgba(248, 255, 248, 0.95), rgba(232, 245, 233, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 255, 248, 0.8))',
    text: '#1b5e20',
    textSecondary: '#388e3c',
    border: 'rgba(76, 175, 80, 0.3)',
    particleColor: 'rgba(76, 175, 80, 0.4)',
    glowColor: '76, 175, 80',
    icon: '🎓',
    category: 'friendly',
    personas: ['student']
  },
  
  academic: {
    name: 'Academic Blue',
    primary: '#1976d2',
    secondary: '#1565c0',
    background: 'linear-gradient(135deg, rgba(227, 242, 253, 0.95), rgba(187, 222, 251, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(227, 242, 253, 0.8))',
    text: '#0d47a1',
    textSecondary: '#1976d2',
    border: 'rgba(25, 118, 210, 0.3)',
    particleColor: 'rgba(25, 118, 210, 0.4)',
    glowColor: '25, 118, 210',
    icon: '📚',
    category: 'friendly',
    personas: ['student']
  },

  // 🏥 Healthcare/Medical Themes
  medical: {
    name: 'Medical Care',
    primary: '#0288d1',
    secondary: '#0277bd',
    background: 'linear-gradient(135deg, rgba(245, 253, 255, 0.95), rgba(225, 245, 254, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(245, 253, 255, 0.8))',
    text: '#01579b',
    textSecondary: '#0288d1',
    border: 'rgba(2, 136, 209, 0.3)',
    particleColor: 'rgba(2, 136, 209, 0.4)',
    glowColor: '2, 136, 209',
    icon: '🏥',
    category: 'calm',
    personas: ['healthcare']
  },
  
  calm: {
    name: 'Calming Mint',
    primary: '#26a69a',
    secondary: '#00695c',
    background: 'linear-gradient(135deg, rgba(240, 248, 255, 0.95), rgba(225, 245, 254, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 248, 255, 0.8))',
    text: '#004d40',
    textSecondary: '#00695c',
    border: 'rgba(38, 166, 154, 0.3)',
    particleColor: 'rgba(38, 166, 154, 0.4)',
    glowColor: '38, 166, 154',
    icon: '🕊️',
    category: 'calm',
    personas: ['healthcare']
  },

  // 🎮 Gaming/Entertainment Themes
  gaming: {
    name: 'Gaming RGB',
    primary: '#ff0080',
    secondary: '#8000ff',
    background: 'linear-gradient(135deg, rgba(16, 16, 32, 0.95), rgba(32, 16, 48, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(32, 16, 48, 0.9), rgba(48, 16, 64, 0.8))',
    text: '#ff0080',
    textSecondary: '#8000ff',
    border: 'rgba(255, 0, 128, 0.4)',
    particleColor: 'rgba(128, 0, 255, 0.5)',
    glowColor: '255, 0, 128',
    icon: '🎮',
    category: 'gaming',
    personas: ['gaming']
  },
  
  neon: {
    name: 'Neon City',
    primary: '#00ffff',
    secondary: '#ff00ff',
    background: 'linear-gradient(135deg, rgba(0, 0, 32, 0.95), rgba(16, 0, 48, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(16, 0, 48, 0.9), rgba(32, 0, 64, 0.8))',
    text: '#00ffff',
    textSecondary: '#ff00ff',
    border: 'rgba(0, 255, 255, 0.4)',
    particleColor: 'rgba(255, 0, 255, 0.5)',
    glowColor: '0, 255, 255',
    icon: '🌃',
    category: 'gaming',
    personas: ['gaming']
  },

  // 🚀 Startup/Innovation Themes
  startup: {
    name: 'Startup Energy',
    primary: '#ff5722',
    secondary: '#e64a19',
    background: 'linear-gradient(135deg, rgba(255, 243, 224, 0.95), rgba(255, 224, 178, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 243, 224, 0.8))',
    text: '#bf360c',
    textSecondary: '#ff5722',
    border: 'rgba(255, 87, 34, 0.3)',
    particleColor: 'rgba(255, 87, 34, 0.4)',
    glowColor: '255, 87, 34',
    icon: '🚀',
    category: 'dynamic',
    personas: ['startup']
  },
  
  dynamic: {
    name: 'Dynamic Gradient',
    primary: '#e91e63',
    secondary: '#9c27b0',
    background: 'linear-gradient(135deg, rgba(252, 228, 236, 0.95), rgba(243, 229, 245, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(252, 228, 236, 0.8))',
    text: '#880e4f',
    textSecondary: '#e91e63',
    border: 'rgba(233, 30, 99, 0.3)',
    particleColor: 'rgba(233, 30, 99, 0.4)',
    glowColor: '233, 30, 99',
    icon: '⚡',
    category: 'dynamic',
    personas: ['startup']
  },

  // 💰 Fintech Themes
  fintech: {
    name: 'Fintech Pro',
    primary: '#1565c0',
    secondary: '#0d47a1',
    background: 'linear-gradient(135deg, rgba(232, 245, 233, 0.95), rgba(200, 230, 201, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(232, 245, 233, 0.8))',
    text: '#0d47a1',
    textSecondary: '#1565c0',
    border: 'rgba(21, 101, 192, 0.3)',
    particleColor: 'rgba(21, 101, 192, 0.4)',
    glowColor: '21, 101, 192',
    icon: '💰',
    category: 'professional',
    personas: ['fintech']
  },

  // Light mode themes
  cleanWhite: {
    name: 'Clean White',
    primary: '#0969da',
    secondary: '#0550ae',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 249, 250, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(246, 248, 250, 0.8))',
    text: '#24292f',
    textSecondary: '#656d76',
    border: 'rgba(9, 105, 218, 0.3)',
    particleColor: 'rgba(9, 105, 218, 0.4)',
    glowColor: '9, 105, 218',
    icon: '☀️',
    category: 'light',
    personas: ['recruiter', 'healthcare']
  },
  
  githubLight: {
    name: 'GitHub Light',
    primary: '#0969da',
    secondary: '#0550ae',
    background: 'linear-gradient(135deg, rgba(246, 248, 250, 0.95), rgba(255, 255, 255, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.8))',
    text: '#1f2328',
    textSecondary: '#656d76',
    border: 'rgba(9, 105, 218, 0.3)',
    particleColor: 'rgba(9, 105, 218, 0.3)',
    glowColor: '9, 105, 218',
    icon: '🌤️',
    category: 'light',
    personas: ['recruiter']
  },
  
  warmBeige: {
    name: 'Warm Beige',
    primary: '#8b4513',
    secondary: '#a0522d',
    background: 'linear-gradient(135deg, rgba(245, 245, 220, 0.95), rgba(250, 240, 230, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(255, 248, 220, 0.9), rgba(245, 245, 220, 0.8))',
    text: '#5d4e37',
    textSecondary: '#8b7355',
    border: 'rgba(139, 69, 19, 0.3)',
    particleColor: 'rgba(139, 69, 19, 0.4)',
    glowColor: '139, 69, 19',
    icon: '�',
    category: 'friendly',
    personas: ['student']
  },
  
  softPastels: {
    name: 'Soft Pastels',
    primary: '#9b59b6',
    secondary: '#8e44ad',
    background: 'linear-gradient(135deg, rgba(248, 249, 250, 0.95), rgba(253, 246, 255, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(253, 246, 255, 0.9), rgba(240, 248, 255, 0.8))',
    text: '#2c3e50',
    textSecondary: '#7f8c8d',
    border: 'rgba(155, 89, 182, 0.3)',
    particleColor: 'rgba(155, 89, 182, 0.4)',
    glowColor: '155, 89, 182',
    icon: '�',
    category: 'calm',
    personas: ['student', 'healthcare']
  },

  // Additional sophisticated themes
  forest: {
    name: 'Forest Executive',
    primary: '#2e7d32',
    secondary: '#1b5e20',
    background: 'linear-gradient(135deg, rgba(27, 94, 32, 0.9), rgba(46, 125, 50, 0.8))',
    cardBg: 'linear-gradient(135deg, rgba(46, 125, 50, 0.8), rgba(67, 160, 71, 0.7))',
    text: '#e8f5e8',
    textSecondary: '#a5d6a7',
    border: 'rgba(46, 125, 50, 0.4)',
    particleColor: 'rgba(165, 214, 167, 0.5)',
    glowColor: '46, 125, 50',
    icon: '🌲',
    category: 'professional',
    personas: ['techLead']
  },

  cyberpunk: {
    name: 'Cyberpunk Executive',
    primary: '#ff0080',
    secondary: '#00ffff',
    background: 'linear-gradient(135deg, rgba(20, 0, 40, 0.95), rgba(40, 0, 60, 0.9))',
    cardBg: 'linear-gradient(135deg, rgba(60, 0, 80, 0.8), rgba(80, 0, 100, 0.7))',
    text: '#ff0080',
    textSecondary: '#00ffff',
    border: 'rgba(255, 0, 128, 0.4)',
    particleColor: 'rgba(0, 255, 255, 0.6)',
    glowColor: '255, 0, 128',
    icon: '�',
    category: 'professional',
    personas: ['techLead', 'gaming']
  }
};

// Smart persona detection logic
const detectPersona = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const currentHour = new Date().getHours();
  const referrer = document.referrer.toLowerCase();
  const url = window.location.href.toLowerCase();

  // Time-based detection (day/night preference)
  const isDayTime = currentHour >= 6 && currentHour <= 18;
  
  // Device-based detection
  const isMobile = /mobile|android|iphone|ipad/.test(userAgent);
  
  // Referrer-based detection
  if (referrer.includes('linkedin')) return 'recruiter';
  if (referrer.includes('github')) return 'developer';
  if (referrer.includes('dribbble') || referrer.includes('behance')) return 'designer';
  if (referrer.includes('university') || referrer.includes('edu')) return 'student';
  
  // URL parameter detection
  const urlParams = new URLSearchParams(window.location.search);
  const persona = urlParams.get('persona');
  if (persona && personas[persona]) return persona;
  
  // Default based on time and device
  if (isDayTime) {
    return isMobile ? 'student' : 'recruiter';
  } else {
    return isMobile ? 'gaming' : 'developer';
  }
};

// Get recommended theme for persona
const getPersonaTheme = (personaKey) => {
  const persona = personas[personaKey];
  if (!persona) return 'github';
  
  const availableThemes = persona.preferredThemes.filter(theme => themes[theme]);
  return availableThemes.length > 0 ? persona.defaultTheme : 'github';
};

// Smart theme recommendation
const getSmartTheme = () => {
  const detectedPersona = detectPersona();
  return getPersonaTheme(detectedPersona);
};

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Load theme from localStorage or use smart detection
    const savedTheme = localStorage.getItem('portfolio-theme');
    const userHasChosenTheme = localStorage.getItem('user-chose-theme') === 'true';
    
    if (savedTheme && themes[savedTheme] && userHasChosenTheme) {
      return savedTheme;
    }
    
    // First-time visitor - use smart detection
    const smartTheme = getSmartTheme();
    localStorage.setItem('portfolio-theme', smartTheme);
    return smartTheme;
  });

  const [detectedPersona, setDetectedPersona] = useState(() => detectPersona());
  const [showPersonaWelcome, setShowPersonaWelcome] = useState(() => {
    return localStorage.getItem('persona-welcome-shown') !== 'true';
  });

  const theme = themes[currentTheme];

  const changeTheme = (themeKey) => {
    if (themes[themeKey]) {
      setCurrentTheme(themeKey);
      localStorage.setItem('portfolio-theme', themeKey);
      localStorage.setItem('user-chose-theme', 'true');
    }
  };

  const setPersona = (personaKey) => {
    if (personas[personaKey]) {
      setDetectedPersona(personaKey);
      const recommendedTheme = getPersonaTheme(personaKey);
      changeTheme(recommendedTheme);
      localStorage.setItem('detected-persona', personaKey);
    }
  };

  const dismissPersonaWelcome = () => {
    setShowPersonaWelcome(false);
    localStorage.setItem('persona-welcome-shown', 'true');
  };

  // Apply theme to document root for global styling
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', theme.primary);
    root.style.setProperty('--theme-secondary', theme.secondary);
    root.style.setProperty('--theme-text', theme.text);
    root.style.setProperty('--theme-text-secondary', theme.textSecondary);
    root.style.setProperty('--theme-border', theme.border);
    root.style.setProperty('--theme-glow-color', theme.glowColor);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      theme,
      themes,
      personas,
      detectedPersona,
      showPersonaWelcome,
      changeTheme,
      setPersona,
      dismissPersonaWelcome,
      getSmartTheme,
      getPersonaTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
