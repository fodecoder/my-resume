const Skills = () => {
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

export default Skills;