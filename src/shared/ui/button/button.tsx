import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/shared/lib/utils";
import { buttonVariants } from "@/shared/ui/button/button.variants";
import type { ButtonProps } from "@/shared/ui/button/button.types";

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
