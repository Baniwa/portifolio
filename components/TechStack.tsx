"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Frontend",
    color: "violet",
    techs: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend",
    color: "blue",
    techs: ["Node.js", "PHP", "Laravel", "Python", "Django", "Oracle APEX"],
  },
  {
    category: "Database",
    color: "emerald",
    techs: ["MySQL", "SQLite", "Supabase", "SQL", "PhpMyAdmin"],
  },
  {
    category: "Tools & DevOps",
    color: "amber",
    techs: ["Git", "Docker", "AWS", "GitHub", "VS Code", "NPM"],
  },
];

const badgeColor: Record<string, string> = {
  violet: "bg-violet-500/10 border-violet-500/30 text-violet-300",
  blue: "bg-blue-500/10 border-blue-500/30 text-blue-300",
  emerald: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
  amber: "bg-amber-500/10 border-amber-500/30 text-amber-300",
};

const labelColor: Record<string, string> = {
  violet: "text-violet-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
};

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-4 bg-slate-950/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm mb-3">02. skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tech Stack</h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm">
            Technologies I work with regularly and am comfortable shipping production
            code with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6"
            >
              <h3
                className={`font-semibold text-sm mb-4 font-mono ${labelColor[cat.color]}`}
              >
                {`// ${cat.category}`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className={`border px-3 py-1 rounded-lg text-xs font-medium ${badgeColor[cat.color]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
