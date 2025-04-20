import React, { useState, useEffect } from 'react';
import { Search, Filter, SortDesc, Grid, List, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import ProductCard from '../components/products/ProductCard';
import ProductRow from '../components/products/ProductRow';
import ProductFilters from '../components/products/ProductFilters';
import { searchProducts } from '../lib/api';

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

const ProductSearch: React.FC = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
    if (!session) {
      setError('Please sign in to search products');
    }
  };
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (!isAuthenticated) {
      setError('Please sign in to search products');
      navigate('/login');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const results = await searchProducts(searchQuery);
      setProducts(results);
    } catch (err) {
      if (err instanceof Error && err.message === 'Not authenticated') {
        setError('Please sign in to search products');
        navigate('/login');
      } else {
        setError('Failed to fetch products. Please try again.');
      }
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Product Search</h1>
        <p className="mt-1 text-sm text-gray-500">
          Search and analyze Shopee products
        </p>
      </div>

      <div className="card p-5 mb-6">
        <form onSubmit={handleSearch}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="input pl-10 py-3 w-full"
                placeholder="Search products by name, brand, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                className="btn btn-outline py-3 flex items-center"
                onClick={toggleFilters}
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
              <button
                type="submit"
                className="btn btn-primary py-3 flex-shrink-0"
                disabled={loading || !isAuthenticated}
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>
        </form>

        {showFilters && <ProductFilters />}
      </div>

      {error && (
        <div className="bg-error-50 border border-error-200 text-error-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <div className="card mb-6">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="mb-3 sm:mb-0">
            <span className="text-sm text-gray-700">
              <strong>{products.length}</strong> products found
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-2">Sort by:</span>
              <div className="relative">
                <select className="input py-1 pr-8 pl-2 text-sm appearance-none">
                  <option>Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Most Popular</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className={`p-1.5 rounded ${
                  viewMode === 'grid' ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <Grid className="h-5 w-5 text-gray-600" />
              </button>
              <button
                className={`p-1.5 rounded ${
                  viewMode === 'list' ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <List className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-500">Searching products...</p>
          </div>
        ) : products.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {products.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))}
            </div>
          )
        ) : (
          <div className="p-8 text-center">
            <div className="mx-auto h-12 w-12 text-gray-400">
              <Search className="h-full w-full" />
            </div>
            <h3 className="mt-2 text-base font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}

        {products.length > 0 && (
          <div className="p-4 border-t border-gray-200 flex justify-center">
            <nav className="flex items-center">
              <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50">
                Previous
              </button>
              <div className="mx-2 flex">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 mx-1 flex items-center justify-center rounded-md ${
                      page === 1
                        ? 'bg-primary-50 text-primary-600 border border-primary-300'
                        : 'border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;