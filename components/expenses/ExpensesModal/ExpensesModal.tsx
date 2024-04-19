import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Keyboard } from "react-native";
import { Adapt, Button, H2, Input, Separator, Sheet } from "tamagui";
import { Theme, View, Spinner, XStack, Form, Select } from "tamagui";

import styles from "./ExpensesModal.styles";
import { ExpensesModalProps as Props } from "./ExpensesModal.types";

import { useCreateExpense } from "@/services/finance.services.hooks";
import { useFetchCategories } from "@/services/finance.services.hooks";
import { useUpdateExpense } from "@/services/finance.services.hooks";
import { useFinanceStore } from "@/stores/finance/finance.store";

const ExpensesModal: React.FC<Props> = props => {
  const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync: createExpenses, reset } = useCreateExpense();
  const { data: categories } = useFetchCategories();

  const { mutateAsync: updateExpenses, reset: resetUpdate } =
    useUpdateExpense();

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [categorySelect, setCategorySelect] = useState(0);
  const expenseModalConfig = useFinanceStore(state => state.expenseModalConfig);
  const setExpenseModalConfig = useFinanceStore(
    state => state.setExpenseModalConfig
  );

  const { mode, visible, expense } = expenseModalConfig;
  const editMode = mode === "update";
  const buttonTitle = editMode ? "Update Expense" : "Add Expense";

  const title = editMode ? "Edit Expense" : "Create Expense";
  const handleGoBack = () => {
    setExpenseModalConfig({ visible: false, mode: "create" });
  };

  const setAmountText = (value: string) => {
    setAmount(value);
  };

  const setDescriptionText = (value: string) => {
    setDescription(value);
  };

  const setCategoryText = (value: number) => {
    setCategorySelect(value);
  };

  const resetValues = () => {
    setDescription("");
    setAmount("");
  };

  const createExpenseHandler = async () => {
    Keyboard.dismiss();
    try {
      setIsLoading(true);
      if (!description || !amount || !categorySelect) {
        Alert.alert(
          "Please fill in all fields",
          "Expense name and limit are required"
        );
        return;
      }

      if (!editMode) {
        await createExpenses({
          amount: +amount,
          description,
          category: categorySelect
        });
      }
      if (editMode) {
        if (!expense) {
          Alert.alert(
            "No expense found",
            "Please try again or contact support"
          );
          return;
        }
        await updateExpenses({
          id: expense.id,
          amount: +amount,
          description,
          category: categorySelect
        });
        resetUpdate();
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
    if (expense) {
      setDescription(expense.description);
      setAmount(expense.amount.toString());
    }
  }, [expense]);

  return (
    <Sheet
      forceRemoveScrollEnabled={visible}
      modal
      open={visible}
      onOpenChange={(open: boolean) => {
        setExpenseModalConfig({
          ...expenseModalConfig,
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
            <Form onSubmit={createExpenseHandler}>
              <XStack overflow="hidden" gap="$2" marginBottom="$3">
                <Input
                  placeholder="Amount"
                  value={amount}
                  onChangeText={setAmountText}
                  width={"100%"}
                />
              </XStack>
              <XStack overflow="hidden" gap="$2" marginBottom="$3">
                <Input
                  placeholder="Description"
                  value={description}
                  onChangeText={setDescriptionText}
                  width={"100%"}
                />
              </XStack>
              <XStack overflow="hidden" gap="$2" marginBottom="$3">
                <Select
                  onValueChange={value => {
                    setCategoryText(+value);
                  }}
                >
                  <Select.Trigger>
                    <Select.Value placeholder={"Search..."} />
                  </Select.Trigger>
                  <Adapt platform="touch">
                    <Sheet
                      modal
                      animationConfig={{
                        type: "spring",
                        damping: 10,
                        mass: 1.2,
                        stiffness: 200
                      }}
                    >
                      <Sheet.Frame>
                        <Sheet.ScrollView>
                          <Adapt.Contents />
                        </Sheet.ScrollView>
                      </Sheet.Frame>
                      <Sheet.Overlay
                        animation="lazy"
                        enterStyle={{ opacity: 0 }}
                        exitStyle={{ opacity: 0 }}
                      />
                    </Sheet>
                  </Adapt>
                  <Select.Content zIndex={200000}>
                    <Select.ScrollUpButton />
                    <Select.Viewport>
                      <Select.Group>
                        {categories?.map((item, i) => {
                          return (
                            <Select.Item
                              index={i}
                              key={item.name}
                              value={`${item.id}`}
                            >
                              <Select.ItemText>{item.name}</Select.ItemText>
                            </Select.Item>
                          );
                        })}
                      </Select.Group>
                    </Select.Viewport>
                    <Select.ScrollDownButton />
                  </Select.Content>
                </Select>
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

ExpensesModal.defaultProps = {};

export default ExpensesModal;
