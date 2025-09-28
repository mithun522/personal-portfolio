import React from "react";
import { FaBriefcase } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface WorkExperienceProps {
  workExperienceRef: React.RefObject<HTMLDivElement>;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  workExperienceRef,
}) => {
  const experiences = [
    {
      period: "Jan 2025 – Present",
      company: "Capminds Technologies",
      techStack:
        "HTML, CSS, Javascript, Typescript, React, Node.js, Jest, Cypress, MySQL",
      work: "Contributed to the development of Vozo EHR.",
    },
    {
      period: "July 2023 – Dec 2024",
      company: "Nowri Technologies",
      techStack:
        "HTML, CSS, Javascript, Typescript, React, Angular, Node.js, MySQL, Jest, Cypress",
      work: "Worked on BrmaStr, a derivation application from JHipster.",
    },
    {
      period: "Dec 2022 – Jun 2023",
      company: "YougetPlaced (Internship)",
      techStack: "HTML, CSS, Javascript, React, Node.js, MySQL",
      work: "Worked on YougetPlaced, a job portal.",
    },
  ];

  return (
    <section id="about" className="p-8flex flex-col items-center">
      <div className="flex flex-col" ref={workExperienceRef}>
        <div className="mb-4 flex items-center justify-center">
          <FaBriefcase size={40} className="mr-5" />
          <h1 className="text-4xl text-center" style={{ fontWeight: 800 }}>
            Work Experience
          </h1>
        </div>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "#fff", color: "#333" }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              date={exp.period}
              iconStyle={{ background: "#3b82f6", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title font-semibold">
                {exp.company}
              </h3>
              <p className="text-sm">
                <strong>Tech Stack:</strong> {exp.techStack}
              </p>
              <p className="text-sm">{exp.work}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default WorkExperience;
