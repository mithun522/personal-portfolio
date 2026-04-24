import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import Mithun_2 from "../assets/Mithun_2.jpeg";
import { focusAreas, profile } from "../data/portfolio";

interface AboutMeProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const AboutMe: React.FC<AboutMeProps> = ({ aboutRef }) => {
  return (
    <section id="about" className="px-6 py-16 md:px-10 md:py-24">
      <div
        ref={aboutRef}
        className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_28px_70px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[0.9fr_1.1fr] md:p-10"
      >
        <div className="overflow-hidden rounded-[1.75rem] bg-[linear-gradient(145deg,#fff4e8_0%,#ebf0ff_100%)] p-4">
          <img
            src={Mithun_2}
            alt="Mithun J.T."
            className="h-full min-h-[24rem] w-full rounded-[1.35rem] object-cover"
          />
        </div>

        <div>
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-semibold text-slate-700">
            <FaUser className="text-[var(--accent-strong)]" />
            About Me
          </div>

          <h2 className="font-serif text-4xl text-slate-950 md:text-5xl">
            A developer who likes thoughtful interfaces, reliable systems, and
            products that feel easy to use.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            I am a software developer based in Chennai, India, with hands-on
            experience building product features across modern web stacks. My
            strongest work sits at the intersection of frontend craftsmanship,
            product workflows, and practical full stack delivery.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Recently, I&apos;ve worked in healthcare and enterprise workflow
            products, using React, Angular, Node.js, TypeScript, MySQL, Jest,
            and Cypress to ship user-facing experiences that are both polished
            and maintainable.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {focusAreas.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-[var(--border-soft)] bg-white px-5 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-800">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 text-sm font-semibold text-slate-700 md:flex-row md:flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white px-5 py-3 transition duration-300 hover:-translate-y-0.5"
            >
              <FaEnvelope className="text-[var(--accent-strong)]" />
              {profile.email}
            </a>
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white px-5 py-3">
              <FaMapMarkerAlt className="text-[var(--accent-strong)]" />
              {profile.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
