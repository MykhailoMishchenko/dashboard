import { useUsersQuery } from "@/modules/users/api/users.queries"
import { Alert, AlertDescription, AlertTitle, Button, H2, Muted } from "@/shared/ui"

export function UsersSection() {
  const usersQuery = useUsersQuery()

  if (usersQuery.isPending) {
    return (
      <section className="space-y-3">
        <H2>Users</H2>
        <Muted>Loading…</Muted>
      </section>
    )
  }

  if (usersQuery.isError) {
    return (
      <section className="space-y-3">
        <H2>Users</H2>
        <Alert variant="destructive" className="max-w-prose">
          <AlertTitle>Failed to load users</AlertTitle>
          <AlertDescription>
            {usersQuery.error instanceof Error ? usersQuery.error.message : "Unknown error"}
          </AlertDescription>
        </Alert>
        <div>
          <Button onClick={() => usersQuery.refetch()} variant="outline">
            Retry
          </Button>
        </div>
      </section>
    )
  }

  const users = usersQuery.data.users

  return (
    <section className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <H2>Users</H2>
          <Muted>Showing {users.length} users (DummyJSON).</Muted>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => usersQuery.refetch()} variant="outline">
            Refresh
          </Button>
        </div>
      </div>

      <ul className="divide-y divide-border rounded-lg border border-border bg-background">
        {users.map((u) => (
          <li key={u.id} className="flex items-center gap-3 p-3 sm:p-4">
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border bg-muted sm:h-12 sm:w-12">
              {u.image ? (
                <img
                  src={u.image}
                  alt={`${u.firstName} ${u.lastName}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : null}
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-medium sm:text-base">
                {u.firstName} {u.lastName}
              </div>
              <div className="truncate text-sm text-muted-foreground">{u.email}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

