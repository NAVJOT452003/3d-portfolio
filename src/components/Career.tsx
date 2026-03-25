import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications</h4>
                <h5>Noida Institute of Engineering and Technology, GREATER NOIDA, AKTU UNIVERSITY</h5>
              </div>
              <h3>Expected 2026</h3>
            </div>
            <p>
              Pursuing my post-graduation with a strong focus on software development and modern web technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>Ram Dayalu Singh College, BRABU University, BIHAR </h5>
              </div>
              <h3>2020 – 2023</h3>
            </div>
            <p>
              Built a strong foundation in computer science principles and programming.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>R.C.N.D INTER COLLEGE, KANTI, MUZAFFARPUR, BIHAR  </h5>
              </div>
              <h3>2018 – 2020</h3>
            </div>
            <p>
              Completed higher secondary education, building a strong academic and analytical foundation.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
