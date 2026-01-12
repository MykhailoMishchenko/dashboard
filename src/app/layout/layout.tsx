import { QueryProvider } from "@/app/providers/QueryProvider";
import type { Props } from "@/app/layout/layout.types";
import { Toaster } from "@/shared/ui/sonner/sonner";

export function AppLayout({ children }: Props) {
  return (
    <QueryProvider>
      {children}
      <Toaster />
    </QueryProvider>
  );
}
