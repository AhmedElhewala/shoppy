import axios  from "axios"
import {BASE_URL} from "../utilities/constants"
import { fetchCategoryProducts } from "./apiProduct";

export async function fetchAllCategories() {
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

export async function isValidCategory(id) {
  try {
    const product = await fetchCategoryProducts(id);
    return product.length > 0
  } catch (err) {
    if (err.code === "ERR_BAD_REQUEST") return null;
    throw new Error(`Error validating category: ${err.message}`);
  }
}