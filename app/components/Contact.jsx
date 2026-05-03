"use client";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden text-center"
      >
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none" />
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Let's build something <br/> <span className="gradient-text">exceptional</span> together.</h2>
        
        <p className="text-zinc-400 mb-10 max-w-lg mx-auto relative z-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <form className="max-w-md mx-auto space-y-4 text-left relative z-10">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="w-full bg-zinc-900/60 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition placeholder:text-zinc-600 text-sm" />
            <input type="email" placeholder="Email" className="w-full bg-zinc-900/60 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition placeholder:text-zinc-600 text-sm" />
          </div>
          <textarea rows="4" placeholder="Your Message" className="w-full bg-zinc-900/60 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition placeholder:text-zinc-600 text-sm" />
          
          <button className="w-full py-3.5 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition flex items-center justify-center gap-2 shadow-lg shadow-white/10">
            Send Message <FiSend />
          </button>
        </form>
      </motion.div>
    </section>
  );
}