import React from "react";
import codemaya from "../../Assets/images/logo_codemaya.svg"
import web from "../../Assets/images/webexcellis_logo.jpeg"
import git from "../../Assets/images/git.png"
import linkedin from "../../Assets/images/linkedin.png"
import insta from "../../Assets/images/intsa.png"

import "./contact.css"
const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">Work Portfolio</h1>
        <p className="clientDesc">
          Over the past two years, I've had the privilege of contributing as a
          dedicated software developer for two esteemed companies, actively
          engaged in server-side projects. Through collaborative efforts, I've
          successfully delivered impactful solutions, demonstrating proficiency
          in crafting robust and scalable software tailored to the unique needs
          of each client.
        </p>
        <div className="clientsImgs">
            <img src={codemaya} alt="" className="clientImg" />       
            <img src={web} alt="" className="clientImg" />
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
      <form action="" className="contactForm">
        <input type="text" className="name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea  type="text" name="message" rows="5" placeholder="Your Message" className="msg" />
        <button type="submit" value="send"className="submitBtn">Submit</button>
        <div className="links">
            <img src={git} alt="" className="link" />
            <img src={linkedin} alt="" className="link" />
            <img src={insta} alt="" className="link" />
        </div>
      </form>

      </div>
    </section>
  );
};

export default Contact;
