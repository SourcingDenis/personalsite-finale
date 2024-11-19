import React from 'react'

const LatestBlog = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="font-normal">latest insights 📖</h1>
      <div className="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"></div>
      <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2">
        <a 
          href="https://www.linkedin.com/in/sourcingdenis/recent-activity/" 
          onMouseMove={handleMouseMove}
          className="group relative flex justify-between items-center w-full p-2 rounded-lg transition-all duration-300 hover:bg-zinc-900 hover-glow"
        >
          <div className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" 
               style={{background: 'radial-gradient(circle 150px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.1), transparent 80%)'}}></div>
          <div className="absolute inset-0 -z-10 animate-gradient opacity-20"></div>
          <div className="relative z-10 flex flex-col gap-1 group-hover:translate-x-1">
            <p className="text-sm text-gray-200 group-hover:text-white">Trends in iGaming Recruitment</p>
            <p className="text-sm text-gray-400 group-hover:text-gray-300">Insights on the latest recruitment trends in the iGaming industry</p>
          </div>
          <p className="relative z-10 text-xs text-gray-200 group-hover:translate-x-1">Check LinkedIn</p>
        </a>
      </div>
    </div>
  )
}

export default LatestBlog