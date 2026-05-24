import React from "react";

export default function Testimonial() {
  return (
    <section className="testimonial-section" id="testimonial">
      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-4">
            <div className="testimonial-title">

              <div className="section-title">
                <span>Testimonials</span>
                <h2>What Clients Say</h2>
              </div>

              <p>
                Here are some reviews and feedback from clients and mentors
                about my work and skills.
              </p>

              <a href="#contact" className="primary-btn">
                View More
              </a>

            </div>
          </div>

          {/* Right Side Cards */}
          <div className="col-lg-8">

            <div className="testimonial-grid">

              <TestimonialCard
                text="Pooja delivered a clean and responsive website with smooth functionality and modern UI design."
                name="Rahul Sharma"
                role="Frontend Client"
                // img="img/testimonial/ta-1.jpg"
              />

              <TestimonialCard
                text="Her MERN stack skills are impressive. The project was completed on time with proper backend integration."
                name="Anjali Verma"
                role="Project Manager"
                // img="img/testimonial/ta-2.jpg"
              />

              <TestimonialCard
                text="Very hardworking and creative developer. She builds responsive and user-friendly web applications."
                name="Amit Singh"
                role="Full Stack Mentor"
                // img="img/testimonial/ta-3.jpg"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* Card Component */
function TestimonialCard({ text, name, role, img }) {
  return (
    <div className="testimonial-card">

      <i className="bi bi-chat-quote-fill quote-icon"></i>

      <p>{text}</p>

      <div className="testimonial-user">

        <img src={img} alt={name} />

        <div>
          <h5>{name}</h5>
          <span>{role}</span>
        </div>

      </div>

    </div>
  );
}