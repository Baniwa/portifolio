"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-full text-sm mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Available for remote opportunities · USD / EUR
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-slate-400 text-lg mb-2 font-mono">Hi there, I&apos;m</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Giulia{" "}
            <span className="gradient-text">Gabriela</span>
          </h1>
          <h2 className="text-xl md:text-3xl text-slate-400 font-light mb-6">
            Full Stack Developer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable web applications with modern technologies.
          Passionate about crafting digital experiences for global teams —
          from Brasília, Brazil, to the world. 🌍
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-violet-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-violet-400 px-8 py-3 rounded-xl font-medium transition-all"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 mb-16"
        >
          {[
            { href: "https://github.com/Baniwa", icon: GithubIcon, label: "GitHub" },
            {
              href: "https://www.linkedin.com/in/giulia-gabriela/",
              icon: LinkedinIcon,
              label: "LinkedIn",
            },
            { href: "https://mail.google.com/mail/?view=cm&fs=1&to=baniwa.cmd@gmail.com&su=Remote%20Opportunity", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg border border-slate-700 hover:border-violet-500/50 flex items-center justify-center text-slate-400 hover:text-violet-400 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-0 max-w-sm mx-auto"
        >
          {[
            { value: "3+", label: "Years in IT" },
            { value: "USD/EUR", label: "Open to" },
            { value: "UTC-3", label: "Timezone" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && (
                <div className="w-px h-8 bg-slate-800 mx-6" />
              )}
              <div className="text-center">
                <div className="text-white font-semibold text-lg">{stat.value}</div>
                <div className="text-slate-600 text-xs mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
