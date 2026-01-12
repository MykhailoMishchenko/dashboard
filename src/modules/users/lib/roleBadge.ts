import type { BadgeVariant } from "@/shared/ui"

export function getRoleBadgeVariant(role: string | null | undefined): BadgeVariant {
  switch (role) {
    case "admin":
      return "default"
    case "moderator":
      return "secondary"
    case "user":
      return "outline"
    default:
      return "outline"
  }
}

