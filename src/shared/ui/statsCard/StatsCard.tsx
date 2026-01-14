import { TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui";
import type { StatsCardProps } from "@/shared/ui/statsCard";

export function StatsCard({
  title,
  value,
  subtitle,
  caption,
  icon,
  trend,
  className,
}: StatsCardProps) {
  const TrendIcon = trend?.direction === "down" ? TrendingDown : TrendingUp;

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>

        {trend ? (
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-1 text-xs font-medium">
            <TrendIcon className="h-3.5 w-3.5" />
            <span>{trend.value}</span>
          </div>
        ) : (
          icon
        )}
      </CardHeader>

      <CardContent>
        <div className="text-3xl font-semibold leading-none tracking-tight">
          {value}
        </div>
      </CardContent>

      {(subtitle || caption) && (
        <CardFooter className="flex flex-col items-start gap-1">
          {subtitle ? (
            <div className="flex items-center gap-2 text-sm font-medium">
              {trend ? <TrendIcon className="h-4 w-4" /> : null}
              <span>{subtitle}</span>
            </div>
          ) : null}
          {caption ? (
            <div className="text-sm text-muted-foreground">{caption}</div>
          ) : null}
        </CardFooter>
      )}
    </Card>
  );
}
