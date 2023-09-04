import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  products: {
    id: number;
    quantity: number;
    title: string;
    price: number;
    image: string;
  }[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const product = action.payload;
      const existingProduct = state.products.find(
        (prod) => prod.id === product.id
      );
      if (!existingProduct) {
        state.products.push({
          id: product.id,
          quantity: product.quantity || 1,
          price: product.price,
          title: product.title,
          image: product.image,
        });
      } else {
        existingProduct.quantity += product.quantity || 1;
      }
      state.totalQuantity += product.quantity || 1;
      state.totalPrice += product.price;
    },

    removeProduct(state, action) {
      const id = action.payload;
      const existingProduct = state.products.find((prod) => prod.id === id);
      if (existingProduct && existingProduct.quantity === 1) {
        state.products = state.products.filter((prod) => prod.id !== id);
      } else {
        existingProduct!.quantity--;
      }
      state.totalQuantity--;
      state.totalPrice -= state.totalPrice > 0 ? existingProduct!.price : 0;
    },
    clearCart(state) {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
