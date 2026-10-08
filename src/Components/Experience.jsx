import React, { useState } from "react";

const certificatesData = {
  logimetrix: {
    title: "Internship Completion Certificate",
    company: "Logimetrix Techsolutions Pvt. Ltd.",
    location: "Vikas Khand, Gomti Nagar, Lucknow",
    regNo: "LTS/IC/220926/02",
    date: "22 August 2026",
    period: "15 June 2026 – 14 September 2026",
    role: "Full Stack Trainee & Developer",
    image: "/img/certificate/logimetrix-certificate.png",
    downloadName: "Pooja_Pal_Logimetrix_Certificate.png"
  },
  soinfotech: {
    title: "MERN Full Stack Project Certificate",
    company: "S O INFOTECH (P) LTD.",
    location: "Sector-16, Noida (UP) / Greater Kailash, New Delhi",
    regNo: "SO/PL24/A43/38454",
    date: "28 May 2026",
    period: "1 September 2025 – 12 March 2026",
    role: "MERN Full Stack Trainee & Developer",
    project: "E-commerce Full Stack Web Application",
    image: "/img/certificate/so-infotech-certificate.jpg",
    downloadName: "Pooja_Pal_SO_Infotech_Certificate.jpg"
  }
};

export default function Experience() {
  const [selectedCertKey, setSelectedCertKey] = useState(null);

  const openCertModal = (certKey) => {
    setSelectedCertKey(certKey);
  };

  const closeCertModal = () => {
    setSelectedCertKey(null);
  };

  const activeCert = selectedCertKey ? certificatesData[selectedCertKey] : null;

  return (
    <section className="experience-section py-5" id="experience" style={{ background: '#0b001a' }}>
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center mb-5">
          <span className="text-info text-uppercase" style={{ letterSpacing: '2px', fontSize: '13px' }}>
            Work History & Industry Experience
          </span>
          <h2 className="text-light fw-bold mt-2">Professional Experience</h2>
          <p className="text-secondary mx-auto mt-2" style={{ maxWidth: '650px', color: '#94a3b8' }}>
            Hands-on software development and internship experience building production-level full stack web applications.
          </p>
        </div>

        <div className="row g-4">
          {/* Card 1 - Logimetrix Techsolutions */}
          <div className="col-lg-6">
            <div
              className="p-4 rounded-4 h-100 d-flex flex-column"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid #00e5ff',
                boxShadow: '0 8px 25px rgba(0, 229, 255, 0.12)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Header with Icon & Badge */}
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(0, 229, 255, 0.15)',
                    border: '1px solid #00e5ff',
                    fontSize: '20px'
                  }}
                >
                  💼
                </div>
                <span className="badge bg-info text-dark px-3 py-2 rounded-pill fw-bold">
                  <i className="bi bi-patch-check-fill me-1"></i> Verified Internship
                </span>
              </div>

              {/* Job Title & Company */}
              <h4 className="text-light fw-bold fs-5 mb-1">Full Stack Trainee</h4>
              <div className="text-info fw-semibold mb-1">Logimetrix Techsolutions Pvt. Ltd.</div>
              <div className="text-secondary small mb-3" style={{ color: '#94a3b8' }}>
                <i className="bi bi-geo-alt-fill text-info me-1"></i> Lucknow, India | 06/2026 – Present
              </div>

              {/* Description */}
              <ul className="text-secondary flex-grow-1 small ps-3 mb-3 d-flex flex-column gap-1" style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                <li>Joined as a Full Stack Trainee, working on live full-stack projects using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
                <li>Collaborating with the development team to design, build, and maintain responsive web applications and RESTful APIs.</li>
                <li>Contributing to front-end feature development with React.js and back-end services with Node.js and Express.js.</li>
                <li>Participating in code reviews, testing, and debugging to ensure high-quality, maintainable code.</li>
              </ul>

              {/* Footer with Button */}
              <div className="pt-3 border-top border-secondary border-opacity-25 d-flex flex-wrap justify-content-between align-items-center gap-2">
                <small className="text-secondary">
                  Ref: <span className="text-info">LTS/IC/220926/02</span>
                </small>
                <button
                  onClick={() => openCertModal('logimetrix')}
                  className="btn btn-sm btn-outline-info rounded-pill px-3 py-1 fw-bold d-inline-flex align-items-center gap-1"
                >
                  <i className="bi bi-award-fill text-warning"></i> View Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - S O INFOTECH / DUCAT */}
          <div className="col-lg-6">
            <div
              className="p-4 rounded-4 h-100 d-flex flex-column"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid #3b82f6',
                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.12)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Header with Icon & Badge */}
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(59, 130, 246, 0.15)',
                    border: '1px solid #3b82f6',
                    fontSize: '20px'
                  }}
                >
                  🏢
                </div>
                <span className="badge text-light px-3 py-2 rounded-pill fw-bold" style={{ background: '#3b82f6' }}>
                  <i className="bi bi-patch-check-fill me-1"></i> Full Stack Internship
                </span>
              </div>

              {/* Job Title & Company */}
              <h4 className="text-light fw-bold fs-5 mb-1">Full Stack Intern</h4>
              <div className="text-info fw-semibold mb-1">DUCAT School of AI / S O INFOTECH (P) LTD.</div>
              <div className="text-secondary small mb-3" style={{ color: '#94a3b8' }}>
                <i className="bi bi-geo-alt-fill text-info me-1"></i> Noida, India | 07/2025 – 03/2026
              </div>

              {/* Description */}
              <ul className="text-secondary flex-grow-1 small ps-3 mb-3 d-flex flex-column gap-1" style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                <li>Gained hands-on experience in full-stack development using MongoDB, Express.js, React, and Node.js (MERN stack).</li>
                <li>Implemented responsive UI, RESTful APIs, and state management using React and Context API / React Hooks.</li>
                <li>Applied best practices in component-driven architecture, code reusability, and maintainable frontend design.</li>
                <li>Assisted in testing, debugging, and deployment of live projects.</li>
              </ul>

              {/* Footer with Button */}
              <div className="pt-3 border-top border-secondary border-opacity-25 d-flex flex-wrap justify-content-between align-items-center gap-2">
                <small className="text-secondary">
                  Ref: <span className="text-info">SO/PL24/A43/38454</span>
                </small>
                <button
                  onClick={() => openCertModal('soinfotech')}
                  className="btn btn-sm btn-outline-info rounded-pill px-3 py-1 fw-bold d-inline-flex align-items-center gap-1"
                >
                  <i className="bi bi-award-fill text-warning"></i> View Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Frontend Engineering */}
          <div className="col-lg-6">
            <div
              className="p-4 rounded-4 h-100 d-flex flex-column"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(0, 229, 255, 0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '45px',
                    height: '45px',
                    background: 'rgba(0, 229, 255, 0.1)',
                    border: '1px solid rgba(0, 229, 255, 0.3)',
                    fontSize: '20px'
                  }}
                >
                  ⚛️
                </div>
                <div>
                  <h4 className="text-light fw-bold fs-5 mb-0">Frontend UI Engineering</h4>
                  <small className="text-info">React.js • Modern JavaScript • UI/UX</small>
                </div>
              </div>

              <p className="text-secondary flex-grow-1 small" style={{ color: '#cbd5e1', lineHeight: '1.65' }}>
                Specialized in building responsive UI components and single-page applications. Delivered multiple full-stack systems including <strong>LifeLink</strong> Emergency Portal, <strong>NewsApp</strong> live aggregator, To-Do List, Color Switcher, and BMI Calculator.
              </p>

              <div className="d-flex flex-wrap gap-1 pt-2 border-top border-secondary border-opacity-25">
                <span className="badge bg-dark text-info border border-secondary border-opacity-50">React.js</span>
                <span className="badge bg-dark text-info border border-secondary border-opacity-50">Context API</span>
                <span className="badge bg-dark text-info border border-secondary border-opacity-50">Responsive CSS</span>
              </div>
            </div>
          </div>

          {/* Card 4 - Backend & Databases */}
          <div className="col-lg-6">
            <div
              className="p-4 rounded-4 h-100 d-flex flex-column"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(0, 229, 255, 0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '45px',
                    height: '45px',
                    background: 'rgba(0, 229, 255, 0.1)',
                    border: '1px solid rgba(0, 229, 255, 0.3)',
                    fontSize: '20px'
                  }}
                >
                  🛠️
                </div>
                <div>
                  <h4 className="text-light fw-bold fs-5 mb-0">Backend & API Architecture</h4>
                  <small className="text-info">Node.js • Express.js • MongoDB</small>
                </div>
              </div>

              <p className="text-secondary flex-grow-1 small" style={{ color: '#cbd5e1', lineHeight: '1.65' }}>
                Engineered scalable REST APIs with MVC architecture, JWT authentication, and bcrypt password encryption. Built real-time socket communication for <strong>MyChatApp</strong> and managed MongoDB data modeling with Mongoose.
              </p>

              <div className="d-flex flex-wrap gap-1 pt-2 border-top border-secondary border-opacity-25">
                <span className="badge bg-dark text-info border border-secondary border-opacity-50">Node.js</span>
                <span className="badge bg-dark text-info border border-secondary border-opacity-50">Express</span>
                <span className="badge bg-dark text-info border border-secondary border-opacity-50">MongoDB</span>
                <span className="badge bg-dark text-info border border-secondary border-opacity-50">JWT Auth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {activeCert && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)', zIndex: 10500 }}
            onClick={closeCertModal}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="modal-content text-light border"
                style={{ background: '#0f172a', borderColor: '#00e5ff', borderRadius: '20px' }}
              >
                {/* Modal Header */}
                <div className="modal-header border-secondary border-opacity-25 p-4">
                  <div>
                    <h5 className="modal-title fw-bold text-light mb-1">
                      <i className="bi bi-patch-check-fill text-warning me-2"></i>
                      {activeCert.title}
                    </h5>
                    <small className="text-info">{activeCert.company} | Ref: {activeCert.regNo}</small>
                  </div>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    aria-label="Close"
                    onClick={closeCertModal}
                  ></button>
                </div>

                {/* Modal Body with Certificate Image */}
                <div className="modal-body text-center p-3">
                  <img
                    src={activeCert.image}
                    alt={`${activeCert.company} Certificate`}
                    className="img-fluid rounded-3 shadow-lg"
                    style={{ maxHeight: '72vh', width: 'auto', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>

                {/* Modal Footer */}
                <div className="modal-footer border-secondary border-opacity-25 p-3 d-flex flex-wrap justify-content-between align-items-center gap-2">
                  <span className="small text-secondary">
                    {activeCert.role} • {activeCert.period}
                  </span>
                  <div className="d-flex gap-2">
                    <a
                      href={activeCert.image}
                      download={activeCert.downloadName}
                      className="btn btn-info btn-sm fw-bold px-4 py-2 rounded-pill text-dark"
                    >
                      <i className="bi bi-download me-1"></i> Download Certificate
                    </a>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm px-3 py-2 rounded-pill text-light"
                      onClick={closeCertModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}