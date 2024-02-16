import { createSlice } from '@reduxjs/toolkit';

function updateLocalStorageCart(id, cart) {
  localStorage.setItem(`cart-${id}`, JSON.stringify(cart));
}

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.cart.push(action.payload);
      updateLocalStorageCart(action.payload.userId, state.cart);
    },
    deleteItemFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      updateLocalStorageCart(action.payload.userId, state.cart);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
      updateLocalStorageCart(item.userId, state.cart);
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItemFromCart(state, action);
      updateLocalStorageCart(item.userId, state.cart);
    },
    clearCart(state) {
      state.cart = [];
    },
    updateFullCart(state, action) {
      state.cart = action.payload;
    }
  }
})

export const {
  addItemToCart,
  deleteItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  updateFullCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) => {
  return state.cart?.cart?.reduce((sum, item) => sum + item.quantity, 0);
}

export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
}

export const getCurrentQuantityById = (id) => {
  return (state) => {
    return state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
  }
}