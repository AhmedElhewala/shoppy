import { useMutation, useQueryClient } from '@tanstack/react-query';
import { update as updateApi } from "../../services/apiAuth"
import { useDispatch } from "react-redux";
import { setUser } from './userSlice';
import toast from "react-hot-toast";

function useUpdateUser(){
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { isLoading, mutate: update, error } = useMutation({
    mutationFn: (requestBody) => updateApi(requestBody.id, requestBody),

    onSuccess: (res) => {
      queryClient.setQueryData(["user"], res);
      dispatch(setUser(res));
      toast.success(
        "Account successfully updated! Congratulations 🥳"
      );
    },

    onError: (err) => {
      toast.error(
        "Faild to update! Please try Again after check if you did anything wrong"
      );
      throw new Error('Update error', err);
    },
  })

  return {isLoading, update, error}
}

export default useUpdateUser;