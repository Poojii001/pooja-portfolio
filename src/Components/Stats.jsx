import React from 'react'

export default function Stats() {
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
    <section className="counter py-4" style={{ background: '#0a0119' }}>
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
      </div>
    </section>
  )
}
