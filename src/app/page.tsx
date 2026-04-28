"use client";

import { useState } from "react";
import { Shield, User } from "lucide-react";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { ClientPortal } from "@/components/client/ClientPortal";

export default function Home() {
  const [view, setView] = useState<"admin" | "client">("admin");
  const [fadeIn, setFadeIn] = useState(true);

  const switchView = (v: "admin" | "client") => {
    setFadeIn(false);
    setTimeout(() => {
      setView(v);
      setFadeIn(true);
    }, 200);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Top Bar ── */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-border bg-surface sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center text-white font-extrabold text-sm shadow-lg">
            P
          </div>
          <div>
            <span className="font-bold text-base text-foreground">
              Personal Health Tracker
            </span>
            <span className="ml-2 text-[10px] text-text-muted bg-card px-2.5 py-0.5 rounded-full font-semibold tracking-wider uppercase">
              Demo
            </span>
          </div>
        </div>

        <div className="flex gap-1 bg-card rounded-xl p-1 border border-border">
          <button
            onClick={() => switchView("admin")}
            className={`flex items-center gap-1.5 px-5 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 cursor-pointer border-none ${
              view === "admin"
                ? "bg-primary text-white shadow-md"
                : "bg-transparent text-text-muted hover:text-text-secondary"
            }`}
          >
            <Shield size={14} />
            Vista Entrenador
          </button>
          <button
            onClick={() => switchView("client")}
            className={`flex items-center gap-1.5 px-5 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 cursor-pointer border-none ${
              view === "client"
                ? "bg-secondary text-white shadow-md"
                : "bg-transparent text-text-muted hover:text-text-secondary"
            }`}
          >
            <User size={14} />
            Vista Cliente
          </button>
        </div>
      </header>

      {/* ── Content ── */}
      <main
        className="flex-1 transition-opacity duration-200"
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
        {view === "admin" ? <AdminDashboard /> : <ClientPortal />}
      </main>
    </div>
  );
}
