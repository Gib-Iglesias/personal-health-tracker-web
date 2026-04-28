"use client";
import { useState } from "react";
import { Check, Play } from "lucide-react";
import { clientRoutine } from "@/lib/mock-data";

export default function MyRoutinePage() {
  const [checkedExercises, setCheckedExercises] = useState<Set<number>>(new Set([0, 1]));
  const toggleExercise = (idx: number) => { const next = new Set(checkedExercises); next.has(idx) ? next.delete(idx) : next.add(idx); setCheckedExercises(next); };
  const completionPct = Math.round((checkedExercises.size / clientRoutine.length) * 100);

  return (
    <div className="card-base p-6">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Piernas + Core</h3>
          <p className="text-text-muted text-[13px] mt-1">Lunes — {checkedExercises.size}/{clientRoutine.length} ejercicios completados</p>
        </div>
        <div className="w-[60px] h-[60px] rounded-full border-[3px] border-primary flex items-center justify-center">
          <span className="text-[15px] font-bold text-primary">{completionPct}%</span>
        </div>
      </div>
      <div className="w-full h-1.5 rounded-full bg-border mb-5">
        <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-400" style={{ width: `${completionPct}%` }} />
      </div>
      <div className="flex flex-col gap-2">
        {clientRoutine.map((ex, i) => {
          const checked = checkedExercises.has(i);
          return (
            <div key={i} onClick={() => toggleExercise(i)} className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl cursor-pointer border transition-all duration-200 ${checked ? "bg-primary/8 border-primary-dark opacity-70" : "bg-surface border-border hover:border-border-light"}`}>
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${checked ? "border-primary bg-primary text-white" : "border-border bg-transparent"}`}>
                {checked && <Check size={14} strokeWidth={3} />}
              </div>
              <div className="flex-1">
                <div className={`text-sm font-semibold text-foreground ${checked ? "line-through" : ""}`}>{ex.name}</div>
                <div className="text-xs text-text-muted mt-0.5">{ex.sets} series × {ex.reps} · {ex.weight} · Descanso {ex.rest}</div>
              </div>
              <Play size={16} className="text-text-muted hover:text-primary transition-colors cursor-pointer" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
