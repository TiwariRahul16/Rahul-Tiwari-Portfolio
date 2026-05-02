"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "LeetCode Problems", value: "200+", icon: "🔥" },
  { label: "GSSOC Rank", value: "189", icon: "🏆" },
  { label: "Contest Rating", value: "770", icon: "⭐" }
];

export default function Achievements() {
  return (
    <section className="glass-panel rounded-3xl p-8 hover:bg-zinc-900/40 transition duration-300">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <span className="text-indigo-500">✦</span> Achievements
      </h3>
      
      <div className="space-y-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-zinc-400 text-sm font-medium">{stat.label}</span>
            </div>
            <span className="text-xl font-bold text-white font-mono">{stat.value}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}