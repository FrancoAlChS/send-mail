import {
  PaginationContent,
  Pagination as SPagination,
} from "@/components/ui/pagination";
import { createButtonsPagination } from "@/lib/pagination";
import PaginationItem from "../shared/pagination-item";

interface Props {
  page: number;
  totalPages: number;
}

export function Pagination({ page, totalPages }: Props) {
  const buttons = createButtonsPagination(totalPages, page);

  return (
    <SPagination>
      <PaginationContent>
        <PaginationItem
          page={1}
          currentPage={page}
          type="arrow start"
          disabled={page === 1}
        />
        {buttons.map((pageNumber, index) => {
          if (typeof pageNumber === "string") {
            return (
              <PaginationItem
                key={`paginationButton-${index}`}
                type="ellipsis"
              />
            );
          }

          return (
            <PaginationItem
              key={`paginationButton-${index}`}
              type="number"
              page={pageNumber}
              currentPage={page}
            />
          );
        })}

        <PaginationItem
          type="arrow end"
          page={totalPages}
          disabled={page === totalPages}
        />
      </PaginationContent>
    </SPagination>
  );
}
