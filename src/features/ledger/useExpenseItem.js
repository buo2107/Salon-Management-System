import { getExpenseItem } from "@/services/apiExpense";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useExpenseItem() {
  const {
    data: expenseItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["expenseItem"],
    queryFn: () => getExpenseItem(4),
    retry: false,
  });

  return { expenseItems, isLoading, error };
}
