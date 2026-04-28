export type UserRole = "admin" | "client";
export type SessionStatus = "completed" | "in_progress" | "upcoming" | "cancelled";
export type SessionType = "In-person" | "Virtual";
export type PaymentStatus = "paid" | "pending" | "refunded" | "overdue";
export type PlanType = "Monthly" | "Weekly" | "Per session";
export type ClientStatus = "active" | "paused" | "inactive";

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  goal: string;
  weight: number;
  targetWeight: number;
  sessionsPerWeek: number;
  plan: PlanType;
  status: ClientStatus;
  progress: number;
  avatar: string;
  nextSession: string;
  streak: number;
  joinedDate: string;
  bodyFat?: number;
  height?: number;
  notes?: string;
}

export interface Session {
  id: number;
  time: string;
  client: string;
  clientId: number;
  type: SessionType;
  status: SessionStatus;
  routine: string;
  duration: number;
  notes?: string;
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  weight: string;
  rest: string;
  done: boolean;
  videoUrl?: string;
}

export interface Transaction {
  id: number;
  client: string;
  clientId: number;
  amount: string;
  date: string;
  status: PaymentStatus;
  plan: string;
  method?: string;
}

export interface WeeklyData {
  day: string;
  amount: number;
}

export interface ProgressEntry {
  week: string;
  weight: number;
  bodyFat?: number;
}
