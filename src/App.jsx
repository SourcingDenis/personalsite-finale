import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Services from './components/Services'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import LatestBlog from './components/LatestBlog'
import FreelanceClients from './components/FreelanceClients'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      <main className={`flex min-w-screen flex-col items-center justify-between ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="animate-gradient flex flex-col flex-wrap items-center justify-center mt-[3rem] mb-[6rem] p-3 w-full max-w-[650px]">
          <Header />
          <Services />
          <Projects />
          <Hobbies />
          <LatestBlog />
          <FreelanceClients />
        </div>
      </main>
      <div className="fixed-wrapper">
        <Footer />
      </div>
    </div>
  )
}

export default App