import { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { plants } from '../data/plants';
import { Plant } from '../types';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  
  const categories = ['Todas', 'Interior', 'Exterior', 'Suculentas'];
  
  const filteredPlants: Plant[] = selectedCategory === 'Todas' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras Plantas
          </h1>
          <p className="text-xl text-gray-600">
            Descubre nuestra selección de plantas de interior y exterior
          </p>
        </div>
        
        {/* Filtros por categoría */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 bg-white p-2 rounded-lg shadow-sm">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map(plant => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
        
        {filteredPlants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron plantas en esta categoría
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Products; 