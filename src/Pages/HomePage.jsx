import React, { useState, useEffect } from 'react'
import About from '../Components/About'
import Services from '../Components/Services'
import Stats from '../Components/Stats'
import Projects from '../Components/Projects'
import Team from '../Components/Team'

import Education from '../Components/Education'
import Faq from '../Components/Faq'
import Testimonial from '../Components/Testimonial'
import Skills from '../Components/Skills'
import { Link } from 'react-router-dom'
import Experience from '../Components/Experience'
import HireSection from '../Components/HireSection'

export default function HomePage() {
    const roles = [
        "MERN Stack Developer",
        "React.js Specialist",
        "Full Stack Engineer",
        "REST API Architect",
        "Frontend UI Creator"
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const fullText = roles[currentRoleIndex];

        const handleType = () => {
            if (!isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length + 1));
                if (currentText === fullText) {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 1500);
                    setTypingSpeed(50);
                } else {
                    setTypingSpeed(90);
                }
            } else {
                setCurrentText(fullText.substring(0, currentText.length - 1));
                if (currentText === "") {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                    setTypingSpeed(100);
                } else {
                    setTypingSpeed(40);
                }
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

    return (
        <>
            <section className="hero__item">
                <div className="hero-content">
                    <span className="hero-tag">
                        <i className="bi bi-code-square me-2"></i>Full Stack MERN Developer
                    </span>
                    <h6 className='text-info mb-2 mt-2 fs-5'>
                        Hi, I'm <strong className="text-light">Pooja Pal</strong>
                    </h6>
                    <h2 className="hero-title">
                        I am a <br />
                        <span className="typing-highlight">
                            {currentText}
                            <span className="typing-cursor">|</span>
                        </span>
                    </h2>
                    <p className="text-secondary mb-4" style={{ color: '#cbd5e1', fontSize: '16px', maxWidth: '520px' }}>
                        Passionate software developer specializing in React.js, Node.js, Express.js, MongoDB, and modern full-stack web solutions.
                    </p>

                    <div className="d-flex gap-3 flex-wrap align-items-center">
                        <Link to="/projects" className="btn-hire px-4 py-3 text-decoration-none">
                            Explore Projects <i className="bi bi-arrow-right ms-1"></i>
                        </Link>
                        <Link to="/contactus" className="btn-cv px-4 py-3 text-decoration-none">
                            Contact Me
                        </Link>
                    </div>
                </div>

                <div className="hero-right position-relative">
                    <div className="hero-profile-container">
                        <div className="hero-glow-circle"></div>
                        <img src="/img/hero/pooja-hero.jpg" alt="Pooja Pal" className="hero-profile-img" />
                        
                        {/* Floating Tech Badges */}
                        <div className="hero-badge badge-top-left">
                            <i className="bi bi-lightning-charge-fill text-warning me-1"></i> MERN Stack
                        </div>
                        <div className="hero-badge badge-bottom-right">
                            <i className="bi bi-code-slash text-info me-1"></i> React & Node
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Education />
            <Skills />
            <Stats />
            <Services />
            <Projects />
            <HireSection />
            <Team />
            <Experience />
            <Testimonial />
            <Faq />
        </>
    )
}
