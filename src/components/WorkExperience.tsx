import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { experiences } from "../data/portfolio";

interface WorkExperienceProps {
  workExperienceRef: React.RefObject<HTMLDivElement>;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  workExperienceRef,
}) => {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div ref={workExperienceRef} className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-3">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
            <FaBriefcase className="text-[var(--accent-strong)]" />
            Experience
          </div>
        </div>

        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="grid gap-6 rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_28px_70px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[220px_1fr] md:p-8"
            >
              <div className="border-b border-[var(--border-soft)] pb-5 md:border-b-0 md:border-r md:pb-0 md:pr-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-strong)]">
                  {experience.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                  {experience.company}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-600">
                  {experience.role}
                </p>
                <div className="mt-5 rounded-3xl bg-[var(--surface-soft)] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Domain
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                    {experience.domain}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-base leading-8 text-slate-600">
                  {experience.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {experience.techStack.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border-soft)] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid gap-3">
                  {experience.achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-5 py-4 text-sm leading-7 text-slate-700"
                    >
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] bg-slate-950 px-6 py-6 text-white shadow-[0_30px_70px_rgba(15,23,42,0.16)] md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Domain Lens
          </p>
          <p className="mt-3 max-w-3xl text-base leading-8 text-slate-200">
            The strongest thread across your experience is translating business
            workflows into usable software, especially in healthcare and
            operationally complex products where UX clarity and dependable
            behavior matter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
