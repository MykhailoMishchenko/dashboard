import type { ICellRendererParams } from "ag-grid-community";
import type { User } from "@/modules/users/api/users.types";

export type Props = ICellRendererParams<User, string> & {};
