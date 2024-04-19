// Finance store

import { create } from "zustand";

import { defaultValues } from "./finance.store.helpers";
import { FinanceStoreValues } from "./finance.store.types";

import { getStoreSetState } from "@/utils/store.utils";

export const useFinanceStore = create<FinanceStoreValues>((set, get) => {
  return {
    ...defaultValues,
    setSelectedCategoryId: payload => {
      const prev = get().selectedCategoryId;
      const selectedCategoryId = getStoreSetState(payload, prev);
      set({ selectedCategoryId });
    },
    setSelectedExpenseId: payload => {
      const prev = get().selectedExpenseId;
      const selectedExpenseId = getStoreSetState(payload, prev);
      set({ selectedExpenseId });
    },
    setCategoryModalConfig: payload => {
      const prev = get().categoryModalConfig;
      const categoryModalConfig = getStoreSetState(payload, prev);
      set({ categoryModalConfig });
    },
    setExpenseModalConfig: payload => {
      const prev = get().expenseModalConfig;
      const expenseModalConfig = getStoreSetState(payload, prev);
      set({ expenseModalConfig });
    },
    reset: () => set({ ...defaultValues })
  };
});
