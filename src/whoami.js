import React, { forwardRef } from "react";
import { faJava, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./whoami.css";

function ico(params){
  return(<></>);
  // return <FontAwesomeIcon icon={params} />
}
const WhoAmI = forwardRef((props,ref) =>{
   

  return (
    <div ref={ref} > 

     <h3  className="intro">Hi, I'm a Software Engineer with   2.5 years of experience, seeking opportunities to grow with a forward-thinking company. I'm passionate about building seamless, scalable web solutions and excited to contribute to meaningful projects
     
    </h3>

    </div >
  );
}
)
export default WhoAmI;
