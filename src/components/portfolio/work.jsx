import React, { useState } from "react";
import "./work.css";
import college from "../../Assets/images/Capture.PNG";
import food from "../../Assets/images/Capture2.PNG";
import todo from "../../Assets/images/todo.avif";
import { portFolioData } from "./portfolioData";
const MyWork = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleSeeMore = () => {
    setVisibleProjects(portFolioData.length);
  };
  const handleSeeLess = () => {
    setVisibleProjects(6);
  };
  return (
    <section id="works">
      <h2 className="worksTitle">My PortFolio</h2>
      <span className="workDesc">
        Portfolio showcasing personal projects, thoughtfully crafted with HTML,
        CSS, and React JS, <br />
        reflecting a blend of creative design and interactive functionality.
      </span>

      <div className="workImgs">
        {portFolioData &&
          portFolioData.map((item, id) => {
            return (
              id < visibleProjects && (
                <div key={id} className="workItem">
                  <div className="overlay">
                    <p className="projectName">{item.projectName}</p>
                    {item?.projectLink && (
                      <a href={item.projectLink} target="_blank" className="projectLink" onClick={() => console.log(item.projectLink)}>
                        Click here for demo
                      </a>
                    )}
                    {item?.sourceCode && (
                      <a href={item.sourceCode} className="projectLink" target="_blank">
                        Click here for source code
                      </a>
                    )}
                    {item?.status && (
                      <p className="projectStatus">{item.status}</p>
                    )}
                  </div>
                  <img src={item.img} alt="" className="worksImg" />
                </div>
              )
            );
          })}
        {portFolioData.length > 6 && (
          <>
            {visibleProjects < portFolioData.length ? (
              <button className="workBtn" onClick={handleSeeMore}>
                See More
              </button>
            ) : (
              <button className="workBtn" onClick={handleSeeLess}>
                See Less
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default MyWork;
