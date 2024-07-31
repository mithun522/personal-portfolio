import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <div className="mt-4">
        {techStack.map((tech, index) => (
          <span key={index} className="bg-gray-700 px-2 py-1 rounded mr-2">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
