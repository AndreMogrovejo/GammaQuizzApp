// Finance store types

import { Category } from "@/interfaces/categories.types";
import { Expenses } from "@/interfaces/expenses.types";

export interface FinanceStoreValues {
  selectedCategoryId: Category["id"] | undefined;
  setSelectedCategoryId: (id: Category["id"] | undefined) => void;
  selectedExpenseId: string | undefined;
  setSelectedExpenseId: (id: string | undefined) => void;
  categoryModalConfig: CategoryModalProps;
  setCategoryModalConfig: (payload: CategoryModalProps) => void;
  expenseModalConfig: ExpenseModalProps;
  setExpenseModalConfig: (payload: ExpenseModalProps) => void;
  reset: () => void;
}

export interface CategoryModalProps {
  visible: boolean;
  mode: "create" | "update";
  category?: Category;
}

export interface ExpenseModalProps extends CategoryModalProps {
  expense?: Expenses;
}
