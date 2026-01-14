import { cn } from "@/shared/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/alert/alert";
import type { ErrorAlertProps } from "@/shared/ui/errorAlert/errorAlert.types";

export function ErrorAlert({ title, description, className }: ErrorAlertProps) {
  return (
    <Alert variant="destructive" className={cn("w-full", className)}>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
