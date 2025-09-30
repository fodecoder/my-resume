import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Summary from "./components/sections/Summary";
import Experience from "./components/sections/Experience";
import Others from "./components/sections/Others";
import Contact from "./components/sections/Contacts";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import MatrixRain from "./components/utils/MatrixRain";
import { useTranslation } from "react-i18next";

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
            <Summary />
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
            <Others />
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
  const { i18n } = useTranslation();

  return (
    <header className="w-full py-6 px-8 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* Bottone bandiera IT */}
        <button
          onClick={() => i18n.changeLanguage("it")}
          className="text-2xl"
          aria-label="Italiano"
        >
          🇮🇹
        </button>
        {/* Bottone bandiera EN */}
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="text-2xl"
          aria-label="English"
        >
          🇬🇧
        </button>
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
