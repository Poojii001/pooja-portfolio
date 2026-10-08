import React from 'react'

export default function About() {
    return (
        <>
            <section className="about spad">
                <div className="container">

                    <div className="row align-items-center">

                        {/* Image Side */}
                        <div className="col-lg-7">

                            <div className="about__pic">

                                <img
                                    src="/img/about/pooja.png"
                                    alt=""
                                    className="about__img"
                                />

                            </div>

                        </div>

                        {/* Text Side */}
                        <div className="col-lg-5">

                            <div className="about__text">

                                <div className="section-title">
                                    <span>About Me</span>
                                    <h2>Who Am I?</h2>
                                </div>

                                <div className="row">

                                    <div className="col-lg-6 col-md-6 col-sm-6">

                                        <div className="services__item">

                                            <div className="services__item__icon">
                                                <img src="/img/icons/si-3.png" alt="Frontend" />
                                            </div>

                                            <h4>Frontend</h4>

                                            <p>
                                                Modern responsive UI with React JS.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6">

                                        <div className="services__item">

                                            <div className="services__item__icon">
                                                <img src="/img/icons/si-4.png" alt="MERN Stack" />
                                            </div>

                                            <h4>MERN Stack</h4>

                                            <p>
                                                Full stack web applications and APIs.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                <div className="about__text__desc">

                                    <p>
                                        Hello! I’m Pooja Pal, a passionate MERN Stack Developer
                                        who loves creating modern, responsive, and user-friendly
                                        web applications. I have completed my graduation in
                                        Computer Science and recently completed a 6-month MERN
                                        Stack training program where I gained hands-on experience
                                        in React.js, Node.js, Express.js, and MongoDB.

                                        I enjoy turning creative ideas into real-world web
                                        applications with clean UI designs and efficient backend
                                        functionality. I have worked on projects like LifeLink
                                        and E-commerce websites which helped me improve my skills
                                        in API integration, frontend-backend connectivity,
                                        authentication, and responsive web design.

                                        I am always eager to learn new technologies, improve my
                                        coding skills, and build impactful digital experiences.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
