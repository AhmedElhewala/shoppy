import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "./userSlice";
import { removeAccessTokenCookie } from "../../services/apiAuth";

function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    try {
      removeAccessTokenCookie()
      dispatch(clearUser());
      navigate("/auth/login", { replace: true });
    } catch (err) {
      throw new Error(`Faild to logging out: ${err.message}`);
    }
  }

  return {logout}
}

export default useLogout;