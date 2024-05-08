import "./App.css";
import React from "react";
import Profile from "./prof";
import Cont_maker from "./Contmaker";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import WhoAmI from "./whoami"; // Corrected the component name to start with a capital letter
import Languages from "./languages";
import Project from "./project";
import Aboutpage from "./aboutpage";



function App() {
  const [today, setDate] = React.useState(new Date());
  return (
    <>
      <Router>
        <Profile style={{ alignItems: "center" }}></Profile>
        <Cont_maker
          style={{ justifyContent: "center" }}
          toCreate="Sakthivel G"
          tag="h1"
        ></Cont_maker>
        <div className="gridCont">
          <Cont_maker toCreate="Sekarsakthi73@gmail.com" tag="p"></Cont_maker>
          <Cont_maker toCreate="linkedin/Sakthi73" tag="p"></Cont_maker>
          <Cont_maker
            toCreate="1/8, Vennanthur, Minnakal (po), Namakkal (DT), Tamil Nadu"
            tag="p"
          ></Cont_maker>
        </div>
        <div className="TwoHalves">
          <div className="NavBar">
            <nav>
              <ul>
                <li>
                  <Link to="/whoami" activeClassName="active">Who am I</Link>
                </li>
                <li>
                  <Link to="/languages" activeClassName="active">My expertise</Link>
                </li>
                <li>
                  <Link to="/proj" activeClassName="active">Projects</Link>
                </li>
                <li>
                  <Link to="/" activeClassName="active">About </Link>
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
      </Router>
    </>
  );
}

export default App;
