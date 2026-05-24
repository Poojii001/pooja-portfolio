import React from 'react'

export default function Testimonial() {
    return (
        <>
            <section className="services spad">
                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-4">
                            <div className="services__title">
                                <div className="section-title">
                                    <span>Testimonials</span>
                                    <h2>What Clients Say</h2>
                                </div>

                                <p>
                                    Here are some reviews and feedback from
                                    clients and mentors about my work and skills.
                                </p>

                                <a href="#" className="primary-btn">
                                    View More
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-8">

                            <div
                                id="testimonialSlider"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >

                                <div className="carousel-inner">

                                    <div className="carousel-item active">
                                        <div className="testimonial__item services__item">

                                            <div className="testimonial__text">
                                                <p>
                                                    Pooja delivered a clean and responsive
                                                    website with smooth functionality
                                                    and modern UI design.
                                                </p>
                                            </div>

                                            <div className="testimonial__author">

                                                <div className="testimonial__author__pic">
                                                    <img
                                                        src="img/testimonial/ta-1.jpg"
                                                        alt=""
                                                    />
                                                </div>

                                                <div className="testimonial__author__text">
                                                    <h5>Rahul Sharma</h5>
                                                    <span>Frontend Client</span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="testimonial__item services__item">

                                            <div className="testimonial__text">
                                                <p>
                                                    Her MERN stack skills are impressive.
                                                    The project was completed on time
                                                    with proper backend integration.
                                                </p>
                                            </div>

                                            <div className="testimonial__author">

                                                <div className="testimonial__author__pic">
                                                    <img
                                                        src="img/testimonial/ta-2.jpg"
                                                        alt=""
                                                    />
                                                </div>

                                                <div className="testimonial__author__text">
                                                    <h5>Anjali Verma</h5>
                                                    <span>Project Manager</span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="testimonial__item services__item">

                                            <div className="testimonial__text">
                                                <p>
                                                    Very hardworking and creative developer.
                                                    She builds responsive and user-friendly
                                                    web applications.
                                                </p>
                                            </div>

                                            <div className="testimonial__author">

                                                <div className="testimonial__author__pic">
                                                    <img
                                                        src="img/testimonial/ta-3.jpg"
                                                        alt=""
                                                    />
                                                </div>

                                                <div className="testimonial__author__text">
                                                    <h5>Amit Singh</h5>
                                                    <span>Full Stack Mentor</span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#testimonialSlider"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon"></span>
                                </button>

                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#testimonialSlider"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon"></span>
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}