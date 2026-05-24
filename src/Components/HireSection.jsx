import React from "react";

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
            <a href="/hire" className="btn-hire">
              Hire Me 
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}