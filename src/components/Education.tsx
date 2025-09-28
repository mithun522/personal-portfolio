import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import collegeImage from "../assets/ifet-college.jpg";
import schoolImage from "../assets/st-pauls.webp";

interface EducationProps {
  eduRef: React.RefObject<HTMLDivElement>;
}

const Education: React.FC<EducationProps> = ({ eduRef }) => {
  return (
    <section id="education" ref={eduRef} className="p-8 bg-blue-100 text-black">
      <h1 className="text-4xl font-extrabold text-center mb-8 mt-10">
        <FaGraduationCap className="inline mr-2" size={50} /> My{" "}
        <span className="text-purple-800">Education</span>
      </h1>
      <div className="container mx-auto lg:max-w-[1000px] min-h-[500px] lg:min-w-[800px] space-y-4">
        {/* College Education */}
        <div className="flex md:flex-row flex-col items-center bg-white shadow-lg rounded-lg">
          <div className="flex-shrink-0">
            <img
              src={collegeImage}
              alt="college"
              className="w-48 h-auto rounded-lg"
            />
          </div>
          <div className="md:ml-6 mt-4 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-bold">IFET College of Engineering</h3>
            <p className="text-lg">
              Bachelor of Mechanical Engineering (June 2019 - May 2023)
            </p>
            <p className="text-lg">CGPA: 7.5/10</p>
          </div>
        </div>

        {/* School Education */}
        <div className="flex md:flex-row flex-col items-center bg-white shadow-lg rounded-lg">
          <div className="flex-shrink-0">
            <img
              src={schoolImage}
              alt="school"
              className="w-48 h-auto rounded-lg"
            />
          </div>
          <div className="md:ml-6 mt-4 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-bold">St. Paul's Mat Hr Sec School</h3>
            <p className="text-lg">HSC (2018)</p>
            <p className="text-lg">Percentage: 63%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
