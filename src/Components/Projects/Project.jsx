import "./project.css";
import { assestObj } from "../../Assests/assest";
import { useEffect, useState } from "react";

import { useNav } from "../../Contexts/navContext";

export default function Project() {
  const { setnavValue } = useNav();
  useEffect(() => {
    setnavValue("projects");
  }, []);
  const projectArr = [
    {
      projectImg: assestObj.FoodProjectImg,
      projectName: "Food Order Web Application",
      projectDesc:
        "Developed a MERN Stack Food Order application with JWT Authentication for secure user access.Implemented Search, Cart and Checkout functionalities with Order history.",
      projectYear: "2024",
      projectTools: "MERN Stack",
      projectCodeLink: "https://github.com/vickynot-10/Food-Order-",
      projectLiveLink: "https://food-order-c58e.onrender.com/delivery",
      projectDetailsArr: [
        "Developed and deployed a full-stack food ordering application using React.js for the frontend and Node.js with Express.js for the backend.",
        "Designed and implemented a responsive user interface ensuring seamless user experience across various devices.",
        "Integrated <strong> Real-time geolocation tracking </strong> to fetch user's current locations.",
        "Designed a<strong> Search feature </strong> enabling users to find food items or restaurants efficiently.",
        "Enabled <strong> Order history tracking </strong>, Allowing users to view past purchases.",
        "Integrated MongoDB database to manage menu items, user profiles, and order histories efficiently.",
        "Implemented <strong>JWT user authentication </strong> for secure login and registration.",
        "Improved application performance by compressing images,<strong> Implementing lazy loading </strong>on images and necessary components , resulting in faster load times and a smoother user experience.",
      ],
    },

    {
      projectImg: assestObj.SkullProjectImg,
      projectName: "Skullcandy Clone Website",
      projectDesc:
        "Developed a full stack Website with HTML, CSS, TailwindCSS, JavaScript, Node.js, Express.js and MongoDB.Implemented JWT Authentication for secure user sessions and Integrate RESTful APIs for seamless frontend and backend communication.",
      projectYear: "2024",
      projectTools: "Nodejs, MongoDB",
      projectCodeLink: "https://github.com/vickynot-10/SkullCandy-completed",
      projectLiveLink: "https://skullcandy-completed.onrender.com/",
      projectDetailsArr: [
        " Developed a Full-stack Skullcandy clone website using HTML, CSS, JavaScript,TailwindCSS for frontend and Node.js with Express.js for Backend incorporating JWT authentication for secure user sessions.",
        " Developed and integrated <strong> RESTful APIs</strong> for seamless communication between the frontend and backend services.",
        " Integrated a MongoDB database to store user profiles for Authentication, Login management and Profile creations.",
        " Built a <strong>Responsive UI</strong> with TailwindCSS, Ensuring Smooth user experiences across variety of devices",
        "Implemented <strong>JWT user authentication </strong> for secure login and registration."
      ],
    },
  ];

  const [viewDetails, setViewDetails] = useState(null);
  function ToggleView(ind) {
    setViewDetails(viewDetails === ind ? null : ind);
  }

  return (
    <div id="project-container">
      <div className="project-wrapper">
        <p>Projects</p>
        <p>
          Here are some of the projects I've worked on, showcasing my skills in
          both Frontend and Backend development. Each project reflects my
          problem-solving approach and passion for building efficient
          applications
        </p>
        <div className="project-cards-container">
          {projectArr.map((item, ind) => {
            return (
              <>
                <div className="project-card" key={ind}>
                  <div>
                    <img src={item.projectImg} alt="project-img" />
                  </div>
                  <div>
                    <p>{item.projectName}</p>
                    <p>{item.projectDesc}</p>
                    <p>Project info</p>
                    <div>
                      <p>year</p>
                      <p>{item.projectYear}</p>
                    </div>
                    <div>
                      <p>tools</p>
                      <p> {item.projectTools} </p>
                    </div>
                    {item.projectLiveLink && item.projectCodeLink && (
                      <div>
                        <a
                          href={item.projectLiveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Link
                        </a>
                        <a
                          href={item.projectCodeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          See on Github
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                {item.projectDetailsArr?.length > 0 && (
                  <div className="project-details-div">
                    <p>Project Deatils</p>
                    <ul
                      className={
                        viewDetails === ind ? "show-full-li" : "half-li"
                      }
                    >
                      {item.projectDetailsArr.map((val, index) => {
                        return (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: val }}
                          />
                        );
                      })}
                    </ul>
                    <button onClick={() => ToggleView(ind)}>
                      {viewDetails === ind ? "Read Less..." : "Read More..."}
                    </button>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
