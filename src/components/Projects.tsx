import { Link } from "react-router-dom";
import "../css/Screens.scss";
import ImageGallery from "react-image-gallery";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

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
  const displayProjects = projects.slice(0, 3);
  const itemAnimations = [
    {
      initial: { opacity: 0, x: -220 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0 },
    },
    {
      initial: { opacity: 0, x: 220 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0 },
    },
    {
      initial: { opacity: 0, x: -220 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0 },
    },
  ];

  return (
    <div className="projects home-projects" id="projects">
      <div className="section-header">
        <h2 className="topic-heading projects-heading">Projects</h2>
      </div>
      <div className="project-items">
        {displayProjects.map((project, index) => {
          const [ref, isInView] = useInView();
          return (
            <motion.div
              initial={itemAnimations[index].initial}
              animate={isInView ? itemAnimations[index].animate : {}}
              transition={itemAnimations[index].transition}
              className="project-item animation-transition"
              key={project.id}
              ref={ref}
            >
              <a
                href={project.previewLink}
                className="project-image-btn"
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
              <div className="project-item-details">
                <h3 className="project-item-heading">{project.title}</h3>

                <p className="project-item-description">
                  {project.description}
                </p>
                <p className="project-item-technologies">
                  {project.technologies.split(", ").map((technology, index) => (
                    <span className="project-item-technology" key={index}>
                      {technology}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <Link to="/projects" className="btn view-more-btn">
        View More
      </Link>
    </div>
  );
}

export default Project;
