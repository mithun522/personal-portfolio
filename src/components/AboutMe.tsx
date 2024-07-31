import React from 'react';
import { FaUser } from "react-icons/fa";

interface AboutMeProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}
const AboutMe: React.FC<AboutMeProps> = ({ aboutRef }) => {
  return (
    <section id="about" className="p-8 bg-white flex justify-center items-center">
      <div className='flex flex-col items-center' ref={aboutRef}>
        <div className='mb-4 flex items-center'>
          <FaUser size={40} className="mr-5" />
          <h1 className="text-4xl" style={{ fontWeight: 800 }}>About <span className='text-violet-800'>Me</span></h1>
        </div>
        <div className='flex md:flex-row flex-col justify-between w-full md:items-center items-start relative'>
          <img 
            src='https://t3.ftcdn.net/jpg/02/11/71/06/360_F_211710600_v1ZWFOoNhFRGMowNwoHYTO25rZE2LXI6.jpg' 
            alt="Profile" 
            className='rounded-lg md:w-full md:h-full h-80 w-60 object-cover'
          />
          <div className='text-left md:pl-20 pl-2 md:pt-0 pt-5'>
            <h1 className="text-2xl font-bold">I'm Mithun J.T</h1>
            <p className="text-md font-medium">
              I am a passionate Software Developer based in Coimbatore, India. 
              I am currently working with Nowri Technologies, a Madurai-based startup for the past 14 months,
              and have gained a lots of hands-on experience by diving into code. I possess
              expertise in modern web technologies like React.js, Node.js, and Angular. With a passion for coding and problem-solving, I thrive on tackling 
              complex challenges and am always ready for the next opportunity.
            </p>
            <p className='text-gray-400 text-sm mt-4'>Let's collaborate and create something amazing together!</p>
            <span className='text-sm font-semibold'>Email: <a href='mailto:mithunmathi03@gmail.com' className='text-[#005ce6] underline cursor-pointer'>mithunmathi03@gmail.com</a></span> <br />
            <span className='text-sm font-semibold'>Place: <span>Coimbatore - 641-108</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
