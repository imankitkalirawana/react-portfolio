function Skills() {
  return (
    <div className="section skills" id="skills">
      <h2 className="topic-heading skills-heading">Skills & Education</h2>
      <div className="skills-content">
        <div className="skills-content-left">
          <div className="skills-card-left html5card">
            <i className="fa-brands fa-html5"></i>
            <div className="progress-bar">
              <div className="progress-track"></div>
            </div>
            <div className="percentage">95%</div>
          </div>
          <div className="skills-card-left css3card">
            <i className="fa-brands fa-css3"></i>
            <div className="progress-bar">
              <div className="progress-track"></div>
            </div>
            <div className="percentage">90%</div>
          </div>
          <div className="skills-card-left jscard">
            <i className="fa-brands fa-js"></i>
            <div className="progress-bar">
              <div className="progress-track"></div>
            </div>
            <div className="percentage">80%</div>
          </div>
          <div className="skills-card-left pythoncard">
            <i className="fa-brands fa-python"></i>
            <div className="progress-bar">
              <div className="progress-track"></div>
            </div>
            <div className="percentage">80%</div>
          </div>
          <div className="skills-card-left reactcard">
            <i className="fa-brands fa-react"></i>
            <div className="progress-bar">
              <div className="progress-track"></div>
            </div>
            <div className="percentage">75%</div>
          </div>
        </div>
        <div className="skills-divider"></div>
        <div className="skills-content-right">
          <div className="education-card education-crd">
            <div className="education-pre">
              <h3>Bachelor of computer science and technology</h3>
              <p>LPU (2026)</p>
            </div>
            <div className="education-pre">
              <h3>
                XII<sup>th</sup> from CBSE
              </h3>
              <p>ASSS (2021)</p>
            </div>
            <div className="education-pre">
              <h3>
                X<sup>th</sup> from CBSE
              </h3>
              <p>ASSS (2019)</p>
            </div>
          </div>
          <div className="education-card certificate-crd">
            <div className="education-pre">
              <h3>Introduction to HTML, CSS and Javascript</h3>
              <p>Coursera</p>
            </div>
            <div className="education-pre">
              <h3>Introduction to Cloud Computing</h3>
              <p>Coursera</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
