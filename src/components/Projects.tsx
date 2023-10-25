import { Link } from "react-router-dom";
import "../css/Project.scss";
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
  const [ref, isInView] = useInView();
  const itemAnimations = [
    {
      initial: { opacity: 0, x: -120 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0 },
    },
    {
      initial: { opacity: 0, y: 120 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    },
    {
      initial: { opacity: 0, x: 120 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0 },
    },
  ];

  return (
    <div ref={ref} className="section projects" id="projects">
      <div className="section-header">
        <h2 className="topic-heading projects-heading">Projects</h2>
      </div>
      <div className="items">
        {displayProjects.map((project, index) => (
          <motion.div
            initial={itemAnimations[index].initial}
            animate={isInView ? itemAnimations[index].animate : {}}
            transition={itemAnimations[index].transition}
            className="item animation-transition"
            key={project.id}
          >
            <a href={project.previewLink} className="image-btn" target="_blank">
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
          </motion.div>
        ))}
      </div>
      <Link to="/projects" className="btn view-more-btn">
        View More
      </Link>
    </div>
  );
}

export default Project;
