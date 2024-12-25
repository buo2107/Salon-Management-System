import { getProducts } from "@/services/apiProduct";
import { PAGE_SIZE } from "@/utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("filter") || "all";

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : filterValue.slice(-1) === "c"
        ? { field: "catagory", value: filterValue.slice(0, -1) }
        : { field: "brand", value: filterValue.slice(0, -1) };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "price-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { data: products, count } = {},
    error,
  } = useQuery({
    queryKey: ["products", filter, sortBy, page],
    queryFn: () => getProducts({ filter, sortBy, page }),
  });

  // PRE-FETCH
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["products", filter, sortBy, page + 1],
      queryFn: () => getProducts({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["products", filter, sortBy, page - 1],
      queryFn: () => getProducts({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, products, error, count };
}
