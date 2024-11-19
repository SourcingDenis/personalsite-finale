import React, { useState } from 'react';
import searchPreview from '../assets/search-preview.gif';
import devfinderPreview from '../assets/devfinder-preview.png';
import * as gtag from '../lib/gtag'

const Projects = () => {
  const projects = [
    {
      href: "https://search.sourcingdenis.live",
      title: "Sourcing Search Tool",
      description: "Advanced Google search tool for finding job candidates and opportunities online",
      image: searchPreview,
      icon: (
        <svg viewBox="0 0 48 48" className="w-6 h-6">
          <path fill="#4285F4" d="M11.5 20.5c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9-9-4.03-9-9z"/>
          <path fill="#EA4335" d="M20.5 11.5c-4.97 0-9 4.03-9 9h18c0-4.97-4.03-9-9-9z"/>
          <path fill="#FBBC05" d="M20.5 29.5c4.97 0 9-4.03 9-9h-18c0 4.97 4.03 9 9 9z"/>
          <path fill="#34A853" d="M11.5 20.5h9v9c-4.97 0-9-4.03-9-9z"/>
          <path fill="#4285F4" d="M29.5 20.5h-9v9c4.97 0 9-4.03 9-9z"/>
          <path 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            d="M27 27L34 34"
            className="animate-pulse"
          />
        </svg>
      )
    },
    {
      href: "https://githubber.sourcingdenis.live/",
      title: "GitHub User Finder",
      description: "Search and explore GitHub profiles with detailed user statistics",
      image: devfinderPreview,
      icon: (
        <svg viewBox="0 0 48 48" className="w-6 h-6">
          <path 
            fill="currentColor"
            d="M24 4C12.95 4 4 12.95 4 24c0 8.84 5.73 16.32 13.67 18.97.1.02.21.03.32.03.72 0 1-.5 1-1v-3.44c-5.67 1.23-6.87-2.73-6.87-2.73-.92-2.35-2.25-2.97-2.25-2.97-1.84-1.26.14-1.23.14-1.23 2.03.14 3.1 2.08 3.1 2.08 1.8 3.08 4.73 2.2 5.88 1.68.18-1.3.7-2.2 1.28-2.7-4.47-.5-9.17-2.23-9.17-9.95 0-2.2.78-4 2.08-5.42-.2-.5-.9-2.54.2-5.3 0 0 1.7-.54 5.55 2.07 1.61-.45 3.33-.67 5.05-.68 1.7.01 3.42.23 5.03.68 3.85-2.61 5.54-2.07 5.54-2.07 1.1 2.76.4 4.8.2 5.3 1.3 1.42 2.08 3.22 2.08 5.42 0 7.74-4.71 9.44-9.2 9.93.73.63 1.38 1.87 1.38 3.77v5.58c0 .5.28 1 1 1 .1 0 .21-.01.32-.03C38.27 40.32 44 32.84 44 24 44 12.95 35.05 4 24 4z"
          />
          <circle cx="17" cy="21" r="2" fill="currentColor" className="animate-blink"/>
          <circle cx="31" cy="21" r="2" fill="currentColor" className="animate-blink"/>
        </svg>
      )
    }
  ];

  const ProjectCard = ({ href, title, description, image, icon }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
      e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleClick = () => {
      gtag.event({
        action: 'click',
        category: 'Projects',
        label: title,
      })
    }

    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full"
        onClick={handleClick}
      >
        <div 
          onMouseMove={handleMouseMove}
          className="group relative w-full rounded-2xl border border-zinc-900 hover:cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-transparent hover-glow bg-zinc-950 gradient-border"
        >
          <div className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" 
               style={{background: 'radial-gradient(circle 150px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.1), transparent 80%)'}}></div>
          <div className="absolute inset-0 -z-10 animate-gradient opacity-20"></div>
          <div className="relative z-10 p-3">
            <div className="relative w-full aspect-[16/9] rounded overflow-hidden mb-3">
              <img 
                alt={title}
                src={image}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`object-cover object-center w-full h-full transition-all duration-500 will-change-transform ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                } group-hover:scale-105`}
              />
            </div>
            <div className="flex items-center gap-3 group-hover:translate-x-1">
              <div className="flex-shrink-0 text-gray-400 group-hover:text-gray-200">
                {icon}
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-300 group-hover:text-white">{title}</p>
                <p className="text-xs text-gray-400 group-hover:text-gray-300">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className="max-w-[700px] mb-[2rem] w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-gray-200" id="projects-section">projects 🏗️</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 mt-[0.75rem]">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
