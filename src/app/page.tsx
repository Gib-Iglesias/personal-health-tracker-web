import Link from "next/link";
import { Shield, User, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white font-extrabold text-2xl shadow-lg mb-6">
        P
      </div>
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Personal Health Tracker
      </h1>
      <p className="text-text-muted text-sm mb-10 text-center max-w-md">
        Plataforma integral para entrenadores personales. Selecciona una vista para explorar el demo.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/admin/dashboard" className="group card-interactive p-6 min-w-[280px] no-underline">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
              <Shield size={20} className="text-primary" />
            </div>
            <h2 className="text-lg font-bold text-foreground">Vista Entrenador</h2>
          </div>
          <p className="text-text-muted text-sm mb-4">
            Dashboard, gestión de clientes, sesiones, rutinas y facturación.
          </p>
          <span className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
            Entrar <ArrowRight size={14} />
          </span>
        </Link>

        <Link href="/client/my-routine" className="group card-interactive p-6 min-w-[280px] no-underline">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
              <User size={20} className="text-secondary" />
            </div>
            <h2 className="text-lg font-bold text-foreground">Vista Cliente</h2>
          </div>
          <p className="text-text-muted text-sm mb-4">
            Tu rutina, progreso, próximas citas y plan de pago.
          </p>
          <span className="flex items-center gap-1 text-secondary text-sm font-semibold group-hover:gap-2 transition-all">
            Entrar <ArrowRight size={14} />
          </span>
        </Link>
      </div>

      <p className="text-text-muted text-xs mt-12">Demo v1.0 — Datos de ejemplo</p>
    </div>
  );
}
