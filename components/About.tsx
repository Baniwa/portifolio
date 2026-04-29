"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Coffee, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Focus",
    description:
      "Comfortable across the entire stack — from crafting UIs with React to building REST APIs with Node.js and PHP.",
  },
  {
    icon: Globe,
    title: "Remote-Ready",
    description:
      "Experienced with async-first workflows, strong written communication in English, and self-management.",
  },
  {
    icon: MapPin,
    title: "Based in Brazil",
    description:
      "Brasília, UTC-3 — timezone overlaps well with North American mornings and European afternoons.",
  },
  {
    icon: Coffee,
    title: "Continuous Learner",
    description:
      "Always leveling up. Currently diving deeper into TypeScript, Docker, and cloud infrastructure.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm mb-3">01. about me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-slate-400 leading-relaxed"
          >
            <p>
              I&apos;m a{" "}
              <span className="text-violet-400 font-medium">Full Stack Developer</span>{" "}
              from Brasília, Brazil, with 3+ years of experience across software
              development and IT infrastructure. Currently at{" "}
              <span className="text-white font-medium">Softtek</span> as a Junior
              Fullstack Trainee, working with legacy PHP systems.
            </p>
            <p>
              Previously at the{" "}
              <span className="text-white font-medium">Brazilian Senate</span>, I built
              Python/Django solutions, optimized SQL databases, and developed Oracle
              APEX applications. Before that, I maintained PHP intranet systems and
              managed network infrastructure at the{" "}
              <span className="text-white font-medium">Mexican Embassy</span> in Brazil.
            </p>
            <p>
              My goal is to join a{" "}
              <span className="text-white font-medium">distributed, international team</span>{" "}
              where I can grow fast, contribute meaningfully, and collaborate across time
              zones. I thrive in async-friendly environments and communicate fluently in
              English.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "🇧🇷 Portuguese — Native",
                "🇺🇸 English — Intermediate-Advanced",
              ].map((lang) => (
                <span
                  key={lang}
                  className="bg-slate-800/60 border border-slate-700/50 text-slate-300 px-3 py-1.5 rounded-lg text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-5 card-hover"
              >
                <item.icon className="text-violet-400 mb-3" size={22} />
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
