import { QueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { getProfile as getProfileApi } from "../services/apiAuth";
import { setUser } from "../features/authentication/userSlice";
import { useEffect } from "react";
import { ACCESS_TOKEN_COOKIE } from "../utilities/constants";

const queryClient = new QueryClient();

function useKeepAuthenticated() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = Cookies.get(ACCESS_TOKEN_COOKIE);
    async function getProfile() {
      try {
        const profile = await getProfileApi(accessToken);
        queryClient.setQueryData(["user"], profile);
        dispatch(setUser(profile));
        return profile;
      } catch (err) {
        throw new Error(`Error logging in: ${err.message}`);
      }
    }

    if (accessToken) getProfile();
  }, [dispatch]);
}

export default useKeepAuthenticated