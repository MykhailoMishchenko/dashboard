import { ErrorAlert, StatsCard, Skeleton } from "@/shared/ui";
import { useUsersStatsCardsManager } from "@/modules/users/hooks";
import { LineChart } from "@/shared/ui";

export function UsersStats() {
  const { query, data } = useUsersStatsCardsManager();

  if (query.isError) {
    return (
      <ErrorAlert
        title="Failed to load users stats"
        description="Please try again later."
      />
    );
  }

  if (query.isPending) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-background p-6"
          >
            <Skeleton className="h-4 w-24" />
            <Skeleton className="mt-4 h-10 w-40" />
            <Skeleton className="mt-6 h-4 w-52" />
            <Skeleton className="mt-2 h-4 w-40" />
          </div>
        ))}
        <div className="col-span-full h-75 w-full">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {data.statCards.map((card) => (
        <StatsCard key={card.title} {...card} />
      ))}
      <LineChart options={data.lineChart} />
    </div>
  );
}
