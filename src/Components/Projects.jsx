import React from 'react'

export default function Projects() {
    return (
        <>
            <section className="portfolio spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="portfolio__filter">
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".branding">Mern Stack</li>
                                <li data-filter=".digital-marketing">Frontend</li>
                                <li data-filter=".web">Backend</li>
                                <li data-filter=" .ecommerce">eCommerce</li>
                                <li data-filter=".photography">Aut, API, UI</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio__gallery">
                        <div className="col-lg-4 col-md-6 col-sm-6 mix branding">
                            <div className="portfolio__item">
                                <div
                                    className="portfolio__item__video"
                                    style={{
                                        backgroundImage: "url('/img/project/p1.png')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "250px",
                                        borderRadius: "10px"
                                    }}
                                ></div>
                                <div className="portfolio__item__text">
                                    <h4>Apni Dukan - E-Commerce Website</h4>

                                    <ul>
                                        <li>MERN Stack</li>
                                        <li>React.js</li>
                                        <li>Node.js</li>
                                        <li>MongoDB</li>
                                        <li>JWT Auth</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mix digital-marketing">
                            <div className="portfolio__item">
                                <div
                                    className="portfolio__item__video"
                                    style={{
                                        backgroundImage: "url('/img/project/p222.png')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "250px",
                                        borderRadius: "10px"
                                    }}
                                ></div>
                                <div className="portfolio__item__text">
                                    <h4>LifeLink - Hospital Management & Emergency System</h4>
                                    <span>React • Node.js • MongoDB • Express</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mix web">
                            <div className="portfolio__item">
                                <div
                                    className="portfolio__item__video"
                                    style={{
                                        backgroundImage: "url('/img/project/p3.png')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "250px",
                                        borderRadius: "10px"
                                    }}
                                ></div>
                                <div className="portfolio__item__text">
                                    <h4>NewsApp - Live News Aggregator</h4>
                                    <span>React.js • API Integration</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mix photography">
                            <div className="portfolio__item">
                                <div
                                    className="portfolio__item__video"
                                    style={{
                                        backgroundImage: "url('/img/project/p4.png')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "250px",
                                        borderRadius: "10px"
                                    }}
                                ></div>
                                <div className="portfolio__item__text">
                                    <h4>State Management with Context API</h4>
                                    <ul>
                                        <li>React</li>
                                        <li>Context API</li>
                                        <li>Dynamic Data Handling</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mix ecommerce">
                            <div className="portfolio__item">
                                <div
                                    className="portfolio__item__video"
                                    style={{
                                        backgroundImage: "url('/img/project/p5.png')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "250px",
                                        borderRadius: "10px"
                                    }}
                                ></div>
                                <div className="portfolio__item__text">
                                    <h4>Modern To‑Do List App</h4>
                                    <span>HTML • CSS • JavaScript</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mix branding">
                            <div className="portfolio__item">
                                <div
                                    className="portfolio__item__video"
                                    style={{
                                        backgroundImage: "url('/img/project/p6.png')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "250px",
                                        borderRadius: "10px"
                                    }}
                                ></div>
                                <div class="portfolio__item__text">
                                    <h4>MyChatApp</h4>
                                    <ul>
                                        <li>Real-time Messaging</li>
                                        <li>Node.js + Socket.io</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mix web">
                            <div className="portfolio__item">
                                <div
                                    className="portfolio__item__video"
                                    style={{
                                        backgroundImage: "url('/img/project/p7.png')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "250px",
                                        borderRadius: "10px"
                                    }}
                                ></div>
                                <div class="portfolio__item__text">
                                    <h4>BMI Calculator App</h4>
                                    <ul>
                                        <li>HTML, CSS, JavaScript</li>
                                        <li>Responsive Design</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mix photography">
                            <div className="portfolio__item">
                                <div
                                    className="portfolio__item__video"
                                    style={{
                                        backgroundImage: "url('/img/project/p8.png')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "250px",
                                        borderRadius: "10px"
                                    }}
                                ></div>
                                <div class="portfolio__item__text">
                                    <h4>Interactive Color Switcher</h4>
                                    <span>HTML • CSS • JS</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mix ecommerce">
                            <div className="portfolio__item">
                                <div
                                    className="portfolio__item__video"
                                    style={{
                                        backgroundImage: "url('/img/project/p9.png')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "250px",
                                        borderRadius: "10px"
                                    }}
                                ></div>
                                <div className="portfolio__item__text">
                                    <h4>Amazon Shopping Clone</h4>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pagination__option">
                                <a href="#" className="arrow__pagination left__arrow"><span className="arrow_left"></span> Prev</a>
                                <a href="#" className="number__pagination">1</a>
                                <a href="#" className="number__pagination">2</a>
                                <a href="#" className="arrow__pagination right__arrow">Next <span className="arrow_right"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
