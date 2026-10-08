import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const siteName = import.meta.env.VITE_APP_SITE_NAME || 'Full Stack Engineer';
    const githubUrl = import.meta.env.VITE_APP_GITHUB || 'https://github.com/Poojii001';
    const linkedinUrl = import.meta.env.VITE_APP_LINKEDIN || '#';
    const instagramUrl = import.meta.env.VITE_APP_INSTAGRAM || '#';
    const twitterUrl = import.meta.env.VITE_APP_TWITTER || '#';
    const facebookUrl = import.meta.env.VITE_APP_FACEBOOK || '#';
    const youtubeUrl = import.meta.env.VITE_APP_YOUTUBE || '#';

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-8">
                        <div className="header__logo">
                            <Link to="/" onClick={closeMenu}>
                                <h5 className="text-light fs-5 mb-0 fw-bold">
                                    <span style={{ color: '#00e5ff' }}>&lt;</span>
                                    {siteName}
                                    <span style={{ color: '#00e5ff' }}> /&gt;</span>
                                </h5>
                            </Link>
                        </div>
                    </div>

                    <div className="col-4 d-lg-none text-end">
                        <button
                            onClick={toggleMenu}
                            className="btn text-light fs-3 p-0 border-0 bg-transparent shadow-none"
                            aria-label="Toggle navigation"
                        >
                            <i className={isOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
                        </button>
                    </div>

                    <div className="col-lg-9 d-none d-lg-block">
                        <div className="header__nav__option">
                            <nav className="header__nav__menu">
                                <ul>
                                    <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active-nav' : ''}>Home</NavLink></li>
                                    <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active-nav' : ''}>About</NavLink></li>
                                    <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active-nav' : ''}>Projects</NavLink></li>
                                    <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active-nav' : ''}>Services</NavLink></li>
                                    <li><NavLink to="/skills" className={({ isActive }) => isActive ? 'active-nav' : ''}>Skills</NavLink></li>
                                    <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'active-nav' : ''}>Experience</NavLink></li>
                                    <li><NavLink to="/contactus" className={({ isActive }) => isActive ? 'active-nav' : ''}>Contact</NavLink></li>
                                    <li>
                                        <NavLink to="/hire">Explore</NavLink>
                                        <ul className="dropdown">
                                            <li><NavLink to="/education">Education</NavLink></li>
                                            <li><NavLink to="/testimonial">Testimonials</NavLink></li>
                                            <li><NavLink to="/faq">FAQ</NavLink></li>
                                            <li><NavLink to="/hire">Hire Me</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header__nav__social">
                                <a href={githubUrl} target="_blank" rel="noreferrer" title="GitHub"><i className="bi bi-github"></i></a>
                                <a href={linkedinUrl} target="_blank" rel="noreferrer" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
                                {twitterUrl !== '#' && <a href={twitterUrl} target="_blank" rel="noreferrer" title="Twitter / X"><i className="bi bi-twitter-x"></i></a>}
                                {instagramUrl !== '#' && <a href={instagramUrl} target="_blank" rel="noreferrer" title="Instagram"><i className="bi bi-instagram"></i></a>}
                                {facebookUrl !== '#' && <a href={facebookUrl} target="_blank" rel="noreferrer" title="Facebook"><i className="bi bi-facebook"></i></a>}
                                {youtubeUrl !== '#' && <a href={youtubeUrl} target="_blank" rel="noreferrer" title="YouTube"><i className="bi bi-youtube"></i></a>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* React Mobile Navigation Menu */}
                {isOpen && (
                    <div className="d-lg-none mt-3 p-3 rounded-3" style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(0, 229, 255, 0.2)' }}>
                        <ul className="list-unstyled mb-3">
                            <li className="py-2"><NavLink to="/" end onClick={closeMenu} className="text-light text-decoration-none d-block">Home</NavLink></li>
                            <li className="py-2"><NavLink to="/about" onClick={closeMenu} className="text-light text-decoration-none d-block">About</NavLink></li>
                            <li className="py-2"><NavLink to="/projects" onClick={closeMenu} className="text-light text-decoration-none d-block">Projects</NavLink></li>
                            <li className="py-2"><NavLink to="/services" onClick={closeMenu} className="text-light text-decoration-none d-block">Services</NavLink></li>
                            <li className="py-2"><NavLink to="/skills" onClick={closeMenu} className="text-light text-decoration-none d-block">Skills</NavLink></li>
                            <li className="py-2"><NavLink to="/experience" onClick={closeMenu} className="text-light text-decoration-none d-block">Experience</NavLink></li>
                            <li className="py-2"><NavLink to="/education" onClick={closeMenu} className="text-light text-decoration-none d-block">Education</NavLink></li>
                            <li className="py-2"><NavLink to="/testimonial" onClick={closeMenu} className="text-light text-decoration-none d-block">Testimonials</NavLink></li>
                            <li className="py-2"><NavLink to="/faq" onClick={closeMenu} className="text-light text-decoration-none d-block">FAQ</NavLink></li>
                            <li className="py-2"><NavLink to="/hire" onClick={closeMenu} className="text-info text-decoration-none d-block fw-bold">Hire Me</NavLink></li>
                            <li className="py-2"><NavLink to="/contactus" onClick={closeMenu} className="text-light text-decoration-none d-block">Contact Me</NavLink></li>
                        </ul>
                        <div className="d-flex gap-3 pt-2 border-top border-secondary">
                            <a href={githubUrl} target="_blank" rel="noreferrer" className="text-light fs-5"><i className="bi bi-github"></i></a>
                            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-light fs-5"><i className="bi bi-linkedin"></i></a>
                            {twitterUrl !== '#' && <a href={twitterUrl} target="_blank" rel="noreferrer" className="text-light fs-5"><i className="bi bi-twitter-x"></i></a>}
                            {instagramUrl !== '#' && <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-light fs-5"><i className="bi bi-instagram"></i></a>}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

