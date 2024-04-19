import { useQueryClient } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, ListRenderItem, Platform } from "react-native";
import { View } from "tamagui";

import styles from "./CategoriesPage.styles";
import { CategoriesPageProps as Props } from "./CategoriesPage.types";
import CategoryHeader from "../CategoryHeader/CategoryHeader";
import CategoryPlaceholder from "../CategoryPlaceholder/CategoryPlaceholder";

import CategoryItem from "@/components/categories/Category/Category";
import EmptyState from "@/components/global/EmptyState/EmptyState";
import { Category } from "@/interfaces/categories.types";
import { getCategoriesKey } from "@/services/finance.services.hooks";
import { useFetchCategories } from "@/services/finance.services.hooks";

const CategoriesPage: React.FC<Props> = props => {
  const queryClient = useQueryClient();
  const { data: categories, isFetching } = useFetchCategories();

  const onRefresh = () => {
    queryClient.refetchQueries({ queryKey: getCategoriesKey() });
  };

  const renderItem: ListRenderItem<Category> = list => {
    const { item: category } = list;
    return <CategoryItem category={category} />;
  };

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <View>
        <CategoryHeader />
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
          style={styles.contentContainer}
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

CategoriesPage.defaultProps = {};

export default CategoriesPage;
