import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaCircle,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="text-center py-5 position-relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
      id="hero"
    >
      {/* Static Background Elements */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 1 }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: `rgba(88, 166, 255, ${Math.random() * 0.1 + 0.05})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div
        className="container position-relative"
        style={{ zIndex: 2 }}
        data-aos="fade-up"
      >
        {/* Profile Image */}
        <div className="mb-4">
          <div
            className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center profile-icon"
            style={{
              width: "150px",
              height: "150px",
              background: "linear-gradient(45deg, #58a6ff, #1f6feb)",
              border: "4px solid rgba(88, 166, 255, 0.3)",
              fontSize: "4rem",
              color: "white",
              boxShadow: "0 10px 30px rgba(88, 166, 255, 0.3)",
            }}
          >
            <FaCode />
          </div>
        </div>

        <h1 className="display-4 fw-bold mb-3">
          Hi, I'm <span className="text-primary">Gaurav Chauhan</span>
        </h1>

        {/* Role Text */}
        <div className="mb-3" style={{ height: "60px" }}>
          <p className="role-title">Full Stack Developer & Student</p>
        </div>

        {/* Availability Status */}
        <div className="mb-4">
          <span
            className="badge px-3 py-2 rounded-pill d-inline-flex align-items-center"
            style={{
              backgroundColor: "rgba(40, 167, 69, 0.2)",
              border: "1px solid rgba(40, 167, 69, 0.3)",
              color: "#28a745",
            }}
          >
            <FaCircle size={8} className="me-2" style={{ color: "#28a745" }} />
            Available for opportunities
          </span>
        </div>

        <p
          className="lead text-secondary mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          I enjoy building web applications and solving problems through code.
          Currently a B.Tech Computer Science student at UPES, learning new
          technologies and working on projects.
        </p>

        {/* Action Buttons */}
        <div className="mb-5">
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-lg"
              style={{
                background: "linear-gradient(45deg, #58a6ff, #1f6feb)",
                border: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 15px 35px rgba(88, 166, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow =
                  "0 10px 30px rgba(88, 166, 255, 0.3)";
              }}
              onFocus={(e) => {
                e.target.style.outline = "2px solid #58a6ff";
                e.target.style.outlineOffset = "2px";
              }}
              onBlur={(e) => {
                e.target.style.outline = "none";
              }}
              aria-label="Download my resume (PDF)"
            >
              <FaDownload className="me-2" /> Download Resume
            </a>

            <button
              onClick={() => scrollToSection("projects")}
              className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill"
              style={{ transition: "all 0.3s ease" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
              onFocus={(e) => {
                e.target.style.outline = "2px solid #58a6ff";
                e.target.style.outlineOffset = "2px";
              }}
              onBlur={(e) => {
                e.target.style.outline = "none";
              }}
              aria-label="Navigate to projects section"
            >
              View My Work
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {[
            {
              icon: <FaGithub size={24} />,
              url: "https://github.com/SU-Gaurav",
              label: "GitHub Profile",
            },
            {
              icon: <FaLinkedin size={24} />,
              url: "https://www.linkedin.com/in/gaurav-chauhan-58474934a/",
              label: "LinkedIn Profile",
            },
            {
              icon: <FaEnvelope size={24} />,
              url: "mailto:gauravchauhan2318@gmail.com",
              label: "Send Email",
            },
            {
              icon: <SiLeetcode size={24} />,
              url: "https://leetcode.com/u/SU_Gaurav/",
              label: "LeetCode Profile",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light rounded-circle p-3 social-btn"
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                border: "2px solid rgba(255, 255, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#58a6ff";
                e.target.style.borderColor = "#58a6ff";
                e.target.style.transform = "translateY(-5px) scale(1.1)";
                e.target.style.boxShadow =
                  "0 10px 25px rgba(88, 166, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "none";
              }}
              onFocus={(e) => {
                e.target.style.outline = "2px solid #58a6ff";
                e.target.style.outlineOffset = "2px";
              }}
              onBlur={(e) => {
                e.target.style.outline = "none";
              }}
              aria-label={social.label}
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-4">
          <div
            className="rounded-pill mx-auto mb-2"
            style={{
              width: "2px",
              height: "30px",
              background: "linear-gradient(to bottom, #58a6ff, transparent)",
            }}
          />
          <small className="text-primary">Scroll to explore</small>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .profile-icon {
            width: 120px !important;
            height: 120px !important;
            font-size: 3rem !important;
          }

          .display-4 {
            font-size: 2.5rem !important;
          }

          .fs-3 {
            font-size: 1.5rem !important;
          }

          .btn-lg {
            padding: 0.75rem 2rem !important;
            font-size: 1rem !important;
          }

          .social-btn {
            width: 50px !important;
            height: 50px !important;
            padding: 0.5rem !important;
          }

          .social-btn svg {
            width: 20px !important;
            height: 20px !important;
          }
        }

        @media (max-width: 576px) {
          .profile-icon {
            width: 100px !important;
            height: 100px !important;
            font-size: 2.5rem !important;
          }

          .lead {
            font-size: 1.1rem !important;
          }

          .gap-3 {
            gap: 0.75rem !important;
          }
        }

        /* Focus improvements for accessibility */
        .btn:focus,
        .social-btn:focus {
          outline: 2px solid #58a6ff !important;
          outline-offset: 2px !important;
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
