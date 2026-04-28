import type {
  Client, Session, Exercise, Transaction, WeeklyData, ProgressEntry,
} from "@/types";

export const mockClients: Client[] = [
  { id: 1, name: "Carlos Mendoza", email: "carlos@email.com", phone: "+52 55 1234 5678", goal: "Ganar masa muscular", weight: 78, targetWeight: 85, sessionsPerWeek: 3, plan: "Mensual", status: "active", progress: 72, avatar: "CM", nextSession: "Hoy 8:00 AM", streak: 12, joinedDate: "15 Ene 2026", bodyFat: 18.5, height: 175, notes: "Lesión previa en hombro derecho" },
  { id: 2, name: "Ana Gutiérrez", email: "ana@email.com", phone: "+52 55 2345 6789", goal: "Perder grasa corporal", weight: 68, targetWeight: 60, sessionsPerWeek: 2, plan: "Semanal", status: "active", progress: 45, avatar: "AG", nextSession: "Mañana 7:00 AM", streak: 8, joinedDate: "3 Feb 2026", bodyFat: 28, height: 163 },
  { id: 3, name: "Diego Ramírez", email: "diego@email.com", phone: "+52 55 3456 7890", goal: "Rehabilitación rodilla", weight: 82, targetWeight: 80, sessionsPerWeek: 1, plan: "Por sesión", status: "active", progress: 30, avatar: "DR", nextSession: "Mié 6:00 PM", streak: 4, joinedDate: "20 Mar 2026", bodyFat: 22, height: 180, notes: "Operación LCA hace 6 meses" },
  { id: 4, name: "Sofía Herrera", email: "sofia@email.com", phone: "+52 55 4567 8901", goal: "Tonificación general", weight: 58, targetWeight: 55, sessionsPerWeek: 2, plan: "Mensual", status: "active", progress: 88, avatar: "SH", nextSession: "Jue 9:00 AM", streak: 21, joinedDate: "10 Dic 2025", bodyFat: 24, height: 158 },
  { id: 5, name: "Roberto Vargas", email: "roberto@email.com", phone: "+52 55 5678 9012", goal: "Preparación maratón", weight: 72, targetWeight: 70, sessionsPerWeek: 3, plan: "Mensual", status: "paused", progress: 60, avatar: "RV", nextSession: "—", streak: 0, joinedDate: "5 Nov 2025", bodyFat: 16, height: 172, notes: "Pausó por viaje de trabajo" },
  { id: 6, name: "María Torres", email: "maria@email.com", phone: "+52 55 6789 0123", goal: "Recuperación post-parto", weight: 65, targetWeight: 58, sessionsPerWeek: 2, plan: "Mensual", status: "active", progress: 35, avatar: "MT", nextSession: "Vie 10:00 AM", streak: 6, joinedDate: "1 Abr 2026", bodyFat: 30, height: 160, notes: "Autorización médica obtenida" },
];

export const todaySessions: Session[] = [
  { id: 1, time: "6:00 AM", client: "Ana Gutiérrez", clientId: 2, type: "Presencial", status: "completed", routine: "Cardio HIIT + Core", duration: 60 },
  { id: 2, time: "8:00 AM", client: "Carlos Mendoza", clientId: 1, type: "Presencial", status: "in_progress", routine: "Piernas + Glúteos", duration: 75 },
  { id: 3, time: "10:00 AM", client: "Sofía Herrera", clientId: 4, type: "Virtual", status: "upcoming", routine: "Full Body", duration: 60 },
  { id: 4, time: "12:00 PM", client: "María Torres", clientId: 6, type: "Presencial", status: "upcoming", routine: "Post-parto + Core", duration: 45 },
  { id: 5, time: "4:00 PM", client: "Diego Ramírez", clientId: 3, type: "Presencial", status: "upcoming", routine: "Rehabilitación", duration: 50 },
  { id: 6, time: "6:00 PM", client: "Carlos Mendoza", clientId: 1, type: "Virtual", status: "upcoming", routine: "Espalda + Bíceps", duration: 60 },
];

export const weeklyRevenue: WeeklyData[] = [
  { day: "Lun", amount: 150 }, { day: "Mar", amount: 200 }, { day: "Mié", amount: 100 },
  { day: "Jue", amount: 250 }, { day: "Vie", amount: 175 }, { day: "Sáb", amount: 300 }, { day: "Dom", amount: 50 },
];

export const monthlyRevenue: WeeklyData[] = [
  { day: "Ene", amount: 1800 }, { day: "Feb", amount: 2100 }, { day: "Mar", amount: 2200 }, { day: "Abr", amount: 2475 },
];

export const clientRoutine: Exercise[] = [
  { name: "Sentadilla con barra", sets: 4, reps: "10-12", weight: "60 kg", rest: "90s", done: true },
  { name: "Prensa de pierna", sets: 4, reps: "12-15", weight: "120 kg", rest: "60s", done: true },
  { name: "Desplantes búlgaros", sets: 3, reps: "10 c/lado", weight: "15 kg", rest: "60s", done: false },
  { name: "Extensión de cuádriceps", sets: 3, reps: "15", weight: "40 kg", rest: "45s", done: false },
  { name: "Curl femoral", sets: 3, reps: "12", weight: "35 kg", rest: "45s", done: false },
  { name: "Elevación de gemelos", sets: 4, reps: "20", weight: "80 kg", rest: "30s", done: false },
  { name: "Plancha abdominal", sets: 3, reps: "45s", weight: "—", rest: "30s", done: false },
];

export const progressData: ProgressEntry[] = [
  { week: "S1", weight: 82, bodyFat: 22 }, { week: "S2", weight: 81.2, bodyFat: 21.5 },
  { week: "S3", weight: 80.5, bodyFat: 21 }, { week: "S4", weight: 80.1, bodyFat: 20.5 },
  { week: "S5", weight: 79.4, bodyFat: 20 }, { week: "S6", weight: 79, bodyFat: 19.5 },
  { week: "S7", weight: 78.5, bodyFat: 19 }, { week: "S8", weight: 78, bodyFat: 18.5 },
];

export const recentTransactions: Transaction[] = [
  { id: 1, client: "Carlos M.", clientId: 1, amount: "$100", date: "27 Abr", status: "paid", plan: "Mensual", method: "Stripe" },
  { id: 2, client: "Sofía H.", clientId: 4, amount: "$100", date: "25 Abr", status: "paid", plan: "Mensual", method: "Transferencia" },
  { id: 3, client: "María T.", clientId: 6, amount: "$100", date: "25 Abr", status: "paid", plan: "Mensual", method: "Stripe" },
  { id: 4, client: "Ana G.", clientId: 2, amount: "$75", date: "24 Abr", status: "paid", plan: "Semanal", method: "Efectivo" },
  { id: 5, client: "Diego R.", clientId: 3, amount: "$50", date: "23 Abr", status: "pending", plan: "Por sesión" },
  { id: 6, client: "Roberto V.", clientId: 5, amount: "$100", date: "20 Abr", status: "refunded", plan: "Mensual", method: "Stripe" },
];
