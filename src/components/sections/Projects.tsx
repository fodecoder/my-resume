import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div id="Projects" className="p-8 rounded-2xl bg-gradient-to-br from-[#041b2d] to-[#002236] border border-slate-700">
      <h2 className="text-2xl font-bold mb-6">{t("projects.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard title={t("projects.inventoryPlatform.title")} desc={t("projects.inventoryPlatform.desc")} tech={t("projects.inventoryPlatform.tech")} link={t("projects.inventoryPlatform.link")} />
        <ProjectCard title={t("projects.iotDiagnostics.title")} desc={t("projects.iotDiagnostics.desc")} tech={t("projects.iotDiagnostics.tech")} link={t("projects.iotDiagnostics.link")} />
        <ProjectCard title={t("projects.sharedEditor.title")} desc={t("projects.sharedEditor.desc")} tech={t("projects.sharedEditor.tech")} link={t("projects.sharedEditor.link")} />
        <ProjectCard title={t("projects.miniMLTools.title")} desc={t("projects.miniMLTools.desc")} tech={t("projects.miniMLTools.tech")} link={t("projects.miniMLTools.link")} />
      </div>
    </div>
  );
}

function ProjectCard({ title, desc, tech, link }: { title: string; desc: string; tech: string; link: string }) {
  const { t } = useTranslation();
  return (
    <div className="p-4 rounded-xl bg-black/20 border border-slate-700 hover:scale-[1.01] transition-transform">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-slate-400">{desc}</div>
        </div>
        <div className="text-xs text-slate-300 px-2 py-1 border border-slate-700 rounded">{tech}</div>
      </div>
      <div className="mt-4 text-slate-400 text-sm">{t("projects.code")}: <span className="underline">{link}</span></div>
    </div>
  );
}

export default Projects;