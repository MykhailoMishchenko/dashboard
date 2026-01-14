import { createQueryKey } from "@/shared/api/queryKeys";

export const usersQueryKeys = {
  stats: () => createQueryKey("users", "stats"),
} as const;
