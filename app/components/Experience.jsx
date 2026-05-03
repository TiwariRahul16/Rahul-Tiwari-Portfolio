"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Development Intern",
    company: "EY-GDS",
    period: "Jan 2025 – Mar 2025",
    desc: "Built a full-stack Recipe Sharing Application using the MERN stack.",
    details: [
      "Implemented secure JWT authentication and role-based access control.",
      "Designed RESTful APIs for CRUD operations on recipes and user profiles.",
      "Optimized MongoDB queries, reducing data retrieval time by 30%."
    ],
    tech: ["MERN", "JWT", "REST API"]
  },
  {
    role: "Virtual Internship Program",
    company: "VOIS & AICTE",
    period: "Jan 2025 – Feb 2025",
    desc: "Healthcare Data Analysis and Visualization.",
    details: [
      "Analyzed 5,190+ healthcare records to identify insurance coverage trends.",
      "Performed data cleaning and preprocessing using Python (Pandas).",
      "Created actionable visual reports using Excel and Data Visualization tools."
    ],
    tech: ["Python", "Data Analysis", "Excel"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 container mx-auto max-w-4xl">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience</h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full" />
      </div>

      <div className="relative border-l border-zinc-800 ml-3 md:ml-0 space-y-16">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative pl-8 md:pl-16"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-zinc-900" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <span className="text-sm font-mono text-zinc-500">{exp.period}</span>
            </div>
            
            <p className="text-indigo-400 font-medium text-lg mb-4">{exp.company}</p>
            
            <ul className="space-y-3 mb-6">
              {exp.details.map((detail, j) => (
                <li key={j} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 bg-zinc-600 rounded-full shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>

            <div className="flex gap-2">
              {exp.tech.map((t, k) => (
                <span key={k} className="px-2.5 py-1 text-xs rounded bg-zinc-900 border border-zinc-800 text-zinc-500">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}