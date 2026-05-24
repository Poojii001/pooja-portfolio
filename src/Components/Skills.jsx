import React from "react";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">

        {/* Title */}
        <div className="section-title">
          <span>My Skills</span>
          <h2>Technologies I Work With</h2>
        </div>

        <div className="skills-grid">

          {/* Frontend */}
          <div className="glass-card">
            <h4>Frontend</h4>

            <div className="skill-item">
              <i className="bi bi-lightning-charge-fill"></i> React.js
            </div>

            <div className="skill-item">
              <i className="bi bi-braces"></i> JavaScript
            </div>

            <div className="skill-item">
              <i className="bi bi-filetype-html"></i> HTML5
            </div>

            <div className="skill-item">
              <i className="bi bi-filetype-css"></i> CSS3
            </div>

          </div>

          {/* Backend */}
          <div className="glass-card">
            <h4>Backend</h4>

            <div className="skill-item">
              <i className="bi bi-server"></i> Node.js
            </div>

            <div className="skill-item">
              <i className="bi bi-hdd-network"></i> Express.js
            </div>

            <div className="skill-item">
              <i className="bi bi-database"></i> MongoDB
            </div>

            <div className="skill-item">
              <i className="bi bi-cloud-arrow-up"></i> REST API
            </div>

          </div>

          {/* Tools */}
          <div className="glass-card full">
            <h4>Tools & Platforms</h4>

            <div className="skill-item">
              <i className="bi bi-git"></i> Git
            </div>

            <div className="skill-item">
              <i className="bi bi-github"></i> GitHub
            </div>

            <div className="skill-item">
              <i className="bi bi-postcard"></i> Postman
            </div>

            <div className="skill-item">
              <i className="bi bi-cloud"></i> Netlify
            </div>

            <div className="skill-item">
              <i className="bi bi-cloud-upload"></i> Render
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}