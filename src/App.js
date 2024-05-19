import "./App.css";
import React, { useEffect, useState } from "react";
import Profile from "./prof";
import Cont_maker from "./Contmaker";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import WhoAmI from "./whoami";
import Languages from "./MyExpertise";
import Project from "./project";
import Aboutpage from "./aboutpage";

const texts = ["akthivel G", "oftware Engineer"];

function App() {
  const [enlargeapp, setEnlargeapp] = useState(false);
  const [toDisplay, setToDisplay] = useState("");
  const [techIndex, setTechIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <div className={enlargeapp ? "mainClass" : "mainClassNarrow"}>
      <Router>
        <Profile params={setEnlargeapp}></Profile>
        <div className={enlargeapp ? "page" : ""}>
          <div className="NameContainer">
            <Cont_maker toCreate={`S${toDisplay}`} tag="h1"></Cont_maker>
          </div>
          <div className="gridCont">
            <Cont_maker
              toCreate={
                <a href="mailto:Sekarsakthi73@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} /> Sekarsakthi73@gmail.com
                </a>
              }
              tag="p"
            ></Cont_maker>
            <Cont_maker
              toCreate={
                <a href="https://www.linkedin.com/in/Sakthi73/" target="blank">
                  <FontAwesomeIcon icon={faLinkedin} /> linkedin/Sakthi73
                </a>
              }
              tag="p"
            ></Cont_maker>
            <Cont_maker
              toCreate={
                <a href="https://wa.me/9080760890" target="blank">
                  <FontAwesomeIcon icon={faMobile} /> 9080760890
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
                    <Link to="/whoami" activeClassName="active">
                      Who am I
                    </Link>
                  </li>
                  <li>
                    <Link to="/languages" activeClassName="active">
                      My expertise
                    </Link>
                  </li>
                  <li>
                    <Link to="/proj" activeClassName="active">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/" activeClassName="active">
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="ComponentArena">
              <Routes>
                <Route path="/whoami" element={<WhoAmI />} />
                <Route path="/languages" element={<Languages />} />
                <Route path="/proj" element={<Project />} />
                <Route path="/" element={<Aboutpage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
