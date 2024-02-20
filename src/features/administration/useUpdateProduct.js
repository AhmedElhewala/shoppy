import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from "react-hot-toast";
import { updateProduct as updateProductApi } from '../../services/apiProduct';

function useUpdateProduct(){
  const queryClient = useQueryClient();

  const { isLoading, mutate: updateProduct, error } = useMutation({
    mutationFn: (requestBody) => updateProductApi(requestBody.id, requestBody),

    onSuccess: () => {
      queryClient.invalidateQueries(["productList"]);
      toast.success(
        "Product successfully updated! Congratulations 🥳"
      );
    },

    onError: (err) => {
      toast.error(
        "Faild to update! Please try Again after check if you did anything wrong"
      );
      throw new Error(`Faild to update this product: ${err.message}`);
    },
  })

  return {isLoading, updateProduct, error}
}

export default useUpdateProduct;