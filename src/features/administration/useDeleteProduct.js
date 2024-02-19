import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";

function useDeleteProduct() {
  const queryClient = useQueryClient();

  const {isLoading, mutate: deleteProduct, error} = useMutation({
    mutationFn: (id) => deleteProductApi(id),

    onSuccess: () => {
      queryClient.invalidateQueries(['productsList']);
      toast.success(
        "Product successfully Deleted! 😄"
      );
    },

    onError: (err) => {
      toast.error(
        "Failed to delete! Please try again after checking if you did anything wrong"
      );
      throw new Error('delete Product error', err);
    },
  });

  return {isLoading, deleteProduct, error};
}

export default useDeleteProduct;