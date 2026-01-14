import type { AgChartOptions } from "ag-charts-community";

export type UsersStatsCardsData = {
  statCards: UsersStatsData[];
  lineChart: AreaSeries;
};

export type AreaSeries = AgChartOptions;

export type UsersStatsData = {
  title: string;
  value: string;
  subtitle: string;
  caption: string;
};
