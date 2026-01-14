import type { User } from "@/modules/users/api";
import type { UsersStatsData } from "@/modules/users/lib/adapters";

import { avg } from "@/shared/lib/stats/avg";
import { formatNumber } from "@/shared/lib/stats/formatNumber";
import { median } from "@/shared/lib/stats/median";
import { toNumber } from "@/shared/lib/stats/toNumber";

export function adaptUsersToStats(users: User[]): UsersStatsData[] {
  const ages = users.map((u) => u.age).filter((v) => Number.isFinite(v));
  const heights = users
    .map((u) => toNumber(u.height))
    .filter((v): v is number => v !== null);
  const weights = users
    .map((u) => toNumber(u.weight))
    .filter((v): v is number => v !== null);

  const medianAge = median(ages);
  const avgHeight = avg(heights);
  const avgWeight = avg(weights);

  return [
    {
      title: "Total Users",
      value: String(users.length),
      subtitle: "All users in the system",
      caption: "DummyJSON dataset size",
    },
    {
      title: "Median Age",
      value: formatNumber(medianAge, 0),
      subtitle: "Computed from all users",
      caption: "Median age value",
    },
    {
      title: "Avg Height",
      value: formatNumber(avgHeight, 1),
      subtitle: "Mean height",
      caption: "Based on height field",
    },
    {
      title: "Avg Weight",
      value: formatNumber(avgWeight, 1),
      subtitle: "Mean weight",
      caption: "Based on weight field",
    },
  ];
}
