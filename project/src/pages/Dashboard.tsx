import React from 'react';
import { ArrowUp, ArrowDown, TrendingUp, Users, Search, Key, Eye } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';
import TrendChart from '../components/dashboard/TrendChart';
import PopularProducts from '../components/dashboard/PopularProducts';
import RecentSearches from '../components/dashboard/RecentSearches';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Products Analyzed',
      value: '24,521',
      change: '+12.5%',
      isIncrease: true,
      icon: <Search className="h-6 w-6" />,
      color: 'primary',
    },
    {
      title: 'Top Keywords',
      value: '1,284',
      change: '+18.2%',
      isIncrease: true,
      icon: <Key className="h-6 w-6" />,
      color: 'secondary',
    },
    {
      title: 'Competitors Tracked',
      value: '342',
      change: '+5.3%',
      isIncrease: true,
      icon: <Users className="h-6 w-6" />,
      color: 'success',
    },
    {
      title: 'Market Trends',
      value: '15',
      change: '-2.4%',
      isIncrease: false,
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'warning',
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your Shopee research and analysis
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Trending Categories</h3>
              <select className="input py-1 px-2 text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <TrendChart />
          </div>
        </div>

        <div>
          <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Popular Keywords</h3>
              <button className="text-sm text-primary-600 hover:text-primary-700">See all</button>
            </div>
            <div className="space-y-2">
              {['smartphone', 'laptop gaming', 'sneakers', 'face mask', 'wireless earbuds'].map((keyword, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                  <div className="flex items-center">
                    <span className="text-gray-500 w-5">{index + 1}</span>
                    <span className="ml-2">{keyword}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs font-medium text-success-700 flex items-center">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      {Math.floor(Math.random() * 50) + 10}%
                    </span>
                    <Eye className="ml-2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <PopularProducts />
        <RecentSearches />
      </div>
    </div>
  );
};

export default Dashboard;