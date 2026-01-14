import type { ReactNode } from "react";

export type StatsCardTrend = {
  value: string;
  direction: "up" | "down";
};

export type StatsCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  caption?: string;
  icon?: ReactNode;
  trend?: StatsCardTrend;
  className?: string;
};
