import React from 'react';

export default function Projects() {
  const projects = [
    {
      name: "Spendly",
      desc: "Personal finance tracking app for managing expenses, budgets, and financial goals with intuitive dashboard.",
      link: "https://github.com/SU-Gaurav/Spendly-Finance-tracking-app",
      tech: ["React", "JavaScript", "Finance", "Dashboard"]
    },
    {
      name: "Notes App",
      desc: "Encrypted note-taking app with dark mode and localStorage.",
      link: "https://github.com/SU-Gaurav/Notes-app",
      tech: ["React", "JavaScript", "CSS"]
    },
    {
      name: "Password Generator & Manager",
      desc: "Desktop application built with Python and Tkinter for generating strong passwords and securely managing credentials in SQLite database.",
      link: "https://github.com/SU-Gaurav/Python_project",
      tech: ["Python", "Tkinter", "SQLite", "Security"]
    },
    {
      name: "Portfolio Website",
      desc: "Personal site built with React, Vite, and Bootstrap.",
      link: "https://github.com/SU-Gaurav",
      tech: ["React", "Vite", "Bootstrap"]
    }
  ];

  return (
    <section className="py-5 bg-dark text-light" id="projects">
      <div className="container" data-aos="fade-up">
        <h2 className="fw-bold mb-5 text-center text-white">
          <span className="text-primary">Featured</span> Projects
        </h2>
        <div className="row">
          {projects.map((proj, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div 
                className="card h-100 bg-dark text-white project-card" 
                style={{ 
                  border: '1px solid #30363d',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = '#58a6ff';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(88, 166, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#30363d';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold text-primary mb-3">{proj.name}</h5>
                  <p className="card-text text-white flex-grow-1">{proj.desc}</p>
                  <div className="mb-3">
                    {proj.tech.map((tech, techIdx) => (
                      <span 
                        key={techIdx} 
                        className="badge bg-secondary me-2 mb-1"
                        style={{ fontSize: '0.75rem' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <a 
                      href={proj.link} 
                      className="btn btn-primary btn-sm rounded-pill px-4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
