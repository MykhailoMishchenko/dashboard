import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchAllUsers, usersQueryKeys } from "@/modules/users/api";
import { adaptUsersToStatsCards } from "@/modules/users/lib/adapters";
import type { UsersStatsCardsData } from "@/modules/users/lib/adapters";

export function useUsersStatsCardsManager() {
  const query = useQuery({
    queryKey: usersQueryKeys.stats(),
    queryFn: ({ signal }) => fetchAllUsers({ signal }),
  });

  const data = useMemo<UsersStatsCardsData>(() => {
    const users = query.data?.users ?? [];
    return adaptUsersToStatsCards(users);
  }, [query.data?.users]);

  return { query, data };
}
