import { cn } from "@/shared/lib/utils";
import { badgeVariants } from "@/shared/ui/badge/badge.variants";
import type { BadgeProps } from "@/shared/ui/badge/badge.types";

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
