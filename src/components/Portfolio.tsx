import React, { RefObject } from 'react';
import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';
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

const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
  sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
};

const Portfolio: React.FC<PortfolioProps> = ({ refs }) => {
  return (
    <div className="h-screen w-screen relative">
      {/* Fixed Social Links */}
      <nav className="fixed bottom-10 right-4 z-50 flex flex-col items-center space-y-1 md:hidden">
        <a
          href="https://linkedin.com/in/mithun-jt-full-stack-developer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin color="#0A66C2" size={30} />
        </a>
        <div className="w-[2px] h-8 bg-gray-700"></div>
        <a
          href="https://github.com/mithun522"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub color="black" size={30} />
        </a>
        <div className="w-[2px] h-8 bg-gray-700"></div>
        <a
          href="https://leetcode.com/u/Mithun_04/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
          className="hover:scale-110 transition-transform"
        >
          <FaCode color="#7B3F00" size={30} />
        </a>
      </nav>

      {/* Sections */}
      <main>
        <section ref={refs.homeRef}>
          <Home />
        </section>
        <section >
          <AboutMe aboutRef={refs.aboutMeRef}/>
        </section>
        <section ref={refs.technologiesRef}>
          <Technologies />
        </section>
        {/* Uncomment the following sections as needed */}
        <section ref={refs.projectsRef}>
          <Projects />
        </section>
        <section ref={refs.contactRef}>
          <Contact />
        </section>
        <section>
          <Footer scrollToSection={scrollToSection} refs={refs} />
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
