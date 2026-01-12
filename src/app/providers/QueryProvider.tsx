import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/shared/api/queryClient";
import type { Props } from "./QueryProvider.types";

export function QueryProvider({ children }: Props) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

