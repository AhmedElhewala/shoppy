import axios  from "axios"
import {BASE_URL, PAGE_LIMIT, HOME_PAGE_LIMIT} from "../utilities/constants"

export async function fetchCategoryProducts(id, offset) {
  try {
    const productReq = await axios.get(`${BASE_URL}/categories/${id}/products?limit=${PAGE_LIMIT}&offset=${offset}`);

    const count = await getCategoryProductsLength(id);

    const res = {products: productReq.data, count};

    return res;
  } catch (err) {
    throw new Error(`Error fetching category ${id} products: ${err.message}`);
  }
}

export async function fetchSampleCategoryProducts(id, offset) {
  try {
    const productReq = await axios.get(`${BASE_URL}/categories/${id}/products?limit=${HOME_PAGE_LIMIT}&offset=${offset}`);

    const count = await getCategoryProductsLength(id);

    const res = {products: productReq.data, count};

    return res;
  } catch (err) {
    throw new Error(`Error fetching category ${id} products: ${err.message}`);
  }
}

export async function fetchProducts(offset, price, priceMin, priceMax, title, categoryId) {
  try {
    const productReq = await axios.get(
      `${BASE_URL}/products/?limit=${PAGE_LIMIT}&offset=${offset}${price ? '&price=' + price : ''}${priceMin ? '&price_min=' + priceMin : ''}${priceMax ? '&price_max=' + priceMax : ''}${title ? '&title=' + title : ''}${categoryId ? '&categoryId=' + categoryId : ''}`
    );

    const count = await getFilteredProductsCount(price, priceMin, priceMax, title, categoryId);

    const res = {products: productReq.data, count};

    return res;
  } catch (err) {
    throw new Error(`Error fetching products: ${err.message}`);
  }
}

export async function fetchSearchProducts(offset, title, categoryId) {
  try {
    const productReq = await axios.get(
      `${BASE_URL}/products/?limit=${PAGE_LIMIT}&offset=${offset}${title ? '&title=' + title : ''}${categoryId ? '&categoryId=' + categoryId : ''}`
    );

    const count = await getSearchProductsCount(title, categoryId);

    const res = {products: productReq.data, count};

    return res;
  } catch (err) {
    throw new Error(`Error fetching products: ${err.message}`);
  }
}

export async function getCategoryProductsLength(id) {
  try {
    const req = await axios.get(`${BASE_URL}/categories/${id}/products`);

    const res = req.data.length;
    return res;
  } catch (err) {
    if (err.code === "ERR_BAD_REQUEST") return null;
    throw new Error(`Error fetching category ${id} products: ${err.message}`);
  }
}

export async function getFilteredProductsCount(price, priceMin, priceMax, title, categoryId) {
  try {
    const req = await axios.get(
      `${BASE_URL}/products/?${price ? '&price=' + price : ''}${priceMin ? '&price_min=' + priceMin : ''}${priceMax ? '&price_max=' + priceMax : ''}${title ? '&title=' + title : ''}${categoryId ? '&categoryId=' + categoryId : ''}`
    );

    const res = req.data.length;
    return res;
  } catch (err) {
    if (err.code === "ERR_BAD_REQUEST") return null;
    throw new Error(`Error fetching products: ${err.message}`);
  }
}

export async function getSearchProductsCount(title, categoryId) {
  try {
    const req = await axios.get(
      `${BASE_URL}/products/?${title ? '&title=' + title : ''}${categoryId ? '&categoryId=' + categoryId : ''}`
    );

    const res = req.data.length;
    return res;
  } catch (err) {
    if (err.code === "ERR_BAD_REQUEST") return null;
    throw new Error(`Error fetching products: ${err.message}`);
  }
}

export async function deleteProduct(id) {
  try {
    const req = await axios.delete(`${BASE_URL}/products/${id}`);

    return req.data;
  } catch (err) {
    throw new Error(`Error deleting product with id ${id}: ${err.message}`)
  }
}

export async function addProduct(requestBody) {
  try {
    const req = await axios.post(`${BASE_URL}/products/`, requestBody);

    return req.data;
  } catch (err) {
    throw new Error(`Failed adding this product: ${err.message}`)
  }
}

export async function updateProduct(id, requestBody) {
  try {
    const req = await axios.put(`${BASE_URL}/products/${id}`, requestBody);

    return req.data;
  } catch (err) {
    throw new Error(`Failed update product ${id}: ${err.message}`)
  }
}