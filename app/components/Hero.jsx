// "use client";
// import { motion } from "framer-motion";
// import { FiGithub, FiLinkedin, FiArrowRight, FiDownload } from "react-icons/fi";

// export default function Hero() {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      
//       {/* Background Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

//       <div className="container mx-auto px-6 relative z-10 text-center">
        
//         {/* Status Pill */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-xs font-medium mb-8 backdrop-blur-md"
//         >
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//           </span>
//           Open to Work
//         </motion.div>

//         {/* Headline */}
//         <motion.h1 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.1 }}
//           className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
//         >
//           Building <span className="gradient-text text-glow">Scalable</span> <br />
//           Software Solutions.
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
//         >
//           I am a Full-Stack Engineer bridging the gap between <span className="text-zinc-200">complex algorithms</span> and <span className="text-zinc-200">intuitive user experiences</span>. 
//           Expert in MERN Stack, Next.js, and Distributed Systems.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="flex flex-col md:flex-row items-center justify-center gap-4"
//         >
//           <a href="#projects" className="group px-8 py-4 bg-white text-black font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-2">
//             View My Work <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//           </a>
          
//           <div className="flex gap-4">
//             <a href="#" className="p-4 rounded-full glass-panel hover:bg-zinc-800 hover:text-white text-zinc-400 transition-all hover:scale-110 border border-zinc-800">
//               <FiGithub size={22} />
//             </a>
//             <a href="#" className="p-4 rounded-full glass-panel hover:bg-zinc-800 hover:text-white text-zinc-400 transition-all hover:scale-110 border border-zinc-800">
//               <FiLinkedin size={22} />
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowRight, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Status Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-xs font-medium mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Open to Work
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          Building <span className="gradient-text text-glow">Scalable</span> <br />
          Software Solutions.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I am a Full-Stack Engineer bridging the gap between <span className="text-zinc-200">complex algorithms</span> and <span className="text-zinc-200">intuitive user experiences</span>. 
          Expert in MERN Stack, Next.js, and Distributed Systems.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="group px-8 py-4 bg-white text-black font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-2">
            View My Work <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>

          {/* --- MISSING LINE ADDED BELOW --- */}
          <a href="/Resume_Rahul.pdf" target="_blank" className="px-8 py-4 border border-zinc-700 text-white font-bold rounded-full transition-all hover:bg-zinc-800 flex items-center gap-2">
            Download CV <FiDownload />
          </a>
          
          <div className="flex gap-4">
            <a href="https://github.com/TiwariRahul16" target="_blank" className="p-4 rounded-full glass-panel hover:bg-zinc-800 hover:text-white text-zinc-400 transition-all hover:scale-110 border border-zinc-800">
              <FiGithub size={22} />
            </a>
            {/* <a href="https://www.linkedin.com/in/rahul-tiwari-0567822ba/" className="p-4 rounded-full glass-panel hover:bg-zinc-800 hover:text-white text-zinc-400 transition-all hover:scale-110 border border-zinc-800">
              <FiLinkedin size={22} />
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}