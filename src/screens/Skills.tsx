import { Link } from "react-router-dom";
import "../css/Project.scss";
import { useState, useEffect } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "../components/CardSkeleton";
import Popup from "reactjs-popup";
import "../css/Popup.css";

type Props = {
  certifications: {
    id: number;
    title: string;
    priority: number;
    image: string;
    institution: string;
    link: string;
  }[];
};

function Skills({ certifications }: Props) {
  const certificateDir = "/certificates";
  const displayCertificates = [...certifications].sort(
    (a, b) => b.priority - a.priority
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <SkeletonTheme baseColor="var(--lighter)" highlightColor="var(--faded)">
      <div className="section skills">
        <div className="section-header">
          <Link to="/" className="btn btn-back">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <input
            className="input"
            type="text"
            placeholder="Search certificates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="items">
          {isLoading && <CardSkeleton cards={6} />}
          {displayCertificates
            .filter((certificate) =>
              certificate.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
            .map((certificate) => (
              <>
                {!isLoading && (
                  <div className="item" key={certificate.id}>
                    <Popup
                      trigger={
                        <a className="image-btn" target="_blank">
                          <img
                            className="item-img"
                            src={certificateDir + "/" + certificate.image}
                          />
                        </a>
                      }
                    >
                      <div className="popup">
                        <img
                          className="popup-img"
                          src={certificateDir + "/" + certificate.image}
                        />
                        <div className="popup-heading">
                          <p className="label">{certificate.title}</p>
                        </div>
                      </div>
                    </Popup>
                    <div className="item-details">
                      <div>
                        <h3 className="item-heading">{certificate.title}</h3>
                        <p className="item-description">
                          {certificate.institution}
                        </p>
                      </div>
                    </div>
                    <a
                      className="item-link"
                      href={certificate.link}
                      target="_blank"
                    >
                      <i className="fa-duotone fa-code-compare"></i>
                    </a>
                  </div>
                )}
              </>
            ))}
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default Skills;
