import React, { useState } from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search logic here
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <Link to="/" className="flex-shrink-0 flex items-center md:hidden">
              <div className="flex items-center text-primary-600 font-bold text-xl">
                <span className="text-primary-600">Shopee</span>
                <span className="text-gray-900">Research</span>
              </div>
            </Link>
          </div>
          
          <div className="flex-1 max-w-3xl mx-auto px-2 md:px-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="input pl-10 py-2 w-full"
                  placeholder="Search products, keywords, or competitors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>
          
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-primary-600"></span>
            </button>
            
            <div className="ml-3 relative">
              <div>
                <button className="flex items-center max-w-xs rounded-full text-sm focus:outline-none focus:shadow-solid">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                    <User className="h-5 w-5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;