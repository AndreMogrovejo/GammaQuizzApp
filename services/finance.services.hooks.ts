import { useQuery, useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { createExpense, deleteCategory } from "./finance.services";
import { fetchCategoryById, fetchExpenseById } from "./finance.services";
import { deleteExpense, fetchCategories } from "./finance.services";
import { updateCategory, updateExpense } from "./finance.services";
import { createCategory, fetchExpenses } from "./finance.services";
import { CommonResponse } from "./finance.services.types";
import { UpdateCategoryPayload } from "./finance.services.types";
import { CreateCategoryPayload } from "./finance.services.types";
import { CreateExpensePayload } from "./finance.services.types";
import { UpdateExpensePayload } from "./finance.services.types";
import { DeleteCategoryPayload } from "./finance.services.types";
import { DeleteExpensePayload } from "./finance.services.types";

export const getCategoriesKey = () => {
  return ["categories"];
};

export const getExpensesKey = () => {
  return ["expenses"];
};

export const useFetchCategories = () => {
  return useQuery({
    queryKey: getCategoriesKey(),
    queryFn: fetchCategories,
    enabled: true
  });
};

export const useFetchCategory = (categoryId: string) => {
  return useQuery({
    queryKey: ["categories", { categoryId }],
    queryFn: () => fetchCategoryById(+categoryId),
    enabled: !!categoryId
  });
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation<CommonResponse["data"], Error, CreateCategoryPayload>({
    mutationFn: payload => createCategory(payload),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getCategoriesKey()
      })
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation<CommonResponse["data"], Error, UpdateCategoryPayload>({
    mutationFn: payload => updateCategory(payload),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getCategoriesKey()
      })
  });
};

export const useFetchExpenses = () => {
  return useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
    enabled: true
  });
};

export const useFetchExpensesByCategoryId = (categoryId: string) => {
  return useQuery({
    queryKey: ["expenses", { categoryId }],
    queryFn: () => fetchExpenseById(categoryId),
    enabled: !!categoryId
  });
};

export const useCreateExpense = () => {
  const queryClient = useQueryClient();

  return useMutation<CommonResponse["data"], Error, CreateExpensePayload>({
    mutationFn: payload => createExpense(payload),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getExpensesKey()
      })
  });
};

export const useUpdateExpense = () => {
  const queryClient = useQueryClient();

  return useMutation<CommonResponse["data"], Error, UpdateExpensePayload>({
    mutationFn: payload => updateExpense(payload),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getExpensesKey()
      })
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, DeleteCategoryPayload>({
    mutationFn: payload => deleteCategory(payload),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getCategoriesKey()
      })
  });
};

export const useDeleteExpense = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, DeleteExpensePayload>({
    mutationFn: payload => deleteExpense(payload),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getExpensesKey()
      })
  });
};
