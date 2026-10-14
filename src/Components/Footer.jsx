import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const siteName = import.meta.env.VITE_APP_SITE_NAME || 'Full Stack Engineer';
    const githubUrl = import.meta.env.VITE_APP_GITHUB || 'https://github.com/Poojii001';
    const linkedinUrl = import.meta.env.VITE_APP_LINKEDIN || 'https://www.linkedin.com/in/pooja-pal-cse';
    const instagramUrl = import.meta.env.VITE_APP_INSTAGRAM || '';
    const twitterUrl = import.meta.env.VITE_APP_TWITTER || '';
    const facebookUrl = import.meta.env.VITE_APP_FACEBOOK || '';
    const youtubeUrl = import.meta.env.VITE_APP_YOUTUBE || '';
    const email = import.meta.env.VITE_APP_EMAIL || 'poojapal5781@gmail.com';
    const phone = import.meta.env.VITE_APP_PHONE || '9506580566';
    const whatsapp = import.meta.env.VITE_APP_WHATSAPP || '9506580566';
    const address = import.meta.env.VITE_APP_ADDRESS || 'CN-145, Kurauni, Bijnaur Road, Banthara, Lucknow (226401), India';
    const mapUrl = import.meta.env.VITE_APP_MAP2 || '#';

    const handleNewsletter = (e) => {
        e.preventDefault();
        if (newsletterEmail.trim()) {
            setSubscribed(true);
            setNewsletterEmail('');
            setTimeout(() => setSubscribed(false), 4000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer 
            className="footer" 
            style={{ 
                background: 'radial-gradient(circle at 50% 0%, #0d0124 0%, #05000d 100%)',
                borderTop: '1px solid rgba(0, 229, 255, 0.15)',
                position: 'relative'
            }}
        >
            <div className="container py-5">
                {/* Footer Top: Brand + Socials */}
                <div 
                    className="row align-items-center gy-3 pb-4 mb-5"
                    style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}
                >
                    <div className="col-lg-6 col-md-6">
                        <div className="footer__top__logo">
                            <Link to='/' className="text-decoration-none">
                                <h4 className='text-light mb-1 fw-bold'>
                                    <span style={{ color: '#00e5ff' }}>&lt;</span>
                                    {siteName}
                                    <span style={{ color: '#00e5ff' }}> /&gt;</span>
                                </h4>
                            </Link>
                            <p className="small mb-0" style={{ color: '#94a3b8' }}>
                                Full Stack MERN Developer • Transforming ideas into scalable, high-performance web solutions.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="d-flex justify-content-md-end justify-content-start gap-2 align-items-center">
                            <a 
                                href={githubUrl} 
                                target='_blank' 
                                rel='noopener noreferrer' 
                                title="GitHub"
                                className="d-inline-flex align-items-center justify-content-center text-light rounded-circle text-decoration-none"
                                style={{
                                    width: '42px',
                                    height: '42px',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.12)',
                                    fontSize: '17px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#00e5ff';
                                    e.currentTarget.style.color = '#00e5ff';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 229, 255, 0.35)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                                    e.currentTarget.style.color = '#ffffff';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <i className="bi bi-github"></i>
                            </a>

                            <a 
                                href={linkedinUrl} 
                                target='_blank' 
                                rel='noopener noreferrer' 
                                title="LinkedIn"
                                className="d-inline-flex align-items-center justify-content-center text-light rounded-circle text-decoration-none"
                                style={{
                                    width: '42px',
                                    height: '42px',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.12)',
                                    fontSize: '17px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#00e5ff';
                                    e.currentTarget.style.color = '#00e5ff';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 229, 255, 0.35)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                                    e.currentTarget.style.color = '#ffffff';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>

                            {twitterUrl && twitterUrl !== '#' && (
                                <a 
                                    href={twitterUrl} 
                                    target='_blank' 
                                    rel='noopener noreferrer' 
                                    title="Twitter / X"
                                    className="d-inline-flex align-items-center justify-content-center text-light rounded-circle text-decoration-none"
                                    style={{
                                        width: '42px',
                                        height: '42px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.12)',
                                        fontSize: '17px',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <i className="bi bi-twitter-x"></i>
                                </a>
                            )}
                            {instagramUrl && instagramUrl !== '#' && (
                                <a 
                                    href={instagramUrl} 
                                    target='_blank' 
                                    rel='noopener noreferrer' 
                                    title="Instagram"
                                    className="d-inline-flex align-items-center justify-content-center text-light rounded-circle text-decoration-none"
                                    style={{
                                        width: '42px',
                                        height: '42px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.12)',
                                        fontSize: '17px',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <i className="bi bi-instagram"></i>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Main 4 Columns */}
                <div className="row g-4 pb-4">
                    {/* Column 1: Get In Touch */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-light fw-bold mb-3 position-relative d-inline-block pb-2">
                            Get In Touch
                            <span style={{ position: 'absolute', bottom: 0, left: 0, width: '28px', height: '2px', background: '#00e5ff', borderRadius: '2px' }}></span>
                        </h5>

                        <div className="mb-3 mt-1">
                            <span
                                className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill"
                                style={{
                                    background: 'rgba(34, 197, 94, 0.12)',
                                    border: '1px solid rgba(34, 197, 94, 0.3)',
                                    color: '#4ade80',
                                    fontSize: '12px',
                                    fontWeight: '600'
                                }}
                            >
                                <span className="rounded-circle bg-success" style={{ width: '7px', height: '7px', boxShadow: '0 0 6px #22c55e' }}></span>
                                Available for Full-Time & Freelance
                            </span>
                        </div>

                        <div className="d-flex flex-column gap-3 mt-3">
                            <a 
                                href={mapUrl} 
                                className='d-flex align-items-start gap-3 text-decoration-none' 
                                style={{ color: '#cbd5e1', transition: 'all 0.2s ease' }} 
                                target='_blank' 
                                rel='noopener noreferrer'
                                onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.transform = 'translateX(0)'; }}
                            >
                                <i className='bi bi-geo-alt-fill text-info fs-5 mt-1'></i>
                                <span style={{ fontSize: '14px', lineHeight: '1.5' }}>{address}</span>
                            </a>

                            <a 
                                href={`mailto:${email}`} 
                                className='d-flex align-items-center gap-3 text-decoration-none' 
                                style={{ color: '#cbd5e1', transition: 'all 0.2s ease' }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.transform = 'translateX(0)'; }}
                            >
                                <i className='bi bi-envelope-fill text-info fs-5'></i>
                                <span style={{ fontSize: '14px' }}>{email}</span>
                            </a>

                            <a 
                                href={`tel:${phone}`} 
                                className='d-flex align-items-center gap-3 text-decoration-none' 
                                style={{ color: '#cbd5e1', transition: 'all 0.2s ease' }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.transform = 'translateX(0)'; }}
                            >
                                <i className='bi bi-telephone-fill text-info fs-5'></i>
                                <span style={{ fontSize: '14px' }}>Call: +91 {phone}</span>
                            </a>

                            <a 
                                href={`https://wa.me/${whatsapp}`} 
                                className='d-flex align-items-center gap-3 text-decoration-none' 
                                style={{ color: '#cbd5e1', transition: 'all 0.2s ease' }} 
                                target='_blank' 
                                rel='noopener noreferrer'
                                onMouseEnter={(e) => { e.currentTarget.style.color = '#25D366'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.transform = 'translateX(0)'; }}
                            >
                                <i className='bi bi-whatsapp text-success fs-5'></i>
                                <span style={{ fontSize: '14px' }}>WhatsApp: +91 {whatsapp}</span>
                            </a>

                            <a 
                                href={linkedinUrl} 
                                className='d-flex align-items-center gap-3 text-decoration-none' 
                                style={{ color: '#cbd5e1', transition: 'all 0.2s ease' }} 
                                target='_blank' 
                                rel='noopener noreferrer'
                                onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.transform = 'translateX(0)'; }}
                            >
                                <i className='bi bi-linkedin text-info fs-5'></i>
                                <span style={{ fontSize: '14px' }}>LinkedIn: Pooja Pal</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-lg-2 col-md-3 col-6">
                        <h5 className="text-light fw-bold mb-3 position-relative d-inline-block pb-2">
                            Quick Links
                            <span style={{ position: 'absolute', bottom: 0, left: 0, width: '28px', height: '2px', background: '#00e5ff', borderRadius: '2px' }}></span>
                        </h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0 mt-3">
                            <li>
                                <Link 
                                    to="/" 
                                    className="text-decoration-none d-inline-flex align-items-center gap-2" 
                                    style={{ color: '#94a3b8', fontSize: '14px', transition: 'all 0.2s ease' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                    <i className="bi bi-chevron-right text-info" style={{ fontSize: '10px' }}></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/about" 
                                    className="text-decoration-none d-inline-flex align-items-center gap-2" 
                                    style={{ color: '#94a3b8', fontSize: '14px', transition: 'all 0.2s ease' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                    <i className="bi bi-chevron-right text-info" style={{ fontSize: '10px' }}></i> About Me
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/skills" 
                                    className="text-decoration-none d-inline-flex align-items-center gap-2" 
                                    style={{ color: '#94a3b8', fontSize: '14px', transition: 'all 0.2s ease' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                    <i className="bi bi-chevron-right text-info" style={{ fontSize: '10px' }}></i> Skills & Tech
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/projects" 
                                    className="text-decoration-none d-inline-flex align-items-center gap-2" 
                                    style={{ color: '#94a3b8', fontSize: '14px', transition: 'all 0.2s ease' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                    <i className="bi bi-chevron-right text-info" style={{ fontSize: '10px' }}></i> Projects
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/experience" 
                                    className="text-decoration-none d-inline-flex align-items-center gap-2" 
                                    style={{ color: '#94a3b8', fontSize: '14px', transition: 'all 0.2s ease' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                    <i className="bi bi-chevron-right text-info" style={{ fontSize: '10px' }}></i> Experience
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/contactus" 
                                    className="text-decoration-none d-inline-flex align-items-center gap-2" 
                                    style={{ color: '#94a3b8', fontSize: '14px', transition: 'all 0.2s ease' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                    <i className="bi bi-chevron-right text-info" style={{ fontSize: '10px' }}></i> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Specializations */}
                    <div className="col-lg-2 col-md-3 col-6">
                        <h5 className="text-light fw-bold mb-3 position-relative d-inline-block pb-2">
                            Specializations
                            <span style={{ position: 'absolute', bottom: 0, left: 0, width: '28px', height: '2px', background: '#00e5ff', borderRadius: '2px' }}></span>
                        </h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0 mt-3">
                            <li>
                                <Link 
                                    to="/services" 
                                    className="text-decoration-none d-inline-flex align-items-center gap-2" 
                                    style={{ color: '#94a3b8', fontSize: '14px', transition: 'all 0.2s ease' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                    <i className="bi bi-lightning-charge-fill text-warning" style={{ fontSize: '12px' }}></i> MERN Stack
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/skills" 
                                    className="text-decoration-none d-inline-flex align-items-center gap-2" 
                                    style={{ color: '#94a3b8', fontSize: '14px', transition: 'all 0.2s ease' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                    <i className="bi bi-code-slash text-info" style={{ fontSize: '12px' }}></i> React & Next.js
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/services" 
                                    className="text-decoration-none d-inline-flex align-items-center gap-2" 
                                    style={{ color: '#94a3b8', fontSize: '14px', transition: 'all 0.2s ease' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                    <i className="bi bi-hdd-network text-info" style={{ fontSize: '12px' }}></i> REST APIs
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/services" 
                                    className="text-decoration-none d-inline-flex align-items-center gap-2" 
                                    style={{ color: '#94a3b8', fontSize: '14px', transition: 'all 0.2s ease' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                    <i className="bi bi-database-fill text-success" style={{ fontSize: '12px' }}></i> MongoDB & DB
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/hire" 
                                    className="text-decoration-none d-inline-flex align-items-center gap-2" 
                                    style={{ color: '#94a3b8', fontSize: '14px', transition: 'all 0.2s ease' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                    <i className="bi bi-award-fill text-warning" style={{ fontSize: '12px' }}></i> Hire Me
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Stay Connected / Newsletter */}
                    <div className="col-lg-4 col-md-12">
                        <h5 className="text-light fw-bold mb-3 position-relative d-inline-block pb-2">
                            Let's Collaborate
                            <span style={{ position: 'absolute', bottom: 0, left: 0, width: '28px', height: '2px', background: '#00e5ff', borderRadius: '2px' }}></span>
                        </h5>
                        <p className="mt-3" style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>
                            Looking for a dedicated developer for internships, full-time engineering roles, or freelance projects? Drop your email below:
                        </p>

                        <form 
                            onSubmit={handleNewsletter} 
                            className="d-flex align-items-center p-1 rounded-pill mt-3"
                            style={{
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(0, 229, 255, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div className="ps-3 pe-2 text-info">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                required
                                className="form-control border-0 bg-transparent text-light shadow-none"
                                style={{ fontSize: '14px' }}
                            />
                            <button 
                                type="submit" 
                                aria-label="Subscribe"
                                className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'linear-gradient(135deg, #00e5ff, #00b4d8)',
                                    color: '#080014',
                                    border: 'none',
                                    flexShrink: 0,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.08)';
                                    e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 229, 255, 0.6)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <i className="bi bi-send-fill fs-6"></i>
                            </button>
                        </form>

                        {subscribed && (
                            <div className="alert alert-info py-2 px-3 mt-3 d-flex align-items-center gap-2 small bg-dark border-info text-light" role="alert">
                                <i className="bi bi-check-circle-fill text-info"></i>
                                Thank you! Message received. I will get in touch soon.
                            </div>
                        )}

                        <div className="mt-3" style={{ fontSize: '12px', color: '#64748b' }}>
                            <i className="bi bi-shield-check text-info me-1"></i> Direct developer response • Zero spam guarantee
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div 
                    className="row align-items-center gy-2 pt-4 mt-2"
                    style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
                >
                    <div className="col-md-5 text-center text-md-start">
                        <p className="mb-0" style={{ fontSize: '14px', color: '#94a3b8' }}>
                            Copyright © {new Date().getFullYear()} <span className="text-light fw-bold">Pooja Pal</span>. All rights reserved.
                        </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <p className="mb-0" style={{ fontSize: '14px', color: '#94a3b8' }}>
                            Crafted with <span style={{ color: '#00e5ff' }}>React.js</span> & <i className="bi bi-heart-fill text-danger mx-1"></i> in India
                        </p>
                    </div>
                    <div className="col-md-3 text-center text-md-end">
                        <button
                            onClick={scrollToTop}
                            className="btn btn-sm btn-link text-decoration-none p-0"
                            style={{ fontSize: '13px', color: '#94a3b8', transition: 'color 0.2s ease' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#00e5ff'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                        >
                            Back to Top <i className="bi bi-arrow-up-circle ms-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
