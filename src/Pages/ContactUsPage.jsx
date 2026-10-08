import React, { useState } from 'react'
import Hero from '../Components/Hero'

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const email = import.meta.env.VITE_APP_EMAIL || 'poojapal5781@gmail.com';
    const phone = import.meta.env.VITE_APP_PHONE || '9506580566';
    const whatsapp = import.meta.env.VITE_APP_WHATSAPP || '9506580566';
    const address = import.meta.env.VITE_APP_ADDRESS || 'CN-145, Kurauni, Bijnaur Road, Banthara, Lucknow (226401), India';
    const mapUrl = import.meta.env.VITE_APP_MAP2 || '#';

    return (
        <>
            <Hero title='Contact Me' />

            {/* Contact Info Widgets */}
            <section className="contact-widget spad">
                <div className="container">
                    <div className="row">

                        {/* Location */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="contact__widget__item h-100">
                                <div className="contact__widget__item__icon">
                                    <i className="bi bi-geo-alt"></i>
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4 className="text-light">Location</h4>
                                    <a href={mapUrl} className='text-light d-block text-decoration-none' target='_blank' rel='noreferrer'>
                                        {address}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="contact__widget__item h-100">
                                <div className="contact__widget__item__icon">
                                    <i className="bi bi-envelope"></i>
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4 className="text-light">Email Address</h4>
                                    <a href={`mailto:${email}`} className='text-light d-block text-decoration-none'>
                                        {email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="contact__widget__item h-100">
                                <div className="contact__widget__item__icon">
                                    <i className="bi bi-telephone"></i>
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4 className="text-light">Phone / WhatsApp</h4>
                                    <a href={`tel:${phone}`} className='text-light d-block text-decoration-none mb-1'>
                                        Call: +91 {phone}
                                    </a>
                                    <a href={`https://wa.me/${whatsapp}`} target='_blank' rel='noreferrer' className='text-info d-block text-decoration-none small'>
                                        <i className="bi bi-whatsapp me-1"></i> WhatsApp: +91 {whatsapp}
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact spad">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Side Info */}
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <div className="contact__content">
                                <div className="section-title text-start mb-4">
                                    <span className="text-info">GET IN TOUCH</span>
                                    <h2 className="text-light">Let’s Work Together</h2>
                                </div>

                                <p className="text-secondary" style={{ color: '#cbd5e1' }}>
                                    I am actively looking for full-time Full Stack / MERN developer roles, internships,
                                    and freelance opportunities. Have a project in mind or want to discuss ideas? Drop me a message!
                                </p>

                                <div className="contact__info mt-4">
                                    <div className="contact__info__item d-flex align-items-center mb-3">
                                        <i className="bi bi-whatsapp fs-4 text-info me-3"></i>
                                        <span className="text-light">Quick Responses on WhatsApp</span>
                                    </div>
                                    <div className="contact__info__item d-flex align-items-center mb-3">
                                        <i className="bi bi-code-slash fs-4 text-info me-3"></i>
                                        <span className="text-light">Full-Stack MERN Architecture</span>
                                    </div>
                                    <div className="contact__info__item d-flex align-items-center">
                                        <i className="bi bi-shield-check fs-4 text-info me-3"></i>
                                        <span className="text-light">Clean Code & Responsive Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Form */}
                        <div className="col-lg-7">
                            <div className="contact__form">
                                {submitted && (
                                    <div className="alert alert-info bg-dark border-info text-light mb-4" role="alert">
                                        <i className="bi bi-check-circle-fill text-info me-2"></i>
                                        Thank you! Your message has been sent successfully. I will get back to you soon.
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />

                                    <textarea
                                        name="message"
                                        placeholder="Write your message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="btn-hire border-0 text-dark fw-bold px-4 py-3"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="bi bi-send-fill me-2"></i> Send Message
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