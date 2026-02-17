"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative flex flex-col gap-0">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      
      {/* Achievements & Education Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Achievements />
          <Education />
        </div>
      </div>
      
      <Contact />
      
      <footer className="py-8 text-center text-zinc-600 text-xs border-t border-zinc-900/50">
        <p>© {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}