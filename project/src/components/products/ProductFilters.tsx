import React from 'react';

const ProductFilters: React.FC = () => {
  return (
    <div className="pt-4 mt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Price Range</h3>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Min"
            className="input py-2 w-full"
          />
          <span className="text-gray-500">-</span>
          <input
            type="text"
            placeholder="Max"
            className="input py-2 w-full"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
        <select className="input py-2 w-full">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="beauty">Beauty</option>
          <option value="home">Home & Living</option>
          <option value="baby">Mother & Baby</option>
          <option value="sports">Sports & Outdoors</option>
          <option value="toys">Toys & Games</option>
          <option value="automotive">Automotive</option>
        </select>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <input
                id={`rating-${rating}`}
                type="checkbox"
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label htmlFor={`rating-${rating}`} className="ml-2 text-sm text-gray-700">
                {rating} Stars & Up
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Shipped From</h3>
        <div className="space-y-2">
          {['Local', 'Overseas'].map((location) => (
            <div key={location} className="flex items-center">
              <input
                id={`location-${location}`}
                type="checkbox"
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label htmlFor={`location-${location}`} className="ml-2 text-sm text-gray-700">
                {location}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Shops</h3>
        <div className="space-y-2">
          {['Shopee Mall', 'Official Store', 'Preferred', 'Regular'].map((shop) => (
            <div key={shop} className="flex items-center">
              <input
                id={`shop-${shop}`}
                type="checkbox"
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label htmlFor={`shop-${shop}`} className="ml-2 text-sm text-gray-700">
                {shop}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Other Filters</h3>
        <div className="space-y-2">
          {['Free Shipping', 'Promotions', 'With Installment'].map((filter) => (
            <div key={filter} className="flex items-center">
              <input
                id={`filter-${filter}`}
                type="checkbox"
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label htmlFor={`filter-${filter}`} className="ml-2 text-sm text-gray-700">
                {filter}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="md:col-span-3 flex justify-end space-x-4 pt-4 border-t border-gray-200">
        <button className="btn btn-outline">Reset</button>
        <button className="btn btn-primary">Apply Filters</button>
      </div>
    </div>
  );
};

export default ProductFilters;