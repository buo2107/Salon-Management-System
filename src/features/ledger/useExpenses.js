import { getExpenses } from "@/services/apiExpense";
import { useQuery } from "@tanstack/react-query";

export function useExpenses() {
  const {
    isLoading,
    data: expenses,
    error,
  } = useQuery({
    queryKey: ["expense"],
    queryFn: getExpenses,
  });

  return { expenses, isLoading, error };
}
