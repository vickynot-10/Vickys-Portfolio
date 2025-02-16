import "./home.css";
import { useEffect, useState } from "react";

import { useNav } from "../../Contexts/navContext";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  const roles = [
    "Web developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Software Developer"
  ];
  const [isAnimate, setAnimate] = useState(true);
  const [currentIndex, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setAnimate(true);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const { setnavValue } = useNav();
  useEffect(() => {
    setnavValue("home");
  }, []);
  return (
    <div id="home-container">
      <div className="home-wrapper">
        <p>Hi , My Name is</p>
        <p>Vignesh</p>
        <p>
          An , 
          <span id="dynamic-text" className={isAnimate ? "expand" : "shrink"}>
            {roles[currentIndex]}
          </span>
        </p>
        <div>
          <Link to='/contact'
          >
            <button>Contact me</button>
          </Link>
          <a
            target="_blank"
            href="https://github.com/vickynot-10"
            rel="noopener noreferrer"
          >
            <button>
              <FaGithub />
            </button>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vignesh-s-512245293/"
            rel="noopener noreferrer"
          >
            <button>
              <FaLinkedinIn />
            </button>
          </a>
        </div>
        <p className="about-text">
          Passionate and detail-oriented software developer with expertise in
          JavaScript, MERN stack . Focused on creating seamless and
          user-friendly web experiences. Constantly learning and exploring new
          technologies to push boundaries
        </p>
      </div>
    </div>
  );
}
