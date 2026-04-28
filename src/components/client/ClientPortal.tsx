"use client";

import { useState } from "react";
import {
  Dumbbell,
  TrendingUp,
  CalendarDays,
  CreditCard,
  Check,
  Play,
  Video,
  MapPin,
  Clock,
  Flame,
} from "lucide-react";
import { MiniChart } from "@/components/ui/MiniChart";
import { clientRoutine, progressData } from "@/lib/mock-data";

const tabs = [
  { id: "routine", label: "Mi Rutina", icon: Dumbbell },
  { id: "progress", label: "Mi Progreso", icon: TrendingUp },
  { id: "sessions", label: "Mis Citas", icon: CalendarDays },
  { id: "plan", label: "Mi Plan", icon: CreditCard },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ClientPortal() {
  const [activeTab, setActiveTab] = useState<TabId>("routine");
  const [checkedExercises, setCheckedExercises] = useState<Set<number>>(
    new Set([0, 1])
  );

  const toggleExercise = (idx: number) => {
    const next = new Set(checkedExercises);
    next.has(idx) ? next.delete(idx) : next.add(idx);
    setCheckedExercises(next);
  };

  const completionPct = Math.round(
    (checkedExercises.size / clientRoutine.length) * 100
  );

  return (
    <div className="px-7 py-6 max-w-[920px] mx-auto animate-fade-in">
      {/* Client Header */}
      <div className="card-base p-5 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center text-lg font-bold text-white">
            CM
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">
              Carlos Mendoza
            </div>
            <div className="flex items-center gap-1.5 text-[13px] text-text-muted">
              Ganar masa muscular
              <span className="inline-flex items-center gap-0.5 text-warning">
                <Flame size={13} /> 12 días de racha
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="text-center">
            <div className="text-xl font-bold text-primary">78 kg</div>
            <div className="text-[11px] text-text-muted">Peso actual</div>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <div className="text-xl font-bold text-secondary">85 kg</div>
            <div className="text-[11px] text-text-muted">Objetivo</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-surface rounded-2xl p-1 border border-border">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border-none cursor-pointer text-[13px] transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-card text-primary font-semibold shadow-md"
                  : "bg-transparent text-text-muted hover:text-text-secondary"
              }`}
            >
              <Icon size={15} strokeWidth={activeTab === tab.id ? 2.2 : 1.8} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Routine Tab */}
      {activeTab === "routine" && (
        <div className="card-base p-6">
          <div className="flex justify-between items-center mb-5">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Piernas + Core
              </h3>
              <p className="text-text-muted text-[13px] mt-1">
                Lunes — {checkedExercises.size}/{clientRoutine.length}{" "}
                ejercicios completados
              </p>
            </div>
            <div className="w-[60px] h-[60px] rounded-full border-[3px] border-primary flex items-center justify-center">
              <span className="text-[15px] font-bold text-primary">
                {completionPct}%
              </span>
            </div>
          </div>

          <div className="w-full h-1.5 rounded-full bg-border mb-5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-400"
              style={{ width: `${completionPct}%` }}
            />
          </div>

          <div className="flex flex-col gap-2">
            {clientRoutine.map((ex, i) => {
              const checked = checkedExercises.has(i);
              return (
                <div
                  key={i}
                  onClick={() => toggleExercise(i)}
                  className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl cursor-pointer border transition-all duration-200 ${
                    checked
                      ? "bg-primary/8 border-primary-dark opacity-70"
                      : "bg-surface border-border hover:border-border-light"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                      checked
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-transparent"
                    }`}
                  >
                    {checked && <Check size={14} strokeWidth={3} />}
                  </div>
                  <div className="flex-1">
                    <div
                      className={`text-sm font-semibold text-foreground ${
                        checked ? "line-through" : ""
                      }`}
                    >
                      {ex.name}
                    </div>
                    <div className="text-xs text-text-muted mt-0.5">
                      {ex.sets} series × {ex.reps} · {ex.weight} · Descanso{" "}
                      {ex.rest}
                    </div>
                  </div>
                  <Play
                    size={16}
                    className="text-text-muted hover:text-primary transition-colors cursor-pointer"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Progress Tab */}
      {activeTab === "progress" && (
        <div className="card-base p-6">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            Evolución de Peso
          </h3>
          <p className="text-text-muted text-[13px] mb-5">
            Últimas 8 semanas — Objetivo: 85 kg
          </p>
          <MiniChart
            data={progressData}
            color="#0D9488"
            height={120}
            width={600}
            id="client-progress"
            showDots
          />
          <div className="flex justify-between mt-2">
            {progressData.map((d, i) => (
              <span key={i} className="text-[11px] text-text-muted">
                {d.week}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 stagger-children">
            {[
              { label: "Peso Inicial", value: "82 kg", color: "text-foreground" },
              { label: "Peso Actual", value: "78 kg", color: "text-primary" },
              { label: "Cambio Total", value: "-4 kg", color: "text-secondary" },
              { label: "Grasa Corporal", value: "18.5%", color: "text-warning" },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface border border-border">
                <div className="text-xs text-text-muted">{stat.label}</div>
                <div className={`text-xl font-bold ${stat.color} mt-1`}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sessions Tab */}
      {activeTab === "sessions" && (
        <div className="card-base p-6">
          <h3 className="text-lg font-semibold text-foreground mb-5">
            Próximas Sesiones
          </h3>
          <div className="flex flex-col gap-2 stagger-children">
            {[
              { date: "Lun 27 Abr", time: "8:00 AM", type: "Presencial" as const, routine: "Piernas + Core", status: "Hoy" },
              { date: "Lun 27 Abr", time: "6:00 PM", type: "Virtual" as const, routine: "Espalda + Bíceps", status: "Hoy" },
              { date: "Mié 29 Abr", time: "8:00 AM", type: "Presencial" as const, routine: "Pecho + Tríceps", status: "En 2 días" },
              { date: "Vie 1 May", time: "8:00 AM", type: "Virtual" as const, routine: "Hombros + Core", status: "En 4 días" },
            ].map((s, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl border ${
                  i === 0
                    ? "bg-primary/10 border-primary-dark"
                    : "bg-surface border-border"
                }`}
              >
                <div className="text-center min-w-[60px]">
                  <div className="text-[13px] font-bold text-foreground">
                    {s.date.split(" ")[0]}
                  </div>
                  <div className="text-xs text-text-muted">
                    {s.date.split(" ").slice(1).join(" ")}
                  </div>
                </div>
                <div className="w-px h-9 bg-border" />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-foreground">
                    {s.routine}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-text-muted">
                    <Clock size={11} /> {s.time} ·{" "}
                    {s.type === "Virtual" ? <Video size={11} /> : <MapPin size={11} />}{" "}
                    {s.type}
                  </div>
                </div>
                <span
                  className={`text-[11px] font-semibold px-3 py-1.5 rounded-full ${
                    s.status === "Hoy"
                      ? "bg-primary/15 text-primary"
                      : "bg-secondary/12 text-secondary"
                  }`}
                >
                  {s.status}
                </span>
                {s.type === "Virtual" && (
                  <button className="flex items-center gap-1 bg-secondary hover:bg-secondary-dark text-white border-none rounded-lg px-3.5 py-1.5 text-xs font-semibold cursor-pointer transition-colors">
                    <Video size={13} /> Unirse
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Plan Tab */}
      {activeTab === "plan" && (
        <div className="card-base p-6">
          <h3 className="text-lg font-semibold text-foreground mb-5">
            Mi Plan
          </h3>
          <div className="p-5 rounded-2xl mb-5 bg-gradient-to-br from-primary/15 to-secondary/10 border border-primary-dark">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[11px] text-text-muted uppercase font-semibold tracking-widest">
                  Plan Actual
                </div>
                <div className="text-xl font-bold text-foreground mt-1">
                  Mensual — 3 sesiones/semana
                </div>
                <div className="text-[13px] text-text-secondary mt-1">
                  Renovación automática: 1 de Mayo 2026
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-extrabold text-primary">
                  $100
                </div>
                <div className="text-xs text-text-muted">/mes</div>
              </div>
            </div>
          </div>
          <h4 className="text-[15px] font-semibold text-foreground mb-3">
            Historial de Pagos
          </h4>
          {[
            { date: "1 Abr 2026", amount: "$100", status: "Pagado" },
            { date: "1 Mar 2026", amount: "$100", status: "Pagado" },
            { date: "1 Feb 2026", amount: "$75", status: "Pagado" },
          ].map((p, i) => (
            <div
              key={i}
              className={`flex items-center justify-between py-3 ${
                i < 2 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-text-secondary text-[13px]">{p.date}</span>
              <span className="text-foreground text-sm font-semibold">{p.amount}</span>
              <span className="flex items-center gap-1 text-[11px] text-success font-semibold">
                <Check size={12} /> {p.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
