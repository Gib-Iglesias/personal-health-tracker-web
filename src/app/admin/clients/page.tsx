"use client";

import { useState } from "react";
import { Plus, Flame, Mail, Phone, CalendarCheck, Activity, AlertTriangle } from "lucide-react";
import { mockClients } from "@/lib/mock-data";

export default function ClientsPage() {
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const activeClients = mockClients.filter((c) => c.status === "active");

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">My Clients</h2>
          <p className="text-text-muted text-sm mt-1">
            {activeClients.length} active, {mockClients.length - activeClients.length} paused
          </p>
        </div>
        <button className="flex items-center gap-1.5 gradient-primary text-white border-none rounded-xl px-5 py-2.5 text-sm font-semibold cursor-pointer glow-primary hover:scale-[1.02] transition-transform">
          <Plus size={16} strokeWidth={2.5} /> New Client
        </button>
      </div>

      <div className="flex flex-col gap-2.5 stagger-children">
        {mockClients.map((c) => (
          <div key={c.id} onClick={() => setSelectedClient(selectedClient === c.id ? null : c.id)}
            className={`card-interactive p-5 cursor-pointer ${selectedClient === c.id ? "!border-primary-dark !bg-card-hover" : ""}`}>
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-[15px] font-bold text-white shrink-0 ${c.status === "active" ? "gradient-primary" : "bg-border"}`}>
                {c.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-semibold text-foreground">{c.name}</span>
                  {c.streak > 0 && <span className="flex items-center gap-0.5 text-[11px] text-warning"><Flame size={12} /> {c.streak} days</span>}
                </div>
                <div className="text-[13px] text-text-muted mt-0.5">{c.goal}</div>
              </div>
              <div className="text-center min-w-[70px] hidden md:block">
                <div className="text-xs text-text-muted">Weight</div>
                <div className="text-base font-bold text-foreground">{c.weight} kg</div>
              </div>
              <div className="text-center min-w-[90px] hidden md:block">
                <div className="text-xs text-text-muted">Next session</div>
                <div className="text-[13px] font-medium text-primary">{c.nextSession}</div>
              </div>
              <div className="text-center min-w-[90px] hidden lg:block">
                <div className="text-xs text-text-muted mb-1">Progress</div>
                <div className="w-[90px] h-1.5 rounded-full bg-border">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-500" style={{ width: `${c.progress}%` }} />
                </div>
                <div className="text-[11px] text-text-secondary mt-1">{c.progress}%</div>
              </div>
              <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${c.status === "active" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"}`}>
                {c.status === "active" ? "Active" : "Paused"}
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/12 text-secondary hidden sm:inline">{c.plan}</span>
            </div>
            {selectedClient === c.id && (
              <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
                <div><div className="flex items-center gap-1 text-xs text-text-muted"><Mail size={11} /> Email</div><div className="text-sm text-foreground mt-0.5">{c.email}</div></div>
                <div><div className="flex items-center gap-1 text-xs text-text-muted"><Phone size={11} /> Phone</div><div className="text-sm text-foreground mt-0.5">{c.phone}</div></div>
                <div><div className="flex items-center gap-1 text-xs text-text-muted"><CalendarCheck size={11} /> Member since</div><div className="text-sm text-foreground mt-0.5">{c.joinedDate}</div></div>
                <div><div className="flex items-center gap-1 text-xs text-text-muted"><Activity size={11} /> Body fat</div><div className="text-sm text-foreground mt-0.5">{c.bodyFat ?? "—"}%</div></div>
                {c.notes && <div className="col-span-full"><div className="flex items-center gap-1 text-xs text-text-muted"><AlertTriangle size={11} /> Notes</div><div className="text-sm text-warning/80 mt-0.5">{c.notes}</div></div>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
