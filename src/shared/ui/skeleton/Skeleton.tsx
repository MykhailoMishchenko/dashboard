import { cn } from "@/shared/lib/utils";
import type { SkeletonProps } from "@/shared/ui/skeleton/skeleton.types";

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
}
