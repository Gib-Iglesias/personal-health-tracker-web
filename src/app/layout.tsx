import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Health Tracker — CRM for Personal Trainers",
  description:
    "All-in-one platform for personal trainers. Manage clients, sessions, routines, and payments in one place.",
  keywords: [
    "personal trainer",
    "fitness CRM",
    "client management",
    "health tracker",
    "workout planner",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
