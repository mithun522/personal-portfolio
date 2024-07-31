import React, { useEffect, useState } from 'react';
import { FaArrowCircleDown, FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';
import bgVideo from '../assets/portfolio-bg.mp4';

const Typewriter: React.FC = () => {
  const words = ["Web Development", "React.js", "Node.js", "Angular", "React Native", "Java", "Mobile App Development", "Scaffolding Tools Building"];
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
    <div className="w-full h-full flex relative">
      <span className="text-3xl font-bold whitespace-nowrap space-x-3 flex justify-start">I am into&nbsp;</span>
      <span id="typewriter" className='text-3xl font-bold text-rose-800'>{currentWord}</span>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-[100vh] text-gray-900">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover -z-10"
      >
        <source src={bgVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className='flex md:flex-row flex-col justify-between items-center px-40 w-full'>
        <div className="flex flex-col text-left">
          <h1 style={{ fontSize: '3rem', fontWeight: '900' }} className='text-blue-900' >Hi There.</h1>
          <h2 style={{ fontSize: '3rem', fontWeight: '900' }} className='text-blue-900' >I'm Mithun <span className='text-orange-500' >J.T.</span></h2>
          <Typewriter />
          <div className='mt-10'>
              <div className='bg-violet-800 shadow-md drop-shadow-xl shadow-violet-600 px-4 py-2 rounded-full text-white relativefont-semibold w-[150px]' >My Profiles
              <FaArrowCircleDown className='absolute right-5 top-3' />
              </div>
              <div className='flex space-x-5 mt-5'>
                <a href="https://linkedin.com/in/mithun-jt-full-stack-developer" target="_blank" rel="noopener noreferrer" className='h-12 w-12 rounded-full bg-black flex justify-center items-center'>
                  <FaLinkedin color='#07F7EC' size={30} />
                </a>
                <a href="https://github.com/mithun522" target="_blank" rel="noopener noreferrer" className='h-12 w-12 rounded-full bg-black flex justify-center items-center'>
                  <FaGithub color='#07F7EC' size={30} />
                </a>
                <a href="https://leetcode.com/u/Mithun_04/" target="_blank" rel="noopener noreferrer" className='h-12 w-12 rounded-full bg-black flex justify-center items-center'>
                  <FaCode color='#07F7EC' size={30} />
                </a>
              </div>
            </div>
        </div>
        <div className="flex justify-center items-center">
          <img src='https://www.shutterstock.com/image-photo/closeup-portrait-young-smiling-hispanic-260nw-2327799157.jpg' alt="Mithun J.T." className="object-cover w-[400px] h-[400px] rounded-full shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
