"use client";

import type { WeeklyData, ProgressEntry } from "@/types";

interface MiniChartProps {
  data: (WeeklyData | ProgressEntry)[];
  color?: string;
  height?: number;
  width?: number;
  id: string;
  showDots?: boolean;
}

export function MiniChart({
  data,
  color = "#0D9488",
  height = 60,
  width = 200,
  id,
  showDots = false,
}: MiniChartProps) {
  const values = data.map(
    (d) => ("amount" in d ? d.amount : "weight" in d ? d.weight : 0)
  );
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const padding = 5;

  const coords = values.map((v, i) => ({
    x: (i / (values.length - 1)) * width,
    y: height - ((v - min) / range) * (height - padding * 2) - padding,
  }));

  const points = coords.map((c) => `${c.x},${c.y}`).join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      style={{ height }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${points} ${width},${height}`}
        fill={`url(#grad-${id})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {showDots &&
        coords.map((c, i) => (
          <circle
            key={i}
            cx={c.x}
            cy={c.y}
            r="3"
            fill={color}
            stroke="#161F2B"
            strokeWidth="2"
          />
        ))}
    </svg>
  );
}
