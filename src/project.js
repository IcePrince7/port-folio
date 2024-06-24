import React, { useState, useEffect, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./project.css";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const Project = forwardRef((props,ref) => {
  const arr = [
    {
      project_name: "Carmania - A Car Reselling E-commerce Site",
      usecase: [
        `Carmania boasts an extensive selection of cars, merchandise, and parts, providing users with a diverse array of options to explore and purchase.`,
        `Powered by JavaScript, Node.js, Express.js, HTML, CSS, and MongoDB, Carbonia ensures a seamless shopping experience while also implementing robust CRUD operations, sophisticated authentication and authorization features, and REST APIs for enhanced functionality and security.`,
        `With its user-friendly interface, intuitive navigation, and efficient backend operations, Carbonia prioritizes delivering an immersive and satisfying experience for car enthusiasts, making browsing, shopping, and managing transactions effortless and enjoyable.`,
      ],
      link: [`https://iceprince7.github.io/Carmania/`],
    },
    {
      project_name: "E-notes - An Online notes Management Tool",
      usecase: [
        `Developed a sophisticated online notes management tool using Java, Spring Boot, JavaScript, HTML5, CSS, and SQL technologies.`,
        `Created and maintained a web page for individuals to write, store, and retrieve notes or links securely.`,
        `Implemented user authentication and authorization mechanisms to ensure data privacy`,
      ],
      link: [`https://iceprince7.github.io/enotes/`],
    },
    {
      project_name: "IBook - Library Management Tool",
      usecase: [
        `Developed a cutting-edge online library management tool, leveraging Angular, TypeScript, HTML5, CSS, MongoDB, JavaScript, and JSON Server.`,
        `Designed and developed a web page for students to access library books, including Admin functionality.`,
        `Implemented services to enhance functionality and ensure seamless user experience.`,
      ],
      link: [
        `https://iceprince7.github.io/IBook-An-Online-Library-Management-Tool/`,
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 10000);
    setIntervalId(interval);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalId);
    const newInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 10000);
    setIntervalId(newInterval);
  };

  return (
    <div className ="projectContainer" ref={ref}>
      <ul>
        {arr.map((item, index) => (
          <div
            key={index}
            style={{
              display: index === currentIndex ? "block" : "none",
            }}
          >
            <div className="Title">
              <a href={item.link} target="blank">
                <h2>
                  {item.project_name}{" "}
                  <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                </h2>
              </a>
            </div>
            <p className="usecase">
              {item.usecase.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
              ))}
            </p>
          </div>
        ))}
      </ul>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        {arr.map((data, index) => (
          <span
            key={index}
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: index === currentIndex ? "blue" : "gray",
              borderRadius: "50%",
              display: "inline-block",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
)
export default Project;
