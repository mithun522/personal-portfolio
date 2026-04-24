import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaCode, FaWalking } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: React.ReactNode[];
  type: string;
  images: string[];
  githubUrl?: string;
  githubPublicRepo: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  type,
  techStack,
  images,
  githubUrl,
  githubPublicRepo,
}) => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 p-5 text-white shadow-[0_20px_55px_rgba(15,23,42,0.18)] backdrop-blur">
      {githubPublicRepo ? (
        <div className="absolute right-4 top-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white transition duration-300 hover:bg-white/20"
            title="View Code"
          >
            <FaCode />
          </a>
        </div>
      ) : (
        <div className="absolute right-4 top-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white transition duration-300 hover:bg-white/20"
            title="View Code"
          >
            <FaWalking />
          </a>
        </div>
      )}
      <div className="max-w-[85%]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          {type}
        </p>
        <h2 className="mt-3 text-3xl font-semibold">{title}</h2>
        <p className="mt-3 leading-7 text-white/75">{description}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="inline-flex h-5 max-w-[50px] items-center justify-center rounded-2xl border border-white/10 bg-slate-950/35 px-3 py-2 text-center text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      {images.length > 0 && (
        <div className="relative mt-6">
          {/* Slider */}
          <div className="overflow-hidden rounded-2xl">
            <Slider ref={sliderRef} {...settings}>
              {images.map((image, index) => (
                <div key={index} className="px-0">
                  <img
                    src={image}
                    alt={`${title} screenshot ${index + 1}`}
                    className="h-[18rem] w-full rounded-1xl object-cover object-top"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 backdrop-blur hover:bg-black/80 transition"
          >
            <FaArrowLeft className="text-white" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 backdrop-blur hover:bg-black/80 transition"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
