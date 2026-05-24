import React from "react";

const Education = () => {
  return (
    <section className="education-section py-5" id="education">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="text-light fw-bold">Education</h2>
          <p className="text-info">My academic journey</p>
        </div>

        <div className="timeline">

          {/* Item 1 */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <h5 className="text-light fw-bold">
                Bachelor of Technology (CSE)
              </h5>
              <span className="text-info">AKTU University | 2022 - 2026</span>
              <p className="text-secondary mt-2">
                Learning MERN Stack, Web Development, DSA and Software Engineering.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-item right">
            <div className="timeline-content">
              <h5 className="text-light fw-bold">
                Higher Secondary (12th)
              </h5>
              <span className="text-info">UP Board | 2021 - 2022</span>
              <p className="text-secondary mt-2">
                Science stream with Physics, Chemistry and Mathematics.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <h5 className="text-light fw-bold">
                High School (10th)
              </h5>
              <span className="text-info">UP Board | 2019 - 2020</span>
              <p className="text-secondary mt-2">
                Built foundation in Math and Science.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;