import React, { RefObject } from "react";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Education from "./Education";
import Footer from "./Footer";
import Home from "./Home";
import Milestones from "./Milestones";
import Projects from "./Projects";
import Technologies from "./Technologies";
import WorkExperience from "./WorkExperience";
import { profile } from "../data/portfolio";

interface PortfolioProps {
  refs: {
    homeRef: RefObject<HTMLDivElement>;
    aboutMeRef: RefObject<HTMLDivElement>;
    workExperienceRef: RefObject<HTMLDivElement>;
    technologiesRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    educationRef: RefObject<HTMLDivElement>;
    milestonesRef: RefObject<HTMLDivElement>;
  };
}

const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
  sectionRef.current?.scrollIntoView({ behavior: "smooth" });
};

const Portfolio: React.FC<PortfolioProps> = ({ refs }) => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      {/* Fixed Social Links */}
      <nav className="fixed bottom-10 right-4 z-50 flex flex-col items-center space-y-2 md:hidden">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-full border border-[var(--border-soft)] bg-white p-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-transform hover:scale-110"
        >
          <FaLinkedin color="#0A66C2" size={22} />
        </a>
        <div className="h-8 w-[2px] bg-slate-400"></div>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="rounded-full border border-[var(--border-soft)] bg-white p-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-transform hover:scale-110"
        >
          <FaGithub color="black" size={22} />
        </a>
        <div className="h-8 w-[2px] bg-slate-400"></div>
        <a
          href={profile.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
          className="rounded-full border border-[var(--border-soft)] bg-white p-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-transform hover:scale-110"
        >
          <FaCode color="#7B3F00" size={22} />
        </a>
      </nav>

      {/* Sections */}
      <main>
        <section ref={refs.homeRef}>
          <Home />
        </section>
        <section>
          <AboutMe aboutRef={refs.aboutMeRef} />
        </section>
        <section>
          <WorkExperience workExperienceRef={refs.workExperienceRef} />
        </section>
        <section>
          <Education eduRef={refs.educationRef} />
        </section>
        <section ref={refs.technologiesRef}>
          <Technologies />
        </section>
        <section>
          <Milestones milestoneRef={refs.milestonesRef} />
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
