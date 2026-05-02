"use client";
import { motion } from "framer-motion";
import { FiDownload, FiEye, FiGithub, FiCode, FiMail, FiPhone, FiMapPin, FiExternalLink, FiCpu, FiBriefcase, FiLayers } from "react-icons/fi";
import Navbar from "../components/Navbar";

export default function Resume() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-zinc-950 relative overflow-hidden">
      <Navbar />
      
      {/* --- CINEMATIC BACKGROUND --- */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0" />
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full -z-10" />

      {/* --- FLOATING ACTION BAR --- */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-5xl mx-auto mb-8 flex flex-wrap justify-between items-center gap-4 bg-zinc-900/80 border border-white/5 p-4 rounded-2xl backdrop-blur-xl sticky top-24 z-40 shadow-2xl"
      >
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
              RT
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-zinc-900 rounded-full"></div>
          </div>
          <div>
            <h2 className="text-white font-bold text-sm tracking-wide">Rahul Tiwari</h2>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to Work
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <a 
            href="/Resume_Rahul.pdf" 
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold rounded-lg transition border border-zinc-700 hover:border-zinc-600"
          >
            <FiEye /> <span className="hidden sm:inline">View PDF</span>
          </a>
          <a 
            href="/Resume_Rahul.pdf" 
            download="Rahul_Tiwari_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-zinc-200 text-xs font-bold rounded-lg transition shadow-lg shadow-white/10"
          >
            <FiDownload /> Download
          </a>
        </div>
      </motion.div>

      {/* --- MAIN RESUME CONTAINER --- */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="max-w-5xl mx-auto bg-zinc-900/40 border border-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-2xl relative"
      >
        {/* Decorative Top Line */}
        <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />

        {/* --- HEADER SECTION --- */}
        <header className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-white/5 pt-9 pb-10 mb-10">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
              Rahul <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Tiwari</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
              Full-Stack Engineer building scalable web solutions.
            </p>
            {/* <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
              Full-Stack Engineer building scalable web solutions with <span className="text-indigo-300 font-mono">Next.js</span> & <span className="text-cyan-300 font-mono">MERN Stack</span>.
            </p> */}
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-zinc-500 pt-2">
              <a href="mailto:sohan@gmail.com" className="flex items-center gap-2 hover:text-indigo-400 transition">
                <FiMail /> rahultiwari9168@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <FiPhone /> (+91) 7081054656
              </span>
              <span className="flex items-center gap-2">
                <FiMapPin /> Pune, India
              </span>
            </div>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 gap-3">
            <a href="https://github.com/TiwariRahul16" target="_blank" className="p-3 bg-zinc-800/50 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition border border-white/5 hover:border-white/10">
              <FiGithub size={24} />
            </a>
            <a href="https://github.com/TiwariRahul16/Rahul-Tiwari-Portfolio" target="_blank" className="p-3 bg-zinc-800/50 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition border border-white/5 hover:border-white/10">
              <FiCode size={24} />
            </a>
          </div>
        </header>

        {/* --- SPLIT LAYOUT (BALANCED) --- */}
        <div className="grid lg:grid-cols-12 gap-10 border-b border-white/5 pb-12 mb-12">
          
          {/* LEFT COLUMN (4 Cols) - Skills, Edu, Achievements */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* EDUCATION */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <span className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-400"><FiBriefcase /></span>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Education</h3>
              </div>
              
              <div className="space-y-6 border-l border-white/10 ml-2 pl-6 relative">
                <div className="relative">
                  <span className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700 border-2 border-zinc-900" />
                  <h4 className="text-zinc-200 font-bold">KJ College of Engineering and Management Research, Pune</h4>
                  <p className="text-indigo-400 text-xs mb-1 font-mono">B.E. Computer Engineering</p>
                  <div className="text-xs text-zinc-500">2026 • GPA: 8.43</div>
                </div>
                
                <div className="relative">
                  <span className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700 border-2 border-zinc-900" />
                  <h4 className="text-zinc-200 font-bold">Sarvajanik Vidyamandir And Junior College</h4>
                  <p className="text-indigo-400 text-xs mb-1 font-mono">HSC (XII)</p>
                  <div className="text-xs text-zinc-500">2021 • 83%</div>
                </div>
              </div>
            </section>

            {/* TECHNICAL SKILLS */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <span className="p-1.5 bg-cyan-500/10 rounded-lg text-cyan-400"><FiCpu /></span>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Tech Stack</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-[10px] uppercase font-bold text-zinc-500 mb-2 tracking-wider">Languages</h5>
                  <div className="flex flex-wrap gap-2">
                    {["C++", "Java", "Python", "SQL"].map(s => (
                      <span key={s} className="px-2.5 py-1 bg-zinc-800/40 border border-white/5 rounded-md text-xs text-zinc-300 hover:text-white hover:border-indigo-500/30 transition cursor-default">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-[10px] uppercase font-bold text-zinc-500 mb-2 tracking-wider">Web Core</h5>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "MongoDB", "Tailwind"].map(s => (
                      <span key={s} className="px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-xs text-indigo-200 hover:bg-indigo-500/20 transition cursor-default">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-[10px] uppercase font-bold text-zinc-500 mb-2 tracking-wider">Tools</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Postman", "DSA", "VS Code"].map(s => (
                      <span key={s} className="px-2.5 py-1 bg-zinc-800/40 border border-white/5 rounded-md text-xs text-zinc-300 cursor-default">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ACHIEVEMENTS */}
            <section className="bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 p-5 rounded-2xl border border-white/5">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-lg">🏆</span>
                  <div>
                    <strong className="text-zinc-200 text-sm block">GSSOC '24</strong>
                    <span className="text-xs text-zinc-500">Ranked 189 (770 Points)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">⚡</span>
                  <div>
                    <strong className="text-zinc-200 text-sm block">LeetCode</strong>
                    <span className="text-xs text-zinc-500">200+ Problems Solved</span>
                  </div>
                </li>
              </ul>
            </section>
          </div>

          {/* RIGHT COLUMN (8 Cols) - Experience ONLY */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-8">
              <span className="p-1.5 bg-purple-500/10 rounded-lg text-purple-400"><FiBriefcase /></span>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest">Experience</h3>
            </div>

            <div className="space-y-8">
              
              {/* Exp 1 */}
              <div className="group relative pl-8 border-l-2 border-zinc-800 hover:border-indigo-500 transition-colors duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-indigo-500 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h4 className="text-lg font-bold text-white">Software Development Intern</h4>
                  <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">Jan '25 - Mar '25</span>
                </div>
                <div className="text-sm text-zinc-400 font-medium mb-3">EY-GDS Internship Program (Virtual)</div>
                <ul className="list-disc list-outside ml-4 text-sm text-zinc-400 space-y-2 leading-relaxed">
                  <li>Engineered a full-stack <span className="text-zinc-200">Recipe Sharing Web App</span> using the MERN stack.</li>
                  <li>Integrated secure <span className="text-zinc-200">JWT authentication</span> and optimized database schemas for complex CRUD operations.</li>
                  <li>Collaborated with senior mentors to implement best practices in code modularity and state management.</li>
                </ul>
              </div>

              {/* Exp 2 */}
              <div className="group relative pl-8 border-l-2 border-zinc-800 hover:border-cyan-500 transition-colors duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-600 group-hover:border-cyan-500 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h4 className="text-lg font-bold text-white">Data Analysis Intern</h4>
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-800 px-2 py-1 rounded">Jan '25 - Feb '25</span>
                </div>
                <div className="text-sm text-zinc-400 font-medium mb-3">VOIS & AICTE (Virtual)</div>
                <ul className="list-disc list-outside ml-4 text-sm text-zinc-400 space-y-2 leading-relaxed">
                  <li>Processed and analyzed <span className="text-zinc-200">5,190+ healthcare records</span> using Python (Pandas) to identify insurance trends.</li>
                  <li>Developed automated data cleaning scripts that reduced manual processing time by 40%.</li>
                  <li>Visualized key insights using Matplotlib and presented findings to stakeholders.</li>
                </ul>
              </div>

              {/* Exp 3 (Added as requested) */}
              <div className="group relative pl-8 border-l-2 border-zinc-800 hover:border-purple-500 transition-colors duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-600 group-hover:border-purple-500 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h4 className="text-lg font-bold text-white">Freelance Web Developer</h4>
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-800 px-2 py-1 rounded">Jun '24 - Dec '24</span>
                </div>
                <div className="text-sm text-zinc-400 font-medium mb-3">Self-Employed</div>
                <ul className="list-disc list-outside ml-4 text-sm text-zinc-400 space-y-2 leading-relaxed">
                  <li>Designed and deployed responsive portfolio websites for 3 local clients using <span className="text-zinc-200">Next.js & Tailwind</span>.</li>
                  <li>Optimized website performance achieving 95+ Google Lighthouse scores for SEO and Accessibility.</li>
                  <li>Managed domain configuration and CI/CD pipelines via Vercel for seamless updates.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* --- PROJECTS SECTION (FULL WIDTH) --- */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <span className="p-1.5 bg-emerald-500/10 rounded-lg text-emerald-400"><FiLayers /></span>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Featured Projects</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Project 1 */}
            <div className="group bg-zinc-800/20 border border-white/5 p-6 rounded-2xl hover:bg-zinc-800/40 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg"><FiLayers /></div>
                <a href="#" className="text-zinc-500 hover:text-white transition"><FiExternalLink /></a>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition">KrishnOrganic</h4>
              <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
                E-commerce platform connecting farmers to consumers. Features Razorpay payments, inventory tracking, and secure auth.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-[10px] px-2 py-1 bg-zinc-800 rounded text-zinc-300 border border-zinc-700">Next.js</span>
                <span className="text-[10px] px-2 py-1 bg-zinc-800 rounded text-zinc-300 border border-zinc-700">MongoDB</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-zinc-800/20 border border-white/5 p-6 rounded-2xl hover:bg-zinc-800/40 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg"><FiCpu /></div>
                <a href="#" className="text-zinc-500 hover:text-white transition"><FiExternalLink /></a>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition">EventFlow</h4>
              <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
                Comprehensive event management SaaS. Handles ticketing, attendee tracking, and role-based dashboards.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-[10px] px-2 py-1 bg-zinc-800 rounded text-zinc-300 border border-zinc-700">React</span>
                <span className="text-[10px] px-2 py-1 bg-zinc-800 rounded text-zinc-300 border border-zinc-700">Node.js</span>
              </div>
            </div>

            {/* Project 3 (Added as requested) */}
            <div className="group bg-zinc-800/20 border border-white/5 p-6 rounded-2xl hover:bg-zinc-800/40 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg"><FiCode /></div>
                <a href="#" className="text-zinc-500 hover:text-white transition"><FiExternalLink /></a>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition">ChatConnect</h4>
              <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
                Real-time messaging app with private rooms, typing indicators, and file sharing using WebSockets.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-[10px] px-2 py-1 bg-zinc-800 rounded text-zinc-300 border border-zinc-700">Socket.io</span>
                <span className="text-[10px] px-2 py-1 bg-zinc-800 rounded text-zinc-300 border border-zinc-700">Express</span>
              </div>
            </div>

          </div>
        </section>

      </motion.div>
    </main>
  );
}