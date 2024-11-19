import React from 'react';

const Header = () => {
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
      className="group relative flex justify-between items-center w-full border p-4 rounded-2xl border-zinc-800 overflow-hidden hover:border-transparent transition-all duration-300 hover-glow bg-zinc-950 gradient-border"
    >
      <div className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" 
           style={{background: 'radial-gradient(circle 150px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.1), transparent 80%)'}}></div>
      <div className="absolute inset-0 -z-10 animate-gradient opacity-20"></div>
      
      <div className="relative z-10 flex flex-col justify-center items-start w-full">
        <div className="flex justify-center items-center gap-2 group-hover:translate-x-1">
          <div className="relative overflow-hidden rounded-full">
            <img
              className="aspect-square h-10 w-10 transition-transform duration-300 group-hover:scale-105"
              alt="profile picture"
              src="https://media.licdn.com/dms/image/v2/D4D03AQELecM1vwV33g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728990617837?e=1734566400&v=beta&t=an5ykpo_I3WoosI9fVpZIpuTM7Cj-iqB0wrokGrSupc"
            />
          </div>
          <div>
            <h1 className="font-semibold leading-7 transition-colors group-hover:text-white">Denys Dinkevych</h1>
            <p className="text-xs font-light text-gray-400 group-hover:text-gray-300">Talent Sourcing Enthusiast</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex gap-0.5 group-hover:translate-x-1">
        <a
          target="_blank"
          aria-label="Links to Denis's LinkedIn profile"
          href="https://www.linkedin.com/in/sourcingdenis/"
          className="p-1 rounded-lg transition-colors hover:bg-zinc-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 transition-colors hover:text-blue-400">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          target="_blank"
          aria-label="Telegram"
          href="https://sourcingdenis.t.me"
          className="p-1.5 rounded-lg transition-colors hover:bg-zinc-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 transition-colors hover:text-blue-400">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
          </svg>
        </a>
        <a
          target="_blank"
          aria-label="X (Twitter)"
          href="https://x.com/sourcingdenis"
          className="p-1.5 rounded-lg transition-colors hover:bg-zinc-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 transition-colors hover:text-gray-400">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a
          target="_blank"
          aria-label="Instagram"
          href="https://instagram.com/__diskevich"
          className="p-1.5 rounded-lg transition-colors hover:bg-zinc-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 transition-colors hover:text-pink-400">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a
          target="_blank"
          aria-label="Email Denys"
          href="mailto:den.dinkevych.edu@gmail.com"
          className="p-1.5 rounded-lg transition-colors hover:bg-zinc-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-colors hover:text-gray-400">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Header;
