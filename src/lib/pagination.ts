const createRange = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};

export function createButtonsPagination(
  totalPages: number,
  currentPage: number
) {
  if (totalPages < 6) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage > totalPages - 4) {
    return ["ellipsis", ...createRange(totalPages - 4, totalPages)];
  }

  if (currentPage > 3) {
    return [
      "ellipsis",
      ...createRange(currentPage - 2, currentPage + 2),
      "ellipsis",
    ];
  }

  return [...createRange(1, 5), "ellipsis"];
}

export const createSearchParams = (
  page: number,
  searchParams: URLSearchParams
) => {
  const params = new URLSearchParams(searchParams);
  params.set("page", `${page}`);

  return params.toString();
};
