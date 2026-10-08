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
                                        Hello! I’m Pooja Pal, a passionate MERN Stack Developer who loves creating modern, responsive, and high-performance web applications. I am pursuing B.Tech in Computer Science and Engineering, with verified industry training from <strong>Logimetrix Techsolutions Pvt. Ltd. (Lucknow)</strong> and <strong>S O INFOTECH (P) LTD. (Noida)</strong>.
                                    </p>
                                    <p>
                                        I specialize in building end-to-end full stack web applications with React.js, Node.js, Express.js, and MongoDB. I have built production-ready systems like <strong>LifeLink Healthcare Portal</strong>, <strong>E-Commerce platforms</strong>, and real-time <strong>Chat Applications</strong> with secure JWT authentication and RESTful APIs.
                                    </p>
                                    <p>
                                        I am eager to contribute to innovative software engineering teams, solve real-world problems, and build impactful digital experiences.
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
