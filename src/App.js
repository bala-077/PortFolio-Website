import React, { useRef } from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    home: homeRef,
    about: aboutRef,
    education: educationRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  return (
    <>
      <NavBar sections={sections} />
      <div ref={homeRef}><HomePage /></div>
      <div ref={aboutRef}><AboutPage /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default App;
