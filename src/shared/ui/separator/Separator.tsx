import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/shared/lib/utils";
import type { SeparatorProps } from "@/shared/ui/separator/separator.types";

export function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-0.25 w-full" : "h-full w-0.25",
        className
      )}
      {...props}
    />
  );
}
