import React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";

import styles from "./QuizzesList.styles";
import { QuizzesListProps as Props } from "./QuizzesList.types";
import { useFetchQuizzes } from "@/services/questions/questions.service.hooks";
import { Button } from "tamagui";
import QuizItem from "./QuizItem/QuizItem";

const QuizzesList: React.FC<Props> = (props) => {
  const { data, status } = useFetchQuizzes();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <QuizItem quiz={item} />}
        ListEmptyComponent={
          <>
            {status === "pending" ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : null}

            {status === "error" ? <Text>Error</Text> : null}

            {status === "success" ? <Text>No quizzes found</Text> : null}
          </>
        }
      />
    </View>
  );
};

export default QuizzesList;
