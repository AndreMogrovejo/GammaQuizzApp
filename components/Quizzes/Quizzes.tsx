import React from "react";
import { View } from "react-native";

import styles from "./Quizzes.styles";
import { QuizzesProps as Props } from "./Quizzes.types";
import QuizzesHeader from "./QuizzesHeader/QuizzesHeader";
import QuizzesList from "./QuizzesList/QuizzesList";

const Quizzes: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <QuizzesHeader />
      <QuizzesList />
    </View>
  );
};

export default Quizzes;
