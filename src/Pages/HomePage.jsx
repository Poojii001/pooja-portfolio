import React from 'react'
import About from '../Components/About'
import Services from '../Components/Services'
import Stats from '../Components/Stats'
import Projects from '../Components/Projects'
import Team from '../Components/Team'

import Education from '../Components/Education'
import Faq from '../Components/Faq'
import Testimonial from '../Components/Testimonial'
import Skills from '../Components/Skills'
import { Link } from 'react-router-dom'
import Experience from '../Components/Experience'
import HireSection from '../Components/HireSection'

export default function HomePage() {
    return (
        <>

            {/* <div className="hero__slider ">
            <div className="hero__item">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero__text">
                                <span>For website and video editing</span>
                                <h2>Videographer’s Portfolio</h2>
                                <a href="#" className="primary-btn">See more about us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
            <section className="hero__item">
                <div className="hero-content">

                    <span>Full Stack Developer</span>
                    <h6 className='text-info mb-2'>
                        Building Modern Web Experiences
                    </h6>
                    <h2> Code. Create. Innovate. Repeat.</h2>

                    <Link to="/projects" className="primary-btn">
                        Explore My World
                    </Link>
                </div>

                <div className="hero-right">
                    <img src="/img/hero/h2.png" alt="profile" />
                </div>
            </section>
            <About />
            <Education />
            <Skills />
            <Stats />
            <Services />
            <Projects />
            <HireSection />
            <Team />
            <Experience />
            <Testimonial />
            <Faq />
        </>
    )
}
