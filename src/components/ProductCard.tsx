import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { Plant } from '../types';
import { RootState } from '../store';

interface ProductCardProps {
  plant: Plant;
}

const ProductCard = ({ plant }: ProductCardProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const isInCart = cartItems.some(item => item.id === plant.id);
  
  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={plant.image} 
        alt={plant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {plant.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          {plant.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            €{plant.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              isInCart 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-primary text-white hover:bg-secondary'
            }`}
            aria-label={`Añadir ${plant.name} al carrito`}
          >
            {isInCart ? 'Añadido' : 'Añadir al carrito'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 