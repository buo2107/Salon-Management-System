import { deleteProduct as deleteProductApi } from "@/services/apiProduct";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  const { mutate: deleteProduct, isPending: isDeleting } = useMutation({
    mutationFn: deleteProductApi,
    onSuccess: () => {
      toast.success("已刪除該筆商品資料");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteProduct, isDeleting };
}
