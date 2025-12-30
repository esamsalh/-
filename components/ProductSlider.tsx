
import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { useApp } from '../store';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="min-w-[280px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-emerald-700 flex items-center gap-1">
          <Star className="w-3 h-3 fill-emerald-500 text-emerald-500" />
          4.8
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-emerald-600 font-bold mb-1">{product.category}</p>
        <h3 className="font-bold text-gray-800 mb-2 truncate">{product.name}</h3>
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-emerald-700 font-black text-xl">{product.price} ر.س</span>
            {product.stock < 10 && <span className="text-[10px] text-red-500 font-bold">بقي {product.stock} فقط!</span>}
          </div>
          <button className="bg-emerald-600 text-white p-2 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductSlider: React.FC = () => {
  const { products } = useApp();

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">الأكثر مبيعاً</h2>
            <p className="text-gray-500 text-sm mt-1">تسوق أحدث المنتجات التي نالت إعجاب عملائنا</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-gray-400">
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-gray-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products.length === 0 && <p className="text-center w-full text-gray-400 py-10">لا توجد منتجات حالياً</p>}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
