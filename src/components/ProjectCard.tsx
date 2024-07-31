import React from "react";
import { FaCode, FaWalking } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  type: string;
  images: string[];
  githubUrl?: string;
  githubPublicRepo: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  type,
  images,
  githubUrl,
  githubPublicRepo,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white relative">
      {githubPublicRepo ? (
        <div className="absolute top-2 right-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            title="View Code"
          >
            <FaCode />
          </a>
        </div>
      ) : (
        <div className="absolute top-2 right-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            title="View Code"
          >
            <FaWalking />
          </a>
        </div>
      )}
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <div className="mt-4 grid grid-cols-3 md:grid-cols-5 gap-2">
        {techStack.map((tech, index) => (
          <span key={index} className="bg-blue-700 font-medium text-xs md:text-md py-1 rounded text-center whitespace-nowrap">
            {tech}
          </span>
        ))}
      </div>
      {images.length > 0 && (
        <div className="mt-4">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  className="rounded-lg mb-2 w-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
