import React from "react";
import "../styles/aboutme.css";
import aboutman from "../assets/images/aboutman.png";
const AboutMe = () => {
  return (
    <div className="aboutman-body">
      {/* ============================= */}

      <div className="aboutman-div">
        <img className="aboutmaan" src={aboutman} alt="" />
      </div>

      {/* ========================================= */}

      <div className="aboutme-details">
        {/* ================ */}

        <div>
          <h3>About</h3>
          <h1>About Me</h1>
        </div>

        {/* =============================*/}

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          faucibus massa sollicitudin amet augue. Nibh metus a semper purus
          mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
          adipiscing velit non nulla in amet pellentesque.
        </p>
        <p>
          Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
          eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod
          risus r.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
