import { Stat } from "../utils/Stat";
import { useTranslation } from "react-i18next";


const Others = () => {
  const { t } = useTranslation();

  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#04121a] to-[#0a1b2a] border border-slate-700">
      <h2 className="text-2xl font-bold mb-1">{t("others.athlete.title")}</h2>
      <div className="mt-1 text-slate-300 mb-1">{t("others.athlete.description")}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat label={t("others.athlete.stats.position")} value={t("others.athlete.stats.positionValue")} />
        <Stat label={t("others.athlete.stats.matches")} value={t("others.athlete.stats.matchesValue")} />
        <Stat label={t("others.athlete.stats.goals")} value={t("others.athlete.stats.goalsValue")} />
      </div>
      <h2 className="text-2xl font-bold mb-1 mt-1">{t("others.summerCamp.title")}</h2>
      <div className="mt-1 text-slate-300 mb-1">{t("others.summerCamp.description")}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat label={t("others.summerCamp.stats.years")} value={t("others.summerCamp.stats.yearsValue")} />
        <Stat label={t("others.summerCamp.stats.staff")} value={t("others.summerCamp.stats.staffValue")} />
        <Stat label={t("others.summerCamp.stats.children")} value={t("others.summerCamp.stats.childrenValue")} />
      </div>
    </div>
  );
}

export default Others;