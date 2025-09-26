const Education = () => {
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

export default Education;