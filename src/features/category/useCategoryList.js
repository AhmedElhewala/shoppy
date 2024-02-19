import {useQuery} from "@tanstack/react-query"
import { fetchValidCategories } from "../../services/apiCategory"

function useCategoryList() {
  const {isLoading, data: categories, error} = useQuery({
    queryKey: ["validCategoryList"],
    queryFn: fetchValidCategories,
    retry: false,
  })

  return {isLoading, categories, error}
}

export default useCategoryList