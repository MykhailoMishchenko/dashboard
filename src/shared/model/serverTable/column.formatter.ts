import type { ColumnFormatterType } from "@/shared/model/serverTable";

class ColumnFormatter implements ColumnFormatterType {
  /**
   * Formats a user name with optional maiden name
   * @param firstName - The first name of the user (can be null)
   * @param lastName - The last name of the user (can be null)
   * @param maidenName - The maiden name of the user (can be null)
   * @returns Formatted user name with optional maiden name (e.g., "John Doe (Smith)") or "-" if input is null
   */
  readonly formattedUserName = (
    firstName: string | undefined,
    lastName: string | undefined,
    maidenName: string | undefined
  ) => {
    if (!firstName || !lastName) {
      return "-";
    }
    if (maidenName) {
      return `${firstName} ${lastName} (${maidenName})`;
    }
    return `${firstName} ${lastName}`;
  };

  /**
   * Formats a weight with optional unit
   * @param weight - The weight to format (can be null)
   * @returns Formatted weight with optional unit (e.g., "75 kg") or "-" if input is null
   */
  readonly formattedWeight = (weight: string | undefined) => {
    if (!weight) {
      return "-";
    }
    return `${weight} kg`;
  };

  /**
   * Formats a height with optional unit
   * @param height - The height to format (can be null)
   * @returns Formatted height with optional unit (e.g., "180 cm") or "-" if input is null
   */
  readonly formattedHeight = (height: string | undefined) => {
    if (!height) {
      return "-";
    }
    return `${height} cm`;
  };

  /**
   * Formats a role
   * @param role - The role to format (can be null)
   * @returns Formatted role or "No role" if input is null
   */
  readonly formattedRole = (role: string | undefined | null) => {
    if (!role) {
      return "No role";
    }
    return role;
  };

  private constructor() {}

  private static instance: ColumnFormatter;

  public static getInstance(): Readonly<ColumnFormatter> {
    if (!ColumnFormatter.instance) {
      ColumnFormatter.instance = new ColumnFormatter();
    }
    return ColumnFormatter.instance;
  }
}

export const columnFormatter: Readonly<ColumnFormatter> =
  ColumnFormatter.getInstance();
