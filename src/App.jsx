import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      {/* Floating Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Home / Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Skills & Expertise Section */}
        <Skills />

        {/* Services Section */}
        <Services />

        {/* Portfolio / Projects Grid Section */}
        <Projects />

        {/* Contact Form & Links Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Inthumathy Veersegaram. All Rights Reserved.
          </p>
          <p className="footer-text" style={{ fontSize: '0.8rem', marginTop: '8px', color: 'var(--text-muted)' }}>
            Built with React, Vite &amp; Vanilla CSS.
          </p>
        </div>
      </footer>
    </>
  );
}
