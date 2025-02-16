import "./about.css";
import { useEffect,useState } from "react";
import {
  RiReactjsFill,
  RiNodejsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiBootstrapFill,
  RiTailwindCssFill,
  RiGithubFill,
} from "react-icons/ri";
import { SiExpress, SiPython, SiMysql, SiMongodb } from "react-icons/si";
import { useNav } from "../../Contexts/navContext";
export default function AboutMe() {
  const { setnavValue } = useNav();
  useEffect(() => {
    setnavValue("about");
  }, []);

 

  const skillsArr = [
    { skillName: "Python", skillLogo: <SiPython color="#FFD43B" size={25}  /> },
    {
      skillName: "JavaScript",
      skillLogo: <RiJavascriptFill color="#F7DF1E" size={25} />,
    },
    {
      skillName: "React.js",
      skillLogo: <RiReactjsFill color="#61DAFB" size={25} />,
    },
    { skillName: "HTML", skillLogo: <RiHtml5Fill color="#E34F26" size={25} /> },
    { skillName: "CSS", skillLogo: <RiCss3Fill color="#1572B6" size={25} /> },
    {
      skillName: "Bootstrap",
      skillLogo: <RiBootstrapFill color="#7952B3" size={25} />,
    },
    {
      skillName: "TailwindCSS",
      skillLogo: <RiTailwindCssFill color="#38B2AC" size={25} />,
    },
    {
      skillName: "Node.js",
      skillLogo: <RiNodejsFill color="#339933" size={25} />,
    },
    {
      skillName: "Express.js",
      skillLogo: <SiExpress color="#868F98" size={25} />,
    },
    {
      skillName: "MongoDB",
      skillLogo: <SiMongodb color="#47A248" size={25} />,
    },
    { skillName: "MySQL", skillLogo: <SiMysql color="#FFA500" size={25} /> },
    {
      skillName: "GitHub",
      skillLogo: <RiGithubFill color="#868F98" size={25} />,
    },
  ];

  return (
    <div id="about-container">
      <div className="about-wrapper">
        <p>About Me</p>
        <p>
          Hey , I'm Vignesh ,A passionate developer dedicated to life-long
          learning, I’m a full stack developer with a deep passion for
          JavaScript, React and web development . The blend of creativity,
          logic, technology - along with the endless opportunities to learn and
          keeps me inspired and excited to build seamless digital experiences.
        </p>
      </div>
      <div className="about-wrapper">
        <p>My Skills</p>
        <p>
          I love learning and exploring new technologies and improving my
          skills. For now , I'm good at the following :
        </p>

        <div id="skills-container">
          {skillsArr.map((item, ind) => {
            return (
              <div key={ind}>
                {item.skillLogo}
                <span> {item.skillName} </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
