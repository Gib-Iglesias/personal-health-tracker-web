"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  CreditCard,
  Dumbbell,
} from "lucide-react";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/clients", label: "Clientes", icon: Users },
  { href: "/admin/sessions", label: "Sesiones", icon: CalendarDays },
  { href: "/admin/payments", label: "Pagos", icon: CreditCard },
  { href: "/admin/routines", label: "Rutinas", icon: Dumbbell },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

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
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl no-underline text-[14px] transition-all duration-200 ${
                  isActive
                    ? "bg-primary/15 text-primary font-semibold"
                    : "bg-transparent text-text-secondary hover:bg-card hover:text-foreground"
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.2 : 1.8} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex-1" />

        {/* User card */}
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

      {/* ── Main Content ── */}
      <div className="flex-1 p-7 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
