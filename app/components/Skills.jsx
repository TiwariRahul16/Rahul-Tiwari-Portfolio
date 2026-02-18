"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Reusable Skill Card Component
const SkillCategory = ({ title, skills, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`glass-panel p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-colors duration-500 ${className}`}
  >
    <h3 className="text-lg font-bold mb-6 text-zinc-100 flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, i) => (
        <div key={i} className="flex items-center gap-2 px-3 py-2 bg-zinc-900/60 rounded-lg border border-white/5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all cursor-default">
          {skill.icon && (
            <div className="relative w-5 h-5">
              <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
            </div>
          )}
          {skill.name}
        </div>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 container mx-auto max-w-6xl">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Arsenal</h2>
        <p className="text-zinc-400 max-w-lg">
          A robust set of tools and languages I use to solve complex problems and build scalable applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. Programming Languages (Span 2 Columns) */}
        <SkillCategory 
          title="Programming Languages" 
          className="md:col-span-2"
          delay={0.1}
          skills={[
            { name: "C++", icon: "/icons/c++.png" },
            { name: "Java", icon: "/icons/java.png" },
            { name: "Python", icon: "/icons/python.png" },
            { name: "C", icon: "/icons/c.png" },
            { name: "SQL", icon: "/icons/sql.png" },
          ]}
        />

        {/* 2. Tools & Platforms */}
        <SkillCategory 
          title="Tools & Environment" 
          className="md:col-span-1"
          delay={0.2}
          skills={[
            { name: "Git", icon: "/icons/git.png" },
            { name: "GitHub", icon: "/icons/github.png" },
            { name: "Postman", icon: "/icons/postman.png" },
            { name: "Google Workspace", icon: null }, // No icon needed
          ]}
        />

        {/* 3. Web Development (Span full width) */}
        <SkillCategory 
          title="Full-Stack Web Development (MERN & Next.js)" 
          className="md:col-span-3 bg-gradient-to-br from-indigo-950/20 to-zinc-900/50"
          delay={0.3}
          skills={[
            { name: "React.js", icon: "/icons/react.png" },
            { name: "Next.js", icon: "/icons/nextjs.png" },
            { name: "Node.js", icon: "/icons/nodejs.png" },
            { name: "Express.js", icon: "/icons/express-js.png" },
            { name: "MongoDB", icon: "/icons/mongodb.png" },
            { name: "Tailwind CSS", icon: "/icons/tailwind-css.png" },
            { name: "Bootstrap", icon: "/icons/bootstrap.png" },
          ]}
        />
        
        {/* 4. Core Computer Science (Span full width) */}
        <SkillCategory 
          title="Core Computer Science" 
          className="md:col-span-3 border-dashed border-zinc-800"
          delay={0.4}
          skills={[
            { name: "Data Structures & Algorithms", icon: null },
            { name: "Problem Solving", icon: null },
            { name: "Object-Oriented Programming", icon: null },
            { name: "Database Management", icon: null },
          ]}
        />
      </div>
    </section>
  );
}