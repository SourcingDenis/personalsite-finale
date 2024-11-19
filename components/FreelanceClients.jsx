import React from 'react'

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
      className="group relative flex flex-col w-full p-3 rounded-lg transition-all duration-300 hover:bg-zinc-900 hover-glow"
    >
      <div className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" 
           style={{background: 'radial-gradient(circle 150px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.1), transparent 80%)'}}></div>
      <div className="absolute inset-0 -z-10 animate-gradient opacity-20"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start w-full group-hover:translate-x-1">
          <div>
            <p className="text-base font-medium leading-tight transition-colors group-hover:text-white">{role}</p>
            <p className="text-sm text-gray-300 mt-0.5">{company}</p>
            <p className="text-xs text-gray-400 mt-0.5">{location}</p>
          </div>
          <p className="text-xs text-gray-400">{period}</p>
        </div>
      </div>
    </div>
  )
}

const FreelanceClients = () => {
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

  return (
    <div className="flex flex-col mt-[2rem] w-full">
      <h1 className="font-normal">professional experience 🧱</h1>
      <div className="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"></div>
      <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2">
        {experience.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  )
}

export default FreelanceClients