import React from "react";
import { View, Text } from "react-native";

import styles from "./QuizItem.styles";
import { QuizItemProps as Props } from "./QuizItem.types";
import { Button, H4, H6, Paragraph, Theme } from "tamagui";

const QuizItem: React.FC<Props> = (props) => {
  const { quiz } = props;

  const { title, description, category } = quiz ?? {};
  const { name: categoryName } = category ?? {};

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <H4>{title}</H4>
        <Paragraph numberOfLines={1}>{description}</Paragraph>
        <H6>{categoryName}</H6>
      </View>

      <View style={styles.right}>
        <Button>Edit</Button>
        <Theme name="red">
          <Button>Delete</Button>
        </Theme>
      </View>
    </View>
  );
};

export default QuizItem;
