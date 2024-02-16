import { useQuery } from "@tanstack/react-query";
import { fetchSampleCategoryProducts } from "../../services/apiProduct";

function useSapmleCategoryProduct(id, offset) {
  const {isLoading, data, error} = useQuery({
    queryKey: [`sampleCategoryProducts${id}`, id, offset],
    queryFn: () => fetchSampleCategoryProducts(id, offset),
  })

  const count = data?.count;
  const products = data?.products;

  return {isLoading, products, error, count}
}

export default useSapmleCategoryProduct