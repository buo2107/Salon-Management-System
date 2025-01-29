import { getExpenseItem } from "@/services/apiExpense";
import { useQuery } from "@tanstack/react-query";

export function useExpenseItem() {
  const {
    data: expenseItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["expenseItem"],
    queryFn: () => getExpenseItem(),
    retry: false,
  });

  return { expenseItems, isLoading, error };
}
