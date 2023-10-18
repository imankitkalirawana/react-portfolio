import { Link } from "react-router-dom";
import "../css/Project.css";
import ImageGallery from "react-image-gallery";
import { useState } from "react";

type ProjectsProps = {
  projects: {
    id: number;
    title: string;
    images: string[];
    description: string;
    technologies: string;
    link: string;
    previewLink: string;
  }[];
};

function Project({ projects }: ProjectsProps) {
  const projectDir = "/projects";
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="section projects" id="projects">
      <div className="section-header">
        <Link
          to="/"
          className="btn view-more-btn"
          style={{ borderColor: "transparent", alignSelf: "flex-start" }}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <input
          className="input"
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="items">
        {projects
          .filter((project) =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((project) => (
            <div className="item" key={project.id}>
              <a
                href={project.previewLink}
                className="image-btn"
                target="_blank"
              >
                <ImageGallery
                  items={project.images.map((image) => ({
                    original: projectDir + "/" + image,
                  }))}
                  showNav={false}
                  showThumbnails={false}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  autoPlay
                />
              </a>
              <div className="item-details">
                <h3 className="item-heading">{project.title}</h3>
                <p className="item-description">{project.technologies}</p>
              </div>
              <a className="item-link" href={project.link} target="_blank">
                <i className="fa-duotone fa-code-compare"></i>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Project;
