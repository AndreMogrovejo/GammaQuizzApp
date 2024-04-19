import React from "react";
import { Button, View } from "tamagui";
import { H5, Text, Theme } from "tamagui";

import styles from "./Expenses.styles";
import { ExpensesProps as Props } from "./Expenses.types";

import { useDeleteExpense } from "@/services/finance.services.hooks";
import { useFinanceStore } from "@/stores/finance/finance.store";

const Expenses: React.FC<Props> = props => {
  const { expenses } = props;
  const { amount, description, category, id } = expenses;
  const deleteMutation = useDeleteExpense();
  const { mutateAsync: deleteExpense, reset: resetDelete } = deleteMutation;

  const setExpenseModalConfig = useFinanceStore(
    state => state.setExpenseModalConfig
  );

  const deleteCategoryHandler = async () => {
    try {
      await deleteExpense({ id });
      resetDelete();
    } catch (e) {
      console.warn(e);
    }
  };

  const editCategoryHandler = async () => {
    setExpenseModalConfig({ visible: true, mode: "update", expense: expenses });
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <H5 style={styles.title}>{description}</H5>
        <View style={styles.descriptionInformation}>
          <Text style={styles.amount}>Amount: {amount}</Text>
          <Text style={styles.category}>Category: {category}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Button style={styles.button} onPress={editCategoryHandler}>
          Edit
        </Button>
        <Theme name="red">
          <Button style={styles.button} onPress={deleteCategoryHandler}>
            Delete
          </Button>
        </Theme>
      </View>
    </View>
  );
};

Expenses.defaultProps = {};

export default Expenses;
