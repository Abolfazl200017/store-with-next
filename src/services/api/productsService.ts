import { AxiosResponse } from 'axios';
import axiosInstance from '@/lib/axios';
import { API_ENDPOINTS } from './endpoints';
import { Product } from './types';

export const productsService = {
  getAllProducts: async () => {
    const res: AxiosResponse<Product[]> = await axiosInstance.get(API_ENDPOINTS.PRODUCTS.BASE);
    console.log('res', res)
    return { props: { ...res } }
  }
}