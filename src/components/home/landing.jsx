import React from "react";
import "./landing.css";
import bg from "../../Assets/images/bg.jpg";
import btnImg from "../../Assets/images/btnImg.png";
import {Link} from'react-scroll';
const Landing = () => {
  return (
    <>
      <section id="landing">
        <div className="landingContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Varsha Chaubey</span>
            <br />
            Web Developer
          </span>
          <p className="introPara">
            I'm a dedicated React.js Developer with near about 2 years of
            experience.<br/> Have Strong knowladge of software developement.
          </p>
          <Link>
            <button className="btn" onClick={() => window.location.href = 'mailto:varshachaubey63@gmail.com'}>
              <img src={btnImg} alt="" className="btnImg"/>
              Hire Me
            </button>
          </Link>
        </div>
        <img src={bg} alt="" className="bg" />
      </section>
    </>
  );
};

export default Landing;
