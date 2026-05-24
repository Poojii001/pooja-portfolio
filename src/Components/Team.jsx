import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
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
          {/* Team 1 */}
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div
              className="team__item"
              style={{
                backgroundImage: "url('/img/team/t2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="team__item__text">
                <h4>Pooja Pal</h4>
                <p>Full Stack Engineer</p>

                <div className="team__item__social">
                  <Link to={import.meta.env.VITE_APP_FACEBOOK} target='_blank' rel='noreferrer'><i className="bi bi-twitter-x"></i></Link>
                  <Link to={import.meta.env.VITE_APP_TWITTER} target='_blank' rel='noreferrer'><i className="bi bi-facebook"></i></Link>
                  <Link to={import.meta.env.VITE_APP_INSTAGRAM} target='_blank' rel='noreferrer'><i className="bi bi-instagram"></i></Link>
                  <Link to={import.meta.env.VITE_APP_LINKEDIN} target='_blank' rel='noreferrer'><i className="bi bi-linkedin"></i></Link>
                  <Link to={import.meta.env.VITE_APP_YOUTUBE} target='_blank' rel='noreferrer'><i className="bi bi-youtube"></i></Link>

                </div>
              </div>
            </div>
          </div>

          {/* Team 2 */}
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div
              className="team__item team__item--second"
              style={{
                backgroundImage: "url('/img/team/t4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="team__item__text">
                <h4>Pooja Pal</h4>
                <p>Full Stack Engineer</p>

                <div className="team__item__social">
                  <Link to={import.meta.env.VITE_APP_FACEBOOK} target='_blank' rel='noreferrer'><i className="bi bi-twitter-x"></i></Link>
                  <Link to={import.meta.env.VITE_APP_TWITTER} target='_blank' rel='noreferrer'><i className="bi bi-facebook"></i></Link>
                  <Link to={import.meta.env.VITE_APP_INSTAGRAM} target='_blank' rel='noreferrer'><i className="bi bi-instagram"></i></Link>
                  <Link to={import.meta.env.VITE_APP_LINKEDIN} target='_blank' rel='noreferrer'><i className="bi bi-linkedin"></i></Link>
                  <Link to={import.meta.env.VITE_APP_YOUTUBE} target='_blank' rel='noreferrer'><i className="bi bi-youtube"></i></Link>
                </div>
              </div>
            </div>
          </div>

          {/* Team 3 */}
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div
              className="team__item team__item--third"
              style={{
                backgroundImage: "url('/img/team/t1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="team__item__text">
                <h4>Pooja Pal</h4>
                <p>Full Stack Engineer</p>

                <div className="team__item__social">
                  <Link to={import.meta.env.VITE_APP_FACEBOOK} target='_blank' rel='noreferrer'><i className="bi bi-twitter-x"></i></Link>
                  <Link to={import.meta.env.VITE_APP_TWITTER} target='_blank' rel='noreferrer'><i className="bi bi-facebook"></i></Link>
                  <Link to={import.meta.env.VITE_APP_INSTAGRAM} target='_blank' rel='noreferrer'><i className="bi bi-instagram"></i></Link>
                  <Link to={import.meta.env.VITE_APP_LINKEDIN} target='_blank' rel='noreferrer'><i className="bi bi-linkedin"></i></Link>
                  <Link to={import.meta.env.VITE_APP_YOUTUBE} target='_blank' rel='noreferrer'><i className="bi bi-youtube"></i></Link>

                </div>
              </div>
            </div>
          </div>

          {/* Team 4 */}
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div
              className="team__item team__item--four"
              style={{
                backgroundImage: "url('/img/team/t3.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="team__item__text">
                <h4>Pooja Pal</h4>
                <p>Full Stack Engineer</p>

                <div className="team__item__social">
                  <Link to={import.meta.env.VITE_APP_FACEBOOK} target='_blank' rel='noreferrer'><i className="bi bi-twitter-x"></i></Link>
                  <Link to={import.meta.env.VITE_APP_TWITTER} target='_blank' rel='noreferrer'><i className="bi bi-facebook"></i></Link>
                  <Link to={import.meta.env.VITE_APP_INSTAGRAM} target='_blank' rel='noreferrer'><i className="bi bi-instagram"></i></Link>
                  <Link to={import.meta.env.VITE_APP_LINKEDIN} target='_blank' rel='noreferrer'><i className="bi bi-linkedin"></i></Link>
                  <Link to={import.meta.env.VITE_APP_YOUTUBE} target='_blank' rel='noreferrer'><i className="bi bi-youtube"></i></Link>

                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 p-0">
            <div className="team__btn">
              <Link to="/" className="primary-btn">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}