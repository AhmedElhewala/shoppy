import axios  from "axios"
import {BASE_URL} from "../utilities/constants"
import { fetchCategoryProducts } from "./apiProduct";

export async function fetchValidCategories() {
  try {
    let validCategories = [];
    const req = await axios.get(`${BASE_URL}/categories`);
    const res = req.data;
    await Promise.all(
      res.map(async function (category) {
      const productreq = await axios.get(`${BASE_URL}/categories/${category.id}/products`)
      const product = productreq.data;
      if(product.length > 0) validCategories.push(category)
    })
    )
    return validCategories;
  } catch (err) {
    throw new Error(`Error fetching categories: ${err.message}`);
  }
}

export async function fetchAllCategories() {
  try {
    const req = await axios.get(`${BASE_URL}/categories`);

    return req.data;
  } catch (err) {
    throw new Error(`Error fetching categories: ${err.message}`);
  }
}

export async function isValidCategory(id) {
  try {
    const product = await fetchCategoryProducts(id);
    return product.length > 0
  } catch (err) {
    if (err.code === "ERR_BAD_REQUEST") return null;
    throw new Error(`Error validating category: ${err.message}`);
  }
}

export async function deleteCategory(id) {
  try {
    const req = await axios.delete(`${BASE_URL}/categories/${id}`);

    return req.data;
  } catch (err) {
    throw new Error(`Error deleting category with id ${id}: ${err.message}`)
  }
}

export async function addCategory(requestBody) {
  try {
    const req = await axios.post(`${BASE_URL}/categories/`, requestBody);

    return req.data;
  } catch (err) {
    throw new Error(`Failed adding this category: ${err.message}`)
  }
}

export async function updateCategory(id, requestBody) {
  try {
    const req = await axios.put(`${BASE_URL}/categories/${id}`, requestBody);

    return req.data;
  } catch (err) {
    throw new Error(`Failed update category ${id}: ${err.message}`)
  }
}