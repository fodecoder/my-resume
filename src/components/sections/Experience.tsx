const Experience = () => {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#001219] to-[#001f2f] border border-slate-700 shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Experience & Projects</h2>

      <ExperienceCard
        company="Taglio S.R.L"
        role="Software Engineer — Backend Developer & API Specialist"
        period="Jun 2024 – Present | Piobesi D'Alba, Italy"
        bullets={[
          "Developed backend solutions for inventory management and machine control — improved processing efficiency by 40% and reduced downtime by 25%.",
          "Designed and implemented 30+ REST APIs with 99.9% uptime and response times under 200ms.",
          "Collaborated with cross-functional teams, reducing bug resolution time by 60%."
        ]}
      />

      <ExperienceCard
        company="Cluster Reply S.R.L"
        role="Software Engineer — Technical Lead"
        period="Apr 2021 – May 2024 | Turin, Italy"
        bullets={[
          "Led development of IoT diagnostic machines serving 500+ concurrent users on Azure.",
          "Managed a team of 4 engineers, improving team velocity by 30% and achieving 95% on-time delivery.",
          "Architected solutions that reduced integration time by 50% and ensured 99.5% availability."
        ]}
      />

      <ExperienceCard
        company="Automatic Classification of Software Issue Report — Master’s Thesis"
        role="Research & ML Engineer"
        period="Apr 2020 – Oct 2020 | Turin, Italy"
        bullets={[
          "Built ML classifier in collaboration with Mozilla: precision 92%, recall 89% — saved developers 15+ hours/week.",
          "Manually labeled 250+ bugs to produce training dataset; improved automated classification from 70% to 92%."
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