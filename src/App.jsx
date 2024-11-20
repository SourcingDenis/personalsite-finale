import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Services from './components/Services'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import LatestBlog from './components/LatestBlog'
import Footer from './components/Footer'
import * as gtag from './lib/gtag'
import Cal, { getCalApi } from "@calcom/embed-react"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize Cal.com
    (async function initCal() {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
      });
    })();

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
      <Cal
        calLink="sourcingdenis/15min" 
        style={{ width: "0", height: "0", position: "absolute", visibility: "hidden" }}
        config={{
          layout: "month_view",
        }}
      />
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