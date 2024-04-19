import { PostgrestSingleResponse } from "@supabase/supabase-js";

import { CreateExpensePayload } from "./finance.services.types";
import { CreateCategoryPayload } from "./finance.services.types";
import { DeleteCategoryPayload } from "./finance.services.types";
import { DeleteExpensePayload } from "./finance.services.types";
import { UpdateCategoryPayload } from "./finance.services.types";
import { UpdateExpensePayload } from "./finance.services.types";

import { supabase } from "@/app/supabase";
import { Category } from "@/interfaces/categories.types";

export const fetchCategories = async () => {
  const response: PostgrestSingleResponse<Category[]> = await supabase
    .from("categories")
    .select("*");

  if (response.error) throw Error(response.error.message);
  if (!response.data) throw new Error("No categories found");
  return response.data;
};

export const fetchCategoryById = async (id: Category["id"]) => {
  const response: PostgrestSingleResponse<Category[]> = await supabase
    .from("categories")
    .select("*")
    .eq("id", id);

  if (response.error) throw Error(response.error.message);
  if (!response.data) throw new Error(`No category ${id} found`);
  return response.data;
};

export const fetchExpenses = async () => {
  const response: PostgrestSingleResponse<any[]> = await supabase
    .from("expenses")
    .select("*");

  if (response.error) throw Error(response.error.message);
  if (!response.data) throw new Error("No expenses found");
  return response.data;
};

export const fetchExpenseById = async (id: string) => {
  const response: PostgrestSingleResponse<any[]> = await supabase
    .from("expenses")
    .select("*")
    .eq("id", id);

  if (response.error) throw Error(response.error.message);
  if (!response.data) throw new Error(`No expense ${id} found`);
  return response.data;
};

export const createCategory = async (payload: CreateCategoryPayload) => {
  const { data } = await supabase.auth.getSession();
  const { id: userId } = data.session?.user ?? {};
  if (!userId) throw Error("No user id");

  const newCategory = { ...payload };

  const response: PostgrestSingleResponse<Category> = await supabase
    .from("categories")
    .insert(newCategory)
    .select()
    .single();

  if (response.error) throw Error(response.error.message);
  return response.data;
};

export const updateCategory = async (payload: UpdateCategoryPayload) => {
  const { name, limit, id } = payload;

  const { data } = await supabase.auth.getSession();
  const { id: userId } = data.session?.user ?? {};
  if (!userId) throw Error("No user id");

  const partialCategory = { name, limit, user_id: userId };

  const response: PostgrestSingleResponse<Category> = await supabase
    .from("categories")
    .update(partialCategory)
    .match({ id })
    .select()
    .single();
  if (response.error) throw Error(response.error.message);
  return response.data;
};

export const deleteCategory = async (payload: DeleteCategoryPayload) => {
  const { id } = payload;
  const response: PostgrestSingleResponse<null> = await supabase
    .from("categories")
    .delete()
    .match({ id });

  if (response.error) throw Error(response.error.message);
};

export const createExpense = async (payload: CreateExpensePayload) => {
  const { data } = await supabase.auth.getSession();
  const { id: userId } = data.session?.user ?? {};
  if (!userId) throw Error("No user id");

  const newExpense = { ...payload };

  const response: PostgrestSingleResponse<any> = await supabase
    .from("expenses")
    .insert(newExpense)
    .select()
    .single();

  if (response.error) throw Error(response.error.message);
  return response.data;
};

export const updateExpense = async (payload: UpdateExpensePayload) => {
  const { amount, description, id } = payload;

  const { data } = await supabase.auth.getSession();
  const { id: userId } = data.session?.user ?? {};
  if (!userId) throw Error("No user id");

  const partialExpense = { amount, description };

  const response: PostgrestSingleResponse<Category> = await supabase
    .from("expenses")
    .update(partialExpense)
    .match({ id })
    .select()
    .single();
  if (response.error) throw Error(response.error.message);
  return response.data;
};

export const deleteExpense = async (payload: DeleteExpensePayload) => {
  const { id } = payload;
  const response: PostgrestSingleResponse<null> = await supabase
    .from("expenses")
    .delete()
    .match({ id });
  if (response.error) throw Error(response.error.message);
};
