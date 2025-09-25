import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

// Interactive single-file React component — customized with Andrea Simone Foderaro CV data
// Requires: Tailwind CSS and framer-motion installed
// Place in src/components/InteractiveCV.jsx and import in your App

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [jump, setJump] = useState(false);
  const controls = useAnimation();
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || window.pageYOffset);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setJump(true);
    const t = setTimeout(() => setJump(false), 550);
    return () => clearTimeout(t);
  }, [scrollY]);

  useEffect(() => {
    controls.start(i => ({
      y: jump ? -26 : Math.sin((scrollY + (i * 10)) / 80) * 5,
      transition: { type: "spring", stiffness: 220, damping: 18 }
    }));
  }, [controls, jump, scrollY]);

  const addRef = (i: number) => (el: HTMLElement | null) => {
    sectionsRef.current[i] = el;
  };

  return (
    <div className="py-8 bg-black text-slate-100 antialiased w-full">
      <div className="fixed inset-0 pointer-events-none">
        <MatrixRain />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/95" />
      </div>

      <div className="relative z-10 w-full">
        <Header />

        <div className="fixed bottom-8 left-6 z-20">
          <motion.div custom={0} animate={controls} className="w-28 h-28" style={{ transformOrigin: "50% 70%" }}>
            <ProgrammerSprite jump={jump} />
          </motion.div>
        </div>

        <main className="w-full p-6 space-y-8 max-w-none">
          <section id="Home" ref={addRef(0)} className="py-8 flex items-center w-full">
            <Hero />
          </section>

          <section id="Experience" ref={addRef(1)} className="py-8 w-full">
            <Experience />
          </section>

          <section id="Projects" ref={addRef(2)} className="py-8 w-full">
            <Projects />
          </section>

          <section id="Education" ref={addRef(3)} className="py-8 w-full">
            <Education />
          </section>

          <section id="Skills" ref={addRef(4)} className="py-8 w-full">
            <Skills />
          </section>

          <section id="Athlete" ref={addRef(5)} className="py-8 w-full">
            <Athlete />
          </section>

          <section id="Contact" ref={addRef(6)} className="py-8 w-full">
            <Contact />
          </section>
        </main>

        <footer className="py-8 text-center text-sm text-slate-400">Generated interactive CV — Andrea Simone Foderaro</footer>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="w-full py-6 px-8 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-inner flex items-center justify-center text-black font-bold">AS</div>
        <div>
          <div className="text-lg font-semibold">Andrea Simone Foderaro</div>
          <div className="text-xs text-slate-400">Software Engineer — Backend · API · IoT · Athlete</div>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 text-slate-300">
        <a href="#Home" className="hover:text-white">Home</a>
        <a href="#Experience" className="hover:text-white">Experience</a>
        <a href="#Projects" className="hover:text-white">Projects</a>
        <a href="#Education" className="hover:text-white">Education</a>
        <a href="#Contact" className="hover:text-white">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Andrea Simone Foderaro</h1>
        <p className="text-slate-300 max-w-xl">Software engineer with strong backend and API expertise. Proven track record in designing scalable systems, IoT solutions and performance optimization. Athlete: disciplined, team-driven, high endurance.</p>
        <div className="flex gap-4">
          <a className="px-4 py-2 rounded-2xl bg-emerald-500 text-black font-medium shadow" href="/Andrea_Simone_Foderaro_CV.pdf" download>Download PDF</a>
          <a className="px-4 py-2 rounded-2xl border border-slate-700 text-slate-200" href="#Projects">Open projects</a>
        </div>

        <div className="mt-4 text-sm text-slate-400">
          <div>Phone: (+39) 3332053692 · Email: foderaroandrea@gmail.com</div>
          <div className="mt-1">LinkedIn: <a className="underline" href="https://www.linkedin.com/in/andrea-simone-foderaro/">/in/andrea-simone-foderaro</a></div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/40 to-slate-800/30 border border-slate-700 shadow-lg">
        <div className="text-sm uppercase text-slate-400 mb-2">Snapshot</div>
        <div className="grid grid-cols-2 gap-4">
          <Stat label="Role" value="Software Engineer" />
          <Stat label="Experience" value="2021–Present" />
          <Stat label="Stack" value="C# · .NET · Python · Azure" />
          <Stat label="Athlete" value="Forward — active player" />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3 bg-black/30 rounded-xl border border-slate-700">
      <div className="text-xs text-slate-400">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function Experience() {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#001219] to-[#001f2f] border border-slate-700 shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Experience & Projects</h2>

      <ExperienceCard
        company="Taglio S.R.L"
        role="Software Engineer — Backend Developer & API Specialist"
        period="Jun 2024 – Present | Piobesi D'Alba, Italy"
        bullets={[
          "Developed backend solutions for inventory management and machine control — improved processing efficiency by 40% and reduced downtime by 25%.",
          "Designed and implemented 30+ REST APIs with 99.9% uptime and response times under 200ms.",
          "Collaborated with cross-functional teams, reducing bug resolution time by 60%."
        ]}
      />

      <ExperienceCard
        company="Cluster Reply S.R.L"
        role="Software Engineer — Technical Lead"
        period="Apr 2021 – May 2024 | Turin, Italy"
        bullets={[
          "Led development of IoT diagnostic machines serving 500+ concurrent users on Azure.",
          "Managed a team of 4 engineers, improving team velocity by 30% and achieving 95% on-time delivery.",
          "Architected solutions that reduced integration time by 50% and ensured 99.5% availability."
        ]}
      />

      <ExperienceCard
        company="Automatic Classification of Software Issue Report — Master’s Thesis"
        role="Research & ML Engineer"
        period="Apr 2020 – Oct 2020 | Turin, Italy"
        bullets={[
          "Built ML classifier in collaboration with Mozilla: precision 92%, recall 89% — saved developers 15+ hours/week.",
          "Manually labeled 250+ bugs to produce training dataset; improved automated classification from 70% to 92%."
        ]}
      />
    </div>
  );
}

