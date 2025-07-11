import api from './api';
import type { ProductType } from '../types/Product';

export async function getAllProducts(): Promise<ProductType[]> {
  const res = await api.get('/product/list');
  return res.data;
}