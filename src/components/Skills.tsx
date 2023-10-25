import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

type Props = {
  skills: {
    id: number;
    percentage: number;
    image: string;
    color: string;
    background: string;
  }[];
  educations: {
    id: number;
    title: string;
    institutionShort: string;
    location: string;
    year: string;
  }[];
  certifications: {
    id: number;
    title: string;
    priority: number;
    institution: string;
  }[];
};

function Skills({ skills, educations, certifications }: Props) {
  const [ref, isInView] = useInView();

  const displaySkills = [...skills]
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 8);
  const displayEducation = educations.slice(0, 3);
  const displayCertification = [...certifications]
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 3);

  return (
    <div ref={ref} className="section skills" id="skills">
      <h2 className="topic-heading skills-heading">Skills & Education</h2>
      <div className="skills-content">
        <div className="skills-content-left">
          {displaySkills.map((skill) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.8 }}
              className="skills-card-left"
              style={{ background: skill.background }}
              key={skill.id}
            >
              <i className={skill.image} style={{ color: skill.color }}></i>
              <div className="progress-bar">
                <div
                  className="progress-track"
                  style={{
                    width: `${skill.percentage}%`,
                    background: skill.color,
                  }}
                ></div>
              </div>
              <div className="percentage">{skill.percentage}%</div>
            </motion.div>
          ))}
        </div>
        <div className="skills-divider"></div>
        <div className="skills-content-right">
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 120 }}
            transition={{ duration: 0.8 }}
            className="education-card education-crd"
          >
            {displayEducation.map((education) => (
              <div className="education-pre" key={education.id}>
                <h3>{education.title}</h3>
                <p>
                  {education.institutionShort} ({education.year})
                </p>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 120 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="education-card certificate-crd"
          >
            {displayCertification.map((certification) => (
              <div className="education-pre" key={certification.id}>
                <h3>{certification.title}</h3>
                <p>{certification.institution}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <Link to="/skills" className="btn view-more-btn">
        View More
      </Link>
    </div>
  );
}

export default Skills;
