import { cn } from "@/shared/lib/utils";
import type { BaseProps } from "@/shared/ui/typography";

export function H1({ className, ...props }: BaseProps<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl",
        className
      )}
      {...props}
    />
  );
}

export function H2({ className, ...props }: BaseProps<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-xl font-semibold leading-snug tracking-tight sm:text-2xl lg:text-3xl",
        className
      )}
      {...props}
    />
  );
}

export function H3({ className, ...props }: BaseProps<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold leading-snug tracking-tight sm:text-xl lg:text-2xl",
        className
      )}
      {...props}
    />
  );
}

export function P({ className, ...props }: BaseProps<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-foreground sm:text-base",
        className
      )}
      {...props}
    />
  );
}

export function Muted({
  className,
  ...props
}: BaseProps<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-muted-foreground sm:text-base",
        className
      )}
      {...props}
    />
  );
}
