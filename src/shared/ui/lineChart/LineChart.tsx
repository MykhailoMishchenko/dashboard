import { AgCharts } from "ag-charts-react";
import {
  LineSeriesModule,
  CategoryAxisModule,
  LegendModule,
  ModuleRegistry,
  NumberAxisModule,
} from "ag-charts-community";
import type { AgChartOptions } from "ag-charts-community";

ModuleRegistry.registerModules([
  CategoryAxisModule,
  LegendModule,
  LineSeriesModule,
  NumberAxisModule,
]);

export function LineChart({ options }: { options: AgChartOptions }) {
  return (
    <div className="col-span-full">
      <div className="w-full">
        <div className="h-75 w-full">
          <AgCharts options={options} />
        </div>
      </div>
    </div>
  );
}
