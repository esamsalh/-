
import React from 'react';
import { useApp } from '../store';

const Categories: React.FC = () => {
  const { categories } = useApp();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">تصفح الفئات</h2>
          <button className="text-emerald-600 font-semibold text-sm hover:underline">عرض الكل</button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="group cursor-pointer">
              <div className="bg-gray-50 rounded-3xl p-6 flex items-center justify-center text-4xl mb-3 transition-all group-hover:bg-emerald-50 group-hover:scale-105 group-hover:shadow-md border border-transparent group-hover:border-emerald-100">
                {cat.icon}
              </div>
              <p className="text-center font-bold text-gray-700 group-hover:text-emerald-700 transition-colors text-sm">
                {cat.name}
              </p>
            </div>
          ))}
          {/* Static placeholders if list is small */}
          <div className="group cursor-pointer">
            <div className="bg-gray-50 rounded-3xl p-6 flex items-center justify-center text-4xl mb-3 transition-all group-hover:bg-emerald-50 group-hover:scale-105">🎁</div>
            <p className="text-center font-bold text-gray-700 text-sm">هدايا</p>
          </div>
          <div className="group cursor-pointer">
            <div className="bg-gray-50 rounded-3xl p-6 flex items-center justify-center text-4xl mb-3 transition-all group-hover:bg-emerald-50 group-hover:scale-105">🏠</div>
            <p className="text-center font-bold text-gray-700 text-sm">المنزل</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
