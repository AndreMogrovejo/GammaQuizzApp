import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./RecentQuizCard.styles";
import { RecentQuizCardProps as Props } from "./RecentQuizCard.types";
import { useFetchQuizzes } from "@/services/questions/questions.service.hooks";
import { router } from "expo-router";

const RECENT_QUIZ = {
  title: "A Basic Music Quiz",
  percentage: 80,
};

const RecentQuizCard: React.FC<Props> = (props) => {
  const { percentage } = RECENT_QUIZ;
  const { data } = useFetchQuizzes();

  const activeQuiz = data?.filter((quiz) => quiz.active) ?? [];
  const [quiz] = activeQuiz ?? [];

  const navigateQuizDetail = () => {
    router.push(`/quizz/${quiz.id}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateQuizDetail}>
      <View>
        <Text style={styles.title}>RECENT QUIZ</Text>
        <Text style={styles.nameQuiz}>{quiz?.title ?? ""}</Text>
      </View>

      <Text>{percentage}%</Text>
    </TouchableOpacity>
  );
};

export default RecentQuizCard;
