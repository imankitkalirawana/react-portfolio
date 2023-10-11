import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  const [scrollClass, setScrollClass] = useState("");
  const [sliderPosition, setSliderPosition] = useState("-200%");

  const openSlider = () => {
    setSliderPosition("0%");
  };

  const closeSlider = () => {
    setSliderPosition("-200%");
  };

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
              <div className="header-logo">
                <i className="fa-duotone fa-code"></i>
                <div className="brand-text">
                  <span className="text-1">Divinely</span>
                  <span className="text-2">Developers</span>
                </div>
              </div>
              <ul className="header-menu hide-header">
                <Link to="/">
                  <li className="menu-item">
                    <a>Home</a>
                  </li>
                </Link>
                <Link to="#skills">
                  <li className="menu-item">
                    <a>Skills</a>
                  </li>
                </Link>
                <Link to="#about">
                  <li className="menu-item">
                    <a>About</a>
                  </li>
                </Link>
                <Link to="#contact">
                  <li className="menu-item">
                    <a>Contact</a>
                  </li>
                </Link>
                <li className="menu-item">
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
              <div className="login-register hide-header">
                <a href="#" className="login">
                  Login
                </a>
                <a href="#" className="register">
                  Create an account
                </a>
              </div>
              <button
                className="header-menu-open"
                id="header-menu-open"
                onClick={openSlider}
              >
                <i className="fa-duotone fa-bars-staggered"></i>
              </button>
            </div>
          </div>
        </header>
      </div>
      <div
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
            <li className="menu-item">
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

        <div className="header-side-bottom">
          <a href="#" className="login">
            Login
          </a>
          <a href="#" className="register">
            Create an account
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
