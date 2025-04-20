import React from 'react';
import { Clock, Search, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const RecentSearches: React.FC = () => {
  // Mock data
  const searches = [
    {
      id: 1,
      query: 'iphone 13 pro max',
      date: new Date(2023, 7, 15, 14, 30),
      results: 1245,
    },
    {
      id: 2,
      query: 'adidas ultraboost',
      date: new Date(2023, 7, 14, 9, 15),
      results: 834,
    },
    {
      id: 3,
      query: 'facial cleanser',
      date: new Date(2023, 7, 13, 16, 45),
      results: 1502,
    },
    {
      id: 4,
      query: 'kitchen appliances',
      date: new Date(2023, 7, 12, 11, 20),
      results: 976,
    },
  ];

  return (
    <div className="card overflow-hidden">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Recent Searches</h3>
          <button className="text-sm text-primary-600 hover:text-primary-700">Clear all</button>
        </div>
      </div>
      <ul className="divide-y divide-gray-200">
        {searches.map((search) => (
          <li key={search.id} className="p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="p-2 bg-gray-100 rounded-full">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{search.query}</p>
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{format(search.date, 'MMM d, yyyy - h:mm a')}</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xs text-gray-500 mr-3">{search.results} results</span>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <button className="btn btn-outline w-full">View all searches</button>
      </div>
    </div>
  );
};

export default RecentSearches;