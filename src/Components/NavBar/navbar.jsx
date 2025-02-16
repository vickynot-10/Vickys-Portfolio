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
        <button id="mobile-nav-div" onClick={ToggleNavBar} className={isMobileNav ? "rotate-x" : "roate-ham"} >{isMobileNav ? <IoClose /> : <IoMenuSharp />  }</button>
          
        <div className={isMobileNav ? "mobile-links " : "nav-links"}>
          <Link
            to="/"
            onClick={() => changeNavClass("home")}
            className={navValue === "home" ? "active" : " "}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => changeNavClass("about")}
            className={navValue === "about" ? "active" : " "}
          >
            About Me
          </Link>
          <Link to="/experience" onClick={() => changeNavClass("experience")} 
          className={navValue === "experience" ? "active" : " "} >
            Experience
          </Link>
          <Link
            to="/projects"
            onClick={() => changeNavClass("projects")}
            className={navValue === "projects" ? "active" : " "}
          >
            Projects
          </Link>
        </div>
      
        <div>
          <button
            type="button"
            onClick={ToggleMode}
            id="toggle-mode-btn"
            className={isLight ? "WhitemoonAnimate" : "darkmoonAnimate"}
          >
            {isLight ? <IoMoonOutline /> : <IoIosSunny />}
          </button>

          <a
            href={assestObj.Resume}
            download="Vignesh-Resume"
            style={{
              textDecoration: "none",
            }}
          >
            <button>
              <RiDownloadLine />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
