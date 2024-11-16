import { Product } from '@/services/api/types';
import { create } from 'zustand';

type ProductWithQuantity = Product & {
  quantity: number;
};

type BasketState = {
  products: ProductWithQuantity[];
  addProduct: (product: Product, quantity: number) => void;
  updateProductQuantity: (id: string, quantity: number) => void;
  removeProduct: (id: string) => void;
  reset: () => void;
};

const useBasketStore = create<BasketState>((set) => ({
  products: [],

  addProduct: (product, quantity) =>
    set((state) => {
      const existingProduct = state.products.find((p) => p.id === product.id);
      if (existingProduct) {
        return {
          products: state.products.map((p) =>
            p.id === product.id
              ? { ...p, quantity: p.quantity + quantity }
              : p
          ),
        };
      }
      return { products: [...state.products, { ...product, quantity }] };
    }),

  updateProductQuantity: (id, quantity) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id.toString() === id ? { ...product, quantity } : product
      ),
    })),

  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id.toString() !== id),
    })),

  reset: () => {
    set(() => ({ products: [] }))
  }
}));

export default useBasketStore;
