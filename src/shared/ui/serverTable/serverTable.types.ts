import type {
  ColDef,
  GridReadyEvent,
  SortChangedEvent,
} from "ag-grid-community";
import type { AgGridReactProps } from "ag-grid-react";

export type ServerTableProps = {
  columns: ColDef[];
};

export type TableInitializationSlice = {
  endpoint: string | null;
  dataInitialized: boolean;
  setEndpoint: (endpoint: string | null) => void;
  setDataInitialized: (value: boolean) => void;
  reset: () => void;
};

export type UseGetTableDataEvent = GridReadyEvent | SortChangedEvent;

export type DummyJsonUsersResponse = {
  users: unknown[];
  total: number;
};

// Shared table options passed into <AgGridReact {...options} />.
export type ServerTableOptions = Pick<
  AgGridReactProps,
  | "theme"
  | "defaultColDef"
  | "rowModelType"
  | "suppressServerSideFullWidthLoadingRow"
  | "serverSideInitialRowCount"
  | "pagination"
  | "paginationPageSizeSelector"
  | "paginationPageSize"
  | "cacheBlockSize"
  | "maxBlocksInCache"
  | "maxConcurrentDatasourceRequests"
  | "suppressCellFocus"
  | "blockLoadDebounceMillis"
  | "maintainColumnOrder"
  | "onGridReady"
>;
