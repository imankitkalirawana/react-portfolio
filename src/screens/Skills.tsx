import { Link } from "react-router-dom";
import "../css/Screens.scss";
import { useState } from "react";

type Props = {
  skills: {
    id: number;
    title: string;
    percentage: number;
    image: string;
    color: string;
    background: string;
    isFontAwesome: boolean;
  }[];
};

function Skills({ skills }: Props) {
  const display = [...skills].sort((a, b) => b.percentage - a.percentage);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="section skills">
      <div className="skills-content-left">
        {display
          .filter((skill) =>
            skill.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((skill, index) => (
            <>
              <div
                className="skills-card-left animation-transition"
                style={{ background: skill.background }}
                key={index}
              >
                <span
                  style={{ background: skill.background, color: skill.color }}
                  className="skill-title"
                >
                  {skill.title}
                </span>

                {skill.isFontAwesome ? (
                  <i className={skill.image} style={{ color: skill.color }}></i>
                ) : (
                  <img src={`/skills/${skill.image}`} className="skill-image" />
                )}
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
              </div>
            </>
          ))}
      </div>
    </div>
  );
}

export default Skills;
