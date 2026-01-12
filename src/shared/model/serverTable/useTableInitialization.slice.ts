import { create } from "zustand";
import type { TableInitializationSlice } from "@/shared/ui/serverTable";

export const useTableInitializationSlice = create<TableInitializationSlice>(
  (set) => ({
    endpoint: null,
    dataInitialized: false,

    setEndpoint: (endpoint) => {
      set({ endpoint, dataInitialized: false });
    },

    setDataInitialized: (value) => {
      set({ dataInitialized: value });
    },

    reset: () => {
      set({ endpoint: null, dataInitialized: false });
    },
  })
);
