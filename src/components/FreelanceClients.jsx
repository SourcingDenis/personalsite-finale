import React, { useState, useMemo } from 'react'

const ClientLink = ({ href, title, description }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <a 
      target="_blank" 
      href={href} 
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col w-full p-2 rounded-lg transition-all duration-300 hover:bg-zinc-900 hover-glow"
    >
      <div className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" 
           style={{background: 'radial-gradient(circle 150px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.1), transparent 80%)'}}></div>
      <div className="absolute inset-0 -z-10 animate-gradient opacity-20"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-center w-full group-hover:translate-x-1">
          <p className="text-sm leading-7 transition-colors group-hover:text-white">{title}</p>
        </div>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 group-hover:translate-x-1">{description}</p>
      </div>
    </a>
  )
}

const ExperienceCard = ({ company, role, period, location }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col w-full p-4 rounded-xl transition-all duration-500 hover:bg-zinc-900/50 hover:backdrop-blur-sm hover-glow"
    >
      <div className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" 
           style={{background: 'radial-gradient(circle 200px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.075), transparent 80%)'}}></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-zinc-900/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start w-full group-hover:translate-x-2 transition-transform duration-500">
          <div>
            <p className="text-base font-medium leading-tight transition-colors duration-500 group-hover:text-white">{role}</p>
            <p className="text-sm text-gray-300 mt-1 transition-colors duration-500 group-hover:text-gray-200">{company}</p>
            <p className="text-xs text-gray-400 mt-1 transition-colors duration-500 group-hover:text-gray-300">{location}</p>
          </div>
          <p className="text-xs text-gray-400 transition-colors duration-500 group-hover:text-gray-300">{period}</p>
        </div>
      </div>
    </div>
  )
}

const FreelanceClients = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const experience = [
    {
      company: "Playson",
      role: "Senior Talent Sourcer",
      period: "Dec 2023 - Present",
      location: "Bratislava, Slovakia · Remote"
    },
    {
      company: "Spendesk",
      role: "Global Talent Sourcer",
      period: "Dec 2021 - Jun 2023",
      location: "Ukraine · Remote"
    },
    {
      company: "iDeals",
      role: "Talent Sourcing Lead",
      period: "Dec 2018 - Nov 2021",
      location: "London, UK · Remote"
    },
    {
      company: "Preply",
      role: "Sourcing Recruiter",
      period: "Sep 2017 - Nov 2018",
      location: "Kiev Region, Ukraine"
    }
  ];

  const experienceCards = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {experience.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  ), []);

  return (
    <div className="my-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2"
      >
        <h2 className="text-2xl font-bold">Freelance Experience</h2>
        <span>{isExpanded ? '↑' : '↓'}</span>
      </button>
      
      {isExpanded && experienceCards}
    </div>
  );
}

export default FreelanceClients