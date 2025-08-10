import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CategoryWithImage, Product } from "../type";

interface ProductStateType {
  products: {
    category: string;
    products: Product[];
  };
  product: Product | null;
  loading: boolean;
  error: string | null;
  categories: CategoryWithImage[];
}

const initialState: ProductStateType = {
  products: {
    category: "",
    products: [],
  },
  product: null,
  loading: false,
  error: null,
  categories: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts(state: ProductStateType) {
      state.loading = true;
    },
    setProducts(
      state: ProductStateType,
      action: PayloadAction<{
        category: string;
        products: Product[];
      }>
    ) {
      state.products.category = action.payload.category;
      state.products.products = action.payload.products;
      state.loading = false;
    },
    setProductsFailure(state: ProductStateType, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    getProduct(state: ProductStateType) {
      state.loading = true;
    },
    setProduct(state: ProductStateType, action: PayloadAction<Product | null>) {
      state.product = action.payload;
      state.loading = false;
    },
    setProductFailure(state: ProductStateType, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
      
    },
    getCategories(state: ProductStateType) {
      state.loading = true;
    },
    setCategories(
      state: ProductStateType,
      action: PayloadAction<CategoryWithImage[]>
    ) {
      state.categories = [...action.payload];
      state.loading = false;
    },
    setCategoriesFailure(state: ProductStateType, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  getProducts,
  setProducts,
  setProductsFailure,
  getProduct,
  setProduct,
  setProductFailure,
  getCategories,
  setCategories,
  setCategoriesFailure,
} = productSlice.actions;
export default productSlice.reducer;
