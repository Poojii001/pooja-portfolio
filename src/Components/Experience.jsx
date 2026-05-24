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
              <p className="text-secondary mt-2 text-light">
                During my training period, I gained hands-on experience in React, Node.js, Express, and MongoDB by building real-world projects such as an E-commerce platform and the LifeLink application with API integration
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div className="exp-card p-4 rounded-4">
              <div className="exp-icon">⚛️</div>
              <h5 className="text-light fw-bold mt-3">Frontend Development</h5>
              <span className="text-info">React Practice</span>
              <p className="text-secondary mt-2 text-light">
               Developed responsive UI components and portfolio sections, and built multiple full-stack projects including LifeLink, News App, Color Changer, Todo List, Calculator, Digital Clock, and BMI Calculator using React hooks, routing, and state management.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6">
            <div className="exp-card p-4 rounded-4">
              <div className="exp-icon">🛠️</div>
              <h5 className="text-light fw-bold mt-3">Backend Development</h5>
              <span className="text-info">Node & Express</span>
              <p className="text-secondary mt-2 text-light">
                Developed Chat and News applications using MVC architecture. Built REST APIs, implemented JWT authentication, and integrated MongoDB for secure and efficient data management.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6">
            <div className="exp-card p-4 rounded-4">
              <div className="exp-icon">🚀</div>
              <h5 className="text-light fw-bold mt-3">Projects Development</h5>
              <span className="text-info">Academic + Personal</span>
              <p className="text-secondary mt-2 text-light">
                Developed and deployed scalable full-stack projects, handled debugging and optimization, and maintained clean version control using Git & GitHub for efficient development workflow.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;