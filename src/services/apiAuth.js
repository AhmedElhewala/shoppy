import axios from "axios";
import Cookies from "js-cookie";
import {
  ACCESS_TOKEN_COOKIE,
  BASE_URL,
  REFRESH_TOKEN_COOKIE,
} from "../utilities/constants";
import toast from "react-hot-toast";

export async function login({ email, password, isRemmbered }) {
  try {
    const tokenReq = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });

    if (isRemmbered) {
      setAccessTokenCookie(tokenReq.data.access_token, 20);
      setRefreshTokenCookie(tokenReq.data.refresh_token, 10 / 24);
    }

    const profile = await getProfile(tokenReq.data.access_token);

    return profile;
  } catch (err) {
    if (err.response.data.message) {
      toast.error(
        `There is an error occurs, please check again you entered the right email and password`
      );
    }
    throw new Error(`Error logging in: ${err.message}`);
  }
}

export async function getProfile(accessToken) {
  try {
    const req = await axios.get(`${BASE_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return req.data;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      try {
        const refreshedToken = refreshAccessToken();
        setAccessTokenCookie(refreshedToken.access_token, 20);

        const req = await axios.get(`${BASE_URL}/auth/profile`, {
          headers: {
            Authorization: `Bearer ${refreshedToken.access_token}`,
          },
        });

        return req.data;
      } catch (error) {
        throw new Error(`Error getting the user profile: ${error.message}`);
      }
    }
    throw new Error(`Error getting the user profile: ${err.message}`);
  }
}

export async function refreshAccessToken() {
  try {
    const refreshToken = Cookies.get(REFRESH_TOKEN_COOKIE);
    if (!refreshToken) {
      throw new Error("Refresh token not available");
    }

    const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
      refreshToken,
    });

    return response.data;
  } catch (err) {
    throw new Error(`Error refreshing access token: ${err.message}`);
  }
}

export async function update(id, requestBody) {
  try {
    const req = await axios.put(`${BASE_URL}/users/${id}`, requestBody);

    return req.data;
  } catch (err) {
    throw new Error(`Error updating profile: ${err.message}`);
  }
}

export function setAccessTokenCookie(accessToken, expires) {
  Cookies.set(ACCESS_TOKEN_COOKIE, accessToken, { expires });
}

export function setRefreshTokenCookie(refreshToken, expires) {
  Cookies.set(REFRESH_TOKEN_COOKIE, refreshToken, { expires });
}

export function removeAccessTokenCookie() {
  Cookies.remove(ACCESS_TOKEN_COOKIE);
}

export async function register({ name, email, password, avatar }) {
  try {
    const req = await axios.post(`${BASE_URL}/users/`, {
      name,
      email,
      password,
      avatar,
    });

    return req.data;
  } catch (err) {
    throw new Error(`Error registerring this user: ${err.message}`);
  }
}

export async function checkEmailValidation(email) {
  try {
    const req = await axios.post(`${BASE_URL}/users/is-available`, {
      email,
    });

    return req.data;
  } catch (err) {
    throw new Error(`Error checking this email: ${err.message}`);
  }
}
