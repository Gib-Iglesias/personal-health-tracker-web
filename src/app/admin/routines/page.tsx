"use client";
import { GripVertical, Plus } from "lucide-react";
import { clientRoutine } from "@/lib/mock-data";

export default function RoutinesPage() {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-foreground mb-6">Constructor de Rutinas</h2>
      <div className="card-base p-6">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h3 className="text-[17px] font-semibold text-foreground">Piernas + Core</h3>
            <p className="text-text-muted text-[13px] mt-1">Carlos Mendoza — Lunes</p>
          </div>
          <span className="text-xs text-primary font-semibold bg-primary/12 px-3 py-1 rounded-full">7 ejercicios</span>
        </div>
        <div className="flex flex-col gap-1.5">
          {clientRoutine.map((ex, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-border hover:border-border-light transition-colors cursor-grab">
              <GripVertical size={14} className="text-text-muted cursor-grab" />
              <span className="flex-1 text-foreground text-sm font-medium">{ex.name}</span>
              <span className="text-text-secondary text-xs min-w-[35px]">{ex.sets}×</span>
              <span className="text-text-secondary text-xs min-w-[55px]">{ex.reps}</span>
              <span className="text-secondary text-xs font-semibold min-w-[50px]">{ex.weight}</span>
              <span className="text-text-muted text-xs min-w-[30px]">{ex.rest}</span>
            </div>
          ))}
        </div>
        <button className="flex items-center justify-center gap-1.5 w-full mt-3 py-2.5 rounded-xl border-2 border-dashed border-border bg-transparent text-text-muted text-[13px] cursor-pointer hover:border-primary/40 hover:text-primary transition-colors">
          <Plus size={14} /> Agregar ejercicio
        </button>
      </div>
    </div>
  );
}
