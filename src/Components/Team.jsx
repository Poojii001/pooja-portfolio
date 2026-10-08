import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  const githubUrl = import.meta.env.VITE_APP_GITHUB || 'https://github.com/Poojii001';
  const linkedinUrl = import.meta.env.VITE_APP_LINKEDIN || '#';
  const twitterUrl = import.meta.env.VITE_APP_TWITTER || '#';
  const instagramUrl = import.meta.env.VITE_APP_INSTAGRAM || '#';

  const teamCards = [
    {
      name: "Pooja Pal",
      role: "Frontend Developer",
      image: "/img/team/t2.jpg"
    },
    {
      name: "Pooja Pal",
      role: "Backend & API Systems",
      image: "/img/team/t4.jpg"
    },
    {
      name: "Pooja Pal",
      role: "Full Stack Engineer",
      image: "/img/team/t1.jpg"
    },
    {
      name: "Pooja Pal",
      role: "MERN Stack Developer",
      image: "/img/team/t3.jpeg"
    }
  ];

  return (
    <section
      className="team spad"
      style={{ backgroundImage: "url('/img/hero/h.png')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title team__title">
              <span>Nice to meet</span>
              <h2>OUR Team</h2>
            </div>
          </div>
        </div>

        <div className="row position-relative">
          {teamCards.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 p-0">
              <div
                className={`team__item ${
                  index === 1
                    ? 'team__item--second'
                    : index === 2
                    ? 'team__item--third'
                    : index === 3
                    ? 'team__item--four'
                    : ''
                }`}
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="team__item__text">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>

                  <div className="team__item__social">
                    <a href={githubUrl} target='_blank' rel='noreferrer' title="GitHub">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href={linkedinUrl} target='_blank' rel='noreferrer' title="LinkedIn">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    {twitterUrl !== '#' && (
                      <a href={twitterUrl} target='_blank' rel='noreferrer' title="Twitter / X">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                    )}
                    {instagramUrl !== '#' && (
                      <a href={instagramUrl} target='_blank' rel='noreferrer' title="Instagram">
                        <i className="bi bi-instagram"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12 p-0">
            <div className="team__btn">
              <Link to="/about" className="primary-btn">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}