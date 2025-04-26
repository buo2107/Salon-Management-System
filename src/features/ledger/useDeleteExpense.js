import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteExpense as deleteExpenseApi } from "@/services/apiExpense";
import { toast } from "sonner";

export function useDeleteExpense() {
  const queryClient = useQueryClient();

  const { mutate: deleteExpense, isPending: isDeleting } = useMutation({
    mutationFn: deleteExpenseApi,
    onSuccess: () => {
      toast.success("已刪除該筆支出資料");
      queryClient.invalidateQueries({ queryKey: ["expense"] });
      queryClient.invalidateQueries({ queryKey: ["expenseItem"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteExpense, isDeleting };
}
