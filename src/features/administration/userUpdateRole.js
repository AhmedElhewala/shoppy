import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateRole as updateRoleApi } from "../../services/apiUser"
import toast from "react-hot-toast";

function useUpdateRole(){
  const queryClient = useQueryClient();

  const { isLoading, mutate: updateRole, error } = useMutation({
    mutationFn: (requestBody) => updateRoleApi(requestBody.id, requestBody),

    onSuccess: () => {
      queryClient.invalidateQueries(["usersList"]);
      toast.success(
        "Account role successfully updated! Congratulations 🥳"
      );
    },

    onError: (err) => {
      toast.error(
        "Faild to update! Please try Again after check if you did anything wrong"
      );
      throw new Error('Update error', err);
    },
  })

  return {isLoading, updateRole, error}
}

export default useUpdateRole;