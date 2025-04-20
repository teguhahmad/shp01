import React, { useState } from 'react';
import { Search, Filter, Trash2, Star, ShoppingBag, Users, TrendingUp, Download } from 'lucide-react';

type SavedItemType = 'product' | 'competitor' | 'keyword' | 'trend';

interface SavedItem {
  id: number;
  type: SavedItemType;
  name: string;
  date: string;
  image?: string;
  details: {
    [key: string]: string | number;
  };
}

const SavedItems: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<SavedItemType | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);
  
  // Mock data for saved items
  const savedItems: SavedItem[] = [
    {
      id: 1,
      type: 'product',
      name: 'Samsung Galaxy S23 Ultra',
      date: '2023-07-15',
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details: {
        price: 'Rp18,999,000',
        rating: 4.8,
        sold: 5200,
        category: 'Electronics',
      },
    },
    {
      id: 2,
      type: 'competitor',
      name: 'Xiaomi Official Store',
      date: '2023-07-10',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details: {
        followers: '1.25M',
        products: 124,
        rating: 4.9,
        type: 'Official Store',
      },
    },
    {
      id: 3,
      type: 'keyword',
      name: 'smartphone android terbaru',
      date: '2023-07-05',
      details: {
        volume: '74.5K',
        competition: 'High',
        trend: '+28%',
        cpc: 'Rp12,500',
      },
    },
    {
      id: 4,
      type: 'trend',
      name: 'Gaming Smartphones',
      date: '2023-07-01',
      details: {
        growth: '+32%',
        period: '90 days',
        avgPrice: 'Rp8,500,000',
        category: 'Electronics',
      },
    },
    {
      id: 5,
      type: 'product',
      name: 'Nike Air Force 1',
      date: '2023-06-25',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details: {
        price: 'Rp1,549,000',
        rating: 4.9,
        sold: 10000,
        category: 'Fashion',
      },
    },
    {
      id: 6,
      type: 'keyword',
      name: 'sepatu sneakers pria',
      date: '2023-06-20',
      details: {
        volume: '45.2K',
        competition: 'Medium',
        trend: '+15%',
        cpc: 'Rp8,200',
      },
    },
  ];
  
  const filteredItems = savedItems.filter((item) => {
    if (selectedType !== 'all' && item.type !== selectedType) {
      return false;
    }
    
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search logic here
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const getItemIcon = (type: SavedItemType) => {
    switch (type) {
      case 'product':
        return <ShoppingBag className="h-5 w-5 text-primary-600" />;
      case 'competitor':
        return <Users className="h-5 w-5 text-secondary-600" />;
      case 'keyword':
        return <Search className="h-5 w-5 text-success-600" />;
      case 'trend':
        return <TrendingUp className="h-5 w-5 text-warning-600" />;
    }
  };

  const getItemDetails = (item: SavedItem) => {
    switch (item.type) {
      case 'product':
        return (
          <div className="text-sm text-gray-500 mt-1 grid grid-cols-2 gap-x-4 gap-y-1">
            <div className="flex items-center">
              <span>Price: {item.details.price}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-3 w-3 text-yellow-500 mr-1" />
              <span>{item.details.rating}</span>
            </div>
            <div className="flex items-center">
              <span>Sold: {item.details.sold}</span>
            </div>
            <div className="flex items-center">
              <span>Category: {item.details.category}</span>
            </div>
          </div>
        );
      case 'competitor':
        return (
          <div className="text-sm text-gray-500 mt-1 grid grid-cols-2 gap-x-4 gap-y-1">
            <div className="flex items-center">
              <span>Followers: {item.details.followers}</span>
            </div>
            <div className="flex items-center">
              <span>Products: {item.details.products}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-3 w-3 text-yellow-500 mr-1" />
              <span>{item.details.rating}</span>
            </div>
            <div className="flex items-center">
              <span>Type: {item.details.type}</span>
            </div>
          </div>
        );
      case 'keyword':
        return (
          <div className="text-sm text-gray-500 mt-1 grid grid-cols-2 gap-x-4 gap-y-1">
            <div className="flex items-center">
              <span>Volume: {item.details.volume}</span>
            </div>
            <div className="flex items-center">
              <span>Competition: {item.details.competition}</span>
            </div>
            <div className="flex items-center">
              <span>Trend: {item.details.trend}</span>
            </div>
            <div className="flex items-center">
              <span>CPC: {item.details.cpc}</span>
            </div>
          </div>
        );
      case 'trend':
        return (
          <div className="text-sm text-gray-500 mt-1 grid grid-cols-2 gap-x-4 gap-y-1">
            <div className="flex items-center">
              <span>Growth: {item.details.growth}</span>
            </div>
            <div className="flex items-center">
              <span>Period: {item.details.period}</span>
            </div>
            <div className="flex items-center">
              <span>Avg. Price: {item.details.avgPrice}</span>
            </div>
            <div className="flex items-center">
              <span>Category: {item.details.category}</span>
            </div>
          </div>
        );
    }
  };

  const getTypeLabel = (type: SavedItemType) => {
    switch (type) {
      case 'product':
        return <span className="badge badge-primary">Product</span>;
      case 'competitor':
        return <span className="badge badge-secondary">Competitor</span>;
      case 'keyword':
        return <span className="badge badge-success">Keyword</span>;
      case 'trend':
        return <span className="badge badge-warning">Trend</span>;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Saved Items</h1>
        <p className="mt-1 text-sm text-gray-500">
          Access and manage your saved research items
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
                placeholder="Search in your saved items..."
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
                type="button"
                className="btn btn-outline py-3 flex items-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Export
              </button>
              <button
                type="submit"
                className="btn btn-primary py-3 flex-shrink-0"
              >
                Search
              </button>
            </div>
          </div>
          
          {showFilters && (
            <div className="pt-4 mt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Item Type</h3>
                <select
                  className="input py-2 w-full"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as SavedItemType | 'all')}
                >
                  <option value="all">All Types</option>
                  <option value="product">Products</option>
                  <option value="competitor">Competitors</option>
                  <option value="keyword">Keywords</option>
                  <option value="trend">Trends</option>
                </select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Date Range</h3>
                <div className="flex items-center space-x-4">
                  <input
                    type="date"
                    className="input py-2 w-full"
                    placeholder="From"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="date"
                    className="input py-2 w-full"
                    placeholder="To"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Sort By</h3>
                <select className="input py-2 w-full">
                  <option value="date_desc">Date (Newest First)</option>
                  <option value="date_asc">Date (Oldest First)</option>
                  <option value="name_asc">Name (A-Z)</option>
                  <option value="name_desc">Name (Z-A)</option>
                </select>
              </div>
            </div>
          )}
        </form>
      </div>
      
      <div className="card overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">Your Saved Items</h3>
            <p className="text-sm text-gray-500 mt-1">
              {filteredItems.length} items found
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="btn btn-outline py-2 flex items-center text-error-600 hover:bg-error-50 hover:text-error-700 hover:border-error-300 text-sm">
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Selected
            </button>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                  </div>
                  
                  {item.image ? (
                    <div className="flex-shrink-0 h-20 w-20 rounded-md overflow-hidden mr-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center mr-4">
                      {getItemIcon(item.type)}
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      {getTypeLabel(item.type)}
                      <span className="ml-2 text-xs text-gray-500">
                        Saved on {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className="text-base font-medium text-gray-900 mt-1">{item.name}</h4>
                    {getItemDetails(item)}
                  </div>
                  
                  <div className="ml-4 flex-shrink-0 flex flex-col space-y-2">
                    <button className="btn btn-primary py-1.5 px-3 text-sm">View</button>
                    <button className="btn btn-outline py-1.5 px-3 text-sm text-error-600 hover:bg-error-50 hover:text-error-700 hover:border-error-300">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <div className="mx-auto h-12 w-12 text-gray-400">
                <Search className="h-full w-full" />
              </div>
              <h3 className="mt-2 text-base font-medium text-gray-900">No items found</h3>
              <p className="mt-1 text-sm text-gray-500">
                We couldn't find any saved items matching your criteria.
              </p>
            </div>
          )}
        </div>
        
        {filteredItems.length > 0 && (
          <div className="p-4 border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredItems.length}</span> of <span className="font-medium">{filteredItems.length}</span> results
            </div>
            <div className="flex space-x-2">
              <button className="btn btn-outline py-2 px-4 text-sm">
                Previous
              </button>
              <button className="btn btn-outline py-2 px-4 text-sm">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedItems;