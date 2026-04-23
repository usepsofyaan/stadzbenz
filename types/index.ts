export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  created_at?: string;
  updated_at?: string;
}

export interface User {
  id: string;
  email: string;
}
