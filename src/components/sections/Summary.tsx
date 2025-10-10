import { useTranslation } from "react-i18next";
import { Stat } from "../utils/Stat";

const Summary = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{t("main.name")}</h1>
        <p className="text-slate-300 max-w-xl">{t("main.description")}</p>
        <div className="flex gap-4">
          <a className="px-4 py-2 rounded-2xl bg-emerald-500 text-black font-medium shadow" href="/Andrea_Simone_Foderaro_CV.pdf" download>{t("main.downloadCV")}</a>
          <a className="px-4 py-2 rounded-2xl border border-slate-700 text-slate-200" href="#Projects">{t("navigation.projects")}</a>
        </div>

        <div className="mt-4 text-sm text-slate-400">
          <div>{t("main.phone")} {t("main.email")}</div>
          <div className="mt-1">LinkedIn: <a className="underline" href="https://www.linkedin.com/in/andrea-simone-foderaro/">{t("main.linkedin")}</a></div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/40 to-slate-800/30 border border-slate-700 shadow-lg">
        <div className="text-sm uppercase text-slate-400 mb-2">{t("main.snapshot.title")}</div>
        <div className="grid grid-cols-2 gap-4">
          <Stat label={t("main.snapshot.roleLabel")} value={t("main.snapshot.role")} />
          <Stat label={t("main.snapshot.experienceLabel")} value={t("main.snapshot.experience")} />
          <Stat label={t("main.snapshot.stackLabel")} value={t("main.snapshot.stack")} />
          <Stat label={t("main.snapshot.athleteLabel")} value={t("main.snapshot.athlete")} />
        </div>
      </div>
    </div>
  );
}

export default Summary;