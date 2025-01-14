import React from "react";
import phone from "./assets/strategy.png";
import framework from "./assets/tag.png";
import testing from "./assets/carbon_ibm-engineering.png";
import cloud from "./assets/web.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-txt">
        <h4 className="m-0">My Skills</h4>
        <h2 className="m-0">My Expertise</h2>
      </div>
      <div className="skill">
        <div className="first_skill">
          <div className="img-1">
            <img src={phone} alt="" />
          </div>
          <div className="first_skill_txt">
            <h5 className="m-0">Responsive Design</h5>
            <p className="m-0">
              Skilled in responsive design for seamless user experiences across
              all devices and screen sizes.
            </p>
          </div>
        </div>
        <div className="first_skill">
          <div className="img-1">
            <img src={framework} alt="" />
          </div>
          <div className="first_skill_txt">
            <h5 className="m-0">Front-End Frameworks</h5>
            <p className="m-0">
              Proficient in HTML, CSS, JavaScript, and React for creating
              dynamic, responsive, and user-friendly interfaces.
            </p>
          </div>
        </div>
        <div className="first_skill">
          <div className="img-1">
            <img src={testing} alt="" />
          </div>
          <div className="first_skill_txt">
            <h5 className="m-0">Testing and Debugging</h5>
            <p className="m-0">
              Experienced in testing and debugging using console tools to ensure
              code quality and durability.
            </p>
          </div>
        </div>
        <div className="first_skill">
          <div className="img-1">
            <img src={cloud} alt="" />
          </div>
          <div className="first_skill_txt">
            <h5 className="m-0">Cloud Services</h5>
            <p className="m-0">
              Proficient in Azure and Google Cloud; skilled in deploying,
              managing, and cloud architecting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
