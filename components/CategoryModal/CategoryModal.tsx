import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Keyboard } from "react-native";
import { Button, H2, Input, Sheet } from "tamagui";
import { Separator, Theme, View } from "tamagui";
import { Spinner } from "tamagui";
import { XStack, Form } from "tamagui";

import styles from "./CategoryModal.styles";
import { CategoryModalProps as Props } from "./CategoryModal.types";

import { useUpdateCategory } from "@/services/finance.services.hooks";
import { useCreateCategory } from "@/services/finance.services.hooks";
import { useFinanceStore } from "@/stores/finance/finance.store";

const CategoryModal: React.FC<Props> = props => {
  const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync: createCategory, reset } = useCreateCategory();
  const { mutateAsync: updateCategory } = useUpdateCategory();

  const [categoryName, setCategoryName] = useState("");
  const [limit, setLimit] = useState("");
  const categoryModalConfig = useFinanceStore(
    state => state.categoryModalConfig
  );
  const setCategoryModalConfig = useFinanceStore(
    state => state.setCategoryModalConfig
  );

  const { mode, visible, category } = categoryModalConfig;
  const editMode = mode === "update";
  const buttonTitle = editMode ? "Update Category" : "Add Category";

  const title = editMode ? "Edit Category" : "Create Category";
  const handleGoBack = () => {
    setCategoryModalConfig({ visible: false, mode: "create" });
  };

  const setCategory = (value: string) => {
    setCategoryName(value);
  };

  const setLimitText = (value: string) => {
    setLimit(value);
  };

  const resetValues = () => {
    setCategoryName("");
    setLimit("");
  };

  const createCategoryHandler = async () => {
    Keyboard.dismiss();
    try {
      setIsLoading(true);
      if (!categoryName || !limit) {
        Alert.alert(
          "Please fill in all fields",
          "Category name and limit are required"
        );
        return;
      }

      if (!editMode) {
        await createCategory({ name: categoryName, limit: +limit });
      }
      if (editMode) {
        if (!category?.id) {
          Alert.alert(
            "No category id found",
            "Please try again or contact support"
          );
          return;
        }
        await updateCategory({
          id: category?.id,
          name: categoryName,
          limit: +limit
        });
      }
      reset();
      resetValues();
      handleGoBack();
    } catch (e) {
      console.warn(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      setCategoryName(category.name);
      setLimit(category.limit.toString());
    }
  }, [category]);

  return (
    <Sheet
      forceRemoveScrollEnabled={visible}
      modal
      open={visible}
      onOpenChange={(open: boolean) => {
        setCategoryModalConfig({
          ...categoryModalConfig,
          visible: open
        });
      }}
      dismissOnSnapToBottom
      zIndex={100_000}
      snapPointsMode={"fit"}
      animation="medium"
    >
      <Sheet.Overlay
        animation="lazy"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle />
      <Sheet.Frame>
        <View style={styles.container}>
          <Button
            style={styles.close}
            icon={<FontAwesome name="close" size={25} color="black" />}
            size="$5"
            variant="outlined"
            onPress={handleGoBack}
          />
          <View style={styles.createContainer}>
            <H2 style={styles.title}>{title}</H2>
            <Separator marginVertical={15} />
            <Form onSubmit={createCategoryHandler}>
              <XStack overflow="hidden" gap="$2">
                <Input
                  placeholder="category name"
                  width="72%"
                  value={categoryName}
                  onChangeText={setCategory}
                />
                <Input
                  placeholder="limit"
                  width="24%"
                  value={limit}
                  onChangeText={setLimitText}
                />
              </XStack>
              <Theme name="dark">
                <Form.Trigger asChild>
                  <Button
                    icon={
                      isLoading ? (
                        <Spinner size="small" color="$green10" />
                      ) : null
                    }
                    disabled={isLoading}
                    style={styles.button}
                  >
                    {buttonTitle}
                  </Button>
                </Form.Trigger>
              </Theme>
            </Form>
          </View>
        </View>
      </Sheet.Frame>
    </Sheet>
  );
};

CategoryModal.defaultProps = {};

export default CategoryModal;
