import React from 'react';
import { Star, ShoppingCart, Bookmark, BarChart2 } from 'lucide-react';

interface ProductData {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: number;
  reviews: number;
  sold: number;
  image: string;
  badge?: string;
}

interface ProductCardProps {
  product: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 badge badge-primary uppercase">
            {product.badge}
          </span>
        )}
        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <button className="p-1.5 bg-white rounded-full text-gray-500 hover:text-primary-600 shadow-sm">
            <Bookmark className="h-5 w-5" />
          </button>
          <button className="p-1.5 bg-white rounded-full text-gray-500 hover:text-primary-600 shadow-sm">
            <BarChart2 className="h-5 w-5" />
          </button>
        </div>
        {product.discount && (
          <div className="absolute bottom-2 left-2 badge bg-primary-600 text-white">
            -{product.discount}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 h-10">{product.name}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-lg font-semibold text-primary-600">{product.price}</span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
          )}
        </div>
        <div className="mt-2 flex items-center text-sm">
          <div className="flex items-center text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-gray-600">{product.rating}</span>
          </div>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-gray-500">{product.reviews} reviews</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-gray-500">{product.sold} sold</span>
        </div>
        <div className="mt-4 flex space-x-2">
          <button className="btn btn-primary flex-1 py-1.5 text-sm">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;