// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiHome, FiCpu, FiBriefcase, FiLayers, FiMail } from "react-icons/fi";

// const navItems = [
//   { name: "Home", id: "home", icon: <FiHome /> },
//   { name: "Skills", id: "skills", icon: <FiCpu /> },
//   { name: "Experience", id: "experience", icon: <FiBriefcase /> },
//   { name: "Projects", id: "projects", icon: <FiLayers /> },
//   { name: "Contact", id: "contact", icon: <FiMail /> },
// ];

// export default function Navbar() {
//   const [visible, setVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setVisible(false); // Hide on scroll down
//       } else {
//         setVisible(true); // Show on scroll up
//       }
//       setLastScrollY(currentScrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.nav
//           initial={{ y: -100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -100, opacity: 0 }}
//           className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
//         >
//           <div className="glass-nav rounded-full px-3 py-2 flex items-center gap-2 shadow-2xl shadow-indigo-500/10">
//             {navItems.map((item) => (
//               <a
//                 key={item.id}
//                 href={`#${item.id}`}
//                 className="relative px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 group flex items-center gap-2"
//               >
//                 <span className="text-lg group-hover:text-indigo-400 transition-colors">{item.icon}</span>
//                 <span className="hidden md:block text-xs font-medium tracking-wide">{item.name}</span>
//               </a>
//             ))}
            
//             <div className="w-px h-5 bg-white/10 mx-2" />
            
//             <a
//               href="/resume.pdf"
//               target="_blank"
//               className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
//             >
//               Resume
//             </a>
//           </div>
//         </motion.nav>
//       )}
//     </AnimatePresence>
//   );
// }












"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiCpu, FiBriefcase, FiLayers, FiMail, FiFileText } from "react-icons/fi";
import Link from "next/link";

const navItems = [
  { name: "Home", id: "home", icon: <FiHome /> },
  { name: "Skills", id: "skills", icon: <FiCpu /> },
  { name: "Experience", id: "experience", icon: <FiBriefcase /> },
  { name: "Projects", id: "projects", icon: <FiLayers /> },
  { name: "Contact", id: "contact", icon: <FiMail /> },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // Hide on scroll down
      } else {
        setVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="glass-nav rounded-full px-3 py-2 flex items-center gap-2 shadow-2xl shadow-indigo-500/10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`} // Updated to /# to work from other pages
                className="relative px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 group flex items-center gap-2"
              >
                <span className="text-lg group-hover:text-indigo-400 transition-colors">{item.icon}</span>
                <span className="hidden md:block text-xs font-medium tracking-wide">{item.name}</span>
              </a>
            ))}
            
            <div className="w-px h-5 bg-white/10 mx-2" />
            
            <Link
              href="/resume"
              className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
            >
              <FiFileText /> <span className="hidden md:inline">Resume</span>
            </Link>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}