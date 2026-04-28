"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  CreditCard,
  Dumbbell,
  ArrowLeft,
} from "lucide-react";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/clients", label: "Clients", icon: Users },
  { href: "/admin/sessions", label: "Sessions", icon: CalendarDays },
  { href: "/admin/payments", label: "Billing", icon: CreditCard },
  { href: "/admin/routines", label: "Routines", icon: Dumbbell },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen">
      {/* ── Sidebar ── */}
      <aside className="w-[240px] bg-surface border-r border-border p-5 flex flex-col shrink-0">
        <Link href="/" className="flex items-center gap-3 px-2 mb-2 no-underline group">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center text-white font-extrabold text-sm">
            P
          </div>
          <div>
            <div className="font-bold text-[15px] text-foreground">PHT</div>
            <div className="text-[11px] text-primary font-medium">
              Control Panel
            </div>
          </div>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 px-3.5 py-2 mb-4 rounded-xl no-underline text-[13px] text-text-muted hover:text-foreground hover:bg-card transition-all"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

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

        <div className="p-3.5 rounded-2xl card-base">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-white">
              JL
            </div>
            <div>
              <div className="text-[13px] font-semibold text-foreground">
                John Lopez
              </div>
              <div className="text-[11px] text-primary font-medium">
                Trainer
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
