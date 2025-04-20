import React from 'react';
import { Star, TrendingUp, Bookmark } from 'lucide-react';

const PopularProducts: React.FC = () => {
  // Mock data
  const products = [
    {
      id: 1,
      name: 'Xiaomi Redmi Note 10 Pro',
      category: 'Electronics',
      price: 'Rp3,599,000',
      rating: 4.8,
      sales: 12500,
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Skechers Sport Women\'s Sneaker',
      category: 'Fashion',
      price: 'Rp799,000',
      rating: 4.7,
      sales: 8750,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Innisfree Green Tea Serum',
      category: 'Beauty',
      price: 'Rp299,000',
      rating: 4.9,
      sales: 7200,
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="card overflow-hidden">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Popular Products</h3>
          <button className="text-sm text-primary-600 hover:text-primary-700">View all</button>
        </div>
      </div>
      <ul className="divide-y divide-gray-200">
        {products.map((product) => (
          <li key={product.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 h-16 w-16 rounded-md overflow-hidden">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                <div className="flex items-center mt-1">
                  <span className="badge badge-primary mr-2">{product.category}</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <TrendingUp className="h-4 w-4 text-success-500 mr-1" />
                  <span>{product.sales.toLocaleString()} sales</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium text-gray-900">{product.price}</span>
                <button className="mt-2 p-1 text-gray-400 hover:text-primary-600 rounded-full">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularProducts;