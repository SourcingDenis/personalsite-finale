import React from 'react'

const Footer = () => {
  return (
    <div style={{ 
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
    }}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/sourcingdenis/"
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-all duration-300 hover:bg-zinc-800 hover:text-white border border-transparent"
      >
        <div className="absolute inset-0 rounded-full border-2 border-transparent animate-border-flow" />
        <span className="relative">Connect on LinkedIn</span>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shine" />
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  )
}

export default Footer