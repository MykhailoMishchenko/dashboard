export function createQueryKey(
  namespace: string,
  ...parts: readonly unknown[]
) {
  return [namespace, ...parts] as const;
}
