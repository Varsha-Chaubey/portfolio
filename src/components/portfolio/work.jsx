import React from "react";
import "./work.css";
import college from "../../Assets/images/Capture.PNG"
import food from "../../Assets/images/Capture2.PNG"
import todo from "../../Assets/images/todo.avif"
const MyWork = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My PortFolio</h2>
      <span className="workDesc">
        Portfolio showcasing personal projects, thoughtfully crafted with HTML,
        CSS, and React JS, <br/>reflecting a blend of creative design and interactive
        functionality.
      </span>

      <div className="workImgs">
        <img src={college} alt="" className="worksImg" />
        <img src={todo} alt="" className="worksImg" />
        <img src={food} alt="" className="worksImg" />
        <img src={college} alt="" className="worksImg" />
        <img src={food} alt="" className="worksImg" />
        <img src={food} alt="" className="worksImg" />      
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default MyWork;
