import React from 'react'

export default function Stats() {
  const githubUrl = import.meta.env.VITE_APP_GITHUB || 'https://github.com/Poojii001';
  const linkedinUrl = import.meta.env.VITE_APP_LINKEDIN || 'https://www.linkedin.com/in/pooja-pal-cse';

  const statsList = [
    {
      icon: "img/icons/ci-1.png",
      fallbackIcon: "bi bi-kanban",
      number: "10+",
      label: "Completed Projects"
    },
    {
      icon: "img/icons/ci-2.png",
      fallbackIcon: "bi bi-code-slash",
      number: "12+",
      label: "Technologies Mastered"
    },
    {
      icon: "img/icons/ci-3.png",
      fallbackIcon: "bi bi-git",
      number: "100+",
      label: "Git Commits"
    },
    {
      icon: "img/icons/ci-4.png",
      fallbackIcon: "bi bi-award",
      number: "6+",
      label: "Months Training"
    }
  ];

  return (
    <section className="counter py-5" style={{ background: '#0a0119' }}>
      <div className="container">
        <div className="row g-4 justify-content-center text-center">
          {statsList.map((stat, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 col-6">
              <div
                className="p-4 rounded-4 h-100"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(0, 229, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#00e5ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.15)';
                }}
              >
                <div className="mb-3">
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                    style={{ maxHeight: '48px', objectFit: 'contain' }}
                  />
                </div>
                <h2 className="text-light fw-bold mb-1" style={{ color: '#00e5ff' }}>{stat.number}</h2>
                <p className="text-secondary mb-0 small text-uppercase" style={{ letterSpacing: '1px', color: '#94a3b8' }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub & LinkedIn Developer Cards */}
        <div className="row g-4 mt-4">
          {/* GitHub Card */}
          <div className="col-lg-6">
            <div
              className="p-4 rounded-4 h-100 text-start d-flex flex-column justify-content-between"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(0, 229, 255, 0.15)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00e5ff';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="bi bi-github fs-3 text-info"></i>
                  <h5 className="text-light fw-bold mb-0">Open Source & GitHub</h5>
                </div>
                <p className="text-secondary small mb-3" style={{ color: '#94a3b8' }}>
                  Active repository contributions across React.js, MERN stack, Node APIs, and Full Stack applications.
                </p>
              </div>
              <div>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-info rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-star-fill text-warning"></i> View @Poojii001 on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="col-lg-6">
            <div
              className="p-4 rounded-4 h-100 text-start d-flex flex-column justify-content-between"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(0, 229, 255, 0.15)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00e5ff';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-linkedin fs-3 text-info"></i>
                    <h5 className="text-light fw-bold mb-0">Professional & LinkedIn</h5>
                  </div>
                  <span
                    className="badge rounded-pill"
                    style={{
                      background: 'rgba(34, 197, 94, 0.15)',
                      color: '#4ade80',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      fontSize: '11px',
                      padding: '5px 10px'
                    }}
                  >
                    #OPENTOWORK
                  </span>
                </div>
                <p className="text-secondary small mb-3" style={{ color: '#94a3b8' }}>
                  Full Stack Trainee at Logimetrix Techsolutions • 400+ Connections • Active Developer Profile.
                </p>
              </div>
              <div>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-info rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-box-arrow-up-right text-warning"></i> View @pooja-pal-cse on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
