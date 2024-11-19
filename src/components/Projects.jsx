import React, { useState, useEffect } from 'react'
import searchPreview from '../assets/search-preview.gif'
import devfinderPreview from '../assets/devfinder-preview.png'

const ProjectCard = ({ href, title, description, image }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleImageError = (e) => {
    console.error(`Failed to load image for ${title}`);
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full"
    >
      <div 
        onMouseMove={handleMouseMove}
        className="group relative w-full rounded-2xl border border-zinc-900 hover:cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-transparent hover-glow bg-zinc-950 gradient-border"
      >
        <div className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" 
             style={{background: 'radial-gradient(circle 150px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.1), transparent 80%)'}}></div>
        <div className="absolute inset-0 -z-10 animate-gradient opacity-20"></div>
        <div className="relative z-10 p-3">
          <div className="relative w-full aspect-[16/9] rounded overflow-hidden">
            <img 
              alt={title}
              src={image}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
              className={`object-cover object-center w-full h-full transition-all duration-500 will-change-transform ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              } group-hover:scale-105`}
            />
          </div>
          <div className="flex flex-col gap-1 mt-2 group-hover:translate-x-1">
            <p className="text-sm text-gray-300 group-hover:text-white">{title}</p>
            <p className="text-xs text-gray-400 group-hover:text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

const projectsList = [
  {
    href: "https://search.sourcingdenis.live",
    title: "Job Search Hub",
    description: "Advanced job search platform with real-time filtering and comprehensive search capabilities.",
    image: searchPreview
  },
  {
    href: "https://githubber.sourcingdenis.live/",
    title: "DevFinder",
    description: "Search through millions of GitHub profiles with advanced filtering and real-time data.",
    image: devfinderPreview
  }
];

const Projects = () => {
  return (
    <div className="max-w-[700px] mb-[2rem] w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-gray-200" id="projects-section">projects 🏗️</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 mt-[0.75rem]">
        {projectsList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
