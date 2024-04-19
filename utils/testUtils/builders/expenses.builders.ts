// City builder functions

import { genItems } from "./common.builders";

import { Expenses } from "@/interfaces/expenses.types";

export const buildExpenses = (overrides?: Partial<Expenses>): Expenses => {
  return {
    id: "1",
    amount: 100,
    description: "Buy food",
    category: 1,
    ...overrides
  };
};

export const genExpenses = (quantity?: number): Expenses[] => {
  return genItems(buildExpenses, quantity);
};
