"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Softtek",
    role: "Junior Fullstack Trainee",
    period: "Nov 2025 — Present",
    location: "Brasília, Brazil",
    description:
      "Maintaining and evolving a large-scale legacy PHP codebase, contributing to internal web systems and applying full-stack best practices in a professional team environment.",
    techs: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Git"],
    current: true,
  },
  {
    company: "Embaixada do México no Brasil",
    role: "IT Analyst — Networks, Servers & Technical Support (L1 & L2)",
    period: "Nov 2024 — Aug 2025",
    location: "Brasília, Brazil · On-site · 10 months",
    description:
      "Managed servers and network infrastructure (VLAN configuration, traffic analysis with ipconfig). Developed and maintained an internal intranet system in PHP. Provided L1/L2 technical support, resolving hardware, software, and connectivity issues.",
    techs: ["PHP", "PhpMyAdmin", "Networking", "Windows Server", "VLANs"],
    current: false,
  },
  {
    company: "Senado Federal",
    role: "Python Development Intern",
    period: "Nov 2023 — Nov 2024",
    location: "Brasília, Brazil · On-site · 1 year",
    description:
      "Built and maintained Python/Django solutions for automating internal processes. Developed demand management systems, optimized SQL queries and database schemas, and created data dashboards and reports using Oracle APEX.",
    techs: ["Python", "Django", "SQL", "Oracle APEX", "Bootstrap", "Data Analysis"],
    current: false,
  },
  {
    company: "Ministério da Defesa",
    role: "Technical Support Intern (Apprentice)",
    period: "Feb 2023 — Oct 2023",
    location: "Brasília, Brazil · On-site · 9 months",
    description:
      "L1 helpdesk support — incident triage, ticket management, remote and on-site user assistance, and basic user training for common technical issues.",
    techs: ["Help Desk", "Remote Support", "Incident Management"],
    current: false,
  },
  {
    company: "Link Alfa Informática",
    role: "IT Services Provider — Computer Labs",
    period: "Jan 2018 — Dec 2018",
    location: "Brasília, Brazil · 1 year",
    description:
      "Performed preventive and corrective maintenance on hardware and IT infrastructure across multiple computer labs in Brasília. Managed lab resources and ensured operational continuity.",
    techs: ["Hardware", "Networking", "JavaScript", "Infrastructure"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-slate-950/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm mb-3">04. experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Work History</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-800 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-16 relative"
              >
                <div className="absolute left-3 top-6 w-4 h-4 bg-violet-500 rounded-full border-4 border-[#06080f] hidden md:block" />

                <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6">
                  <div className="flex flex-wrap gap-3 items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-violet-400" />
                        <h3 className="text-white font-semibold">{exp.role}</h3>
                        {exp.current && (
                          <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-violet-400 font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right text-slate-500 text-xs">
                      <div className="flex items-center gap-1 justify-end">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                      <div className="mt-0.5">{exp.location}</div>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-800 text-slate-400 text-xs px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
