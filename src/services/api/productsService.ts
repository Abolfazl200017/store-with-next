import axiosInstance from '@/lib/axios';
import { API_ENDPOINTS } from './endpoints';
import { Product } from './types';
import { AxiosResponse } from 'axios';

export const productsService = {
  getAllProducts: async () => {
    try {
      const response: AxiosResponse<Product[]> = await axiosInstance.get(API_ENDPOINTS.PRODUCTS.BASE);
      return { products: response.data, error: null }
    } catch (error) {
      console.error('Error fetching data:', error);
      return { products: null, error };
    }
  }
}