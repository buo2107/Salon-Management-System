import { createExpense as createExpenseApi } from "@/services/apiExpense";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateExpense() {
  const queryClient = useQueryClient();

  const { mutate: createExpense, isPending: isCreating } = useMutation({
    mutationFn: createExpenseApi,
    onSuccess: () => {
      toast.success("已成功新增支出資料");
      queryClient.invalidateQueries({ queryKey: ["expense"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createExpense, isCreating };
}
