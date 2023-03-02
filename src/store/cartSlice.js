const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      state.cartItems.push(payload);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload.id,
      );
    },
    updateItemQuantity: (state, action) => {
      const {id, qty} = action.payload;
      const foundItem = state.cartItems.find(data => data.id === id);
      if (foundItem) {
        foundItem.qty = qty;
      }
    },
  },
});

export const {addToCart, updateItemQuantity, removeItem} = cartSlice.actions;

export default cartSlice.reducer;
