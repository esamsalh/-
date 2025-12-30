
import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { useApp } from '../store';
import { Search, Eye, Download } from 'lucide-react';

const AdminOrders: React.FC = () => {
  const { orders, updateStatus } = useApp();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-amber-50 text-amber-600';
      case 'processing': return 'bg-blue-50 text-blue-600';
      case 'shipped': return 'bg-purple-50 text-purple-600';
      case 'delivered': return 'bg-emerald-50 text-emerald-600';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'قيد الانتظار';
      case 'processing': return 'جاري التجهيز';
      case 'shipped': return 'تم الشحن';
      case 'delivered': return 'تم التوصيل';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-2xl font-black text-slate-800">إدارة الطلبات</h1>
            <p className="text-slate-500 text-sm mt-1">تتبع الطلبات وتحديث حالات الشحن والتوصيل</p>
          </div>
          <button className="bg-white border border-slate-200 px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all text-slate-700">
            <Download className="w-5 h-5" />
            تصدير البيانات (Excel)
          </button>
        </header>

        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="ابحث عن رقم الطلب، اسم العميل..." 
              className="w-full bg-slate-50 border-none rounded-xl py-2 pr-10 pl-4 text-sm focus:ring-2 focus:ring-emerald-500"
            />
            <Search className="absolute right-3 top-2.5 text-slate-400 w-4 h-4" />
          </div>
          <select className="bg-slate-50 border-none rounded-xl py-2 pr-8 pl-4 text-sm font-bold text-slate-600 w-full md:w-48">
            <option>جميع الحالات</option>
            <option>قيد الانتظار</option>
            <option>تم التوصيل</option>
          </select>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-black">
                <th className="px-6 py-4">رقم الطلب</th>
                <th className="px-6 py-4">العميل</th>
                <th className="px-6 py-4">التاريخ</th>
                <th className="px-6 py-4">الإجمالي</th>
                <th className="px-6 py-4">الحالة</th>
                <th className="px-6 py-4">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-black text-slate-800">#{order.id}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-700">{order.customerName}</td>
                  <td className="px-6 py-4 text-xs text-slate-500">{order.date}</td>
                  <td className="px-6 py-4 text-sm font-black text-emerald-600">{order.total} ر.س</td>
                  <td className="px-6 py-4">
                    <select 
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value as any)}
                      className={`px-3 py-1 rounded-lg text-[10px] font-black border-none cursor-pointer focus:ring-0 ${getStatusColor(order.status)}`}
                    >
                      <option value="pending">{getStatusLabel('pending')}</option>
                      <option value="processing">{getStatusLabel('processing')}</option>
                      <option value="shipped">{getStatusLabel('shipped')}</option>
                      <option value="delivered">{getStatusLabel('delivered')}</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminOrders;
