import React from "react";
import { Link } from "react-router-dom";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text: "Pooja delivered a clean, ultra-responsive website with smooth React functionality and modern UI design. Very proactive in communication!",
      name: "Rahul Sharma",
      role: "Frontend Client",
      initials: "RS",
      rating: 5
    },
    {
      id: 2,
      text: "Her MERN stack skills are impressive. The project was completed on time with proper REST API and database integration.",
      name: "Anjali Verma",
      role: "Project Mentor",
      initials: "AV",
      rating: 5
    },
    {
      id: 3,
      text: "Very hardworking and creative developer. She builds scalable, user-friendly web applications with clean code architecture.",
      name: "Amit Singh",
      role: "Senior Full Stack Dev",
      initials: "AS",
      rating: 5
    }
  ];

  return (
    <section className="testimonial-section py-5" id="testimonial" style={{ background: '#0b001a' }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="testimonial-title pe-lg-3">
              <div className="section-title text-start mb-3">
                <span className="text-info text-uppercase" style={{ letterSpacing: '2px' }}>Testimonials</span>
                <h2 className="text-light fw-bold">What Mentors & Clients Say</h2>
              </div>

              <p className="text-secondary mb-4" style={{ color: '#cbd5e1' }}>
                Feedback from mentors, peers, and clients regarding my development workflow, code quality, and problem-solving skills.
              </p>

              <Link to="/contactus" className="btn-hire px-4 py-2 d-inline-block text-dark fw-bold text-decoration-none rounded-pill">
                Get In Touch <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="col-lg-8">
            <div className="row g-4">
              {testimonials.map((item) => (
                <div key={item.id} className="col-md-6 col-lg-12">
                  <div
                    className="p-4 rounded-4"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(0, 229, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      transition: 'transform 0.3s ease, border-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#00e5ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.15)';
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex text-warning">
                        {[...Array(item.rating)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill me-1" style={{ color: '#fbbf24', fontSize: '13px' }}></i>
                        ))}
                      </div>
                      <i className="bi bi-quote text-info fs-3 opacity-50"></i>
                    </div>

                    <p className="text-light mb-4 fst-italic" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      "{item.text}"
                    </p>

                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-dark"
                        style={{
                          width: '45px',
                          height: '45px',
                          background: 'linear-gradient(135deg, #00e5ff, #3b82f6)',
                          fontSize: '15px'
                        }}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <h5 className="text-light fw-bold fs-6 mb-0">{item.name}</h5>
                        <small className="text-info">{item.role}</small>
                      </div>
                    </div>
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