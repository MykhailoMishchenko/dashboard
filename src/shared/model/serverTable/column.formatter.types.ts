export type ColumnFormatterType = {
  readonly formattedUserName: (
    firstName: string | undefined,
    lastName: string | undefined,
    maidenName: string | undefined
  ) => string;
};
