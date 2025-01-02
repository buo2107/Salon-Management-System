import { getGuests } from "@/services/apiGuest";
import { PAGE_SIZE } from "@/utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export function useGuests() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // SEARCH
  const searchValue = searchParams.get("search") || "all";
  const searchField = searchParams.get("search")
    ? isNaN(searchParams.get("search"))
      ? "name"
      : "phone_number"
    : null;

  const search =
    !searchValue || searchValue === "all"
      ? null
      : { field: searchField, value: searchValue };
  // const filterField = searchParams.get("name")
  //   ? "name"
  //   : searchParams.get("phone_number")
  //     ? "phone_number"
  //     : null;

  // const filterValue = searchParams.get(filterField) || "all";

  // const filter =
  //   !filterValue || filterValue === "all"
  //     ? null
  //     : { field: filterField, value: filterValue };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { data: guests, count } = {},
    error,
  } = useQuery({
    queryKey: ["guests", search, page],
    queryFn: () => getGuests({ search, page }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["guests", search, page + 1],
      queryFn: () => getGuests({ search, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["guests", search, page - 1],
      queryFn: () => getGuests({ search, page: page - 1 }),
    });

  return { isLoading, guests, count, error };
}
