import { getSettings } from "@/services/apiSetting";
import { useQuery } from "@tanstack/react-query";

export function useSettings() {
  const {
    isLoading,
    data: settings,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, settings, error };
}
