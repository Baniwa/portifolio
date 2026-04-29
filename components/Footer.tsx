import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-600 text-sm font-mono">
          <span className="text-violet-400">{"<"}</span>
          Giulia Gabriela
          <span className="text-violet-400">{" />"}</span>
          {" · Built with Next.js & Tailwind CSS"}
        </div>

        <div className="flex gap-4">
          {[
            { href: "https://github.com/Baniwa", icon: GithubIcon, label: "GitHub" },
            {
              href: "https://www.linkedin.com/in/giulia-gabriela/",
              icon: LinkedinIcon,
              label: "LinkedIn",
            },
            { href: "mailto:baniwa.cmd@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-600 hover:text-violet-400 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} Giulia Gabriela. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
