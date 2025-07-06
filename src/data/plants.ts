import { Plant } from '../types';

export const plants: Plant[] = [
  // Plantas de Interior
  {
    id: 'pothos',
    name: 'Pothos Dorado',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1586499337985-bff7c1d33e5d?w=400&h=400&fit=crop',
    category: 'Interior',
    description: 'Planta de interior perfecta para principiantes. Purifica el aire y crece fácilmente.'
  },
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=400&h=400&fit=crop',
    category: 'Interior',
    description: 'Planta de interior con hojas grandes y características perforaciones.'
  },
  
  // Plantas de Exterior
  {
    id: 'rosales',
    name: 'Rosal Clásico',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop',
    category: 'Exterior',
    description: 'Rosal de jardín con flores aromáticas y coloridas.'
  },
  {
    id: 'lavanda',
    name: 'Lavanda Francesa',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1595496020221-0bccf1b22f88?w=400&h=400&fit=crop',
    category: 'Exterior',
    description: 'Planta aromática perfecta para jardines y patios.'
  },
  
  // Suculentas
  {
    id: 'echeveria',
    name: 'Echeveria Elegante',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop',
    category: 'Suculentas',
    description: 'Suculenta en forma de rosa, fácil cuidado y muy decorativa.'
  },
  {
    id: 'cactus',
    name: 'Cactus Barrel',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    category: 'Suculentas',
    description: 'Cactus resistente y de bajo mantenimiento, ideal para interiores.'
  }
]; 