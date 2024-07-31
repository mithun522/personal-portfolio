import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Manoj Tours',
    description: 'A tours and travels web application to manage data and track customers.',
    techStack: ['React', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS']
  },
  {
    title: 'Quco',
    description: 'An inventory-based application for an ecommerce fashion selling business.',
    techStack: ['React', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS']
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
