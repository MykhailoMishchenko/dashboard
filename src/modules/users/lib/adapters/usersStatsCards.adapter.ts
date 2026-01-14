import type { User } from "@/modules/users/api";

import { adaptUsersToStats } from "@/modules/users/lib/adapters/usersStats.adapter";
import type { UsersStatsCardsData } from "@/modules/users/lib/adapters/usersStatsCards.types";
import { usersLineChartAdapter } from "@/modules/users/lib/adapters";

export function adaptUsersToStatsCards(users: User[]): UsersStatsCardsData {
  return {
    statCards: adaptUsersToStats(users),
    lineChart: usersLineChartAdapter(users),
  };
}
