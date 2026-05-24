import React from 'react'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'

export default function ContactUsPage() {
    return (
        <>
            <Hero title='Contact Me' />

            {/* Contact Info */}
            <section className="contact-widget spad">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="contact__widget__item">

                                <div className="contact__widget__item__icon">
                                    <i className="bi bi-geo-alt fs-5 me-3"></i>
                                </div>

                                <div className="contact__widget__item__text">
                                    <Link to={`${import.meta.env.VITE_APP_MAP2}`} className='text-light d-block mb-3' target='_blank' rel='noreferrer'>
                                        {import.meta.env.VITE_APP_ADDRESS}
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact__widget__item">

                                <div className="contact__widget__item__icon">
                                    <i className="bi bi-phone"></i>
                                </div>

                                <div className="contact__widget__item__text">
                                    <Link to={`mailto:${import.meta.env.VITE_APP_EMAIL}`} className='text-light d-block mb-3' target='_blank' rel='noreferrer'>
                                        {import.meta.env.VITE_APP_EMAIL}
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact__widget__item">

                                <div className="contact__widget__item__icon">
                                    <i className="bi bi-envelope"></i>
                                </div>

                                <div className="contact__widget__item__text">
                                    <Link to={`tel:${import.meta.env.VITE_APP_PHONE}`} className='text-light d-block mb-3' target='_blank' rel='noreferrer'>
                                        {import.meta.env.VITE_APP_PHONE}
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* Contact Form */}
            <section className="contact spad">
                <div className="container">

                    <div className="row align-items-center">

                        {/* Left Side */}
                        <div className="col-lg-5">

                            <div className="contact__content">

                                <div className="section-title">
                                    <span>Contact Me</span>
                                    <h2>Let’s Work Together</h2>
                                </div>

                                <p>
                                    Feel free to contact me for web development,
                                    MERN stack projects, internships or collaboration.
                                </p>

                                <div className="contact__info">

                                    <div className="contact__info__item">
                                        <i className="bi bi-whatsapp"></i>
                                        <span>Available on WhatsApp</span>
                                    </div>

                                    <div className="contact__info__item">
                                        <i className="bi bi-code-slash"></i>
                                        <span>MERN Stack Developer</span>
                                    </div>

                                    <div className="contact__info__item">
                                        <i className="bi bi-laptop"></i>
                                        <span>Responsive Web Design</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Right Side */}
                        <div className="col-lg-7">

                            <div className="contact__form">

                                <form action="#">

                                    <div className="row">

                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                            />
                                        </div>

                                        <div className="col-lg-6">
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                            />
                                        </div>

                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Subject"
                                    />

                                    <textarea
                                        placeholder="Write your message..."
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="site-btn"
                                    >
                                        Send Message
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}