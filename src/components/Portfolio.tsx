import React, { RefObject } from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Technologies from './Technologies';

interface PortfolioProps {
  refs: {
    homeRef: RefObject<HTMLDivElement>;
    aboutMeRef: RefObject<HTMLDivElement>;
    technologiesRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
  };
}

const Portfolio: React.FC<PortfolioProps> = ({ refs }) => {
  return (
    <div className="h-screen w-screen">
      <div ref={refs.homeRef}>
        <Home />
      </div>
      <div>
        <AboutMe aboutRef={refs.aboutMeRef} />
      </div>
      <div ref={refs.technologiesRef}>
        <Technologies />
      </div>
      <div ref={refs.contactRef}>
        <Contact />
      </div>
      <div ref={refs.projectsRef}>
        <Projects />
      </div>
    </div>
  );
};

export default Portfolio;
