import { createGuest as createGuestApi } from "@/services/apiGuest";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateGuest() {
  const queryClient = useQueryClient();

  const { mutate: createGuest, isPending: isCreating } = useMutation({
    mutationFn: createGuestApi,
    onSuccess: () => {
      toast.success("已成功新增客戶資料");
      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createGuest, isCreating };
}
