import React, { useEffect, useState } from "react";
// import "./landing.css";
import bg from "../../Assets/images/bg.jpg";
import btnImg from "../../Assets/images/btnImg.png";
import {Link} from'react-scroll';
const Landing = () => {
  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState(0);
  useEffect(() => {
    const rolesArray = ['Web Developer', 'React Developer'];
    setRoles(rolesArray);

    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % rolesArray.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section id="landing">
      <img src={bg} alt="" className="bg" />
        <div className="landingContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Varsha Chaubey</span>
            <br />
            <span className="developerRole">{roles[currentRole]}</span>
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
        
      </section>
    </>
  );
};

export default Landing;
