import { deleteGuest as deleteGuestApi } from "@/services/apiGuest";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeleteGuest() {
  const queryClient = useQueryClient();

  const { mutate: deleteGuest, isPending: isDeleting } = useMutation({
    mutationFn: deleteGuestApi,
    onSuccess: () => {
      toast.success("已刪除該筆客戶資料");
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteGuest, isDeleting };
}
