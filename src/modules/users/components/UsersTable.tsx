import { ServerTable } from "@/shared/ui/serverTable";
import { useUsersTableManager } from "@/modules/users/hooks";

export function UsersTable() {
  const columns = useUsersTableManager();

  return (
    <ServerTable
      columns={columns}
    />
  );
}
