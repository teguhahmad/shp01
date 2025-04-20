import React, { useState } from 'react';
import { ChevronDown, TrendingUp, ArrowUp, ArrowDown, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const TrendAnalysis: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [category, setCategory] = useState('all');
  
  // Mock data for the category trend chart
  const categoryTrendData = [
    { name: 'Jan', Electronics: 4000, Fashion: 2400, Beauty: 2400, Home: 1800 },
    { name: 'Feb', Electronics: 3000, Fashion: 1398, Beauty: 2210, Home: 2000 },
    { name: 'Mar', Electronics: 2000, Fashion: 9800, Beauty: 2290, Home: 2300 },
    { name: 'Apr', Electronics: 2780, Fashion: 3908, Beauty: 2000, Home: 2100 },
    { name: 'May', Electronics: 1890, Fashion: 4800, Beauty: 2181, Home: 2500 },
    { name: 'Jun', Electronics: 2390, Fashion: 3800, Beauty: 2500, Home: 2700 },
    { name: 'Jul', Electronics: 3490, Fashion: 4300, Beauty: 2100, Home: 2800 },
  ];
  
  // Mock data for the trending keywords pie chart
  const keywordData = [
    { name: 'Smartphone', value: 35 },
    { name: 'Gaming Laptop', value: 25 },
    { name: 'Wireless Earbuds', value: 15 },
    { name: 'Summer Dress', value: 10 },
    { name: 'Skin Care', value: 15 },
  ];
  
  const COLORS = ['#EE4D2D', '#1A94FF', '#10B981', '#F59E0B', '#8B5CF6'];
  
  // Mock data for trending items
  const trendingItems = [
    { 
      name: 'Smartphone',
      category: 'Electronics',
      growth: '+32%',
      isUp: true,
      avgPrice: 'Rp3,500,000',
      avgRating: 4.7,
    },
    { 
      name: 'Sneakers',
      category: 'Fashion',
      growth: '+28%',
      isUp: true,
      avgPrice: 'Rp850,000',
      avgRating: 4.5,
    },
    { 
      name: 'Beauty Serum',
      category: 'Beauty',
      growth: '+24%',
      isUp: true,
      avgPrice: 'Rp225,000',
      avgRating: 4.8,
    },
    { 
      name: 'Air Fryer',
      category: 'Home',
      growth: '+18%',
      isUp: true,
      avgPrice: 'Rp1,200,000',
      avgRating: 4.6,
    },
    { 
      name: 'Gaming Console',
      category: 'Electronics',
      growth: '-5%',
      isUp: false,
      avgPrice: 'Rp5,800,000',
      avgRating: 4.9,
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Trend Analysis</h1>
        <p className="mt-1 text-sm text-gray-500">
          Analyze market trends and discover opportunities
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="input py-2 pr-10 appearance-none"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="180d">Last 180 days</option>
              <option value="1y">Last 1 year</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
          
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input py-2 pr-10 appearance-none"
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="beauty">Beauty</option>
              <option value="home">Home & Living</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
        
        <button className="btn btn-outline py-2 flex items-center">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="card p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">Average Price</h3>
            <div className="flex items-center text-success-600">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>8.2%</span>
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">Rp1,245,000</span>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            vs Rp1,150,000 last period
          </div>
        </div>
        
        <div className="card p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">Avg. Rating</h3>
            <div className="flex items-center text-success-600">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>0.3%</span>
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">4.7</span>
            <span className="text-xl ml-1">/5</span>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            vs 4.5 last period
          </div>
        </div>
        
        <div className="card p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">Sales Volume</h3>
            <div className="flex items-center text-error-600">
              <ArrowDown className="h-4 w-4 mr-1" />
              <span>3.1%</span>
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">42,564</span>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            vs 43,928 last period
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="card p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Category Trends</h3>
            <button className="text-sm text-primary-600 hover:text-primary-700">View Details</button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={categoryTrendData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #f0f0f0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Bar dataKey="Electronics" fill="#EE4D2D" />
                <Bar dataKey="Fashion" fill="#1A94FF" />
                <Bar dataKey="Beauty" fill="#10B981" />
                <Bar dataKey="Home" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Trending Keywords</h3>
            <button className="text-sm text-primary-600 hover:text-primary-700">View All</button>
          </div>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={keywordData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {keywordData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value}%`, 'Share']}
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #f0f0f0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="card overflow-hidden mb-6">
        <div className="p-5 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Trending Items</h3>
            <button className="text-sm text-primary-600 hover:text-primary-700">View all</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg. Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg. Rating
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {trendingItems.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="font-medium text-gray-900">{item.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm flex items-center ${item.isUp ? 'text-success-600' : 'text-error-600'}`}>
                      {item.isUp ? (
                        <ArrowUp className="h-4 w-4 mr-1" />
                      ) : (
                        <ArrowDown className="h-4 w-4 mr-1" />
                      )}
                      {item.growth}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.avgPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.avgRating}/5.0</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrendAnalysis;