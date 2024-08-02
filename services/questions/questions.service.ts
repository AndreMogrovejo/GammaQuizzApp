// Questions services

import { supabase } from "@/app/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Question, Quizz, Answer } from "./questions.service.types";

export const fetchQuizzes = async () => {
  const response: PostgrestSingleResponse<any[]> = await supabase.from(
    "quizzes"
  ).select(`
    *,
    category:categories (
      name
    )
  `);

  if (response.error) throw Error(response.error.message);

  return response.data;
};

export const fetchQuestions = async (quizId: number): Promise<Question[]> => {
  const response: PostgrestSingleResponse<any[]> = await supabase
    .from("questions")
    .select("*")
    .eq("quiz_id", quizId);

  if (response.error) throw Error(response.error.message);

  return response.data;
};

export const fetchAnswers = async (questionId: number): Promise<Answer[]> => {
  const response: PostgrestSingleResponse<any[]> = await supabase
    .from("answers")
    .select("*")
    .eq("question_id", questionId);

  if (response.error) throw Error(response.error.message);

  return response.data;
};
