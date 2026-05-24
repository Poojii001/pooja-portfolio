import React from "react";

export default function Faq() {
  return (
    <section className="faq-section" id="faq">
      <div className="container">

        {/* Title */}
        <div className="section-title">
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-wrapper">

          <details className="faq-card">
            <summary className="faq-question">
              What technologies do you work with?
            </summary>
            <p className="faq-answer">
              I work with MERN stack (MongoDB, Express, React, Node.js) and modern frontend tools.
            </p>
          </details>

          <details className="faq-card">
            <summary className="faq-question">
              Do you build responsive websites?
            </summary>
            <p className="faq-answer">
              Yes, all my websites are fully responsive and mobile-friendly.
            </p>
          </details>

          <details className="faq-card">
            <summary className="faq-question">
              Are you available for internships?
            </summary>
            <p className="faq-answer">
              Yes, I am open for internships, freelance and collaboration opportunities.
            </p>
          </details>

          <details className="faq-card">
            <summary className="faq-question">
              Do you build full stack projects?
            </summary>
            <p className="faq-answer">
              Yes, I develop complete MERN stack applications with frontend, backend and database integration.
            </p>
          </details>

        </div>

      </div>
    </section>
  );
}