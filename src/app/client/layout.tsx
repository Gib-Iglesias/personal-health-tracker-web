"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, TrendingUp, CalendarDays, CreditCard, Flame, ArrowLeft } from "lucide-react";

const navItems = [
  { href: "/client/my-routine", label: "My Routine", icon: Dumbbell },
  { href: "/client/my-progress", label: "My Progress", icon: TrendingUp },
  { href: "/client/my-sessions", label: "My Sessions", icon: CalendarDays },
  { href: "/client/my-plan", label: "My Plan", icon: CreditCard },
];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="px-7 py-6 max-w-[920px] mx-auto animate-fade-in">
      {/* Back to Home */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] text-text-muted hover:text-foreground no-underline mb-4 transition-colors"
      >
        <ArrowLeft size={14} />
        Back to Home
      </Link>

      {/* Client Header */}
      <div className="card-base p-5 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center text-lg font-bold text-white">
            CM
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">Carlos Mendoza</div>
            <div className="flex items-center gap-1.5 text-[13px] text-text-muted">
              Build muscle mass
              <span className="inline-flex items-center gap-0.5 text-warning">
                <Flame size={13} /> 12-day streak
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="text-center">
            <div className="text-xl font-bold text-primary">78 kg</div>
            <div className="text-[11px] text-text-muted">Current weight</div>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <div className="text-xl font-bold text-secondary">85 kg</div>
            <div className="text-[11px] text-text-muted">Target</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-1 mb-6 bg-surface rounded-2xl p-1 border border-border">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl no-underline text-[13px] transition-all duration-200 ${
                isActive
                  ? "bg-card text-primary font-semibold shadow-md"
                  : "bg-transparent text-text-muted hover:text-text-secondary"
              }`}
            >
              <Icon size={15} strokeWidth={isActive ? 2.2 : 1.8} />
              {item.label}
            </Link>
          );
        })}
      </div>

      {children}
    </div>
  );
}
