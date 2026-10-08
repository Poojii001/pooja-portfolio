import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const siteName = import.meta.env.VITE_APP_SITE_NAME || 'Full Stack Engineer';
    const githubUrl = import.meta.env.VITE_APP_GITHUB || 'https://github.com/Poojii001';
    const linkedinUrl = import.meta.env.VITE_APP_LINKEDIN || '#';
    const instagramUrl = import.meta.env.VITE_APP_INSTAGRAM || '#';
    const twitterUrl = import.meta.env.VITE_APP_TWITTER || '#';
    const facebookUrl = import.meta.env.VITE_APP_FACEBOOK || '#';
    const youtubeUrl = import.meta.env.VITE_APP_YOUTUBE || '#';

    const handleNewsletter = (e) => {
        e.preventDefault();
        if (newsletterEmail.trim()) {
            setSubscribed(true);
            setNewsletterEmail('');
            setTimeout(() => setSubscribed(false), 4000);
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="footer__top__logo">
                                <Link to='/'>
                                    <h5 className='text-light fs-5 mb-0 fw-bold'>
                                        <span style={{ color: '#00e5ff' }}>&lt;</span>
                                        {siteName}
                                        <span style={{ color: '#00e5ff' }}> /&gt;</span>
                                    </h5>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="footer__top__social">
                                <a href={githubUrl} target='_blank' rel='noreferrer' title="GitHub"><i className="bi bi-github"></i></a>
                                <a href={linkedinUrl} target='_blank' rel='noreferrer' title="LinkedIn"><i className="bi bi-linkedin"></i></a>
                                {twitterUrl !== '#' && <a href={twitterUrl} target='_blank' rel='noreferrer' title="Twitter / X"><i className="bi bi-twitter-x"></i></a>}
                                {instagramUrl !== '#' && <a href={instagramUrl} target='_blank' rel='noreferrer' title="Instagram"><i className="bi bi-instagram"></i></a>}
                                {facebookUrl !== '#' && <a href={facebookUrl} target='_blank' rel='noreferrer' title="Facebook"><i className="bi bi-facebook"></i></a>}
                                {youtubeUrl !== '#' && <a href={youtubeUrl} target='_blank' rel='noreferrer' title="YouTube"><i className="bi bi-youtube"></i></a>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__option">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer__option__item">
                                <div className="footer-contact">
                                    <h4 className='text-light mb-4'>Get In Touch</h4>

                                    <a href={`${import.meta.env.VITE_APP_MAP2 || '#'}`} className='text-light d-block mb-3 text-decoration-none' target='_blank' rel='noreferrer'>
                                        <i className='bi bi-geo-alt fs-5 me-3 text-info'></i>
                                        {import.meta.env.VITE_APP_ADDRESS || 'Lucknow, India'}
                                    </a>

                                    <a href={`mailto:${import.meta.env.VITE_APP_EMAIL || 'poojapal5781@gmail.com'}`} className='text-light d-block mb-3 text-decoration-none'>
                                        <i className='bi bi-envelope fs-5 me-3 text-info'></i>
                                        {import.meta.env.VITE_APP_EMAIL || 'poojapal5781@gmail.com'}
                                    </a>

                                    <a href={`tel:${import.meta.env.VITE_APP_PHONE || '9506580566'}`} className='text-light d-block mb-3 text-decoration-none'>
                                        <i className='bi bi-telephone fs-5 me-3 text-info'></i>
                                        +91 {import.meta.env.VITE_APP_PHONE || '9506580566'}
                                    </a>

                                    <a href={`https://wa.me/${import.meta.env.VITE_APP_WHATSAPP || '9506580566'}`} className='text-light d-block text-decoration-none' target='_blank' rel='noreferrer'>
                                        <i className='bi bi-whatsapp fs-5 me-3 text-info'></i>
                                        +91 {import.meta.env.VITE_APP_WHATSAPP || '9506580566'}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="footer__option__item">
                                <h5>Quick Links</h5>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Me</Link></li>
                                    <li><Link to="/skills">Skills</Link></li>
                                    <li><Link to="/projects">Projects</Link></li>
                                    <li><Link to="/experience">Experience</Link></li>
                                    <li><Link to="/contactus">Contact</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="footer__option__item">
                                <h5>Specializations</h5>
                                <ul>
                                    <li><Link to="/services">MERN Stack Apps</Link></li>
                                    <li><Link to="/services">React Development</Link></li>
                                    <li><Link to="/services">REST API & Node.js</Link></li>
                                    <li><Link to="/services">Responsive UI / UX</Link></li>
                                    <li><Link to="/services">Database & MongoDB</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="footer__option__item">
                                <h5>Stay Connected</h5>
                                <p>Open for full-time opportunities, internships and freelance projects. Let's create something extraordinary together.</p>
                                <form onSubmit={handleNewsletter}>
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        value={newsletterEmail}
                                        onChange={(e) => setNewsletterEmail(e.target.value)}
                                        required
                                    />
                                    <button type="submit" aria-label="Subscribe"><i className="fa fa-send"></i></button>
                                </form>
                                {subscribed && (
                                    <small className="text-info mt-2 d-block">
                                        <i className="bi bi-check-circle-fill me-1"></i> Thank you! Message received.
                                    </small>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p className="footer__copyright__text text-light">
                                Copyright © {new Date().getFullYear()} All rights reserved | Designed & Developed by
                                <span className="text-info fw-bold"> Pooja Pal</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

