
import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { useApp } from '../store';
import { Search, Mail, Phone, Calendar } from 'lucide-react';

const AdminCustomers: React.FC = () => {
  const { customers } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-10">
          <h1 className="text-2xl font-black text-slate-800">إدارة العملاء</h1>
          <p className="text-slate-500 text-sm mt-1">قائمة بجميع العملاء المسجلين وسجل نشاطاتهم</p>
        </header>

        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 mb-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="ابحث عن اسم، بريد إلكتروني، أو رقم هاتف..." 
              className="w-full bg-slate-50 border-none rounded-xl py-3 pr-10 pl-4 text-sm focus:ring-2 focus:ring-emerald-500"
            />
            <Search className="absolute right-3 top-3.5 text-slate-400 w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer) => (
            <div key={customer.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-xl font-black text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {customer.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{customer.name}</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">ID: {customer.id}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <Mail className="w-4 h-4 text-emerald-500" />
                  {customer.email}
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  {customer.phone}
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <Calendar className="w-4 h-4 text-emerald-500" />
                  عضو منذ: {customer.joinDate}
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-50 flex gap-2">
                <button className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-600 py-2 rounded-xl text-xs font-bold transition-all">الملف الشخصي</button>
                <button className="bg-red-50 hover:bg-red-100 text-red-500 px-4 py-2 rounded-xl transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminCustomers;
