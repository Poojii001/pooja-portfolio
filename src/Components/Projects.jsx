import React, { useState } from 'react'

const projectsData = [
  {
    id: 1,
    title: "Real-Time Chat App",
    category: "mern",
    image: "/img/project/p6.png",
    tags: ["React.js", "WebSocket", "Bootstrap", "Material UI (MUI)", "Real-time"],
    description: "Instant one-to-one and group messaging app using WebSocket for low-latency connections, typing indicators, message delivery, and online/offline status.",
    github: "https://github.com/Poojii001",
    live: "https://chat-frontend-pooja.netlify.app"
  },
  {
    id: 2,
    title: "AI Resume Screening System",
    category: "mern",
    image: "/img/project/p4.png",
    tags: ["Node.js", "Express.js", "MongoDB", "NLP Parsing", "Multer"],
    description: "AI-powered resume screening tool that parses uploaded resumes (PDF/DOCX) and matches candidates against job descriptions using keyword and NLP skill extraction.",
    github: "https://github.com/Poojii001",
    live: "https://github.com/Poojii001"
  },
  {
    id: 3,
    title: "Apni Dukan - Full Stack E-Commerce",
    category: "mern",
    image: "/img/project/p1.png",
    tags: ["MERN Stack", "Redux-Saga", "JWT Auth", "MongoDB", "Express.js"],
    description: "Full-stack e-commerce web application with JWT authentication, role-based access, product management, cart, wishlist, and secure checkout backend.",
    github: "https://github.com/Poojii001",
    live: "https://apni-dukan-ax4u.onrender.com"
  },
  {
    id: 4,
    title: "LifeLink - Healthcare Platform",
    category: "frontend",
    image: "/img/project/p222.png",
    tags: ["React.js", "Redux", "JSON Server", "REST APIs", "CRUD"],
    description: "Modern healthcare web application built with React and Redux featuring modules for Doctors, Patients, Appointments, and CRUD data management.",
    github: "https://github.com/Poojii001",
    live: "https://github.com/Poojii001"
  },
  {
    id: 5,
    title: "NewsApp - Live News Aggregator",
    category: "frontend",
    image: "/img/project/p3.png",
    tags: ["React.js", "REST API", "Bootstrap", "Responsive UI"],
    description: "Live news application that fetches breaking headlines and categorized news from global REST API sources with search and infinite scroll.",
    github: "https://github.com/Poojii001",
    live: "https://github.com/Poojii001"
  },
  {
    id: 6,
    title: "Modern To-Do List Application",
    category: "javascript",
    image: "/img/project/p5.png",
    tags: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    description: "Productivity task organizer with task filtering, status badges, editable items, and persistent browser storage.",
    github: "https://github.com/Poojii001",
    live: "https://github.com/Poojii001"
  },
  {
    id: 7,
    title: "BMI Calculator Application",
    category: "javascript",
    image: "/img/project/p7.png",
    tags: ["JavaScript", "CSS3", "Responsive UI"],
    description: "Accurate health and BMI measurement tool with real-time category visualization, health insights, and clean responsive layout.",
    github: "https://github.com/Poojii001",
    live: "https://github.com/Poojii001"
  },
  {
    id: 8,
    title: "Interactive Color Switcher & Generator",
    category: "javascript",
    image: "/img/project/p8.png",
    tags: ["JavaScript", "DOM Manipulation", "CSS3"],
    description: "Dynamic palette generator and theme switcher with real-time hex code copying and smooth color transitions.",
    github: "https://github.com/Poojii001",
    live: "https://github.com/Poojii001"
  },
  {
    id: 9,
    title: "Amazon Shopping Clone UI",
    category: "frontend",
    image: "/img/project/p9.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    description: "Pixel-perfect Amazon homepage clone with dynamic product grid, navigation bars, banners, and fully responsive mobile layouts.",
    github: "https://github.com/Poojii001",
    live: "https://github.com/Poojii001"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
    { key: 'all', label: 'All Projects' },
    { key: 'mern', label: 'MERN Stack' },
    { key: 'frontend', label: 'Frontend & React' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'javascript', label: 'JavaScript & UI' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section className="portfolio spad" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-title text-center mb-5">
          <span className="text-info text-uppercase" style={{ letterSpacing: '2px' }}>Featured Work</span>
          <h2 className="text-light fw-bold">Recent Projects</h2>
        </div>

        {/* Filter Tabs */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {filterCategories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`btn px-4 py-2 rounded-pill transition-all ${
                    activeFilter === cat.key
                      ? 'btn-info text-dark fw-bold shadow'
                      : 'btn-outline-secondary text-light'
                  }`}
                  style={{
                    borderColor: activeFilter === cat.key ? '#00e5ff' : 'rgba(255,255,255,0.2)',
                    fontSize: '14px'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4 mt-2">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div
                className="card h-100 border-0 rounded-4 overflow-hidden shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 229, 255, 0.15)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#00e5ff';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 229, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Project Image Container */}
                <div
                  style={{
                    height: '220px',
                    backgroundImage: `url('${project.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 60%)'
                    }}
                  />
                  <span
                    className="badge bg-dark text-info border border-info position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill"
                    style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="card-body p-4 d-flex flex-column">
                  <h4 className="card-title text-light fw-bold fs-5 mb-2">{project.title}</h4>
                  <p className="card-text text-secondary small mb-3 flex-grow-1" style={{ color: '#94a3b8' }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="badge"
                        style={{
                          background: 'rgba(0, 229, 255, 0.1)',
                          color: '#00e5ff',
                          border: '1px solid rgba(0, 229, 255, 0.2)',
                          fontSize: '11px',
                          fontWeight: 'normal'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-top border-secondary border-opacity-25 d-flex gap-2 align-items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm flex-fill d-inline-flex align-items-center justify-content-center gap-1"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        fontSize: '12px',
                        borderRadius: '20px',
                        padding: '6px 12px'
                      }}
                    >
                      <i className="bi bi-github"></i> Code
                    </a>
                    <a
                      href={project.live || project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-info flex-fill d-inline-flex align-items-center justify-content-center gap-1 text-dark fw-bold"
                      style={{
                        fontSize: '12px',
                        borderRadius: '20px',
                        padding: '6px 12px'
                      }}
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
