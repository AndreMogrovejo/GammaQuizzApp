// Questions service interfaces and types

export interface Question {
  created_at: string;
  id: number;
  question_name: string;
  question_type: string;
  quiz_id: number;
}

export interface Quizz {
  active: boolean;
  category_id: number;
  created_at: string;
  description: string;
  id: number;
  title: string;
}

export interface Answer {
  answer_name: string;
  created_at: string;
  id: number;
  is_answer: boolean;
  question_id: number;
}
