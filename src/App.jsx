import React from "react";
import "./App.css";
import { Routes,Route } from "react-router-dom";

import Home from "./Components/Home/home.jsx";
import NavBar from "./Components/NavBar/navbar.jsx";
import Project from "./Components/Projects/Project.jsx";
import AboutMe from "./Components/About/about.jsx";
import Contact from "./Components/Contact/contact.jsx";
import Experience from "./Components/Experience/experience.jsx";

//CONTEXTS

import { ContextProvider } from "./Contexts/navContext.jsx";

export function App() {

  return (
    <div id="container">
    <ContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
         <Contact /> 
        </ContextProvider>
    </div>
  );
}
