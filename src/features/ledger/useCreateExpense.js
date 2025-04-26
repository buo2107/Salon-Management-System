import { createExpense as createExpenseApi } from "@/services/apiExpense";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateExpense() {
  const queryClient = useQueryClient();

  const { mutate: createExpense, isPending: isCreating } = useMutation({
    mutationFn: ({ newExpense, newExpenseItems }) =>
      createExpenseApi(newExpense, newExpenseItems),
    onSuccess: () => {
      toast.success("已成功新增支出資料");
      queryClient.invalidateQueries({ queryKey: ["expense"] });
      queryClient.invalidateQueries({ queryKey: ["expenseItem"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createExpense, isCreating };
}
