import React from "react";
import { Link } from "react-router-dom";

export default function HireSection() {
  return (
    <section className="hire-section" id="hire">
      <div className="container">

        <div className="hire-box">

          <h2 className="text-light">Let’s Work Together </h2>

          <p>
            I am open for internships, freelance projects and full-time opportunities.
            Let’s build something amazing together.
          </p>

          <div className="hire-buttons">

            {/* Download CV */}
            <a
              href="/Pooja_Pal_CV.pdf"
              download
              className="btn-cv"
            >
              Download CV 
            </a>

            {/* Hire Me */}
            <Link to="/contactus" className="btn-hire">
              Hire Me 
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}