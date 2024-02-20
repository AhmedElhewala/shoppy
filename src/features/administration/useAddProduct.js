import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from "react-hot-toast";
import { addProduct as addProductApi } from '../../services/apiProduct';

function useAddProduct(){
  const queryClient = useQueryClient();

  const { isLoading, mutate: addProduct, error } = useMutation({
    mutationFn: (requestBody) => addProductApi(requestBody),

    onSuccess: () => {
      queryClient.invalidateQueries(["productList"]);
      toast.success(
        "Product successfully added! Congratulations 🥳"
      );
    },

    onError: (err) => {
      toast.error(
        "Faild to add! Please try Again after check if you did anything wrong"
      );
      throw new Error(`Faild to add this product: ${err.message}`);
    },
  })

  return {isLoading, addProduct, error}
}

export default useAddProduct;