import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from "react-hot-toast";
import { updateCategory as updateCategoryApi } from '../../services/apiCategory';

function useUpdateCategory(){
  const queryClient = useQueryClient();

  const { isLoading, mutate: updateCategory, error } = useMutation({
    mutationFn: (requestBody) => updateCategoryApi(requestBody.id, requestBody),

    onSuccess: () => {
      queryClient.invalidateQueries(["categoryList"]);
      toast.success(
        "Category successfully updated! Congratulations 🥳"
      );
    },

    onError: (err) => {
      toast.error(
        "Faild to update! Please try Again after check if you did anything wrong"
      );
      throw new Error(`Faild to update this category: ${err.message}`);
    },
  })

  return {isLoading, updateCategory, error}
}

export default useUpdateCategory;