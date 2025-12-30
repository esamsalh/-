
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  BarChart3, 
  Users, 
  LogOut,
  Store
} from 'lucide-react';
import { useApp } from '../store';

const AdminSidebar: React.FC = () => {
  const { setIsAdmin } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAdmin(false);
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'الرئيسية', icon: <LayoutDashboard />, path: '/admin' },
    { name: 'المنتجات', icon: <Package />, path: '/admin/products' },
    { name: 'الطلبات', icon: <ShoppingBag />, path: '/admin/orders' },
    { name: 'التقارير', icon: <BarChart3 />, path: '/admin/reports' },
    { name: 'الزبائن', icon: <Users />, path: '/admin/customers' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 h-screen sticky top-0 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3 text-white mb-8">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center font-black text-xl">N</div>
          <div>
            <p className="font-black text-lg leading-tight">النخبة</p>
            <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">لوحة التحكم</p>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/admin'}
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                  ? 'bg-emerald-600/10 text-emerald-400 font-bold' 
                  : 'hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <span className="w-5 h-5 opacity-70 group-hover:opacity-100">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-white/5 space-y-2">
        <NavLink 
          to="/" 
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-sm"
        >
          <Store className="w-5 h-5" />
          زيارة المتجر
        </NavLink>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-400 transition-all text-sm"
        >
          <LogOut className="w-5 h-5" />
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
