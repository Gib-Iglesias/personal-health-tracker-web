"use client";

import { type ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  sub?: string;
  accentColor?: string;
  chart?: ReactNode;
}

export function StatCard({
  icon,
  label,
  value,
  sub,
  accentColor = "#0D9488",
  chart,
}: StatCardProps) {
  return (
    <div className="card-base relative overflow-hidden flex-1 min-w-[180px] p-5 group hover:border-border-light transition-all duration-200">
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-80 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, ${accentColor}, transparent)`,
        }}
      />

      <div className="flex items-center gap-2.5 mb-2">
        <span className="text-text-muted [&>svg]:w-[18px] [&>svg]:h-[18px]">{icon}</span>
        <span className="text-text-muted text-xs font-medium tracking-wider uppercase">
          {label}
        </span>
      </div>

      <div className="text-3xl font-bold text-foreground tracking-tight">
        {value}
      </div>

      {sub && (
        <div className="text-text-secondary text-[13px] mt-1">{sub}</div>
      )}

      {chart && <div className="mt-3">{chart}</div>}
    </div>
  );
}
