import { getProducts } from "@/services/apiProduct";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("filter") || "all";

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : filterValue.slice(-1) === "c"
        ? { field: "catagory", value: filterValue.slice(0, -1) }
        : { field: "brand", value: filterValue.slice(0, -1) };

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products", filter],
    queryFn: () => getProducts({ filter }),
  });

  return { isLoading, products, error };
}
