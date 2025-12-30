
import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { useApp } from '../store';
// Add Package to the imports from lucide-react
import { Plus, Search, MoreHorizontal, Edit, Trash2, X, Package } from 'lucide-react';
import { Product } from '../types';

const AdminProducts: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct, categories } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    category: categories[0]?.name || '',
    stock: 0,
    image: 'https://picsum.photos/seed/new/400/400',
    description: ''
  });

  const handleOpenModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({ ...product });
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        price: 0,
        category: categories[0]?.name || '',
        stock: 0,
        image: 'https://picsum.photos/seed/new/400/400',
        description: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct({ ...formData, id: editingProduct.id });
    } else {
      addProduct(formData);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-2xl font-black text-slate-800">إدارة المنتجات</h1>
            <p className="text-slate-500 text-sm mt-1">عرض وتعديل وإضافة منتجات جديدة للمتجر</p>
          </div>
          <button 
            onClick={() => handleOpenModal()}
            className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
          >
            <Plus className="w-5 h-5" />
            إضافة منتج جديد
          </button>
        </header>

        {/* Filters & Search */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="ابحث عن اسم المنتج، السعر، أو الكود..." 
              className="w-full bg-slate-50 border-none rounded-xl py-2 pr-10 pl-4 text-sm focus:ring-2 focus:ring-emerald-500"
            />
            <Search className="absolute right-3 top-2.5 text-slate-400 w-4 h-4" />
          </div>
          <select className="bg-slate-50 border-none rounded-xl py-2 pr-8 pl-4 text-sm font-bold text-slate-600 w-full md:w-48">
            <option>جميع الفئات</option>
            {categories.map(c => <option key={c.id}>{c.name}</option>)}
          </select>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-black">
                <th className="px-6 py-4">المنتج</th>
                <th className="px-6 py-4">الفئة</th>
                <th className="px-6 py-4">السعر</th>
                <th className="px-6 py-4">المخزون</th>
                <th className="px-6 py-4">الحالة</th>
                <th className="px-6 py-4">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={product.image} className="w-10 h-10 rounded-xl object-cover" alt="" />
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{product.name}</p>
                        <p className="text-[10px] text-slate-400">ID: {product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-600">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-black text-emerald-600">{product.price} ر.س</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-600">{product.stock} ق</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black ${
                      product.stock > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {product.stock > 0 ? 'متوفر' : 'نفذ'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleOpenModal(product)}
                        className="p-2 hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => deleteProduct(product.id)}
                        className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {products.length === 0 && (
            <div className="py-20 text-center text-slate-400">
              <Package className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>لا يوجد منتجات لعرضها</p>
            </div>
          )}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-xl font-black text-slate-800">
                  {editingProduct ? 'تعديل منتج' : 'إضافة منتج جديد'}
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 mr-2">اسم المنتج</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 mr-2">السعر (ر.س)</label>
                    <input 
                      type="number" 
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                      className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 mr-2">الفئة</label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-emerald-500 font-bold"
                    >
                      {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 mr-2">المخزون (الكمية)</label>
                    <input 
                      type="number" 
                      required
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: Number(e.target.value)})}
                      className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-500 mr-2">رابط صورة المنتج</label>
                    <input 
                      type="text" 
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-emerald-500 text-xs"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-500 mr-2">وصف المنتج</label>
                    <textarea 
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                </div>
                <div className="mt-10 flex gap-4">
                  <button className="flex-1 bg-emerald-600 text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all">
                    {editingProduct ? 'حفظ التعديلات' : 'إضافة المنتج'}
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 bg-slate-100 text-slate-500 py-4 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminProducts;
