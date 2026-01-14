import { UserEndpoints, type UsersResponse } from "@/modules/users/api";

export async function fetchAllUsers({
  signal,
}: { signal?: AbortSignal } = {}): Promise<UsersResponse> {
  const url = new URL(UserEndpoints.USERS);
  url.searchParams.set("limit", "0");

  const res = await fetch(url.toString(), { signal });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch all users: ${res.status} ${res.statusText}`
    );
  }

  return (await res.json()) as UsersResponse;
}
