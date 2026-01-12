import { useQuery } from "@tanstack/react-query"

import { fetchUsers } from "@/modules/users/api/users.api"
import { usersQueryKeys } from "@/modules/users/api/users.queryKeys"

export function useUsersQuery() {
  return useQuery({
    queryKey: usersQueryKeys.list(),
    queryFn: ({ signal }) => fetchUsers({ signal }),
  })
}