type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

function ExperienceCard({ company, role, period, bullets }: ExperienceCardProps) {
  return (
    <div className="mb-6 p-4 rounded-xl bg-black/20 border border-slate-700">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold">{company}</div>
          <div className="text-sm text-slate-400">{role}</div>
        </div>
        <div className="text-xs text-slate-400">{period}</div>
      </div>
      <ul className="mt-3 list-disc ml-5 text-slate-300">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <div id="Projects" className="p-8 rounded-2xl bg-gradient-to-br from-[#041b2d] to-[#002236] border border-slate-700">
      <h2 className="text-2xl font-bold mb-6">Selected Projects & Demos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard title="Inventory Platform" desc="Event-sourced domain model, resilient APIs, migrations from monolith to services." tech="C#, .NET, Azure" />
        <ProjectCard title="IoT Diagnostics" desc="Cloud-integrated IoT diagnostics servicing 500+ concurrent users." tech="Azure, Kubernetes" />
        <ProjectCard title="Shared Editor (Master Project)" desc="Collaborative editor in C++ with Qt, real-time concurrency controls." tech="C++, Qt" />
        <ProjectCard title="Mini ML Tools" desc="ML models for bug classification, GAN experiments and bioinformatics models." tech="Python, ML" />
      </div>
    </div>
  );
}

function ProjectCard({ title, desc, tech }: { title: string; desc: string; tech: string }) {
  return (
    <div className="p-4 rounded-xl bg-black/20 border border-slate-700 hover:scale-[1.01] transition-transform">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-slate-400">{desc}</div>
        </div>
        <div className="text-xs text-slate-300 px-2 py-1 border border-slate-700 rounded">{tech}</div>
      </div>
      <div className="mt-4 text-slate-400 text-sm">Live: <span className="underline">link</span> · Code: <span className="underline">repo</span></div>
    </div>
  );
}

