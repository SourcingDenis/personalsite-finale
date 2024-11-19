import React, { useState } from 'react'

const HobbyCard = ({ href, title, description, icon: Icon }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
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
        <div className="relative z-10 p-6">
          <div className="relative w-full aspect-square max-w-[120px] mx-auto mb-4 social-icon-wrapper">
            <Icon className="w-full h-full text-gray-300 group-hover:text-white transition-all duration-500 social-icon" />
          </div>
          <div className="flex flex-col gap-1 text-center group-hover:translate-y-1">
            <p className="text-sm text-gray-300 group-hover:text-white">{title}</p>
            <p className="text-xs text-gray-400 group-hover:text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

const YouTubeIcon = ({ className }) => (
  <svg className={`${className} youtube-icon`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const SpotifyIcon = ({ className }) => (
  <svg className={`${className} spotify-icon`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.371-.721.53-1.122.29-3.091-1.891-6.992-2.312-11.582-1.267-.437.1-.861-.201-.96-.638-.101-.439.201-.861.638-.961 5.031-1.149 9.352-.68 12.734 1.45.402.241.56.721.292 1.122zm1.471-3.272c-.301.461-.921.661-1.381.36-3.541-2.18-8.932-2.811-13.112-1.539-.522.151-1.062-.151-1.211-.671-.15-.522.15-1.062.671-1.211 4.78-1.451 10.729-.721 14.781 1.68.46.301.661.921.36 1.381zm.129-3.402c-4.241-2.521-11.222-2.752-15.272-1.521-.631.18-1.291-.18-1.471-.811-.18-.631.18-1.291.811-1.471 4.69-1.422 12.472-1.15 17.402 1.75.59.352.771 1.112.42 1.702-.361.582-1.112.771-1.702.42z"/>
  </svg>
)

const DJIcon = ({ className }) => (
  <svg className={`${className} dj-icon`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
    <circle cx="12" cy="12" r="1.5"/>
  </svg>
)

const SoundCloudIcon = ({ className }) => (
  <svg className={`${className} soundcloud-icon`} viewBox="0 0 32 32" fill="currentColor">
    <path d="M26.667 16.273c-.534 0-1.044.107-1.507.3-.31-3.478-3.214-6.148-6.793-6.148a6.86 6.86 0 0 0-2.505.478c-.296.116-.375.234-.375.466v12.137c0 .243.192.445.44.47h10.74c2.138 0 3.867-1.74 3.867-3.89s-1.73-3.813-3.867-3.813z"/>
    <path d="M11.333 23.5V15l-.133-.133c0-.133-.133-.133-.267-.133s-.267 0-.267.133l-.4.133V23.5l.4.133c.133.133.4.133.533-.133h.133z"/>
    <path d="M8.667 23.5v-8c0-.133-.133-.267-.267-.267s-.267.133-.267.267v8c0 .133.133.267.267.267s.267-.133.267-.267z"/>
    <path d="M6 23.5v-7.125c0-.133-.133-.25-.25-.25s-.25.117-.25.25V23.5c0 .133.117.25.25.25s.25-.117.25-.25z"/>
    <path d="M3.333 23.5v-6.125c0-.133-.117-.25-.25-.25s-.25.117-.25.25V23.5c0 .133.117.25.25.25s.25-.117.25-.25z"/>
    <path d="M.667 23.5v-5.25c0-.133-.117-.25-.25-.25s-.25.117-.25.25v5.25c0 .133.117.25.25.25s.25-.117.25-.25z"/>
  </svg>
)

const Hobbies = () => {
  const hobbies = [
    {
      href: "https://youtube.com/@diskevich",
      title: "YouTube Channel",
      description: "Digging that gems so you don't have to - sharing the best electronic music finds.",
      icon: YouTubeIcon
    },
    {
      href: "https://soundcloud.com/diskevich",
      title: "SoundCloud",
      description: "DJ mixes and electronic music sets - exploring the depths of underground sounds.",
      icon: SoundCloudIcon
    }
  ]

  return (
    <div className="max-w-[700px] mb-[2rem] w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-gray-200">hobbies 🎧</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-col:2 xl:grid-cols-2 gap-2 mt-[0.75rem]">
        {hobbies.map((hobby, index) => (
          <HobbyCard key={index} {...hobby} />
        ))}
      </div>
    </div>
  )
}

export default Hobbies 