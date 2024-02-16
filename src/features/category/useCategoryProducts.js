import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchCategoryProducts } from "../../services/apiProduct"
import { PAGE_LIMIT } from "../../utilities/constants";

function useCategoryProducts() {
  const queryClient = useQueryClient();
  const {id} = useParams();
  const [searchParams,] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const offset = (currentPage - 1) * PAGE_LIMIT;

  const {isLoading, data, error} = useQuery({
    queryKey: ["categoryProducts", id, offset],
    queryFn: () => fetchCategoryProducts(id, offset),
  })

  const count = data?.count;
  const products = data?.products;

  const pagesCount = Math.ceil(count / PAGE_LIMIT);

  if (currentPage < pagesCount) {
    queryClient.prefetchQuery({
      queryKey: ["categoryProducts", id, offset + 1],
      queryFn: () => fetchCategoryProducts(id, offset + 1),
    })
  }

  if (currentPage > 0) {
    queryClient.prefetchQuery({
      queryKey: ["categoryProducts", id, offset - 1],
      queryFn: () => fetchCategoryProducts(id, offset - 1),
    })
  }

  return {isLoading, products, error, count}
}

export default useCategoryProducts