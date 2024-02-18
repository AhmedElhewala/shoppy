import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from "../../services/apiAuth"
import { useDispatch } from "react-redux";
import { setUser } from './userSlice';

function useLogin(){
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { isLoading, mutate: login, error } = useMutation({
    mutationFn: ({email, password, isRemmbered}) => loginApi({ email, password, isRemmbered }),

    onSuccess: (res) => {
      queryClient.setQueryData(["user"], res);
      dispatch(setUser(res));
    },

    onError: (err) => {
      throw new Error('login error', err);
    },
  })

  return {isLoading, login, error}
}

export default useLogin;