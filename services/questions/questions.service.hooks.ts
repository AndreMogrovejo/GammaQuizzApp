import { useQuery } from "@tanstack/react-query";
import { fetchAnswers } from "./questions.service";
import { fetchQuestions, fetchQuizzes } from "./questions.service";

export const getExpensesKey = () => {
  return ["expenses"];
};

export const useFetchQuizzes = () => {
  return useQuery({
    queryKey: ["quizzes"],
    queryFn: fetchQuizzes,
    enabled: true,
  });
};

export const useFetchQuestions = (quizId: number) => {
  return useQuery({
    queryKey: ["quizzes", quizId, "questions"],
    queryFn: () => fetchQuestions(quizId),
    enabled: true,
  });
};

export const useFetchAnswers = (questionId: number) => {
  return useQuery({
    queryKey: ["questions", questionId, "answers"],
    queryFn: () => fetchAnswers(questionId),
    enabled: true,
  });
};
