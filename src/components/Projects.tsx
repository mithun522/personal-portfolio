import React from 'react';
import manojTours1 from '../assets/manoj-tours-1.png';
import manojTours2 from '../assets/manoj-tours-2.png';
import manojTours3 from '../assets/manoj-tours-3.png';
import manojTours4 from '../assets/manoj-tours-4.png';
import manojTours5 from '../assets/manoj-tours-5.png';
import manojTours6 from '../assets/manoj-tours-6.png';
import manojTours7 from '../assets/manoj-tours-7.png';
import quco1 from '../assets/quco-1.png';
import quco10 from '../assets/quco-10.png';
import quco11 from '../assets/quco-11.png';
import quco2 from '../assets/quco-2.png';
import quco3 from '../assets/quco-3.png';
import quco4 from '../assets/quco-4.png';
import quco5 from '../assets/quco-5.png';
import quco6 from '../assets/quco-6.png';
import quco7 from '../assets/quco-7.png';
import quco8 from '../assets/quco-8.png';
import quco9 from '../assets/quco-9.png';

import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Manoj Tours',
    description: 'A fullstack tours and travels web application to manage data and track customers.',
    type: 'Freelance Project',
    techStack: ['React', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
    images: [manojTours1, manojTours2, manojTours3, manojTours4, manojTours5, manojTours6, manojTours7],
    githubPublicRepo: true,
    githubUrl: 'https://github.com/mithun522/manoj_tours',
  },
  {
    title: 'Quco',
    description: 'An frontend-application inventory-based application for an ecommerce fashion selling business.',
    techStack: ['React', 'Tailwind CSS'],
    type: 'Freelance Project',
    images: [quco1, quco2, quco3, quco4, quco5, quco6, quco7, quco8, quco9, quco10, quco11],
    githubPublicRepo: true,
    githubUrl: 'https://github.com/mithun522/quco',
  },
  {
    title: 'Expense Tracker',
    description: 'An expense tracker built using react-native and application to keep track of your expenses.',
    type: 'Personal Project',
    techStack: ['React', 'Tailwind CSS'],
    images: [],
    githubPublicRepo: true,
    githubUrl: 'https://github.com/mithun522/expense-tracker',
  },
  {
    title: 'Personal Portfolio',
    description: 'A personal portfolio built using React and Tailwind CSS.',
    type: 'Personal Project',
    techStack: ['React', 'Tailwind CSS'],
    images: [],
    githubPublicRepo: true,
    githubUrl: 'https://github.com/mithun522/personal-portfolio',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="p-8 bg-slate-900 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8">Projects <span className='text-yellow-300'>Made</span> out of Passion</h1>
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
