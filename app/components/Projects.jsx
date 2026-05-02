"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Shortify",
    subtitle: "Enterprise SaaS URL Shortener",
    desc: "A high-performance SaaS URL shortener built with a strong focus on scalability, security, and user experience. Features include real-time analytics dashboards, optimistic UI updates, debounced search, and advanced JWT token handling with request queue interceptors. Designed with enterprise-grade frontend architecture and seamless state management.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Axios", "Recharts", "PostgreSQL", "Node.js"],
    img: "/projects/shortify.png",
    links: { demo: "https://url-shortener-frontend-sand.vercel.app/", code: "https://github.com/TiwariRahul16/url_shortener_frontend" }
  },
  {
    title: "KrishnOrganic",
    subtitle: "E-Commerce Marketplace for Farmers",
    desc: "An online marketplace that enables farmers to sell their products directly to consumers at better prices while reducing dependency on middlemen. The platform improves market efficiency by providing a transparent, reliable, and cost-effective solution for buying and selling farm products.",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Razorpay"],
    img: "/projects/krishna-organics.png",
    links: { demo: "#", code: "https://github.com/TiwariRahul16/krishnaOrganics-E-Commerce-Website-for-farm-Products" }
  },
  {
    title: "Event Management System",
    subtitle: "Full-Stack Event Creation & Management Platform",
    desc: "A web application that allows users to create, manage, and participate in events. Features include secure authentication, event creation and management, user profiles, and a personalized dashboard. Built with a responsive UI and integrated backend APIs for seamless data handling.",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "NextAuth.js", "Cloudinary"],
    img: "/projects/event-management.png",
    links: { demo: "https://event-management-system-nine-nu.vercel.app/", code: "https://github.com/TiwariRahul16/Event-Management-System" }
  },
  {
    title: "Recipe Sharing App",
    subtitle: "Social Web App",
    desc: "Platform to share and discover recipes. Implements advanced search filters, image uploads, and user authentication.",
    tech: ["React", "Node.js", "Express", "Multer"],
    img: "/projects/project3.jpg",
    links: { demo: "#", code: "#" }
  },
  {
    title: "ASCII Art Generator",
    subtitle: "Text & Image to ASCII Converter",
    desc: "A lightweight npm package that converts text and images into customizable ASCII art. Supports React, Next.js, browser-based rendering with HTML5 Canvas, and Node.js. Features include gradient and glow text effects, multiple fonts, and client-side image processing with no backend required.",
    tech: ["React", "Next.js", "Node.js", "HTML5 Canvas", "NPM"],
    img: "/projects/ascii-art.png",
    links: { demo: "https://www.npmjs.com/package/ascii-art-generator", code: "https://github.com/TiwariRahul16/ascii-art-generator" }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-900/30 border-y border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Works</h2>
          <p className="text-zinc-400">Highlights of my engineering projects.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden bg-zinc-800">
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition duration-700 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={p.links.code} className="p-3 bg-zinc-900/90 rounded-full text-white hover:text-indigo-400 transition-transform hover:scale-110 backdrop-blur-md">
                    <FiGithub size={20} />
                  </a>
                  <a href={p.links.demo} className="p-3 bg-zinc-900/90 rounded-full text-white hover:text-indigo-400 transition-transform hover:scale-110 backdrop-blur-md">
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-3">{p.subtitle}</p>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed line-clamp-3">{p.desc}</p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {p.tech.map((t, j) => (
                    <span key={j} className="text-[10px] px-2 py-1 bg-zinc-800/50 text-zinc-300 rounded border border-zinc-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




