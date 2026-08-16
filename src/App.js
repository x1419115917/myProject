import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Skills />
        <Projects />
        <Journey />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
