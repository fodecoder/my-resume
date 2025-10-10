import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#001219] to-[#001f2f] border border-slate-700 shadow-xl">
      <h2 className="text-2xl font-bold mb-6">{t("experience.title")}</h2>

      <ExperienceCard
        company={t("experience.taglio.company")}
        role={t("experience.taglio.role")}
        period={t("experience.taglio.period")}
        bullets={[
          t("experience.taglio.bullets.0"),
          t("experience.taglio.bullets.1"),
          t("experience.taglio.bullets.2"),
        ]}
      />

      <ExperienceCard
        company={t("experience.cluster.company")}
        role={t("experience.cluster.role")}
        period={t("experience.cluster.period")}
        bullets={[
          t("experience.cluster.bullets.0"),
          t("experience.cluster.bullets.1"),
          t("experience.cluster.bullets.2"),
        ]}
      />

      <ExperienceCard
        company={t("experience.thesis.title")}
        role={t("experience.thesis.field")}
        period={t("experience.thesis.period")}
        bullets={[
          t("experience.thesis.bullets.0"),
          t("experience.thesis.bullets.1")
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

export default Experience;