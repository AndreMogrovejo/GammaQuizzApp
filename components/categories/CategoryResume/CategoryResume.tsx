import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FlatList, ListRenderItem, TouchableOpacity } from "react-native";
import { H3, H5, H6, View } from "tamagui";

import styles from "./CategoryResume.styles";
import { CategoryResumeProps as Props } from "./CategoryResume.types";
import CategoryPlaceholder from "../CategoryPlaceholder/CategoryPlaceholder";

import EmptyState from "@/components/global/EmptyState/EmptyState";
import { Category } from "@/interfaces/categories.types";
import { getCategoriesKey } from "@/services/finance.services.hooks";
import { useFetchCategories } from "@/services/finance.services.hooks";
import { useFetchQuizzes } from "@/services/questions/questions.service.hooks";
import { Quizz } from "@/services/questions/questions.service.types";
import BlurBox from "@/components/BlurBox/BlurBox";

const CategoryResume: React.FC<Props> = (props) => {
  const queryClient = useQueryClient();
  const { data: categories, isFetching } = useFetchCategories();
  const { data: quizzes, isFetching: isFetchingQuizz } = useFetchQuizzes();

  const onRefresh = () => {
    queryClient.refetchQueries({ queryKey: getCategoriesKey() });
  };

  const renderCategoryItem: ListRenderItem<Category> = (list) => {
    const { item: category } = list;
    const { name } = category;
    return (
      <TouchableOpacity style={styles.categoryContent}>
        <BlurBox customStyle={styles.categoryContainer}>
          <View style={styles.leftContainer}>
            <H5 style={styles.title}>{name}</H5>
          </View>
          <View style={styles.rightContainer}></View>
        </BlurBox>
      </TouchableOpacity>
    );
  };

  const renderQuizzItem: ListRenderItem<Quizz> = (list) => {
    const { item: category } = list;
    const { title, active } = category;
    if (!active) return <></>;
    return (
      <TouchableOpacity style={styles.categoryContent}>
        <BlurBox customStyle={styles.categoryContainer}>
          <View style={styles.leftContainer}>
            <H5 style={styles.title}>{title}</H5>
          </View>
          <View style={styles.rightContainer}></View>
        </BlurBox>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <H3 style={styles.CategoryTitle}>Categorías comunes</H3>
      <View style={styles.flatlist}>
        <FlatList
          // TODO: change to fetch only 5 elements
          data={categories?.slice(0, 5)}
          renderItem={renderCategoryItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={
            isFetching ? (
              <CategoryPlaceholder />
            ) : (
              <EmptyState text="No categories found" onPress={onRefresh} />
            )
          }
        />
      </View>
      <H3 style={(styles.CategoryTitle, { marginTop: 24 })}>Últimos Quizzes</H3>
      <View style={styles.flatlist}>
        <FlatList
          // TODO: change to fetch only 5 elements
          data={quizzes?.slice(0, 5)}
          renderItem={renderQuizzItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_item, index) => index.toString()}
          ListEmptyComponent={
            isFetchingQuizz ? (
              <CategoryPlaceholder />
            ) : (
              <EmptyState text="No quizzes found" onPress={onRefresh} />
            )
          }
        />
      </View>
    </View>
  );
};

CategoryResume.defaultProps = {};

export default CategoryResume;
