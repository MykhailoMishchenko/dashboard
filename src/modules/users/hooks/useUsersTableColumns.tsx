import { columnFormatter } from "@/modules/users/lib/columnFormatter";
import { useMemo } from "react";
import { CellRole } from "@/modules/users/components";
import type { User } from "@/modules/users/api";
import { COLUMN_SIZE } from "@/shared/constants";
import type { ValueFormatterParams } from "ag-grid-community";

export function useUsersTableColumns() {
  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", maxWidth: COLUMN_SIZE.SM },
      {
        field: "name",
        headerName: "Name",
        valueFormatter: (row: ValueFormatterParams<User>) => {
          const { firstName, lastName, maidenName } = row.data ?? {};
          return columnFormatter.formattedUserName(
            firstName,
            lastName,
            maidenName
          );
        },
      },
      { field: "email", headerName: "Email", minWidth: COLUMN_SIZE.LG },
      { field: "role", headerName: "Role", cellRenderer: CellRole },
      { field: "age", headerName: "Age" },
      {
        field: "weight",
        headerName: "Weight",
        valueFormatter: (row: ValueFormatterParams<User>) => {
          const { weight } = row.data ?? {};
          return columnFormatter.formattedWeight(weight);
        },
      },
      {
        field: "height",
        headerName: "Height",
        valueFormatter: (row: ValueFormatterParams<User>) => {
          const { height } = row.data ?? {};
          return columnFormatter.formattedHeight(height);
        },
      },
    ],
    []
  );

  return columns;
}
