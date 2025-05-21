import { faJava, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faContactBook,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Cont_maker from "./Contmaker";
import Languages from "./MyExpertise";
import Aboutpage from "./aboutpage";
import Profile from "./prof";
import StarBackground from "./StarBackground";
import Project from "./project";
import WhoAmI from "./whoami";
import Footer from "./footer";

const texts = ["akthivel G", "oftware Engineer"];

function App() {
  const [enlargeapp, setEnlargeapp] = useState(false);
  const [toDisplay, setToDisplay] = useState("");
  const [techIndex, setTechIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const aboutRef = useRef(null);
  const whoamiRef = useRef(null);
  const projectRef = useRef(null);
  const languagesRef = useRef(null);

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseTime = 2500;

    const type = () => {
      if (!isDeleting && charIndex < texts[techIndex].length) {
        setToDisplay((prev) => prev + texts[techIndex].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setToDisplay((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === texts[techIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTechIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, techIndex]);

  const handleClick = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={enlargeapp ? "mainClass" : "mainClassNarrow"}>
      <StarBackground/>
      <Profile params={setEnlargeapp}></Profile>
      <div className={enlargeapp ? "page" : ""}>
        <div className="NameContainer">
          <Cont_maker toCreate={`S${toDisplay}`} tag="h1"></Cont_maker>
        </div>
        <div className="gridCont">
          <Cont_maker
            toCreate={
              <a href="/">
                <FontAwesomeIcon icon={faEnvelope} /> Sekarsakthi73@gmail.com
              </a>
            }
            tag="p"
          ></Cont_maker>
          <Cont_maker
            toCreate={
              <a href="https://www.linkedin.com/in/Sakthi73/" target="blank">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn/Sakthi73
              </a>
            }
            tag="p"
          ></Cont_maker>
          <Cont_maker
            toCreate={
              <a href="https://wa.me/9080760890" target="blank">
                <FontAwesomeIcon icon={faPhone} /> 9080760890
              </a>
            }
            tag="p"
          ></Cont_maker>
        </div>
        <div className="TwoHalves">
          <div className="NavBar">
            <nav>
              <ul>
                <li>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleClick(whoamiRef)}
                  >
                    Myself
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleClick(languagesRef)}
                  >
                    My Expertise
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleClick(projectRef)}
                  >
                    My Projects
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleClick(aboutRef)}
                  >
                    About
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="ComponentArena">
            <WhoAmI ref={whoamiRef}></WhoAmI>
            <Languages ref={languagesRef}></Languages>
            <Project ref={projectRef}></Project>
            <Aboutpage ref={aboutRef}></Aboutpage>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
