import React, { useEffect, useState } from 'react';
import { FaArrowCircleDown, FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';
import bgVideo from '../assets/portfolio-bg.mp4';
import Mithun from '../assets/Mithun.jpeg';

const Typewriter: React.FC = () => {
  const words = ["Web Dev", "React.js", "Node.js", "Angular", "React Native", "Java", "Mobile App Dev", "Scaffolding Tools"];
  const [currentWord, setCurrentWord] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopNum, setLoopNum] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const handleType = () => {
      setCurrentWord(words[loopNum].substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex(charIndex + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === words[loopNum].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => (prevLoopNum + 1) % words.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 200;
    const timeout = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, loopNum, words]);

  return (
    <div className="whitespace-nowrap">
      <span className="text-lg md:text-3xl font-bold text-black">I am into&nbsp;</span>
      <span id="typewriter" className='text-lg md:text-3xl font-bold text-rose-800'>{currentWord}</span>
    </div>
  );
};

const Home: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  let fontSize;
  if (windowWidth < 768) {
    fontSize = '2rem';
  } else if (windowWidth < 1024) {
    fontSize = '3rem';
  } else {
    fontSize = '4rem';
  }

  return (
    <div className="relative flex flex-col justify-center items-center md:h-[100vh] text-gray-900">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover -z-10"
      >
        <source src={bgVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className='flex md:flex-row flex-col-reverse justify-between items-center px-5 md:px-40 w-full'>
        <div className="flex flex-col text-left md:w-1/2 mb-10">
          <h1 style={{ fontSize, fontWeight: 900 }} className='text-blue-900' >Hi There.</h1>
          <h2 style={{ fontSize, fontWeight: 900 }} className='text-blue-900' >I'm Mithun <span className='text-orange-500' >J.T.</span></h2>
          <div className="whitespace-nowrap">
            <Typewriter />
          </div>
          <div className='mt-10 md:mt-0 md:block hidden'>
              <div className='bg-violet-800 shadow-md drop-shadow-xl shadow-violet-600 px-4 py-2 rounded-full text-white relativefont-semibold w-[150px] md:mt-5 mt-0' >My Profiles
                <FaArrowCircleDown className='absolute right-5 top-3' />
              </div>
              <div className='flex space-x-5 mt-5'>
                <a href="https://linkedin.com/in/mithun-jt-full-stack-developer" target="_blank" rel="noopener noreferrer" className='h-12 w-12 rounded-full bg-black flex justify-center items-center hover:scale-105 duration-300 ease-in-out'>
                  <FaLinkedin color='#07F7EC' size={30} />
                </a>
                <a href="https://github.com/mithun522" target="_blank" rel="noopener noreferrer" className='h-12 w-12 rounded-full bg-black flex justify-center items-center hover:scale-105 duration-300 ease-in-out'>
                  <FaGithub color='#07F7EC' size={30} />
                </a>
                <a href="https://leetcode.com/u/Mithun_04/" target="_blank" rel="noopener noreferrer" className='h-12 w-12 rounded-full bg-black flex justify-center items-center hover:scale-105 duration-300 ease-in-out'>
                  <FaCode color='#07F7EC' size={30} />
                </a>
              </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:w-1/2 mt-28">
          <img src={Mithun} alt="Mithun J.T." className="object-cover rounded-full shadow-lg md:w-[400px] md:h-[400px] w-[250px] h-[250px]" />
        </div>
      </div>
    </div>
  );
}

export default Home;

