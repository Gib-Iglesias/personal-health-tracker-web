"use client";
import { Video, MapPin, Clock } from "lucide-react";

const upcomingSessions = [
  { date: "Mon 27 Apr", time: "8:00 AM", type: "In-person" as const, routine: "Legs + Core", status: "Today" },
  { date: "Mon 27 Apr", time: "6:00 PM", type: "Virtual" as const, routine: "Back + Biceps", status: "Today" },
  { date: "Wed 29 Apr", time: "8:00 AM", type: "In-person" as const, routine: "Chest + Triceps", status: "In 2 days" },
  { date: "Fri 1 May", time: "8:00 AM", type: "Virtual" as const, routine: "Shoulders + Core", status: "In 4 days" },
];

export default function MySessionsPage() {
  return (
    <div className="card-base p-6">
      <h3 className="text-lg font-semibold text-foreground mb-5">Upcoming Sessions</h3>
      <div className="flex flex-col gap-2 stagger-children">
        {upcomingSessions.map((s, i) => (
          <div key={i} className={`flex items-center gap-4 px-5 py-4 rounded-xl border ${i === 0 ? "bg-primary/10 border-primary-dark" : "bg-surface border-border"}`}>
            <div className="text-center min-w-[60px]">
              <div className="text-[13px] font-bold text-foreground">{s.date.split(" ")[0]}</div>
              <div className="text-xs text-text-muted">{s.date.split(" ").slice(1).join(" ")}</div>
            </div>
            <div className="w-px h-9 bg-border" />
            <div className="flex-1">
              <div className="text-sm font-semibold text-foreground">{s.routine}</div>
              <div className="flex items-center gap-1 text-xs text-text-muted">
                <Clock size={11} /> {s.time} · {s.type === "Virtual" ? <Video size={11} /> : <MapPin size={11} />} {s.type}
              </div>
            </div>
            <span className={`text-[11px] font-semibold px-3 py-1.5 rounded-full ${s.status === "Today" ? "bg-primary/15 text-primary" : "bg-secondary/12 text-secondary"}`}>{s.status}</span>
            {s.type === "Virtual" && (
              <button className="flex items-center gap-1 bg-secondary hover:bg-secondary-dark text-white border-none rounded-lg px-3.5 py-1.5 text-xs font-semibold cursor-pointer transition-colors">
                <Video size={13} /> Join
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
