import {
  useCreateTableTheme,
  useGetTableData,
} from "@/shared/ui/serverTable/hooks";
import type { ServerTableOptions } from "@/shared/ui/serverTable";

export function usePrepareTableOptions(): ServerTableOptions {
  const theme = useCreateTableTheme();
  const getData = useGetTableData();

  const options: ServerTableOptions = {
    theme,
    defaultColDef: {
      suppressSizeToFit: true,
      suppressHeaderContextMenu: true,
      suppressHeaderMenuButton: true,
      suppressHeaderFilterButton: true,
      sortable: false,
      filter: false,
      resizable: false,
    },
    rowModelType: "serverSide",
    suppressServerSideFullWidthLoadingRow: true,
    serverSideInitialRowCount: 50,
    pagination: true,
    paginationPageSizeSelector: false,
    paginationPageSize: 50,
    cacheBlockSize: 100,
    maxBlocksInCache: 3,
    maxConcurrentDatasourceRequests: 1,
    suppressCellFocus: true,
    blockLoadDebounceMillis: 200,
    // Maintain column state when columnDefs update
    maintainColumnOrder: true,
    onGridReady: getData,
  };

  return options;
}
