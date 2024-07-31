import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import angularLogo from '../assets/angular.svg';
import bootstrapLogo from '../assets/bootstrap.svg';
import css3Logo from '../assets/css3.svg';
import cypressLogo from '../assets/cypress.png';
import githubLogo from '../assets/github.svg';
import htmlLogo from '../assets/html-5.svg';
import javaLogo from '../assets/java.svg';
import javascriptLogo from '../assets/javascript.svg';
import jestLogo from '../assets/jest.svg';
import mysqlLogo from '../assets/mysql.svg';
import nodejsLogo from '../assets/nodejs.svg';
import reactLogo from '../assets/react.svg';
import springLogo from '../assets/spring.svg';
import tailwindLogo from '../assets/tailwindcss.svg';
import typeScriptLogo from '../assets/typescript.svg';

const technologies = [
  { name: 'Java', logo: javaLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: css3Logo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'Cypress', logo: cypressLogo },
  { name: 'Jest', logo: jestLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Node.js', logo: nodejsLogo },
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'Bootstrap', logo: bootstrapLogo },
  { name: 'Tailwind', logo: tailwindLogo },
  { name: 'TypeScript', logo: typeScriptLogo },
  { name: 'Angular', logo: angularLogo },
  { name: 'Spring', logo: springLogo },
  { name: 'GitHub', logo: githubLogo },
];

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="min-h-[100vh] p-8 bg-gradient-to-r from-violet-800 to-purple-700 text-white">
      <div className="container mx-auto text-center mb-8">
        <h1 className="flex items-center justify-center text-center text-white md:text-4xl text-2xl font-extrabold my-8">
          <FaLaptopCode className="mr-2" />
          <span className="text-white">Technologies &</span>
          <span className="text-yellow-300 ml-2">Frameworks</span>
        </h1>
        <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg shadow-lg inline-block">
          <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-cente p-5 sm:min-w-[180px]">
                <div className="bg-blue-950 bg-opacity-60 p-4 rounded-lg shadow-2xl shadow-blue-950 flex flex-col items-center hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                  <img src={tech.logo} alt={tech.name} className="h-24 w-24 object-contain sm:h-16 sm:w-16 md:h-20 md:w-20 mb-4" />
                  <p className="text-center font-semibold">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
