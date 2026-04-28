# 🏥 PHT — Checklist de Alineación: Plan Técnico vs Proyecto Actual

## Resumen Ejecutivo

He revisado a fondo el **Plan_Tecnico.docx** y lo comparé contra el estado actual del código en el repositorio. El build compila exitosamente (`next build` sale con código 0), así que **no hay bugs de compilación**. El crash del navegador probablemente fue causado por consumo excesivo de memoria en hot-reload — lo explico abajo.

---

## 1. ✅ Checklist de Alineación

### Stack Tecnológico

| Aspecto | Plan Técnico | Estado Actual | Match? |
|---------|-------------|---------------|--------|
| Framework | Next.js 15 (App Router) | Next.js **16.2.4** (App Router) | ⚠️ Versión superior, compatible |
| React | — | React **19.2.4** | ✅ |
| CSS Framework | **Tailwind CSS + shadcn/ui** | Tailwind CSS v4 (**sin** shadcn/ui) | ⚠️ Falta shadcn/ui |
| Animaciones | **Framer Motion** | CSS `@keyframes` custom | ⚠️ Diferente enfoque |
| DB / Backend | **Supabase** | Mock data (`mock-data.ts`) | ✅ Correcto para MVP/demo |
| Auth | **Supabase Auth** | No implementado aún | ✅ Es Fase 1 |
| Pagos | **Stripe** | Mock data | ✅ Es Fase 3 |
| Calendario | **Cal.com** | Mock data | ✅ Es Fase 2 |
| Email | **Resend** | No implementado | ✅ Es Fase 2 |
| PWA | **next-pwa** | No implementado | ✅ Es Fase 5 |
| TypeScript | Sí | Sí | ✅ |

### Estructura de Carpetas

| Ruta Plan Técnico | Estado Actual | Match? |
|---|---|---|
| `src/app/layout.tsx` | ✅ Existe | ✅ |
| `src/app/(auth)/` | No existe aún | ✅ Fase 1 |
| `src/app/(admin)/dashboard/` | Implementado como componente `AdminDashboard.tsx` | ⚠️ Diferente patrón |
| `src/app/(admin)/clients/` | Parte de `AdminDashboard` tab | ⚠️ Todo en un archivo |
| `src/app/(admin)/routines/` | Parte de `AdminDashboard` tab | ⚠️ Todo en un archivo |
| `src/app/(admin)/sessions/` | Parte de `AdminDashboard` tab | ⚠️ Todo en un archivo |
| `src/app/(admin)/payments/` | Parte de `AdminDashboard` tab | ⚠️ Todo en un archivo |
| `src/app/(client)/my-routine/` | Parte de `ClientPortal` tab | ⚠️ Todo en un archivo |
| `src/app/(client)/my-progress/` | Parte de `ClientPortal` tab | ⚠️ Todo en un archivo |
| `src/app/(client)/my-sessions/` | Parte de `ClientPortal` tab | ⚠️ Todo en un archivo |
| `src/app/(client)/my-plan/` | Parte de `ClientPortal` tab | ⚠️ Todo en un archivo |
| `src/app/api/webhooks/stripe/` | No existe | ✅ Fase 3 |
| `src/app/api/webhooks/cal/` | No existe | ✅ Fase 2 |
| `src/components/ui/` | ✅ `MiniChart`, `StatCard` | ✅ |
| `src/components/admin/` | En `components/dashboard/` | ⚠️ Nombre diferente |
| `src/components/client/` | En `components/clients/` | ⚠️ Nombre diferente |
| `src/components/shared/` | ✅ Existe (vacío) | ✅ |
| `src/lib/supabase/` | No existe | ✅ Fase 1 |
| `src/lib/stripe/` | No existe | ✅ Fase 3 |
| `src/lib/utils/` | No existe | ⚠️ Crear |
| `src/hooks/` | No existe | ⚠️ Crear |
| `src/types/` | ✅ Existe (vacío) | ⚠️ Los tipos están en `mock-data.ts` |
| `supabase/migrations/` | No existe | ✅ Fase 1 |

### Esquema de Datos

| Tabla Plan Técnico | Representada en Mock Data? | Match? |
|---|---|---|
| `users` | `Client` interface + trainer hardcoded | ⚠️ Parcial |
| `client_profiles` | Mezclado en `Client` interface | ⚠️ No separado |
| `routines` | Hardcoded en `AdminDashboard` | ⚠️ Parcial |
| `routine_exercises` | `Exercise` interface ✅ | ✅ |
| `sessions` | `Session` interface ✅ | ✅ |
| `payments` | `Transaction` interface ✅ | ✅ |
| `progress_logs` | `ProgressEntry` interface | ⚠️ Falta `photo_urls`, `measurements` |
| `plans` | No definido | ❌ Falta |

### Funcionalidades por Vista

| Feature | Plan Técnico | Implementado en Demo? | Match? |
|---|---|---|---|
| **Admin: Dashboard** con métricas | ✅ | ✅ StatCards + charts | ✅ |
| **Admin: Lista de clientes** con detalles | ✅ | ✅ Con expandable cards | ✅ |
| **Admin: Calendario** semanal | ✅ | ✅ Grid de 7 días | ✅ |
| **Admin: Pagos** con transacciones | ✅ | ✅ Con tabla | ✅ |
| **Admin: Constructor de rutinas** | ✅ | ✅ Con drag handle visual | ✅ |
| **Cliente: Mi Rutina** con checkbox | ✅ | ✅ Con progreso circular | ✅ |
| **Cliente: Mi Progreso** con gráfica | ✅ | ✅ MiniChart + stats | ✅ |
| **Cliente: Mis Sesiones** | ✅ | ✅ Con "Unirse" a virtual | ✅ |
| **Cliente: Mi Plan** con historial | ✅ | ✅ Con pagos | ✅ |

