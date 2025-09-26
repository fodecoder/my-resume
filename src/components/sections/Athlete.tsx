import { Stat } from "../utils/Stat";

const Athlete = () => {
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

export default Athlete;