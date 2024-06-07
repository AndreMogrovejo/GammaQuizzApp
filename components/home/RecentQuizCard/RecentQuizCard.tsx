import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./RecentQuizCard.styles";
import { RecentQuizCardProps as Props } from "./RecentQuizCard.types";

const RECENT_QUIZ = {
  title: "A Basic Music Quiz",
  percentage: 80,
};

const RecentQuizCard: React.FC<Props> = (props) => {
  const { title, percentage } = RECENT_QUIZ;

  const navigateQuizDetail = () => {
    console.log("Navigate to quiz detail");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateQuizDetail}>
      <View>
        <Text style={styles.title}>RECENT QUIZ</Text>
        <Text style={styles.nameQuiz}>{title ?? ""}</Text>
      </View>

      <Text>{percentage}%</Text>
    </TouchableOpacity>
  );
};

export default RecentQuizCard;
