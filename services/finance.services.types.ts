import { Category } from "@/interfaces/categories.types";
import { Expenses } from "@/interfaces/expenses.types";

export interface CreateCategoryPayload
  extends Pick<Category, "name" | "limit"> {}

export interface UpdateCategoryPayload extends CreateCategoryPayload {
  id: Category["id"];
}

export interface DeleteCategoryPayload {
  id: Category["id"];
}

export interface CreateExpensePayload extends Omit<Expenses, "id"> {}

export interface UpdateExpensePayload extends CreateExpensePayload {
  id: string;
}

export interface DeleteExpensePayload {
  id: string;
}

export interface CommonResponse {
  data: Category;
}
