import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from "react-hot-toast";
import { addCategory as addCategoryApi } from '../../services/apiCategory';

function useAddCategory(){
  const queryClient = useQueryClient();

  const { isLoading, mutate: addCategory, error } = useMutation({
    mutationFn: (requestBody) => addCategoryApi(requestBody),

    onSuccess: () => {
      queryClient.invalidateQueries(["categoryList"]);
      toast.success(
        "Category successfully added! Congratulations 🥳"
      );
    },

    onError: (err) => {
      toast.error(
        "Faild to add! Please try Again after check if you did anything wrong"
      );
      throw new Error(`Faild to add this category: ${err.message}`);
    },
  })

  return {isLoading, addCategory, error}
}

export default useAddCategory;