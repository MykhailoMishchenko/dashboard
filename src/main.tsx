import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { toast } from "sonner";
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
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  H1,
  H2,
  Muted,
  P,
} from "@/shared/ui";
import { Users } from "@/modules/users";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppLayout>
      <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">
          <header className="space-y-2">
            <H1>Dashboard UI Kit</H1>
            <Muted>
              Base shadcn components + typography, responsive out of the box.
            </Muted>
          </header>

          <section className="space-y-3">
            <H2>Users</H2>
            <Users />
          </section>

          <section className="space-y-3">
            <H2>Buttons</H2>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                onClick={() =>
                  toast("Saved", {
                    description: "Your settings were saved successfully.",
                  })
                }
              >
                Show toast
              </Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <P className="max-w-prose">
              On small screens buttons stack; from{" "}
              <span className="font-medium">sm</span> they wrap in a row.
            </P>
          </section>

          <section className="space-y-3">
            <H2>Alert</H2>
            <Alert className="max-w-prose">
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>
                This alert is styled with shadcn tokens and scales nicely on any
                screen.
              </AlertDescription>
            </Alert>
          </section>

        </div>
      </div>
    </AppLayout>
  </StrictMode>
);
