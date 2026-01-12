import { themeAlpine } from "ag-grid-community";

export const useCreateTableTheme = () => {
  // Create custom theme with parameters using themeQuartz
  const customTheme = themeAlpine.withParams({
    spacing: 8,
    rowHeight: 32,
    headerHeight: 36,
    fontSize: 13,
  });
  return customTheme;
};
