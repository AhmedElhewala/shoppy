import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./features/authentication/userSlice";
import cartReducer from "./features/cart/cartSlice";
import watchlistReducer from "./features/watchlist/watchlistSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    watchlist: watchlistReducer,
  },
})

export default store;