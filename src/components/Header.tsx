import React, { useEffect, useState } from "react";
import logo from '../assets/logo.png';

interface SectionRefs {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  technologiesRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  educationRef: React.RefObject<HTMLDivElement>;
  milestonesRef: React.RefObject<HTMLDivElement>;
}

interface HeaderProps {
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  refs: SectionRefs;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, refs }) => {
  const [activeSection, setActiveSection] = useState<keyof SectionRefs>("homeRef");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionEntries = Object.entries(refs) as [keyof SectionRefs, React.RefObject<HTMLDivElement>][];

      for (const [id, ref] of sectionEntries) {
        const section = ref.current;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollY >= sectionTop - 50 && scrollY < sectionTop + sectionHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

  const openMenu = () => {
    document.getElementById("navbar-default")?.classList.toggle("hidden");
  };

  const navbarItem = (navLink: string, ref: React.RefObject<HTMLDivElement>, id: keyof SectionRefs) => {
    const isActive = activeSection === id;
    return (
      <li className="relative inline-block">
        <button
          onClick={() => scrollToSection(ref)}
          className={`block py-1 px-1 relative ${
            isActive
              ? 'font-semibold text-blue-600 dark:text-white'
              : 'text-gray-700 dark:text-gray-400 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 dark:hover:text-blue-500'
          } cursor-pointer`}
        >
          {navLink}
          <div
            className={`absolute bottom-0 left-0 right-0 border-b-2 ${
              isActive
                ? 'border-blue-600 dark:border-blue-500'
                : 'border-transparent'
            }`}
          />
        </button>
      </li>
    );
  };   

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-10 border-2 shadow-lg">
      <div className="w-screen md:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <div className="rounded-full shadow-custom-gray h-10 w-10 flex items-center justify-center">
            <img
              src={logo}
              className="h-6"
              alt="Logo"
            />
          </div>
          <span 
            className="self-center text-2xl text-black whitespace-nowrap dark:text-white"
            style={{ fontFamily: '"Playwrite BE VLG", cursive', fontOpticalSizing: 'auto', fontWeight: '900'}}
          >
            Mithun
          </span>
        </a>
        <button
          onClick={openMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navbarItem("Home", refs.homeRef, "homeRef")}
            {navbarItem("About Me", refs.aboutMeRef, "aboutMeRef")}
            {navbarItem("Education", refs.educationRef, "educationRef")}
            {navbarItem("Technologies", refs.technologiesRef, "technologiesRef")}
            {navbarItem("Milestones", refs.milestonesRef, "milestonesRef")}
            {navbarItem("Projects", refs.projectsRef, "projectsRef")}
            {navbarItem("Contact", refs.contactRef, "contactRef")}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
