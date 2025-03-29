import { getProductsList } from "@/services/apiProduct";
import { useQuery } from "@tanstack/react-query";

export function useProductsList() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsList,
  });

  return { products, isLoading, error };
}
