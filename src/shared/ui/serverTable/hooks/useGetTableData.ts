import { useMemo, useRef } from "react";
import type {
  GridApi,
  IServerSideGetRowsParams,
  IServerSideDatasource,
} from "ag-grid-community";

import { queryClient } from "@/shared/api/queryClient";
import { createQueryKey } from "@/shared/api/queryKeys";
import { useTableInitializationSlice } from "@/shared/ui/serverTable/hooks";
import type {
  DummyJsonUsersResponse,
  UseGetTableDataEvent,
} from "@/shared/ui/serverTable";

export function useGetTableData() {
  const gridApiRef = useRef<GridApi | null>(null);
  const hasMarkedInitializedRef = useRef(false);

  const createServerSideDatasource = useMemo((): IServerSideDatasource => {
    const getServerRows = async (params: IServerSideGetRowsParams) => {
      params.api.hideOverlay();

      const { endpoint, setDataInitialized } =
        useTableInitializationSlice.getState();

      // If table options are not ready, do not attempt a request.
      if (!endpoint) {
        params.success({ rowData: [], rowCount: 0 });
        return;
      }

      const startRow = params.request.startRow ?? 0;
      const endRow = params.request.endRow ?? startRow + 50;
      const skip = startRow;
      const limit = Math.max(endRow - startRow, 0);

      try {
        const data = await queryClient.fetchQuery({
          queryKey: createQueryKey("serverTable", endpoint, { skip, limit }),
          queryFn: async ({ signal }) => {
            const url = new URL(endpoint);
            url.searchParams.set("limit", String(limit));
            url.searchParams.set("skip", String(skip));

            const res = await fetch(url.toString(), { signal });
            if (!res.ok) {
              throw new Error(
                `Failed to fetch table rows: ${res.status} ${res.statusText}`
              );
            }
            return (await res.json()) as DummyJsonUsersResponse;
          },
        });

        if (!hasMarkedInitializedRef.current) {
          hasMarkedInitializedRef.current = true;
          setDataInitialized(true);
        }

        const rows = Array.isArray(data.users) ? data.users : [];
        const total = typeof data.total === "number" ? data.total : rows.length;

        if (rows.length === 0) {
          params.api.showNoRowsOverlay();
          params.success({ rowData: [], rowCount: 0 });
          return;
        }

        params.success({ rowData: rows, rowCount: total });
      } catch {
        const { setDataInitialized } = useTableInitializationSlice.getState();

        if (!hasMarkedInitializedRef.current) {
          hasMarkedInitializedRef.current = true;
          setDataInitialized(true);
        }

        params.api.showNoRowsOverlay();
        params.success({ rowData: [], rowCount: 0 });
      }
    };

    return {
      getRows(params) {
        void getServerRows(params);
      },
    };
  }, []);

  const getData = (event: UseGetTableDataEvent) => {
    gridApiRef.current = event.api;
    hasMarkedInitializedRef.current = false;
    event.api.setGridOption("serverSideDatasource", createServerSideDatasource);
  };

  return getData;
}
