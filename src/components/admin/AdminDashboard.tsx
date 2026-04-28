"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  CreditCard,
  Dumbbell,
  DollarSign,
  TrendingUp,
  Clock,
  BarChart3,
  Video,
  MapPin,
  Plus,
  ChevronLeft,
  ChevronRight,
  GripVertical,
  Check,
  AlertTriangle,
  Flame,
  Mail,
  Phone,
  CalendarCheck,
  Activity,
} from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import { MiniChart } from "@/components/ui/MiniChart";
import {
  mockClients,
  todaySessions,
  weeklyRevenue,
  monthlyRevenue,
  clientRoutine,
  recentTransactions,
} from "@/lib/mock-data";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "clients", label: "Clientes", icon: Users },
  { id: "sessions", label: "Sesiones", icon: CalendarDays },
  { id: "payments", label: "Pagos", icon: CreditCard },
  { id: "routines", label: "Rutinas", icon: Dumbbell },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const activeClients = mockClients.filter((c) => c.status === "active");

  return (
    <div className="flex h-[calc(100vh-57px)]">
      {/* ── Sidebar ── */}
      <aside className="w-[240px] bg-surface border-r border-border p-5 flex flex-col shrink-0">
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center text-white font-extrabold text-sm">
            P
          </div>
          <div>
            <div className="font-bold text-[15px] text-foreground">PHT</div>
            <div className="text-[11px] text-primary font-medium">
              Panel de Control
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl border-none cursor-pointer text-left text-[14px] transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-primary/15 text-primary font-semibold"
                    : "bg-transparent text-text-secondary hover:bg-card hover:text-foreground"
                }`}
              >
                <Icon size={18} strokeWidth={activeTab === tab.id ? 2.2 : 1.8} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div className="flex-1" />

        <div className="p-3.5 rounded-2xl card-base">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-white">
              JL
            </div>
            <div>
              <div className="text-[13px] font-semibold text-foreground">
                Juan López
              </div>
              <div className="text-[11px] text-primary font-medium">
                Entrenador
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex-1 p-7 overflow-y-auto">
        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="animate-fade-in">
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-foreground">
                Buenos días, Juan
              </h2>
              <p className="text-text-muted text-sm mt-1.5">
                Lunes, 27 de Abril 2026 — Tienes{" "}
                <span className="text-primary font-semibold">
                  {todaySessions.length} sesiones
                </span>{" "}
                programadas hoy
              </p>
            </div>

            <div className="flex gap-4 flex-wrap mb-7 stagger-children">
              <StatCard
                icon={<Users />}
                label="Clientes Activos"
                value={String(activeClients.length)}
                sub="+1 esta semana"
                accentColor="#0D9488"
              />
              <StatCard
                icon={<CalendarDays />}
                label="Sesiones Hoy"
                value={String(todaySessions.length)}
                sub="1 completada, 1 en curso"
                accentColor="#0EA5E9"
              />
              <StatCard
                icon={<DollarSign />}
                label="Ingresos Abril"
                value="$2,475"
                sub="+12% vs marzo"
                accentColor="#0D9488"
                chart={
                  <MiniChart
                    data={weeklyRevenue}
                    color="#0D9488"
                    id="dash-rev"
                  />
                }
              />
              <StatCard
                icon={<TrendingUp />}
                label="Tasa Retención"
                value="95%"
                sub="Solo 1 pausa activa"
                accentColor="#F59E0B"
              />
            </div>

            {/* Today Sessions */}
            <div className="card-base p-6 mb-6">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-[17px] font-semibold text-foreground">
                  Sesiones de Hoy
                </h3>
                <button className="flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white border-none rounded-xl px-4 py-2 text-[13px] font-semibold cursor-pointer transition-colors">
                  <Plus size={15} strokeWidth={2.5} />
                  Nueva Sesión
                </button>
              </div>
              <div className="flex flex-col gap-2 stagger-children">
                {todaySessions.map((s) => (
                  <div
                    key={s.id}
                    className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 border ${
                      s.status === "in_progress"
                        ? "bg-primary/10 border-primary-dark"
                        : "bg-surface border-border hover:border-border-light"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        s.status === "completed"
                          ? "bg-success"
                          : s.status === "in_progress"
                            ? "bg-warning animate-pulse-glow"
                            : "bg-text-muted"
                      }`}
                    />
                    <span className="text-text-secondary text-[13px] font-semibold min-w-[65px]">
                      {s.time}
                    </span>
                    <span className="text-foreground text-sm font-medium flex-1">
                      {s.client}
                    </span>
                    <span className="text-text-muted text-[13px] flex-1">
                      {s.routine}
                    </span>
                    <span className="text-text-muted text-xs">
                      {s.duration} min
                    </span>
                    <span
                      className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        s.type === "Virtual"
                          ? "bg-secondary/12 text-secondary"
                          : "bg-primary/12 text-primary"
                      }`}
                    >
                      {s.type === "Virtual" ? <Video size={12} /> : <MapPin size={12} />}
                      {s.type}
                    </span>
                    <span
                      className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        s.status === "completed"
                          ? "bg-success/15 text-success"
                          : s.status === "in_progress"
                            ? "bg-warning/15 text-warning"
                            : "bg-text-muted/10 text-text-muted"
                      }`}
                    >
                      {s.status === "completed" ? (
                        <><Check size={12} /> Completada</>
                      ) : s.status === "in_progress" ? (
                        <><Activity size={12} /> En curso</>
                      ) : (
                        <><Clock size={12} /> Pendiente</>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue charts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-base p-6">
                <h3 className="text-[15px] font-semibold text-foreground mb-1">
                  Ingresos Semanales
                </h3>
                <p className="text-text-muted text-xs mb-4">Semana actual</p>
                <MiniChart data={weeklyRevenue} color="#0D9488" height={100} width={400} id="weekly-rev" showDots />
                <div className="flex justify-between mt-2">
                  {weeklyRevenue.map((d, i) => (
                    <span key={i} className="text-[11px] text-text-muted">{d.day}</span>
                  ))}
                </div>
              </div>
              <div className="card-base p-6">
                <h3 className="text-[15px] font-semibold text-foreground mb-1">
                  Tendencia Mensual
                </h3>
                <p className="text-text-muted text-xs mb-4">Últimos 4 meses</p>
                <MiniChart data={monthlyRevenue} color="#0EA5E9" height={100} width={400} id="monthly-rev" showDots />
                <div className="flex justify-between mt-2">
                  {monthlyRevenue.map((d, i) => (
                    <span key={i} className="text-[11px] text-text-muted">{d.day}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === "clients" && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Mis Clientes</h2>
                <p className="text-text-muted text-sm mt-1">
                  {activeClients.length} activos, {mockClients.length - activeClients.length} en pausa
                </p>
              </div>
              <button className="flex items-center gap-1.5 gradient-primary text-white border-none rounded-xl px-5 py-2.5 text-sm font-semibold cursor-pointer glow-primary hover:scale-[1.02] transition-transform">
                <Plus size={16} strokeWidth={2.5} />
                Nuevo Cliente
              </button>
            </div>

            <div className="flex flex-col gap-2.5 stagger-children">
              {mockClients.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setSelectedClient(selectedClient === c.id ? null : c.id)}
                  className={`card-interactive p-5 cursor-pointer ${
                    selectedClient === c.id ? "!border-primary-dark !bg-card-hover" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center text-[15px] font-bold text-white shrink-0 ${
                        c.status === "active" ? "gradient-primary" : "bg-border"
                      }`}
                    >
                      {c.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[15px] font-semibold text-foreground">{c.name}</span>
                        {c.streak > 0 && (
                          <span className="flex items-center gap-0.5 text-[11px] text-warning">
                            <Flame size={12} /> {c.streak} días
                          </span>
                        )}
                      </div>
                      <div className="text-[13px] text-text-muted mt-0.5">{c.goal}</div>
                    </div>
                    <div className="text-center min-w-[70px] hidden md:block">
                      <div className="text-xs text-text-muted">Peso</div>
                      <div className="text-base font-bold text-foreground">{c.weight} kg</div>
                    </div>
                    <div className="text-center min-w-[90px] hidden md:block">
                      <div className="text-xs text-text-muted">Próxima sesión</div>
                      <div className="text-[13px] font-medium text-primary">{c.nextSession}</div>
                    </div>
                    <div className="text-center min-w-[90px] hidden lg:block">
                      <div className="text-xs text-text-muted mb-1">Progreso</div>
                      <div className="w-[90px] h-1.5 rounded-full bg-border">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                          style={{ width: `${c.progress}%` }}
                        />
                      </div>
                      <div className="text-[11px] text-text-secondary mt-1">{c.progress}%</div>
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                        c.status === "active" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"
                      }`}
                    >
                      {c.status === "active" ? "Activo" : "En pausa"}
                    </span>
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/12 text-secondary hidden sm:inline">
                      {c.plan}
                    </span>
                  </div>

                  {selectedClient === c.id && (
                    <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
                      <div>
                        <div className="flex items-center gap-1 text-xs text-text-muted"><Mail size={11} /> Email</div>
                        <div className="text-sm text-foreground mt-0.5">{c.email}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-xs text-text-muted"><Phone size={11} /> Teléfono</div>
                        <div className="text-sm text-foreground mt-0.5">{c.phone}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-xs text-text-muted"><CalendarCheck size={11} /> Miembro desde</div>
                        <div className="text-sm text-foreground mt-0.5">{c.joinedDate}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-xs text-text-muted"><Activity size={11} /> Grasa corporal</div>
                        <div className="text-sm text-foreground mt-0.5">{c.bodyFat ?? "—"}%</div>
                      </div>
                      {c.notes && (
                        <div className="col-span-full">
                          <div className="flex items-center gap-1 text-xs text-text-muted"><AlertTriangle size={11} /> Notas</div>
                          <div className="text-sm text-warning/80 mt-0.5">{c.notes}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sessions Tab */}
        {activeTab === "sessions" && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-6">Calendario de Sesiones</h2>
            <div className="card-base p-6">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-[17px] font-semibold text-foreground">
                  Semana del 27 Abr — 3 May 2026
                </h3>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 bg-surface text-text-secondary border border-border rounded-lg px-3.5 py-1.5 cursor-pointer text-[13px] hover:border-border-light transition-colors">
                    <ChevronLeft size={14} /> Anterior
                  </button>
                  <button className="bg-primary text-white border-none rounded-lg px-3.5 py-1.5 cursor-pointer text-[13px] font-semibold">
                    Hoy
                  </button>
                  <button className="flex items-center gap-1 bg-surface text-text-secondary border border-border rounded-lg px-3.5 py-1.5 cursor-pointer text-[13px] hover:border-border-light transition-colors">
                    Siguiente <ChevronRight size={14} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {["Lun 27", "Mar 28", "Mié 29", "Jue 30", "Vie 1", "Sáb 2", "Dom 3"].map((day, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-3 min-h-[160px] border ${
                      i === 0 ? "bg-primary/10 border-primary-dark" : "bg-surface border-border"
                    }`}
                  >
                    <div className={`text-xs font-semibold mb-2.5 ${i === 0 ? "text-primary" : "text-text-muted"}`}>
                      {day}
                    </div>
                    {i === 0 &&
                      todaySessions.slice(0, 3).map((s, j) => (
                        <div
                          key={j}
                          className="bg-card rounded-md p-1.5 mb-1 border-l-[3px] text-[11px]"
                          style={{ borderLeftColor: s.status === "completed" ? "#10B981" : "#0EA5E9" }}
                        >
                          <div className="text-text-secondary font-semibold">{s.time}</div>
                          <div className="text-foreground font-medium">{s.client.split(" ")[0]}</div>
                        </div>
                      ))}
                    {i === 1 && (
                      <div className="bg-card rounded-md p-1.5 border-l-[3px] border-l-secondary text-[11px]">
                        <div className="text-text-secondary font-semibold">7:00 AM</div>
                        <div className="text-foreground font-medium">Ana G.</div>
                      </div>
                    )}
                    {i === 2 && (
                      <div className="bg-card rounded-md p-1.5 border-l-[3px] border-l-warning text-[11px]">
                        <div className="text-text-secondary font-semibold">6:00 PM</div>
                        <div className="text-foreground font-medium">Diego R.</div>
                      </div>
                    )}
                    {i === 3 && (
                      <div className="bg-card rounded-md p-1.5 border-l-[3px] border-l-primary text-[11px]">
                        <div className="text-text-secondary font-semibold">9:00 AM</div>
                        <div className="text-foreground font-medium">Sofía H.</div>
                      </div>
                    )}
                    {i === 4 && (
                      <div className="bg-card rounded-md p-1.5 border-l-[3px] border-l-accent text-[11px]">
                        <div className="text-text-secondary font-semibold">10:00 AM</div>
                        <div className="text-foreground font-medium">María T.</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === "payments" && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-6">Facturación y Pagos</h2>
            <div className="flex gap-4 mb-6 flex-wrap stagger-children">
              <StatCard icon={<DollarSign />} label="Ingresos Abril" value="$2,475" sub="15 transacciones" accentColor="#0D9488"
                chart={<MiniChart data={weeklyRevenue} color="#0D9488" id="pay-rev" />} />
              <StatCard icon={<Clock />} label="Pagos Pendientes" value="$150" sub="2 por cobrar" accentColor="#F59E0B" />
              <StatCard icon={<BarChart3 />} label="Proyección Mayo" value="$3,200" sub="+29% crecimiento" accentColor="#0EA5E9" />
            </div>
            <div className="card-base p-6">
              <h3 className="text-[17px] font-semibold text-foreground mb-4">Últimas Transacciones</h3>
              {recentTransactions.map((tx, i) => (
                <div
                  key={tx.id}
                  className={`flex items-center py-3 ${i < recentTransactions.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span className="flex-1 text-foreground text-sm font-medium">{tx.client}</span>
                  <span className="text-text-muted text-[13px] min-w-[100px]">{tx.plan}</span>
                  <span className="text-text-muted text-[13px] min-w-[80px]">{tx.date}</span>
                  {tx.method && <span className="text-text-muted text-xs min-w-[80px]">{tx.method}</span>}
                  <span className="font-bold text-[15px] text-foreground min-w-[70px] text-right">{tx.amount}</span>
                  <span
                    className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ml-3 ${
                      tx.status === "paid" ? "bg-success/15 text-success"
                        : tx.status === "pending" ? "bg-warning/15 text-warning"
                        : "bg-danger/10 text-danger"
                    }`}
                  >
                    {tx.status === "paid" ? <><Check size={11} /> Pagado</>
                      : tx.status === "pending" ? "Pendiente"
                      : tx.status === "overdue" ? "Vencido"
                      : "Reembolsado"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Routines Tab */}
        {activeTab === "routines" && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-6">Constructor de Rutinas</h2>
            <div className="card-base p-6">
              <div className="flex justify-between items-center mb-5">
                <div>
                  <h3 className="text-[17px] font-semibold text-foreground">Piernas + Core</h3>
                  <p className="text-text-muted text-[13px] mt-1">Carlos Mendoza — Lunes</p>
                </div>
                <span className="text-xs text-primary font-semibold bg-primary/12 px-3 py-1 rounded-full">
                  7 ejercicios
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                {clientRoutine.map((ex, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-border hover:border-border-light transition-colors cursor-grab"
                  >
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
        )}
      </div>
    </div>
  );
}
