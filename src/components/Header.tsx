import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { profile } from "../data/portfolio";

interface SectionRefs {
  homeRef: React.RefObject<HTMLDivElement>;
  workExperienceRef: React.RefObject<HTMLDivElement>;
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
  const [activeSection, setActiveSection] =
    useState<keyof SectionRefs>("homeRef");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionEntries = Object.entries(refs) as [
        keyof SectionRefs,
        React.RefObject<HTMLDivElement>
      ][];

      for (const [id, ref] of sectionEntries) {
        const section = ref.current;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            scrollY >= sectionTop - 50 &&
            scrollY < sectionTop + sectionHeight
          ) {
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

  const navbarItem = (
    navLink: string,
    ref: React.RefObject<HTMLDivElement>,
    id: keyof SectionRefs
  ) => {
    const isActive = activeSection === id;
    return (
      <li className="relative inline-block">
        <button
          onClick={() => scrollToSection(ref)}
          className={`block py-1 px-1 relative ${
            isActive
              ? "font-semibold text-[var(--accent-strong)]"
              : "text-slate-600 hover:text-slate-950"
          } cursor-pointer`}
        >
          {navLink}
          <div
            className={`absolute bottom-0 left-0 right-0 border-b-2 ${
              isActive ? "border-[var(--accent-strong)]" : "border-transparent"
            }`}
          />
        </button>
      </li>
    );
  };

  return (
    <nav className="fixed top-0 z-20 w-full border-b border-white/60 bg-[rgba(247,242,235,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex w-screen flex-wrap items-center justify-between p-4 md:max-w-screen-xl">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
            <img src={logo} className="h-6" alt="Logo" />
          </div>
          <span
            className="self-center whitespace-nowrap font-serif text-2xl text-slate-950"
            style={{
              fontWeight: "700",
            }}
          >
            {profile.shortName}
          </span>
        </a>
        <button
          onClick={openMenu}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-soft)] bg-white p-2 text-sm text-slate-600 md:hidden"
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
          <ul className="mt-4 flex flex-col rounded-[1.5rem] border border-[var(--border-soft)] bg-white/90 p-4 font-medium shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none">
            {navbarItem("Home", refs.homeRef, "homeRef")}
            {navbarItem("About Me", refs.aboutMeRef, "aboutMeRef")}
            {navbarItem("Experience", refs.workExperienceRef, "workExperienceRef")}
            {navbarItem("Education", refs.educationRef, "educationRef")}
            {navbarItem(
              "Technologies",
              refs.technologiesRef,
              "technologiesRef"
            )}
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
