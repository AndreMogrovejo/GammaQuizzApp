import { animated } from "@react-spring/native";
import React from "react";
import { View } from "react-native";

import styles from "./CategoryPlaceholder.styles";
import { CategoryPlaceholderProps as Props } from "./CategoryPlaceholder.types";

import usePlaceholderAnimation from "@/hooks/usePlaceholderAnimation";

const AnimatedView = animated(View);

const CategoryPlaceholder: React.FC<Props> = props => {
  const animationStyle = usePlaceholderAnimation();

  const renderSection = (key: number) => {
    return (
      <View style={styles.categoryContentPlaceholder} key={key}>
        <View style={styles.left}>
          <AnimatedView
            style={[styles.title, animationStyle]}
            children={null}
          />
          <AnimatedView
            style={[styles.limit, animationStyle]}
            children={null}
          />
        </View>
        <View style={styles.right}>
          <AnimatedView style={[styles.edit, animationStyle]} children={null} />
          <AnimatedView
            style={[styles.delete, animationStyle]}
            children={null}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      {[0, 1, 2, 3, 4].map(idx => {
        return renderSection(idx);
      })}
    </>
  );
};

CategoryPlaceholder.defaultProps = {};

export default CategoryPlaceholder;
