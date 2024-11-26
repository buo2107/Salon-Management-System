import { getGuest } from "@/services/apiGuest";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGuest() {
  const { guestId } = useParams();

  const {
    isLoading,
    data: guest,
    error,
  } = useQuery({
    queryKey: ["guests", guestId],
    queryFn: () => getGuest(guestId),
    retry: false,
  });

  return { isLoading, guest, error };
}
