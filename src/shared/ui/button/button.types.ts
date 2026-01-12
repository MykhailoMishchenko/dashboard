import type * as React from "react";
import type { VariantProps } from "class-variance-authority";

import type { buttonVariants } from "@/shared/ui/button/button.variants";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
