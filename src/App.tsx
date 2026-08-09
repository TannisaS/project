import React from 'react';
import './styles/animations.css';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EngineeringInterests from './components/EngineeringInterests';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <section><HeroSection /></section>
      <section><AboutSection /></section>
      <section><ExperienceSection /></section>
      <section><EngineeringInterests /></section>
      <section><SkillsSection /></section>
      <section><ProjectsSection /></section>
      <section><ContactMeSection /></section>
      <Footer />
    </div>
  );
}

export default App;
