import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Search,
  TrendingUp,
  Key,
  Users,
  Bookmark,
  Settings,
  X,
  ShoppingBag,
  User
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface NavItem {
  name: string;
  to: string;
  icon: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  
  const navigation: NavItem[] = [
    { name: 'Dashboard', to: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Product Search', to: '/product-search', icon: <Search className="h-5 w-5" /> },
    { name: 'Trend Analysis', to: '/trend-analysis', icon: <TrendingUp className="h-5 w-5" /> },
    { name: 'Keyword Research', to: '/keyword-research', icon: <Key className="h-5 w-5" /> },
    { name: 'Competitor Analysis', to: '/competitor-analysis', icon: <Users className="h-5 w-5" /> },
    { name: 'Saved Items', to: '/saved-items', icon: <Bookmark className="h-5 w-5" /> },
    { name: 'Settings', to: '/settings', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <>
      {/* Mobile sidebar */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-gray-600 opacity-75" onClick={toggleSidebar}></div>
        
        <div className={`fixed inset-y-0 left-0 flex flex-col w-72 max-w-sm bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-primary-600" />
              <div className="ml-2 font-bold text-xl">
                <span className="text-primary-600">Shopee</span>
                <span className="text-gray-900">Research</span>
              </div>
            </div>
            <button 
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              onClick={toggleSidebar}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto pt-5 pb-4">
            <nav className="px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    location.pathname === item.to
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={toggleSidebar}
                >
                  <div className={`mr-4 ${
                    location.pathname === item.to ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-500'
                  }`}>
                    {item.icon}
                  </div>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div className="flex items-center h-16 px-4 border-b border-gray-200">
              <ShoppingBag className="h-8 w-8 text-primary-600" />
              <div className="ml-2 font-bold text-xl">
                <span className="text-primary-600">Shopee</span>
                <span className="text-gray-900">Research</span>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
              <nav className="mt-5 flex-1 px-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      location.pathname === item.to
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className={`mr-3 ${
                      location.pathname === item.to ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-500'
                    }`}>
                      {item.icon}
                    </div>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="flex-shrink-0 border-t border-gray-200 p-4">
              <div className="flex items-center">
                <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <User className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">User Account</p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;