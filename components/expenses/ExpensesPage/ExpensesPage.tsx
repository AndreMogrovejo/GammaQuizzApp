import { useQueryClient } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, ListRenderItem, Platform } from "react-native";
import { Button, H2, Separator, Theme } from "tamagui";

import styles from "./ExpensesPage.styles";
import { ExpensesPageProps as Props } from "./ExpensesPage.types";
import ExpensesModal from "../ExpensesModal/ExpensesModal";

import { View } from "@/components/Themed";
import CategoryPlaceholder from "@/components/categories/CategoryPlaceholder/CategoryPlaceholder";
import EmptyState from "@/components/global/EmptyState/EmptyState";
import ExpensesComponent from "@/components/global/Expenses/Expenses";
import { Expenses } from "@/interfaces/expenses.types";
import { getExpensesKey } from "@/services/finance.services.hooks";
import { useFetchExpenses } from "@/services/finance.services.hooks";
import { useFinanceStore } from "@/stores/finance/finance.store";

const ExpensesPage: React.FC<Props> = props => {
  const queryClient = useQueryClient();
  const { data: expenses, isFetching } = useFetchExpenses();
  const setExpenseModalConfig = useFinanceStore(
    state => state.setExpenseModalConfig
  );

  const handleCreateExpense = () => {
    setExpenseModalConfig({ visible: true, mode: "create" });
  };

  const renderItem: ListRenderItem<Expenses> = list => {
    const { item: expenses } = list;
    return <ExpensesComponent expenses={expenses} />;
  };

  const onRefresh = () => {
    queryClient.refetchQueries({ queryKey: getExpensesKey() });
  };

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <H2 style={styles.title}>Expenses</H2>
      <Separator />
      <Theme name="dark">
        <Button style={styles.button} onPress={handleCreateExpense}>
          Add Expense
        </Button>
      </Theme>
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
        ListEmptyComponent={
          isFetching ? (
            <CategoryPlaceholder />
          ) : (
            <EmptyState text="No expenses found" onPress={onRefresh} />
          )
        }
      />
      <ExpensesModal />
    </View>
  );
};

ExpensesPage.defaultProps = {};

export default ExpensesPage;
