
import React from 'react';
import StoreHeader from '../components/StoreHeader';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductSlider from '../components/ProductSlider';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <StoreHeader />
      <main className="flex-1">
        <Hero />
        <Categories />
        <ProductSlider />
        
        {/* Why choose us section */}
        <section className="py-20 bg-emerald-900 text-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-700">
                🚀
              </div>
              <h3 className="text-xl font-bold">توصيل سريع</h3>
              <p className="text-emerald-100/60 text-sm">نضمن لك وصول طلبك في غضون 24-48 ساعة لجميع مدن المملكة الرئيسية.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-700">
                🔒
              </div>
              <h3 className="text-xl font-bold">دفع آمن</h3>
              <p className="text-emerald-100/60 text-sm">أحدث تقنيات التشفير لضمان سرية وأمن بياناتك البنكية وخصوصيتك.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-700">
                💎
              </div>
              <h3 className="text-xl font-bold">جودة مضمونة</h3>
              <p className="text-emerald-100/60 text-sm">جميع منتجاتنا تخضع لفحص دقيق لضمان أعلى مستويات الجودة والأصالة.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
