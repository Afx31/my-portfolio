import React from "react";
import "./Skills.css";
import icons from "../img/svg/sprite.svg";

const appSkills = [
  { name: "C#", svgName: "#icon-csharp" },
  { name: "C++", svgName: "#icon-cplusplus" },
  { name: ".NET", svgName: "#icon-dot-net" },
  { name: "ASP.NET", svgName: "#icon-dot-net" },
  { name: "SQL Server", svgName: "#icon-sql-server" }
];
const webSkills = [
  { name: "React", svgName: "#icon-react" },
  { name: "Javascript", svgName: "#icon-javascript" },
  { name: "HTML5", svgName: "#icon-html5" },
  { name: "CSS3", svgName: "#icon-css3" },
  { name: "Node.js", svgName: "#icon-node-js" },
  { name: "Express.js", svgName: "#icon-expressjs" },
];
const mobileSkills = [
  { name: "React Native", svgName: "#icon-react" },
  { name: "Android", svgName: "#icon-android" },  
];

const Skills = () => {
  const showColumns = (name, array) => {
    return (
      <div className="skills-column">
        <h1 className="skills-category-title">{name}</h1>
        <div className="skills-svg-container">
          {array.map((svg, i) => (
            <div key={i} className="skills-card">
              <svg className="skills-svg">
                <use xlinkHref={`${icons}${svg.svgName}`} />
              </svg>
              <h1 className="skills-svg-name">{svg.name}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div id="skills" className="skills-container">
      <h1 className="skills-title">Tech Knowledge</h1>
      <div className="skills-row">
        {showColumns("Applications", appSkills)}
        {showColumns("Web", webSkills)}
        {showColumns("Mobile", mobileSkills)}        
      </div>
    </div>
  );
};

export default Skills;
