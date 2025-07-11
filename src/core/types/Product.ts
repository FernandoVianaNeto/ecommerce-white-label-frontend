export type ProductType = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category?: string;
  rating?: number;
  createdAt?: string;
  updatedAt?: string;
  isAvailable?: boolean;
  discount?: number; // Optional field for discount percentage
  tags?: string[]; // Optional field for product tags
}
