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
    setTheme(theme === "light" ? "dark" : "light");
  };

  // !Sidebar

  const [sidebar, setSidebar] = useState("-100%");

  const openSidebar = () => {
    setSidebar("0%");
  };

  const closeSidebar = () => {
    setSidebar("-100%");
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
                  Theme
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
              <button className="header-menu-open" onClick={openSidebar}>
                <i className="fa-duotone fa-bars-staggered"></i>
              </button>
            </div>
          </div>
        </header>
      </div>
      <div className="sidebar" style={{ transform: `translateX(${sidebar})` }}>
        <div className="sidebar-header">
          <Link to="/#" className="sidebar-brand">
            <i className="fa-duotone fa-code"></i>
            <div className="brand-text">
              <span className="text-1">Divinely</span>
              <span className="text-2">Developer</span>
            </div>
          </Link>
          <button className="sidebar-close" onClick={closeSidebar}>
            <i className="fa-duotone fa-times"></i>
          </button>
        </div>
        <ul className="sidebar-menu">
          <Link to="/#">
            <li className="menu-item">
              <i className="fa-solid fa-house"></i>
              <p>Home</p>
            </li>
          </Link>
          <Link to="#skills">
            <li className="menu-item">
              <i className="fa-solid fa-code"></i>
              <p>Skills</p>
            </li>
          </Link>
          <Link to="#about">
            <li className="menu-item">
              <i className="fa-solid fa-user"></i>
              <p>About</p>
            </li>
          </Link>
          <Link to="#contact">
            <li className="menu-item">
              <i className="fa-solid fa-envelope"></i>
              <p>Contact</p>
            </li>
          </Link>
          <li className="menu-item menu-theme">
            <span>Light</span>
            <div className="toggle-btn">
              <input
                type="checkbox"
                id="switch"
                hidden
                checked={theme === "dark"}
                onClick={toggleTheme}
              />
              <label htmlFor="switch">Toggle</label>
            </div>
            <span>Dark</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
