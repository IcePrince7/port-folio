import React, { useState, useEffect } from "react";

function Project() {
  const arr = [
    {
      project_name: "E-notes - An Online notes Management Tool",
      usecase: [
        `Developed a sophisticated online notes management tool using Java, Spring Boot, JavaScript, HTML5, CSS, and SQL technologies.`,
        `Created and maintained a web page for individuals to write, store, and retrieve notes or links securely.`,
        `Implemented user authentication and authorization mechanisms to ensure data privacy`,
      ],
    },
    {
      project_name: "IBook - Library Management Tool",
      usecase: [
        `Developed a cutting-edge online library management tool, leveraging Angular, TypeScript, HTML5, CSS, MongoDB, JavaScript, and JSON Server.`,
        `Designed and developed a web page for students to access library books, including Admin functionality.`,
        `Implemented services to enhance functionality and ensure seamless user experience.`,
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
    <>
      <ul>
        {arr.map((item, index) => (
          <div
            key={index}
            style={{
              display: index === currentIndex ? "block" : "none",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h2>{item.project_name}</h2>
            </div>
            <p>
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
    </>
  );
}

export default Project;
