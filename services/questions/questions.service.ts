// Questions services

import { supabase } from "@/app/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

export const fetchQuizzes = async () => {
  const response: PostgrestSingleResponse<any[]> = await supabase
    .from("quizzes")
    .select("*");

  if (response.error) throw Error(response.error.message);

  return response.data;
};

export const fetchQuestions = async (quizId: number) => {
  const response: PostgrestSingleResponse<any[]> = await supabase
    .from("questions")
    .select("*")
    .eq("quiz_id", quizId);

  if (response.error) throw Error(response.error.message);

  return response.data;
};

export const fetchAnswers = async (questionId: number) => {
  const response: PostgrestSingleResponse<any[]> = await supabase
    .from("answers")
    .select("*")
    .eq("question_id", questionId);

  if (response.error) throw Error(response.error.message);

  return response.data;
};
