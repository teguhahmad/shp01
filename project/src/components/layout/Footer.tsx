import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:justify-between md:space-y-0">
          <div className="text-gray-500 text-sm">
            © {currentYear} Shopee Research Tool. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">Help</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;