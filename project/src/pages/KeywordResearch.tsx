import React, { useState } from 'react';
import { Search, Download, ArrowUp, ArrowDown, Filter, BarChart2, TrendingUp } from 'lucide-react';

interface KeywordData {
  keyword: string;
  volume: number;
  competition: string;
  competitionValue: number;
  cpc: string;
  trend: number;
  isTrendUp: boolean;
}

const KeywordResearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Mock data for keyword results
  const keywordResults: KeywordData[] = [
    {
      keyword: 'smartphone android terbaru',
      volume: 74500,
      competition: 'High',
      competitionValue: 85,
      cpc: 'Rp12,500',
      trend: 28,
      isTrendUp: true,
    },
    {
      keyword: 'iphone 13 pro max',
      volume: 60200,
      competition: 'High',
      competitionValue: 92,
      cpc: 'Rp15,300',
      trend: 12,
      isTrendUp: true,
    },
    {
      keyword: 'samsung galaxy s23',
      volume: 49800,
      competition: 'High',
      competitionValue: 88,
      cpc: 'Rp11,200',
      trend: 34,
      isTrendUp: true,
    },
    {
      keyword: 'hp gaming murah',
      volume: 38500,
      competition: 'Medium',
      competitionValue: 65,
      cpc: 'Rp8,700',
      trend: 5,
      isTrendUp: true,
    },
    {
      keyword: 'redmi note 10 pro',
      volume: 31200,
      competition: 'High',
      competitionValue: 79,
      cpc: 'Rp7,500',
      trend: 8,
      isTrendUp: false,
    },
    {
      keyword: 'oppo smartphone terbaik',
      volume: 28700,
      competition: 'Medium',
      competitionValue: 68,
      cpc: 'Rp9,800',
      trend: 15,
      isTrendUp: true,
    },
    {
      keyword: 'handphone second berkualitas',
      volume: 22400,
      competition: 'Low',
      competitionValue: 42,
      cpc: 'Rp5,200',
      trend: 6,
      isTrendUp: false,
    },
    {
      keyword: 'vivo y series terbaru',
      volume: 19800,
      competition: 'Medium',
      competitionValue: 61,
      cpc: 'Rp6,700',
      trend: 10,
      isTrendUp: true,
    },
  ];
  
  // Mock data for popular keywords by category
  const popularKeywords = {
    'Electronics': ['smartphone android', 'iphone 13', 'laptop gaming', 'headset bluetooth', 'smart tv'],
    'Fashion': ['sepatu sneakers', 'tas wanita branded', 'kemeja pria', 'celana jeans', 'dress casual'],
    'Beauty': ['serum wajah', 'masker korea', 'lipstik matte', 'foundation waterproof', 'skincare routine'],
    'Home': ['air fryer murah', 'blender portable', 'rice cooker digital', 'panci set', 'sofa minimalis'],
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search logic here
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const getCompetitionColor = (level: string) => {
    switch (level) {
      case 'High':
        return 'text-error-600';
      case 'Medium':
        return 'text-warning-600';
      case 'Low':
        return 'text-success-600';
      default:
        return 'text-gray-600';
    }
  };

  const CompetitionBar: React.FC<{ value: number }> = ({ value }) => {
    let bgColor = 'bg-success-500';
    if (value > 70) bgColor = 'bg-error-500';
    else if (value > 40) bgColor = 'bg-warning-500';
    
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${bgColor} h-2 rounded-full`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Keyword Research</h1>
        <p className="mt-1 text-sm text-gray-500">
          Discover high-performing keywords for your Shopee listings
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
                placeholder="Enter a seed keyword..."
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
              >
                Search
              </button>
            </div>
          </div>
          
          {showFilters && (
            <div className="pt-4 mt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Search Volume</h3>
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
                <h3 className="text-sm font-medium text-gray-900 mb-2">Competition</h3>
                <select className="input py-2 w-full">
                  <option value="">All Competition Levels</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Trend</h3>
                <select className="input py-2 w-full">
                  <option value="">All Trends</option>
                  <option value="up">Trending Up</option>
                  <option value="down">Trending Down</option>
                </select>
              </div>
              
              <div className="md:col-span-3 flex justify-end space-x-4 pt-4 border-t border-gray-200">
                <button className="btn btn-outline">Reset</button>
                <button className="btn btn-primary">Apply Filters</button>
              </div>
            </div>
          )}
        </form>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="lg:col-span-3">
          <div className="card overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium">Keyword Results</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {keywordResults.length} keywords found for "{searchQuery || 'smartphone'}"
                </p>
              </div>
              <button className="btn btn-outline py-2 flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Keyword
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Search Volume
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Competition
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      CPC
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trend
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {keywordResults.map((keyword, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{keyword.keyword}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{keyword.volume.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm flex flex-col gap-1">
                          <span className={getCompetitionColor(keyword.competition)}>{keyword.competition}</span>
                          <CompetitionBar value={keyword.competitionValue} />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {keyword.cpc}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm flex items-center ${keyword.isTrendUp ? 'text-success-600' : 'text-error-600'}`}>
                          {keyword.isTrendUp ? (
                            <ArrowUp className="h-4 w-4 mr-1" />
                          ) : (
                            <ArrowDown className="h-4 w-4 mr-1" />
                          )}
                          {keyword.trend}%
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Keyword Tools</h3>
            </div>
            <div className="space-y-3">
              <button className="btn btn-outline w-full flex items-center justify-start py-2">
                <BarChart2 className="h-5 w-5 mr-3" />
                Keyword Difficulty
              </button>
              <button className="btn btn-outline w-full flex items-center justify-start py-2">
                <TrendingUp className="h-5 w-5 mr-3" />
                Trend Analysis
              </button>
              <button className="btn btn-outline w-full flex items-center justify-start py-2">
                <Search className="h-5 w-5 mr-3" />
                Keyword Generator
              </button>
            </div>
          </div>
          
          <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Popular Keywords</h3>
              <select className="input py-1 text-sm text-gray-500 border-none">
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Beauty">Beauty</option>
                <option value="Home">Home</option>
              </select>
            </div>
            <div className="space-y-2">
              {popularKeywords['Electronics'].map((keyword, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                  <span className="text-sm">{keyword}</span>
                  <ArrowUp className="h-4 w-4 text-success-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordResearch;