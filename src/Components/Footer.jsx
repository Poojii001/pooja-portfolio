import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__top">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="footer__top__logo">
                                    <Link to='/'>
                                        <h5 className='text-light fs-5'>{import.meta.env.VITE_APP_SITE_NAME}</h5>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="footer__top__social">
                                    {/* <div className="social-links"> */}
                                    <Link to={import.meta.env.VITE_APP_FACEBOOK} target='_blank' rel='noreferrer'><i className="bi bi-twitter-x"></i></Link>
                                    <Link to={import.meta.env.VITE_APP_TWITTER} target='_blank' rel='noreferrer'><i className="bi bi-facebook"></i></Link>
                                    <Link to={import.meta.env.VITE_APP_INSTAGRAM} target='_blank' rel='noreferrer'><i className="bi bi-instagram"></i></Link>
                                    <Link to={import.meta.env.VITE_APP_LINKEDIN} target='_blank' rel='noreferrer'><i className="bi bi-linkedin"></i></Link>
                                    <Link to={import.meta.env.VITE_APP_YOUTUBE} target='_blank' rel='noreferrer'><i className="bi bi-youtube"></i></Link>

                                    {/* </div> */}
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

                                        <Link to={`${import.meta.env.VITE_APP_MAP2}`} className='text-light d-block mb-3' target='_blank' rel='noreferrer'>
                                            <i className='bi bi-geo-alt fs-5 me-3'></i>
                                            {import.meta.env.VITE_APP_ADDRESS}
                                        </Link>

                                        <Link to={`mailto:${import.meta.env.VITE_APP_EMAIL}`} className='text-light d-block mb-3' target='_blank' rel='noreferrer'>
                                            <i className='bi bi-envelope fs-5 me-3'></i>
                                            {import.meta.env.VITE_APP_EMAIL}
                                        </Link>

                                        <Link to={`tel:${import.meta.env.VITE_APP_PHONE}`} className='text-light d-block mb-3' target='_blank' rel='noreferrer'>
                                            <i className='bi bi-phone fs-5 me-3'></i>
                                            {import.meta.env.VITE_APP_PHONE}
                                        </Link>

                                        <Link to={`https://wa.me/${import.meta.env.VITE_APP_WHATSAPP}`} className='text-light d-block' target='_blank' rel='noreferrer'>
                                            <i className='bi bi-whatsapp fs-5 me-3'></i>
                                            {import.meta.env.VITE_APP_WHATSAPP}
                                        </Link>
                                    </div>

                                    {/* <a href="#" className="read__more">Read more <span className="arrow_right"></span></a> */}
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-3">
                                <div className="footer__option__item">
                                    <h5>Quick Links</h5>
                                    <ul>
                                        <li><Link to="/about">About Me</Link></li>
                                        <li><Link to="/skill">Skills</Link></li>
                                        <li><Link to="project">Projects</Link></li>
                                        <li><Link to="experience">Experience</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-3">
                                <div className="footer__option__item">
                                    <h5>My Services</h5>
                                    <ul>
                                        <li><Link to="/web-development">Web Development</Link></li>
                                        <li><Link to="/react-development">React Applications</Link></li>
                                        <li><Link to="/mern-stack">MERN Stack</Link></li>
                                        <li><Link to="/responsive-ui">Responsive UI Design</Link></li>
                                        <li><Link to="/backend">Backend Integration</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="footer__option__item">
                                    <h5>Newsletter</h5>
                                    <p>Stay updated with my latest projects, web development insights, MERN stack journey, creative designs, and modern responsive website experiences.</p>
                                    <form action="#">
                                        <input type="text" placeholder="Email" />
                                        <button type="submit"><i className="fa fa-send"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <div className="row">
                            <div className="col-lg-12 text-center">

                                <p className="footer__copyright__text">
                                    Copyright © {new Date().getFullYear()} All rights reserved |
                                    Designed & Developed by
                                    <span className="text-info"> Pooja Pal</span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
