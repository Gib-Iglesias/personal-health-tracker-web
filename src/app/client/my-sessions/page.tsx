"use client";
import { Video, MapPin, Clock } from "lucide-react";

const proximasSesiones = [
  { date: "Lun 27 Abr", time: "8:00 AM", type: "Presencial" as const, routine: "Piernas + Core", status: "Hoy" },
  { date: "Lun 27 Abr", time: "6:00 PM", type: "Virtual" as const, routine: "Espalda + Bíceps", status: "Hoy" },
  { date: "Mié 29 Abr", time: "8:00 AM", type: "Presencial" as const, routine: "Pecho + Tríceps", status: "En 2 días" },
  { date: "Vie 1 May", time: "8:00 AM", type: "Virtual" as const, routine: "Hombros + Core", status: "En 4 días" },
];

export default function MySessionsPage() {
  return (
    <div className="card-base p-6">
      <h3 className="text-lg font-semibold text-foreground mb-5">Próximas Sesiones</h3>
      <div className="flex flex-col gap-2 stagger-children">
        {proximasSesiones.map((s, i) => (
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
            <span className={`text-[11px] font-semibold px-3 py-1.5 rounded-full ${s.status === "Hoy" ? "bg-primary/15 text-primary" : "bg-secondary/12 text-secondary"}`}>{s.status}</span>
            {s.type === "Virtual" && (
              <button className="flex items-center gap-1 bg-secondary hover:bg-secondary-dark text-white border-none rounded-lg px-3.5 py-1.5 text-xs font-semibold cursor-pointer transition-colors">
                <Video size={13} /> Unirse
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
