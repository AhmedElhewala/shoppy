import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchSearchProducts } from "../../services/apiProduct";
import { useSearchParams } from "react-router-dom";
import { PAGE_LIMIT } from "../../utilities/constants";

function useProductSearch() {
  const queryClient = useQueryClient();
  const [searchParams, ] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const title = searchParams.get("title") && searchParams.get("title");
  const categoryId = searchParams.get("categoryId") && searchParams.get("categoryId");

  const offset = (currentPage - 1) * PAGE_LIMIT;

  const {isLoading, data, error} = useQuery({
    queryKey: ["productsSearch", offset, title, categoryId],
    queryFn: () => fetchSearchProducts(offset, title, categoryId),
  })

  const count = data?.count;
  const products = data?.products;

  const pagesCount = Math.ceil(count / PAGE_LIMIT);

  if (currentPage < pagesCount) {
    queryClient.prefetchQuery({
      queryKey: ["productsSearch", (offset + 1), title, categoryId],
      queryFn: () => fetchSearchProducts((offset + 1), title, categoryId),
    })
  }

  if (currentPage > 0) {
    queryClient.prefetchQuery({
      queryKey: ["productsSearch", (offset - 1), title, categoryId],
      queryFn: () => fetchSearchProducts((offset - 1), title, categoryId),
    })
  }

  return {isLoading, products, count, error}
}

export default useProductSearch