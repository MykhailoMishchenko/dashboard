import { UsersStats, UsersTable } from "@/modules/users/components";
import { H2 } from "@/shared/ui";

export function Users() {
  return (
    <section className="h-full w-full space-y-6">
      <H2>Users</H2>
      <UsersStats />
      <UsersTable />
    </section>
  );
}
