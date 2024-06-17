import { faAngular, faCss3, faHtml5, faReact ,faPython,faNodeJs,faJava,faGithub,faJira,} from '@fortawesome/free-brands-svg-icons';
import { faCode ,faLink} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./MyExpertise.css";


const skillsData = [
  {
    title: "Frontend",
    skills: {
    "JavaScript": faCode,
    "React": faReact,
    "Angular": faAngular,
    "CSS": faCss3,
    "HTML": faHtml5,
    }
  },
  {
    title: "Backend",
    skills: {
   "Java": faJava,
      "SpringBoot": faJava,
      "Python": faPython,
      "Node.js": faNodeJs,
  }
  },
  {
    title: "Database",
    skills: {"MySQL":0, "MongoDB":0, "H2":0},
  },
  {
    title: "Testing",
    skills: {"Jasmine":0,"Karma":0,"Selenium":0, "Junit":0,   },
  },
  {
    title: "Tools",
    skills: {"Git":faGithub, "Jira":faJira, "Postman":faLink},
  },
];

function MyExpertise() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % skillsData.length);
    }, 5000);
    setIntervalId(interval);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    clearInterval(intervalId);
    const newInterval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % skillsData.length);
    }, 5000);
    setIntervalId(newInterval);
  };

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + skillsData.length) % skillsData.length);
    clearInterval(intervalId);
    const newInterval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % skillsData.length);
    }, 5000);
    setIntervalId(newInterval);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % skillsData.length);
    clearInterval(intervalId);
    const newInterval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % skillsData.length);
    }, 5000);
    setIntervalId(newInterval);
  };

  return (
    <>
      <div className="expertiseContainer">
        {skillsData.map((section, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? "active" : ""}`}
            style={{ display: currentSlide === index ? "block" : "none" }}
          >
            <h1>{section.title}</h1>
            <ul>
            {Object.keys(section.skills).map((skill, skillIndex) => (
                <p key={skillIndex} style={{color:'#9c9da2'}}>
                  {skill} <FontAwesomeIcon icon={section.skills[skill]} className="fontss" />
                </p>
              ))}
            </ul>
          </div>
        ))}
        <div className="buttonContainer">
          <button className="prevButton" onClick={handlePrevClick}>
          ❮
          </button>
          <button className="nextButton" onClick={handleNextClick}>
          ❯
          </button>
        </div>
      </div>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        {skillsData.map((_, index) => (
          <span
            key={index}
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: currentSlide === index ? "blue" : "gray",
              borderRadius: "50%",
              display: "inline-block",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </>
  );
}

export default MyExpertise;