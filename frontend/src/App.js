import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Education from './Components/Education';
import About from './Components/About';
import WorkExperience from './Components/WorkExperience';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Extras from './Components/Extras';
import Contact from './Components/Contact';
function App() {
  return (
    <>
      <Navbar/>
       <Hero />
       <About/>
       <Education/>
       <Skills/>
       <WorkExperience/>
       <Extras/>
       <Contact/>
       <Footer/>
         
   
    </>
  );
}

export default App;
