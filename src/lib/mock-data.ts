import type {
  Client, Session, Exercise, Transaction, WeeklyData, ProgressEntry,
} from "@/types";

export const mockClients: Client[] = [
  { id: 1, name: "Carlos Mendoza", email: "carlos@email.com", phone: "+44 7911 123456", goal: "Build muscle mass", weight: 78, targetWeight: 85, sessionsPerWeek: 3, plan: "Monthly", status: "active", progress: 72, avatar: "CM", nextSession: "Today 8:00 AM", streak: 12, joinedDate: "15 Jan 2026", bodyFat: 18.5, height: 175, notes: "Previous right shoulder injury" },
  { id: 2, name: "Ana Gutierrez", email: "ana@email.com", phone: "+44 7911 234567", goal: "Lose body fat", weight: 68, targetWeight: 60, sessionsPerWeek: 2, plan: "Weekly", status: "active", progress: 45, avatar: "AG", nextSession: "Tomorrow 7:00 AM", streak: 8, joinedDate: "3 Feb 2026", bodyFat: 28, height: 163 },
  { id: 3, name: "Diego Ramirez", email: "diego@email.com", phone: "+44 7911 345678", goal: "Knee rehabilitation", weight: 82, targetWeight: 80, sessionsPerWeek: 1, plan: "Per session", status: "active", progress: 30, avatar: "DR", nextSession: "Wed 6:00 PM", streak: 4, joinedDate: "20 Mar 2026", bodyFat: 22, height: 180, notes: "ACL surgery 6 months ago" },
  { id: 4, name: "Sofia Herrera", email: "sofia@email.com", phone: "+44 7911 456789", goal: "General toning", weight: 58, targetWeight: 55, sessionsPerWeek: 2, plan: "Monthly", status: "active", progress: 88, avatar: "SH", nextSession: "Thu 9:00 AM", streak: 21, joinedDate: "10 Dec 2025", bodyFat: 24, height: 158 },
  { id: 5, name: "Roberto Vargas", email: "roberto@email.com", phone: "+44 7911 567890", goal: "Marathon prep", weight: 72, targetWeight: 70, sessionsPerWeek: 3, plan: "Monthly", status: "paused", progress: 60, avatar: "RV", nextSession: "—", streak: 0, joinedDate: "5 Nov 2025", bodyFat: 16, height: 172, notes: "Paused due to work trip" },
  { id: 6, name: "Maria Torres", email: "maria@email.com", phone: "+44 7911 678901", goal: "Postpartum recovery", weight: 65, targetWeight: 58, sessionsPerWeek: 2, plan: "Monthly", status: "active", progress: 35, avatar: "MT", nextSession: "Fri 10:00 AM", streak: 6, joinedDate: "1 Apr 2026", bodyFat: 30, height: 160, notes: "Medical clearance obtained" },
];

export const todaySessions: Session[] = [
  { id: 1, time: "6:00 AM", client: "Ana Gutierrez", clientId: 2, type: "In-person", status: "completed", routine: "HIIT Cardio + Core", duration: 60 },
  { id: 2, time: "8:00 AM", client: "Carlos Mendoza", clientId: 1, type: "In-person", status: "in_progress", routine: "Legs + Glutes", duration: 75 },
  { id: 3, time: "10:00 AM", client: "Sofia Herrera", clientId: 4, type: "Virtual", status: "upcoming", routine: "Full Body", duration: 60 },
  { id: 4, time: "12:00 PM", client: "Maria Torres", clientId: 6, type: "In-person", status: "upcoming", routine: "Postpartum + Core", duration: 45 },
  { id: 5, time: "4:00 PM", client: "Diego Ramirez", clientId: 3, type: "In-person", status: "upcoming", routine: "Rehabilitation", duration: 50 },
  { id: 6, time: "6:00 PM", client: "Carlos Mendoza", clientId: 1, type: "Virtual", status: "upcoming", routine: "Back + Biceps", duration: 60 },
];

export const weeklyRevenue: WeeklyData[] = [
  { day: "Mon", amount: 150 }, { day: "Tue", amount: 200 }, { day: "Wed", amount: 100 },
  { day: "Thu", amount: 250 }, { day: "Fri", amount: 175 }, { day: "Sat", amount: 300 }, { day: "Sun", amount: 50 },
];

export const monthlyRevenue: WeeklyData[] = [
  { day: "Jan", amount: 1800 }, { day: "Feb", amount: 2100 }, { day: "Mar", amount: 2200 }, { day: "Apr", amount: 2475 },
];

export const clientRoutine: Exercise[] = [
  { name: "Barbell Squat", sets: 4, reps: "10-12", weight: "60 kg", rest: "90s", done: true },
  { name: "Leg Press", sets: 4, reps: "12-15", weight: "120 kg", rest: "60s", done: true },
  { name: "Bulgarian Split Squat", sets: 3, reps: "10 each", weight: "15 kg", rest: "60s", done: false },
  { name: "Leg Extension", sets: 3, reps: "15", weight: "40 kg", rest: "45s", done: false },
  { name: "Hamstring Curl", sets: 3, reps: "12", weight: "35 kg", rest: "45s", done: false },
  { name: "Calf Raise", sets: 4, reps: "20", weight: "80 kg", rest: "30s", done: false },
  { name: "Plank Hold", sets: 3, reps: "45s", weight: "—", rest: "30s", done: false },
];

export const progressData: ProgressEntry[] = [
  { week: "W1", weight: 82, bodyFat: 22 }, { week: "W2", weight: 81.2, bodyFat: 21.5 },
  { week: "W3", weight: 80.5, bodyFat: 21 }, { week: "W4", weight: 80.1, bodyFat: 20.5 },
  { week: "W5", weight: 79.4, bodyFat: 20 }, { week: "W6", weight: 79, bodyFat: 19.5 },
  { week: "W7", weight: 78.5, bodyFat: 19 }, { week: "W8", weight: 78, bodyFat: 18.5 },
];

export const recentTransactions: Transaction[] = [
  { id: 1, client: "Carlos M.", clientId: 1, amount: "£100", date: "27 Apr", status: "paid", plan: "Monthly", method: "Stripe" },
  { id: 2, client: "Sofia H.", clientId: 4, amount: "£100", date: "25 Apr", status: "paid", plan: "Monthly", method: "Transfer" },
  { id: 3, client: "Maria T.", clientId: 6, amount: "£100", date: "25 Apr", status: "paid", plan: "Monthly", method: "Stripe" },
  { id: 4, client: "Ana G.", clientId: 2, amount: "£75", date: "24 Apr", status: "paid", plan: "Weekly", method: "Cash" },
  { id: 5, client: "Diego R.", clientId: 3, amount: "£50", date: "23 Apr", status: "pending", plan: "Per session" },
  { id: 6, client: "Roberto V.", clientId: 5, amount: "£100", date: "20 Apr", status: "refunded", plan: "Monthly", method: "Stripe" },
];
