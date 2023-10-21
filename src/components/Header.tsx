import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../css/Header.css";

function Header() {
  const [scrollClass, setScrollClass] = useState("");

  // !Header Effect

  useEffect(() => {
    // Add an event listener to the window to track scroll position
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Add a class when scrolled more than 200 pixels
        setScrollClass("header-scroll");
      } else {
        // Remove the class when scrolled less than or equal to 200 pixels
        setScrollClass("");
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ! Dark theme

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div id="head-container" className="head-container">
        <header id="header-scroll" className={scrollClass}>
          <div className="header">
            <div className="header-left">
              <Link to="/#" className="header-logo">
                <i className="fa-duotone fa-code"></i>
                <div className="brand-text">
                  <span className="text-1">Divinely</span>
                  <span className="text-2">Developer</span>
                </div>
              </Link>
              <ul className="header-menu hide-header">
                <Link to="/#">
                  <li className="menu-item">
                    <p>Home</p>
                  </li>
                </Link>
                <Link to="#skills">
                  <li className="menu-item">
                    <p>Skills</p>
                  </li>
                </Link>
                <Link to="#about">
                  <li className="menu-item">
                    <p>About</p>
                  </li>
                </Link>
                <Link to="#contact">
                  <li className="menu-item">
                    <p>Contact</p>
                  </li>
                </Link>
                <li className="menu-item menu-theme">
                  <span>Theme</span>
                  <div className="theme-dropdown">
                    <span
                      id="light-theme-toggle-btn"
                      onClick={() => setTheme("light")}
                    >
                      <i
                        className="fa-regular fa-check"
                        style={{ opacity: theme === "light" ? 1 : 0 }}
                      ></i>{" "}
                      Light
                    </span>
                    <span
                      id="dark-theme-toggle-btn"
                      onClick={() => setTheme("dark")}
                    >
                      <i
                        className="fa-regular fa-check"
                        style={{ opacity: theme === "dark" ? 1 : 0 }}
                      ></i>{" "}
                      Dark
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <div className="btns hide-header">
                <a href="#" className="btn">
                  Login
                </a>
                <a href="#" className="btn btn-primary">
                  Create an account
                </a>
              </div>
              <button className="header-menu-open" id="header-menu-open">
                <i className="fa-duotone fa-bars-staggered"></i>
              </button>
            </div>
          </div>
        </header>
      </div>
      {/* <div
        id="header-side"
        className="header-side"
        style={{ top: sliderPosition }}
      >
        <div className="header-side-top">
          <div className="header-logo">
            <i className="fa-duotone fa-code"></i>
            <div className="brand-text">
              <span className="text-1">Divinely</span>
              <span className="text-2">Developers</span>
            </div>
          </div>
          <button
            className="header-menu-close"
            id="header-menu-close"
            onClick={closeSlider}
          >
            <i className="fa-duotone fa-circle-xmark"></i>
          </button>
        </div>

        <div className="header-side-center">
          <ul className="header-menu">
            <Link to="#" className="menu-item">
              <a>Home</a>
            </Link>
            <Link to="#about" className="menu-item">
              <a>About</a>
            </Link>
            <li className="menu-item">
              <a href="#">Skills</a>
            </li>
            <li className="menu-item">
              <a href="#">Contact</a>
            </li>
            <li className="menu-item menu-theme">
              <a>
                <label
                  className="theme-switch head_dropdown_item"
                  htmlFor="checkbox"
                >
                  <span className="head_dropdown_item-title">
                    <span id="appearance">
                      {theme === "dark" ? "Light Theme" : "Dark Theme"}
                    </span>
                    <span className="slider round"></span>
                  </span>

                  <input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                    checked={theme == "dark"}
                    onChange={toggleTheme}
                    hidden
                  />
                </label>
              </a>
            </li>
          </ul>
        </div>

        <div className="header-side-bottom btns">
          <a href="#" className="btn btn-primary">
            Login
          </a>
          <a href="#" className="btn btn-primary">
            Create an account
          </a>
        </div>
      </div> */}
    </>
  );
}

export default Header;