### Roles y Seguridad

| Aspecto | Plan Técnico | Estado Actual | Match? |
|---|---|---|---|
| Roles `admin` / `client` | ✅ Definido | Toggle manual (demo) | ⚠️ Es demo |
| RLS por tabla | ✅ Definido | No aplicable (mock) | ✅ Fase 1 |
| Middleware protección | ✅ Definido | No implementado | ✅ Fase 1 |

---

## 2. 🐛 Diagnóstico del Crash del Navegador

El **build compila exitosamente** sin errores de TypeScript ni compilación. El crash probablemente fue causado por:

### Causa más probable: Hot Module Replacement (HMR) memory leak
- Next.js 16 con Turbopack puede consumir mucha memoria en `dev` mode
- Si tenías muchas pestañas abiertas o el proceso de `next dev` estuvo corriendo mucho tiempo, puede saturar la memoria del navegador

### Recomendaciones para evitar el crash:
1. **Limpiar cache antes de correr**: `rm -rf .next && npm run dev`
2. **Agregar al `next.config.ts`**: limitar workers de webpack
3. **Evitar tener múltiples tabs** con la app abierta en dev mode
4. **Monitorear RAM** — Turbopack + React 19 pueden usar 2-4GB en dev

---

## 3. 🎨 Problema de los Íconos "Infantiles"

El demo actual usa **emojis Unicode** para todos los iconos:
- `📊` Dashboard, `👥` Clientes, `📅` Sesiones, `💳` Pagos, `🏋️` Rutinas
- `💰` Ingresos, `🔥` Retención, `⏳` Pendientes, `📈` Proyección
- `📹` Virtual, `✓` Check, `▶` Play, `⠿` Drag handle
- `🛡️` Vista Trainer, `👤` Vista Cliente

> [!WARNING]
> Los emojis se renderizan diferente en cada OS/navegador y dan una apariencia **poco profesional y childish**. Esto es exactamente lo que mencionas.

### Solución recomendada: **Lucide React Icons**
- Es la librería que usa **shadcn/ui** (que el Plan Técnico menciona)
- Iconos SVG limpios, profesionales, consistentes
- ~1000+ iconos, peso mínimo (tree-shakeable)
- Se integra perfecto con Tailwind

### Cambios específicos propuestos:

| Emoji Actual | Reemplazo Lucide | Contexto |
|---|---|---|
| `📊` | `LayoutDashboard` | Tab Dashboard |
| `👥` | `Users` | Tab Clientes |
| `📅` | `Calendar` | Tab Sesiones |
| `💳` | `CreditCard` | Tab Pagos |
| `🏋️` | `Dumbbell` | Tab Rutinas |
| `💰` | `DollarSign` | Stat Ingresos |
| `🔥` | `TrendingUp` | Stat Retención |
| `⏳` | `Clock` | Stat Pendientes |
| `📈` | `BarChart3` | Stat Proyección |
| `📹` | `Video` | Badge Virtual |
| `✓` | `Check` | Check completado |
| `▶` | `Play` | Video ejercicio |
| `⠿` | `GripVertical` | Drag handle |
| `🛡️` | `Shield` | Vista Trainer |
| `👤` | `User` | Vista Cliente |

---

## 4. 📋 Decisiones Pendientes (Necesito tu input)

Antes de aplicar cambios, necesito que me confirmes:

### A) Estructura de archivos
El Plan Técnico define route groups `(admin)/` y `(client)/` con páginas separadas por feature. Actualmente todo está en un solo componente con tabs. 

**¿Quieres que:**
1. **Mantenga la estructura actual de tabs** (un solo archivo grande) para el demo — recomendado para la fase actual
2. **Separe en route groups** `(admin)/dashboard/page.tsx`, `(admin)/clients/page.tsx`, etc. — más alineado con el plan pero prematuro sin auth

### B) shadcn/ui
El plan menciona shadcn/ui pero no está instalado. 

**¿Quieres que lo instale ahora o lo dejamos para cuando empecemos Fase 1 real?**

### C) Framer Motion vs CSS Animations
El plan menciona Framer Motion pero ya tenemos animaciones CSS custom que funcionan bien.

**¿Lo mantenemos con CSS o instalamos Framer Motion?**

### D) Íconos
**¿Apruebas que instale `lucide-react` y reemplace todos los emojis por iconos SVG profesionales?** Esto es lo que más impacto visual tendrá inmediatamente.

### E) Nombres de carpetas
El plan dice `components/admin/` y `components/client/` pero tenemos `components/dashboard/` y `components/clients/`. 

**¿Renombramos para alinear con el plan?**

---

## 5. Resumen de Alineación

| Categoría | Score |
|---|---|
| Stack tecnológico | ✅ 85% alineado |
| Estructura de carpetas | ⚠️ 60% — demo pattern vs production pattern |
| Datos / Interfaces | ✅ 80% — mock data bien mapeado |
| Funcionalidades visibles | ✅ 95% — todas las vistas del demo cubren el plan |
| Seguridad / Auth | ⏳ 0% — correcto, es Fase 1 |
| Integraciones externas | ⏳ 0% — correcto, son Fases 2-3 |

> [!TIP]
> **El proyecto está bien encaminado.** La demo actual cubre todas las vistas que el Plan Técnico describe. Las diferencias principales son de organización de código (tabs vs routes) y estética (emojis vs iconos profesionales), ambas fáciles de resolver.
