import ReactTyped from "react-typed";
import AvatarImg from "/imankitkalirawana.jpg";
import { Link } from "react-router-dom";

function Banner() {
  const typingText = [
    "Developer",
    "Designer",
    "Programmer",
    "Machine Learner",
    "Freelancer",
  ];
  return (
    <>
      <div className="banner">
        <div className="banner-top">
          <div className="banner-1">
            <div className="textarea">
              <h2 className="text-1">Hello, I'm</h2>
              <h1 className="text-2">Bhuneshvar</h1>
              <h4 className="text-3">
                I'm a{" "}
                <span className="typing">
                  <ReactTyped
                    strings={typingText}
                    typeSpeed={100}
                    backSpeed={60}
                    loop
                  />
                </span>
              </h4>
              <p className="text-4">
                Crafting digital delights with Web and AI 👋
              </p>

              <div className="banner-btns">
                <Link to="/app" className="hire-btn">
                  Hire Me
                </Link>
                <a href="#" className="explore-btn">
                  Explore!
                </a>
              </div>
            </div>
            <div className="avatar">
              <img className="avatar-img" src={AvatarImg} alt="" />
            </div>
          </div>
        </div>
        <div className="banner-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#6e50fd"
              fillOpacity="1"
              d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,154.7C672,117,768,75,864,64C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Banner;
