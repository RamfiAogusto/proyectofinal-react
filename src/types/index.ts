export interface Plant {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'Interior' | 'Exterior' | 'Suculentas';
  description: string;
}

export interface CartItem {
  id: string;
  plant: Plant;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
} 