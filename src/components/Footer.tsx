import React from 'react';
import { FaChevronCircleRight, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

interface SectionRefs {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  technologiesRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}

interface FooterProps {
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  refs: SectionRefs;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection, refs }) => {
  return (
    <footer className="bg-slate-900 text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between lg:px-40 px-0">
        <div className="flex flex-col mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Mithun's Portfolio ✨</h2>
          <p className="text-sm">Thank you for visiting my personal portfolio website.</p><br />
          <p> Connect with me over socials!🚀</p>
        </div>
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick links</h3>
          <ul className="text-sm space-y-1">
            <li>
              <button onClick={() => scrollToSection(refs.homeRef)} className="hover:underline flex items-center">
                <FaChevronCircleRight className="mr-1" />home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(refs.aboutMeRef)} className="hover:underline flex items-center">
                <FaChevronCircleRight className="mr-1" />about
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(refs.technologiesRef)} className="hover:underline flex items-center">
                <FaChevronCircleRight className="mr-1" />Technologies
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(refs.projectsRef)} className="hover:underline flex items-center">
                <FaChevronCircleRight className="mr-1" />Project
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(refs.contactRef)} className="hover:underline flex items-center">
                <FaChevronCircleRight className="mr-1" />Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">contact info</h3>
          <p className="text-sm flex items-center mb-1">
            <FaEnvelope className="mr-2" /> mithunmathi03@gmail.com
          </p>
          <p className="text-sm flex items-center mb-4">
            <FaMapMarkerAlt className="mr-2" /> Coimbatore, India - 641008
          </p>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/mithun-jt-full-stack-developer" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/mithun522" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaGithub size={24} />
            </a>
            <a href="mailto:mithunmathi03@gmail.com" className="text-white hover:text-gray-400">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
