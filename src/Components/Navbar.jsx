import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="header__logo">
                                <Link to='/'>
                                    <h5 className='text-light fs-5'>{import.meta.env.VITE_APP_SITE_NAME}</h5>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="header__nav__option">
                                <nav className="header__nav__menu mobile-menu">
                                    <ul>
                                        <li className="active"><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li><NavLink to="/projects">Projects</NavLink></li>
                                        <li><NavLink to="/services">Services</NavLink></li>
                                        <li><NavLink to="/contactus">Contact Us</NavLink></li>
                                        <li><NavLink to="#">Explore</NavLink>
                                            <ul className="dropdown">
                                                <li><NavLink to="/about">About</NavLink></li>
                                                <li><NavLink to="/experience">Experience</NavLink></li>
                                                <li><NavLink to="/skills">Skills</NavLink></li>
                                                <li><NavLink to="/education">Education</NavLink></li>
                                                <li><NavLink to="/faq">Faq</NavLink></li>
                                                <li><NavLink to="/testimonial">Testimonial</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="header__nav__social">
                                    <Link to={import.meta.env.VITE_APP_FACEBOOK} target='_blank' rel='noreferrer'><i className="bi bi-twitter-x"></i></Link>
                                    <Link to={import.meta.env.VITE_APP_TWITTER} target='_blank' rel='noreferrer'><i className="bi bi-facebook"></i></Link>
                                    <Link to={import.meta.env.VITE_APP_INSTAGRAM} target='_blank' rel='noreferrer'><i className="bi bi-instagram"></i></Link>
                                    <Link to={import.meta.env.VITE_APP_LINKEDIN} target='_blank' rel='noreferrer'><i className="bi bi-linkedin"></i></Link>
                                    <Link to={import.meta.env.VITE_APP_YOUTUBE} target='_blank' rel='noreferrer'><i className="bi bi-youtube"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </header>
        </>
    )
}
