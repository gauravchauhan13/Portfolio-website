import React from 'react';
import { FaGraduationCap, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

export default function About() {
  const highlights = [
    {
      icon: <FaGraduationCap size={40} color="#58a6ff" />,
      title: "Education",
      description: "B.Tech Computer Science at UPES, Dehradun"
    },
    {
      icon: <FaCode size={40} color="#58a6ff" />,
      title: "Development",
      description: "Full Stack Web Development with modern technologies"
    },
    {
      icon: <FaLightbulb size={40} color="#58a6ff" />,
      title: "Problem Solving",
      description: "Turning complex problems into elegant solutions"
    },
    {
      icon: <FaRocket size={40} color="#58a6ff" />,
      title: "Innovation",
      description: "Always learning and exploring new technologies"
    }
  ];

  return (
    <section className="py-5 bg-dark text-light" id="about">
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h2 className="fw-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-light fs-5 mb-4 leading-relaxed">
              I'm a second-year B.Tech Computer Science student at UPES, Dehradun, with a passion for 
              creating innovative web solutions. I specialize in frontend development and enjoy the 
              challenge of transforming complex problems into simple, elegant, and user-friendly interfaces.
            </p>
            <p className="text-secondary mb-4">
              My journey in technology is driven by curiosity and a desire to make a meaningful impact 
              through code. I'm constantly learning new technologies and best practices to stay current 
              with the rapidly evolving tech landscape.
            </p>
            
            {/* Quick Stats */}
            <div className="row text-center mb-4">
              <div className="col-4">
                <div className="p-3">
                  <h3 className="text-primary fw-bold">2+</h3>
                  <small className="text-light">Years Learning</small>
                </div>
              </div>
              <div className="col-4">
                <div className="p-3">
                  <h3 className="text-primary fw-bold">10+</h3>
                  <small className="text-light">Projects Built</small>
                </div>
              </div>
              <div className="col-4">
                <div className="p-3">
                  <h3 className="text-primary fw-bold">5+</h3>
                  <small className="text-light">Technologies</small>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary px-4 py-2 rounded-pill"
                style={{ transition: 'all 0.3s ease' }}
              >
                Let's Connect →
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              {highlights.map((item, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div 
                    className="text-center p-4 rounded-3 h-100"
                    style={{ 
                      backgroundColor: '#21262d',
                      border: '1px solid #30363d',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = '#58a6ff';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(88, 166, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#30363d';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="mb-3">
                      {item.icon}
                    </div>
                    <h6 className="fw-semibold text-primary mb-2">{item.title}</h6>
                    <p className="text-light small mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
