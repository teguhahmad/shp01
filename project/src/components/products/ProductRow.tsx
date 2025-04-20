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

interface ProductRowProps {
  product: ProductData;
}

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
  return (
    <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center hover:bg-gray-50">
      <div className="relative mb-4 sm:mb-0 sm:mr-4">
        <div className="h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        {product.badge && (
          <span className="absolute top-1 left-1 badge badge-primary text-xs uppercase">
            {product.badge}
          </span>
        )}
        {product.discount && (
          <div className="absolute bottom-1 left-1 badge bg-primary-600 text-white text-xs">
            -{product.discount}
          </div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <div className="mt-1 flex items-center text-sm">
          <div className="flex items-center text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-gray-600">{product.rating}</span>
          </div>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-gray-500">{product.reviews} reviews</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-gray-500">{product.sold} sold</span>
        </div>
        <div className="mt-2 flex items-baseline">
          <span className="text-lg font-semibold text-primary-600">{product.price}</span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
          )}
        </div>
      </div>
      
      <div className="flex mt-4 sm:mt-0 space-x-2">
        <button className="p-1.5 bg-white rounded-full text-gray-500 hover:text-primary-600 border border-gray-200">
          <Bookmark className="h-5 w-5" />
        </button>
        <button className="p-1.5 bg-white rounded-full text-gray-500 hover:text-primary-600 border border-gray-200">
          <BarChart2 className="h-5 w-5" />
        </button>
        <button className="btn btn-primary py-1.5 px-3 text-sm">
          <ShoppingCart className="h-4 w-4 mr-1" />
          Analyze
        </button>
      </div>
    </div>
  );
};

export default ProductRow;