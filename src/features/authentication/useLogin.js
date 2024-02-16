import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from "../../services/apiAuth"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from './userSlice';

function useLogin(){
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({email, password, isRemmbered}) => loginApi({ email, password, isRemmbered }),

    onSuccess: (res) => {
      queryClient.setQueryData(["user"], res);
      dispatch(setUser(res));
      navigate('/', { replace: true });
    },

    onError: (err) => {
      throw new Error('login error', err);
    },
  })

  return {isLoading, login}
}

export default useLogin;