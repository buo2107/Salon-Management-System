import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createProduct as createProductApi } from "@/services/apiProduct";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  const { mutate: createProduct, isPending: isCreating } = useMutation({
    mutationFn: createProductApi,
    onSuccess: () => {
      toast.success("已成功新增商品資料");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createProduct, isCreating };
}
