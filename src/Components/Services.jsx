import React from "react";

import { Link } from "react-router-dom";

export default function Services() {
    return (
        <section className="services-section" id="services">
            <div className="container">

                {/* Title */}
                <div className="section-title">
                    <span>My Services</span>
                    <h2>What I Do?</h2>
                </div>

                <div className="services-grid">

                    <ServiceCard
                        icon="bi-code-slash"
                        title="Frontend Development"
                        desc="I build responsive and modern UI using React.js, HTML5, CSS3 and modern component architectures."
                    />

                    <ServiceCard
                        icon="bi-server"
                        title="Backend Development"
                        desc="Secure REST APIs using Node.js, Express.js and MongoDB with JWT authentication."
                    />

                    <ServiceCard
                        icon="bi-phone"
                        title="Responsive Design"
                        desc="Fully mobile-friendly UI for all screen sizes and devices with fast performance."
                    />

                    <ServiceCard
                        icon="bi-shield-lock"
                        title="Authentication System"
                        desc="Secure login/signup systems with JWT, bcrypt, and role-based route protection."
                    />

                </div>

                {/* CTA Button */}
                <div className="services-cta mt-5 text-center">
                    <Link to="/hire" className="btn-hire px-4 py-3 d-inline-block text-decoration-none">
                        Hire Me <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                </div>

            </div>
        </section>
    );
}

/* Card */
function ServiceCard({ icon, title, desc }) {
    return (
        <div className="service-card">
            <i className={`bi ${icon}`}></i>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    );
}