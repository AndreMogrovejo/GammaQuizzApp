import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { H2, H5, H6, View } from "tamagui";

import styles from "./CategoryResume.styles";
import { CategoryResumeProps as Props } from "./CategoryResume.types";
import CategoryPlaceholder from "../CategoryPlaceholder/CategoryPlaceholder";

import EmptyState from "@/components/global/EmptyState/EmptyState";
import { Category } from "@/interfaces/categories.types";
import { getCategoriesKey } from "@/services/finance.services.hooks";
import { useFetchCategories } from "@/services/finance.services.hooks";

const CategoryResume: React.FC<Props> = props => {
  const queryClient = useQueryClient();
  const { data: categories, isFetching } = useFetchCategories();

  const onRefresh = () => {
    queryClient.refetchQueries({ queryKey: getCategoriesKey() });
  };

  const renderItem: ListRenderItem<Category> = list => {
    const { item: category } = list;
    const { limit, name } = category;
    return (
      <View style={styles.categoryContainer}>
        <View style={styles.leftContainer}>
          <H5 style={styles.title}>{name}</H5>
          <H6 style={styles.title}>Limit: {limit}</H6>
        </View>
        <View style={styles.rightContainer}></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <H2 style={styles.CategoryTitle}>Your last incomes</H2>
      <View style={styles.flatlist}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
          ListEmptyComponent={
            isFetching ? (
              <CategoryPlaceholder />
            ) : (
              <EmptyState text="No categories found" onPress={onRefresh} />
            )
          }
        />
      </View>
    </View>
  );
};

CategoryResume.defaultProps = {};

export default CategoryResume;
