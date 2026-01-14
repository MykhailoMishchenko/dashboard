import type { AreaSeries } from "@/modules/users/lib/adapters";

import type { User } from "@/modules/users/api";

export function usersLineChartAdapter(users: User[]): AreaSeries {
  // the function does: aggregates users by birth year and builds line chart options
  // inputs: users array, returns: AgChartOptions-compatible object
  const countsByYear = new Map<number, number>();

  for (const user of users) {
    const birthDate = user.birthDate;
    if (!birthDate) continue;

    const yearStr = birthDate.split("-")[0];
    const year = Number(yearStr);

    if (!Number.isInteger(year)) continue;

    countsByYear.set(year, (countsByYear.get(year) ?? 0) + 1);
  }

  const data = Array.from(countsByYear.entries())
    .sort(([a], [b]) => a - b)
    .map(([year, count]) => ({ year, count }));

  return {
    title: {
      text: "Birth Year Distribution",
    },
    data,
    series: [
      {
        type: "line",
        xKey: "year",
        yKey: "count",
        yName: "Users",
      },
    ],
  };
}
