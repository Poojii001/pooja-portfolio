import React from "react";

export default function Skills() {
  const frontendSkills = [
    { name: "React.js", level: "90%", color: "#00e5ff", icon: "bi-lightning-charge-fill" },
    { name: "JavaScript (ES6+)", level: "88%", color: "#f7df1e", icon: "bi-filetype-js" },
    { name: "HTML5 & Semantic UI", level: "95%", color: "#e34f26", icon: "bi-filetype-html" },
    { name: "CSS3 & Modern Layouts", level: "90%", color: "#264de4", icon: "bi-filetype-css" },
    { name: "Bootstrap & Responsive Design", level: "92%", color: "#7952b3", icon: "bi-bootstrap-fill" }
  ];

  const backendSkills = [
    { name: "Node.js", level: "85%", color: "#68a063", icon: "bi-server" },
    { name: "Express.js Framework", level: "85%", color: "#ffffff", icon: "bi-hdd-network-fill" },
    { name: "MongoDB & Mongoose", level: "82%", color: "#47a248", icon: "bi-database-fill" },
    { name: "RESTful API Design", level: "88%", color: "#00e5ff", icon: "bi-cloud-arrow-up-fill" },
    { name: "JWT Auth & Security", level: "80%", color: "#e11d48", icon: "bi-shield-lock-fill" }
  ];

  const toolsSkills = [
    { name: "Git", color: "#f05032", icon: "bi-git" },
    { name: "GitHub", color: "#ffffff", icon: "bi-github" },
    { name: "Postman", color: "#ff6c37", icon: "bi-send-fill" },
    { name: "Netlify", color: "#00c7b7", icon: "bi-cloud-fill" },
    { name: "Render", color: "#46e3b7", icon: "bi-cloud-arrow-up" },
    { name: "VS Code", color: "#007acc", icon: "bi-code-square" },
    { name: "npm / Vite", color: "#cb3837", icon: "bi-box-seam" }
  ];

  return (
    <section className="skills-section py-5" id="skills">
      <div className="container">
        {/* Title */}
        <div className="section-title text-center mb-5">
          <span className="text-info text-uppercase" style={{ letterSpacing: '2px', fontSize: '13px' }}>
            Technical Proficiency
          </span>
          <h2 className="text-light fw-bold mt-2">Technologies & Skills</h2>
          <p className="text-secondary mx-auto mt-2" style={{ maxWidth: '600px', color: '#94a3b8' }}>
            Hands-on expertise across full stack web development, modern frontend frameworks, and scalable backend architecture.
          </p>
        </div>

        <div className="row g-4">
          {/* Frontend Card */}
          <div className="col-lg-6">
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(0, 229, 255, 0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-4">
                <i className="bi bi-window-fullscreen fs-4 text-info"></i>
                <h4 className="text-light fw-bold fs-5 mb-0">Frontend Engineering</h4>
              </div>

              <div className="d-flex flex-column gap-3">
                {frontendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <span className="text-light small d-flex align-items-center gap-2">
                        <i className={`bi ${skill.icon}`} style={{ color: skill.color }}></i>
                        {skill.name}
                      </span>
                      <span className="small text-info fw-bold">{skill.level}</span>
                    </div>
                    <div
                      className="progress rounded-pill"
                      style={{ height: '7px', background: 'rgba(255, 255, 255, 0.08)' }}
                    >
                      <div
                        className="progress-bar rounded-pill"
                        role="progressbar"
                        style={{
                          width: skill.level,
                          background: `linear-gradient(90deg, #00e5ff, ${skill.color})`
                        }}
                        aria-valuenow={parseInt(skill.level)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div className="col-lg-6">
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(0, 229, 255, 0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-4">
                <i className="bi bi-server fs-4 text-info"></i>
                <h4 className="text-light fw-bold fs-5 mb-0">Backend & Databases</h4>
              </div>

              <div className="d-flex flex-column gap-3">
                {backendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <span className="text-light small d-flex align-items-center gap-2">
                        <i className={`bi ${skill.icon}`} style={{ color: skill.color }}></i>
                        {skill.name}
                      </span>
                      <span className="small text-info fw-bold">{skill.level}</span>
                    </div>
                    <div
                      className="progress rounded-pill"
                      style={{ height: '7px', background: 'rgba(255, 255, 255, 0.08)' }}
                    >
                      <div
                        className="progress-bar rounded-pill"
                        role="progressbar"
                        style={{
                          width: skill.level,
                          background: `linear-gradient(90deg, #3b82f6, ${skill.color})`
                        }}
                        aria-valuenow={parseInt(skill.level)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Platforms Card */}
          <div className="col-12">
            <div
              className="p-4 rounded-4"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(0, 229, 255, 0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-tools fs-5 text-info"></i>
                <h4 className="text-light fw-bold fs-5 mb-0">Tools & Platforms</h4>
              </div>

              <div className="d-flex flex-wrap gap-2 pt-2">
                {toolsSkills.map((tool, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 rounded-pill d-inline-flex align-items-center gap-2"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '13px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#00e5ff';
                      e.currentTarget.style.background = 'rgba(0, 229, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className={`bi ${tool.icon}`} style={{ color: tool.color }}></i>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}