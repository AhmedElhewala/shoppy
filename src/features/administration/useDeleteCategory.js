import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCategory as deleteCategoryApi } from "../../services/apiCategory";

function useDeleteCategory() {
  const queryClient = useQueryClient();

  const {isLoading, mutate: deleteCategory, error} = useMutation({
    mutationFn: (id) => deleteCategoryApi(id),

    onSuccess: () => {
      queryClient.invalidateQueries(['categoryList']);
      toast.success(
        "Category successfully Deleted! 😄"
      );
    },

    onError: (err) => {
      toast.error(
        "Failed to delete! Please try again after checking if you did anything wrong"
      );
      throw new Error('delete Product error', err);
    },
  });

  return {isLoading, deleteCategory, error};
}

export default useDeleteCategory