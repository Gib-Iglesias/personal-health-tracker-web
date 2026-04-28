"use client";
import { Check } from "lucide-react";

const paymentHistory = [
  { date: "1 Apr 2026", amount: "£100", status: "Paid" },
  { date: "1 Mar 2026", amount: "£100", status: "Paid" },
  { date: "1 Feb 2026", amount: "£75", status: "Paid" },
];

export default function MyPlanPage() {
  return (
    <div className="card-base p-6">
      <h3 className="text-lg font-semibold text-foreground mb-5">My Plan</h3>
      <div className="p-5 rounded-2xl mb-5 bg-gradient-to-br from-primary/15 to-secondary/10 border border-primary-dark">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-[11px] text-text-muted uppercase font-semibold tracking-widest">Current Plan</div>
            <div className="text-xl font-bold text-foreground mt-1">Monthly — 3 sessions/week</div>
            <div className="text-[13px] text-text-secondary mt-1">Auto-renewal: 1 May 2026</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-extrabold text-primary">£100</div>
            <div className="text-xs text-text-muted">/month</div>
          </div>
        </div>
      </div>
      <h4 className="text-[15px] font-semibold text-foreground mb-3">Payment History</h4>
      {paymentHistory.map((p, i) => (
        <div key={i} className={`flex items-center justify-between py-3 ${i < paymentHistory.length - 1 ? "border-b border-border" : ""}`}>
          <span className="text-text-secondary text-[13px]">{p.date}</span>
          <span className="text-foreground text-sm font-semibold">{p.amount}</span>
          <span className="flex items-center gap-1 text-[11px] text-success font-semibold"><Check size={12} /> {p.status}</span>
        </div>
      ))}
    </div>
  );
}
