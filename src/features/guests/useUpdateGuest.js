import { updateGuest as updateGuestApi } from "@/services/apiGuest";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useUpdateGuest() {
  const queryClient = useQueryClient();

  const { mutate: updateGuest, isPending: isUpdating } = useMutation({
    mutationFn: ({ updateData, id }) => updateGuestApi(updateData, id),
    onSuccess: () => {
      toast.success("客戶資料已更新");
      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateGuest, isUpdating };
}
