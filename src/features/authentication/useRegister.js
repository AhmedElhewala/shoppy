import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { register as registerApi } from '../../services/apiAuth';
import { toast } from "react-hot-toast";


function useRegister() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: register, isLoading } = useMutation({
    mutationFn: ({name, email, password, avatar}) => registerApi({name, email, password, avatar}),

    onSuccess: (res) => {
      queryClient.setQueryData(["registedUser"], res);
      toast.success(
        "Account successfully created! Congratulations 🥳"
      );
      navigate('/auth/login', { replace: true });
    }
  })

  return {register, isLoading}
}

export default useRegister