# Dashboard (Frontend)

A small dashboard app built with **Vite + React + TypeScript**, with a **Users** feature module that demonstrates:

- **UsersStats**: stats cards + line chart built from a single dataset (React Query + adapters)
- **UsersTable**: an **AG Grid server-side row model** table fed by a shared server table layer (Zustand endpoint + React Query cache)

## Tech stack

- **App**: React, TypeScript, Vite
- **Styling**: Tailwind CSS (v4), `clsx` + `tailwind-merge` (`cn()` helper)
- **Data fetching / caching**: TanStack React Query
- **Client state**: Zustand (table initialization slice)
- **Tables**: AG Grid (community + enterprise), Server-Side Row Model
- **Charts**: AG Charts
- **UI primitives**: Radix Slot (for `asChild` patterns), CVA (class-variance-authority)

## Scripts

```bash
npm install

npm run dev
npm run build
npm run preview

npm run lint
npm run format
npm run format:check
```

## Path aliases

The project uses a Vite alias:

- `@` → `src` (see `vite.config.ts`)

## Source structure

At a high level, `src/` is split into 3 layers:

- `src/app/`: **app shell**
  - `layout/`: `AppLayout` wraps the app with providers and global UI (e.g. Toaster)
  - `providers/`: global providers (currently React Query)
- `src/modules/`: **feature modules**
  - `users/`: the Users feature (API, hooks, components, adapters)
- `src/shared/`: **reusable building blocks**
  - `api/`: shared React Query client and helpers for query keys
  - `model/`: shared state slices (Zustand)
  - `ui/`: reusable UI kit components (Button, Card, Typography, ServerTable, etc.)
  - `lib/`: small utilities and stat helpers (avg/median/formatNumber/toNumber)

## App composition

The entry point renders the app layout and the Users feature:

- `src/main.tsx`
  - registers AG Grid modules (must happen before grid usage)
  - renders `AppLayout` and then `Users`

```mermaid
flowchart TD
  main[src/main.tsx] --> layout[src/app/layout/layout.tsx]
  layout --> queryProvider[src/app/providers/QueryProvider.tsx]
  main --> usersPage[src/modules/users/pages/Users.tsx]
  usersPage --> usersStats[src/modules/users/components/usersStats/UsersStats.tsx]
  usersPage --> usersTable[src/modules/users/components/usersTable/UsersTable.tsx]
```

## UsersStats data flow (React Query → adapters → UI)

**Intent**: fetch the full Users dataset once, then derive UI-ready view models:

- stat cards: `adaptUsersToStats(users)`
- chart options: `usersLineChartAdapter(users)`

Key files:

- `src/modules/users/hooks/useUsersStatsCardsManager.ts`
- `src/modules/users/lib/adapters/usersStatsCards.adapter.ts`
- `src/modules/users/lib/adapters/usersStats.adapter.ts`
- `src/modules/users/lib/adapters/usersLineChart.adapter.ts`

```mermaid
sequenceDiagram
  participant UsersStats as UsersStats
  participant RQ as ReactQuery
  participant API as fetchAllUsers
  participant Adapter as adaptUsersToStatsCards
  participant UI as StatsCard_LineChart

  UsersStats->>RQ: useQuery(usersQueryKeys.stats)
  RQ->>API: fetchAllUsers(signal)
  API-->>RQ: UsersResponse
  RQ-->>UsersStats: query.data.users
  UsersStats->>Adapter: adaptUsersToStatsCards(users)
  Adapter-->>UsersStats: {statCards,lineChart}
  UsersStats->>UI: render cards + chart
```

## UsersTable data flow (Zustand endpoint → AG Grid SSRM → React Query cache)

**Intent**: keep the table generic (`shared/ui/serverTable`), and let feature modules set:

- table endpoint (Zustand slice)
- table column definitions (feature hook)

Key files:

- `src/modules/users/hooks/useUsersTableManager.ts` (sets endpoint)
- `src/modules/users/hooks/useUsersTableColumns.tsx` (defines columns + formatters)
- `src/shared/model/serverTable/useTableInitialization.slice.ts` (endpoint + init flags)
- `src/shared/ui/serverTable/hooks/usePrepareTableOptions.ts` (AG Grid options)
- `src/shared/ui/serverTable/hooks/useGetTableData.ts` (SSRM datasource + React Query fetch)

```mermaid
sequenceDiagram
  participant UsersTable as UsersTable
  participant Slice as TableInitializationSlice
  participant ServerTable as ServerTable
  participant Grid as AgGridReact
  participant DSS as ServerSideDatasource
  participant RQ as ReactQuery_queryClient

  UsersTable->>Slice: setEndpoint(UserEndpoints.USERS)
  UsersTable->>ServerTable: columns
  ServerTable->>Grid: rowModelType=serverSide + onGridReady
  Grid->>DSS: getRows(startRow,endRow)
  DSS->>Slice: getState().endpoint
  DSS->>RQ: fetchQuery(key: serverTable, endpoint, skip, limit)
  RQ-->>DSS: {users,total}
  DSS-->>Grid: success(rowData,rowCount)
```

### Notes

- The endpoint for Users is currently hard-coded in `src/modules/users/api/users.types.ts`:
  - `https://dummyjson.com/users`
  - The server-side table uses `limit` and `skip` query params.

- The table uses React Query **as a cache layer** (`queryClient.fetchQuery(...)`) keyed by endpoint + pagination window.

## License

MIT — see `LICENSE`.
