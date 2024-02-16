import { createSlice } from '@reduxjs/toolkit';

function updateLocalStorageWatchlist(id, watchlist) {
  localStorage.setItem(`watchlist-${id}`, JSON.stringify(watchlist));
}

const initialState = {
  watchlist: [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addItemToWatchlist(state, action) {
      state.watchlist.push(action.payload);
      updateLocalStorageWatchlist(action.payload.userId, state.watchlist);
    },
    deleteItemFromWatchlist(state, action) {
      state.watchlist = state.watchlist.filter((item) => item.id !== action.payload.id);
      updateLocalStorageWatchlist(action.payload.userId, state.watchlist);
    },
    clearWatchlist(state) {
      state.watchlist = [];
    },
    updateFullWatchlist(state, action) {
      state.watchlist = action.payload;
    }
  }
})

export const {
  addItemToWatchlist,
  deleteItemFromWatchlist,
  clearWatchlist,
  updateFullWatchlist,
} = watchlistSlice.actions;

export default watchlistSlice.reducer;

export const getWatchlist = (state) => state.watchlist.watchlist;

export const getTotalWatchlistQuantity = (state) => {
  return state.watchlist.watchlist.length;
}

export const checkIsItemInWatchlist = (id) => {
  return (state) => {
    return Boolean(state.watchlist.watchlist.find((item) => item.id === id))
  }
}