import React, { Suspense, lazy } from "react";
import { BlinkBlur } from "react-loading-indicators";

// Lazy-loaded components
const Navigation = lazy(() => import("./components/Navigation"));
const Hero = lazy(() => import("./components/Hero"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Projects = lazy(() => import("./components/Projects"));
const Companyexperience = lazy(() => import("./components/Companyexperience"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <BlinkBlur color="#ffffff" size="medium" />
        </div>
      }
    >
      <Navigation />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Companyexperience />
      <Contact />
    </Suspense>
  );
};

export default App;
