import { useSearchParams } from "react-router-dom";
import {
  Pagination as CNPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PAGE_SIZE } from "@/utils/constants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageCount <= 1) return null;

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return (
    <CNPagination>
      <PaginationContent>
        <PaginationItem className={`${currentPage === 1 && "invisible"}`}>
          <PaginationPrevious onClick={prevPage} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{currentPage}</PaginationLink>
        </PaginationItem>
        <PaginationItem></PaginationItem>
        {/*
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem
          className={`${currentPage === pageCount && "invisible"}`}
        >
          <PaginationNext onClick={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </CNPagination>
  );
}

export default Pagination;
