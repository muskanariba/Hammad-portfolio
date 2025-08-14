import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Education from './Components/Education';
import About from './Components/About';
import WorkExperience from './Components/WorkExperience';
import Interests from './Components/Interests';
import Skills from './Components/Skills'
function App() {
  return (
    <>
      <Navbar/>
       <Hero />
       <About/>
       <Education/>
       <WorkExperience/>
             <Skills/>
   
    </>
  );
}

export default App;
