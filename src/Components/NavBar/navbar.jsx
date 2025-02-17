import "./navbar.css";
import { useNav } from "../../Contexts/navContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { RiDownloadLine } from "react-icons/ri";
import { IoIosSunny } from "react-icons/io";
import { IoMoonOutline , IoMenuSharp,IoClose } from "react-icons/io5";
import { assestObj } from "../../Assests/assest";

export default function NavBar() {
  const [isMobileNav, setMobileNav] = useState(false);
  let { navValue, setnavValue } = useNav();
  function changeNavClass(str) {
    setnavValue(str);
  }

  const [isLight, setLight] = useState(
    localStorage.getItem("theme") === "light"
  );
  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  function ToggleMode() {
    setLight(!isLight);
  }

  function ToggleNavBar() {
    setMobileNav(!isMobileNav);
  }

  return (
    <div id="nav-bar-container">
      <div className="navbar-wrapper">
        <div>
          <h1>Vignesh</h1>
        </div>
        <button id="mobile-nav-div" onClick={ToggleNavBar} className= {isMobileNav ? "rotate-x" : "roate-ham"}
        aria-label={isMobileNav ? "Close Navigation" : "Open Navigation"} 

        >{isMobileNav ? <IoClose /> : <IoMenuSharp />  }</button> 
          
        <div className={isMobileNav ? "mobile-links " : "nav-links"}>
          <Link
          aria-label="Go to Homepage"
            to="/"
            onClick={() => changeNavClass("home")}
            className={navValue === "home" ? "active" : " "}
          >
            Home
          </Link>
          <Link
            to="/about"
          aria-label="Go to About section"
            onClick={() => changeNavClass("about")}
            className={navValue === "about" ? "active" : " "}
          >
            About Me
          </Link>
          <Link to="/experience" 
          aria-label="Go to Experience Section"
          onClick={() => changeNavClass("experience")} 
          className={navValue === "experience" ? "active" : " "} >
            Experience
          </Link>
          <Link
            to="/projects"
          aria-label="Go to Project sections"
            onClick={() => changeNavClass("projects")}
            className={navValue === "projects" ? "active" : " "}
          >
            Projects
          </Link>
          <Link
            to="/contact"
          aria-label="Go to Contact me section"
            onClick={() => changeNavClass("contact")}
            className={navValue === "contact" ? "active" : " "}
          >
            Contact
          </Link>
        </div>
      
        <div>
          <button
            type="button"
            onClick={ToggleMode}
            id="toggle-mode-btn"
            aria-label={ isLight ? "Switch to night mode" : "Switch to light mode" }
            className={isLight ? "WhitemoonAnimate" : "darkmoonAnimate"}
          >
            {isLight ? <IoMoonOutline /> : <IoIosSunny />}
          </button>

          <a
            href={assestObj.Resume}
            aria-label="Download Resume"
            download="Vignesh-Resume"
            style={{
              textDecoration: "none",
            }}
          >
          
              <RiDownloadLine />
        
          </a>
        </div>
      </div>
    </div>
  );
}
