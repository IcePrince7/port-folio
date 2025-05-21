import React, { forwardRef } from "react";
// import { faJava, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./whoami.css";

const WhoAmI = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h3 className="intro">
        Hello, I am a Software Engineer with over 3+ years of experience,
        seeking opportunities to grow within an innovative and forward-thinking
        organization. I am passionate about developing solutions and eager to
        contribute to impactful projects.
      </h3>
    </div>
  );
});
export default WhoAmI;
