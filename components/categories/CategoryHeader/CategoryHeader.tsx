import React from "react";
import { Button, H2 } from "tamagui";
import { Separator, Theme, View } from "tamagui";

import styles from "./CategoryHeader.styles";
import { CategoryHeaderProps as Props } from "./CategoryHeader.types";

import CategoryModal from "@/components/CategoryModal/CategoryModal";
import { useFinanceStore } from "@/stores/finance/finance.store";

const CategoryHeader: React.FC<Props> = props => {
  const setCategoryModalConfig = useFinanceStore(
    state => state.setCategoryModalConfig
  );
  const handleCreateCategory = () => {
    setCategoryModalConfig({ visible: true, mode: "create" });
  };

  return (
    <View style={styles.container}>
      <H2 style={styles.title}>Categories</H2>
      <Separator marginVertical={16} />
      <Theme name="dark">
        <Button style={styles.button} onPress={handleCreateCategory}>
          Add Category
        </Button>
      </Theme>
      <CategoryModal />
    </View>
  );
};

CategoryHeader.defaultProps = {};

export default CategoryHeader;
