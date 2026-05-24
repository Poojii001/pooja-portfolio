import React from "react";

const Experience = () => {
  return (
    <section className="experience-section py-5" id="experience">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="text-light fw-bold">Experience</h2>
          <p className="text-info">What I have done so far</p>
        </div>

        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-md-6">
            <div className="exp-card p-4 rounded-4">
              <div className="exp-icon">💻</div>
              <h5 className="text-light fw-bold mt-3">MERN Stack Training</h5>
              <span className="text-info">6 Months</span>
              <p className="text-secondary mt-2">
                Learned React, Node.js, Express, MongoDB and built real-world projects
                like e-commerce and Lifelink app with API integration.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div className="exp-card p-4 rounded-4">
              <div className="exp-icon">⚛️</div>
              <h5 className="text-light fw-bold mt-3">Frontend Development</h5>
              <span className="text-info">React Practice</span>
              <p className="text-secondary mt-2">
                Built multiple responsive UI components, portfolio sections, and worked
                with hooks, routing, and state management.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6">
            <div className="exp-card p-4 rounded-4">
              <div className="exp-icon">🛠️</div>
              <h5 className="text-light fw-bold mt-3">Backend Development</h5>
              <span className="text-info">Node & Express</span>
              <p className="text-secondary mt-2">
                Created REST APIs, handled authentication, JWT, and database
                integration with MongoDB.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6">
            <div className="exp-card p-4 rounded-4">
              <div className="exp-icon">🚀</div>
              <h5 className="text-light fw-bold mt-3">Projects Development</h5>
              <span className="text-info">Academic + Personal</span>
              <p className="text-secondary mt-2">
                Developed full stack projects with deployment, debugging and
                version control using Git & GitHub.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;