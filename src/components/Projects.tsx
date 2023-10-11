function Project() {
  return (
    <div className="projects" id="projects">
      <h2 className="topic-heading specilize-heading">Specilizing in</h2>
      <div className="specilize-content">
        <div className="specilize-card">
          <i className="fa-regular fa-browser"></i>
          <div className="specilize-card-content">
            <h4>Website Development</h4>
            <p>Knowledge of more than 5 programming languages</p>
          </div>
        </div>
        <div className="specilize-card">
          <div className="specilize-card-logo">
            <i className="fa-regular fa-swatchbook"></i>
          </div>
          <div className="specilize-card-content">
            <h4>UI Designing</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="specilize-card">
          <div className="specilize-card-logo">
            <i className="fa-regular fa-video-plus"></i>
          </div>
          <div className="specilize-card-content">
            <h4>Photo/Video Editing</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
