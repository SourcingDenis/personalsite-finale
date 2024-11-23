import React, { useState } from 'react';
import * as gtag from '../lib/gtag'

const Projects = () => {
  const projects = [
    {
      href: "https://search.sourcingdenis.live/?utm_source=my_site",
      title: "Job Search Tool",
      description: "Advanced Google search tool for finding job candidates and opportunities online",
      illustration: (
        <svg viewBox="0 0 400 225" className="w-full h-full">
          <rect width="400" height="225" fill="#202124"/>
          {/* Google-style Search Bar */}
          <rect x="50" y="82" width="300" height="45" rx="22.5" fill="#303134"/>
          <circle cx="80" cy="104.5" r="12" stroke="#8AB4F8" strokeWidth="2" fill="none"/>
          <line x1="88" y1="112.5" x2="98" y2="122.5" stroke="#8AB4F8" strokeWidth="2"/>
          {/* Animated Pulse Effect */}
          <circle cx="80" cy="104.5" r="18" stroke="#8AB4F8" strokeWidth="2" fill="none" opacity="0.3">
            <animate attributeName="r" values="18;22;18" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
          {/* Google Colors */}
          <circle cx="320" cy="104.5" r="4" fill="#4285F4"/>
          <circle cx="335" cy="104.5" r="4" fill="#EA4335"/>
          <circle cx="350" cy="104.5" r="4" fill="#FBBC05"/>
        </svg>
      ),
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
      href: "https://githubber.sourcingdenis.live/?utm_source=my_site",
      title: "GitHub User Finder",
      description: "Search and explore GitHub profiles with detailed user statistics",
      illustration: (
        <svg viewBox="0 0 400 225" className="w-full h-full">
          <rect width="400" height="225" fill="#0D1117"/>
          {/* GitHub-style Profile Card */}
          <rect x="75" y="42" width="250" height="140" rx="6" fill="#161B22"/>
          {/* Profile Avatar Circle */}
          <circle cx="125" cy="92" r="25" fill="#21262D"/>
          <path 
            d="M125 75 C113 75 105 83 105 95 C105 104 110 111 118 113 C119 113.2 119.5 112.8 119.5 112.3 C119.5 111.8 119.5 110.5 119.5 109 C114 110 112.5 106 112.5 106 C111.5 104 110 103.5 110 103.5 C108 102.5 110.2 102.5 110.2 102.5 C112.5 102.7 113.7 104.3 113.7 104.3 C115.8 107.5 119.3 106.2 119.7 105.8 C119.9 104.5 120.5 103.7 121 103.2 C116.5 102.7 111.7 101 111.7 93 C111.7 90.5 112.5 88.5 114 87 C113.8 86.5 113 84.5 114.2 82 C114.2 82 116.2 81.5 119.5 83.8 C121 83.4 122.5 83.2 124 83.2 C125.5 83.2 127 83.4 128.5 83.8 C131.8 81.5 133.8 82 133.8 82 C135 84.5 134.2 86.5 134 87 C135.5 88.5 136.3 90.5 136.3 93 C136.3 101 131.5 102.7 127 103.2 C127.7 103.8 128.3 105 128.3 107 C128.3 109.8 128.3 111.6 128.3 112.3 C128.3 112.8 128.8 113.2 129.8 113 C137.8 111 142.8 104 142.8 95 C142.8 83 134.8 75 122.8 75 Z"
            fill="#C9D1D9"
          >
            <animate 
              attributeName="opacity" 
              values="0.8;1;0.8" 
              dur="2s" 
              repeatCount="indefinite"
            />
          </path>
          {/* Stats Bars */}
          <rect x="165" y="82" width="140" height="8" rx="4" fill="#21262D">
            <animate 
              attributeName="width" 
              values="140;150;140" 
              dur="3s" 
              repeatCount="indefinite"
            />
          </rect>
          <rect x="165" y="102" width="100" height="8" rx="4" fill="#21262D">
            <animate 
              attributeName="width" 
              values="100;110;100" 
              dur="3s" 
              repeatCount="indefinite"
            />
          </rect>
          <rect x="165" y="122" width="120" height="8" rx="4" fill="#21262D">
            <animate 
              attributeName="width" 
              values="120;130;120" 
              dur="3s" 
              repeatCount="indefinite"
            />
          </rect>
          {/* Animated Commit Dots */}
          <circle cx="190" cy="160" r="3" fill="#39D353">
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="200" cy="160" r="3" fill="#26A641"/>
          <circle cx="210" cy="160" r="3" fill="#39D353">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      ),
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

  const ProjectCard = ({ href, title, description, illustration, icon }) => {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full"
        onClick={() => gtag.event({
          action: 'click',
          category: 'Projects',
          label: title,
        })}
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
              {illustration}
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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
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
