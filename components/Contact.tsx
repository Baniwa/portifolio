"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "baniwa.cmd@gmail.com",
    href: "mailto:baniwa.cmd@gmail.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Baniwa",
    href: "https://github.com/Baniwa",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/giulia-gabriela",
    href: "https://www.linkedin.com/in/giulia-gabriela/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Brasília, Brazil",
    href: null,
  },
  {
    icon: Clock,
    label: "Timezone",
    value: "UTC-3 (BRT)",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm mb-3">05. contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            I&apos;m currently open to remote opportunities with international teams. If
            you&apos;re looking for a dedicated full-stack developer, let&apos;s chat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-violet-500/10 border border-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-slate-600 text-xs">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="text-slate-300 text-sm hover:text-violet-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-1">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Open to opportunities
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Accepting remote offers. Prefer async-first teams in North American or
                European time zones.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-slate-900/50 border border-violet-500/20 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">👋</div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Ready to build something great?
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Whether it&apos;s a full-time remote role, a contract project, or just a
                conversation — I&apos;d love to connect. The best way to reach me is by
                email.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=baniwa.cmd@gmail.com&su=Remote%20Opportunity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-violet-500/25 w-full justify-center"
              >
                <Mail size={16} />
                Send me an email
              </a>
              <a
                href="https://www.linkedin.com/in/giulia-gabriela/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-violet-400 px-6 py-3 rounded-xl font-medium transition-all w-full justify-center mt-3"
              >
                <LinkedinIcon size={16} />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
