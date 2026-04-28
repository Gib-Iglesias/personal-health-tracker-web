"use client";

import {
  Users, CalendarDays, DollarSign, TrendingUp, Plus, Video, MapPin, Check, Clock, Activity,
} from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import { MiniChart } from "@/components/ui/MiniChart";
import { mockClients, todaySessions, weeklyRevenue, monthlyRevenue } from "@/lib/mock-data";

export default function DashboardPage() {
  const activeClients = mockClients.filter((c) => c.status === "active");

  return (
    <div className="animate-fade-in">
      <div className="mb-7">
        <h2 className="text-2xl font-bold text-foreground">Good morning, John</h2>
        <p className="text-text-muted text-sm mt-1.5">
          Monday, 27 April 2026 — You have{" "}
          <span className="text-primary font-semibold">{todaySessions.length} sessions</span>{" "}
          scheduled today
        </p>
      </div>

      <div className="flex gap-4 flex-wrap mb-7 stagger-children">
        <StatCard icon={<Users />} label="Active Clients" value={String(activeClients.length)} sub="+1 this week" accentColor="#0D9488" />
        <StatCard icon={<CalendarDays />} label="Sessions Today" value={String(todaySessions.length)} sub="1 completed, 1 in progress" accentColor="#0EA5E9" />
        <StatCard icon={<DollarSign />} label="April Revenue" value="£2,475" sub="+12% vs March" accentColor="#0D9488"
          chart={<MiniChart data={weeklyRevenue} color="#0D9488" id="dash-rev" />} />
        <StatCard icon={<TrendingUp />} label="Retention Rate" value="95%" sub="Only 1 active pause" accentColor="#F59E0B" />
      </div>

      <div className="card-base p-6 mb-6">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-[17px] font-semibold text-foreground">Today&apos;s Sessions</h3>
          <button className="flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white border-none rounded-xl px-4 py-2 text-[13px] font-semibold cursor-pointer transition-colors">
            <Plus size={15} strokeWidth={2.5} /> New Session
          </button>
        </div>
        <div className="flex flex-col gap-2 stagger-children">
          {todaySessions.map((s) => (
            <div key={s.id} className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 border ${
              s.status === "in_progress" ? "bg-primary/10 border-primary-dark" : "bg-surface border-border hover:border-border-light"
            }`}>
              <div className={`w-2 h-2 rounded-full shrink-0 ${
                s.status === "completed" ? "bg-success" : s.status === "in_progress" ? "bg-warning animate-pulse-glow" : "bg-text-muted"
              }`} />
              <span className="text-text-secondary text-[13px] font-semibold min-w-[65px]">{s.time}</span>
              <span className="text-foreground text-sm font-medium flex-1">{s.client}</span>
              <span className="text-text-muted text-[13px] flex-1">{s.routine}</span>
              <span className="text-text-muted text-xs">{s.duration} min</span>
              <span className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                s.type === "Virtual" ? "bg-secondary/12 text-secondary" : "bg-primary/12 text-primary"
              }`}>
                {s.type === "Virtual" ? <Video size={12} /> : <MapPin size={12} />} {s.type === "Virtual" ? "Virtual" : "In-person"}
              </span>
              <span className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                s.status === "completed" ? "bg-success/15 text-success" : s.status === "in_progress" ? "bg-warning/15 text-warning" : "bg-text-muted/10 text-text-muted"
              }`}>
                {s.status === "completed" ? <><Check size={12} /> Done</> : s.status === "in_progress" ? <><Activity size={12} /> In progress</> : <><Clock size={12} /> Upcoming</>}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="card-base p-6">
          <h3 className="text-[15px] font-semibold text-foreground mb-1">Weekly Revenue</h3>
          <p className="text-text-muted text-xs mb-4">Current week</p>
          <MiniChart data={weeklyRevenue} color="#0D9488" height={100} width={400} id="weekly-rev" showDots />
          <div className="flex justify-between mt-2">
            {weeklyRevenue.map((d, i) => <span key={i} className="text-[11px] text-text-muted">{d.day}</span>)}
          </div>
        </div>
        <div className="card-base p-6">
          <h3 className="text-[15px] font-semibold text-foreground mb-1">Monthly Trend</h3>
          <p className="text-text-muted text-xs mb-4">Last 4 months</p>
          <MiniChart data={monthlyRevenue} color="#0EA5E9" height={100} width={400} id="monthly-rev" showDots />
          <div className="flex justify-between mt-2">
            {monthlyRevenue.map((d, i) => <span key={i} className="text-[11px] text-text-muted">{d.day}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
