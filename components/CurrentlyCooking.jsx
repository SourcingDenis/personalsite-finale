import React from 'react'

const CurrentlyCooking = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="flex flex-col mt-[2rem] w-full">
      <h1 className="font-normal">currently working on 🔍</h1>
      <div className="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"></div>
      <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2">
        <div 
          onMouseMove={handleMouseMove}
          className="group relative flex flex-col w-full p-2 rounded-lg transition-all duration-300 hover:bg-zinc-900 hover-glow"
        >
          <div className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" 
               style={{background: 'radial-gradient(circle 150px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.1), transparent 80%)'}}></div>
          <div className="absolute inset-0 -z-10 animate-gradient opacity-20"></div>
          <div className="relative z-10">
            <div className="flex gap-2 group-hover:translate-x-1">
              <a target="_blank" href="https://www.playson.com/">
                <p className="text-sm leading-7 hover:underline group-hover:text-white">Playson</p>
              </a>
            </div>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 group-hover:translate-x-1">
              Sourcing specialist for a leading iGaming content provider.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentlyCooking