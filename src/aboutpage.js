import { useEffect, useState } from "react";
import "./aboutpage.css";

const technologies = ["React", "HTML", "CSS", "JavaScript"];

export default function Aboutpage() {
  const [currentTech, setCurrentTech] = useState(technologies[0]);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [techIndex, setTechIndex] = useState(0);

  useEffect(() => {
    const cycleTime = 3000; 
    const fadeOutTime = 1000; 
 

    const interval = setInterval(() => {
      setFadeClass("fade-out");
      
      setTimeout(() => {
        setTechIndex((prev) => (prev + 1) % technologies.length);
        setFadeClass("fade-in");
      }, fadeOutTime);
    }, cycleTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentTech(technologies[techIndex]);
  }, [techIndex]);

  return (
    <div className="welcome-container">
      <h1>Welcome to my portfolio!</h1>
      <br />
      <p>This webpage is built using <span className= "fadeClass">{currentTech}</span></p>
    </div>
  );
}
