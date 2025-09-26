import { Stat } from "../utils/Stat";

const Summary = () => {
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

export default Summary;