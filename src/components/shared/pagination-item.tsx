"use client";

import {
  PaginationEllipsis,
  PaginationLink,
  PaginationItem as SPaginationItem,
} from "@/components/ui/pagination";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

interface Props {
  page?: number;
  currentPage?: number;
  disabled?: boolean;
  type: "ellipsis" | "number" | "arrow start" | "arrow end";
}

export default function PaginationItem({
  page,
  currentPage,
  disabled,
  type,
}: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  if (type == "ellipsis") {
    return (
      <SPaginationItem>
        <PaginationEllipsis />
      </SPaginationItem>
    );
  }

  const params = new URLSearchParams(searchParams);
  params.set("page", `${page}`);

  return (
    <SPaginationItem>
      <PaginationLink
        href={`${pathname}?${params.toString()}`}
        isActive={!disabled && page === currentPage}
        className={disabled ? "pointer-events-none opacity-50" : ""}
      >
        {type === "arrow start" && <ChevronFirst />}
        {type === "arrow end" && <ChevronLast />}
        {type === "number" && page}
      </PaginationLink>
    </SPaginationItem>
  );
}
