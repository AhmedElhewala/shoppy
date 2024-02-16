import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchProducts } from "../../services/apiProduct";
import { useSearchParams } from "react-router-dom";
import { PAGE_LIMIT } from "../../utilities/constants";

function useProductList() {
  const queryClient = useQueryClient();
  const [searchParams,] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const price = searchParams.get("price") && Number(searchParams.get("price"));
  const priceMin = searchParams.get("price_min") && Number(searchParams.get("price_min"));
  const priceMax = searchParams.get("price_max") && Number(searchParams.get("price_max"));
  const title = searchParams.get("title") && searchParams.get("title");
  const categoryId = searchParams.get("categoryId") && searchParams.get("categoryId");

  const offset = (currentPage - 1) * PAGE_LIMIT;

  const {isLoading, data, error} = useQuery({
    queryKey: ["productsList", offset, price, priceMin, priceMax, title, categoryId],
    queryFn: () => fetchProducts(offset, price, priceMin, priceMax, title, categoryId),
  })

  const count = data?.count;
  const products = data?.products;

  const pagesCount = Math.ceil(count / PAGE_LIMIT);

  if (currentPage < pagesCount) {
    queryClient.prefetchQuery({
      queryKey: ["productsList", (offset + 1), price, priceMin, priceMax, title, categoryId],
      queryFn: () => fetchProducts((offset + 1), price, priceMin, priceMax, title, categoryId),
    })
  }

  if (currentPage > 0) {
    queryClient.prefetchQuery({
      queryKey: ["productsList", (offset - 1), price, priceMin, priceMax, title, categoryId],
      queryFn: () => fetchProducts((offset - 1), price, priceMin, priceMax, title, categoryId),
    })
  }

  return {isLoading, products, count, error}
}

export default useProductList