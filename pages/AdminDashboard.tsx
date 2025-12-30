
import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { useApp } from '../store';
import { 
  ShoppingBag, 
  Users, 
  Package, 
  TrendingUp,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const AdminDashboard: React.FC = () => {
  const { products, orders, customers } = useApp();

  const totalSales = orders.reduce((acc, curr) => acc + curr.total, 0);

  const stats = [
    { title: 'إجمالي المنتجات', value: products.length, icon: <Package className="text-blue-500" />, trend: '+12%', color: 'bg-blue-50' },
    { title: 'إجمالي الطلبات', value: orders.length, icon: <ShoppingBag className="text-emerald-500" />, trend: '+5%', color: 'bg-emerald-50' },
    { title: 'إجمالي العملاء', value: customers.length, icon: <Users className="text-amber-500" />, trend: '+18%', color: 'bg-amber-50' },
    { title: 'إجمالي المبيعات', value: `${totalSales} ر.س`, icon: <TrendingUp className="text-purple-500" />, trend: '+24%', color: 'bg-purple-50' },
  ];

  const data = [
    { name: 'السبت', sales: 4000 },
    { name: 'الأحد', sales: 3000 },
    { name: 'الأثنين', sales: 2000 },
    { name: 'الثلاثاء', sales: 2780 },
    { name: 'الأربعاء', sales: 1890 },
    { name: 'الخميس', sales: 2390 },
    { name: 'الجمعة', sales: 3490 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-black text-slate-800">نظرة عامة</h1>
            <p className="text-slate-500 text-sm mt-1">مرحباً بك، إليك ملخص أداء متجرك اليوم</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">تحميل التقرير</button>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-700 transition-all">تخصيص اللوحة</button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                  {stat.icon}
                </div>
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-black bg-emerald-50 px-2 py-1 rounded-lg">
                  <ArrowUpRight className="w-3 h-3" />
                  {stat.trend}
                </div>
              </div>
              <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider">{stat.title}</h3>
              <p className="text-2xl font-black text-slate-800 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Chart */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-lg text-slate-800">إحصائيات المبيعات الأسبوعية</h3>
              <select className="bg-slate-50 border-none rounded-lg text-xs font-bold text-slate-500 py-2 pr-8 pl-3">
                <option>آخر 7 أيام</option>
                <option>آخر 30 يوم</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-lg text-slate-800">آخر الطلبات</h3>
              <button className="text-emerald-600 text-xs font-bold hover:underline">المزيد</button>
            </div>
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-800">{order.customerName}</p>
                      <p className="text-[10px] text-slate-400 font-bold">{order.date}</p>
                    </div>
                  </div>
                  <p className="font-black text-sm text-emerald-600">{order.total} ر.س</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
