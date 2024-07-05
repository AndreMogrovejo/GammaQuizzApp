import React from "react";
import { View, Text } from "react-native";

import styles from "./QuizzesHeader.styles";
import { QuizzesHeaderProps as Props } from "./QuizzesHeader.types";
import { Button, H1, Theme } from "tamagui";

const QuizzesHeader: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <H1>Quizzes</H1>

      <Theme name="dark">
        <Button>Add Quiz</Button>
      </Theme>
    </View>
  );
};

export default QuizzesHeader;
