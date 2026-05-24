import React from "react";

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
                backgroundImage: "url('/img/team/team-1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="team__item__text">
                <h4>AMANDA STONE</h4>
                <p>Videographer</p>

                <div className="team__item__social">
                  <a href="/">
                    <i className="bi bi-facebook"></i>
                  </a>

                  <a href="/">
                    <i className="bi bi-twitter"></i>
                  </a>

                  <a href="/">
                    <i className="bi bi-dribbble"></i>
                  </a>

                  <a href="/">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team 2 */}
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div
              className="team__item team__item--second"
              style={{
                backgroundImage: "url('/img/team/team-2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="team__item__text">
                <h4>AMANDA STONE</h4>
                <p>Videographer</p>

                <div className="team__item__social">
                  <a href="/">
                    <i className="bi bi-facebook"></i>
                  </a>

                  <a href="/">
                    <i className="bi bi-twitter"></i>
                  </a>

                  <a href="/">
                    <i className="bi bi-dribbble"></i>
                  </a>

                  <a href="/">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team 3 */}
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div
              className="team__item team__item--third"
              style={{
                backgroundImage: "url('/img/team/team-3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="team__item__text">
                <h4>AMANDA STONE</h4>
                <p>Videographer</p>

                <div className="team__item__social">
                  <a href="/">
                    <i className="bi bi-facebook"></i>
                  </a>

                  <a href="/">
                    <i className="bi bi-twitter"></i>
                  </a>

                  <a href="/">
                    <i className="bi bi-dribbble"></i>
                  </a>

                  <a href="/">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team 4 */}
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div
              className="team__item team__item--four"
              style={{
                backgroundImage: "url('/img/team/team-4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="team__item__text">
                <h4>AMANDA STONE</h4>
                <p>Videographer</p>

                <div className="team__item__social">
                  <a href="/">
                    <i className="bi bi-facebook"></i>
                  </a>

                  <a href="/">
                    <i className="bi bi-twitter"></i>
                  </a>

                  <a href="/">
                    <i className="bi bi-dribbble"></i>
                  </a>

                  <a href="/">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 p-0">
            <div className="team__btn">
              <a href="/" className="primary-btn">
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}