import { createStore } from "vuex";
import ProductsData from "../data/ProductsData";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Product";

const store = createStore({
  state() {
    return {
      products: [] as Product[],
      cart: [] as CartItem[],
    };
  },
  getters: {
    total(state) {
      return state.cart.reduce(
        (accum, item) => accum + item.cantidad * Number.parseFloat(item.precio),
        0
      );
    },
  },
  mutations: {
    setProducts(state, payload: Product[]) {
      state.products = payload;
    },
    addToCart(state, payload: { product: Product; quantity: number }) {
      const index = state.cart.findIndex(
        (item) => item.id === payload.product.id
      );

      if (index === -1) {
        state.cart.push({ ...payload.product, cantidad: payload.quantity });
      } else {
        state.cart[index].cantidad = payload.quantity;
      }
    },
    addQuantity(state, payload: number) {
      state.cart[payload].cantidad += 1;
    },
    subtractQuantity(state, payload: number) {
      state.cart[payload].cantidad -= 1;
    },
    removeFromCart(state, index: number) {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    async getProducts(context) {
      await new Promise((resolve) => setTimeout(() => resolve(true), 200));
      context.commit("setProducts", ProductsData);
      return ProductsData;
    },
  },
});

export default store;
