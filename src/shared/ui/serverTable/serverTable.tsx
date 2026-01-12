import type { ServerTableProps } from "@/shared/ui/serverTable";
import { AgGridReact } from "ag-grid-react";
import { useServerTableManager } from "@/shared/ui/serverTable/hooks";

export function ServerTable({ columns }: ServerTableProps) {
  const options = useServerTableManager();

  return (
    <div className="w-full h-150">
      <AgGridReact columnDefs={columns} {...options} />
    </div>
  );
}
