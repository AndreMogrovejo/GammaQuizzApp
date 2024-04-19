import React from "react";
import { Button, H5, H6, Theme, View } from "tamagui";
import { Spinner } from "tamagui";

import styles from "./Category.styles";
import { CategoryProps as Props } from "./Category.types";

import { useDeleteCategory } from "@/services/finance.services.hooks";
import { useFinanceStore } from "@/stores/finance/finance.store";

const Category: React.FC<Props> = props => {
  const deleteMutation = useDeleteCategory();
  const { mutateAsync: deleteCategory, reset: resetDelete } = deleteMutation;
  const { isPending } = deleteMutation;
  const { category } = props;
  const { name, limit, id } = category;
  const setCategoryModalConfig = useFinanceStore(
    state => state.setCategoryModalConfig
  );

  const deleteCategoryHandler = async () => {
    try {
      await deleteCategory({ id });
      resetDelete();
    } catch (e) {
      console.warn(e);
    }
  };

  const editCategoryHandler = async () => {
    setCategoryModalConfig({ visible: true, mode: "update", category });
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <H5 style={styles.title}>{name}</H5>
        <H6 style={styles.title}>Limit: {limit}</H6>
      </View>
      <View style={styles.rightContainer}>
        <Button style={styles.title} onPress={editCategoryHandler}>
          Edit
        </Button>
        <Theme name="red">
          <Button
            style={styles.title}
            icon={isPending ? <Spinner size="small" color="$red10" /> : null}
            onPress={deleteCategoryHandler}
          >
            Delete
          </Button>
        </Theme>
      </View>
    </View>
  );
};

Category.defaultProps = {};

export default Category;
