import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct as updateProductApi } from "@/services/apiProduct";
import { toast } from "sonner";

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  const { mutate: updateProduct, isPending: isUpdating } = useMutation({
    mutationFn: ({ updateData, id }) => updateProductApi(updateData, id),
    onSuccess: () => {
      toast.success("商品資料已更新");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateProduct, isUpdating };
}
