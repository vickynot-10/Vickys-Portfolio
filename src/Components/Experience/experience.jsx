import "./experience.css";
import { useEffect } from "react";

import { useNav } from "../../Contexts/navContext";

export default function Experience() {
  const { setnavValue } = useNav();
  useEffect(() => {
    setnavValue("experience");
  }, []);
  const ExperienceArr = [
    {
      year: "2024 - 2025",
      role: "Web Developer",
      companyName: "E-CareerPluz Private Limited",
      WorkDetails: [
        " Designed and developed a comprehensive website offering digital services, business consulting, and legal advisory.",
        " Developed backend functionality with PHP to handle email notifications, subscription emails, and contact form submissions and Implemented responsive design techniques to ensure optimal user experience across devices.",
        " Utilized HTML, CSS, and JavaScript to create interactive and user-friendly interfaces and Collaborated with stakeholders to align the website’s features with business objectives.",
      ],
      Tools: ["HTML","CSS","Javascript", "PHP"],
    },
  ];

  return (
    <div id="experience-container">
      <div className="experience-wrapper">
        <p>Experience</p>
        <div id="experience-grid">
          {ExperienceArr.map((item, ind) => {
            return (
              <>
                <div key={ind} className="year-exp" >
                  <p> {item.year} </p>
                </div>
                <div>
                  <p className="company-name-exp" >
                    {item.role} &#183; {item.companyName}
                  </p>
                  {item.WorkDetails.length > 0 && (
                    <ul>
                      {item.WorkDetails.map((points, index) => {
                        return <li key={index}> {points} </li>;
                      })}
                    </ul>
                  )}
                  {item.Tools.length > 0 && (
                    <div className="exp-tools-container" >
                      {item.Tools.map((skill, i) => {
                        return (
                          <div key={i}>
                            <p> {skill} </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
