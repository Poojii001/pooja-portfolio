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
              href="/resume/Pooja_Pal_Resume.png"
              download="Pooja_Pal_FullStack_Resume.png"
              className="btn-cv d-inline-flex align-items-center gap-2"
            >
              <i className="bi bi-download"></i> Download CV 
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