import React from 'react'

export default function Faq() {
    return (
        <>
            <section className="services spad">
                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-4">
                            <div className="services__title">
                                <div className="section-title">
                                    <span>FAQ</span>
                                    <h2>Frequently Asked Questions</h2>
                                </div>

                                <p>
                                    Find answers to common questions about my
                                    development services, skills and projects.
                                </p>

                                <a href="#" className="primary-btn">
                                    Contact Me
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="row">

                                <div className="col-lg-6 col-md-6">
                                    <details className="faq__item services__item">
                                        <summary className="faq__question">
                                            What technologies do you work with?
                                        </summary>

                                        <div className="faq__answer">
                                            <p>
                                                I work with MongoDB, Express.js,
                                                React.js, Node.js and modern
                                                frontend technologies.
                                            </p>
                                        </div>
                                    </details>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <details className="faq__item services__item">
                                        <summary className="faq__question">
                                            Do you create responsive websites?
                                        </summary>

                                        <div className="faq__answer">
                                            <p>
                                                Yes, all websites are fully responsive
                                                and optimized for every device.
                                            </p>
                                        </div>
                                    </details>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <details className="faq__item services__item">
                                        <summary className="faq__question">
                                            Are you available for internships?
                                        </summary>

                                        <div className="faq__answer">
                                            <p>
                                                Yes, I am open for internships,
                                                freelance and collaboration opportunities.
                                            </p>
                                        </div>
                                    </details>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <details className="faq__item services__item">
                                        <summary className="faq__question">
                                            Do you build full stack projects?
                                        </summary>

                                        <div className="faq__answer">
                                            <p>
                                                Yes, I develop complete MERN stack
                                                applications with frontend, backend
                                                and database integration.
                                            </p>
                                        </div>
                                    </details>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}