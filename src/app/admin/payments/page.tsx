"use client";
import { DollarSign, Clock, BarChart3, Check } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import { MiniChart } from "@/components/ui/MiniChart";
import { weeklyRevenue, recentTransactions } from "@/lib/mock-data";

export default function PaymentsPage() {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-foreground mb-6">Billing & Payments</h2>
      <div className="flex gap-4 mb-6 flex-wrap stagger-children">
        <StatCard icon={<DollarSign />} label="April Revenue" value="£2,475" sub="15 transactions" accentColor="#0D9488"
          chart={<MiniChart data={weeklyRevenue} color="#0D9488" id="pay-rev" />} />
        <StatCard icon={<Clock />} label="Pending Payments" value="£150" sub="2 to collect" accentColor="#F59E0B" />
        <StatCard icon={<BarChart3 />} label="May Forecast" value="£3,200" sub="+29% growth" accentColor="#0EA5E9" />
      </div>
      <div className="card-base p-6">
        <h3 className="text-[17px] font-semibold text-foreground mb-4">Recent Transactions</h3>
        {recentTransactions.map((tx, i) => (
          <div key={tx.id} className={`flex items-center py-3 ${i < recentTransactions.length - 1 ? "border-b border-border" : ""}`}>
            <span className="flex-1 text-foreground text-sm font-medium">{tx.client}</span>
            <span className="text-text-muted text-[13px] min-w-[100px]">{tx.plan}</span>
            <span className="text-text-muted text-[13px] min-w-[80px]">{tx.date}</span>
            {tx.method && <span className="text-text-muted text-xs min-w-[80px]">{tx.method}</span>}
            <span className="font-bold text-[15px] text-foreground min-w-[70px] text-right">{tx.amount}</span>
            <span className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ml-3 ${
              tx.status === "paid" ? "bg-success/15 text-success" : tx.status === "pending" ? "bg-warning/15 text-warning" : "bg-danger/10 text-danger"
            }`}>
              {tx.status === "paid" ? <><Check size={11} /> Paid</> : tx.status === "pending" ? "Pending" : tx.status === "overdue" ? "Overdue" : "Refunded"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
