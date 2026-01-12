import type { HTMLAttributes } from "react"
import type { VariantProps } from "class-variance-authority"

import type { badgeVariants } from "@/shared/ui/badge/badge.variants"

export type BadgeProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants> & {}

export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"]

