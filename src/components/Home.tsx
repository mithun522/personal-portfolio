import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import Mithun from "../assets/Mithun.jpeg";
import { heroHighlights, profile } from "../data/portfolio";

const rotatingWords = [
  "Full Stack Apps",
  "Healthcare SaaS",
  "React Experiences",
  "Angular Interfaces",
  "Node.js APIs",
  "Tested Product Workflows",
];

const Typewriter: React.FC = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = rotatingWords[loopNum];
    const nextIndex = charIndex + (isDeleting ? -1 : 1);
    const timeout = window.setTimeout(
      () => {
        setCurrentWord(current.substring(0, nextIndex));
        setCharIndex(nextIndex);

        if (!isDeleting && nextIndex === current.length) {
          window.setTimeout(() => setIsDeleting(true), 900);
        } else if (isDeleting && nextIndex === 0) {
          setIsDeleting(false);
          setLoopNum((prev) => (prev + 1) % rotatingWords.length);
        }
      },
      isDeleting ? 70 : 120
    );

    return () => window.clearTimeout(timeout);
  }, [charIndex, isDeleting, loopNum]);

  return (
    <div className="min-h-[2.5rem] text-lg font-semibold text-slate-700 md:text-2xl">
      I build <span className="text-[var(--accent-strong)]">{currentWord}</span>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
      <div className="absolute left-[-8rem] top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(244,180,120,0.35),_transparent_70%)] blur-2xl" />
      <div className="absolute right-[-6rem] top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(85,114,255,0.22),_transparent_70%)] blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative z-[1]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur">
            <FaLocationArrow className="text-[var(--accent-strong)]" />
            {profile.location}
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-strong)]">
            {profile.title}
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-slate-950 md:text-7xl">
            Designing and shipping polished product experiences for modern web
            teams.
          </h1>
          <div className="mt-5">
            <Typewriter />
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            {profile.intro} {profile.domainSummary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border-soft)] bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-strong)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(205,98,48,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
            >
              View LinkedIn
              <FaArrowRight />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white/75 px-6 py-3 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-0.5"
            >
              Let&apos;s connect
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white text-slate-800 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[var(--accent-strong)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white text-slate-800 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[var(--accent-strong)]"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white text-slate-800 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[var(--accent-strong)]"
              aria-label="LeetCode"
            >
              <FaCode size={20} />
            </a>
          </div>
        </div>

        <div className="relative z-[1] mx-auto max-w-md">
          <div className="absolute inset-x-8 top-10 h-[88%] rounded-[2rem] bg-[linear-gradient(180deg,rgba(205,98,48,0.14),rgba(85,114,255,0.1))] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur">
            <div className="rounded-[1.5rem] bg-[linear-gradient(145deg,#f4eee3_0%,#e7eefc_100%)] p-4">
              <img
                src={Mithun}
                alt="Mithun J.T."
                className="h-[24rem] w-full rounded-[1.25rem] object-cover object-top md:h-[34rem]"
              />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-3xl bg-slate-950 px-4 py-4 text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
                  Current Focus
                </p>
                <p className="mt-2 text-sm font-semibold leading-6">
                  Healthcare product development and frontend-heavy full stack
                  delivery
                </p>
              </div>
              <div className="rounded-3xl border border-[var(--border-soft)] bg-white px-4 py-4 text-slate-800">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Strength
                </p>
                <p className="mt-2 text-sm font-semibold leading-6">
                  Turning business workflows into clean, usable product
                  experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
