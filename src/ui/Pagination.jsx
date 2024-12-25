import {
  Pagination as CNPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PAGE_SIZE } from "@/utils/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

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
    <div className="flex items-center justify-end gap-3">
      {/* Pagination */}
      <div>
        <CNPagination>
          <PaginationContent>
            {/* Previous page button */}
            <PaginationItem>
              <PaginationLink
                className="cursor-pointer aria-disabled:pointer-events-none aria-disabled:opacity-50"
                aria-label="Go to previous page"
                aria-disabled={currentPage === 1 ? true : undefined}
                role={currentPage === 1 ? "link" : undefined}
                onClick={prevPage}
              >
                <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>

            {/* Page number select */}
            <PaginationItem>
              <Select
                value={String(currentPage)}
                aria-label="Select page"
                onValueChange={(page) => {
                  searchParams.set("page", page);
                  setSearchParams(searchParams);
                }}
              >
                <SelectTrigger
                  id="select-page"
                  className="w-fit whitespace-nowrap"
                >
                  <SelectValue placeholder="Select page" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                    (page) => (
                      <SelectItem key={page} value={String(page)}>
                        Page {page}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </PaginationItem>

            {/* Next page button */}
            <PaginationItem>
              <PaginationLink
                className="cursor-pointer aria-disabled:pointer-events-none aria-disabled:opacity-50"
                aria-label="Go to next page"
                aria-disabled={currentPage === pageCount ? true : undefined}
                role={currentPage === pageCount ? "link" : undefined}
                onClick={nextPage}
              >
                <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </CNPagination>
      </div>
    </div>
  );
}

export default Pagination;
