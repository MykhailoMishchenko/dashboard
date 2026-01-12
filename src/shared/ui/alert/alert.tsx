import { cn } from "@/shared/lib/utils"
import { alertVariants } from "@/shared/ui/alert/alert.variants"
import type {
  AlertDescriptionProps,
  AlertProps,
  AlertTitleProps,
} from "@/shared/ui/alert/alert.types"

export function Alert({ className, variant, ...props }: AlertProps) {
  return <div role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <h5 className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  )
}

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return <div className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
}
