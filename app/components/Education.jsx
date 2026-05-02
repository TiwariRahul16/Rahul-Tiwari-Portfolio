"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="glass-panel rounded-3xl p-8 hover:bg-zinc-900/40 transition duration-300">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <span className="text-indigo-500">🎓</span> Education
      </h3>

      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative pl-6 border-l-2 border-zinc-800"
        >
          <div className="mb-1 text-lg font-bold text-white">B.E. Computer Engineering</div>
          <div className="text-indigo-400 text-sm font-medium mb-2">College of Engineering, Pune</div>
          <div className="text-sm text-zinc-500 flex justify-between items-center">
            <span>2022 — 2026</span>
            <span className="bg-zinc-800 px-2 py-0.5 rounded text-xs text-zinc-300">GPA: 8.43</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative pl-6 border-l-2 border-zinc-800"
        >
          <div className="mb-1 text-lg font-bold text-white">Higher Secondary (XII)</div>
          <div className="text-indigo-400 text-sm font-medium mb-2">Sam Vidyalay & Junior College</div>
          <div className="text-sm text-zinc-500 flex justify-between items-center">
            <span>2021</span>
            <span className="bg-zinc-800 px-2 py-0.5 rounded text-xs text-zinc-300">83%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}