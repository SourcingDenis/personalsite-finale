import React from 'react'

const ServiceCard = ({ title, description }) => {
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
      className="group relative w-full rounded-2xl border border-zinc-900 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-transparent hover-glow bg-zinc-950 gradient-border"
    >
      <div className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" 
           style={{background: 'radial-gradient(circle 150px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.1), transparent 80%)'}}></div>
      <div className="absolute inset-0 -z-10 animate-gradient opacity-20"></div>
      <div className="relative z-10 p-3">
        <div className="flex flex-col gap-1 group-hover:translate-x-1">
          <p className="text-sm text-gray-300 group-hover:text-white">{title}</p>
          <p className="text-xs text-gray-400 group-hover:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <div className="max-w-[700px] my-[2rem] w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-gray-200">how i can help 🤝</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-col:2 xl:grid-cols-2 gap-2 mt-[0.75rem]">
        <ServiceCard
          title="🎯 Sourcing Strategy"
          description="Setting up effective sourcing functions and processes from scratch, including tools and methodologies."
        />
        <ServiceCard
          title="📊 TA Analytics"
          description="Implementing comprehensive talent acquisition analytics and metrics for data-driven recruitment."
        />
        <ServiceCard
          title="🤖 AI-Powered Recruitment"
          description="Leveraging AI tools and automation to enhance recruitment efficiency and effectiveness."
        />
        <ServiceCard
          title="👥 Team Training"
          description="Training recruitment teams in modern sourcing techniques and best practices."
        />
      </div>
    </div>
  )
}

export default Services