function Education() {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#06161f] to-[#022034] border border-slate-700">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-black/20 border border-slate-700">
          <div className="font-semibold">Politecnico di Torino — M.S. Computer Engineering</div>
          <div className="text-sm text-slate-400">Oct 2020 · Grade: 110 cum laude</div>
          <div className="text-slate-300 mt-2">Top 5% of graduating class · Relevant coursework: Algorithms, Machine Learning, Distributed Systems.</div>
        </div>

        <div className="p-4 rounded-xl bg-black/20 border border-slate-700">
          <div className="font-semibold">Politecnico di Torino — B.S. Computer Engineering</div>
          <div className="text-sm text-slate-400">Jul 2018 · Grade: 110/110</div>
        </div>

        <div className="p-4 rounded-xl bg-black/20 border border-slate-700">
          <div className="font-semibold">Exchange — Mississippi State University</div>
          <div className="text-sm text-slate-400">Aug–Dec 2017 · GPA: A</div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#02121a] to-[#001827] border border-slate-700">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 rounded-xl bg-black/20 border border-slate-700">
          <div className="text-slate-400 text-sm">Backend</div>
          <div className="font-semibold mt-2">C#, .NET, SQL, KQL, Python</div>
        </div>
        <div className="p-4 rounded-xl bg-black/20 border border-slate-700">
          <div className="text-slate-400 text-sm">Cloud & Infra</div>
          <div className="font-semibold mt-2">Azure, Kubernetes, Docker</div>
        </div>
        <div className="p-4 rounded-xl bg-black/20 border border-slate-700">
          <div className="text-slate-400 text-sm">Frontend & Tools</div>
          <div className="font-semibold mt-2">Blazor, AngularJS, HTML, CSS</div>
        </div>
      </div>

      <div className="mt-6 text-slate-400 text-sm">Soft skills: Public speaking · Scrum · Technical writing. Languages: Italian (native) · English (fluent, IELTS 7.5).</div>
    </div>
  );
}

function Athlete() {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#04121a] to-[#0a1b2a] border border-slate-700">
      <h2 className="text-2xl font-bold mb-4">Athletics — Discipline & Teamwork</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat label="Position" value="Forward" />
        <Stat label="Matches" value="12 this season" />
        <Stat label="Endurance" value="High" />
      </div>
      <div className="mt-6 text-slate-300">7 summers as summer camp manager — leadership and people management. Transferable: discipline, teamwork, pressure management.</div>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#021518] to-[#00121a] border border-slate-700">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="text-slate-300">Email</div>
          <div className="font-semibold">foderaroandrea@gmail.com</div>
          <div className="text-slate-300 mt-2">Phone</div>
          <div className="font-semibold">(+39) 3332053692</div>
        </div>
        <div>
          <div className="text-slate-300">Links</div>
          <div className="flex gap-3 mt-2">
            <a className="underline" href="https://www.linkedin.com/in/andrea-simone-foderaro/">LinkedIn</a>
            <a className="underline" href="#">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgrammerSprite({ jump }: { jump: boolean }) {
  return (
    <motion.div animate={{ rotate: jump ? -8 : 0 }} transition={{ type: "spring", stiffness: 220, damping: 18 }}>
      <svg viewBox="0 0 120 120" className="w-28 h-28">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#06b6d4" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        <ellipse cx="60" cy="106" rx="30" ry="6" fill="#000" opacity="0.25" />

        <g transform="translate(12,6)">
          <rect x="32" y="40" width="28" height="28" rx="5" fill="#0f172a" stroke="#334155" />
          <circle cx="46" cy="24" r="12" fill="#fde68a" stroke="#a16207" />
          <path d="M34 18c6-12 26-12 32 0" fill="#ef4444" stroke="#b91c1c" />
          <rect x="38" y="20" width="6" height="4" rx="1" fill="#0ea5a4" />
          <rect x="52" y="20" width="6" height="4" rx="1" fill="#0ea5a4" />
          <line x1="44" y1="22" x2="52" y2="22" stroke="#0ea5a4" strokeWidth="1" />

          <g transform="translate(14,46)">
            <rect x="0" y="0" width="48" height="8" rx="1" fill="#0f172a" stroke="#334155" />
            <rect x="6" y="-10" width="36" height="12" rx="1" fill="url(#g1)" opacity="0.9" />
            <text x="10" y="-2" fontSize="6" fill="#071f28">{`</>`}</text>
          </g>

          <motion.rect animate={{ rotate: jump ? -18 : 0 }} style={{ transformOrigin: "40px 70px" }} x="18" y="56" width="8" height="6" rx="2" fill="#fde68a" />
        </g>
      </svg>
    </motion.div>
  );
}

function MatrixRain() {
  const columns = Math.max(20, Math.floor(window.innerWidth / 14));
  const lines = new Array(columns).fill(0).map((_, i) => i);
  return (
    <svg className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="mg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#4ade80" stopOpacity="0.95" />
          <stop offset="1" stopColor="#10b981" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {lines.map(i => (
        <text key={i} x={(i * 14) + 6} y={(Math.random() * window.innerHeight)} fontSize="12" fill="url(#mg)" opacity="0.06">{randomChars()}</text>
      ))}
    </svg>
  );
}

function randomChars() {
  const chars = "01{}[]()<>/\\|;:,._-";
  return chars.charAt(Math.floor(Math.random() * chars.length));
}
