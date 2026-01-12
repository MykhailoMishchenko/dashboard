import { Badge } from "@/shared/ui";
import type { Props } from "@/modules/users/components/CellRole";
import { getRoleBadgeVariant } from "@/modules/users/lib/roleBadge";
import { columnFormatter } from "@/shared/model/serverTable";

export function CellRole(props: Props) {
  const role = columnFormatter.formattedRole(props.value);
  return (
    <Badge
      variant={getRoleBadgeVariant(role)}
      className="w-full justify-center uppercase"
    >
      {role}
    </Badge>
  )
}