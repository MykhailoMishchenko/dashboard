import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Register AG Grid modules first before any other imports
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import {
  AllEnterpriseModule,
  ServerSideRowModelModule,
} from "ag-grid-enterprise";

ModuleRegistry.registerModules([
  AllCommunityModule,
  AllEnterpriseModule,
  ServerSideRowModelModule,
]);

import { AppLayout } from "@/app/layout/layout";
import { H1 } from "@/shared/ui";
import { Users } from "@/modules/users";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppLayout>
      <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">
          <header className="space-y-2">
            <H1>Dashboard</H1>
          </header>

          <Users />
        </div>
      </div>
    </AppLayout>
  </StrictMode>
);
