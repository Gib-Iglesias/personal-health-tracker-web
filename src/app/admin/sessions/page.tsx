"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { todaySessions } from "@/lib/mock-data";

export default function SessionsPage() {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-foreground mb-6">Calendario de Sesiones</h2>
      <div className="card-base p-6">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-[17px] font-semibold text-foreground">Semana del 27 Abr — 3 May 2026</h3>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 bg-surface text-text-secondary border border-border rounded-lg px-3.5 py-1.5 cursor-pointer text-[13px] hover:border-border-light transition-colors"><ChevronLeft size={14} /> Anterior</button>
            <button className="bg-primary text-white border-none rounded-lg px-3.5 py-1.5 cursor-pointer text-[13px] font-semibold">Hoy</button>
            <button className="flex items-center gap-1 bg-surface text-text-secondary border border-border rounded-lg px-3.5 py-1.5 cursor-pointer text-[13px] hover:border-border-light transition-colors">Siguiente <ChevronRight size={14} /></button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {["Lun 27", "Mar 28", "Mié 29", "Jue 30", "Vie 1", "Sáb 2", "Dom 3"].map((day, i) => (
            <div key={i} className={`rounded-xl p-3 min-h-[160px] border ${i === 0 ? "bg-primary/10 border-primary-dark" : "bg-surface border-border"}`}>
              <div className={`text-xs font-semibold mb-2.5 ${i === 0 ? "text-primary" : "text-text-muted"}`}>{day}</div>
              {i === 0 && todaySessions.slice(0, 3).map((s, j) => (
                <div key={j} className="bg-card rounded-md p-1.5 mb-1 border-l-[3px] text-[11px]" style={{ borderLeftColor: s.status === "completed" ? "#10B981" : "#0EA5E9" }}>
                  <div className="text-text-secondary font-semibold">{s.time}</div>
                  <div className="text-foreground font-medium">{s.client.split(" ")[0]}</div>
                </div>
              ))}
              {i === 1 && <div className="bg-card rounded-md p-1.5 border-l-[3px] border-l-secondary text-[11px]"><div className="text-text-secondary font-semibold">7:00 AM</div><div className="text-foreground font-medium">Ana G.</div></div>}
              {i === 2 && <div className="bg-card rounded-md p-1.5 border-l-[3px] border-l-warning text-[11px]"><div className="text-text-secondary font-semibold">6:00 PM</div><div className="text-foreground font-medium">Diego R.</div></div>}
              {i === 3 && <div className="bg-card rounded-md p-1.5 border-l-[3px] border-l-primary text-[11px]"><div className="text-text-secondary font-semibold">9:00 AM</div><div className="text-foreground font-medium">Sofía H.</div></div>}
              {i === 4 && <div className="bg-card rounded-md p-1.5 border-l-[3px] border-l-accent text-[11px]"><div className="text-text-secondary font-semibold">10:00 AM</div><div className="text-foreground font-medium">María T.</div></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
