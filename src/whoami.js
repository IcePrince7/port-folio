import React from "react";
import "./whoami.css"

function WhoAmI() {
  const keywords = [
    "Dedicated Software Engineer",
    "Motivated ",
    "Dynamic and influential career",
    "Strong skill set",
    "Self-motivated",
    "Looking forward-thinking organization",
        "Enthusiasm and knowledge",
    "2+ years of experience",
    "Thorough grasp of the full software lifecycle",

 
  ];

  return (
    <div className="whoAmIContainer">
      <div style={{textAlign:"center" }}><h1>Myself</h1></div>
      <ul className="keywordsList">
        {keywords.map((keyword, index) => (
          <li key={index} className="keywordItem">
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WhoAmI;
