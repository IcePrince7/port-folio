import React from "react";
import { faJava, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./whoami.css";

function ico(params){
  return(<></>);
  // return <FontAwesomeIcon icon={params} />
}

function WhoAmI() {
   

  return (
     <h3 className="intro">Hi, I'm a software engineer with 3+ years of experience, seeking opportunities to grow with a forward-thinking company. I am passionate about building seamless, scalable web solutions and excited to contribute to meaningful projects</h3>
  );
}

export default WhoAmI;
