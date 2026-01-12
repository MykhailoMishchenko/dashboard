import { useUsersTableColumns } from "./useUsersTableColumns";
import { useEffect } from "react";
import { useTableInitializationSlice } from "@/shared/model/serverTable";
import { UserEndpoints } from "@/modules/users/api";

export function useUsersTableManager() {
  const columns = useUsersTableColumns();

  const { setEndpoint } = useTableInitializationSlice();

  useEffect(() => {
    setEndpoint(UserEndpoints.USERS);
  }, [setEndpoint]);

  return columns;
}