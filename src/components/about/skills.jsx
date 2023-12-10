import React from "react";
import github from "../../Assets/images/git.png";
import trello from "../../Assets/images/trello.png";
const Skills = () => {
  const skillsArr = [
    "React JS",
    "Next JS",
    "Redux",
    "Hooks Management",
    "Context APIs",
    "Web Developement",
    "Javascript",
    "Authentication",
    "ES6",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "React Material UI",
    "Node JS",
    "APIs Integration",
    "Google Analytics",
  ];

  const toolData = [
    {
      toolImg: github,
      toolName: "Github",
      toolDesc:
        "Proficient Git User Successfully Hosts and Manages Project with Expertise in Version Control and Collaboration.",
    },
    {
      toolImg: trello,
      toolName: "Trello",
      toolDesc:
        "Expertly Managing Projects with Trello: Harnessing Visual Organization for Seamless Project Tracking and Collaboration.",
    },
  ];
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I'm a Results-driven and highly skilled professional with near about 2
        years of hands-on experience in web development, specializing in React.
        Adept at crafting efficient React components, integrating APIs, and
        ensuring seamless user experiences. Proficient in Redux, authentication,
        and data visualization
      </span>

      <div className="skillBars">
        {skillsArr &&
          skillsArr.map((item, idx) => {
            return (
              <div className="skillBar" key={idx}>
                {item}
              </div>
            );
          })}
      </div>

      <div className="toolBars" style={{marginTop:"0.5rem"}}>
        {toolData &&
          toolData.map((item, id) => {
            return (
              <div className="toolBar">
                <img src={item.toolImg} className="toolbarImg" />
                <div className="toolBarText">
                  <h2>{item.toolName}</h2>
                  <p>{item.toolDesc}</p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Skills;
