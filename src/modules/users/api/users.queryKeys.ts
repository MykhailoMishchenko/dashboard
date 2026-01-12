import { createQueryKey } from "@/shared/api/queryKeys";

export const usersQueryKeys = {
  all: () => createQueryKey("users"),
  list: () => createQueryKey("users", "list"),
} as const;
