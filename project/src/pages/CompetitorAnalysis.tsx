import React, { useState } from 'react';
import { Search, Filter, PlusCircle, ChevronDown, ShoppingBag, Star, Users, DollarSign, BarChart2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CompetitorData {
  id: number;
  name: string;
  username: string;
  type: string;
  rating: number;
  followers: number;
  products: number;
  avgPrice: string;
  performance: 'up' | 'down' | 'stable';
  performanceValue: number;
  logo: string;
}

const CompetitorAnalysis: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCompetitor, setSelectedCompetitor] = useState<CompetitorData | null>(null);
  
  // Mock data for competitors
  const competitors: CompetitorData[] = [
    {
      id: 1,
      name: 'Xiaomi Official Store',
      username: 'xiaomi.official',
      type: 'Official Store',
      rating: 4.9,
      followers: 1250000,
      products: 124,
      avgPrice: 'Rp2,850,000',
      performance: 'up',
      performanceValue: 15,
      logo: 'https://images.pexels.com/photos/1342460/pexels-photo-1342460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Samsung Indonesia',
      username: 'samsung.id',
      type: 'Official Store',
      rating: 4.8,
      followers: 980000,
      products: 156,
      avgPrice: 'Rp4,250,000',
      performance: 'up',
      performanceValue: 8,
      logo: 'https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Phone Accessories Shop',
      username: 'accessories.world',
      type: 'Regular',
      rating: 4.7,
      followers: 320000,
      products: 568,
      avgPrice: 'Rp125,000',
      performance: 'up',
      performanceValue: 24,
      logo: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Apple Premium Reseller',
      username: 'apple.premium',
      type: 'Preferred',
      rating: 4.9,
      followers: 875000,
      products: 89,
      avgPrice: 'Rp12,500,000',
      performance: 'stable',
      performanceValue: 2,
      logo: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      name: 'Nike Indonesia',
      username: 'nike.id',
      type: 'Official Store',
      rating: 4.8,
      followers: 1100000,
      products: 245,
      avgPrice: 'Rp1,250,000',
      performance: 'up',
      performanceValue: 12,
      logo: 'https://images.pexels.com/photos/5710081/pexels-photo-5710081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      name: 'Beauty Secret Shop',
      username: 'beauty.secret',
      type: 'Regular',
      rating: 4.6,
      followers: 245000,
      products: 378,
      avgPrice: 'Rp175,000',
      performance: 'down',
      performanceValue: 5,
      logo: 'https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  
  // Mock data for performance chart
  const performanceData = [
    { month: 'Jan', Sales: 4000, Followers: 2400, Products: 100 },
    { month: 'Feb', Sales: 3000, Followers: 2210, Products: 130 },
    { month: 'Mar', Sales: 9800, Followers: 2290, Products: 110 },
    { month: 'Apr', Sales: 3908, Followers: 2000, Products: 90 },
    { month: 'May', Sales: 4800, Followers: 2181, Products: 120 },
    { month: 'Jun', Sales: 3800, Followers: 2500, Products: 110 },
    { month: 'Jul', Sales: 4300, Followers: 2200, Products: 140 },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search logic here
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleCompetitorSelect = (competitor: CompetitorData) => {
    setSelectedCompetitor(competitor);
  };

  const getPerformanceBadge = (performance: 'up' | 'down' | 'stable') => {
    switch (performance) {
      case 'up':
        return <span className="badge badge-success">Growing</span>;
      case 'down':
        return <span className="badge badge-error">Declining</span>;
      case 'stable':
        return <span className="badge badge-secondary">Stable</span>;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Competitor Analysis</h1>
        <p className="mt-1 text-sm text-gray-500">
          Track and analyze your competitors on Shopee
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
                placeholder="Search for a competitor by name or username..."
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
                <PlusCircle className="h-5 w-5 mr-2" />
                Add Competitor
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
            <div className="pt-4 mt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Store Type</h3>
                <select className="input py-2 w-full">
                  <option value="">All Types</option>
                  <option value="official">Official Store</option>
                  <option value="preferred">Preferred</option>
                  <option value="regular">Regular</option>
                </select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Rating</h3>
                <select className="input py-2 w-full">
                  <option value="">Any Rating</option>
                  <option value="4.5">4.5 & Above</option>
                  <option value="4">4.0 & Above</option>
                  <option value="3.5">3.5 & Above</option>
                </select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Performance</h3>
                <select className="input py-2 w-full">
                  <option value="">All Performance</option>
                  <option value="up">Growing</option>
                  <option value="stable">Stable</option>
                  <option value="down">Declining</option>
                </select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
                <select className="input py-2 w-full">
                  <option value="">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="beauty">Beauty</option>
                  <option value="home">Home & Living</option>
                </select>
              </div>
            </div>
          )}
        </form>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="card overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium">Competitors</h3>
              <p className="text-sm text-gray-500 mt-1">
                Select a competitor to see detailed analysis
              </p>
            </div>
            <div className="divide-y divide-gray-200 max-h-[600px] overflow-auto">
              {competitors.map((competitor) => (
                <div
                  key={competitor.id}
                  className={`p-4 hover:bg-gray-50 cursor-pointer ${
                    selectedCompetitor?.id === competitor.id ? 'bg-gray-50' : ''
                  }`}
                  onClick={() => handleCompetitorSelect(competitor)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                      <img
                        src={competitor.logo}
                        alt={competitor.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 line-clamp-1">{competitor.name}</p>
                      <p className="text-sm text-gray-500">@{competitor.username}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs badge badge-primary mr-2">{competitor.type}</span>
                        {getPerformanceBadge(competitor.performance)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          {selectedCompetitor ? (
            <div>
              <div className="card p-5 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-16 w-16 rounded-full overflow-hidden">
                    <img
                      src={selectedCompetitor.logo}
                      alt={selectedCompetitor.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-gray-900">{selectedCompetitor.name}</h2>
                      <div>
                        {getPerformanceBadge(selectedCompetitor.performance)}
                      </div>
                    </div>
                    <p className="text-gray-500">@{selectedCompetitor.username}</p>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span>{selectedCompetitor.rating}/5.0</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-500 mr-1" />
                        <span>{(selectedCompetitor.followers / 1000000).toFixed(1)}M followers</span>
                      </div>
                      <div className="flex items-center">
                        <ShoppingBag className="h-4 w-4 text-gray-500 mr-1" />
                        <span>{selectedCompetitor.products} products</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-gray-500 mr-1" />
                        <span>Avg: {selectedCompetitor.avgPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="card p-5">
                  <h3 className="text-base font-medium mb-2">Performance Overview</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Sales Growth</span>
                        <span className="text-success-600">+{selectedCompetitor.performanceValue}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-success-500 h-2 rounded-full"
                          style={{ width: `${selectedCompetitor.performanceValue * 5}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Follower Growth</span>
                        <span className="text-success-600">+12%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-success-500 h-2 rounded-full"
                          style={{ width: '60%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Review Sentiment</span>
                        <span className="text-success-600">+8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-success-500 h-2 rounded-full"
                          style={{ width: '40%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Product Variety</span>
                        <span className="text-warning-600">+3%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-warning-500 h-2 rounded-full"
                          style={{ width: '15%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-5">
                  <h3 className="text-base font-medium mb-2">Strengths & Weaknesses</h3>
                  <div className="space-y-2">
                    <div className="rounded-md bg-success-50 p-2">
                      <p className="text-sm text-success-800 font-medium">Strengths</p>
                      <ul className="mt-1 text-xs text-success-700 list-disc list-inside">
                        <li>Strong brand recognition</li>
                        <li>High product quality ratings</li>
                        <li>Excellent customer service</li>
                        <li>Fast shipping times</li>
                      </ul>
                    </div>
                    <div className="rounded-md bg-error-50 p-2">
                      <p className="text-sm text-error-800 font-medium">Weaknesses</p>
                      <ul className="mt-1 text-xs text-error-700 list-disc list-inside">
                        <li>Higher price points</li>
                        <li>Limited product customization</li>
                        <li>Fewer promotional events</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Performance Trends</h3>
                  <select className="input py-1 px-3 text-sm">
                    <option>Last 7 months</option>
                    <option>Last 12 months</option>
                    <option>YTD</option>
                  </select>
                </div>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={performanceData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          border: '1px solid #f0f0f0',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="Sales"
                        stroke="#EE4D2D"
                        activeDot={{ r: 8 }}
                        strokeWidth={2}
                      />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="Followers"
                        stroke="#1A94FF"
                        strokeWidth={2}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="Products"
                        stroke="#10B981"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="card overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-medium">Top Products</h3>
                  <button className="text-sm text-primary-600 hover:text-primary-700">View All</button>
                </div>
                <div className="divide-y divide-gray-200">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="p-4 hover:bg-gray-50">
                      <div className="flex">
                        <div className="flex-shrink-0 h-16 w-16 rounded-md overflow-hidden">
                          <img
                            src={`https://images.pexels.com/photos/${1000000 + index * 100}/pexels-photo-${1000000 + index * 100}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                            alt={`Product ${index}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="text-sm font-medium text-gray-900">Product Name {index}</h4>
                          <div className="flex items-center mt-1 text-xs text-gray-500">
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-400" />
                              <span className="ml-1">{4.5 + index * 0.1}</span>
                            </div>
                            <span className="mx-2">•</span>
                            <span>{1000 * index} sold</span>
                          </div>
                          <div className="mt-1 flex items-center">
                            <span className="text-sm font-medium text-primary-600">Rp{1500000 - index * 200000}</span>
                            <button className="ml-auto text-xs text-primary-600 border border-primary-300 rounded-md px-2 py-1 hover:bg-primary-50">
                              Compare
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="card p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
              <BarChart2 className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Competitor</h3>
              <p className="text-gray-500 max-w-md">
                Choose a competitor from the list to view detailed analysis including performance metrics, strengths and weaknesses, and top products.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetitorAnalysis;