import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Companyexperience from "./components/Companyexperience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Experience/>
      <Projects />
      <Companyexperience/>
      <Contact/>
    </>
  );
};

export default App;
