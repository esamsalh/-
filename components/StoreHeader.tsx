
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, User, ShoppingBag, Search } from 'lucide-react';

const StoreHeader: React.FC = () => {
  return (
    <div className="w-full">
      {/* Motivational Bar */}
      <div className="bg-emerald-600 text-white py-2 px-4 text-center text-sm font-medium">
        ✨ شحن مجاني لجميع الطلبات فوق 300 ريال! كود الخصم: ELITE2024 ✨
      </div>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-black text-emerald-800 tracking-tighter">
            متجر <span className="text-emerald-500 underline decoration-2 underline-offset-4">النخبة</span>
          </Link>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <input 
              type="text" 
              placeholder="ابحث عن منتجك المفضل..." 
              className="w-full bg-gray-100 border-none rounded-full py-2 pr-10 pl-4 focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <a href="https://wa.me/966XXXXXXXXX" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-emerald-600">
              <Phone className="w-5 h-5" />
            </a>
            <Link to="/admin/login" className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors">
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">لوحة التحكم</span>
            </Link>
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingBag className="w-6 h-6 text-gray-800" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">0</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default StoreHeader;
