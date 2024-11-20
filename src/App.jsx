import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Services from './components/Services'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import LatestBlog from './components/LatestBlog'
import Footer from './components/Footer'
import * as gtag from './lib/gtag'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      gtag.pageview(window.location.pathname);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (projectTitle) => {
    gtag.event({
      action: 'click',
      category: 'Projects',
      label: projectTitle,
    })
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <main className={`flex-grow ${isLoaded ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
        <div className="flex flex-col items-center justify-center mt-12 mb-24 p-3 mx-auto max-w-[650px]">
          <Header />
          <Services />
          <Projects onProjectClick={handleProjectClick} />
          <Hobbies />
          <LatestBlog />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App