type StatProps = {
  label: string;
  value: string;
};

export function Stat({ label, value }: StatProps) {
  return (
    <div className="p-3 bg-black/30 rounded-xl border border-slate-700">
      <div className="text-xs text-slate-400">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}