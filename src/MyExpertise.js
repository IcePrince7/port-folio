import React, { useState, useEffect } from "react";
 import "./MyExpertise.css"

const skillsData = [
  {
    title: "Frontend",
    skills: ["JavaScript", "React","Angular", "CSS", "HTML"]
  },
  {
    title: "Backend",
    skills: ["Java", "SpringBoot", "Hibernate"]
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "H2"]
  },
  {
    title: "Testing",
    skills: ["Selenium","Junit","Cucumber"]
  }

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
              {section.skills.map((skill, skillIndex) => (
                <p key={skillIndex}>{skill}</p>
              ))}
            </ul>
          </div>
        ))}
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
