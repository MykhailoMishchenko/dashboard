import { usePrepareTableOptions } from "@/shared/ui/serverTable/hooks";
import type { ServerTableOptions } from "@/shared/ui/serverTable";

export function useServerTableManager(): ServerTableOptions {
  const options = usePrepareTableOptions();
  return options;
}
