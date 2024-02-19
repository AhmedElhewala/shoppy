import axios from "axios";
import { BASE_URL } from "../utilities/constants";

export async function fetchUsers() {
  try {
    const userReq = await axios.get(`${BASE_URL}/users`);
    
    return userReq.data;
  } catch(err) {
    throw new Error(`Error fetching users: ${err.message}`);
  }
}

export async function getUsersCount() {
  try {
    const req = await axios.get(`${BASE_URL}/users/`);
    
    const res = req.data.length;
    return res;
  } catch(err) {
    throw new Error(`Error fetching users: ${err.message}`);
  }
}

export async function updateRole(id, requestBody) {
  try {
    const req = await axios.put(`${BASE_URL}/users/${id}`, requestBody);

    return req.data;
  } catch (err) {
    throw new Error(`Error updating this user role: ${err.message}`)
  }
}