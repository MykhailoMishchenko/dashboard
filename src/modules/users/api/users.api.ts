import { UserEndpoints, type UsersResponse } from "@/modules/users/api";

export async function fetchUsers({
  signal,
}: { signal?: AbortSignal } = {}): Promise<UsersResponse> {
  const res = await fetch(UserEndpoints.USERS, { signal });

  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as UsersResponse;
}
