import type { UsersResponse } from "@/modules/users/api/users.types"

const USERS_URL = "https://dummyjson.com/users"

export async function fetchUsers({ signal }: { signal?: AbortSignal } = {}): Promise<UsersResponse> {
  const res = await fetch(USERS_URL, { signal })

  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`)
  }

  return (await res.json()) as UsersResponse
}

