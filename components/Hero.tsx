
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-emerald-900 text-white py-16 px-4">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        <span className="inline-block px-4 py-1 bg-emerald-700/50 rounded-full text-xs font-bold mb-6 tracking-widest border border-emerald-500/30">
          تشكيلة شتاء 2024
        </span>
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-3xl">
          اكتشف الفخامة في كل <span className="text-emerald-400">قطعة تقتنيها</span>
        </h1>
        <p className="text-emerald-100/80 text-lg mb-10 max-w-xl leading-relaxed">
          نقدم لك مجموعة مختارة بعناية من أرقى المنتجات العالمية بجودة لا تضاهى وأسعار تنافسية. انطلق في رحلة تسوق لا تُنسى.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-emerald-900 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-all shadow-lg hover:-translate-y-1 flex items-center gap-2">
            تسوق الآن
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="bg-transparent border-2 border-emerald-500/50 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-800/50 transition-all">
            عروض اليوم
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
