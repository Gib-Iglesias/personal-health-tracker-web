"use client";
import { MiniChart } from "@/components/ui/MiniChart";
import { progressData } from "@/lib/mock-data";

export default function MyProgressPage() {
  return (
    <div className="card-base p-6">
      <h3 className="text-lg font-semibold text-foreground mb-1">Weight Progress</h3>
      <p className="text-text-muted text-[13px] mb-5">Last 8 weeks — Target: 85 kg</p>
      <MiniChart data={progressData} color="#0D9488" height={120} width={600} id="client-progress" showDots />
      <div className="flex justify-between mt-2">
        {progressData.map((d, i) => <span key={i} className="text-[11px] text-text-muted">{d.week}</span>)}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 stagger-children">
        {[
          { label: "Starting Weight", value: "82 kg", color: "text-foreground" },
          { label: "Current Weight", value: "78 kg", color: "text-primary" },
          { label: "Total Change", value: "-4 kg", color: "text-secondary" },
          { label: "Body Fat", value: "18.5%", color: "text-warning" },
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-xl bg-surface border border-border">
            <div className="text-xs text-text-muted">{stat.label}</div>
            <div className={`text-xl font-bold ${stat.color} mt-1`}>{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
