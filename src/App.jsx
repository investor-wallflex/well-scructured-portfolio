import Profile from "./pages/Pofile"
import Header from "./static/Header"
import Skills from "./pages/Skills"
import HeroProject from "./pages/HeroProject"
import Footer from "./static/Footer"
import AboutMe from "./pages/AboutMe"
import React from 'react';
import Contact from "./pages/Contact"




function App() {


  return (
    <>
     <Header />
    <Profile/>
    <AboutMe />
    <Skills />
    <HeroProject/>
    <Contact />
    <Footer/>
   
   
    </>
  )
}

export default App
