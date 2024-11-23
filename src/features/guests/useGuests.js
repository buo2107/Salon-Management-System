import { getGuests } from "@/services/apiGuest";
import { useQuery } from "@tanstack/react-query";

export function useGuests() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["guests"],
    queryFn: () => getGuests(),
  });

  return { isLoading, data, error };
}
