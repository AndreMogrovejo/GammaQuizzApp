export const genItems = <T>(
  builder: (overrides?: Partial<T>) => T,
  quantity?: number
): T[] => {
  const num = quantity ?? 10;

  const items: T[] = [];
  for (let i = 0; i < num; i++) {
    items.push(builder());
  }
  return items;
};
