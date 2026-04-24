import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import collegeImage from "../assets/ifet-college.jpg";
import schoolImage from "../assets/st-pauls.webp";

interface EducationProps {
  eduRef: React.RefObject<HTMLDivElement>;
}

const Education: React.FC<EducationProps> = ({ eduRef }) => {
  return (
    <section id="education" ref={eduRef} className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
      <h1 className="mb-8 mt-10 text-center font-serif text-4xl font-semibold text-slate-950 md:text-5xl">
        <FaGraduationCap className="mr-3 inline text-[var(--accent-strong)]" size={42} />{" "}
        Education
      </h1>
      <div className="mx-auto space-y-4 lg:max-w-[1000px]">
        {/* College Education */}
        <div className="flex flex-col items-center rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:flex-row">
          <div className="flex-shrink-0">
            <img
              src={collegeImage}
              alt="college"
              className="h-auto w-48 rounded-[1.25rem]"
            />
          </div>
          <div className="mt-4 flex flex-col items-center px-4 py-5 text-center md:ml-6 md:mt-0 md:items-start md:text-left">
            <h3 className="text-2xl font-bold">IFET College of Engineering</h3>
            <p className="text-lg">
              Bachelor of Mechanical Engineering (June 2019 - May 2023)
            </p>
            <p className="text-lg">CGPA: 7.5/10</p>
          </div>
        </div>

        {/* School Education */}
        <div className="flex flex-col items-center rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:flex-row">
          <div className="flex-shrink-0">
            <img
              src={schoolImage}
              alt="school"
              className="h-auto w-48 rounded-[1.25rem]"
            />
          </div>
          <div className="mt-4 flex flex-col items-center px-4 py-5 text-center md:ml-6 md:mt-0 md:items-start md:text-left">
            <h3 className="text-2xl font-bold">St. Paul's Mat Hr Sec School</h3>
            <p className="text-lg">HSC (2018)</p>
            <p className="text-lg">Percentage: 63%</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Education;
