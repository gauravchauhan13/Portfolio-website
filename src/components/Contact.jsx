import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:gauravchauhan2318@gmail.com?subject=${encodeURIComponent(subject || `Message from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <FaEnvelope size={24} color="#58a6ff" />,
      title: "Email",
      content: "gauravchauhan2318@gmail.com",
      link: "mailto:gauravchauhan2318@gmail.com"
    },
    {
      icon: <FaPhone size={24} color="#58a6ff" />,
      title: "Phone",
      content: "+91 6397513751",
      link: "tel:+916397513751"
    },
    {
      icon: <FaMapMarkerAlt size={24} color="#58a6ff" />,
      title: "Location",
      content: "Dehradun, Uttarakhand, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      name: "GitHub",
      url: "https://github.com/gauravchauhan13",
      color: "#ffffff"
    },
    {
      icon: <FaLinkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gaurav-chauhan-58474934a/",
      color: "#0077b5"
    },
    {
      icon: <FaXTwitter size={20} />,
      name: "X (Twitter)",
      url: "https://x.com/_gauravchauhann",
      color: "#000000"
    },
    {
      icon: <FaInstagram size={20} />,
      name: "Instagram",
      url: "https://instagram.com/scripted.gaurav",
      color: "#e4405f"
    }
  ];

  return (
    <section className="py-5 text-light" id="contact">
      <div className="container" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '600px' }}>
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="fw-semibold mb-4 text-primary">Contact Information</h4>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="d-flex align-items-center mb-4 p-3 rounded-3" 
                   style={{ backgroundColor: '#21262d', border: '1px solid #30363d' }}>
                <div className="me-3">
                  {info.icon}
                </div>
                <div>
                  <h6 className="fw-semibold mb-1 text-light">{info.title}</h6>
                  {info.link ? (
                    <a href={info.link} className="text-secondary text-decoration-none small">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-secondary small mb-0">{info.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="mt-4">
              <h6 className="fw-semibold mb-3 text-light">Follow Me</h6>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light rounded-circle p-3"
                    style={{ 
                      width: '50px', 
                      height: '50px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      border: '2px solid rgba(255, 255, 255, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = social.color;
                      e.target.style.borderColor = social.color;
                      e.target.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div 
              className="p-4 rounded-3"
              style={{ backgroundColor: '#21262d', border: '1px solid #30363d' }}
            >
              <h4 className="fw-semibold mb-4 text-primary">Send Me a Message</h4>
              
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label text-light">Name *</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light border-secondary"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ 
                        borderColor: '#30363d',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#58a6ff'}
                      onBlur={(e) => e.target.style.borderColor = '#30363d'}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label text-light">Email *</label>
                    <input
                      type="email"
                      className="form-control bg-dark text-light border-secondary"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ 
                        borderColor: '#30363d',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#58a6ff'}
                      onBlur={(e) => e.target.style.borderColor = '#30363d'}
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label text-light">Subject</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-light border-secondary"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{ 
                      borderColor: '#30363d',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#58a6ff'}
                    onBlur={(e) => e.target.style.borderColor = '#30363d'}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="form-label text-light">Message *</label>
                  <textarea
                    className="form-control bg-dark text-light border-secondary"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ 
                      borderColor: '#30363d',
                      transition: 'border-color 0.3s ease',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#58a6ff'}
                    onBlur={(e) => e.target.style.borderColor = '#30363d'}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary px-5 py-3 rounded-pill"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <FaPaperPlane className="me-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
