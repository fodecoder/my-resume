const Projects = () => {
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

export default Projects;