import React from "react";
import { FaUser } from "react-icons/fa";
import Mithun_2 from "../assets/Mithun_2.jpeg";

interface AboutMeProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}
const AboutMe: React.FC<AboutMeProps> = ({ aboutRef }) => {
  return (
    <section
      id="about"
      className="p-8 bg-white flex justify-center items-center"
    >
      <div className="flex flex-col items-center" ref={aboutRef}>
        <div className="mb-4 flex items-center">
          <FaUser size={40} className="mr-5" />
          <h1 className="text-4xl" style={{ fontWeight: 800 }}>
            About <span className="text-violet-800">Me</span>
          </h1>
        </div>
        <div className="flex md:flex-row flex-col justify-between w-full md:items-center items-start relative">
          <img
            src={Mithun_2}
            alt="Profile"
            className="rounded-lg h-100 w-80 object-cover"
          />
          <div className="text-left md:pl-20 pl-2 md:pt-0 pt-5">
            <h1 className="text-2xl font-bold">I'm Mithun J.T</h1>
            <p className="text-md font-medium">
              I am a passionate Software Developer based in Chennai, India, with
              extensive hands-on experience gained by diving deep into code. I
              possess strong expertise in modern web technologies and
              programming languages including HTML, CSS, JavaScript, TypeScript,
              React.js, Node.js, Express.js, MySQL, Jest, Cypress, and
              TailwindCSS. With a passion for coding and problem-solving, I
              thrive on tackling complex challenges and am always eager to
              embrace the next opportunity.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Let's collaborate and create something amazing together!
            </p>
            <span className="text-sm font-semibold">
              Email:{" "}
              <a
                href="mailto:mithunmathi03@gmail.com"
                className="text-[#005ce6] underline cursor-pointer"
              >
                mithunmathi03@gmail.com
              </a>
            </span>{" "}
            <br />
            <span className="text-sm font-semibold">
              Place: <span>Chennai - 600-042</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
